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

<div class="bg-brand-surface border border-brand-border rounded-xl p-6 {className}">
	{@render children()}
</div>
