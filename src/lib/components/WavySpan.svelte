<script lang="ts">
	let { text = '', amplitude = 4, duration = 2, stagger = 0.2 } = $props();
</script>

<span
	class="wavy-span"
	style="--amplitude: {amplitude}px; --duration: {duration}s;"
	aria-label={text}
>
	{#each text as char, i}
		<span
			class="wavy-char"
			style="animation-delay: {(i - text.length) * stagger}s"
			aria-hidden="true">{char}</span
		>
	{/each}
</span>

<style>
	.wavy-span {
		display: inline-block;
		white-space: pre;
	}

	.wavy-char {
		display: inline-block;
		animation:
			sine-wave var(--duration) ease-in-out infinite,
			rainbow 7s linear infinite;
	}
	@keyframes sine-wave {
		0% {
			transform: translateY(calc(var(--amplitude) * -0.5));
		}
		50% {
			transform: translateY(calc(var(--amplitude) * 0.5));
		}
		100% {
			transform: translateY(calc(var(--amplitude) * -0.5));
		}
	}
</style>
