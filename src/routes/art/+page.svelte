<script lang="ts">
	import { artMap } from '$lib/imageMaps';
	import { artData } from './artData';
	import Backlink from '$lib/components/Backlink.svelte';
	import Artwork from '$lib/components/Artwork.svelte';
</script>

<svelte:head>
	<title>art &middot; pxlinspace</title>
</svelte:head>

<div class="white-overlay"></div>

<Backlink />

<p>
	Here's some of my digital + traditional art, as well as some of my shorter animations! An
	embarrassing amount of it is just for my middle and high school art classes, but I'll draw more
	things for myself soon!
</p>
<p>
	There's also some stuff on my <a href="https://www.instagram.com/pxlin.space">instagram</a> that I didn't
	post here cuz I lost the og file :(
</p>
<p>Click on an image to view it in full with it's description!</p>

<div class="art-container">
	{#each artData as { name }}
		<Artwork imgSrc={artMap[name]} />
	{/each}
</div>

<style>
	.white-overlay {
		background-color: rgb(255, 255, 255, 0.8);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.art-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 24px;
		margin: 16px;
	}

	@media screen and (max-width: 700px) {
		.art-container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
