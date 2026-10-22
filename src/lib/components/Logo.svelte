<script lang="ts">
	import mark from '#lib/assets/cybergenix-mark.png';

	let { class: className = '' }: { class?: string } = $props();
</script>

<a href="#top" class="group flex items-center gap-3 {className}" aria-label="CGX Chapter 01 — home">
	<img
		src={mark}
		alt=""
		width="40"
		height="42"
		class="h-10 w-auto shrink-0 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-transform duration-700 group-hover:rotate-120"
	/>
	<span class="flex flex-col leading-none">
		<span class="font-mono text-[0.6rem] tracking-[0.2em] text-slate-400 uppercase">
			Cybergenix Security presents
		</span>
		<span class="font-display text-lg font-black tracking-[0.18em] text-white">CGX</span>
	</span>
</a>
