// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// Set SITE_URL in the deployment environment to the real origin (e.g. https://example.com).
// It drives canonical URLs, the sitemap, structured data and the generated robots.txt.
// Set BASE_PATH when the site is served from a sub-path (GitHub Pages project sites,
// e.g. /bengisu-website). Astro always keeps a trailing slash on the base.
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? '/';

if (!site && process.argv.includes('build')) {
  console.warn(
    '[seo] SITE_URL is not set — canonical URLs, OG tags, JSON-LD and the sitemap fall back to ' +
      'https://example.com. Set SITE_URL in the deployment environment before shipping.',
  );
}

// https://astro.build/config
export default defineConfig({
  site: site ?? 'https://example.com',
  base,
  trailingSlash: 'always',
  prefetch: { prefetchAll: true },
  build: { inlineStylesheets: 'auto' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
