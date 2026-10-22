# Brazilian Hair Studio

Marketing site for [Brazilian Hair Studio](https://brazilian-hair-studio.com), a hair salon at 2950 Winkler Ave, Fort Myers, FL, with a 25-year salon history in Criciúma, Brazil.

A static, trilingual (English, Portuguese, Spanish) site built with Astro and Tailwind CSS, deployed to Cloudflare Workers static assets. There is no CMS: content lives in YAML files in the repo.

## Getting started

Requires Node.js 22.23.4 or later.

```sh
npm install
npm run dev
```

The dev server runs at [localhost:4321](http://localhost:4321). No environment variables are needed for local development.

## Commands

| Command           | Action                                                                     |
| :---------------- | :------------------------------------------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321`                                   |
| `npm run build`   | Build the static site to `dist/`                                           |
| `npm run preview` | Build, then serve `dist/` with Wrangler (applies redirects, headers, 404) |
| `npm run deploy`  | Build, then deploy to Cloudflare with `wrangler deploy`                    |

The dev server does not apply `public/_redirects` or `public/_headers`. Use `npm run preview` to check them.

## Pages

| Route          | Page                                  |
| :------------- | :------------------------------------ |
| `/`            | Home                                  |
| `/services`    | Services                              |
| `/about`       | About us and timeline                 |
| `/appointment` | Book an appointment                   |
| `/linktree`    | Link-in-bio page (`noindex`)          |

English has no prefix. Portuguese and Spanish live under `/pt/...` and `/es/...`. Old URLs (`/home`, `/sp/*`) redirect with a 301 via `public/_redirects`.

## Editing content

| What                         | Where                                  |
| :--------------------------- | :------------------------------------- |
| Services list                | `src/content/services/*.yaml`          |
| Client reviews               | `src/content/clients/*.yaml`           |
| About-page timeline          | `src/content/history/*.yaml`           |
| Link-in-bio profile and links| `src/content/linktree/`, `src/content/linktree-links/` |
| Interface copy and page meta | `src/i18n/ui.ts`                       |
| Phone, address, social links | `src/data/contact.ts`                  |

Every localized field needs `_en`, `_pt` and `_es` versions; the schemas in `src/content.config.ts` fail the build if one is missing. After editing, run `npm run build` to check, then push.

## Environment variables (optional)

Copy `.env.example` to `.env`. All variables are read at build time, so values only refresh when the site rebuilds. On Cloudflare, set them as build variables.

| Variable                 | Used for                                                                 |
| :----------------------- | :----------------------------------------------------------------------- |
| `GOOGLE_PLACES_API_KEY`  | Google review count (otherwise `GOOGLE_REVIEWS_FALLBACK` in `src/lib/stats.ts`) |
| `GOOGLE_PLACE_ID`        | Skips the place lookup on each build                                     |
| `INSTAGRAM_ACCESS_TOKEN` | Latest Instagram posts (otherwise only handles and social links show)    |

## Deployment

The site deploys to Cloudflare Workers as static assets, with no Worker script. Configuration is in `wrangler.jsonc`:

- Pages build as `about.html` and are served at `/about`; trailing slashes and `.html` redirect to the clean URL.
- Unknown URLs get `dist/404.html` with a real 404 status.
- `public/_headers` sets long-lived caching for hashed assets, fonts and logos.

Cloudflare build settings: build command `npm run build`, deploy command `npx wrangler deploy`. Non-production branches get preview deployments.

## Tech stack

- [Astro 7](https://astro.build) with content collections (YAML + Zod schemas)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- `astro-icon` with the Material Symbols Light set
- `@astrojs/sitemap` with i18n alternates
- Lato and Baskerville fonts, self-hosted
- TypeScript (strict)

## Further reading

- `CLAUDE.md`: architecture, conventions and common pitfalls
- `docs/design-system.md`: visual rules (colors, type, layout, motion)
- `docs/seo-audit.md`: SEO audit and owner checklist
