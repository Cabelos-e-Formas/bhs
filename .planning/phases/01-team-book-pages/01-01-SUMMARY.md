---
phase: 01-team-book-pages
plan: 01
subsystem: ui
tags: [astro, keystatic, gsap, i18n, tailwindcss]

requires: []
provides:
  - "/team route with three team member cards (Mirela, Gezi, Francieli) in English"
  - "/pt/team and /sp/team routes with fully localized copy"
  - "gezi-soares.yaml Keystatic team collection entry"
  - "teampage.* translation keys in all three languages"
  - "TeamPageSection.astro reusable section component"
affects:
  - "02-mobile-responsive-fixes (team page needs responsive check)"
  - "03-design-animation-polish (team page GSAP animations to polish)"

tech-stack:
  added: []
  patterns:
    - "Page route pattern: each locale (root, pt/, sp/) imports global.css and Layout, renders one section component"
    - "TeamPageSection follows createReader(process.cwd(), keystaticConfig).collections.team.all() for CMS reads"
    - "Language-specific YAML fields accessed via member.entry[`field_${lang}` as keyof typeof member.entry]"
    - "Page-level translations use teampage.* namespace; home-section translations use team.* namespace"
    - "GSAP window.addEventListener('load') wrapper used for scroll animations in page sections"

key-files:
  created:
    - src/content/team/gezi-soares.yaml
    - src/components/sections/TeamPageSection.astro
    - src/pages/team.astro
    - src/pages/pt/team.astro
    - src/pages/sp/team.astro
  modified:
    - src/i18n/ui.ts

key-decisions:
  - "teampage.experience key is separate from team.experience — page section uses its own namespace to avoid coupling to home page section translations"
  - "eyebrow text 'Brazilian Hair Studio · Our Team' is not translated — consistent brand identifier across locales"

patterns-established:
  - "Page section namespace: teampage.* (not team.*) — page-level keys are distinct from home-section keys"
  - "Locale page files: root for English, pt/ and sp/ subdirectories for other locales, identical structure with adjusted import depths"

requirements-completed: [REQ-101, REQ-601]

duration: 2min
completed: 2026-03-14
---

# Phase 1 Plan 01: Team Page Summary

**Keystatic-backed /team page with three member cards (Mirela, Gezi, Francieli) fully translated in English, Portuguese, and Spanish, with GSAP scroll animation**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-14T17:51:00Z
- **Completed:** 2026-03-14T17:52:47Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments
- Created gezi-soares.yaml — the missing team collection entry that prevented Gezi from appearing in any team section
- Added teampage.heading, teampage.subtitle, and teampage.experience translation keys to all three language objects in ui.ts
- Built TeamPageSection.astro with PageHero, responsive member card grid, localized role/bio/experience, and GSAP stagger animation
- Created /team (English), /pt/team (Portuguese), and /sp/team (Spanish) routes — all three prerender at build time with zero errors

## Task Commits

Each task was committed atomically:

1. **Task 1: Create gezi-soares.yaml and add teampage.* translation keys** - `f187047` (feat)
2. **Task 2: Create TeamPageSection.astro and 3 locale page files** - `66b2c0a` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified
- `src/content/team/gezi-soares.yaml` - Keystatic team entry for Gezi Soares with all 9 required fields in three languages
- `src/i18n/ui.ts` - Added teampage.heading, teampage.subtitle, teampage.experience to en, pt, sp language objects
- `src/components/sections/TeamPageSection.astro` - Team page section with PageHero, card grid (initials placeholder, name, role, bio, experience), GSAP scroll animation
- `src/pages/team.astro` - English /team route
- `src/pages/pt/team.astro` - Portuguese /pt/team route
- `src/pages/sp/team.astro` - Spanish /sp/team route

## Decisions Made
- Used `teampage.*` namespace (not `team.*`) to keep page-level translations decoupled from the home-section team translations. This prevents accidental coupling if either evolves independently.
- Eyebrow text "Brazilian Hair Studio · Our Team" left as a hardcoded brand string (not translated), consistent with how other PageHero components in the codebase treat brand labels.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None — build passed on first attempt for both tasks. The chunk size warning for keystatic-page.js is a pre-existing condition unrelated to this plan's changes.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- /team, /pt/team, /sp/team routes are production-ready and prerendered
- Gezi Soares now appears correctly in the Keystatic team collection — this also fixes the home-page TeamSection if it was missing her
- Phase 2 (Mobile & Responsive Fixes) should include /team as a new page to check for responsive layout issues
- Phase 3 (Design & Animation Polish) can refine GSAP animations in TeamPageSection.astro

## Self-Check: PASSED

- src/content/team/gezi-soares.yaml: FOUND
- src/components/sections/TeamPageSection.astro: FOUND
- src/pages/team.astro: FOUND
- src/pages/pt/team.astro: FOUND
- src/pages/sp/team.astro: FOUND
- .planning/phases/01-team-book-pages/01-01-SUMMARY.md: FOUND
- Commit f187047: FOUND
- Commit 66b2c0a: FOUND

---
*Phase: 01-team-book-pages*
*Completed: 2026-03-14*
