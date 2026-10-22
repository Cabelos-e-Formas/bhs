# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Not supported by the Vercel adapter — inspect .vercel/output/static instead
```

---

## Architecture Overview

Static marketing site for **Brazilian Hair Studio** (hair salon, 2950 Winkler Ave, Fort Myers FL, with a 25-year salon history in Criciúma, Brazil). Built to be fast, trilingual and search-friendly. No CMS: content lives in YAML files in the repo.

**Data flow:**

```
src/content/**/*.yaml  ──► Astro content collections (src/content.config.ts) ──► getCollection() in frontmatter
src/i18n/ui.ts         ──► useTranslations()  ──► template expressions
src/data/contact.ts    ──► phone, address, social links (language-agnostic)
```

**Routes:**

```
/            → Home (src/pages/index.astro)
/services    → ServicesPageSection
/about       → AboutUsSection
/appointment → AppointmentSection
/linktree    → standalone link-in-bio page (noindex)
/404         → 404.html, served with a real 404 status
/pt/*  /es/* → same pages per locale
```

Redirects (301) in `astro.config.mjs`: `/home → /`, `/pt/home → /pt`, `/sp/* → /es/*` (Spanish moved from `/sp` to `/es`).

**Deployment:** Vercel (`@astrojs/vercel`), fully static. A move to Cloudflare is planned — the redirects and trailing-slash rule are currently emitted as Vercel config by the adapter, so re-create them (`public/_redirects`) when switching.

---

## Full Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Astro | v5, file-based routing, static output |
| Styling | Tailwind CSS | v4 via `@tailwindcss/vite` (no PostCSS) |
| Content | Astro content collections | YAML + Zod schemas in `src/content.config.ts` |
| Animations | CSS + one small IntersectionObserver | `[data-reveal]` / `[data-count]` in `Layout.astro`; no GSAP/Lenis |
| Icons | astro-icon | `material-symbols-light` iconify set |
| SEO | `@astrojs/sitemap` | i18n alternates; `public/robots.txt` |
| Adapter | @astrojs/vercel | static deployment |
| Fonts | Lato (`@fontsource/lato`, 300/400/700) + Baskerville (local, else self-hosted BT) | Lato preloaded in `Layout.astro` |
| Language | TypeScript | strict |

---

## Environment Variables

None required for local dev.

Optional: `INSTAGRAM_ACCESS_TOKEN` (long-lived Instagram API token for @brazilian.hairstudio). Read at **build time** by `src/lib/instagram.ts`; post images are downloaded and optimized by `astro:assets`. Without it, `InstagramSection` shows only the handles and social links. Posts refresh only when the site rebuilds. See `.env.example`.

---

## Content

```
src/content/
  services/        # Home services index — order, title_{en|pt|es}, desc_{en|pt|es}
  clients/         # Reviews — quote_{en|pt|es}, occasion_{en|pt|es}
  history/         # About-page timeline — year, title_*, desc_*, image?
  linktree/        # index.yaml — profile_name, tagline_*
  linktree-links/  # order, label_*, url, icon, subtitle, highlight
```

- Schemas live in `src/content.config.ts`; the build fails if a YAML file is missing a field.
- Entry `id` = file name (e.g. `brazilian-smoothing`). `ServicesSection` maps service ids to photos.
- Read localized fields with `localized(data, "title", lang)` from `src/i18n/utils.ts` (falls back to EN).

To edit content: change the YAML, run `npm run build`, push.

---

## i18n

- Locales: `en` (default, no prefix), `pt` (`/pt/...`), `es` (`/es/...`)
- Translation source: `src/i18n/ui.ts` — flat key-value object, all 3 locales
- Helpers in `src/i18n/utils.ts`:
  - `getLangFromUrl(url)`, `useTranslations(lang)`, `localized(data, field, lang)`
  - `localePath(lang, path)` — prefixes path with lang (none for EN), never a trailing slash
  - `switchLangPath(url, lang)` / `unlocalizedPath(url)` — equivalent URL in another locale
  - `langTags` — BCP 47 tags (`en`, `pt-BR`, `es`) for `html[lang]`, hreflang and `Intl`

**Adding a translation key:** add it to all 3 locales in `ui.ts`, then use `t("key")`.

---

## SEO

All handled in `src/layouts/Layout.astro` — every page passes `title` and `description`:

- Per-page meta from `meta.<page>.title` / `meta.<page>.description` keys (title ≤ ~60 chars, description ≤ ~160)
- Self-referencing canonical + reciprocal hreflang (`en`, `pt-BR`, `es`, `x-default` → EN)
- Open Graph / Twitter card with a generated 1200×630 share image
- `HairSalon` JSON-LD (NAP, hours, sameAs). Do **not** add a self-serving `aggregateRating`.
- `noindex` prop for utility pages (404); linktree sets its own `noindex`
- `site` + `trailingSlash: 'never'` in `astro.config.mjs`; sitemap at `/sitemap-index.xml`

Audit and open items: `docs/seo-audit.md`.

---

## Page Sections (render order on `/`)

1. `HeroSection` — oversized pairing headline crossing a portrait photo (load wipe, scroll drift), specialties ledger + CTA
2. `AboutSection` — statement headline with inline pill photos + intro
3. `NumbersSection` — ledger of 4 oversized stats (count-up)
4. `ServicesSection` — `services` collection; index rows with fill-sweep hover and a cursor-following photo preview
5. `ClientsSection` — forest band, horizontal scroll-snap track of quotes, "325+" links to Google reviews
6. `InstagramSection` — Instagram + Facebook handle marquee, social link cells, latest posts (build time)
7. `UnitsSection` — oversized city line, photo + info ledger (no reveal animations)

---

## Design Patterns

1. **Design system** — follow `docs/design-system.md` (linen/forest bands, 3px rules, 1px ledger grid, Lato Light + Baskerville italic pairing, pill buttons). The nav bar is the reference implementation; it inverts to forest while the page is at the top.
2. **i18n in every component** — `getLangFromUrl(Astro.url)` then `useTranslations(lang)` in frontmatter. Never hardcode copy.
3. **Content in frontmatter** — `await getCollection(...)` and all mapping happen in the `---` block; templates receive plain values.
4. **Sort content by `order`** — zero-padded strings (`'01'`, `'02'`).
5. **Section-based pages** — pages are thin: Layout (with title/description) + section components.
6. **Motion** — no animation libraries. `data-reveal` (fade-up), `data-reveal="mask"` + `.line-mask` (line rise), `data-reveal="wipe"` (image wipe). Content is only hidden once `html.js` is set. Put reveals on cell *content*, not on ledger cells, or the forest grid shows through. Respect `prefers-reduced-motion`.
7. **Images through `astro:assets`** — photos in `src/assets/` (stock in `src/assets/stock/`, credits in `CREDITS.md`). Use `<Image>` with `widths` + `sizes`; only the hero image is `loading="eager"`.
8. **Button** — `<a>` with `href`, `<button>` otherwise. Variants `dark` / `light`, sizes `sm` / `md` / `lg`; extra attributes pass through.
9. **Logo** — SVGs in `public/logo/`, rendered by `ui/Logo.astro` as a CSS mask tinted with `currentColor`.
10. **Per-page `global.css` import** — each page imports `global.css` directly.
11. **Tailwind via `@config`** — `global.css` uses `@config "../../tailwind.config.ts"`. No PostCSS.

---

## Post-Implementation Checklist

- [ ] All 3 locales (`en`, `pt`, `es`) updated in `src/i18n/ui.ts` for any new copy
- [ ] New YAML content has all `_en`, `_pt`, `_es` fields (the schema enforces it)
- [ ] New pages: locale variants under `src/pages/pt/` and `src/pages/es/`, `meta.<page>.*` keys, `title`/`description` passed to `Layout`
- [ ] New sections call `getLangFromUrl` + `useTranslations`
- [ ] `npm run build` passes

---

## Common Hurdles

### TypeScript generics inside Astro templates cause parse errors

**Symptom:** `Expected ";" but found "<string, unknown"` when using a generic cast (e.g. `as Record<string, unknown>`) in the template part of an `.astro` file.

**Cause:** The parser reads `<string` as a JSX element.

**Fix:** Do the cast/mapping in the frontmatter and pass plain values to the template.

### Dynamic redirect patterns fail in a static build

**Symptom:** `Failed to call getStaticPaths for /sp/[...path]`.

**Fix:** List each redirected URL explicitly in `astro.config.mjs` `redirects`.

---

## Project Structure

```
src/
  assets/            # random-girl.jpg, sun-ray.png, stock/ (Unsplash + CREDITS.md)
  components/
    sections/        # Hero, About, Numbers, Services, Clients, Instagram, Units,
                     # ServicesPageSection, AboutUsSection, AppointmentSection
    ui/              # Button, Logo, SectionHeader, CardGrid, PageHero, ClosingBand
    Header.astro     # Fixed nav, full-screen overlay menu, language switch
    Footer.astro
    LinktreeLayout.astro
  content/           # YAML content (see Content)
  content.config.ts  # Collection schemas
  data/contact.ts    # Phone, address, maps, reviews and social URLs
  i18n/              # ui.ts (copy), utils.ts (helpers)
  layouts/Layout.astro  # <head> SEO, JSON-LD, font preloads, reveal script, Header/Footer
  lib/instagram.ts   # Build-time Instagram fetch
  pages/             # index, services, about, appointment, linktree, 404 + pt/ + es/
  styles/global.css  # Tailwind, fonts, .noise, .logo-mask, reveal utilities
public/
  fonts/  logo/  favicon.svg  favicon.ico  robots.txt
docs/
  design-system.md   # Visual rules
  seo-audit.md       # SEO audit + owner checklist
```

**Color tokens:** `beige-300` #f5f4f0 (paper) · `beige-500` #edebdf (background) · `beige-700` #686464 (muted text, linen only) · `accent-dark` #0e3b31 (brand green)

**Fonts:** `font-sans` Lato · `font-serif` Baskerville (italic display voice)
