<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Timer from '@lucide/svelte/icons/timer';
	import Users from '@lucide/svelte/icons/users';
	import Landmark from '@lucide/svelte/icons/landmark';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Calendar from '@lucide/svelte/icons/calendar';
	import { EVENT_DATE, REGISTRATION_URL, VENUE } from '#lib/config.js';

	const pills = [
		{ icon: Timer, text: '24 Hours of Non-stop Innovation' },
		{ icon: Users, text: '2000+ Student Innovators' },
		{ icon: Landmark, text: '15+ Colleges Across NCR' },
		{ icon: MapPin, text: `Venue: ${VENUE}` },
		{ icon: Calendar, text: `Date: ${EVENT_DATE}` }
	];
</script>

<section id="top" class="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-20">
	<!-- Background: grid, glow orbs, scan line -->
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div
			class="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]"
		></div>
		<div
			class="absolute top-[-10%] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 animate-float rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.22),transparent_65%)] blur-2xl"
		></div>
		<div
			class="absolute top-[30%] -left-40 h-[30rem] w-[30rem] animate-float rounded-full bg-[radial-gradient(circle,rgba(112,165,255,0.18),transparent_65%)] blur-2xl [animation-delay:-5s]"
		></div>
		<div
			class="absolute -right-32 bottom-0 h-[26rem] w-[26rem] animate-float rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.16),transparent_65%)] blur-2xl [animation-delay:-9s]"
		></div>
		<div
			class="absolute inset-x-0 top-0 h-40 animate-scan bg-gradient-to-b from-transparent via-neon/[0.05] to-transparent"
		></div>
		<div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-void"></div>
	</div>

	<div class="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<p
			class="mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.22em] text-neon uppercase glass sm:text-xs"
		>
			<span class="relative flex size-2">
				<span class="absolute inline-flex size-full animate-ping rounded-full bg-neon opacity-75"
				></span>
				<span class="relative inline-flex size-2 rounded-full bg-neon"></span>
			</span>
			Cybergenix Security Presents
		</p>

		<h1 class="mt-8 font-display leading-[0.9] font-black tracking-tight">
			<span class="block text-metal text-[clamp(4.5rem,18vw,12rem)]">CGX</span>
			<span
				class="mt-2 block text-[clamp(1.6rem,6vw,3.75rem)] tracking-[0.2em] text-white text-glow sm:tracking-[0.3em]"
			>
				CHAPTER 01
			</span>
		</h1>

		<p
			class="mx-auto mt-6 max-w-3xl font-display text-sm font-semibold tracking-[0.18em] text-ice sm:text-lg sm:tracking-[0.28em]"
		>
			AI <span class="text-neon">×</span> ROBOTICS <span class="text-neon">×</span> CYBERSECURITY HACKATHON
		</p>

		<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
			<span class="font-semibold text-white">Solving Today. Building Tomorrow.</span>
			A platform where innovation meets real impact.
		</p>

		<div class="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
			<a
				href={REGISTRATION_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="group inline-flex animate-pulse-ring items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-neon-deep px-8 py-4 text-base font-bold text-void transition hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,229,255,0.65)]"
			>
				Register via Google Form
				<ArrowUpRight
					class="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</a>
			<a
				href="#tracks"
				class="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white glass transition hover:border-neon/60 hover:text-neon hover:glow-soft"
			>
				Explore Tracks & Problem Statements
				<ChevronDown class="size-5 transition-transform group-hover:translate-y-0.5" />
			</a>
		</div>

		<ul
			class="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3"
			aria-label="Event quick info"
		>
			{#each pills as pill}
				<li
					class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-200 glass transition hover:border-neon/40 hover:text-white"
				>
					<pill.icon class="size-4 text-neon" />
					{pill.text}
				</li>
			{/each}
		</ul>
	</div>
</section>
