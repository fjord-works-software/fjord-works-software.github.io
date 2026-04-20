<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
	<title>About — Fjord Works Software</title>
	<meta
		name="description"
		content="Fjord Works Software LLC is a custom software consultancy based in Searcy, AR. Founded by Isaac Bailey after 18+ years of software development."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden px-6 py-20">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-4xl">
		<SectionHeader
			eyebrow="About Us"
			heading="Built from 18 years of watching businesses work around their software"
			lead="Small businesses deserve tools that fit the way they actually work — not the other way around."
		/>
	</div>
</section>

<!-- Story -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-3xl space-y-5 text-brand-muted leading-relaxed">
		<p>
			Fjord Works came out of a pattern that kept showing up over nearly two decades of software
			work: small businesses constantly working <em class="text-brand-text not-italic">around</em> their
			tools instead of with them.
		</p>
		<p>
			They buy software that's 80% what they need and spend years bending their processes to fit the
			other 20%. They pay monthly subscription fees for features they never touch. They stitch
			together a handful of disconnected systems and hope they keep talking to each other.
		</p>
		<p>
			Custom software, built right, solves this. It fits your workflow exactly, you own it outright,
			and it doesn't charge you a recurring fee just to keep running your business. Fjord Works
			exists to build it.
		</p>
	</div>
</section>

<!-- Founder -->
<section class="px-6 py-16 bg-brand-surface">
	<div class="mx-auto max-w-4xl">
		<SectionHeader eyebrow="Founder" heading="Isaac Bailey" />
		<div class="mt-8 max-w-3xl space-y-4 text-brand-muted leading-relaxed">
			<p>
				Isaac Bailey founded Fjord Works Software after 18+ years of professional software
				development across a wide range of industries and problem domains. A 2008 graduate of
				Harding University, he has spent his career close to the problems businesses actually
				face — and building tools that solve them without creating new ones.
			</p>
			<p>
				The idea behind Fjord Works is simple: most small businesses don't need enterprise
				software or a large agency. They need a capable, straightforward partner who can build
				exactly what they need and hand it over cleanly.
			</p>
		</div>
	</div>
</section>

<!-- Values -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-6xl">
		<SectionHeader
			eyebrow="How We Think"
			heading="What good software means to us"
			center
		/>
		<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
			<Card>
				<div class="mb-4 text-brand-primary">
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
							d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
						/>
					</svg>
				</div>
				<h3 class="font-display text-lg font-semibold text-brand-text mb-2">Secure</h3>
				<p class="text-sm text-brand-muted">
					Security isn't an afterthought. It's built into every project from the first line of code,
					not patched on at the end.
				</p>
			</Card>

			<Card>
				<div class="mb-4 text-brand-primary">
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
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="font-display text-lg font-semibold text-brand-text mb-2">Simple</h3>
				<p class="text-sm text-brand-muted">
					The best software is software your team doesn't have to think about. Complexity that
					doesn't serve the user doesn't belong.
				</p>
			</Card>

			<Card>
				<div class="mb-4 text-brand-primary">
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
							d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
						/>
					</svg>
				</div>
				<h3 class="font-display text-lg font-semibold text-brand-text mb-2">Out of Your Way</h3>
				<p class="text-sm text-brand-muted">
					Technology should adapt to how you work, not dictate it. Good software fits into your
					day and disappears.
				</p>
			</Card>
		</div>
	</div>
</section>

<!-- Location + CTA -->
<section class="relative overflow-hidden bg-brand-surface px-6 py-16">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-3xl text-center">
		<p class="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-3">Location</p>
		<p class="text-brand-text text-lg font-medium">Based in Searcy, AR</p>
		<p class="text-brand-muted mt-1 mb-8">Serving clients throughout Central Arkansas and beyond.</p>
		<Button href="/contact">Start a Conversation</Button>
	</div>
</section>
