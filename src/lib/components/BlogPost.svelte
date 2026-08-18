<script lang="ts">
	let { title, href, pubDate, description, imgSrc } = $props();
</script>

<a class="blog-post bordered" {href}>
	<div class="image-frame bordered">
		<img src={imgSrc} alt="blog post thumbnail" />
	</div>
	<p class="text">
		<span class="title">{title}</span>
		<span class="description">- {description} ({pubDate})</span>
	</p>
</a>

<style>
	.blog-post {
		transition: transform 0.1s ease-out;
		padding: 8px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 8px;
	}

	.text {
		margin: 0;
	}

	.title {
		margin: 0;
		color: var(--foreground-color);
	}

	.description {
		font-size: 0.75rem;
		color: var(--muted-color);
	}

	.image-frame {
		background-color: white;
		overflow: hidden;
		aspect-ratio: 4 / 3;
		max-height: 160px;
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

	.blog-post:hover {
		transform: translate(0, -5px);

		.image-frame img {
			transform: scale(1.05);
			filter: opacity(85%);
		}
	}
</style>
