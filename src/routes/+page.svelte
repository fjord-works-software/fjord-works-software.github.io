<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import Button from '$lib/components/Button.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>Fjord Works Software — Custom Software Development</title>
	<meta
		name="description"
		content="Fjord Works Software LLC builds custom web applications and software solutions for businesses that need clarity, performance, and longevity."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden px-6 py-24 sm:py-32">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-4xl text-center">
		<div class="mb-8 flex justify-center">
			<img
				src="/images/FjordWorksLogo.png"
				alt="Fjord Works Software"
				class="h-28 w-auto drop-shadow-lg"
			/>
		</div>
		<h1 class="font-display text-5xl font-bold leading-tight text-brand-text sm:text-6xl">
			Software built to<br /><span class="text-brand-primary">last and perform</span>
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-brand-muted">
			We design and build custom web applications for businesses that need reliable, maintainable
			software — without the overhead of a large agency.
		</p>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/portfolio">View Our Work</Button>
			<Button href="/contact" variant="secondary">Get in Touch</Button>
		</div>
	</div>
</section>

<!-- Services summary -->
<section class="px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<SectionHeader
			eyebrow="What We Do"
			heading="End-to-end software development"
			lead="From architecture to deployment, we handle the full stack so you can focus on your business."
			center
		/>

		<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
			<Card>
				<div class="mb-3 text-brand-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
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
				<h3 class="mb-2 font-display text-lg font-semibold text-brand-text">Web Development</h3>
				<p class="text-sm text-brand-muted">
					Fast, accessible web applications using modern frameworks — built to scale with your needs.
				</p>
			</Card>

			<Card>
				<div class="mb-3 text-brand-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
						/>
					</svg>
				</div>
				<h3 class="mb-2 font-display text-lg font-semibold text-brand-text">
					Software Consulting
				</h3>
				<p class="text-sm text-brand-muted">
					Architecture reviews, tech stack decisions, and process improvements — pragmatic guidance
					that moves projects forward.
				</p>
			</Card>

			<Card>
				<div class="mb-3 text-brand-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 font-display text-lg font-semibold text-brand-text">Custom Solutions</h3>
				<p class="text-sm text-brand-muted">
					Bespoke tooling, integrations, and internal systems tailored to your exact workflow and
					constraints.
				</p>
			</Card>
		</div>

		<div class="mt-10 text-center">
			<Button href="/services" variant="ghost">See all services →</Button>
		</div>
	</div>
</section>

<!-- About CTA -->
<section class="px-6 py-20">
	<div class="mx-auto max-w-3xl text-center">
		<SectionHeader
			eyebrow="About Us"
			heading="Small team. Deep expertise."
			lead="We're a boutique LLC focused on delivering software that's easy to hand off, extend, and trust in production."
			center
		>
			<Button href="/about">Learn more about us</Button>
		</SectionHeader>
	</div>
</section>

<!-- Contact CTA band -->
<section class="relative overflow-hidden bg-brand-surface px-6 py-16">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-2xl text-center">
		<h2 class="font-display text-3xl font-bold text-brand-text">
			Ready to start a project?
		</h2>
		<p class="mt-4 text-brand-muted">
			Tell us what you're building. We'll tell you if we're the right fit.
		</p>
		<div class="mt-8">
			<Button href="/contact">Get in Touch</Button>
		</div>
	</div>
</section>
