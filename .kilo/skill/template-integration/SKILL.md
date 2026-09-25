---
name: template-integration
description: Safely import external layouts, templates, and design assets into this Astro site. Use when downloading, parsing, licensing, or refactoring third-party HTML/CSS/JS, fonts, icons, or Figma designs.
---

# Template Integration

Workflow for importing third-party layouts, templates, and design assets into this Astro project
without shipping license violations, unnecessary dependencies, or accessibility regressions.

## Acquisition

1. Determine the license **before** downloading anything. Record source URL, author, license, and
   attribution requirement in `CREDITS.md`. If the license is unclear, stop.
2. Prefer sources with MIT, Apache-2.0, CC0, or CC-BY-4.0 terms. Treat GPL and "free for personal
   use" as blocking for a commercial site unless the user confirms otherwise.
3. Clone or download into a scratch location outside `src/`, never straight into the live tree.

## Parse

1. Identify the templating engine and CSS framework the source assumes.
2. Inventory every external request: fonts, CDNs, analytics, JS libraries, icon sets.
3. Map the DOM into this project's structure:
   - page shell, head, meta -> `src/layouts/`
   - repeated blocks -> `src/components/`
   - copy and content lists -> `src/data/`
   - raw static files -> `public/`
4. Use Playwright MCP to render the source and inspect **computed** styles when the layout depends on
   client-side JS. Use the memory server to index a large vendored codebase when it is too big to
   read directly.

## Refactor

1. Rebuild the markup as `.astro` components. Never paste raw template HTML into `src/pages/`.
2. Replace hard-coded colors, spacing, and fonts with the `@theme` tokens in
   `src/styles/global.css`.
3. Remove unused CSS, JS, fonts, and icon sets. Delete remote `<script>`/`<link>` tags and re-add
   dependencies through npm where needed.
4. Self-host fonts and optimize images; ensure every asset has a license row.

## Verify

1. `npm.cmd run check` must pass.
2. `npm.cmd run format` then `npm.cmd run format:check`.
3. Accessibility pass: single `h1`, landmark structure, visible focus, alt text, contrast at WCAG
   2.2 AA.
4. Compare against the source with Playwright screenshots; confirm intentional differences.
5. Lighthouse performance, accessibility, and SEO checks on the built output.
