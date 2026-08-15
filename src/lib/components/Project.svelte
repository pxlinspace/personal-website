<script lang="ts">
	let { href, imgSrc, title, titleColor = 'var(--foreground-color)', text } = $props();
</script>

<a class="project" {href}>
	<div class="image-frame bordered">
		<img src={imgSrc} alt="thumbnail" />
	</div>
	<span class="title" style="color: {titleColor}">{title}</span>
	<span class="text">- {text}</span>
</a>

<style>
	.project {
		transition: transform 0.1s ease-out;
	}
	.title {
		margin: 0;
	}

	.text {
		font-size: 0.75rem;
		color: var(--muted-color);
	}

	.image-frame {
		background-color: white;
		width: 100%;
		overflow: hidden;
		margin-bottom: 8px;
		aspect-ratio: 2.5;
	}

	.image-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition:
			transform 0.15s ease-in-out,
			filter 0.15s linear;
	}

	.project:hover {
		transform: translate(0, -5px);

		.image-frame img {
			transform: scale(1.05);
			filter: opacity(85%);
		}
	}
</style>
