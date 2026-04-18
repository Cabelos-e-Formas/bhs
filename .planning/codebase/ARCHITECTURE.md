# Architecture

**Analysis Date:** 2026-03-14

## Pattern Overview

**Overall:** Component-based static site architecture using Astro's file-based routing with multi-language support and scroll-triggered animations.

**Key Characteristics:**
- Static site generation with Astro 5
- Astro's built-in i18n routing (3 languages: en, pt, sp)
- Headless CMS integration via Keystatic for dynamic content collections
- GSAP animations triggered on scroll with Lenis for smooth scrolling
- Tailwind CSS v4 via @tailwindcss/vite plugin
- Component-driven approach with reusable primitives and section components

## Layers

**Page Layer:**
- Purpose: Define routes and compose sections into full page views
- Location: `src/pages/`
- Contains: Astro page components (index.astro, home.astro, about.astro, services.astro, team.astro)
- Depends on: Layout, section components, i18n utilities
- Used by: Astro router (entry points)

**Layout Layer:**
- Purpose: Provide base HTML structure, header/footer, smooth scrolling setup
- Location: `src/layouts/Layout.astro`
- Contains: Base HTML shell with meta tags, Layout component wraps all pages
- Depends on: Header, Footer, i18n utils
- Used by: All pages via `<Layout>` wrapper
- Key responsibility: Initializes Lenis smooth scroll and dispatches `lenis-scroll` events

**Section Components Layer:**
- Purpose: Reusable content sections that compose pages (Hero, About, Services, Team, Clients, Units, Numbers)
- Location: `src/components/sections/`
- Contains: 9 section components (HeroSection, AboutSection, ServicesSection, TeamSection, ClientsSection, UnitsSection, NumbersSection, AboutUsSection, ServicesPageSection)
- Depends on: UI primitives (Button), i18n utils, Keystatic reader for dynamic data
- Used by: Pages (home.astro assembles multiple sections)
- Data flow: Content sourced from Keystatic collections or translation strings

**UI Primitives Layer:**
- Purpose: Reusable, unstyled interactive components
- Location: `src/components/ui/`
- Contains: Button.astro (renders as `<a>` or `<button>` with variant/size props)
- Depends on: astro-icon for icon rendering
- Used by: Section components and page components

**Navigation Layer:**
- Purpose: Header and footer navigation with language switching
- Location: `src/components/Header.astro`, `src/components/Footer.astro`
- Contains: Fixed header with hamburger menu (full-screen overlay), footer with links
- Depends on: i18n utils, Button primitive, astro-icon
- Used by: Layout.astro
- Key behaviors: Header hides on scroll down, shows on scroll up; menu toggle animates overlay

**Internationalization (i18n) Layer:**
- Purpose: Centralize translation strings and routing logic
- Location: `src/i18n/`
- Contains: ui.ts (translation strings for en/pt/sp), utils.ts (routing/translation helpers)
- Depends on: None (foundational)
- Used by: Every component that needs translations or language context
- Key utilities:
  - `getLangFromUrl(url)`: Extract language from URL pathname
  - `useTranslations(lang)`: Create translation function for current language
  - `localePath(lang, path)`: Build locale-prefixed URL (skips prefix for default 'en')
  - `switchLangPath(url, targetLang)`: Generate equivalent path in different language

**Content Layer:**
- Purpose: Store dynamic, user-editable content via Keystatic
- Location: `src/content/`
- Contains: YAML collections (services, team, clients, history)
- Depends on: Keystatic schema definition
- Used by: Section components via Keystatic reader (e.g., ServicesSection reads from collections.services)

**Styling Layer:**
- Purpose: Design tokens, theme configuration, global utilities
- Location: `src/styles/global.css`, `tailwind.config.ts`
- Contains: Tailwind configuration, Baskerville font declarations, .noise utility
- Depends on: Tailwind CSS v4, @tailwindcss/vite plugin
- Used by: All components via Tailwind classes

## Data Flow

**Page Load → Page Render:**

1. Browser requests `/home`, `/pt/home`, or `/sp/home`
2. Astro router matches page component (e.g., `src/pages/home.astro`)
3. Page imports Layout and section components
4. Layout sets `html[lang]` from `getLangFromUrl()`, renders Header/Footer with `<slot />`
5. Page sections render in order (HeroSection → AboutSection → ServicesSection → TeamSection → ClientsSection → UnitsSection)
6. Each section retrieves translations via `useTranslations(lang)` and may fetch dynamic content via Keystatic reader

**Dynamic Content Loading (ServicesSection example):**

1. Section component calls `createReader(process.cwd(), keystaticConfig)`
2. Reader fetches from `src/content/services/*.yaml`
3. Service items sorted by `order` field
4. Services mapped to HTML with language-specific fields (`title_en`, `desc_pt`, etc.)
5. Rendered service cards include dark/light background toggle based on `dark` field

**Translation Lookup:**

