# Phase 1: Team & Book Pages - Research

**Researched:** 2026-03-14
**Domain:** Astro 5 page creation, Keystatic reader, i18n routing, GSAP animations
**Confidence:** HIGH

---

## Summary

Phase 1 adds two missing pages — `/team` and `/book` — to complete the site's core navigation. Both pages exist in the Header nav already (links to `/team` and `/appointment`). The codebase has a mature, consistent pattern for this kind of page: create an `.astro` page file per locale, wrap it in `<Layout>`, delegate all rendering to a section component, add translation keys to `src/i18n/ui.ts`, and register GSAP ScrollTrigger animations in the component's `<script>` block.

The team page is straightforward: the Keystatic `team` collection already has the full schema needed (`name`, `initials`, `role_en/pt/sp`, `bio_en/pt/sp`, `experience`). The `TeamSection.astro` component already reads from this collection and renders cards — the team page simply needs a `TeamPageSection` that uses `PageHero` plus an expanded layout for the same data. No Keystatic schema changes are needed.

The book page is constrained by an open blocker: the booking platform is TBD. The implementation must be designed as a flexible shell that accepts either an iframe URL or an external link via a prop or environment variable, so it can be completed once the platform is confirmed. The page can be built fully — contact info, CTA copy, layout — with the booking embed slot left as a configurable placeholder.

**Primary recommendation:** Build both pages following the `about.astro` → `AboutUsSection` pattern exactly. Team page reads from existing Keystatic collection with no schema changes. Book page uses a feature-flag prop (`bookingUrl`, `bookingMode: "iframe" | "link"`) so the platform decision can be dropped in without touching the component structure.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-101 | Team page (/team) with expanded team member bios, photos, and profiles | Keystatic `team` collection has all needed fields; `PageHero` + card grid pattern is established |
| REQ-102 | Book page (/book) with contact information and booking platform iframe or external link | `PageHero` + conditional iframe/link pattern; booking URL isolated in a prop for TBD platform |
| REQ-601 | All new pages (team, book) have full en/pt/sp translations via Keystatic or ui.ts | `useTranslations()` + `src/i18n/ui.ts` is the established path; new keys follow `section.key` pattern |
</phase_requirements>

---

## Standard Stack

### Core (all already installed — no new dependencies)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Astro | 5.17.1 | File-based routing, SSG, `.astro` components | Project foundation |
| Tailwind CSS | 4.2.0 | Utility-first styling | Project foundation |
| GSAP | 3.14.2 | Scroll-triggered entrance animations | Used by every section |
| Lenis | 1.3.18-dev | Smooth scroll (initialized in Layout) | Already in Layout |
| `@keystatic/core` | 5.0.6 | CMS reader for team collection data | Already used by TeamSection |

### No New Dependencies Needed

The full stack for Phase 1 is already installed. Do not add new packages.

---

## Architecture Patterns

### Recommended Project Structure (new files only)

```
src/
  pages/
    team.astro                    # en team page
    book.astro                    # en book page
    pt/
      team.astro                  # pt team page
      book.astro                  # pt book page
    sp/
      team.astro                  # sp team page
      book.astro                  # sp book page
  components/
    sections/
      TeamPageSection.astro       # Full team page content
      BookPageSection.astro       # Full book page content
```

### Pattern 1: Page File (the established pattern)

Every page file in this project is identical in structure. Copy `src/pages/about.astro` for English, `src/pages/pt/about.astro` for Portuguese.

**English page (`src/pages/team.astro`):**
```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import TeamPageSection from "../components/sections/TeamPageSection.astro";
---

<Layout>
  <TeamPageSection />
</Layout>
```

**Portuguese page (`src/pages/pt/team.astro`):**
```astro
---
import "../../styles/global.css";
import Layout from "../../layouts/Layout.astro";
import TeamPageSection from "../../components/sections/TeamPageSection.astro";
---

<Layout>
  <TeamPageSection />
</Layout>
```

**Key insight:** Pages are thin shells. All i18n and data logic lives in the section component. The `getLangFromUrl(Astro.url)` call happens inside the section component — pages do not pass lang as a prop.

