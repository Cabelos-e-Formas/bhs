# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## Architecture Overview

Static marketing site for **Brazilian Hair Studio** (hair salon, Naples FL + 4 units in Criciúma, Brazil). Built to be fast, trilingual, and editable by non-developers via a CMS.

**Data flow:**

```
src/content/**/*.yaml  ──► Keystatic reader  ──► Astro component (.astro frontmatter)
src/i18n/ui.ts         ──► useTranslations()  ──► template expressions
```

**Request flow:**

```
/         → redirect → /home   (index.astro just does Astro.redirect)
/home     → Layout.astro wraps → [7 section components in order]
/services → Layout.astro wraps → ServicesPageSection
/team     → Layout.astro wraps → TeamPageSection
/about    → Layout.astro wraps → AboutUsSection
/pt/*     → same pages, PT locale prefix
/sp/*     → same pages, SP locale prefix
```

**Deployment:** Vercel (adapter: `@astrojs/vercel`), static output.

---

## Full Tech Stack

| Layer | Tool | Version / Notes |
|---|---|---|
| Framework | Astro | v5, file-based routing |
| Styling | Tailwind CSS | v4 via `@tailwindcss/vite` (no PostCSS) |
| Animations | GSAP + ScrollTrigger | registered per-component |
| Smooth scroll | Lenis | initialized in `Layout.astro` script |
| CMS | Keystatic | local storage, collections + singletons |
| Icons | astro-icon | `material-symbols-light` iconify set |
| Adapter | @astrojs/vercel | static site deployment |
| Integrations | @astrojs/react, @astrojs/markdoc | for Keystatic UI |
| Fonts | Baskerville (self-hosted) + Lato (Google Fonts) | |
| Language | TypeScript | strict, `tsconfig.json` |

---

## Environment Variables

This project uses **Keystatic local storage** — no database or external CMS API. No `.env` required for local dev.

For production (Vercel), no env vars are currently wired. If Keystatic is ever switched to GitHub/Cloud storage mode, these would be added:

```
KEYSTATIC_GITHUB_CLIENT_ID
KEYSTATIC_GITHUB_CLIENT_SECRET
KEYSTATIC_SECRET
```

---

## Content Directory Structure

```
src/content/
  services/                  # 2×2 grid on home + full list on /services
    producao-de-noiva.yaml   # order: '01', dark: false
    producao-de-madrinha.yaml
    debutante.yaml
    producao-de-formatura.yaml

  team/                      # Cards on home TeamSection + /team page
    mirela-de-bem.yaml       # initials, name, role_{en|pt|sp}, bio_{en|pt|sp}, experience
    gezi-soares.yaml
    francieli-asmin.yaml

  clients/                   # Testimonials on home ClientsSection
    amanda-r.yaml            # name, quote_{en|pt|sp}, occasion_{en|pt|sp}
    patricia-m.yaml
    julia-s.yaml

  history/                   # Brand history timeline (AboutUs page)
    cabelos-e-formas-by-mirela.yaml
    cabelos-e-formas-by-sil.yaml
    cabelos-e-formas-centro.yaml
    cabelos-e-formas-icara.yaml

  linktree/                  # Linktree singleton (link-in-bio page)
    index.yaml               # profile_name, tagline_{en|pt|sp}, links[]

  i18n/                      # Keystatic singletons for editable UI text
    en/                      # mirrors src/i18n/ui.ts keys, editable via CMS
    pt/
    sp/
```

---

## Collections & Models (Keystatic)

Defined in `keystatic.config.ts`. All collections read via `createReader(process.cwd(), keystaticConfig)`.

### `services` collection

```yaml
order: '01'           # sort key — string comparison, zero-pad
dark: false           # true = bg-accent-dark card, false = bg-beige-500
title_en / title_pt / title_sp
desc_en / desc_pt / desc_sp
```

Read in: `ServicesSection.astro`, sorted by `order`.

### `team` collection

```yaml
name: Mirela De Bem
initials: MB          # displayed as large italic placeholder (no photo yet)
role_en / role_pt / role_sp
bio_en / bio_pt / bio_sp
experience: "25 years"
```

Read in: `TeamSection.astro`, `TeamPageSection.astro`.

### `clients` collection

```yaml
name: Amanda R.
quote_en / quote_pt / quote_sp
occasion_en / occasion_pt / occasion_sp
```

Read in: `ClientsSection.astro`.

### `history` collection

```yaml
year: "1999"
title_en / title_pt / title_sp
desc_en / desc_pt / desc_sp
image:                # stored in public/images/history/
```

Read in: `AboutUsSection.astro`.

### `linktree` singleton

```yaml
profile_name: "Brazilian Hair Studio"   # used in <title> only, logo shows the name visually
tagline_en / tagline_pt / tagline_sp
links[]:
  label_en / label_pt / label_sp
  url             # tel:, https:// — language-agnostic
  icon            # calendar | whatsapp | google | website | instagram | facebook
  subtitle        # phone number, @handle, address — language-agnostic
  highlight       # true = filled beige button (primary CTA), false = outline
```

