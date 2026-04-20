# Fjord Works Software

[![Deploy to GitHub Pages](https://github.com/fjord-works-software/fjord-works-software.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/fjord-works-software/fjord-works-software.github.io/actions/workflows/deploy.yml)

Marketing and portfolio site for [Fjord Works Software LLC](https://fjordworkssoftware.com).

**Stack:** SvelteKit · Svelte 5 · Tailwind CSS v4 · mdsvex · adapter-static  
**Deploys to:** GitHub Pages via GitHub Actions on push to `main`

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview   # preview the static output locally
```

The static site is output to `build/`. The `CNAME` file in `static/` ensures the custom domain is preserved on every deploy.

## Deploy

Push to `main`. The [deploy workflow](.github/workflows/deploy.yml) builds and publishes to GitHub Pages automatically (~2 min).