1. Component calls `useTranslations(lang)` → returns function `t(key)`
2. `t("nav.home")` → looks up `ui[lang]["nav.home"]` → falls back to `ui.en["nav.home"]` if missing

**Animation Flow:**

1. Page renders with initial CSS states (hidden, transformed, etc.)
2. Each section registers GSAP ScrollTrigger on component mount (in `<script>` block)
3. ScrollTrigger fires `onEnter` callback when section enters viewport (80% threshold typical)
4. Timeline/animation plays (character reveal, stagger animations, etc.)
5. Lenis scroll events dispatched to window as `lenis-scroll` custom event
6. Header listens to `lenis-scroll` to show/hide on scroll direction

**State Management:**

- No centralized state container; component-local state via `<script>` blocks (menu open/closed, animation timelines)
- Header maintains `isOpen` boolean for menu toggle state
- GSAP maintains animation state (paused/playing)
- Lenis maintains scroll position and smooth scroll state

## Key Abstractions

**Section Component Pattern:**

- Purpose: Encapsulate a full-width content section with animations
- Examples: `src/components/sections/HeroSection.astro`, `src/components/sections/ServicesSection.astro`
- Pattern:
  - Frontmatter imports i18n utils, Button, data sources
  - Markup defines section structure with semantic IDs (e.g., `id="hero-section"`)
  - CSS scoped to section (gradient overlays, animations setup)
  - `<script>` block registers GSAP timelines and ScrollTrigger callbacks
  - Each section self-contained: imports dependencies, retrieves translations, renders independently

**Button Component Pattern:**

- Purpose: Polymorphic interactive element (link or button)
- Location: `src/components/ui/Button.astro`
- Pattern:
  - Accepts `href?` (renders as `<a>` if present, else `<button>`)
  - `variant` prop controls color scheme (dark/light)
  - `size` prop controls padding/text size (sm/md/lg)
  - `icon?` prop renders optional icon via astro-icon
  - CSS animations: background fill on hover (scaleX from left)

**Translation Helper Pattern:**

- Purpose: Type-safe, language-aware text lookup
- Location: `src/i18n/utils.ts`
- Pattern:
  - `useTranslations(lang)` returns function `t(key)`
  - Falls back to English if translation missing
  - Consumed in every component that needs user-facing text

**Keystatic Reader Pattern:**

- Purpose: Load dynamic content from YAML collections at build time
- Pattern:
  - Create reader: `createReader(process.cwd(), keystaticConfig)`
  - Fetch all items: `reader.collections.servicess.all()`
  - Access entry fields: `service.entry.title_en`, `service.entry.dark`
  - Render dynamically: map entries to JSX/Astro template

## Entry Points

**Primary Page Routes:**

- Location: `src/pages/index.astro`, `src/pages/home.astro`, `src/pages/about.astro`, `src/pages/services.astro`, `src/pages/pt/` and `src/pages/sp/` subdirectories
- Triggers: Browser navigation to `/`, `/home`, `/about`, `/services` (or `/pt/home`, `/sp/services`, etc.)
- Responsibilities:
  - Import global styles
  - Wrap content in Layout
  - Compose section components in order
  - Pass language context through props if needed

**Layout Entry Point:**

- Location: `src/layouts/Layout.astro`
- Triggers: Every page component wraps its content in `<Layout>`
- Responsibilities:
  - Output HTML document shell
  - Set `html[lang]` attribute
  - Render Header and Footer
  - Initialize Lenis smooth scroll
  - Provide `<slot />` for page content

**Header Entry Point (Navigation State):**

- Location: `src/components/Header.astro`
- Triggers: Part of Layout render
- Responsibilities:
  - Render logo and nav links
  - Initialize hamburger menu toggle
  - Register GSAP animations for menu overlay
  - Listen to `lenis-scroll` events for hide/show behavior

## Error Handling

**Strategy:** Graceful degradation with no centralized error boundary

**Patterns:**
- Translation fallback to English if key missing or language not supported
- Keystatic reader gracefully handles missing collections (empty array)
- Language detection defaults to `defaultLang` ('en') if URL segment not in supported list
- GSAP animations continue playing even if ScrollTrigger callback fails (no error propagation)
- No error pages defined; 404s handled by Astro's default behavior

## Cross-Cutting Concerns

**Logging:** None implemented; no centralized logging or analytics

**Validation:**
- Keystatic schema enforces types at collection level (text fields, checkbox fields, etc.)
- No runtime validation of user input (contact form doesn't exist)

**Authentication:** Not applicable (static site, no user accounts)

**Language Resolution:**
- URL pathname first: `getLangFromUrl(url)` checks segment 1
- Fallback to default ('en')
- Every component calls helpers to ensure consistency

**Scroll Behavior:**
- Lenis initialized in Layout.astro on every page load
- Dispatches custom `lenis-scroll` event for consumers
- All scroll-triggered animations use GSAP ScrollTrigger with Lenis-aware positioning

---

*Architecture analysis: 2026-03-14*
