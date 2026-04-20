<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		heading,
		lead,
		center = false,
		children
	}: {
		eyebrow?: string;
		heading: string;
		lead?: string;
		center?: boolean;
		children?: Snippet;
	} = $props();
</script>

<div class={center ? 'text-center' : ''}>
	{#if eyebrow}
		<p class="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-2">{eyebrow}</p>
	{/if}
	<h2 class="font-display text-3xl sm:text-4xl font-bold text-brand-text">{heading}</h2>
	{#if lead}
		<p class="mt-4 text-brand-muted text-lg {center ? 'mx-auto' : ''} max-w-2xl">{lead}</p>
	{/if}
	{#if children}
		<div class="mt-6">
			{@render children()}
		</div>
	{/if}
</div>
