<script lang="ts">
	let { title, flexGrow = 0, isContentBoxed = true, children } = $props();
</script>

<div class="outer-border bordered" style="flex-grow: {flexGrow};">
	<h1 class="bar">{title}</h1>
	{#if isContentBoxed}
		<div class="content">
			{@render children?.()}
		</div>
	{:else}
		{@render children?.()}
	{/if}
</div>

<style>
	.outer-border {
		background: white;
		border: 3px solid var(--foreground-color);
		margin: 12px;
		padding: 3px;
		display: flex;
		flex-direction: column;
		height: fit-content;
	}
	.bar {
		background: var(--foreground-color);
		color: var(--background-color);
		font-size: 1rem;
		font-weight: normal;
		margin: 0 0 3px 0;
		padding: 0 8px 4px 8px;
	}
	.content {
		flex-grow: 1;
		border: 3px solid var(--foreground-color);
		padding: 0.25rem;
	}
</style>
