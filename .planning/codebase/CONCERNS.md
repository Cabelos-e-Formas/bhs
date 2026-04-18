# Codebase Concerns

**Analysis Date:** 2026-03-14

## Tech Debt

**Unused / Incomplete Integrations:**
- Issue: `@keystatic/astro`, `@keystatic/core`, `@astrojs/markdoc`, and `@astrojs/react` are imported in `astro.config.mjs` but not actively used across the codebase. These add bundle weight without clear benefit.
- Files: `astro.config.mjs` (line 8, 15), `package.json`
- Impact: Increases bundle size, slows build time, adds maintenance burden for dependencies that aren't leveraged. `keystatic.config.ts` exists but only the team/history/clients collections are actively used; singletons duplicate `src/i18n/ui.ts`.
- Fix approach: Remove unused integrations from config. If Keystatic singletons are needed for editorial control, migrate all i18n from `ui.ts` to Keystatic singletons and remove `ui.ts`. Otherwise, remove Keystatic entirely and use static content files.

**Duplicate Translation Source:**
- Issue: Translations exist in both `src/i18n/ui.ts` and `keystatic.config.ts` (singletons). Components use `ui.ts` hardcoded strings; Keystatic singletons are configured but not consumed.
- Files: `src/i18n/ui.ts`, `keystatic.config.ts` (lines 162–347), all section components
- Impact: Translation maintenance split across two sources. Any edit to static strings in `ui.ts` won't be reflected in Keystatic, causing stale config. Future editors may be confused about where to update text.
- Fix approach: Consolidate to single source. Either: (1) remove `keystatic.config.ts` singletons and use static `ui.ts`, or (2) integrate Keystatic reader into `useTranslations()` in `src/i18n/utils.ts` to read from Keystatic at runtime.

**Dynamic Collection Not Fully Leveraged:**
- Issue: `keystatic.config.ts` defines `services` and `clients` collections with multi-language support (lines 91–157), but the codebase also hardcodes service/client data. Example: `ServicesSection.astro` hardcodes service cards; there's also a `ServicesPageSection.astro` that may consume collection data.
- Files: `keystatic.config.ts`, `src/components/sections/ServicesSection.astro`, `src/components/sections/ServicesPageSection.astro`
- Impact: Data not normalized. Two separate data sources for the same content (hardcoded + Keystatic) means content drift. Editor changes in Keystatic won't appear on hardcoded sections.
- Fix approach: Audit which sections use Keystatic readers (like `TeamSection.astro` does on line 9–10). Standardize: either all dynamic content goes through Keystatic, or none does. Remove collection definitions from `keystatic.config.ts` that aren't actively read.

## Known Bugs

**Tailwind Color Token Typo:**
- Symptoms: Custom `accent` color may fail to apply in certain contexts.
- Files: `tailwind.config.ts` (line 23)
- Trigger: The code reads `DEFAULT: "##6e9876"` (note double `##`) instead of `DEFAULT: "#6e9876"`. This is invalid CSS syntax and will cause Tailwind to skip the color definition.
- Workaround: Use `accent-dark` explicitly instead of the default `accent` class. The typo does not affect current codebase since `accent-dark` is used throughout.
- Risk: If future code references `bg-accent` or `text-accent` expecting the default, it will silently fail. Low impact currently, but a latent bug.

**GSAP Unsafe Type Assertions:**
- Symptoms: Potential runtime errors if DOM elements don't exist as expected.
- Files: `src/components/Header.astro` (line 119–125), `src/components/sections/NumbersSection.astro` (line 75), `src/components/sections/AboutUsSection.astro` (line 151)
- Trigger: Non-null assertions with `!` assume elements always exist. Example: `document.getElementById("menu-toggle")!` on line 119 of Header.astro. If an element is missing, the assertion passes but later code fails.
- Workaround: Components currently always render the required elements, so the bug hasn't manifested. Will surface if DOM structure changes.
- Risk: Silent failures in animations if SSR or caching causes elements to be missing. Medium priority.

