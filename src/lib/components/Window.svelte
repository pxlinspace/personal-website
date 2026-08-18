<script lang="ts">
	let { title, flexGrow = 0, isContentBoxed = true, children } = $props();
	import pxlin from '$lib/assets/images/pxlin.png';
</script>

<div class="outer-border bordered" style="flex-grow: {flexGrow};">
	<h1 class="bar bordered"><img src={pxlin} class="icon" /> {title}</h1>
	{#if isContentBoxed}
		<div class="content bordered">
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
		margin-left: 6px;
		margin-right: 3px;
	}

	.outer-border {
		background: var(--window-color);
		margin: 12px;
		padding: 3px;
		display: flex;
		flex-direction: column;
		height: fit-content;
	}
	.bar {
		background: var(--window-bar-color);
		font-size: 1rem;
		font-weight: normal;
		margin: 0 0 3px 0;
		padding-bottom: 2px;
	}
	.content {
		background: white;
		flex-grow: 1;
		padding: 0.25rem;
		position: relative;
	}
</style>
