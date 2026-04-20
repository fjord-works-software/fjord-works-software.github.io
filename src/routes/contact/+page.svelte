<script lang="ts">
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Contact — Fjord Works Software</title>
	<meta
		name="description"
		content="Get in touch with Fjord Works Software LLC. Based in Searcy, AR — serving Central Arkansas and beyond."
	/>
	<link rel="canonical" href="https://fjordworkssoftware.com/contact" />
	<meta property="og:title" content="Contact — Fjord Works Software" />
	<meta property="og:description" content="Get in touch with Fjord Works Software LLC. Based in Searcy, AR — serving Central Arkansas and beyond." />
	<meta property="og:url" content="https://fjordworkssoftware.com/contact" />
	<meta name="twitter:title" content="Contact — Fjord Works Software" />
	<meta name="twitter:description" content="Get in touch with Fjord Works Software LLC. Based in Searcy, AR — serving Central Arkansas and beyond." />
</svelte:head>

<section class="relative overflow-hidden px-6 py-20">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-2xl">
		<SectionHeader
			eyebrow="Contact"
			heading="Let's talk"
			lead="Tell us about your project — what you're trying to do and where you're at. We'll get back to you within one business day."
		/>

		<div class="mt-12 space-y-8">
			<div>
				<p class="text-sm text-brand-muted mb-5">
					The best first step is a short email. Include a brief description of your project, your
					timeline if you have one, and any constraints we should know about up front.
				</p>
				<Button href="mailto:isaac.daniel.bailey@proton.me">
					Email isaac.daniel.bailey@proton.me
				</Button>
			</div>

			<div class="border-t border-brand-border pt-8">
				<p class="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-4">
					Find us online
				</p>
				<a
					href="https://github.com/fjord-works-software"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-primary transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						/>
					</svg>
					github.com/fjord-works-software
				</a>
			</div>

			<div class="border-t border-brand-border pt-8 text-sm text-brand-muted">
				<p>Based in <strong class="text-brand-text font-medium">Searcy, AR</strong> · Serving Central Arkansas and beyond.</p>
			</div>
		</div>
	</div>
</section>