**Hardcoded Language Fallback Logic Gap:**
- Symptoms: Language switching may return incomplete translations.
- Files: `src/i18n/utils.ts` (lines 9–12), `src/i18n/ui.ts`
- Trigger: `useTranslations()` function returns a `t()` function that attempts fallback: `ui[lang][key] || ui[defaultLang][key]`. However, not all languages may have the same keys. If a translation key is missing in English, it returns `undefined`.
- Workaround: All keys currently exist in all three language objects (en/pt/sp), so fallback never triggers. If a key is added to one language and not others, the fallback will show English; if missing from English, nothing is shown.
- Risk: Low if translations are kept in sync. High if language content diverges.

## Performance Bottlenecks

**Continuous GSAP RAF Loop in Layout:**
- Problem: `src/layouts/Layout.astro` (lines 48–53) runs `requestAnimationFrame(raf)` indefinitely, even when user is idle. This creates a continuous animation loop that prevents the browser from entering power-efficient idle states and triggers layout recalculations on every frame.
- Files: `src/layouts/Layout.astro` (script block, lines 35–54)
- Cause: Lenis smooth scrolling library requires continuous RAF updates. However, Lenis should only update on scroll events, not every frame.
- Improvement path: (1) Check Lenis documentation for conditional RAF based on scroll activity, or (2) Stop RAF when the page is not in focus using `visibilitychange` event, or (3) Use Lenis's built-in `autoRaf: false` option and manually trigger raf on scroll only.

**Number Count-Up Animations Trigger ScrollTrigger Refresh:**
- Problem: `src/components/sections/NumbersSection.astro` (line 93) and `src/components/sections/AboutUsSection.astro` (line 223) both call `ScrollTrigger.refresh()` on window load, after GSAP animations are queued. This forces a full scroll trigger recalculation, which is expensive on large pages with many triggers.
- Files: `src/components/sections/NumbersSection.astro`, `src/components/sections/AboutUsSection.astro`
- Cause: Animations update DOM (via `onUpdate` callbacks), which can affect layout heights. ScrollTrigger needs a refresh to recalculate trigger positions. However, calling refresh after every component load scales O(n) with component count.
- Improvement path: (1) Call `ScrollTrigger.refresh()` once after all animations are queued, not per-component, or (2) avoid DOM updates in GSAP animations (use CSS transforms instead of text content).

