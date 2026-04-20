<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Contact — Fjord Works Software</title>
	<meta name="description" content="Get in touch with Fjord Works Software LLC to discuss your project." />
</svelte:head>

<div class="mx-auto max-w-2xl px-6 py-20">
	<SectionHeader
		eyebrow="Contact"
		heading="Let's talk"
		lead="Tell us about your project. We'll get back to you within one business day."
	/>

	<div class="mt-12 space-y-6">
		<div>
			<p class="text-brand-muted text-sm mb-4">
				The fastest way to reach us is by email. Include a brief description of what you're building
				and where you're at.
			</p>
			<Button href="mailto:hello@fjordworkssoftware.com">
				Email hello@fjordworkssoftware.com
			</Button>
		</div>

		<div class="border-t border-brand-border pt-6 flex gap-4">
			<a
				href="https://linkedin.com/company/fjord-works-software"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-brand-muted hover:text-brand-primary transition-colors"
			>
				LinkedIn ↗
			</a>
			<a
				href="https://github.com/fjordworkssoftware"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-brand-muted hover:text-brand-primary transition-colors"
			>
				GitHub ↗
			</a>
		</div>
	</div>
</div>