Read in: `src/pages/linktree.astro`, `src/pages/pt/linktree.astro`, `src/pages/sp/linktree.astro`.
Standalone pages — no Layout.astro, no nav/footer. Route: `/linktree`, `/pt/linktree`, `/sp/linktree`.

### Keystatic Singletons (`en`, `pt`, `sp`)

Editable versions of `src/i18n/ui.ts` keys — flat fields mapping `nav_home`, `hero_highlight`, etc. Currently, components read from `ui.ts` directly (not from Keystatic singletons). The singletons exist for future CMS-driven copy editing.

---

## i18n

- Locales: `en` (default, no prefix), `pt` (`/pt/...`), `sp` (`/sp/...`)
- Config: `astro.config.mjs` → `i18n.routing.prefixDefaultLocale: false`
- Translation source: `src/i18n/ui.ts` — flat key-value object, all 3 locales
- Key pattern: `section.key` (e.g. `hero.title`, `team.mb.bio`, `services.01.desc`)
- Helpers in `src/i18n/utils.ts`:
  - `getLangFromUrl(url)` — extracts locale from pathname first segment
  - `useTranslations(lang)` — returns `t(key)` function with EN fallback
  - `localePath(lang, path)` — prefixes path with lang (skips prefix for EN)
  - `switchLangPath(url, targetLang)` — computes equivalent URL in target locale

**Adding a new translation key:** add to all 3 locales in `ui.ts`, then use `t("key")` in the component. TypeScript will error if key is missing in `defaultLang` locale.

---

## Page Sections (render order in `/home`)

1. `HeroSection` — full-viewport hero, parallax zoom on `backgroundSize`, CTA → `tel:+12393188366`
2. `AboutSection` — image + text block
3. `NumbersSection` — 4 stats (years / brides / units / specialists)
4. `ServicesSection` — reads `services` collection, 2×2 grid, staggered scroll animation
5. `TeamSection` — reads `team` collection, auto-fit grid, staggered scroll animation
6. `ClientsSection` — reads `clients` collection, testimonial cards
7. `UnitsSection` — hardcoded USA + Brazil unit info

---

## Design Patterns

1. **i18n in every component** — Always `getLangFromUrl(Astro.url)` then `useTranslations(lang)` in frontmatter. Never hardcode copy.

2. **Lang-keyed field access for content** — Multilingual YAML fields are accessed as `entry[\`title_${lang}\`]`. TypeScript cast needed: `entry[\`role_${lang}\` as keyof typeof entry]`.

3. **Keystatic reader in frontmatter** — `createReader(process.cwd(), keystaticConfig)` is instantiated at component build time. All `await reader.collections.X.all()` calls happen in the Astro frontmatter (`---` block).

4. **Sort content by `order` field** — Services are sorted via `.sort((a, b) => a.entry.order.localeCompare(b.entry.order))`. Keep `order` zero-padded strings (`'01'`, `'02'`) for correct string sort.

5. **Dark/light card variant via boolean** — Content items carry a `dark: boolean` field. Components apply `bg-accent-dark` vs `bg-beige-500` (and matching text colors) based on it.

6. **Section-based page composition** — Pages are thin: import Layout + section components, render in order. No logic in page files.

7. **GSAP scroll animations per component** — Each section owns its own `<script>` block, imports gsap + ScrollTrigger, calls `gsap.registerPlugin(ScrollTrigger)`. Never share a global GSAP context across components.

8. **Lenis smooth scroll + custom event** — Initialized once in `Layout.astro`. Emits `lenis-scroll` CustomEvent on the window so other scripts can listen without importing Lenis directly.

9. **Button polymorphism** — `Button.astro` renders `<a>` when `href` is set, `<button>` otherwise. Variants: `dark` / `light`. Sizes: `sm` / `md` / `lg`.

10. **Noise overlay via CSS pseudo-element** — `.noise` class on `<html>` adds SVG fractal noise via `::before` pseudo-element. Defined in `global.css`.

11. **Per-page `global.css` import** — Each `*.astro` page imports `"../styles/global.css"` directly, NOT in `Layout.astro`. This is intentional — Astro deduplicates it; keeping it in pages makes the dependency explicit.

12. **Tailwind config via `@config` directive** — `global.css` uses `@config "../../tailwind.config.ts"` to reference the shared Tailwind theme. Do not use PostCSS — Tailwind v4 runs via the Vite plugin.

13. **Redirect entry point** — `/` (`src/pages/index.astro`) only contains `return Astro.redirect("/home")`. The real home is `/home` (`src/pages/home.astro`). Same pattern for `/pt/` → `/pt/home` and `/sp/` → `/sp/home`.

14. **Initials as image placeholder** — Team cards use large italic serif initials (opacity 0.35) instead of `<img>` tags. When real photos are added, replace the initials `<div>` with an Astro `<Image>` imported from `src/assets/`.

---

## Content Update Workflow

When updating content (typical for this project):

