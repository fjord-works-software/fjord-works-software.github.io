<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';

	const stack = [
		'.NET / C#',
		'Node.js',
		'React',
		'Svelte',
		'REST APIs',
		'SQL',
		'TypeScript',
		'Third-party Integrations'
	];
</script>

<svelte:head>
	<title>Services — Fjord Works Software</title>
	<meta
		name="description"
		content="Custom websites, web applications, and integrations from Fjord Works Software LLC. Built with .NET, Node.js, and modern frontend frameworks."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden px-6 py-20">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-4xl">
		<SectionHeader
			eyebrow="Services"
			heading="What we build"
			lead="Websites, web applications, and integrations — each one designed around what you actually need, not a template."
		/>
	</div>
</section>

<!-- Service offerings -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<Card class="flex flex-col">
				<div class="mb-4 text-brand-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl font-semibold text-brand-text mb-3">Websites</h3>
				<p class="text-brand-muted text-sm leading-relaxed flex-1">
					Clean, fast websites for businesses and individuals. Marketing sites, portfolio sites,
					informational sites — built to load fast, look professional, and hold up over time without
					ongoing maintenance overhead.
				</p>
			</Card>

			<Card class="flex flex-col">
				<div class="mb-4 text-brand-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl font-semibold text-brand-text mb-3">Web Applications</h3>
				<p class="text-brand-muted text-sm leading-relaxed flex-1">
					Custom web apps built around your workflow. For businesses and organizations that need
					software to do something specific — something off-the-shelf tools can't quite do, or
					force too many compromises to make work.
				</p>
			</Card>

			<Card class="flex flex-col">
				<div class="mb-4 text-brand-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
						/>
					</svg>
				</div>
				<h3 class="font-display text-xl font-semibold text-brand-text mb-3">Integrations</h3>
				<p class="text-brand-muted text-sm leading-relaxed flex-1">
					Connect the systems you already use. When data lives in too many places, we build the
					bridges that move it where it needs to go — without manual entry, copy-paste, or
					brittle workarounds.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- Tech stack -->
<section class="px-6 py-16 bg-brand-surface">
	<div class="mx-auto max-w-4xl">
		<SectionHeader
			eyebrow="Stack"
			heading="What we build with"
			lead="We work across the full stack. If your project needs something not listed here, ask — we're likely familiar with it."
		/>
		<div class="mt-8 flex flex-wrap gap-3">
			{#each stack as tech}
				<span
					class="rounded-full border border-brand-border bg-brand-bg px-4 py-1.5 text-sm font-medium text-brand-text"
				>
					{tech}
				</span>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-4xl">
		<SectionHeader
			eyebrow="How We Work"
			heading="Discovery → Build → Handoff"
			lead="Three stages. No surprises."
		/>
		<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
			<div>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-display font-bold"
				>
					1
				</div>
				<h3 class="font-display text-lg font-semibold text-brand-text mb-2">Discovery</h3>
				<p class="text-sm text-brand-muted leading-relaxed">
					We start with your problem. No code yet — just understanding your workflow, your
					constraints, and what success actually looks like for your situation.
				</p>
			</div>

			<div>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-display font-bold"
				>
					2
				</div>
				<h3 class="font-display text-lg font-semibold text-brand-text mb-2">Build</h3>
				<p class="text-sm text-brand-muted leading-relaxed">
					We build iteratively and keep you in the loop throughout. You see progress as it
					happens — no black box, no surprises at delivery.
				</p>
			</div>

			<div>
				<div
					class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary font-display font-bold"
				>
					3
				</div>
				<h3 class="font-display text-lg font-semibold text-brand-text mb-2">Handoff</h3>
				<p class="text-sm text-brand-muted leading-relaxed">
					You receive the source code, documentation, and everything needed to run and maintain
					your software independently. It's yours — no ongoing dependency on us to keep the
					lights on.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="relative overflow-hidden bg-brand-surface px-6 py-16">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-2xl text-center">
		<h2 class="font-display text-3xl font-bold text-brand-text">Ready to talk through your project?</h2>
		<p class="mt-4 text-brand-muted">We'll tell you honestly whether we're the right fit.</p>
		<div class="mt-8">
			<Button href="/contact">Get in Touch</Button>
		</div>
	</div>
</section>