**Noise Filter SVG Regenerated Per Frame:**
- Problem: `src/styles/global.css` (lines 90–98) applies a fixed noise overlay with `::before` pseudo-element on the `<html>` tag. The SVG with `feTurbulence` is inlined as a data URI. This SVG is likely re-rendered every frame due to its `pointer-events: none` but fixed positioning.
- Files: `src/styles/global.css`
- Cause: The noise filter is performant as-is (it's a single pseudo-element with a data URI), but the z-index 9999 and fixed positioning may cause paint reflows on scroll.
- Improvement path: (1) Move noise to a separate element with `will-change: transform` to keep it off the scroll tree, or (2) use a static PNG/WebP instead of SVG for better caching.

**Large Baskerville Font Declarations:**
- Problem: `src/styles/global.css` declares 8 separate `@font-face` rules (lines 6–85) for different Baskerville variants. All are self-hosted WOFF files. Each variant is loaded separately, which can delay first paint if fonts aren't cached.
- Files: `src/styles/global.css`, `public/fonts/`
- Cause: No font-display strategy or preloading. Fonts block rendering until loaded (default `font-display: auto`).
- Improvement path: (1) Add `font-display: swap` to all `@font-face` rules so text renders immediately in fallback font, or (2) preload critical variants: `<link rel="preload" href="/fonts/BaskervilleBoldBT.woff" as="font" type="font/woff">` in Layout.astro head.

**Three-Language Static Content Not Optimized for Multi-Language Site:**
- Problem: All section components import `useTranslations()` and call `t()` for every string, even though the site is pre-built statically with Astro. Each language version loads the full `ui.ts` object (all 3 language sets) even though only one is needed.
- Files: All `.astro` files in `src/components/` and `src/pages/`
- Cause: Runtime i18n pattern applied to static generation. Astro can't tree-shake unused language objects because they're imported at runtime.
- Improvement path: For static sites, generate separate pages per language at build time using Astro's i18n routing (already configured). Replace dynamic `useTranslations()` calls with static lookup: `const translations = ui[lang as 'en' | 'pt' | 'sp']` to enable DCE of unused languages.

## Fragile Areas

**Header Navigation State Not Reset on Link Navigation:**
- Files: `src/components/Header.astro` (script, lines 116–223)
- Why fragile: The mobile menu (`isOpen` state) is managed in component script scope and closes on link click (line 215). However, if user navigates while menu is open, the animation timeline may be mid-flight. If the page transition is instant, the GSAP animations reference DOM elements that may no longer exist on the next page.
- Safe modification: (1) Add `gsap.killTweensOf("*")` before page navigation to cancel all running animations, or (2) store menu state in `sessionStorage` to ensure it's reset consistently across page loads.
- Test coverage: No tests for menu state persistence across navigation.

**Hero Section Animation Replay on Every Load:**
- Files: `src/components/sections/HeroSection.astro` (script, lines 121–207)
- Why fragile: The entry timeline is created with `paused: true` and relies on ScrollTrigger to start it `once: true` when hero enters viewport. If the page is scrolled past the hero on load (e.g., deep link), the animation never plays. The animation state is held in timeline object which is created per-component-load.
- Safe modification: Test that the hero animation plays when: (1) page loads at top, (2) page loads with hash (#), (3) user navigates directly to home, (4) user refreshes while scrolled down.
- Test coverage: No tests. Manual testing required.

**ScrollTrigger Not Cleaned Up on Route Change (SPA-like behavior):**
- Files: All components with ScrollTrigger animations (Header, HeroSection, NumbersSection, TeamSection, ClientsSection, UnitsSection, AboutSection, AboutUsSection, Footer)
- Why fragile: If Astro is used with partial hydration or if the site transitions to islands architecture, ScrollTrigger instances won't be cleaned up on page change. This causes memory leaks and trigger misfire on next page.
- Safe modification: When implementing client-side routing or hydration, add: `window.addEventListener('astro:before-swap', () => ScrollTrigger.getAll().forEach(t => t.kill()))` to clean up triggers on page transition.
- Test coverage: None. Risk increases if site adds client-side navigation.

**Team Cards Rendered Without Error Handling for Missing Keystatic Data:**
- Files: `src/components/sections/TeamSection.astro` (lines 9–10, 27–53)
- Why fragile: The component reads team members from Keystatic collection but has no fallback if the collection is empty or read fails. If `reader.collections.team.all()` throws or returns empty array, the grid will render with zero items, showing a blank section.
- Safe modification: Add error boundary and fallback: `const members = await reader.collections.team.all().catch(() => [])` and check for empty array to render placeholder or skip section.
- Test coverage: No error handling tests.

## Scaling Limits

**Hardcoded Unit Count in NumbersSection:**
- Current capacity: The `numbers-units` shows "5" (line 37 of `src/components/sections/NumbersSection.astro`), but is hardcoded.
- Limit: If the business opens a 6th unit, the number must be manually changed in code.
- Scaling path: Move unit count to Keystatic singleton or a `src/content/config.ts` so it's editable without touching code.

**Baskerville Font Variants Not Scalable:**
- Current capacity: 8 font faces (Normal, Regular, Light, Light-Italic, Bold, BT Roman, BT Italic, BT Bold, BT Bold Italic).
- Limit: Any new font variant requires adding `@font-face` rule manually.
- Scaling path: Generate font-face declarations from a JSON config or use a font system like Google Fonts that auto-scales variant support.

**i18n Limited to Three Languages:**
- Current capacity: English, Portuguese, Spanish.
- Limit: Adding a 4th language requires changes to: `astro.config.mjs`, `src/i18n/ui.ts`, `keystatic.config.ts` (singletons), and every page redirect.
- Scaling path: Define languages in a config file (`src/config.ts`) and iterate over it in config, i18n setup, and keystatic schema generation.

## Missing Critical Features

**No SEO Metadata Management:**
- Problem: Layout.astro (lines 9–24) has static title "Brazilian Hair Studio" and no meta description, og:image, or canonical tags. Each page uses the same title regardless of content.
- Impact: Search engine optimization is zero. Social media sharing shows no preview. Multi-language pages may have duplicate content penalty.
- Blocks: Cannot rank for long-tail keywords or share pages on social media effectively.
- Fix: Implement per-page meta tags. Create a `SEO.astro` component that accepts title, description, image, and canonical, and include it in Layout.astro.

**No Analytics or Conversion Tracking:**
- Problem: No Google Analytics, Vercel Analytics, or custom event tracking. Appointment button has `href="tel:+12393188366"` but no click tracking.
- Impact: Cannot measure traffic, user behavior, or conversion funnel. Cannot optimize marketing spend.
- Blocks: Data-driven improvement impossible. Business has no visibility into which pages drive bookings.
- Fix: Add Vercel Analytics integration (already available via `@astrojs/vercel` adapter). Add event tracking on CTA buttons.

**No 404 Page or Error Boundary:**
- Problem: No `src/pages/404.astro` or error handling component. If a user hits a non-existent route (e.g., `/about-us`), they get the default Astro 404.
- Impact: Poor user experience. No custom branding or call-to-action on error.
- Blocks: Cannot guide lost users back to booking flow.
- Fix: Create `src/pages/404.astro` with custom design and CTA button.

**No Appointment Booking Flow:**
- Problem: All "Book your appointment" buttons link to `href="/appointment"` or `href="tel:+12393188366"`. No `/appointment` page exists, and tel: link is browser default behavior.
- Impact: Users click button and either get a 404 or open their phone dialer (if on mobile). No booking form.
- Blocks: Cannot capture appointment requests directly. Users must manually call or use third-party booking system.
- Fix: Create `src/pages/appointment.astro` with a booking form or embed Calendly/Setmore iframe.

**No Image Optimization for Mobile:**
- Problem: `src/components/sections/AboutSection.astro` (line 18) uses `loading="lazy"` but doesn't specify `sizes` attribute or responsive image variants for mobile. The image is always full-width on desktop and full-width on mobile, but mobile screens are smaller.
- Impact: Mobile users download desktop-sized images unnecessarily, wasting bandwidth.
- Blocks: Performance on mobile networks is poor.
- Fix: Add `sizes="(max-width: 640px) 100vw, 50vw"` to image tag and use Astro's `<Image />` component's built-in responsive generation.

## Test Coverage Gaps

**No Unit or Integration Tests:**
- What's not tested: Animation logic, i18n string lookup, GSAP timeline creation, ScrollTrigger trigger placement.
- Files: All `.astro` files with scripts.
- Risk: Changes to component props, i18n keys, or GSAP easing could break without detection. Regressions in animations hard to spot.
- Priority: **High** — Critical path (hero animation, navigation) has zero test coverage.

**No E2E Tests:**
- What's not tested: Navigation flow (home → about → services), language switcher, mobile menu open/close, CTA button clicks.
- Risk: Broken links, missing pages, language switcher not working won't be caught until manual testing or user reports.
- Priority: **High** — Business-critical user flows have zero coverage.

**No Visual Regression Tests:**
- What's not tested: Layout shifts, animation glitches, color palette application, responsive breakpoints.
- Risk: CSS or tailwind changes could visually break the site without failing any logic tests.
- Priority: **Medium** — Design regressions hard to spot in automated testing; manual design QA is primary defense.

**No Accessibility Tests:**
- What's not tested: ARIA labels, focus management, keyboard navigation, color contrast, semantic HTML.
- Files: Header.astro has `aria-label`, `aria-expanded`, `aria-controls`, but no tests verify they work. Menu overlay has `aria-hidden="true"` but focus trap is not tested.
- Risk: Keyboard users cannot navigate menu. Screen readers may announce incorrect state.
- Priority: **Medium** — Current implementation has basic ARIA, but no audit or testing.

---

*Concerns audit: 2026-03-14*
