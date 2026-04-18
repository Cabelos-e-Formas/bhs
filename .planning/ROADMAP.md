# Roadmap — Brazilian Hair Studio Website

*Milestone: v1 — Launch-ready marketing & booking site*

---

## Phases

- [ ] **Phase 1: Team & Book Pages** - Add the two missing pages that complete the site's core navigation
- [ ] **Phase 2: Mobile & Responsive Fixes** - Make every page usable and correct on small screens
- [ ] **Phase 3: Design & Animation Polish** - Enforce luxury/editorial aesthetic and smooth animations across all pages
- [ ] **Phase 4: Code Quality** - Clean up component repetition and standardize prop APIs

---

## Phase Details

### Phase 1: Team & Book Pages

**Goal:** Visitors can discover every team member in depth and reach a booking flow from any page.
**Depends on:** None
**Requirements:** REQ-101, REQ-102, REQ-601

**Success Criteria** (what must be TRUE):
1. Navigating to /team shows a dedicated page with expanded bio, photo, and role for each team member (Mirela, Gezi, Francieli), sourced from the existing Keystatic team collection
2. Navigating to /book shows contact information and either an embedded booking iframe or a prominent external booking link — whichever the platform supports
3. Both pages render correctly in all three languages (en, pt, sp) via Keystatic or ui.ts translations — no untranslated strings visible
4. Language switcher on both new pages correctly links to the equivalent URL in the other two languages

**Deliverables:**
- `src/pages/team.astro` (+ `/pt/team.astro`, `/sp/team.astro`)
- `src/pages/book.astro` (+ `/pt/book.astro`, `/sp/book.astro`)
- Translation strings for both pages in `src/i18n/ui.ts` or Keystatic i18n singletons
- TeamPageSection and BookPageSection components (or extension of existing section patterns)

**Plans:** 2 plans

Plans:
- [x] 01-01-PLAN.md — Team page: Gezi YAML + TeamPageSection + 3 locale pages + teampage.* translation keys
- [ ] 01-02-PLAN.md — Book page: BookPageSection + 3 locale pages + bookpage.* translation keys + Header nav fix

---

### Phase 2: Mobile & Responsive Fixes

**Goal:** Every page is fully usable and visually correct on mobile screens starting at 375px width.
**Depends on:** Phase 1
**Requirements:** REQ-501, REQ-502, REQ-503, REQ-008

**Success Criteria** (what must be TRUE):
1. All pages (home, about, services, team, book) render without horizontal overflow or broken layouts at 375px viewport width
2. The hamburger menu opens and closes correctly on mobile — overlay covers the full screen, links are tappable, and the menu dismisses after navigation
3. The booking page iframe or link is accessible and usable on a mobile device without requiring horizontal scroll or zoom
4. Section content (hero text, service cards, team profiles, stats) stacks and scales correctly at mobile breakpoints without truncation or collision

**Deliverables:**
- Responsive layout fixes applied to all section components
- Corrected hamburger menu behavior (open/close/navigation)
- Mobile-safe booking embed or link layout

**Plans:** TBD

---

### Phase 3: Design & Animation Polish

**Goal:** Every page consistently communicates a luxury/editorial brand — visually tight, animated smoothly, images optimized.
**Depends on:** Phase 2
**Requirements:** REQ-201, REQ-202, REQ-203, REQ-301, REQ-302

**Success Criteria** (what must be TRUE):
1. A visual audit pass confirms all pages use only the approved palette (beige, forest-green, cream, white), Baskerville for display headings, and Lato for body — no off-brand fonts or colors remain
2. Spacing and typography are consistent section-to-section — heading sizes, line heights, and section padding follow a coherent scale
3. Every content image renders via Astro `<Image>` with correct aspect ratio, no distortion, no layout shift on load
4. GSAP scroll animations play on all sections across all pages — no section enters the viewport without an entrance animation
5. Animations complete without visible jank or layout shift on a mid-range mobile device (no JS errors in console)

**Deliverables:**
- Design audit findings resolved across all section components
- All `<img>` tags replaced with Astro `<Image>` where missing
- GSAP animation coverage gaps filled and existing janky timelines fixed

**Plans:** TBD

---

### Phase 4: Code Quality

**Goal:** Component code is DRY, prop APIs are consistent, and the codebase is easy to extend.
**Depends on:** Phase 3
**Requirements:** REQ-401, REQ-402, REQ-602

**Success Criteria** (what must be TRUE):
1. Repeated HTML/component patterns extracted into shared primitives or layout components — no block of markup duplicated across three or more files verbatim
2. All section components accept `lang` and `translations` (or equivalent) via a consistent prop interface — no section rolls its own ad-hoc translation lookup
3. Language switcher correctly highlights the active language on all pages, including team and book, with no broken or missing locale links

**Deliverables:**
- Shared layout primitives (e.g., SectionWrapper, SectionHeading) extracted where patterns repeat
- Prop API standardized across section components
- Language switcher verified and fixed on all routes

**Plans:** TBD

---

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Team & Book Pages | 1/2 | In progress | - |
| 2. Mobile & Responsive Fixes | 0/? | Not started | - |
| 3. Design & Animation Polish | 0/? | Not started | - |
| 4. Code Quality | 0/? | Not started | - |

---

## Coverage

| Requirement | Phase | Status |
|-------------|-------|--------|
| REQ-101 | Phase 1 | Complete (01-01) |
| REQ-102 | Phase 1 | Pending |
| REQ-601 | Phase 1 | Complete (01-01) |
| REQ-501 | Phase 2 | Pending |
| REQ-502 | Phase 2 | Pending |
| REQ-503 | Phase 2 | Pending |
| REQ-008 | Phase 2 | Pending |
| REQ-201 | Phase 3 | Pending |
| REQ-202 | Phase 3 | Pending |
| REQ-203 | Phase 3 | Pending |
| REQ-301 | Phase 3 | Pending |
| REQ-302 | Phase 3 | Pending |
| REQ-401 | Phase 4 | Pending |
| REQ-402 | Phase 4 | Pending |
| REQ-602 | Phase 4 | Pending |

**Coverage: 15/15 active requirements mapped. No orphans.**

---

*Last updated: 2026-03-14 (Phase 1 Plan 01 complete)*
