<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';
	import Check from '@lucide/svelte/icons/check';
	import { REGISTRATION_URL } from '#lib/config.js';
	import { CHECKLIST } from '#lib/data.js';
	import { reveal } from '#lib/actions.js';
</script>

<section id="register" class="relative py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div
			use:reveal
			class="relative isolate overflow-hidden rounded-3xl border border-neon/30 bg-midnight px-6 py-14 glow sm:px-12 sm:py-16"
		>
			<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
				<div class="absolute inset-0 bg-grid opacity-60"></div>
				<div
					class="absolute -top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.25),transparent_60%)]"
				></div>
				<div
					class="absolute right-0 -bottom-1/2 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(112,165,255,0.2),transparent_60%)]"
				></div>
			</div>

			<div class="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
				<div>
					<p class="font-mono text-xs tracking-[0.3em] text-neon uppercase">
						<span class="text-neon/50">//</span> Registrations open
					</p>
					<h2
						class="mt-4 font-display text-3xl font-black tracking-tight text-balance text-white sm:text-5xl"
					>
						Assemble your team. <span class="text-neon-gradient">Claim your slot.</span>
					</h2>
					<p class="mt-5 max-w-xl text-lg text-slate-300">
						Submit your team's registration and get ready for 24 hours of building the future.
					</p>
					<a
						href={REGISTRATION_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="group mt-8 inline-flex animate-pulse-ring items-center gap-2 rounded-full bg-neon px-8 py-4 text-base font-bold text-void transition hover:scale-[1.03] hover:bg-white hover:shadow-[0_0_40px_rgba(0,229,255,0.7)]"
					>
						Fill Registration Form
						<ArrowUpRight
							class="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>

				<div class="rounded-2xl p-6 glass sm:p-8">
					<div class="flex items-center gap-3">
						<ClipboardCheck class="size-6 text-neon" />
						<h3 class="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
							Keep these ready
						</h3>
					</div>
					<ul class="mt-6 space-y-4">
						{#each CHECKLIST as item}
							<li class="flex items-center gap-3 text-slate-200">
								<span
									class="flex size-6 shrink-0 items-center justify-center rounded-md border border-neon/40 bg-neon/10 text-neon"
								>
									<Check class="size-3.5" strokeWidth={3} />
								</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
