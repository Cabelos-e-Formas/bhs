# SEO Audit — Brazilian Hair Studio

Audited 2026-10-22 against the production build of the `redesign` branch (`.vercel/output/static`)
and the live domain. No Search Console / analytics access, so this covers technical, on-page and
local SEO — not rankings or traffic.

## Executive summary

The page foundation is good: static HTML, one H1 per page, optimized WebP images with `srcset`,
correct `html[lang]` per locale and consistent NAP. Nearly all search plumbing is missing, though:
no sitemap, robots.txt, canonicals, hreflang or structured data. The biggest issue is the live
domain, which does not serve this site.

## Critical

| # | Issue | Evidence | Fix | Status |
|---|---|---|---|---|
| 1 | Live domain serves a different site; every URL returns 200 (soft 404s) | `brazilian-hair-studio.com/` = "Recepção Virtual"; `/this-page-does-not-exist-xyz` → 200, empty title, self-canonical | Point the domain at Vercel on launch; move the virtual-reception page to a path; real 404s | **Owner action** (DNS) — site now ships a real `404.html` |
| 2 | No sitemap, no robots.txt, no `site` in Astro config | Not in build output | `site`, `@astrojs/sitemap` with i18n alternates, robots.txt | Fixed |
| 3 | Keystatic admin routed in production | `/keystatic`, `/api/keystatic` in Vercel routes | Remove Keystatic | Fixed (Keystatic removed) |
| 4 | Duplicate URLs | Nav links `/home`, language switcher `/home/`; both 200; `/` only redirects to `/home` | `trailingSlash: 'never'`, canonicals, home at `/` | Fixed |

## High

| # | Issue | Fix | Status |
|---|---|---|---|
| 5 | No canonical / hreflang on a 3-locale site | Self-canonical + reciprocal `en` / `pt-BR` / `es` + `x-default` on every page | Fixed |
| 6 | No LocalBusiness structured data | `HairSalon` JSON-LD (NAP, geo, hours, sameAs, areaServed). No self-serving `aggregateRating` | Fixed |
| 7 | Same meta description on every page of a locale | Unique description per page and locale | Fixed |
| 8 | Brand-first / generic titles; H1s without service or location ("Our Services", "Ready to transform?") | Keyword-first titles; keyword in H1 | Fixed |

## Medium

| # | Issue | Fix | Status |
|---|---|---|---|
| 9 | Copy says "Brazilian smoothing"; searches are "Brazilian blowout", "keratin treatment", "balayage Fort Myers", "hair salon Fort Myers" | Work search terms into copy | Fixed (copy) |
| 10 | No dedicated page per service | One page per core service with real content + FAQ | Open — long-term content work |
| 11 | No `og:image` / Twitter card | 1200×630 share image + card tags | Fixed |
| 12 | `/linktree` pages thin + duplicated ×3 | `noindex` | Fixed |
| 13 | "325+ five-star reviews" unsupported | Link to Google reviews | Fixed |
| 14 | Spanish locale path `/sp/` | Move to `/es/` with 301s from `/sp/*` | Fixed |

## Low / already good

- Decorative images correctly use `alt=""`; hero photo is described.
- Stock photos don't help image search or E-E-A-T — replace with real salon/client work when possible.
- Performance looks strong (static, WebP + `srcset`, font preloads, little JS, hero `fetchpriority`).
  Measure Core Web Vitals with PageSpeed Insights after deploy.
- NAP is consistent on-site; make the Google Business Profile match exactly ("Unit 301").

## Owner checklist after launch

1. Point `brazilian-hair-studio.com` (and `www`) at the Vercel project; pick one host and redirect the other.
2. Move or retire the "Recepção Virtual" page so the domain stops returning 200 for unknown URLs.
3. Verify the domain in Google Search Console and Bing Webmaster Tools; submit `/sitemap-index.xml`.
4. Validate structured data with the Rich Results Test.
5. Align the Google Business Profile (name, address, phone, hours, website URL, categories).
6. Run PageSpeed Insights on `/`, `/services`, `/pt`, `/es`.
