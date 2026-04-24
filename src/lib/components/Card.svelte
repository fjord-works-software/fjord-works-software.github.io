<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = ''
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div class="rounded-xl border border-brand-border bg-brand-surface p-6 {className}">
	{@render children()}
</div>
