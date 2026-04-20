<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		heading,
		lead,
		center = false,
		level = 2,
		children
	}: {
		eyebrow?: string;
		heading: string;
		lead?: string;
		center?: boolean;
		level?: 1 | 2 | 3;
		children?: Snippet;
	} = $props();
</script>

<div class={center ? 'text-center' : ''}>
	{#if eyebrow}
		<p class="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-2">{eyebrow}</p>
	{/if}
	<svelte:element this={"h" + level} class="font-display text-3xl sm:text-4xl font-bold text-brand-text">{heading}</svelte:element>
	{#if lead}
		<p class="mt-4 text-brand-muted text-lg {center ? 'mx-auto' : ''} max-w-2xl">{lead}</p>
	{/if}
	{#if children}
		<div class="mt-6">
			{@render children()}
		</div>
	{/if}
</div>
