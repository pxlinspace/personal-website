<script lang="ts">
	import Window from '$lib/components/Window.svelte';
	import SideLink from '$lib/components/SideLink.svelte';
	import IdiotCanvas from '$lib/components/IdiotCanvas.svelte';
	import { iconMap } from '$lib/icons';
	import me from '$lib/assets/images/me.gif';
</script>

<div style="display: flex; align-items: center">
	<Window title="intro" flexGrow={1}>
		<div style="position: relative; z-index: 1; margin-bottom: 60px">
			<h2>Helooo, I'm <span class="gradient-text">Pixelin</span>! (@pxlinspace)</h2>
			<p>- I'm an 18yo gamedev + animator from San Jose, CA</p>
			<p>- studying <b>CSE</b> @ <b>UC Irvine</b></p>
			<p>(<a href="/about">more about me</a>)</p>
		</div>
		<IdiotCanvas />
	</Window>

	<Window title="me" isContentBoxed={false}>
		<img src={me} alt="Pixelin" class="bordered" id="me" />
	</Window>
</div>

<div style="display: flex">
	<div style="display: flex; flex-direction: column;">
		<Window title="nav">
			<SideLink href="/" iconSrc={iconMap.blog}>blog</SideLink>
			<SideLink href="/" iconSrc={iconMap.projects}>projects</SideLink>
			<SideLink href="/" iconSrc={iconMap.art}>art</SideLink>
			<SideLink href="/" iconSrc={iconMap.music}>music</SideLink>
			<SideLink href="/" iconSrc={iconMap.guestbook}>guestbook</SideLink>
		</Window>

		<Window title="socials">
			<SideLink href="https://www.youtube.com/@pxlinspace" iconSrc={iconMap.youtube}>
				youtube
			</SideLink>
			<SideLink href="https://www.instagram.com/pxlin.space" iconSrc={iconMap.instagram}>
				instagram
			</SideLink>
			<SideLink href="https://bsky.app/profile/pxlin.space" iconSrc={iconMap.bluesky}>
				bluesky
			</SideLink>
			<SideLink href="https://www.tumblr.com/pxlinspace" iconSrc={iconMap.tumblr}>tumblr</SideLink>
			<SideLink href="https://sunny.garden/@pxlinspace" iconSrc={iconMap.mastodon}>
				mastodon
			</SideLink>
			<SideLink href="https://pxlinspace.itch.io" iconSrc={iconMap.itchio}>itch.io</SideLink>
			<SideLink href="https://www.github.com/pxlinspace" iconSrc={iconMap.github}>github</SideLink>
		</Window>
	</div>
	<Window title="news" flexGrow={1}>
		<p>eeppp glorp glob</p>
	</Window>
</div>

<style>
	#me {
		image-rendering: pixelated;
		width: 240px;
		height: 240px;
	}
	.gradient-text {
		background: linear-gradient(135deg, #cf39ed, #257beb, #cf39ed);
		background-size: 400% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: gradient-scroll 10s linear infinite;
	}

	@keyframes gradient-scroll {
		from {
			background-position: 0% center;
		}
		to {
			background-position: 400% center;
		}
	}
</style>
