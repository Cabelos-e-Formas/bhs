# Codebase Structure

**Analysis Date:** 2026-03-14

## Directory Layout

```
brazilian-hair-studio/
├── src/
│   ├── pages/                  # Astro file-based routes
│   ├── components/             # Reusable Astro components
│   │   ├── sections/           # Full-width page sections
│   │   └── ui/                 # Reusable primitives (Button)
│   ├── layouts/                # Base HTML shell
│   ├── i18n/                   # Translation strings & routing utils
│   ├── content/                # Keystatic CMS collections (YAML)
│   ├── assets/                 # Images, logos
│   └── styles/                 # Global CSS & font declarations
├── public/                     # Static assets (fonts, favicon)
├── .planning/                  # Planning documents
├── astro.config.mjs            # Astro configuration
├── tailwind.config.ts          # Tailwind theme & colors
├── keystatic.config.ts         # Keystatic CMS schema
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies & scripts
└── CLAUDE.md                   # Developer instructions
```

## Directory Purposes

**src/pages/**
- Purpose: Define routes via file-based routing; Astro treats files/folders as URL paths
- Contains: Astro page components (index.astro, home.astro, about.astro, services.astro)
- Key files:
  - `src/pages/index.astro`: Root redirect to `/home`
  - `src/pages/home.astro`: Main page (renders Hero, About, Numbers, Services, Team, Clients, Units sections)
  - `src/pages/about.astro`: About page
  - `src/pages/services.astro`: Services detail page
  - `src/pages/pt/` and `src/pages/sp/`: Localized copies for Portuguese and Spanish
- Structure: `/home` → `src/pages/home.astro`, `/pt/home` → `src/pages/pt/home.astro`

**src/components/sections/**
- Purpose: Full-width content sections that compose pages
- Contains: 9 section components:
  - `HeroSection.astro`: Hero with parallax background, animated text reveal
  - `AboutSection.astro`: About block with image + text
  - `NumbersSection.astro`: Stats display (years, brides, units, specialists)
  - `ServicesSection.astro`: 2×2 grid of service cards, data from Keystatic
  - `TeamSection.astro`: Team member profiles, data from Keystatic
  - `ClientsSection.astro`: Client testimonials, data from Keystatic
  - `UnitsSection.astro`: Salon locations (Naples FL, 4 Brazil units)
  - `AboutUsSection.astro`: Full about page with hero, timeline
  - `ServicesPageSection.astro`: Services page section
- Each component:
  - Retrieves translations via `useTranslations(lang)`
  - May fetch dynamic content via Keystatic reader
  - Contains scoped `<style>` and `<script>` for animations

**src/components/ui/**
- Purpose: Reusable, primitives with no business logic
- Contains: `Button.astro` (polymorphic link/button with variants)
- Used by: All section components and Header/Footer

**src/components/**
- Purpose: Top-level layout components
- Contains:
  - `Header.astro`: Sticky header with logo, nav links, language switcher, hamburger menu
  - `Footer.astro`: Footer with logo, nav, contact info, CTA
  - `Welcome.astro`: Unused welcome screen component

**src/layouts/Layout.astro**
- Purpose: Base HTML document shell
- Contains: `<!doctype>`, `<html lang>`, `<head>`, body structure
- Responsibilities:
  - Set language attribute from URL
  - Render Header/Footer
  - Apply `.noise` utility class to html for background texture
  - Initialize Lenis smooth scrolling library
  - Dispatch `lenis-scroll` custom events

**src/i18n/**
- Purpose: Translation strings and language routing
- Contains:
  - `ui.ts`: Translation object with keys for en/pt/sp
    - Structure: `ui.en`, `ui.pt`, `ui.sp` (nested under language keys)
    - Keys follow pattern: `section.key` (e.g., `nav.home`, `hero.title`, `team.bio`)
  - `utils.ts`: Helper functions
    - `getLangFromUrl(url)`: Extract language from URL segment
    - `useTranslations(lang)`: Create translation lookup function
    - `localePath(lang, path)`: Build locale-prefixed URL
    - `switchLangPath(url, targetLang)`: Generate same page in different language

**src/content/**
- Purpose: Keystatic CMS collections (user-editable dynamic content)
- Contains: YAML files organized by collection:
  - `services/`: Service definitions (debutante.yaml, producao-de-noiva.yaml, etc.)
    - Fields: `order`, `dark`, `title_en`, `title_pt`, `title_sp`, `desc_en`, `desc_pt`, `desc_sp`
  - `team/`: Team member profiles (mirela-de-bem.yaml, francieli-asmin.yaml)
    - Fields: `name`, `initials`, `role_en`, `role_pt`, `role_sp`, `bio_en`, `bio_pt`, `bio_sp`, `experience`
  - `clients/`: Client testimonials (amanda-r.yaml, julia-s.yaml, patricia-m.yaml)
    - Fields: `name`, `quote_en`, `quote_pt`, `quote_sp`, `occasion_en`, `occasion_pt`, `occasion_sp`
  - `history/`: Salon history/locations

**src/assets/**
- Purpose: Image and logo files
- Contains:
  - `bhs-logo.png`: Main logo
  - `bhs-logo-small-dark.png`: Compact logo (dark variant)
  - `bhs-logo-small-light.png`: Compact logo (light variant)
  - `sun-ray.png`: Hero background image
  - `random-girl.jpg`: About section image
- Imported via Astro's `<Image>` or `getImage()` for optimization

**src/styles/**
- Purpose: Global styles and design tokens
- Contains:
  - `global.css`: Tailwind import, @font-face declarations, .noise utility
  - Referenced via `@config` in global.css pointing to `tailwind.config.ts`

**public/**
- Purpose: Static assets not processed by build
- Contains:
  - `fonts/`: Self-hosted Baskerville font files (baskvl.woff, BASKE10.woff, etc.)
  - `favicon.svg` and `favicon.png`

**Root Configuration Files:**
- `astro.config.mjs`: Astro settings (integrations, i18n routing, Vite plugins)
- `tailwind.config.ts`: Tailwind theme (fonts, colors, responsive breakpoints)
- `keystatic.config.ts`: CMS schema definition (collections, fields, labels)
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Dependencies and npm scripts

## Key File Locations

**Entry Points:**
- `src/pages/home.astro`: Main page template, composes all sections
- `src/pages/index.astro`: Redirect to `/home`
- `src/layouts/Layout.astro`: Base HTML shell for every page
- `src/components/Header.astro`: Navigation & branding

**Configuration:**
- `astro.config.mjs`: Framework configuration
- `tailwind.config.ts`: Theme colors (beige-500, accent-dark, etc.)
- `keystatic.config.ts`: CMS schema and collection definitions

**Core Logic:**
- `src/components/sections/ServicesSection.astro`: Example of dynamic content fetching via Keystatic reader
- `src/components/sections/TeamSection.astro`: Team member rendering with language-specific fields
- `src/i18n/utils.ts`: Language detection and translation helpers

**Testing:**
- No test files in codebase

## Naming Conventions

**Files:**
- Components: PascalCase (e.g., `HeroSection.astro`, `Button.astro`)
- Pages: lowercase with hyphens discouraged (match URL, e.g., `home.astro` → `/home`)
- Utilities: lowercase (e.g., `utils.ts`)
- Config files: descriptive.config.ext (e.g., `tailwind.config.ts`, `astro.config.mjs`)

**Directories:**
- Feature directories: lowercase plural (e.g., `pages`, `components`, `sections`, `layouts`)
- Organized by layer/role (sections, ui, layouts, i18n)

**Translations Keys:**
- Pattern: `section.key` (dot-separated)
- Examples: `nav.home`, `hero.title`, `services.01.desc`, `team.mb.bio`

**Component Props:**
- Translation keys: quoted strings (e.g., `t("nav.home")`)
- HTML attributes: camelCase for accessibility (e.g., `aria-expanded`, `aria-hidden`)
- CSS classes: kebab-case (Tailwind default, e.g., `text-accent-dark`, `max-sm:px-8`)

**Keystatic Fields:**
- Naming: snake_case with language suffix (e.g., `title_en`, `bio_pt`, `quote_sp`)
- One field per language per concept (not nested objects)

## Where to Add New Code

**New Page:**
1. Create `src/pages/newpage.astro` (and `src/pages/pt/newpage.astro`, `src/pages/sp/newpage.astro`)
2. Import and wrap content in `<Layout>`
3. Import section components or create new ones
4. Add translation keys to `src/i18n/ui.ts` (all 3 languages)

**New Section Component:**
1. Create `src/components/sections/NewSection.astro`
2. Import `getLangFromUrl`, `useTranslations` from `src/i18n/utils`
3. Add `<script>` block with GSAP and ScrollTrigger registration
4. Scoped `<style>` for layout and animation setup
5. Add to page(s) in desired order

**New UI Primitive:**
1. Create `src/components/ui/Component.astro`
2. Define interface with Props (TypeScript)
3. Destructure `Astro.props` with defaults
4. Use `<slot />` for content composition
5. Scoped styles for appearance

**New Dynamic Content:**
1. Define collection schema in `keystatic.config.ts`
2. Create YAML files in `src/content/newcollection/`
3. In section component, import `createReader` and `keystaticConfig`
4. Call `reader.collections.newcollection.all()`
5. Map entries to template with language-specific field access

**New Utility:**
1. Create `src/i18n/newutil.ts` (or appropriate module)
2. Export function(s)
3. Import in components that need it

**New Translation:**
1. Add key-value pair to all three language objects in `src/i18n/ui.ts`
2. If user-editable via Keystatic, add field to `keystatic.config.ts` singleton schema
3. Use `useTranslations()` in component to access: `t("section.newkey")`

## Special Directories

**src/.astro/**
- Purpose: Astro build cache
- Generated: Yes (during `npm run build`)
- Committed: No (in .gitignore)

**dist/**
- Purpose: Build output (static HTML, CSS, JS)
- Generated: Yes (during `npm run build`)
- Committed: No (in .gitignore)

**node_modules/**
- Purpose: Installed npm dependencies
- Generated: Yes (`npm install`)
- Committed: No (in .gitignore)

**public/**
- Purpose: Static assets (fonts, favicon)
- Generated: No (checked in)
- Committed: Yes (source files)

**.planning/codebase/**
- Purpose: Architecture analysis documents
- Generated: No (manually created by Claude)
- Committed: Yes (for team reference)

## Import Paths

**Relative Imports (Common):**
- From component to other components: `import Section from "../sections/Section.astro"`
- From section to utilities: `import { getLangFromUrl } from "../../i18n/utils"`

**Absolute Imports:**
- Not configured; all imports use relative paths
- Path depth: Components in subdirectories use `../../` to reach `src/`

**Astro Special Imports:**
- `import { Image } from "astro:assets"` for image optimization
- `import { getImage } from "astro:assets"` for pre-rendering image URLs
- `import { Icon } from "astro-icon/components"` for icon rendering

## Example: Adding a New Section

When adding a new full-page section:

```astro
---
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import Button from "../ui/Button.astro";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<section id="newsection" class="border-accent-dark border-b-3 px-8 py-20">
  <h2 class="text-6xl font-light text-accent-dark">
    {t("newsection.heading")}
  </h2>
  <Button variant="dark">{t("newsection.cta")}</Button>
</section>

<style>
  /* Scoped styles */
</style>

<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#newsection", {
    scrollTrigger: {
      trigger: "#newsection",
      start: "top 80%",
    },
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power3.out",
  });
</script>
```

Then:
1. Add to `src/pages/home.astro`: `<NewSection />`
2. Add translation keys to `src/i18n/ui.ts` (all 3 languages)

---

*Structure analysis: 2026-03-14*
