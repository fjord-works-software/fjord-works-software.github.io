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
		<p class="mb-2 text-sm font-semibold tracking-wider text-brand-primary uppercase">{eyebrow}</p>
	{/if}
	<svelte:element
		this={'h' + level}
		class="font-display text-3xl font-bold text-brand-text sm:text-4xl">{heading}</svelte:element
	>
	{#if lead}
		<p class="mt-4 text-lg text-brand-muted {center ? 'mx-auto' : ''} max-w-2xl">{lead}</p>
	{/if}
	{#if children}
		<div class="mt-6">
			{@render children()}
		</div>
	{/if}
</div>
