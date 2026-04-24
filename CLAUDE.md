# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev          # start dev server
npm run build        # production build → build/
npm run preview      # preview the build locally
npm run check        # svelte-check type checking
npm run lint         # prettier + eslint
npm run format       # auto-format
```

There are no tests. `npm run check` is the closest equivalent.

## Stack

- **SvelteKit 2 + Svelte 5** — runes mode enforced project-wide (`$props()`, `$state()`, `{@render}`)
- **Tailwind CSS v4** — config is in `src/routes/layout.css` via `@theme {}`, not `tailwind.config.js`
- **mdsvex** — markdown in Svelte; extensions `.svx` and `.md` are treated as Svelte components
- **adapter-static** — fully prerendered; `fallback: '404.html'` generates the GitHub Pages 404

All routes prerender via `export const prerender = true` in `src/routes/+layout.ts`.

## Design tokens

All brand colors, fonts, and shadows live in the `@theme {}` block in `src/routes/layout.css`:

| Token           | Value                       |
| --------------- | --------------------------- |
| `brand-bg`      | `#1f2428` (page background) |
| `brand-surface` | `#2a3036` (cards, sections) |
| `brand-primary` | `#2dd4bf` (teal accent)     |
| `brand-text`    | `#f5f7fa`                   |
| `brand-muted`   | `#9ca3af`                   |
| `brand-border`  | `#374151`                   |
| `font-display`  | Space Grotesk               |
| `font-sans`     | Inter                       |
| `font-mono`     | JetBrains Mono              |

Use `font-display` on headings and `text-brand-muted` for supporting text.

## Components

- **`Button`** — renders `<a>` with `href`, `<button>` without. Variants: `primary` (default), `secondary`, `ghost`.
- **`SectionHeader`** — eyebrow label + heading + lead text. Accepts `level` prop (`1 | 2 | 3`, default `2`) to control the heading element. Inner pages use `level={1}` on their first SectionHeader so each page has exactly one `<h1>`.
- **`Card`** — surface-colored bordered box (`bg-brand-surface border-brand-border rounded-xl p-6`).
- **`CircuitBackdrop`** — decorative SVG overlay; place inside `relative overflow-hidden` and the backdrop is `position: absolute`.

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically. Custom domain: `fjordworkssoftware.com` (preserved via `static/CNAME`). Static assets go in `static/` and are served at the root path (e.g. `static/images/foo.png` → `/images/foo.png`).

## SEO pattern

Each page sets canonical URL, OG tags, and Twitter Card tags in `<svelte:head>`. The layout sets `og:site_name`, `og:type`, and `twitter:card` as defaults. JSON-LD structured data uses plain JSON literals inside `<script type="application/ld+json">` — Svelte does not evaluate `{expressions}` inside script tags.
