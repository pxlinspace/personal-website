<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import { projectThumbnailMap as thumbnails } from '$lib/imageMaps';
</script>

<svelte:head>
	<title>projects &middot; pxlinspace</title>
</svelte:head>

<p>
	( <a href="/">&lt;- back</a> )
</p>

<div class="white-overlay"></div>

<div class="project-container">
	<Project
		imgSrc={thumbnails.dreamskater}
		title="DREAMSKATER"
		titleColor="#6c0d46"
		text="A precision puzzle game with only one button - made for GMTK Game Jam 2025"
	/>
	<Project
		imgSrc={thumbnails.pixipaint}
		title="Pixipaint"
		titleColor="#6c0d46"
		text="A Picross-inspired puzzle game and also the first project I've made in next.js"
	/>
	<Project
		imgSrc={thumbnails.spadooshka}
		title="Spadooshka"
		titleColor="#6c0d46"
		text="1v1 first-person shooter focused on platforming - made for Hack Club's Juice game jam"
	/>
	<Project
		imgSrc={thumbnails.chatgpme}
		title="ChatGPMe"
		titleColor="#6c0d46"
		text="A game where you are the LLM answering peoples' prompts - Hack the North 2024 finalist"
	/>
	<Project
		imgSrc={thumbnails.spacecatadventure}
		title="Spacecat Adventure"
		titleColor="#6c0d46"
		text="A short platformer and the first game I've ever released online"
	/>
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
	.project-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	@media screen and (max-width: 700px) {
		.project-container {
			grid-template-columns: 1fr;
		}
	}
</style>