### Pattern 2: Section Component (the established pattern)

Source: `src/components/sections/AboutUsSection.astro` and `src/components/sections/TeamSection.astro`.

```astro
---
import { getLangFromUrl, useTranslations } from "../../i18n/utils";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import PageHero from "../ui/PageHero.astro";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const reader = createReader(process.cwd(), keystaticConfig);
const members = await reader.collections.team.all();
---

<PageHero
  id="team-page-hero"
  bgText="Team"
  eyebrow="Brazilian Hair Studio · Our Team"
  heading={t("teampage.heading")}
  subtitle={t("teampage.subtitle")}
/>

<section id="team-page-grid" class="border-b-3 border-accent-dark px-8 py-20 max-sm:py-12">
  {members.map((member) => (
    <div class="team-page-card ...">
      <!-- expanded card layout using member.entry fields -->
    </div>
  ))}
</section>

<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", () => {
    gsap.from(".team-page-card", {
      scrollTrigger: { trigger: "#team-page-grid", start: "top 80%" },
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
    ScrollTrigger.refresh();
  });
</script>
```

### Pattern 3: Keystatic Team Collection Fields

Verified directly from YAML files and `keystatic.config.ts`. No schema changes needed.

| Field | Type | Notes |
|-------|------|-------|
| `name` | text | Display name (e.g., "Mirela De Bem") |
| `initials` | text | Used for placeholder avatar (e.g., "MB") |
| `role_en` | text | Role in English |
| `role_pt` | text | Role in Portuguese |
| `role_sp` | text | Role in Spanish |
| `bio_en` | text | Biography in English |
| `bio_pt` | text | Biography in Portuguese |
| `bio_sp` | text | Biography in Spanish |
| `experience` | text | e.g., "25 years" or "9 years" |

**Access pattern (from TeamSection.astro):**
```astro
{member.entry[`role_${lang}` as keyof typeof member.entry]}
{member.entry[`bio_${lang}` as keyof typeof member.entry]}
```

**Current team members in collection:** Mirela De Bem, Francieli Asmin. Note: Gezi is referenced in `ui.ts` translation keys (`team.gs.*`) but does NOT have a YAML file in `src/content/team/`. Either a YAML file must be created for Gezi, or the page must handle the discrepancy.

### Pattern 4: i18n Translation Keys

New keys follow the `section.key` dot-separated pattern. Add to all three language objects in `src/i18n/ui.ts` simultaneously.

**New keys needed for TeamPageSection:**
```typescript
// In ui.ts — add to en, pt, sp objects:
"teampage.heading": "Our Team",
"teampage.subtitle": "Meet the specialists behind every transformation.",
```

**New keys needed for BookPageSection:**
```typescript
"bookpage.heading": "Book your Appointment",
"bookpage.subtitle": "Reserve your spot at Brazilian Hair Studio.",
"bookpage.contact.title": "Contact",
"bookpage.contact.phone": "(239) 318-8366",
"bookpage.contact.address": "Naples, Florida · USA",
"bookpage.cta": "Book Now",
"bookpage.or": "or call us directly",
```

### Pattern 5: Language Switcher — How it Works

The language switcher in `Header.astro` uses `switchLangPath(Astro.url, targetLang)`. This function:
1. Detects current language from URL pathname
2. Strips the current language prefix (if non-default)
3. Prepends the target language prefix (skips prefix for 'en' since `prefixDefaultLocale: false`)

**Result for `/team`:**
- EN active → links: `/team` (en), `/pt/team` (pt), `/sp/team` (sp)
- PT active → links: `/team` (en), `/pt/team` (pt active), `/sp/team` (sp)
- SP active → links: `/team` (en), `/pt/team` (pt), `/sp/team` (sp active)

No changes to `Header.astro` are needed. The language switcher already handles any URL path dynamically via `switchLangPath`. The nav links already include `/team` and `/appointment` — however the Header links to `/appointment` not `/book`. This is a discrepancy to resolve (either create `/appointment` as an alias, or update the Header nav link to `/book`).

