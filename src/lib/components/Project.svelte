<script lang="ts">
	let { href, imgSrc, title, titleColor = 'var(--foreground-color)', text } = $props();
</script>

<div>
	<img class="bordered" src={imgSrc} alt="thumbnail" />
	<!-- <span>
		<span style="color: {titleColor}">{title}</span>:
		<span class="text">{text}</span>
	</span> -->
</div>

<style>
	div {
		padding: 16px;
	}

	img {
		width: 100%;
	}

	.text {
		color: var(--muted-color);
	}
</style>
