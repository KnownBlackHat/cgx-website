<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '#lib/actions.js';

	let { kicker, title, children }: { kicker: string; title: string; children?: Snippet } = $props();
</script>

<header use:reveal class="mx-auto max-w-3xl text-center">
	<p class="font-mono text-xs tracking-[0.3em] text-neon uppercase">
		<span class="text-neon/50">//</span>
		{kicker}
	</p>
	<h2
		class="mt-4 font-display text-3xl font-black tracking-tight text-balance text-white sm:text-5xl"
	>
		{title}
	</h2>
	{#if children}
		<p class="mt-5 text-base text-slate-400 sm:text-lg">{@render children()}</p>
	{/if}
</header>
