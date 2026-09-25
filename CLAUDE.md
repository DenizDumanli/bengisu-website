## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Project

Static portfolio/marketing site built with Astro 7 + Tailwind CSS 4. No server runtime; the build
output in `dist/` is plain static HTML/CSS/JS.

Commands (Windows: use `npm.cmd` instead of `npm` — the PowerShell execution policy blocks
`npm.ps1`):

| Command                    | Purpose                                         |
| :------------------------- | :---------------------------------------------- |
| `npm.cmd run dev`          | Dev server on http://localhost:4321             |
| `npm.cmd run build`        | Production build to `dist/`                     |
| `npm.cmd run preview`      | Serve the built output locally                  |
| `npm.cmd run check`        | Astro type + diagnostic check (run before done) |
| `npm.cmd run format`       | Prettier write                                  |
| `npm.cmd run format:check` | Prettier check (CI gate)                        |

## Code conventions

- Components live in `src/components/`, layouts in `src/layouts/`, editable copy and data in
  `src/data/`, routes in `src/pages/`.
- URLs use trailing slashes (`trailingSlash: 'always'` in `astro.config.mjs`); keep nav and internal
  links consistent.
- Use Tailwind design tokens declared in `src/styles/global.css` (`@theme`), e.g. `text-brand-700`,
  `rounded-card`. Do not hard-code hex colors in components.
- Keep the site zero-JS by default. Add client-side JS only when a feature requires it.
- Accessibility target: WCAG 2.2 AA. Every page needs a single `h1`, landmark structure, focus
  visible styles, and meaningful `alt`/`aria-label` text.
- Set the production domain in `astro.config.mjs` (`site`) before deploying; it drives canonical
  URLs and the sitemap.

## External templates, layouts, and assets

Before importing any third-party template, layout, or design asset:

1. Record source URL, author, license, and attribution requirement in `CREDITS.md`.
2. Inventory every external request (fonts, CDNs, JS libraries) and remove what is not needed.
3. Refactor the markup into `src/layouts` + `src/components`; never paste raw template HTML into a
   page.
4. Re-run `npm.cmd run check`, the accessibility pass, and a Lighthouse check after integration.

Run `/audit-template <path-or-url>` to apply this checklist, and see
`.kilo/skill/template-integration/SKILL.md` for the full workflow.

## MCP

MCP servers are configured in `kilo.json`:

- Enabled: `fs` (filesystem, scoped to this project), `playwright` (render/verify reference
  templates), `memory` (index large vendored codebases).
- Opt-in (disabled): `github`, `figma`, `fetch`. Enable them in `kilo.json` once credentials or the
  local service are available.
- `fs` write/edit tools require approval; read/list/search are auto-approved.
- If an MCP server is unavailable, fall back to the built-in tools (`read`, `grep`, `glob`,
  `webfetch`) instead of blocking.

Toggle servers at runtime with `/mcps`. Config takes effect on restart.
