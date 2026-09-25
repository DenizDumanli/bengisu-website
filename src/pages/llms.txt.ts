import type { APIRoute } from 'astro';
import { CONTENT } from '../data/content';

/**
 * llms.txt — AI arama motorlarına site yapısını ve özeti sunar.
 * `site` (astro.config.mjs) üzerinden üretilir; canonical ile aynı host'u kullanır.
 */
export const GET: APIRoute = ({ site }) => {
  const root = new URL(import.meta.env.BASE_URL, site ?? new URL('https://example.com'));
  const link = (path: string) => new URL(path, root).href;

  const lines = [
    `# ${CONTENT.identity.fullName} — ${CONTENT.identity.office}`,
    '',
    `> ${CONTENT.seo.siteDescription}`,
    '',
    `Konum: ${CONTENT.contact.location}`,
    `İletişim: ${CONTENT.contact.phone} · ${CONTENT.contact.email}`,
    '',
    '## Sayfalar',
    `- [Ana Sayfa](${root.href})`,
    `- [Hakkımda](${link('hakkimda/')})`,
    `- [Faaliyet Alanları](${link('faaliyet-alanlari/')})`,
    `- [İletişim](${link('iletisim/')})`,
    '',
    '## Faaliyet Alanları',
    ...CONTENT.practiceAreas.areas.map((area) => {
      const meta = CONTENT.practiceAreaSeo[area.slug];
      return `- [${area.title}](${link(`faaliyet-alanlari/${area.slug}/`)}): ${meta.description}`;
    }),
    '',
    '## Not',
    'Bu site tanıtım ve bilgilendirme amaçlıdır; hukuki mütalaa niteliği taşımaz.',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