1. **Add/edit YAML files** in `src/content/{services,team,clients,history}/`
2. **Run dev server** — Keystatic admin is at `localhost:4321/keystatic` for visual editing
3. **Update `src/i18n/ui.ts`** if adding new UI text keys (add to all 3 locales)
4. **Build & preview** before shipping: `npm run build && npm run preview`
5. **Deploy** — push to `main`, Vercel auto-deploys

---

## Post-Implementation Checklist

- [ ] All 3 locales (`en`, `pt`, `sp`) updated in `src/i18n/ui.ts` for any new copy
- [ ] New content YAML files have all required `_en`, `_pt`, `_sp` fields
- [ ] New section components call `getLangFromUrl` + `useTranslations` in frontmatter
- [ ] GSAP scripts register `ScrollTrigger` locally (not assumed to be global)
- [ ] New pages import `global.css` at the page level
- [ ] New pages have locale variants under `src/pages/pt/` and `src/pages/sp/`
- [ ] `npm run build` passes with no type errors before shipping

---

## Common Hurdles

> **Note:** This section should be filled in as real problems are encountered. When a non-obvious bug or integration issue is solved, document it here with the symptom, root cause, and fix.

### Keystatic `slugField` returns `null` for that field in entry data

**Symptom:** A multilingual label field (e.g. `label_en`) reads as `null` at runtime even though the YAML file contains a value. Other locales (`label_pt`, `label_sp`) work fine.

**Root cause:** Whichever field is set as `slugField` in the Keystatic collection schema is **excluded from the `entry` object** returned by `reader.collections.X.all()`. Keystatic encodes that field's value as the file slug (filename) instead of storing it in the entry data, so it always comes back `null`.

**Fix:** Never use a content field you need to read as the `slugField`. Add a dedicated `id` field to the schema (`fields.text(...)`) and set `slugField: 'id'`. Add the corresponding `id` value to each YAML file (matching the filename). All other fields, including `label_en`, will then be regular fields and return their YAML values normally.

```ts
// keystatic.config.ts
collection({
  slugField: 'id',   // dedicated slug — never used for display
  schema: {
    id: fields.text({ label: 'ID (slug)' }),
    label_en: fields.text({ label: 'Label (EN)' }),  // now a regular field ✓
    // ...
  }
})
```

### TypeScript generic syntax inside Astro JSX template causes parse error

**Symptom:** Build error like `Expected ";" but found "<string, unknown"` when using a TypeScript type cast with generics (e.g. `as Record<string, unknown>`) inside the template section of an `.astro` file.

**Root cause:** The Astro/JSX parser treats `<string` as the start of a JSX element, not a TypeScript generic.

**Fix:** Move any logic involving TypeScript generics or casts into the frontmatter (`---` block), where it's plain TypeScript. Pre-compute derived values there and pass them as simple variables into the template.

```ts
// ✅ In frontmatter — TS generics work fine
const links = rawLinks.map(({ entry }) => {
  const label = entry[`label_${lang}` as keyof typeof entry] as string ?? entry.label_en;
  return { entry, label };
});
```

```astro
<!-- ✅ In template — just use the pre-computed value -->
{links.map(({ entry, label }) => <li>{label}</li>)}
```

---

## Project Structure

```
src/
  assets/          # Images (bhs-logo.png, random-girl.jpg, sun-ray.png, background.svg)
  components/
    sections/      # HeroSection, AboutSection, NumbersSection, ServicesSection,
                   # TeamSection, ClientsSection, UnitsSection,
                   # ServicesPageSection, TeamPageSection, AboutUsSection
    ui/            # Button.astro, PageHero.astro
    Header.astro   # Sticky header, desktop nav, mobile hamburger, language switcher
    Footer.astro   # Logo, nav links, contact info
  content/         # YAML data files (see Content Directory Structure above)
  i18n/
    ui.ts          # All translation strings for en/pt/sp
    utils.ts       # getLangFromUrl, useTranslations, localePath, switchLangPath
  layouts/
    Layout.astro   # HTML shell — sets html[lang], Lenis init, Header + slot + Footer
  pages/
    index.astro    # → redirect to /home
    home.astro     # Home page (all 7 sections)
    services.astro # Services page
    team.astro     # Team page
    about.astro    # About Us page
    linktree.astro # Linktree page (standalone, no Layout)
    pt/            # Same pages under /pt/ prefix
    sp/            # Same pages under /sp/ prefix
  styles/
    global.css     # Tailwind import, Baskerville @font-face, .noise utility
public/
  fonts/           # Self-hosted Baskerville woff files
  favicon.ico / favicon.svg
astro.config.mjs   # Astro config: i18n routing, vite plugins, Vercel adapter
keystatic.config.ts # CMS collections + singletons schema
tailwind.config.ts  # Theme: colors (beige-500, beige-700, accent-dark), fonts
```

**Custom color tokens:**

- `beige-500` → `#edebdf` (main background)
- `beige-700` → `#686464` (muted text)
- `accent-dark` → `#0e3b31` (dark green, primary brand color)

**Font families:**

- `font-sans` → Lato (Google Fonts)
- `font-serif` → Baskerville (self-hosted, used for italic display text)