### Pattern 6: Book Page — Flexible Booking Embed

Since the booking platform is TBD, `BookPageSection` should conditionally render either an iframe or a link based on a prop:

```astro
---
interface Props {
  bookingUrl?: string;
  bookingMode?: "iframe" | "link" | "none";
}
const { bookingUrl = "", bookingMode = "none" } = Astro.props;
---

{bookingMode === "iframe" && bookingUrl && (
  <iframe src={bookingUrl} class="w-full h-[600px] border-0" title="Book Appointment" />
)}
{bookingMode === "link" && bookingUrl && (
  <Button href={bookingUrl} variant="dark" size="lg">{t("bookpage.cta")}</Button>
)}
{bookingMode === "none" && (
  <!-- Placeholder with phone number CTA -->
  <Button href="tel:+12393188366" variant="dark" size="lg">
    {t("bookpage.cta")} → (239) 318-8366
  </Button>
)}
```

The page file passes the props, making it trivial to update once the platform is known:

```astro
<BookPageSection bookingMode="none" />
<!-- Later: bookingMode="iframe" bookingUrl="https://platform.com/embed/..." -->
```

### Pattern 7: PageHero Component

`src/components/ui/PageHero.astro` is the standard page header for non-home pages. It is already used by `AboutUsSection` and `ServicesPageSection`. Use it for both new page sections.

**Props interface:**
```typescript
interface Props {
  id: string;       // unique section ID for GSAP targeting
  bgText: string;   // large decorative background text
  eyebrow: string;  // small uppercase label above heading
  heading: string;  // main h1 heading
  subtitle: string; // subtitle paragraph
}
```

**Note:** PageHero has a quirk: its GSAP script targets `.page-hero:last-of-type`, so it works correctly when there is only one PageHero per page. This is always the case for team and book pages (one hero each), so no issue arises.

### Pattern 8: GSAP Animation — Established Conventions

Source: `TeamSection.astro`, `AboutUsSection.astro`, `ServicesPageSection.astro`.

| Convention | Value |
|-----------|-------|
| Registration | `gsap.registerPlugin(ScrollTrigger)` at top of every `<script>` block |
| Trigger threshold | `start: "top 80%"` (most common), `"top 90%"` for tighter trigger |
| Default ease | `"power3.out"` |
| Default duration | `0.7`–`0.9` seconds |
| Stagger | `0.2` per card for grid items |
| Load wrapping | Wrap in `window.addEventListener("load", () => { ... })` when dependent on layout (AboutUsSection pattern) |
| ScrollTrigger.refresh() | Call after all scroll triggers registered when inside `load` listener |
| CSS classes for targeting | Use semantic BEM-ish class names (e.g., `.team-page-card`, `.bookpage-content`) |

### Anti-Patterns to Avoid

- **Do not pass `lang` as a prop to section components.** Each section calls `getLangFromUrl(Astro.url)` internally. Passing lang as a prop would break the established pattern and create inconsistency.
- **Do not duplicate translation strings.** All user-facing text goes in `src/i18n/ui.ts`. Do not hardcode English strings inside components.
- **Do not use `<img>` tags directly.** If team photos are ever added, use Astro's `<Image>` from `astro:assets`.
- **Do not import global.css in section components.** Global CSS is imported at the page level only (each `*.astro` page file).
- **Do not create a fourth locale directory.** Only `en` (root), `pt/`, and `sp/` are valid.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Language detection | Custom URL parser | `getLangFromUrl(Astro.url)` | Already handles prefix edge cases |
| Language-specific text | Custom lookup | `useTranslations(lang)` with `t("key")` | Already handles fallback to English |
| Locale URL generation | String concatenation | `localePath(lang, "/team")` | Handles `prefixDefaultLocale: false` edge case |
| Language switcher URLs | Custom path builder | `switchLangPath(Astro.url, targetLang)` | Already in Header, works automatically |
| CMS data loading | Custom YAML parser | `createReader(process.cwd(), keystaticConfig)` | Type-safe Keystatic reader |
| Page header / hero | Custom section | `PageHero` component | Established design pattern, animations included |
| Smooth scroll | Custom listener | Lenis (already initialized in Layout) | Don't re-initialize |

