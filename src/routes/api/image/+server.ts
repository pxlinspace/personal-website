import type { RequestHandler } from './$types';
import { lookup } from 'dns/promises';

const ALLOWLIST = new Set(['blog.pxlin.space']);
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const TIMEOUT_MS = 10000; // 10s

function isPrivateIPv4(n: number) {
	// 10.0.0.0/8
	if ((n & 0xff000000) === 0x0a000000) return true;
	// 127.0.0.0/8
	if ((n & 0xff000000) === 0x7f000000) return true;
	// 169.254.0.0/16
	if ((n & 0xffff0000) === 0xa9fe0000) return true;
	// 172.16.0.0/12
	if ((n & 0xfff00000) === 0xac100000) return true;
	// 192.168.0.0/16
	if ((n & 0xffff0000) === 0xc0a80000) return true;
	// 100.64.0.0/10 (carrier-grade NAT)
	if ((n & 0xffc00000) === 0x64400000) return true;
	return false;
}

function ipv4ToNumber(ip: string) {
	const parts = ip.split('.').map((p) => parseInt(p, 10));
	if (parts.length !== 4 || parts.some((n) => Number.isNaN(n))) return null;
	return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
}

export const GET: RequestHandler = async ({ url, request }) => {
	const imageUrl = url.searchParams.get('url');
	if (!imageUrl) return new Response('Missing `url` query parameter', { status: 400 });

	let parsed: URL;
	try {
		parsed = new URL(imageUrl);
	} catch (e) {
		return new Response('Invalid URL', { status: 400 });
	}

	// only allow https and hosts on allowlist
	if (parsed.protocol !== 'https:')
		return new Response('Only https protocol allowed', { status: 400 });
	const hostname = parsed.hostname;
	if (!ALLOWLIST.has(hostname)) return new Response('Host not allowed', { status: 403 });

	// Resolve hostname and block private addresses
	try {
		const addrs = await lookup(hostname, { all: true });
		for (const a of addrs) {
			if (a.address && a.family === 4) {
				const n = ipv4ToNumber(a.address);
				if (n !== null && isPrivateIPv4(n)) {
					return new Response('Resolved to private IP', { status: 403 });
				}
			}
			// Note: IPv6 checks could be added here if needed.
		}
	} catch (e) {
		return new Response('DNS lookup failed', { status: 502 });
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

	try {
		const res = await fetch(imageUrl, { signal: controller.signal, redirect: 'follow' });
		clearTimeout(timeout);

		if (!res.ok) return new Response(null, { status: res.status });

		const contentType = (res.headers.get('content-type') ?? '').toLowerCase();
		if (!contentType.startsWith('image/'))
			return new Response('Remote resource is not an image', { status: 415 });

		const contentLengthHeader = res.headers.get('content-length');
		if (contentLengthHeader) {
			const len = parseInt(contentLengthHeader, 10);
			if (!Number.isNaN(len) && len > MAX_BYTES)
				return new Response('Image too large', { status: 413 });
		}

		// Stream with byte limit enforcement
		const reader = res.body?.getReader();
		if (!reader) return new Response('No response body', { status: 502 });

		let bytes = 0;
		const stream = new ReadableStream({
			async pull(controller) {
				try {
					const { done, value } = await reader.read();
					if (done) {
						controller.close();
						return;
					}
					bytes += value.byteLength;
					if (bytes > MAX_BYTES) {
						controller.error(new Error('Exceeded size limit'));
						controller.close();
						return;
					}
					controller.enqueue(value);
				} catch (err) {
					controller.error(err);
				}
			},
			cancel() {
				try {
					reader.cancel();
				} catch {}
			}
		});

		const headers = new Headers();
		headers.set('content-type', contentType);
		headers.set('cache-control', 'public, max-age=86400');
		headers.set('x-content-type-options', 'nosniff');

		return new Response(stream, { headers, status: 200 });
	} catch (e: any) {
		if (e?.name === 'AbortError') return new Response('Fetch timed out', { status: 504 });
		return new Response('Error fetching image', { status: 502 });
	} finally {
		clearTimeout(timeout);
	}
};
