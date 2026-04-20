<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		variant = 'primary',
		href,
		children,
		...props
	}: {
		variant?: 'primary' | 'secondary' | 'ghost';
		href?: string;
		children: Snippet;
		[key: string]: unknown;
	} = $props();

	const base =
		'inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg cursor-pointer';

	const variants = {
		primary: 'bg-brand-primary text-brand-bg hover:bg-brand-primary-deep',
		secondary: 'border border-brand-primary text-brand-primary hover:bg-brand-primary/10',
		ghost: 'text-brand-muted hover:text-brand-primary hover:bg-brand-surface'
	};
</script>

{#if href}
	<a {href} class="{base} {variants[variant]}" {...props}>
		{@render children()}
	</a>
{:else}
	<button class="{base} {variants[variant]}" {...props}>
		{@render children()}
	</button>
{/if}
