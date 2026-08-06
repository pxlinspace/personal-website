<script lang="ts">
	let { href, iconSrc, children } = $props();
</script>

<a {href}><img src={iconSrc} alt="icon" /> {@render children()}</a>

<style>
	a {
		display: flex;
		align-items: end;
		gap: 5px;
		img {
			filter: invert(61%) sepia(37%) saturate(279%) hue-rotate(117deg) brightness(91%) contrast(89%);
			width: 16px;
			height: 16px;
			image-rendering: pixelated;
		}
	}

	a:hover {
		img {
			filter: invert(76%) sepia(50%) saturate(531%) hue-rotate(354deg) brightness(90%) contrast(90%);
		}
	}
</style>
