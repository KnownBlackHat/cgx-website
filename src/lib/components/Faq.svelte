<script lang="ts">
	import Plus from '@lucide/svelte/icons/plus';
	import { FAQS } from '#lib/data.js';
	import { reveal } from '#lib/actions.js';
	import SectionHeading from './SectionHeading.svelte';
</script>

<section id="faq" class="relative py-20 sm:py-28">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<SectionHeading kicker="FAQ" title="Questions? Decrypted." />

		<div use:reveal class="mt-12 space-y-3">
			{#each FAQS as faq, i}
				<details
					class="group rounded-xl glass transition-colors open:border-neon/40 hover:border-neon/35"
					name="faq"
					open={i === 0}
				>
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-white sm:px-6 [&::-webkit-details-marker]:hidden"
					>
						{faq.q}
						<Plus
							class="size-5 shrink-0 text-neon transition-transform duration-300 group-open:rotate-45"
						/>
					</summary>
					<p class="px-5 pb-5 leading-relaxed text-slate-400 sm:px-6">{faq.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
