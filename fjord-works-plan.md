# Fjord Works Software — Website Build Plan

**Stack:** SvelteKit + Tailwind CSS + mdsvex
**Deploy target:** GitHub Pages (static adapter) on existing custom domain
**Goal:** Lead generation + portfolio/credibility showcase (equal weight)

---

## Design System (from logo)

Pulled from the provided logo to keep brand identity consistent across the site.

### Color Palette

| Token                  | Hex       | Usage                                                     |
| ---------------------- | --------- | --------------------------------------------------------- |
| `--color-bg`           | `#1F2428` | Page background (matches logo backdrop)                   |
| `--color-surface`      | `#2A3036` | Cards, elevated panels                                    |
| `--color-primary`      | `#2DD4BF` | Teal/cyan accent (circuit glow) — CTAs, links, highlights |
| `--color-primary-deep` | `#0F766E` | Hover state, darker accent                                |
| `--color-text`         | `#F5F7FA` | Primary text                                              |
| `--color-text-muted`   | `#9CA3AF` | Secondary text, captions                                  |
| `--color-border`       | `#374151` | Dividers, subtle outlines                                 |

### Typography

- **Headings:** Inter or Space Grotesk (bold, tight tracking — matches the confident sans-serif in the logo wordmark)
- **Body:** Inter (regular, comfortable reading)
- **Mono:** JetBrains Mono (for code snippets, technical accents)

### Visual Motifs

- Subtle circuit-line SVG patterns as section backgrounds (echoes logo)
- Teal glow on hover for interactive elements
- Mountain/fjord silhouette accents in hero or footer
- Dark-first theme (light mode deferred unless requested later)

---

## Phase 0 — Prerequisites & Decisions

**Goal:** Lock down the boring-but-important stuff before writing code.

- [ ] Confirm custom domain name (needed for `svelte.config.js` and canonical URLs in SEO tags)
- [ ] Decide on analytics provider (Plausible / Umami / GoatCounter are privacy-friendly and static-site-compatible; GA4 if preferred)
- [ ] Decide form provider (Formspree vs. Web3Forms — both work; Web3Forms has a generous free tier and no account-per-form overhead)
- [ ] Gather content assets: company bio, founder bio(s), service descriptions, 2–5 portfolio case studies with screenshots, any logos of past clients
- [ ] Pick fonts and confirm license (Google Fonts covers Inter, Space Grotesk, JetBrains Mono)
- [ ] Back up the current placeholder `index.html` repo state (tag a release or branch it) so the switch-over is reversible

---

## Phase 1 — Project Scaffolding

**Goal:** A running SvelteKit site with Tailwind, configured for static GitHub Pages deploy.

### Tasks

1. `npm create svelte@latest fjord-works-site` — choose skeleton project, TypeScript (recommended), ESLint, Prettier
2. Install Tailwind: `npx svelte-add@latest tailwindcss` (handles postcss config automatically)
3. Install static adapter: `npm i -D @sveltejs/adapter-static`
4. Configure `svelte.config.js`:
   - Swap `adapter-auto` for `adapter-static`
   - Set `paths.base` only if deploying to a subpath (not needed with custom domain)
   - Set `prerender = true` in root `+layout.js`
5. Add `CNAME` file to `static/` with your custom domain so GitHub Pages preserves DNS config on each deploy
6. Install mdsvex: `npm i -D mdsvex` and configure in `svelte.config.js` (`extensions: ['.svelte', '.md']`, preprocess with `mdsvex()`)
7. Set up folder structure:
   ```
   src/
     lib/
       components/    # reusable UI (Button, Card, SectionHeader, etc.)
       data/          # services.ts, portfolio.ts (structured content)
       assets/        # logo, images, icons
     routes/
       +layout.svelte
       +page.svelte            # Home
       about/+page.svelte
       services/+page.svelte
       portfolio/+page.svelte
       blog/+page.svelte
       blog/[slug]/+page.svelte
       contact/+page.svelte
     posts/           # .md blog files
   ```
8. Commit to `main`, verify `npm run dev` works

