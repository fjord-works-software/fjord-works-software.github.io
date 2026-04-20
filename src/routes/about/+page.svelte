<script lang="ts">
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>About — Fjord Works Software</title>
	<meta name="description" content="Learn about Fjord Works Software LLC — who we are, how we work, and what we value." />
</svelte:head>

<div class="mx-auto max-w-4xl px-6 py-20">
	<SectionHeader
		eyebrow="About Us"
		heading="Who we are"
		lead="Fjord Works Software LLC is a custom software consultancy. Content coming soon."
	/>
	<div class="mt-12">
		<Button href="/contact">Get in Touch</Button>
	</div>
</div>
