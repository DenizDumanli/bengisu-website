import type { APIRoute } from 'astro';
import { CONTENT } from '../data/content';

/**
 * site.webmanifest — PWA / uygulama simgesi bildirimi (Android, Windows, iOS 16.4+).
 * Simge adresleri `site` ve `BASE_PATH` üzerinden üretilir; böylece canonical
 * host ve alt yol ile aynı kalır.
 */
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site ?? new URL('https://example.com'));
  const icon = (path: string) => new URL(path, root).href;

  const manifest = {
    name: `${CONTENT.identity.fullName} — ${CONTENT.identity.office}`,
    short_name: CONTENT.identity.fullName,
    description: CONTENT.seo.siteDescription,
    lang: CONTENT.locale,
    start_url: root.href,
    scope: root.href,
    display: 'standalone',
    background_color: '#0a0907',
    theme_color: '#0a0907',
    icons: [
      { src: icon('favicon.svg'), sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: icon('icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: icon('icon-512.png'), sizes: '512x512', type: 'image/png' },
      { src: icon('icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
