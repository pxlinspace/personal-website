<script lang="ts">
	import Window from '$lib/components/Window.svelte';
	import SideLink from '$lib/components/+SideLink.svelte';
	import { iconMap } from '$lib/icons';
	import me from '$lib/assets/images/me.gif';
</script>

<div style="display: flex; align-items: center">
	<Window title="intro" flexGrow={1}>
		<h2>Helooo, I'm <span class="gradient-text">Pixelin</span>! (@pxlinspace)</h2>
		<p>- I'm an 18yo gamedev + animator from San Jose, CA</p>
		<p>- studying <b>CSE</b> @ <b>UC Irvine</b></p>
		<p>more about me</p>
	</Window>

	<Window title="me" isContentBoxed={false}>
		<img src={me} alt="Pixelin" class="bordered" id="me" />
	</Window>
</div>

<div style="display: flex">
	<div>
		<Window title="nav">
			<SideLink href="/" iconSrc={iconMap.blog}>blog</SideLink>
			<SideLink href="/" iconSrc={iconMap.projects}>projects</SideLink>
			<SideLink href="/" iconSrc={iconMap.art}>art</SideLink>
			<SideLink href="/" iconSrc={iconMap.music}>music</SideLink>
			<SideLink href="/" iconSrc={iconMap.guestbook}>guestbook</SideLink>
		</Window>

		<Window title="socials">
			<SideLink href="/" iconSrc={iconMap.youtube}>youtube</SideLink>
			<SideLink href="/" iconSrc={iconMap.instagram}>instagram</SideLink>
			<SideLink href="/" iconSrc={iconMap.bluesky}>bluesky</SideLink>
			<SideLink href="/" iconSrc={iconMap.tumblr}>tumblr</SideLink>
			<SideLink href="/" iconSrc={iconMap.mastodon}>mastodon</SideLink>
			<SideLink href="/" iconSrc={iconMap.itchio}>itch.io</SideLink>
			<SideLink href="/" iconSrc={iconMap.github}>github</SideLink>
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
