<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import { siDiscord, siGithub, siInstagram, siX } from 'simple-icons';
	import logo from '#lib/assets/cybergenix-logo.png';
	import { CONTACT_EMAIL, NAV_LINKS, REGISTRATION_URL, SOCIALS } from '#lib/config.js';

	// simple-icons no longer ships LinkedIn, so its path is inlined here.
	const linkedinPath =
		'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z';

	const socials = [
		{ label: 'Instagram', href: SOCIALS.instagram, path: siInstagram.path },
		{ label: 'LinkedIn', href: SOCIALS.linkedin, path: linkedinPath },
		{ label: 'X', href: SOCIALS.x, path: siX.path },
		{ label: 'GitHub', href: SOCIALS.github, path: siGithub.path },
		{ label: 'Discord', href: SOCIALS.discord, path: siDiscord.path }
	].filter((s) => s.href);

	const year = new Date().getFullYear();
</script>

<footer id="contact" class="relative mt-10 border-t border-neon/10 bg-midnight/60">
	<div
		class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent"
		aria-hidden="true"
	></div>
	<div
		class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8"
	>
		<div>
			<img src={logo} alt="Cybergenix Security" width="480" height="367" class="h-24 w-auto" />
			<p class="mt-5 max-w-sm text-slate-400">
				Cybergenix Security — building a safer, smarter future at the intersection of AI, robotics,
				and cybersecurity.
			</p>
			<ul class="mt-6 flex flex-wrap gap-3" aria-label="Social media">
				{#each socials as social}
					<li>
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.label}
							class="flex size-11 items-center justify-center rounded-xl text-slate-300 glass transition hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon hover:glow-soft"
						>
							<svg viewBox="0 0 24 24" class="size-4.5" fill="currentColor" aria-hidden="true">
								<path d={social.path} />
							</svg>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<nav aria-label="Footer">
			<h3 class="font-mono text-xs tracking-[0.25em] text-neon uppercase">Navigate</h3>
			<ul class="mt-5 space-y-3">
				{#each NAV_LINKS as link}
					<li>
						<a href={link.href} class="text-slate-400 transition hover:text-white">{link.label}</a>
					</li>
				{/each}
				<li>
					<a
						href={REGISTRATION_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-400 transition hover:text-white">Register</a
					>
				</li>
			</ul>
		</nav>

		<div>
			<h3 class="font-mono text-xs tracking-[0.25em] text-neon uppercase">Contact</h3>
			<p class="mt-5 text-slate-400">Questions about registration, sponsorship or partnerships?</p>
			<a
				href="mailto:{CONTACT_EMAIL}"
				class="mt-4 inline-flex items-center gap-2 font-medium break-all text-white transition hover:text-neon"
			>
				<Mail class="size-4 shrink-0 text-neon" />
				{CONTACT_EMAIL}
			</a>
		</div>
	</div>

	<div class="border-t border-neon/10">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8"
		>
			<p>© {year} Cybergenix Security. All rights reserved.</p>
			<p class="font-mono text-xs tracking-wider">CGX // CHAPTER 01</p>
		</div>
	</div>
</footer>
