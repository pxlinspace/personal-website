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
		href="https://pxlinspace.itch.io/dreamskater"
		imgSrc={thumbnails.dreamskater}
		title="DREAMSKATER"
		titleColor="#81295E"
		text="A precision puzzle game with only one button - made for GMTK Game Jam 2025"
	/>
	<Project
		imgSrc={thumbnails.pixipaint}
		title="Pixipaint"
		titleColor="#372981"
		text="A Picross-inspired puzzle game and also the first project I've made in next.js"
	/>
	<Project
		href="https://pxlinspace.itch.io/spadooshka"
		imgSrc={thumbnails.spadooshka}
		title="Spadooshka"
		titleColor="#B972B3"
		text="1v1 first-person shooter focused on platforming - made for Hack Club's Juice game jam"
	/>
	<Project
		href="https://devpost.com/software/chatgpme"
		imgSrc={thumbnails.chatgpme}
		title="ChatGPMe"
		titleColor="#298134"
		text="A game where you are the LLM answering peoples' prompts - Hack the North 2024 finalist"
	/>
	<Project
		href="https://pxlinspace.itch.io/spacecat-adventure"
		imgSrc={thumbnails.spacecatadventure}
		title="Spacecat Adventure"
		titleColor="#CC9237"
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
		margin: 16px;
	}

	@media screen and (max-width: 700px) {
		.project-container {
			grid-template-columns: 1fr;
		}
	}
</style>
