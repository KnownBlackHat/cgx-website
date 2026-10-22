<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import Logo from './Logo.svelte';
	import { NAV_LINKS, REGISTRATION_URL } from '#lib/config.js';

	let open = $state(false);
	let scrolled = $state(false);
	let toggleButton: HTMLButtonElement;

	function close() {
		open = false;
		toggleButton?.focus();
	}

	// Page can load already scrolled (anchor link or reload), before any scroll event.
	$effect(() => {
		scrolled = window.scrollY > 12;
	});

	$effect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
	});
</script>

<svelte:window
	onscroll={() => (scrolled = window.scrollY > 12)}
	onkeydown={(e) => e.key === 'Escape' && open && close()}
	onresize={() => window.innerWidth >= 1024 && (open = false)}
/>

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'border-x-0 border-t-0 shadow-[0_8px_30px_-12px_rgba(0,229,255,0.25)] glass'
		: 'border-b border-transparent'}"
>
	<nav
		class="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
		aria-label="Primary"
	>
		<Logo />

		<ul class="hidden items-center gap-1 lg:flex">
			{#each NAV_LINKS as link}
				<li>
					<a
						href={link.href}
						class="relative rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-neon after:transition-transform hover:text-white hover:after:scale-x-100"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<a
				href={REGISTRATION_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden animate-pulse-ring items-center gap-1.5 rounded-full bg-neon px-5 py-2.5 text-sm font-semibold text-void transition hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] sm:inline-flex"
			>
				Register Now
				<ArrowUpRight class="size-4" />
			</a>
			<button
				bind:this={toggleButton}
				type="button"
				class="inline-flex size-11 items-center justify-center rounded-lg text-slate-200 transition hover:bg-white/5 hover:text-neon lg:hidden"
				aria-label="Open menu"
				aria-expanded={open}
				aria-controls="mobile-menu"
				onclick={() => (open = true)}
			>
				<Menu class="size-6" />
			</button>
		</div>
	</nav>
</header>

{#if open}
	<div
		class="fixed inset-0 z-50 bg-void/70 backdrop-blur-sm lg:hidden"
		transition:fade={{ duration: 200 }}
		onclick={close}
		aria-hidden="true"
	></div>
	<div
		id="mobile-menu"
		role="dialog"
		aria-modal="true"
		aria-label="Menu"
		class="fixed inset-y-0 right-0 z-50 flex w-[min(22rem,88vw)] flex-col border-y-0 border-r-0 bg-midnight/95 p-6 glass lg:hidden"
		transition:fly={{ x: 320, duration: 300 }}
	>
		<div class="flex items-center justify-between">
			<span class="font-display text-sm font-bold tracking-[0.25em] text-neon">MENU</span>
			<button
				type="button"
				class="inline-flex size-11 items-center justify-center rounded-lg text-slate-200 transition hover:bg-white/5 hover:text-neon"
				aria-label="Close menu"
				onclick={close}
			>
				<X class="size-6" />
			</button>
		</div>
		<ul class="mt-8 flex flex-col gap-1">
			{#each NAV_LINKS as link, i}
				<li in:fly={{ x: 24, delay: 80 + i * 50, duration: 300 }}>
					<a
						href={link.href}
						onclick={() => (open = false)}
						class="flex items-center justify-between rounded-lg border border-transparent px-4 py-3.5 text-base font-medium text-slate-200 transition hover:border-neon/20 hover:bg-neon/5 hover:text-neon"
					>
						{link.label}
						<span class="font-mono text-xs text-slate-500">0{i + 1}</span>
					</a>
				</li>
			{/each}
		</ul>
		<a
			href={REGISTRATION_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 font-semibold text-void glow transition hover:bg-white"
		>
			Register Now
			<ArrowUpRight class="size-4" />
		</a>
	</div>
{/if}
