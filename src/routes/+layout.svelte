<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
	let menuOpen = $state(false);

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/portfolio', label: 'Portfolio' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:site_name" content="Fjord Works Software" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-bg"
>
	Skip to main content
</a>

<header class="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/95 backdrop-blur-sm">
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" aria-label="Fjord Works Software — home" class="flex flex-col leading-none">
			<span class="font-display text-lg font-bold text-brand-text">Fjord Works <span class="font-display text-xs font-semibold uppercase tracking-widest text-brand-primary">Software</span></span>
			
		</a>

		<ul class="hidden items-center gap-8 md:flex">
			{#each navLinks as { href, label }}
				<li>
					<a
						{href}
						class="text-sm font-medium transition-colors hover:text-brand-primary {isActive(href)
							? 'text-brand-primary'
							: 'text-brand-muted'}"
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>

		<button
			class="text-brand-muted transition-colors hover:text-brand-primary md:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
		>
			{#if menuOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</nav>

	{#if menuOpen}
		<div class="border-t border-brand-border bg-brand-surface px-6 pb-4 md:hidden">
			<ul class="flex flex-col gap-4 pt-4">
				{#each navLinks as { href, label }}
					<li>
						<a
							{href}
							class="block font-medium transition-colors hover:text-brand-primary {isActive(href)
								? 'text-brand-primary'
								: 'text-brand-muted'}"
							onclick={() => (menuOpen = false)}
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>

<main id="main-content">
	{@render children()}
</main>

<footer class="mt-16 border-t border-brand-border bg-brand-surface">
	<div class="mx-auto max-w-6xl px-6 py-12">
		<div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<a href="/" aria-label="Fjord Works Software — home" class="flex flex-col leading-none">
					<span class="font-display text-lg font-bold text-brand-text">Fjord Works <span class="font-display text-xs font-semibold uppercase tracking-widest text-brand-primary">Software</span></span>
				</a>
				<p class="mt-4 text-sm text-brand-muted">
					Custom software solutions built for clarity and longevity.
				</p>
			</div>

			<div>
				<p class="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
					Navigation
				</p>
				<ul class="flex flex-col gap-2">
					{#each navLinks as { href, label }}
						<li>
							<a {href} class="text-sm text-brand-muted transition-colors hover:text-brand-primary"
								>{label}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
					Get in Touch
				</p>
				<a
					href="mailto:isaac.daniel.bailey@proton.me"
					class="block text-sm text-brand-muted transition-colors hover:text-brand-primary"
				>
					isaac.daniel.bailey@proton.me
				</a>
				<div class="mt-3 flex gap-3">
					<a
						href="https://github.com/fjord-works-software"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="text-brand-muted transition-colors hover:text-brand-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col justify-between gap-2 border-t border-brand-border pt-6 text-xs text-brand-muted sm:flex-row"
		>
			<p>© {new Date().getFullYear()} Fjord Works Software LLC. All rights reserved.</p>
			<p>Registered LLC · Custom software consulting</p>
		</div>
	</div>
</footer>
