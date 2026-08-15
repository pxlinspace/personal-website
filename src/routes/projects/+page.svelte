<script lang="ts">
	import Backlink from '$lib/components/Backlink.svelte';
	import Project from '$lib/components/Project.svelte';

	import { projectThumbnailMap as thumbnails } from '$lib/imageMaps';
</script>

<svelte:head>
	<title>projects &middot; pxlinspace</title>
</svelte:head>

<div class="white-overlay"></div>

<Backlink />

<p>
	Here's a list of projects I made that I think are worth showing off! This is not an exhaustive
	list of everything I've ever made. You can find more of my games on <a
		href="https://pxlinspace.itch.io/"
	>
		itch.io
	</a>.
</p>

<h2>2026</h2>
<div class="projects">
	<Project
		href="https://pxlinspace.itch.io/ticstep-3d"
		imgSrc={thumbnails.ticstep3d}
		title="TICSTEP 3D"
		titleColor="#6C6CCE"
		text="a fast-paced puzzle game with tiles that tick down - made for GMTK Game Jam 2026"
	/>
	<Project
		href="https://pxlinspace.itch.io/ghost-in-the-machine"
		imgSrc={thumbnails.ghostinthemachine}
		title="Ghost in the Machine"
		titleColor="#812525"
		text="yuri of a mech pilot and her commander - made for TOXIC YURI VN JAM 2"
	/>
	<Project
		href="https://that-blob.itch.io/smolx2"
		imgSrc={thumbnails.smolx2}
		title="smolx2"
		titleColor="#FF00DD"
		text="A unique take on Connect 4 involving magic rings - made during Hack Club's Horizons Nexus hackathon"
	/>
</div>

<h2>2025</h2>
<div class="projects">
	<Project
		href="https://pxlinspace.itch.io/dreamskater"
		imgSrc={thumbnails.dreamskater}
		title="DREAMSKATER"
		titleColor="#81295E"
		text="a precision puzzle game with only one button - made for GMTK Game Jam 2025"
	/>
	<Project
		href="https://pixipaint.pxlin.space"
		imgSrc={thumbnails.pixipaint}
		title="Pixipaint"
		titleColor="#3F3574"
		text="a Picross-inspired puzzle game and also the first project I've made in next.js (WILL NEVER BE FINISHED)"
	/>
	<Project
		href="https://pxlinspace.itch.io/spadooshka"
		imgSrc={thumbnails.spadooshka}
		title="Spadooshka"
		titleColor="#B972B3"
		text="1v1 first-person shooter focused on platforming - made for Hack Club's Juice game jam"
	/>
</div>

<h2>2024</h2>
<div class="projects">
	<Project
		href="https://devpost.com/software/chatgpme"
		imgSrc={thumbnails.chatgpme}
		title="ChatGPMe"
		titleColor="#298134"
		text="a game where you play as the LLM answering peoples' prompts - Hack the North 2024 finalist"
	/>
</div>

<h2>2023</h2>
<div class="projects">
	<Project
		href="https://pxlinspace.itch.io/spacecat-adventure"
		imgSrc={thumbnails.spacecatadventure}
		title="Spacecat Adventure"
		titleColor="#CC9237"
		text="a short platformer and the first game I've ever released online"
	/>
</div>

<style>
	h2 {
		text-align: center;
	}

	.white-overlay {
		background-color: rgb(255, 255, 255, 0.8);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin: 16px;
	}

	@media screen and (max-width: 700px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
