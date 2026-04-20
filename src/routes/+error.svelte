<script lang="ts">
	import { page } from '$app/state';
	import CircuitBackdrop from '$lib/components/CircuitBackdrop.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>{page.status === 404 ? 'Page Not Found' : 'Error'} — Fjord Works Software</title>
</svelte:head>

<section class="relative overflow-hidden px-6 py-32">
	<CircuitBackdrop />
	<div class="relative mx-auto max-w-2xl text-center">
		<p class="font-display text-8xl font-bold text-brand-primary opacity-30">{page.status}</p>
		<h1 class="font-display mt-4 text-3xl font-bold text-brand-text">
			{page.status === 404 ? 'Page not found' : 'Something went wrong'}
		</h1>
		<p class="mt-4 text-brand-muted">
			{page.status === 404
				? "The page you're looking for doesn't exist or may have moved."
				: page.error?.message ?? 'An unexpected error occurred.'}
		</p>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button href="/">Go home</Button>
			<Button href="/contact" variant="secondary">Get in Touch</Button>
		</div>
	</div>
</section>
