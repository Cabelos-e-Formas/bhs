// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://brazilian-hair-studio.com',

  // One canonical form per URL: /services, never /services/
  trailingSlash: 'never',

  // Build pages as about.html (not about/index.html) so the host serves /about without a slash.
  build: {
    format: 'file',
  },

  // Old-URL redirects live in public/_redirects (Cloudflare static assets)

  integrations: [
    icon(),
    sitemap({
      // Link-in-bio pages are noindex and stay out of the sitemap
      filter: (page) => !page.includes('/linktree'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pt: 'pt-BR', es: 'es' },
      },
    }),
  ],

  // Instagram post images are fetched and optimized at build time (see src/lib/instagram.ts)
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
    ],
  },

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
