<script lang="ts">
	let { opacity = 0.8, zIndex = -1, children = undefined } = $props();
</script>

<div style="--opacity: {opacity}; z-index: {zIndex};">
	{@render children?.()}
</div>

<style>
	div {
		background-color: rgb(255, 255, 255, var(--opacity));
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