---

## Common Pitfalls

### Pitfall 1: Header Nav Links to `/appointment`, not `/book`

**What goes wrong:** The Header's `navLinks` array uses `localePath(lang, "/appointment")` for the book link. If the book page is created at `/book`, the nav link will 404.
**Why it happens:** The Header was built before the book page was created and used a placeholder route name.
**How to avoid:** Either create the book page at `/appointment` (matching the existing link), or update the Header nav link from `/appointment` to `/book`. Decide which route name to use first; consistency is critical.
**Warning signs:** Clicking "Book your Appointment" in the nav overlay lands on a 404.

### Pitfall 2: Gezi Missing from Team Collection

**What goes wrong:** `src/i18n/ui.ts` has translation keys for three team members (`team.mb.*`, `team.gs.*`, `team.fa.*`) but `src/content/team/` only has YAML files for Mirela and Francieli. If the team page reads from the Keystatic collection, Gezi will be absent.
**Why it happens:** The YAML file for Gezi was never created.
**How to avoid:** Create `src/content/team/gezi-*.yaml` with the existing bio text from `ui.ts` before the team page goes live. Alternatively, confirm with the user whether Gezi is intentionally absent.
**Warning signs:** Team page shows only 2 cards when 3 are expected.

### Pitfall 3: PageHero GSAP `.page-hero:last-of-type` Selector

**What goes wrong:** If two `PageHero` components render on the same page, the GSAP script in PageHero targets only the last instance.
**Why it happens:** PageHero uses `:last-of-type` to avoid double-registering animations when included multiple times.
**How to avoid:** Only include one `PageHero` per page. Both team and book pages have a single hero each — this is not a problem as long as the pattern is followed.
**Warning signs:** Hero animations not playing on the first PageHero if two are accidentally rendered.

### Pitfall 4: `prefixDefaultLocale: false` Path Mismatch

**What goes wrong:** A developer creates `/en/team.astro` instead of `/team.astro`, creating a route at `/en/team` instead of `/team`. The English URLs use no prefix.
**Why it happens:** Forgetting the Astro i18n routing config.
**How to avoid:** English pages go at `src/pages/team.astro` (root). Portuguese at `src/pages/pt/team.astro`. Spanish at `src/pages/sp/team.astro`. Never create an `en/` directory.
**Warning signs:** English routes 404 or have double-prefix URLs.

### Pitfall 5: `import "../../styles/global.css"` Path Depth

**What goes wrong:** Pages in `src/pages/pt/` and `src/pages/sp/` use a different relative path depth than root pages.
**Why it happens:** Subdirectory pages are one level deeper.
**How to avoid:** Root pages: `import "../styles/global.css"`. Locale subdirectory pages: `import "../../styles/global.css"`. Verified from existing `src/pages/pt/about.astro`.
**Warning signs:** Styles missing on localized pages; build warning about unresolved import.

### Pitfall 6: Type Assertion for Keystatic Language Fields

**What goes wrong:** TypeScript complains when accessing `member.entry[\`bio_${lang}\`]` because the type is not narrowed.
**Why it happens:** Keystatic field names are not template-literal-typed.
**How to avoid:** Use the same cast pattern as `TeamSection.astro`: `member.entry[\`bio_${lang}\` as keyof typeof member.entry]`. Cast to `string` if needed for rendering.
**Warning signs:** TypeScript build errors on the language-specific field access.

---

## Code Examples

### Keystatic Collection Read (team)

```typescript
// Source: src/components/sections/TeamSection.astro (verified)
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);
const members = await reader.collections.team.all();

// Language-specific field access:
member.entry[`role_${lang}` as keyof typeof member.entry]
member.entry[`bio_${lang}` as keyof typeof member.entry]
```

### useTranslations Pattern

