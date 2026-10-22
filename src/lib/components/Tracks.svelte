<script lang="ts">
	import { TRACKS } from '#lib/data.js';
	import { reveal, tilt } from '#lib/actions.js';
	import SectionHeading from './SectionHeading.svelte';
	import ProblemExplorer from './ProblemExplorer.svelte';
</script>

<section id="tracks" class="relative py-20 sm:py-28">
	<div
		class="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[30rem] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08),transparent_65%)]"
		aria-hidden="true"
	></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading kicker="Themes & Problem Statements" title="Choose Your Battleground">
			Three tracks and a bank of real-world problem statements. Pick the challenge that fires you up
			and build something that matters.
		</SectionHeading>

		<div class="mt-14 grid gap-6 lg:grid-cols-3">
			{#each TRACKS as track, i (track.title)}
				<div use:reveal={i * 120}>
					<article
						use:tilt
						class="group spotlight h-full rounded-2xl p-6 glass transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-neon/50 hover:glow-soft sm:p-8"
					>
						<div class="flex items-start justify-between">
							<div
								class="flex size-14 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon shadow-[0_0_24px_rgba(0,229,255,0.25)] transition group-hover:bg-neon group-hover:text-void"
							>
								<track.icon class="size-7" />
							</div>
							<span class="font-mono text-xs tracking-[0.2em] text-slate-500">TRACK 0{i + 1}</span>
						</div>
						<h3 class="mt-6 font-display text-xl font-bold tracking-wide text-white">
							{track.title}
						</h3>
						<p class="mt-2 text-slate-400">{track.tagline}</p>
					</article>
				</div>
			{/each}
		</div>

		<ProblemExplorer />
	</div>
</section>
