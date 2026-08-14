<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import dreamskater from '$lib/assets/images/project_thumbnails/dreamskater.png';
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
		imgSrc={dreamskater}
		title="DREAMSKATER"
		titleColor="#6c0d46"
		text="A precision puzzle game with only one button - made for GMTK Game Jam 2025"
	/>
	<Project
		imgSrc={dreamskater}
		title="Spadooshka"
		titleColor="#6c0d46"
		text="1v1 first-person shooter focused on platforming - made for Hack Club's Juice game jam"
	/>
	<Project
		imgSrc={dreamskater}
		title="ChatGPMe"
		titleColor="#6c0d46"
		text="A game where you are the LLM answering peoples' prompts - Hack the North 2024 finalist"
	/>
	<Project
		imgSrc={dreamskater}
		title="Spacecat Adventure"
		titleColor="#6c0d46"
		text="A short platformer and the first game I've ever released online"
	/>
</div>

<style>
	.white-overlay {
		background-color: rgb(255, 255, 255, 0.75);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.project-container {
		display: grid;
		grid-template-columns: auto auto;
		padding: 32px;
	}
</style>
