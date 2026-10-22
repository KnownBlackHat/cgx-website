<script lang="ts">
	import Search from '@lucide/svelte/icons/search';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Code from '@lucide/svelte/icons/code';
	import Cpu from '@lucide/svelte/icons/cpu';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import SearchX from '@lucide/svelte/icons/search-x';
	import statements from '#lib/problem-statements.json';

	const PAGE = 12;
	const tracks = [...new Set(statements.map((s) => s.track))].sort();

	const psId = (id: number) => `CGX-PS-${String(id).padStart(3, '0')}`;
	const isHardware = (tags: string) => /robotics|hardware/i.test(tags);

	let query = $state('');
	let track = $state('');
	let limit = $state(PAGE);
	let expanded = $state<Record<number, boolean>>({});

	const filtered = $derived.by(() => {
		const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
		return statements.filter((s) => {
			if (track && s.track !== track) return false;
			const haystack =
				`${s.title} ${s.brief} ${s.tags} ${s.track} ${s.potential} ${psId(s.id)}`.toLowerCase();
			return terms.every((t) => haystack.includes(t));
		});
	});
	const visible = $derived(filtered.slice(0, limit));

	function reset() {
		query = '';
		track = '';
	}

	// Any filter change starts the list from the top again.
	$effect(() => {
		void [query, track];
		limit = PAGE;
	});
</script>

<div class="mt-20">
	<div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
		<div>
			<p class="font-mono text-xs tracking-[0.3em] text-neon uppercase">
				<span class="text-neon/50">//</span> Problem statement explorer
			</p>
			<h3 class="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
				{statements.length} challenges. {tracks.length} tracks.
			</h3>
		</div>
		<p class="font-mono text-sm text-slate-400" aria-live="polite">
			Showing <span class="text-white">{visible.length}</span> of
			<span class="text-white">{filtered.length}</span>
		</p>
	</div>

	<div class="mt-6 grid gap-3 rounded-2xl p-3 glass sm:p-4 lg:grid-cols-[1fr_auto]">
		<label class="relative block">
			<span class="sr-only">Search problem statements</span>
			<Search
				class="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate-500"
			/>
			<input
				type="search"
				bind:value={query}
				placeholder="Search by keyword, technology or ID…"
				class="h-12 w-full rounded-xl border border-neon/15 bg-void/60 pr-4 pl-11 text-white placeholder:text-slate-500 focus:border-neon/60 focus:shadow-[0_0_0_3px_rgba(0,229,255,0.15)] focus:outline-none"
			/>
		</label>

		<label class="relative block">
			<span class="sr-only">Filter by track</span>
			<select
				bind:value={track}
				class="h-12 w-full appearance-none rounded-xl border border-neon/15 bg-void/60 pr-10 pl-4 text-sm text-white focus:border-neon/60 focus:outline-none lg:w-80"
			>
				<option value="">All tracks</option>
				{#each tracks as t}
					<option value={t}>{t}</option>
				{/each}
			</select>
			<ChevronDown
				class="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-neon"
			/>
		</label>
	</div>

	{#if filtered.length === 0}
		<div class="mt-6 flex flex-col items-center rounded-2xl px-6 py-14 text-center glass">
			<SearchX class="size-10 text-neon/70" />
			<p class="mt-4 font-semibold text-white">No problem statements match those filters.</p>
			<button
				type="button"
				onclick={reset}
				class="mt-4 text-sm font-semibold text-neon hover:underline"
			>
				Clear filters
			</button>
		</div>
	{:else}
		<ul class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each visible as ps (ps.id)}
				{@const open = expanded[ps.id] ?? false}
				{@const hardware = isHardware(ps.tags)}
				<li
					class="group flex flex-col rounded-2xl p-5 glass transition duration-300 hover:-translate-y-1 hover:border-neon/45 hover:glow-soft"
				>
					<div class="flex items-center justify-between gap-3">
						<span class="font-mono text-xs tracking-[0.18em] text-neon">{psId(ps.id)}</span>
						<span
							class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium {hardware
								? 'border-ice/40 bg-ice/10 text-ice'
								: 'border-neon/30 bg-neon/10 text-neon'}"
						>
							{#if hardware}<Cpu class="size-3" />{:else}<Code class="size-3" />{/if}
							{ps.tags}
						</span>
					</div>

					<p class="mt-3 leading-snug font-semibold text-slate-100">{ps.title}</p>
					<p class="mt-2 text-sm leading-relaxed text-slate-400 {open ? '' : 'line-clamp-3'}">
						{ps.brief}
					</p>
					{#if open}
						<dl class="mt-3 space-y-2 text-sm">
							{#each [['What to build', ps.build], ['Deliverables', ps.deliverables], ['Evaluated on', ps.metrics]] as [label, value]}
								<div>
									<dt class="font-mono text-xs tracking-wider text-neon/80 uppercase">{label}</dt>
									<dd class="mt-0.5 leading-relaxed text-slate-300">{value}</dd>
								</div>
							{/each}
						</dl>
					{/if}
					<button
						type="button"
						onclick={() => (expanded[ps.id] = !open)}
						class="mt-2 mb-4 self-start text-sm font-semibold text-neon hover:underline"
						aria-expanded={open}
					>
						{open ? 'Show less' : 'Read more'}
					</button>

					<div class="mt-auto space-y-2 border-t border-neon/10 pt-4 text-sm">
						<p class="flex items-start gap-2 text-slate-400">
							<Briefcase class="mt-0.5 size-4 shrink-0 text-slate-500" />
							{ps.potential}
						</p>
						<button
							type="button"
							onclick={() => (track = ps.track)}
							class="rounded-md bg-white/5 px-2 py-1 text-left text-xs text-slate-300 transition hover:bg-neon/10 hover:text-neon"
							title="Show all {ps.track} statements"
						>
							# {ps.track}
						</button>
					</div>
				</li>
			{/each}
		</ul>

		{#if visible.length < filtered.length}
			<div class="mt-8 flex justify-center">
				<button
					type="button"
					onclick={() => (limit += PAGE)}
					class="group inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold text-white glass transition hover:border-neon/60 hover:text-neon hover:glow-soft"
				>
					Load more
					<span class="font-mono text-xs text-slate-400"
						>({filtered.length - visible.length} left)</span
					>
					<ChevronDown class="size-4 transition-transform group-hover:translate-y-0.5" />
				</button>
			</div>
		{/if}
	{/if}
</div>
