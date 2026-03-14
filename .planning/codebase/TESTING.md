# Testing Patterns

**Analysis Date:** 2026-03-14

## Test Framework

**Status:** Not detected

**Configuration:**
- No test runner configured (Jest, Vitest, etc.)
- No test files found in codebase (`.test.*`, `.spec.*`)
- No testing dependencies in `package.json`
- No `jest.config.*`, `vitest.config.*`, or similar test config files

**Assertion Library:**
- Not applicable; no testing infrastructure present

## Test File Organization

**Current State:**
- No test files present in repository
- No `/tests`, `/spec`, or `__tests__` directories

**Recommended Organization (if testing were added):**
- Location: Co-located with source files
- Pattern: `ComponentName.astro` → `ComponentName.test.ts`
- Alternative: Centralized in `src/__tests__/` matching `src/` structure

## Manual Testing Approach

**Current Validation:**
- Visual/manual testing in development server (`npm run dev`)
- Browser preview of animations via `npm run preview`
- No automated test suite for regression detection

**Development Workflow:**
```bash
npm run dev         # Run dev server at localhost:4321
npm run build       # Build for production
npm run preview     # Preview production build locally
```

## Coverage

**Requirements:** None enforced

**Current Coverage:** 0%

## Test Types (Recommended, Not Implemented)

**Unit Tests:**
- Candidates: i18n utilities (`getLangFromUrl`, `useTranslations`, `switchLangPath`, `localePath`)
- Candidates: Keystatic dynamic content loading in section components
- Would validate: language detection, translation key fallback, URL path generation

**Integration Tests:**
- Candidates: Header navigation menu interaction (open/close animations, language switching)
- Candidates: Full page rendering with multiple sections and dynamic content
- Would validate: component composition, data flowing through props, i18n across pages

**Visual/E2E Tests:**
- Not currently implemented
- Candidates for future: GSAP animation timing verification, scroll trigger behavior, responsive layout validation
- Tool recommendation: Playwright or Cypress for animated element verification

## What Could Be Tested

**i18n Utilities** (`src/i18n/utils.ts`):
```typescript
// Example test structure (not implemented)
describe("i18n utilities", () => {
  test("getLangFromUrl returns correct language from pathname", () => {
    const url = new URL("http://example.com/pt/about");
    expect(getLangFromUrl(url)).toBe("pt");
  });

  test("getLangFromUrl defaults to en for unknown language", () => {
    const url = new URL("http://example.com/unknown/about");
    expect(getLangFromUrl(url)).toBe("en");
  });

  test("useTranslations returns translation string for key", () => {
    const t = useTranslations("en");
    expect(t("nav.home")).toBe("Home");
  });

  test("useTranslations falls back to defaultLang if key missing", () => {
    const t = useTranslations("pt");
    // Would verify fallback behavior
  });

  test("switchLangPath preserves current page across language changes", () => {
    const url = new URL("http://example.com/pt/services");
    const newPath = switchLangPath(url, "en");
    expect(newPath).toBe("/services");
  });

  test("localePath skips prefix for default language", () => {
    expect(localePath("en", "/about")).toBe("/about");
    expect(localePath("pt", "/about")).toBe("/pt/about");
  });
});
```

**Component Props** (Button, PageHero):
```typescript
// Example test structure (not implemented)
describe("Button component", () => {
  test("renders as anchor when href prop provided", () => {
    // Would verify conditional Tag selection
  });

  test("renders as button by default", () => {
    // Would verify Tag = "button"
  });

  test("applies correct variant styles", () => {
    // Would verify className composition
  });

  test("includes icon when icon prop provided", () => {
    // Would verify Icon rendering
  });
});
```

## Mocking (Recommended Patterns, Not Implemented)

**DOM Elements:**
- Would mock `document.getElementById()`, `document.querySelector()` for testing GSAP interactions
- Would mock `gsap` timeline methods for animation testing

**Keystatic CMS Reader:**
```typescript
// Example mock structure (not implemented)
const mockReader = {
  collections: {
    team: {
      all: jest.fn().mockResolvedValue([
        { entry: { name: "Mirela", initials: "MB", ... } },
      ]),
    },
    services: {
      all: jest.fn().mockResolvedValue([
        { entry: { order: "01", title_en: "Bride", ... } },
      ]),
    },
  },
};
```

**i18n Translations:**
```typescript
// Example mock structure (not implemented)
const mockT = jest.fn((key) => mockTranslations[key] || key);
```

## What NOT to Mock (If Testing Were Implemented)

- Tailwind CSS utility classes (let integration tests validate layout)
- GSAP animation library itself (test integration with animations, not GSAP internals)
- Astro build/render system (use Astro's component testing tools if needed)
- TypeScript type system (let compiler validate types)

## Critical Areas Currently Without Tests

**High Risk:**
- `src/i18n/utils.ts` — Language detection and translation key resolution; bugs could break site for users
- Keystatic dynamic content loading in `TeamSection.astro`, `ServicesSection.astro` — No validation of data structure or empty content handling
- Header navigation animations and menu state management in `Header.astro` — Complex GSAP timelines and event listeners

**Medium Risk:**
- Page routing (`pages/index.astro`, `pages/pt/index.astro`, `pages/sp/index.astro`) — No validation that all locale variants render correctly
- `Button.astro` props validation — Variant and size enums not validated at runtime
- ScrollTrigger animations in all section components — No verification timing is correct

**Low Risk:**
- Static content rendering in `Footer.astro` — Simple template composition
- Asset image optimization in `HeroSection.astro` — Astro's image pipeline handles this

## Recommended Testing Strategy (If Implemented)

1. **Phase 1: Unit tests** for `src/i18n/utils.ts` (language detection, translation fallback)
2. **Phase 2: Component integration** tests for Button, PageHero, and simple sections without dynamic data
3. **Phase 3: E2E/Visual** tests for Header interactions, menu animations, responsive breakpoints
4. **Phase 4: Dynamic content** tests for Keystatic-dependent sections (TeamSection, ServicesSection)

## Dependencies for Testing (Not Currently Installed)

```json
{
  "devDependencies": {
    "vitest": "^latest",
    "@testing-library/astro": "^latest",
    "@testing-library/dom": "^latest",
    "gsap": "^already-installed"
  }
}
```

---

*Testing analysis: 2026-03-14*
