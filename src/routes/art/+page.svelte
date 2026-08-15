<script lang="ts">
	import Backlink from '$lib/components/Backlink.svelte';
	import Project from '$lib/components/Project.svelte';
	import { artMap as art } from '$lib/imageMaps';

	import { projectThumbnailMap as thumbnails } from '$lib/imageMaps';
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
	<img src={art.subway_angels} />
	<img src={art.blackredgirl} />
	<img src={art.balloons_around_earth} />
	<img src={art.eye_of_industrialism} />
	<img src={art.skull_spraypaint} />
	<img src={art.skull} />
	<img src={art.riko} />
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

	img {
		width: 100%;
	}

	.art-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 8px;
	}

	@media screen and (max-width: 700px) {
	}
</style>
