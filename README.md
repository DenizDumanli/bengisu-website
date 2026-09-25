# Bengisu Site

Static marketing site for Av. Bengisu Arslan (Ankara), built with
[Astro](https://astro.build) 7, [Tailwind CSS](https://tailwindcss.com) 4, GSAP and Lenis.

## Requirements

- Node.js `>=22.12.0`
- Windows only: use `npm.cmd` instead of `npm` (the PowerShell execution policy blocks `npm.ps1`)

## Setup

```sh
npm.cmd install
npm.cmd run dev
```

Dev server runs at http://localhost:4321.

## Commands

| Command                    | Action                           |
| :------------------------- | :------------------------------- |
| `npm.cmd run dev`          | Start the dev server             |
| `npm.cmd run build`        | Build the static site to `dist/` |
| `npm.cmd run preview`      | Preview the built site           |
| `npm.cmd run check`        | Astro type and diagnostic check  |
| `npm.cmd run format`       | Format with Prettier             |
| `npm.cmd run format:check` | Check formatting without writing |

## Project structure

```text
/
├── public/                  # static assets served as-is (logo + optimized derivatives, favicon)
├── src/
│   ├── components/          # Header, Footer, Seal, Scales, SectionHeading, ContactForm…
│   ├── data/content.ts      # ALL site copy, identity, contact, nav, CV + practice areas
│   ├── layouts/             # BaseLayout (head, meta, structured data, header/footer)
│   ├── pages/               # file-based routes (home, hakkımda, faaliyet-alanlari, iletisim)
│   ├── scripts/motion.ts    # GSAP + Lenis motion layer (reveals, seal, parallax)
│   └── styles/global.css    # Tailwind import + @theme design tokens
├── kilo.json                # MCP servers and tool permissions
└── CREDITS.md               # third-party attribution log
```

## Configuration

- **Domain**: set `SITE_URL` in the deployment environment to the real origin before building.
  `astro.config.mjs` warns during a production build and falls back to `https://example.com` when it is
  missing. It drives canonical URLs, OG tags, structured data, the sitemap and the generated robots.txt.
- **Brand tokens**: edit the `@theme` block in `src/styles/global.css` (obsidian, brass, parchment,
  and the Cinzel / EB Garamond type pairing).
- **Content**: every visible string lives in `src/data/content.ts` — identity and contact details,
  navigation, shared UI labels, per-page copy, the CV (bio, education, experience, internships,
  memberships, certifications, skills, languages) and the practice areas. Pages and components only
  reference it, so no copy has to be edited twice. Title/description for each page are under
  `<page>.seo`; `identity`-derived strings (wordmark, seal ring, schema name) are computed in the
  module. `id`/`slug` fields are in-page anchors used by deep links — change them only together with
  the links that point at them.
- **Motion**: `src/scripts/motion.ts` — reveals and the hero timeline are gated behind
  `prefers-reduced-motion`; the component CSS only hides content when JS has booted (failsafe in
  `BaseLayout.astro` un-hides everything if the bundle fails).
- **Language**: the copy is Turkish and `SITE.locale` is `tr`.

## Third-party templates and assets

Any imported layout, template, or design asset must be logged in [`CREDITS.md`](./CREDITS.md) with
its license before it is integrated. See `AGENTS.md` for the full checklist, or run
`/audit-template <path-or-url>`.

## Deployment

`npm.cmd run build` produces a fully static `dist/` directory. Deploy it to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages). CI runs format check, `astro check`, and the
build on every push (`.github/workflows/ci.yml`).

## Licensing

The site code is private unless a license is added. Third-party assets keep their own licenses —
see `CREDITS.md`.
