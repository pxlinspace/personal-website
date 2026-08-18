<script lang="ts">
	let { title, flexGrow = 0, isContentBoxed = true, padding = '8px', children } = $props();
	import pxlin from '$lib/assets/images/pxlin.png';
</script>

<div class="outer-border bordered" style="flex-grow: {flexGrow};">
	<h1 class="bar bordered"><img src={pxlin} class="icon" alt="icon" /> {title}</h1>
	{#if isContentBoxed}
		<div class="content bordered" style="padding: {padding};">
			{@render children?.()}
		</div>
	{:else}
		{@render children?.()}
	{/if}
</div>

<style>
	.icon {
		filter: invert(32%) sepia(7%) saturate(2364%) hue-rotate(208deg) brightness(95%) contrast(87%);
		width: 16px;
		height: 16px;
		image-rendering: pixelated;
		margin-right: 3px;
	}

	.outer-border {
		background: rgb(185, 234, 255);
		margin: 12px;
		padding: 3px;
		display: flex;
		flex-direction: column;
		height: fit-content;
	}
	.bar {
		background: linear-gradient(90deg, #f4dbff 0%, #c9c9ff 100%);
		font-size: 1rem;
		font-weight: normal;
		margin: 0 0 3px 0;
		padding: 0 6px 2px 6px;
	}
	.content {
		background: white;
		flex-grow: 1;
		position: relative;
	}
</style>
