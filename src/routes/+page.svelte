<script lang="ts">
	import Window from '$lib/components/Window.svelte';
	import SideLink from '$lib/components/+SideLink.svelte';
	import { iconMap } from '$lib/icons';
</script>

<Window title="intro">
	<h2>Helooooo I'm Pixelin</h2>
	<p>- I'm an 18yo gamedev + animator from San Jose, CA</p>
	<p>- studying <b>CSE</b> @ <b>UC Irvine</b></p>
	<p>more about me</p>
</Window>

<Window title="me">
	<p>yipeeeee</p>
</Window>

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
