<script lang="ts">
	import '../app.css';
	import FishCanvas from '$lib/components/FishCanvas.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<FishCanvas />
{@render children()}
