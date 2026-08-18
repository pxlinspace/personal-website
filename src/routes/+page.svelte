<script lang="ts">
	import Window from '$lib/components/Window.svelte';
	import SideLink from '$lib/components/SideLink.svelte';
	import IdiotCanvas from '$lib/components/IdiotCanvas.svelte';
	import WavySpan from '$lib/components/WavySpan.svelte';
	import Project from '$lib/components/Project.svelte';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import { iconMap, projectThumbnailMap as thumbnails } from '$lib/imageMaps';
	import me from '$lib/assets/images/me.gif';
	import InactiveSideLink from '$lib/components/InactiveSideLink.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>pxlinspace</title>
</svelte:head>

<div style="align-items: center" class="row">
	<Window title="intro" flexGrow={1}>
		<div style="position: relative; z-index: 1; margin-bottom: 60px">
			<h2>Helooo, I'm <WavySpan text="Pixelin" />! (@pxlinspace)</h2>
			<ul>
				<li>I'm an 18yo gamedev + animator from San Jose, CA</li>
				<li>studying Computer Science & Engineering @ <b>UC Irvine</b></li>
			</ul>

			<p>(<a href="/about">more about me</a>)</p>
		</div>
		<IdiotCanvas />
	</Window>
	<div class="hide-on-shrink">
		<Window title="me" isContentBoxed={false}>
			<img src={me} alt="Pixelin" class="bordered pixelated" width="240px" />
		</Window>
	</div>
</div>

<div class="row-to-col">
	<div class="col">
		<Window title="nav">
			<div class="side-links">
				<SideLink href="https://blog.pxlin.space/" iconSrc={iconMap.blog}>blog</SideLink>
				<SideLink href="/projects" iconSrc={iconMap.projects}>projects</SideLink>
				<SideLink href="/art" iconSrc={iconMap.art}>art</SideLink>
				<InactiveSideLink iconSrc={iconMap.guestbook}>guestbook</InactiveSideLink>
			</div>
		</Window>

		<Window title="socials">
			<div class="side-links">
				<SideLink href="https://www.youtube.com/@pxlinspace" iconSrc={iconMap.youtube}>
					youtube
				</SideLink>
				<SideLink href="https://www.instagram.com/pxlin.space" iconSrc={iconMap.instagram}>
					instagram
				</SideLink>
				<SideLink href="https://bsky.app/profile/pxlin.space" iconSrc={iconMap.bluesky}>
					bluesky
				</SideLink>
				<SideLink href="https://www.tumblr.com/pxlinspace" iconSrc={iconMap.tumblr}>
					tumblr
				</SideLink>
				<SideLink href="https://pxlinspace.itch.io" iconSrc={iconMap.itchio}>itch.io</SideLink>
				<SideLink href="https://www.github.com/pxlinspace" iconSrc={iconMap.github}>
					github
				</SideLink>
			</div>
		</Window>
	</div>
	<div style="flex-grow: 1" class="col">
		<Window title="featured projects" flexGrow={1}>
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
				<Project
					href="https://pxlinspace.itch.io/dreamskater"
					imgSrc={thumbnails.dreamskater}
					title="DREAMSKATER"
					titleColor="#81295E"
					text="a precision puzzle game with only one button - made for GMTK Game Jam 2025"
				/>
			</div>
		</Window>
		<Window title="latest posts" flexGrow={1}>
			<div class="blog-posts">
				{#each data.posts as post}
					<BlogPost
						title={post.title}
						href={post.link}
						pubDate={post.pubDate}
						description={post.description}
						imgSrc={`/api/image?url=${encodeURIComponent(post.enclosure?.url || '')}`}
					/>
				{/each}
			</div>
		</Window>
	</div>
</div>

<style>
	.projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin: 16px;
	}
	.blog-posts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 16px;
		margin: 8px;
	}
	@media screen and (max-width: 700px) {
		.side-links {
			display: flex;
			flex-wrap: wrap;
			row-gap: 8px;
			column-gap: 48px;
			justify-content: center;
		}
		.projects {
			grid-template-columns: 1fr;
		}
		.blog-posts {
			grid-template-columns: 1fr;
		}
	}
</style>