```typescript
// Source: src/i18n/utils.ts (verified)
import { getLangFromUrl, useTranslations } from "../../i18n/utils";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

// Usage:
t("teampage.heading")  // returns string for current lang, falls back to en
```

### switchLangPath (how language switcher works)

```typescript
// Source: src/components/Header.astro (verified)
// Called automatically for all routes — no action needed in new pages.
switchLangPath(Astro.url, "pt")
// /team → /pt/team
// /pt/team → /pt/team (already pt)
// /sp/team → /pt/team
```

### GSAP ScrollTrigger in Section Component

```typescript
// Source: src/components/sections/TeamSection.astro (verified)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".team-page-card", {
  scrollTrigger: {
    trigger: "#team-page-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out",
});
```

### PageHero Usage

```astro
<!-- Source: src/components/sections/AboutUsSection.astro (verified) -->
<PageHero
  id="team-page-hero"
  bgText="Team"
  eyebrow="Brazilian Hair Studio · Our Team"
  heading={t("teampage.heading")}
  subtitle={t("teampage.subtitle")}
/>
```

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| Inline translation strings in components | `useTranslations()` from `src/i18n/ui.ts` | All new strings must go in `ui.ts` |
| Direct `<img>` tags | Astro `<Image>` (target for Phase 3) | For now, team cards use initials placeholder — no images yet |
| Generic GSAP `document.querySelector` | Scoped class-based selectors per section | Each section uses unique class names to avoid cross-section selector collisions |

**Deprecated/outdated:**
- `src/components/Welcome.astro`: Unused, do not model new components on it.
- `team.mb.*`, `team.gs.*`, `team.fa.*` keys in `ui.ts`: These are home page TeamSection keys, not team page keys. New team page translation keys must use `teampage.*` prefix to avoid conflicts.

---

## Open Questions

1. **Header nav link: `/appointment` vs `/book`**
   - What we know: `Header.astro` links to `/appointment`. ROADMAP/REQUIREMENTS specify `/book`.
   - What's unclear: Which route name is canonical.
   - Recommendation: Use `/book` as the route (matches requirements). Update the Header nav from `/appointment` to `/book` as part of this phase.

2. **Booking platform TBD**
   - What we know: Booking uses an external platform (iframe or link). Platform is not yet confirmed.
   - What's unclear: Whether to render an iframe, external link, or phone CTA.
   - Recommendation: Implement `BookPageSection` with a `bookingMode` prop defaulting to `"none"` (shows phone CTA). User fills in `bookingUrl` and switches `bookingMode` when platform is confirmed. Page is fully functional for contact info in the meantime.

3. **Gezi's team YAML file**
   - What we know: `ui.ts` has Gezi bio/role strings but no YAML exists in `src/content/team/`.
   - What's unclear: Whether to create the YAML file as part of this phase.
   - Recommendation: Create `gezi-soares.yaml` (or equivalent) with the bio text from `ui.ts`. The team page requirement says "Mirela, Gezi, Francieli" must appear.

4. **Team member photos**
   - What we know: The current `TeamSection` uses initials as avatar placeholder. No photos exist in `src/assets/`.
   - What's unclear: Whether the team page should have larger photos or continue using the initials placeholder.
   - Recommendation: Follow the initials placeholder pattern for Phase 1. Adding photos is a Phase 3 concern (REQ-203 image handling).

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None — no test framework installed |
| Config file | None |
| Quick run command | `npm run build` (Astro static build — catches type errors, missing imports, broken routes) |
| Full suite command | `npm run build && npm run preview` (manual verification after build) |

