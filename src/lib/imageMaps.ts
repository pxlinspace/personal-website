const icons = import.meta.glob('$lib/assets/images/icons/*.png', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

const projectThumbnails = import.meta.glob('$lib/assets/images/project_thumbnails/*.png', {
	eager: true,
	import: 'default'
}) as Record<string, string>;

function getImageMap(images: Record<string, string>, ext: string = 'png'): Record<string, string> {
	return Object.fromEntries(
		Object.entries(images).map(([path, url]) => {
			const name =
				path
					.split('/')
					.pop()
					?.replace(new RegExp(`\\.${ext}$`), '') ?? '';
			return [name, url];
		})
	);
}

export const iconMap = getImageMap(icons, 'png');
export const projectThumbnailMap = getImageMap(projectThumbnails, 'png');
