const icons = import.meta.glob('$lib/assets/images/icons/*', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

const projectThumbnails = import.meta.glob('$lib/assets/images/project_thumbnails/*', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

const art = import.meta.glob('$lib/assets/images/art/*', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

function getImageMap(images: Record<string, string>): Record<string, string> {
	return Object.fromEntries(
		Object.entries(images).map(([path, url]) => {
			const filename = path.split('/').pop() ?? '';
			const name = filename.replace(/\.[^.]+$/, '');
			return [name, url];
		})
	);
}

export const iconMap = getImageMap(icons);
export const projectThumbnailMap = getImageMap(projectThumbnails);
export const artMap = getImageMap(art);
