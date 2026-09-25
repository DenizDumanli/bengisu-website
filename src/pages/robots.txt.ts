import type { APIRoute } from 'astro';

/**
 * Generated from `site` in astro.config.mjs so the advertised sitemap host can
 * never drift from the canonical URLs.
 */
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site ?? 'https://example.com');
  const sitemap = new URL('sitemap.xml', root);
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap.href}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
