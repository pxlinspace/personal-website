const icons = import.meta.glob('$lib/assets/images/icons/*.png', { eager: true });

export const iconMap = Object.fromEntries(
	Object.entries(icons).map(([path, mod]) => {
		const name =
			path
				.split('/')
				.pop()
				?.replace(/\.png$/, '') ?? '';
		return [name, (mod as { default: string }).default];
	})
) as Record<string, string>;
