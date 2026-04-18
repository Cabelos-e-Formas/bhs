---
phase: 1
slug: team-book-pages
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-14
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — no test framework installed (Astro SSG build is the gate) |
| **Config file** | none |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run preview` |
| **Estimated runtime** | ~15 seconds (build only) |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run preview` + manual browser check
- **Before `/gsd:verify-work`:** Full build clean + manual pass of all 6 new URLs
- **Max feedback latency:** ~15 seconds (build gate)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 1-01-01 | 01 | 1 | REQ-101 | build | `npm run build` | ⬜ pending |
| 1-01-02 | 01 | 1 | REQ-101 | build | `npm run build` | ⬜ pending |
| 1-01-03 | 01 | 1 | REQ-601 | build | `npm run build` | ⬜ pending |
| 1-02-01 | 02 | 1 | REQ-102 | build | `npm run build` | ⬜ pending |
| 1-02-02 | 02 | 1 | REQ-102 | build | `npm run build` | ⬜ pending |
| 1-02-03 | 02 | 1 | REQ-601 | build | `npm run build` | ⬜ pending |
| 1-03-01 | 03 | 2 | REQ-601 | manual | visit all 6 URLs | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

None — existing infrastructure covers all phase requirements. The Astro SSG build is the automated gate. No test framework installation is needed.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| /team renders all 3 member cards in correct language | REQ-101 | Visual layout, no test runner | Visit /team, /pt/team, /sp/team — confirm Mirela, Gezi, Francieli appear with localized text |
| /book renders contact info + booking slot | REQ-102 | Visual layout, no test runner | Visit /book, /pt/book, /sp/book — confirm contact info and booking CTA visible |
| Language switcher on new pages links correctly | REQ-601 | Navigation behavior | On /team, click pt/sp switcher — confirm redirects to /pt/team and /sp/team |
| No English text bleeds through on pt/sp routes | REQ-601 | Requires visual inspection | Check all translated strings on /pt/ and /sp/ variants |
| Header "Book" nav link resolves to /book | REQ-102 | Navigation behavior | Click header book link — confirm redirects to /book |

---

## Validation Sign-Off

- [ ] All tasks have `npm run build` as automated verify
- [ ] Sampling continuity: build gate runs after every task
- [ ] Wave 0: not needed (no test framework)
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s (build gate)
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
