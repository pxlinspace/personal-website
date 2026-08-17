import { XMLParser } from 'fast-xml-parser';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const url = 'https://blog.pxlin.space/rss.xml';
	const res = await fetch(url);
	if (!res.ok) {
		return { rss: null, items: [] };
	}

	const xml = await res.text();
	const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
	const parsed = parser.parse(xml);

	const posts = parsed.rss.channel.item;

	return {
		posts
	};
};