### Exit criteria

Blank SvelteKit site runs locally with Tailwind classes applied. Logo renders on a placeholder home page.

---

## Phase 2 — Design System & Layout Shell

**Goal:** The nav, footer, and visual language are locked in. Every page built after this inherits it.

### Tasks

1. Configure Tailwind theme in `tailwind.config.js`:
   - Extend `colors` with the palette above as named tokens (`brand.bg`, `brand.primary`, etc.)
   - Register font families
   - Add a subtle `glow` box-shadow utility for teal accents
2. Global styles in `src/app.css`: CSS variables, base typography resets, smooth scroll
3. Build `+layout.svelte` with:
   - Sticky top nav (logo left, links right: About / Services / Portfolio / Blog / Contact)
   - Mobile hamburger menu
   - Footer (logo, brief tagline, nav links, social/GitHub links, copyright, "LLC" disclosure)
4. Build core reusable components in `src/lib/components/`:
   - `Button.svelte` (primary, secondary, ghost variants)
   - `SectionHeader.svelte` (eyebrow + heading + lead)
   - `Card.svelte`
   - `CircuitBackdrop.svelte` (decorative SVG pattern)
5. Favicon + app icons from the logo (use a generator like realfavicongenerator.net, drop output in `static/`)

### Exit criteria

Navigating between empty route stubs shows consistent header/footer. Design feels cohesive with the logo.

---

## Phase 3 — Core Pages (Home, About, Services, Contact)

**Goal:** The marketing spine of the site is live.

### Home (`/`)

- Hero: logo, headline, subhead, two CTAs (View Work / Get in Touch)
- "What we do" — 3-column summary of core services
- "Selected work" — 2–3 featured portfolio items with links
- Short about blurb with CTA to `/about`
- Contact CTA band near footer

### About (`/about`)

- Company story / origin
- Founder bio(s) with photo
- Values or approach (3–4 short pillars)
- Location note (local LLC — mention the region you serve)

### Services (`/services`)

- Detailed cards or sections per service offering
- Tech stack capabilities (icons + names)
- "How we work" — short process (discovery → build → handoff or similar)
- CTA to contact

### Contact (`/contact`)

- Short intro copy
- Form wired to chosen third-party provider (Formspree/Web3Forms) — fields: name, email, company (optional), message, budget range (optional), project type (select)
- Success/error states handled client-side
- Alternative contact (direct email, LinkedIn, GitHub)

### Tasks

- Pull service/about copy from Phase 0 content gathering
- Build each page using the component library from Phase 2
- Wire contact form submission, test it end-to-end with a real email delivery
- Add honeypot field or use provider's built-in spam protection

### Exit criteria

All four pages are content-complete, responsive, and the contact form delivers a test email.

---

## Phase 4 — Portfolio

**Goal:** Credibility showcase with depth.

### Tasks

1. Define portfolio data schema in `src/lib/data/portfolio.ts`:
   ```ts
   { slug, title, client, summary, tags, image, year, problem, solution, outcome, techStack, link? }
   ```
2. Build `/portfolio` index page — grid of case study cards, filterable by tag/tech if >6 entries
3. Build `/portfolio/[slug]` detail template (can be a dynamic route reading from data file, or one `+page.svelte` per project)
4. Optimize images — use `@sveltejs/enhanced-img` or pre-process to WebP/AVIF
5. Add "Next project" navigation at bottom of each case study

### Exit criteria

At least 2–3 real case studies published. Each tells a clear problem → solution → outcome story.

---

## Phase 5 — Blog (mdsvex)

**Goal:** SEO-friendly content hub with minimal authoring friction.

### Tasks

1. Configure mdsvex with frontmatter support (title, date, description, tags, author, cover image, draft)
2. Create `src/posts/` for `.md` files
3. Build `src/lib/posts.ts` — helper that imports all posts via `import.meta.glob`, sorts by date, filters drafts in production
4. `/blog` index — list posts with title, date, excerpt, tags
5. `/blog/[slug]` — renders post markdown with custom mdsvex components (styled headings, code blocks with Shiki or prism, callouts, images)
6. Add tag pages (`/blog/tag/[tag]`) — optional, defer if not needed
7. RSS feed endpoint (`/rss.xml` via a `+server.ts`) — set `prerender = true`
8. Write 1–2 launch posts so `/blog` isn't empty on day one

