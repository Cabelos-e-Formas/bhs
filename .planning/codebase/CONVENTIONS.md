# Coding Conventions

**Analysis Date:** 2026-03-14

## Naming Patterns

**Files:**
- Astro components: PascalCase (e.g., `Button.astro`, `HeroSection.astro`, `Header.astro`)
- Utility/helper files: camelCase (e.g., `utils.ts`, `ui.ts`)
- Directories: lowercase, match their purpose (e.g., `sections/`, `ui/`, `i18n/`)
- Section components follow pattern: `[Name]Section.astro` (e.g., `HeroSection.astro`, `TeamSection.astro`, `ServicesSection.astro`)

**Functions:**
- camelCase for all function names: `getLangFromUrl()`, `useTranslations()`, `switchLangPath()`, `localePath()`
- Getter/utility patterns: prefix with `get` or use domain verb (e.g., `getLangFromUrl`, `useTranslations`)
- Callback handlers: prefix with verb (e.g., `openMenu()`, `closeMenu()`, `animateToClose()`)

**Variables:**
- camelCase for all variables and constants: `lang`, `t`, `navLinks`, `langLinks`, `isOpen`
- State variables: descriptive names indicating state (e.g., `hidden`, `isOpen`)
- Component props: use `const { prop1, prop2 } = Astro.props` pattern

**Types:**
- Interfaces: PascalCase, use `Props` suffix for component prop interfaces (e.g., `interface Props { ... }`)
- Type imports: `import type { Config } from "tailwindcss"`
- TypeScript strict mode enabled via `tsconfig.json` extending `astro/tsconfigs/strict`

## Code Style

**Formatting:**
- No explicit prettier/ESLint config detected; formatting appears organic
- Consistent indentation with 2 spaces
- Semicolons present in TypeScript/JavaScript
- Line length varies; no strict column limit enforced

**Linting:**
- No `.eslintrc` or `.prettierrc` files present
- No dedicated linting tooling configured
- Code quality relies on manual review and developer discipline

## Import Organization

**Order:**
1. Framework/library imports (e.g., `import { Image } from "astro:assets"`)
2. Third-party component libraries (e.g., `import { Icon } from "astro-icon/components"`)
3. Local asset imports (e.g., `import LogoImg from "../assets/bhs-logo.png"`)
4. Local component imports (e.g., `import Button from "./ui/Button.astro"`)
5. Utility/helper imports (e.g., `import { getLangFromUrl, useTranslations } from "../../i18n/utils"`)
6. Config imports (e.g., `import keystaticConfig from "../../../keystatic.config"`)

**Path Aliases:**
- No path aliases configured; relative paths used throughout
- Relative imports follow pattern: `../components/`, `../../i18n/utils`, `../../assets/`
- Astro's built-in module imports used: `astro:assets`, `@keystatic/core/reader`

## Error Handling

**Patterns:**
- Non-null assertions used where appropriate: `const toggle = document.getElementById("menu-toggle")!;`
- Type casting for DOM elements: `document.querySelector<HTMLElement>(".page-hero:last-of-type")`
- Defensive checks with optional chaining and nullish coalescing observed in dynamic content
- No explicit error boundaries or error handling middleware; relies on Astro's build-time safety

## Logging

**Framework:** Console logging only

**Patterns:**
- Console not used in visible production code
- GSAP animations and timing logged to browser console via event listeners (implicit debugging)
- No structured logging library integrated

## Comments

**When to Comment:**
- Minimal comment usage; code is largely self-documenting
- Comments used for complex GSAP animation timelines explaining intent
- Comments used for marking sections (e.g., `<!-- Full-screen nav overlay -->`)

**JSDoc/TSDoc:**
- JSDoc patterns observed in utility functions: `/** Prefix a path with the language segment (skips prefix for the default lang). */`
- Function documentation precedes implementation where needed for public APIs
- No strict JSDoc requirement; used selectively for non-obvious utilities

## Function Design

**Size:** Utility functions are small and focused (5-30 lines); animation functions are medium (10-50 lines)

**Parameters:**
- Destructured props from `Astro.props` in component frontmatter
- Functional parameters follow convention: `(lang: keyof typeof ui)` with explicit types
- GSAP selectors passed as strings; converted to arrays with `gsap.utils.toArray<HTMLElement>()`

**Return Values:**
- Functions return simple values (strings, booleans, URL paths)
- Utility functions have explicit return types: `function getLangFromUrl(url: URL)` returns `string`
- GSAP timelines and animations returned implicitly through assignment

## Module Design

**Exports:**
- Default exports for Astro components: `export default { ... }`
- Named exports for utilities: `export function getLangFromUrl() { ... }`
- Mixed export style: `export const languages = { ... }; export const defaultLang = "en";`

**Barrel Files:**
- No barrel/index files used; each utility module exports directly
- Components imported by full path: `import Button from "./ui/Button.astro"`
- i18n utilities exposed from single file: `src/i18n/utils.ts` exports all translation functions

## Component Architecture

**Astro Components:**
- Frontmatter (---) contains: imports, prop interfaces, Astro.props destructuring, computed variables, async data fetching
- Template (HTML): uses Astro-specific syntax (class:list, dynamic attributes)
- Styles: scoped `<style>` blocks; CSS uses Tailwind utility classes
- Scripts: client-side `<script>` blocks contain GSAP animations and event listeners

**Props Handling:**
```typescript
interface Props {
  href?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  icon?: string;
  class?: string;
}

const { href, variant = "dark", size = "md", icon, class: className = "" } = Astro.props;
```

**Dynamic Rendering:**
- Conditionals in JSX-like syntax: `{titleBefore && (<span>...</span>)}`
- Array mapping: `.map((item) => (<div key={item.id}>...</div>))` (though Astro doesn't require keys)
- Keystatic CMS integration for dynamic content: `const reader = createReader(...); const members = await reader.collections.team.all();`

## CSS & Styling

**Tailwind:**
- Utility-first approach exclusively
- Custom Tailwind tokens defined: `beige-300`, `beige-500`, `beige-700`, `accent-dark`
- Font families configured: `font-sans` (Lato), `font-serif` (Baskerville)
- Custom utilities: `.noise` class for fractal noise overlay

**Scoped Styles:**
- Each component defines its own `<style>` block
- CSS variables not used; inline color values or Tailwind tokens
- Animation keyframes defined locally within components

## Animation Patterns

**GSAP Usage:**
- Registered per-component: `gsap.registerPlugin(ScrollTrigger);`
- Timeline creation: `gsap.timeline({ defaults: { ease: "power3.out" }, paused: true })`
- Staggered animations: `.to(selector, { ..., stagger: 0.08, ... })`
- ScrollTrigger integration: `.scrollTrigger: { trigger: "#section", start: "top 80%", ... }`

**Event Listeners:**
- Custom events dispatched: `window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: { scroll } }))`
- DOM listeners bound in script blocks: `toggle.addEventListener("click", () => ...)`
- Animation timelines paused/played conditionally based on scroll state

---

*Convention analysis: 2026-03-14*
