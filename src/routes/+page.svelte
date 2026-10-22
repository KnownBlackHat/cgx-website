<script lang="ts">
	import Nav from '#lib/components/Nav.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import Tracks from '#lib/components/Tracks.svelte';
	import About from '#lib/components/About.svelte';
	import Register from '#lib/components/Register.svelte';
	import Faq from '#lib/components/Faq.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import { EVENT_DATE, VENUE } from '#lib/config.js';

	const title = 'CGX Chapter 01 — AI × Robotics × Cybersecurity Hackathon';
	const description = `Cybergenix Security presents CGX Chapter 01: a 24-hour AI, Robotics and Cybersecurity hackathon in ${VENUE} on ${EVENT_DATE}, for 2000+ student innovators from 15+ colleges across NCR.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a
	href="#main"
	class="sr-only z-[60] rounded-md bg-neon px-4 py-2 font-semibold text-void focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
>
	Skip to content
</a>

<Nav />
<main id="main">
	<Hero />
	<Stats />
	<Tracks />
	<About />
	<Register />
	<Faq />
</main>
<Footer />
