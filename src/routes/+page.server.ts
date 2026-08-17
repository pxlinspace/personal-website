import { XMLParser } from 'fast-xml-parser';
import type { PageServerLoad } from './$types';

type RSSItem = {
	title?: string;
	link?: string;
	guid?: string;
	pubDate?: string;
	description?: string;
	enclosure?: { url?: string; type?: string; length?: string };
	[extra: string]: any;
};

type RSSChannel = {
	title?: string;
	link?: string;
	description?: string;
	item?: RSSItem | RSSItem[];
	[extra: string]: any;
};

type Post = {
	title?: string;
	link?: string;
	pubDate?: string | null;
	description?: string;
	enclosure?: { url?: string; type?: string; length?: string } | null;
};

export const load: PageServerLoad = async () => {
	const url = 'https://blog.pxlin.space/rss.xml';
	const res = await fetch(url);
	if (!res.ok) {
		return { posts: [] };
	}

	const xml = await res.text();
	const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
	const parsed: any = parser.parse(xml);

	const channel: RSSChannel | undefined = parsed?.rss?.channel;

	// Normalize channel items into an array
	const rawItems: RSSItem[] = (() => {
		const raw = channel?.item;
		if (!raw) return [];
		return Array.isArray(raw) ? raw : [raw];
	})();

	// Trim each item to only the requested fields and format pubDate as 'Mon D, YYYY'
	const pacificFormatter = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'America/Los_Angeles'
	});
	const posts: Post[] = rawItems.map((it) => {
		const enclosureRaw: any = it.enclosure ?? (it as any)['enclosure'];
		const enclosure = enclosureRaw
			? {
					url: enclosureRaw.url ?? enclosureRaw['url'],
					type: enclosureRaw.type ?? enclosureRaw['type'],
					length: enclosureRaw.length ?? enclosureRaw['length']
				}
			: null;

		const rawPub: any =
			it.pubDate ??
			(it as any)['pubDate'] ??
			(it as any)['dc:date'] ??
			(it as any)['published'] ??
			(it as any)['updated'];
		let pubDate: string | null = null;
		if (rawPub) {
			const d = new Date(rawPub);
			if (!Number.isNaN(d.getTime())) pubDate = pacificFormatter.format(d);
		}

		return {
			title: it.title ?? (it as any)['title'],
			link: it.link ?? (it as any)['link'],
			pubDate,
			description: it.description ?? (it as any)['description'],
			enclosure
		};
	});

	return { posts };
};