No automated test infrastructure exists in this project. Validation is build-time (TypeScript + Astro SSG) plus manual browser verification.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | Notes |
|--------|----------|-----------|-------------------|-------|
| REQ-101 | /team renders with all 3 team members in all 3 languages | build + manual | `npm run build` (catches missing imports, type errors) | Visual check required |
| REQ-101 | /pt/team and /sp/team exist and render correctly | build + manual | `npm run build` (route existence verified by Astro) | Visit each URL manually |
| REQ-102 | /book renders contact info + booking slot in all 3 languages | build + manual | `npm run build` | Visual check required |
| REQ-102 | /pt/book and /sp/book exist | build + manual | `npm run build` | Visit each URL manually |
| REQ-601 | No untranslated strings visible on team and book pages | manual | `npm run build` (TypeScript will catch missing `t("key")` calls if key doesn't exist) | Inspect rendered output in all 3 languages |
| REQ-601 | Language switcher on /team links to /pt/team and /sp/team | manual | None | Navigate between language variants and verify active highlight |

### Automated Checks Available

1. **Build check** (`npm run build`): Astro's SSG build will fail if:
   - Any import is unresolved (missing component file)
   - TypeScript errors in frontmatter (e.g., wrong prop types)
   - Missing locale pages cause route generation to fail
   - Keystatic reader calls reference non-existent collection names

2. **Translation key coverage**: TypeScript will surface a type error if `t()` is called with a key that does not exist in the `ui.ts` type definition — because `useTranslations` returns a function typed against the default lang keys. This catches typos in new key names.

### Manual Verification Required

The following CANNOT be automated without a test framework:

1. Visit `/team`, `/pt/team`, `/sp/team` — confirm all 3 member cards render with correct language text
2. Visit `/book`, `/pt/book`, `/sp/book` — confirm contact info and booking slot render
3. Open nav overlay on each new page — confirm language switcher links resolve correctly and active language is highlighted
4. Confirm no English text bleeds through on `/pt/` and `/sp/` routes
5. Confirm Header "Book your Appointment" nav link resolves to `/book` (or `/appointment` — whichever is chosen)

### Sampling Rate

- **Per task:** `npm run build` — verify no build errors before moving to next task
- **Per deliverable:** Manual browser check at `npm run preview` — visit all 6 new URLs (2 pages × 3 languages)
- **Phase gate:** Full build clean + manual pass of all 6 URLs + language switcher verification on each

### Wave 0 Gaps

None — no test framework is configured and none is required. The build itself is the primary automated gate.

---

## Sources

### Primary (HIGH confidence)

- Direct file read: `src/components/sections/TeamSection.astro` — verified Keystatic reader pattern, team field names, GSAP animation pattern
- Direct file read: `src/components/sections/AboutUsSection.astro` — verified PageHero usage, `window.addEventListener("load")` pattern, ScrollTrigger.refresh()
- Direct file read: `src/components/ui/PageHero.astro` — verified props interface, GSAP selector quirk
- Direct file read: `src/i18n/utils.ts` — verified `getLangFromUrl`, `useTranslations`, `switchLangPath`, `localePath`
- Direct file read: `src/i18n/ui.ts` — verified translation key naming pattern and all existing keys
- Direct file read: `keystatic.config.ts` — verified team collection schema fields
- Direct file read: `src/content/team/mirela-de-bem.yaml`, `francieli-asmin.yaml` — verified actual field values
- Direct file read: `src/components/Header.astro` — verified nav link to `/appointment`, language switcher implementation
- Direct file read: `astro.config.mjs` — verified `prefixDefaultLocale: false`, locale list
- Direct file read: `src/pages/about.astro`, `src/pages/pt/about.astro` — verified page file pattern and import path depth

### Secondary (MEDIUM confidence)

- Astro i18n routing docs (referenced via project config) — routing behavior with `prefixDefaultLocale: false` confirmed from `switchLangPath` implementation

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all libraries already installed and in use; patterns verified from source
- Architecture: HIGH — patterns read directly from working source files, not inferred
- Keystatic schema: HIGH — read directly from config and YAML files
- i18n patterns: HIGH — read directly from `utils.ts` and `ui.ts`
- GSAP patterns: HIGH — read directly from three working section components
- Booking page design: MEDIUM — `bookingMode` prop pattern is a recommended design, not yet verified against a real platform integration
- Pitfalls: HIGH — each pitfall was derived from a concrete observation in the codebase (Header `/appointment` vs `/book`, Gezi missing YAML, etc.)

**Research date:** 2026-03-14
**Valid until:** 2026-04-14 (stable project, no external API dependencies)
