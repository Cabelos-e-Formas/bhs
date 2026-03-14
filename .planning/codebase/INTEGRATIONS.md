# External Integrations

**Analysis Date:** 2026-03-14

## APIs & External Services

**Google Fonts:**
- Service: Google Fonts
- What it's used for: Lato font family (sans-serif) for body text
  - Loaded via standard Google Fonts CDN in browser
  - Declared in `src/styles/global.css`

**Material Symbols Icons:**
- Service: Iconify CDN (icon set library)
- What it's used for: Menu, close, phone icons in Header and Button components
  - Package: @iconify-json/material-symbols-light
  - Used in `src/components/Header.astro` and `src/components/ui/Button.astro`

## Data Storage

**Databases:**
- None - This is a static site generator

**File Storage:**
- Local filesystem only
- Static assets in `src/assets/` (images, logo)
- Content files in `src/content/` (Keystatic collections and i18n singletons)
- Public assets in `public/` (fonts, favicon)

**Content Management:**
- Keystatic (local file-based CMS)
  - Storage: `storage: { kind: 'local' }` in `keystatic.config.ts`
  - Collections stored in `src/content/services/`, `src/content/team/`, `src/content/history/`, `src/content/clients/`
  - Singletons stored in `src/content/i18n/en`, `src/content/i18n/pt`, `src/content/i18n/sp`
  - Image uploads: `public/images/history/` (configured in history collection schema)

**Caching:**
- None configured

## Authentication & Identity

**Auth Provider:**
- None - This is a public-facing marketing/portfolio site

**Authentication:**
- No user authentication required
- Keystatic admin panel uses local file access (no external auth)

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- Console logging only (no external logging service)
- Development: `npm run dev` output to stdout
- Build: `npm run build` output to stdout

## CI/CD & Deployment

**Hosting:**
- Vercel (@astrojs/vercel adapter)
  - Configured in `astro.config.mjs`: `adapter: vercel()`
  - Static site deployment

**CI Pipeline:**
- Not detected in codebase
- Likely configured in Vercel dashboard or `vercel.json` (not in repository)

## Environment Configuration

**Required env vars:**
- None identified - site is fully static with no backend services

**Development environment:**
- Local file system for Keystatic CMS
- Node.js runtime for build/dev server

**Production environment:**
- Vercel platform handles deployment
- Static files served from Vercel CDN

## Webhooks & Callbacks

**Incoming:**
- None detected

**Outgoing:**
- None detected

---

*Integration audit: 2026-03-14*
