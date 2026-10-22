<script lang="ts">
	import { PILLARS } from '#lib/data.js';
	import { reveal, tilt } from '#lib/actions.js';
	import SectionHeading from './SectionHeading.svelte';
</script>

<section id="about" class="relative py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<SectionHeading kicker="Why Attend" title="Build. Innovate. Secure. Collaborate.">
			CGX Chapter 01 brings together student innovators from across NCR for 24 hours of building at
			the intersection of artificial intelligence, robotics, and cybersecurity — solving today's
			problems while building tomorrow's technology.
		</SectionHeading>

		<div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each PILLARS as pillar, i}
				<div use:reveal={i * 100}>
					<div
						use:tilt={8}
						class="group spotlight relative h-full overflow-hidden rounded-2xl p-6 glass transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-neon/50 hover:glow-soft"
					>
						<span
							class="pointer-events-none absolute -top-3 -right-1 font-display text-7xl font-black text-white/[0.03] transition group-hover:text-neon/10"
							aria-hidden="true">0{i + 1}</span
						>
						<pillar.icon class="size-8 text-neon drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
						<h3 class="mt-5 font-display text-lg font-bold tracking-wider text-white uppercase">
							{pillar.title}
						</h3>
						<p class="mt-2 text-slate-400">{pillar.text}</p>
						<div
							class="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-neon to-transparent transition-transform duration-500 group-hover:scale-x-100"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
