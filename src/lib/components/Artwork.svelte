<script lang="ts">
	let { imgSrc, alt, onclick } = $props();
</script>

<button class="bordered" {onclick}>
	<img src={imgSrc} {alt} />
</button>

<style>
	button {
		padding: 0;
		background-color: white;
		width: 100%;
		overflow: hidden;
		aspect-ratio: 1;
	}

	button img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition:
			transform 0.15s ease-in-out,
			filter 0.15s linear;
	}

	button:hover img {
		transform: scale(1.05);
		filter: opacity(90%);
	}
</style>