### Exit criteria

Dropping a new `.md` file in `src/posts/` and pushing to main publishes a new post.

---

## Phase 6 — SEO & Analytics

**Goal:** The site is discoverable and you know who's visiting.

### Tasks

1. Per-page `<svelte:head>` with unique title, description, canonical URL
2. Open Graph + Twitter Card meta tags (default fallback + per-page overrides)
3. Generate OG images — either static per-page designs or a shared branded template
4. `sitemap.xml` — build via a `+server.ts` endpoint that reads portfolio + blog data, set `prerender = true`
5. `robots.txt` in `static/`
6. JSON-LD structured data:
   - `Organization` schema on layout (company name, logo, sameAs for social)
   - `Article` schema on blog posts
   - `BreadcrumbList` on nested pages
7. Install analytics (Plausible/Umami/GoatCounter recommended — simple script tag, no cookie banner needed)
8. Verify ownership in Google Search Console + submit sitemap
9. Run Lighthouse audit — target 95+ on all four categories; fix any flagged issues

### Exit criteria

Lighthouse passes, sitemap + robots.txt live, analytics recording real visits, search console verified.

---

## Phase 7 — Deployment Automation

**Goal:** `git push` to main → live site in ~2 minutes.

### Tasks

1. Create `.github/workflows/deploy.yml`:
   - Trigger on push to `main`
   - Node setup, install deps, `npm run build`
   - Upload `build/` as a Pages artifact
   - Deploy to Pages (using `actions/deploy-pages@v4`)
2. In repo Settings → Pages, set source to "GitHub Actions"
3. Confirm `CNAME` file is in the build output (copied from `static/`) so custom domain persists
4. Push, verify deploy succeeds, site loads on custom domain
5. Add a status badge to README

### Exit criteria

Push to main deploys automatically. Custom domain resolves to new site with HTTPS.

---

## Phase 8 — Polish & Launch Prep

**Goal:** Remove rough edges before public announcement.

### Tasks

- Cross-browser test (Chrome, Firefox, Safari, mobile Safari, mobile Chrome)
- Accessibility audit — keyboard nav, focus indicators, color contrast, alt text, semantic HTML, aria labels on icon buttons, `prefers-reduced-motion` respected
- Lighthouse accessibility score ≥95
- 404 page (`src/routes/+error.svelte`) — on-brand, with nav back to home
- Loading state on contact form submit
- Legal footer links: Privacy Policy, Terms (even if minimal — required for LLC professionalism and if using analytics)
- Test contact form spam filter with junk submissions
- Verify all external links open in new tab with `rel="noopener"`
- Social share preview tested on LinkedIn, Twitter/X, and as a Slack/Discord paste

### Exit criteria

You'd be comfortable showing this to a potential client cold.

---

## Phase 9 — Post-Launch (Ongoing)

- Publish blog posts on a cadence (monthly minimum for SEO momentum)
- Add new portfolio case studies as projects wrap
- Monitor analytics for what's landing and what isn't
- A/B test CTA copy on home/contact if traffic warrants
- Consider adding: testimonials section, FAQ, pricing guide, newsletter signup (once you have regular blog traffic)

---

## Risks & Things to Watch

- **Form provider lock-in** — keep the form handler abstracted so swapping providers is a one-file change
- **Custom domain + Pages gotcha** — the `CNAME` file MUST be in `static/` so every build preserves it; losing it breaks the domain until re-added
- **mdsvex + TypeScript** — occasionally type-finicky with frontmatter; have a fallback to plain JS if it slows you down
- **Image weight** — circuit-pattern SVGs and case study screenshots add up; budget for `<200KB` per page on initial load
- **Prerender failures** — any route hitting runtime-only APIs will break static builds; catch these early in Phase 1 by enabling strict prerender
