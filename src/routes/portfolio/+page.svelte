<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { portfolio } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>Portfolio — Fjord Works Software</title>
	<meta
		name="description"
		content="Case studies and selected work from Fjord Works Software LLC."
	/>
	<link rel="canonical" href="https://fjordworkssoftware.com/portfolio" />
	<meta property="og:title" content="Portfolio — Fjord Works Software" />
	<meta
		property="og:description"
		content="Case studies and selected work from Fjord Works Software LLC."
	/>
	<meta property="og:url" content="https://fjordworkssoftware.com/portfolio" />
	<meta name="twitter:title" content="Portfolio — Fjord Works Software" />
	<meta
		name="twitter:description"
		content="Case studies and selected work from Fjord Works Software LLC."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden px-6 py-20">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-4xl">
		<SectionHeader
			eyebrow="Portfolio"
			heading="Selected work"
			lead="Projects we've shipped — with the problem, the approach, and the outcome."
			level={1}
		/>
	</div>
</section>

<!-- Project grid -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each portfolio as project (project.slug)}
				<a
					href="/portfolio/{project.slug}"
					class="group block overflow-hidden rounded-xl border border-brand-border bg-brand-surface transition-colors hover:border-brand-primary"
				>
					<div class="aspect-video overflow-hidden bg-brand-bg">
						<img
							src={project.image}
							alt={project.title}
							class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div class="p-6">
						<div class="mb-3 flex flex-wrap gap-2">
							{#each project.tags as tag (tag)}
								<span
									class="rounded-full border border-brand-border bg-brand-bg px-3 py-0.5 text-xs font-medium text-brand-muted"
								>
									{tag}
								</span>
							{/each}
							<span
								class="rounded-full border border-brand-border bg-brand-bg px-3 py-0.5 text-xs font-medium text-brand-muted"
							>
								{project.year}
							</span>
						</div>
						<h2 class="mb-2 font-display text-lg font-semibold text-brand-text">
							{project.title}
						</h2>
						<p class="text-sm leading-relaxed text-brand-muted">{project.summary}</p>
						<span
							class="mt-4 inline-block text-sm font-medium text-brand-primary transition-colors group-hover:underline"
						>
							View case study →
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
