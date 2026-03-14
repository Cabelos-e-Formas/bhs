# Brazilian Hair Studio Website

## What This Is

Marketing and booking website for Brazilian Hair Studio, a luxury hair salon based in Fort Myers, Florida. The site showcases services, team, and salon story in English, Portuguese, and Spanish — and directs clients to book appointments. Built with Astro 5, Tailwind CSS v4, GSAP animations, and Keystatic CMS.

## Core Value

Every page earns an appointment — the site must make the salon feel luxury and trustworthy enough that visitors book on the spot.

## Requirements

### Validated

- ✓ Home page with Hero, About, Numbers, Services, Team, Clients, Units sections — existing
- ✓ About page (/about) with salon story and timeline — existing
- ✓ Services page (/services) with service details — existing
- ✓ Three-language support (en/pt/sp) with i18n routing — existing
- ✓ Keystatic CMS for dynamic content (services, team, clients) — existing
- ✓ GSAP scroll animations and Lenis smooth scrolling — existing
- ✓ Sticky header with hamburger menu and language switcher — existing
- ✓ Responsive layout across desktop and mobile — existing (partially)

### Active

- [ ] Team page (/team) with expanded team member bios and profiles
- [ ] Book page (/book) with contact information and booking platform iframe/link
- [ ] Visual design audit and improvements across all pages (luxury/editorial aesthetic)
- [ ] Code quality improvements (reduce repetition, improve reuse)
- [ ] Animation improvements (missing or janky GSAP animations)
- [ ] Mobile/responsive fixes across all pages

### Out of Scope

- Custom booking system — the salon uses an external platform (TBD); this site embeds/links to it
- User accounts or authentication — static marketing site only
- Blog or editorial content — not part of the salon's current needs
- Online store / e-commerce — out of scope for this milestone

## Context

- Aesthetic: luxury/editorial — Baskerville serif, muted beige/forest-green palette, generous whitespace, minimal UI. Think high-end editorial magazine, not typical salon website.
- Booking platform: TBD (user will share). The /book page must accommodate an iframe embed OR an external link depending on the platform's capabilities.
- Audience: Brides, debutantes, and clients looking for high-end hair services in Fort Myers FL and also the Brazilian community (hence pt/sp languages).
- Team: Mirela, Gezi, Francieli — already in Keystatic CMS with bios. /team page expands on what home page TeamSection shows.

## Constraints

- **Tech stack**: Astro 5, Tailwind CSS v4, GSAP, Keystatic, Vercel — no new frameworks unless essential
- **i18n**: All new pages and copy must support en/pt/sp (3 languages via Keystatic or ui.ts)
- **CMS-first**: Dynamic content (team bios, contact info) should be editable via Keystatic where practical
- **Performance**: Static site — no client-side data fetching, images via Astro's `<Image>` for optimization

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Booking page uses iframe/link, not custom form | Salon already uses external booking tool; custom form adds complexity without value | — Pending |
| Team page uses existing Keystatic team collection | Data already exists; expansion is content-only, no schema redesign | — Pending |
| Luxury/editorial aesthetic as north star | User confirmed this is the target direction | — Pending |

---
*Last updated: 2026-03-14 after initialization*
