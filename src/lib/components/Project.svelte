<script lang="ts">
	let { href, imgSrc, title, titleColor = 'var(--foreground-color)', text } = $props();
</script>

<div class="project">
	<div class="image-frame">
		<img src={imgSrc} alt="thumbnail" />
	</div>
	<!-- <span style="color: {titleColor}">{title}</span> -
	<span class="text">{text}</span> -->
</div>

<style>
	.project {
		width: 100%;
		aspect-ratio: 16 / 9;
	}
	.image-frame {
		width: 100%;
		height: 100%;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}

	.image-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transform: scale(1);
		transition: transform 0.2s ease-in-out;
	}

	.project:hover {
		.image-frame img {
			transform: scale(1.1);
		}
	}

	.text {
		color: var(--muted-color);
	}
</style>
