<script lang="ts">
	let { iconSrc, children } = $props();
</script>

<div title="coming soon!"><img src={iconSrc} alt="icon" /> {@render children()}</div>

<style>
	div {
		display: flex;
		align-items: end;
		gap: 5px;
		img {
			filter: invert(32%) sepia(7%) saturate(2364%) hue-rotate(208deg) brightness(95%) contrast(87%);
			width: 16px;
			height: 16px;
			image-rendering: pixelated;
		}
	}
</style>
