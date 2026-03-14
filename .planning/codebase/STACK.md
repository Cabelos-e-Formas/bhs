# Technology Stack

**Analysis Date:** 2026-03-14

## Languages

**Primary:**
- TypeScript - Used throughout components, config files, and utilities for type safety

**Secondary:**
- JavaScript - ES modules (`.mjs`) for build configuration
- HTML - Embedded in Astro components (`.astro` files)
- CSS - Tailwind utilities and custom global styles

## Runtime

**Environment:**
- Node.js v22.18.0 (minimum compatible version)

**Package Manager:**
- npm 11.10.1
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Astro 5.17.1 - Static site generator and page framework
  - Integrations: `@astrojs/react`, `@astrojs/markdoc`, `astro-icon`
  - File-based routing via `src/pages/`
  - Built-in i18n support (English, Portuguese, Spanish)

**Styling:**
- Tailwind CSS 4.2.0 - Utility-first CSS framework
- @tailwindcss/vite 4.2.0 - Tailwind Vite plugin for build integration

**Animations:**
- GSAP 3.14.2 - Animation library with ScrollTrigger plugin for scroll-based effects
- Lenis 1.3.18-dev - Smooth scrolling library

**CMS/Headless Content:**
- Keystatic 5.0.6 (@keystatic/core, @keystatic/astro) - Local file-based CMS
  - Collections: services, team, history, clients
  - Singletons: i18n translations (en, pt, sp)
  - Storage: Local file system

**Icons:**
- astro-icon 1.1.5 - Icon component library
- @iconify-json/material-symbols-light 1.2.57 - Material Symbols icon set

## Key Dependencies

**Critical:**
- react 19.2.4, react-dom 19.2.3 - React integration for Astro components
- @types/react 19.2.14, @types/react-dom 19.2.3 - TypeScript types for React

**Infrastructure:**
- @astrojs/vercel 9.0.4 - Adapter for Vercel deployment

## Configuration

**Environment:**
- No `.env` file required for core functionality
- Configuration is primarily declarative via `astro.config.mjs` and `keystatic.config.ts`
- i18n singletons stored locally in `src/content/i18n/`

**Build:**
- `astro.config.mjs` - Astro configuration
  - i18n routing: `defaultLocale: 'en'`, `locales: ['en', 'pt', 'sp']`, `prefixDefaultLocale: false`
  - Vite plugins: Tailwind CSS
  - Adapter: Vercel
- `tailwind.config.ts` - Tailwind configuration
  - Custom fonts: Lato (sans-serif), Baskerville (serif)
  - Custom colors: beige-300, beige-500, beige-700, accent-dark
- `keystatic.config.ts` - Keystatic CMS configuration
  - Collections path: `src/content/`
  - Translation singletons path: `src/content/i18n/`
- `tsconfig.json` - TypeScript compiler options (Astro-managed)

## Platform Requirements

**Development:**
- Node.js 22.x or compatible
- npm 11.x or compatible
- Filesystem access for local CMS (Keystatic)

**Production:**
- Vercel deployment platform
- Static site hosting capable of serving HTML/CSS/JS

---

*Stack analysis: 2026-03-14*
