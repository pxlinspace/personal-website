<script lang="ts">
	import { artMap } from '$lib/imageMaps';
	import { artData } from './artData';
	import type { ArtEntry } from './artData';

	import TransparentLayer from '$lib/components/TransparentLayer.svelte';
	import Backlink from '$lib/components/Backlink.svelte';
	import Artwork from '$lib/components/Artwork.svelte';

	let selectedArtwork: ArtEntry | null = $state(null);
</script>

<svelte:head>
	<title>art &middot; pxlinspace</title>
</svelte:head>

<TransparentLayer />
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
	{#each artData as artwork}
		<Artwork
			imgSrc={artMap[artwork.name]}
			alt={artwork.alt}
			onclick={() => (selectedArtwork = artwork)}
		/>
	{/each}
</div>

{#if selectedArtwork}
	<TransparentLayer zIndex={0} opacity={0.95} isScroll={true}>
		<div class="selected-art-display">
			<img src={artMap[selectedArtwork.name]} alt={selectedArtwork.alt} />
			<p>{selectedArtwork.desc}</p>
			<p class="back-button">
				(<button onclick={() => (selectedArtwork = null)}>back to artworks</button>)
			</p>
		</div>
	</TransparentLayer>
{/if}

<style>
	.art-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 24px;
		margin: 16px;
	}

	.selected-art-display {
		max-width: 800px;
		margin: 32px auto;
		padding: 8px;
	}

	.back-button {
		font-size: 1.5rem;
		text-align: center;
	}

	.selected-art-display img {
		width: 100%;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
	}

	@media screen and (max-width: 700px) {
		.art-container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
