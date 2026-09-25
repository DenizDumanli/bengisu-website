---
description: Audit a third-party template or asset before integrating it
---

Audit the third-party template or asset at: $ARGUMENTS

Follow the workflow in `.kilo/skill/template-integration/SKILL.md`. Do not write site code yet; this
is a research and risk-assessment pass.

Produce a report with these sections:

1. **Source and license** — source URL, author, exact license, whether attribution is required, and
   whether commercial use is allowed. If the license cannot be determined, say so explicitly and
   stop.
2. **Inventory** — templating engine, CSS framework, JS libraries, fonts, icons, images, and every
   external network request the source makes.
3. **Structure map** — which parts become `src/layouts`, which become `src/components`, and which
   content belongs in `src/data`.
4. **Risks** — copyleft or non-commercial terms, unlicensed fonts, trackers, remote script tags,
   accessibility failures, and outdated dependencies.
5. **Integration plan** — ordered steps to refactor the markup, with anything to strip entirely.

Finish by appending one row per asset to `CREDITS.md`. If the asset is unusable for licensing
reasons, recommend an alternative and do not integrate it.
