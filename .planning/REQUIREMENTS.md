# Requirements — Brazilian Hair Studio Website

*Milestone: v1 — Launch-ready marketing & booking site*

---

## Validated (Existing Features)

| ID | Requirement | Category | Status |
|----|-------------|----------|--------|
| REQ-001 | Home page with Hero, About, Numbers, Services, Team, Clients, Units sections | Content | ✓ Validated |
| REQ-002 | About page (/about) with salon story and timeline | Content | ✓ Validated |
| REQ-003 | Services page (/services) with service details | Content | ✓ Validated |
| REQ-004 | Three-language support (en/pt/sp) with Astro i18n routing | i18n | ✓ Validated |
| REQ-005 | Keystatic CMS for dynamic content (services, team, clients) | CMS | ✓ Validated |
| REQ-006 | GSAP scroll animations and Lenis smooth scrolling | Animation | ✓ Validated |
| REQ-007 | Sticky header with hamburger menu and language switcher | Navigation | ✓ Validated |
| REQ-008 | Responsive layout across desktop and mobile | Responsive | ✓ Partial |

---

## Active (New / Incomplete Features)

### Pages

| ID | Requirement | Category | Priority |
|----|-------------|----------|----------|
| REQ-101 | Team page (/team) with expanded team member bios, photos, and profiles | Content | High |
| REQ-102 | Book page (/book) with contact information and booking platform iframe or external link | Conversion | High |

### Design & UX

| ID | Requirement | Category | Priority |
|----|-------------|----------|----------|
| REQ-201 | Visual design audit across all pages — enforce luxury/editorial aesthetic (Baskerville, beige/forest-green, whitespace, minimal UI) | Design | High |
| REQ-202 | Typography and spacing consistency across all section components | Design | Medium |
| REQ-203 | Image handling — all images use Astro `<Image>` for optimization, correct aspect ratios | Performance | Medium |

### Animations

| ID | Requirement | Category | Priority |
|----|-------------|----------|----------|
| REQ-301 | Audit and fix missing or janky GSAP scroll animations across all sections | Animation | Medium |
| REQ-302 | Ensure animations are performant and don't cause layout shift on mobile | Animation | Medium |

### Code Quality

| ID | Requirement | Category | Priority |
|----|-------------|----------|----------|
| REQ-401 | Reduce component repetition — extract shared patterns into reusable components | Code | Medium |
| REQ-402 | Consistent prop API across section components (lang, translations) | Code | Low |

### Mobile / Responsive

| ID | Requirement | Category | Priority |
|----|-------------|----------|----------|
| REQ-501 | Mobile layout fixes — all pages usable and visually correct on small screens (375px+) | Responsive | High |
| REQ-502 | Header hamburger menu works correctly and accessibly on mobile | Responsive | Medium |
| REQ-503 | Booking iframe or link is mobile-friendly | Responsive | Medium |

### i18n

| ID | Requirement | Category | Priority |
|----|-------------|----------|----------|
| REQ-601 | All new pages (team, book) have full en/pt/sp translations via Keystatic or ui.ts | i18n | High |
| REQ-602 | Language switcher correctly reflects active language on all pages including new ones | i18n | Medium |

---

## Out of Scope

- Custom booking system (salon uses external platform — embed/link only)
- User accounts or authentication
- Blog or editorial content
- Online store / e-commerce

---

## Constraints

- **Tech stack**: Astro 5, Tailwind CSS v4, GSAP, Keystatic, Vercel — no new frameworks unless essential
- **i18n**: All new pages and copy must support en/pt/sp
- **CMS-first**: Dynamic content (team bios, contact info) editable via Keystatic where practical
- **Performance**: Static site — no client-side data fetching, images via Astro `<Image>`

---

*Last updated: 2026-03-14*
