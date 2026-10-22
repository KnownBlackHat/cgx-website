<script lang="ts">
	import { STATS } from '#lib/data.js';
	import { countUp, reveal } from '#lib/actions.js';
</script>

<section id="stats" class="relative py-16 sm:py-20" aria-label="Event stats">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			use:reveal
			class="relative overflow-hidden rounded-3xl glow-soft glass before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-neon before:to-transparent"
		>
			<dl class="grid grid-cols-2 lg:grid-cols-4">
				{#each STATS as stat, i}
					<div
						class="flex flex-col items-center gap-2 px-4 py-10 text-center sm:py-12
							{i % 2 === 1 ? 'border-l border-neon/10' : ''}
							{i >= 2 ? 'border-t border-neon/10 lg:border-t-0' : ''}
							{i === 2 ? 'lg:border-l' : ''}"
					>
						<dt
							class="order-2 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase sm:text-sm"
						>
							{stat.label}
						</dt>
						<dd class="order-1 font-display text-3xl font-black text-white sm:text-5xl">
							<span class="text-neon-gradient" use:countUp={stat.value}
								>{stat.value.toLocaleString('en-IN')}</span
							><span
								class="text-neon text-glow {stat.suffix.length > 1
									? 'ml-1 text-lg sm:text-2xl'
									: ''}">{stat.suffix.trim()}</span
							>
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
