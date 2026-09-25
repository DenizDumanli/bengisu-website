// @ts-check
import { defineConfig } from 'astro/config';
import { access, readFile, writeFile } from 'node:fs/promises';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

/**
 * `@astrojs/sitemap` yalnızca `/sitemap-index.xml` + `/sitemap-N.xml` üretir;
 * arama motorlarının ve denetleyicilerin beklediği standart `/sitemap.xml`
 * yolu boş kalır. Bu küçük entegrasyon, üretilen dosyayı bu yola da yazar.
 * Böylece rota listesi ikinci kez yazılmaz (drift riski yok): tek parça varsa
 * düz `<urlset>`, birden çok parça varsa index kopyalanır.
 *
 * `sitemap()`'ten SONRA kaydedilmelidir; `astro:build:done` kancaları sırayla
 * çalıştığı için dosya o anda hazır olur.
 */
function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      /** @param {{ dir: URL }} args */
      'astro:build:done': async ({ dir }) => {
        /** @param {string} name */
        const file = (name) => new URL(name, dir);
        /** @param {string} name */
        const exists = (name) =>
          access(file(name)).then(
            () => true,
            () => false,
          );

        if (!(await exists('sitemap-index.xml'))) return;

        const source = (await exists('sitemap-1.xml')) ? 'sitemap-index.xml' : 'sitemap-0.xml';
        await writeFile(file('sitemap.xml'), await readFile(file(source), 'utf8'));
      },
    },
  };
}

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
  integrations: [sitemap(), sitemapXmlAlias()],
});
