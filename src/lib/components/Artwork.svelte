<script lang="ts">
	let { imgSrc } = $props();
</script>

<div class="frame bordered">
	<img src={imgSrc} alt="thumbnail" />
</div>

<style>
	.frame {
		background-color: white;
		width: 100%;
		overflow: hidden;
		aspect-ratio: 1;
	}

	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition:
			transform 0.15s ease-in-out,
			filter 0.15s linear;
	}

	.frame img:hover {
		transform: scale(1.05);
		filter: opacity(85%);
	}
</style>
