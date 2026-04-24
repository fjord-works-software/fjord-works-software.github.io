<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';

	let { data } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Fjord Works Software</title>
	<meta name="description" content={project.summary} />
	<link rel="canonical" href="https://fjordworkssoftware.com/portfolio/{project.slug}" />
	<meta property="og:title" content="{project.title} — Fjord Works Software" />
	<meta property="og:description" content={project.summary} />
	<meta property="og:url" content="https://fjordworkssoftware.com/portfolio/{project.slug}" />
	<meta property="og:image" content="https://fjordworkssoftware.com{project.image}" />
	<meta name="twitter:title" content="{project.title} — Fjord Works Software" />
	<meta name="twitter:description" content={project.summary} />
	<meta name="twitter:image" content="https://fjordworkssoftware.com{project.image}" />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden px-6 py-16">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-4xl">
		<a
			href="/portfolio"
			class="mb-8 inline-flex items-center gap-1.5 text-sm text-brand-muted transition-colors hover:text-brand-primary"
		>
			← All projects
		</a>

		<div class="mb-4 flex flex-wrap gap-2">
			{#each project.tags as tag (tag)}
				<span
					class="rounded-full border border-brand-border bg-brand-surface px-3 py-0.5 text-xs font-medium text-brand-muted"
				>
					{tag}
				</span>
			{/each}
			<span
				class="rounded-full border border-brand-border bg-brand-surface px-3 py-0.5 text-xs font-medium text-brand-muted"
			>
				{project.year}
			</span>
		</div>

		<h1 class="font-display text-4xl font-bold text-brand-text sm:text-5xl">{project.title}</h1>
		<p class="mt-4 max-w-2xl text-lg text-brand-muted">{project.summary}</p>

		{#if project.link}
			<div class="mt-6">
				<Button href={project.link} target="_blank" rel="noopener noreferrer" variant="secondary">
					Visit site →
				</Button>
			</div>
		{/if}
	</div>
</section>

<!-- Screenshot -->
<div class="px-6">
	<div class="mx-auto max-w-4xl overflow-hidden rounded-xl border border-brand-border shadow-lg">
		<img src={project.image} alt="Screenshot of {project.title}" class="w-full" />
	</div>
</div>

<!-- Case study body -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-4xl">
		<div class="grid grid-cols-1 gap-12 sm:grid-cols-3">
			<div>
				<p class="mb-3 text-xs font-semibold tracking-wider text-brand-primary uppercase">
					Problem
				</p>
				<p class="text-sm leading-relaxed text-brand-muted">{project.problem}</p>
			</div>
			<div>
				<p class="mb-3 text-xs font-semibold tracking-wider text-brand-primary uppercase">
					Solution
				</p>
				<p class="text-sm leading-relaxed text-brand-muted">{project.solution}</p>
			</div>
			<div>
				<p class="mb-3 text-xs font-semibold tracking-wider text-brand-primary uppercase">
					Outcome
				</p>
				<p class="text-sm leading-relaxed text-brand-muted">{project.outcome}</p>
			</div>
		</div>

		<!-- Tech stack -->
		<div class="mt-12 border-t border-brand-border pt-12">
			<p class="mb-4 text-xs font-semibold tracking-wider text-brand-muted uppercase">Built with</p>
			<div class="flex flex-wrap gap-3">
				{#each project.techStack as tech (tech)}
					<span
						class="rounded-full border border-brand-border bg-brand-surface px-4 py-1.5 text-sm font-medium text-brand-text"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="relative overflow-hidden bg-brand-surface px-6 py-16">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-2xl text-center">
		<h2 class="font-display text-3xl font-bold text-brand-text">Have a similar project?</h2>
		<p class="mt-4 text-brand-muted">We'd love to hear about it.</p>
		<div class="mt-8">
			<Button href="/contact">Get in Touch</Button>
		</div>
	</div>
</section>
