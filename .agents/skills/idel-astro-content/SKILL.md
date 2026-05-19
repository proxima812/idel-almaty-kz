---
name: idel-astro-content
description: Use for idel-almaty.kz Astro content, MDX collections, Russian copy, SEO metadata, canonical routes, robots, sitemap, IndexNow, and structured static-site changes. Do not use for broad UI redesigns.
---

# idel-almaty.kz Astro Content

Follow this workflow for content, data, and SEO tasks in this repository.

1. Identify the smallest source of truth before editing:
   - Routes live in `src/pages`.
   - News/events live in `src/data/posts`.
   - People stories live in `src/data/stories`.
   - Static page content lives in `src/data/pages`.
   - Collection schemas live in `src/content.config.ts`.
   - Shared site and SEO settings live in `src/config.ts`.
   - The shared page shell lives in `src/layouts/Layout.astro`.
2. Preserve slugs, dates, personal names, cultural names, event locations, route structure, and draft state unless the task explicitly asks to change them.
3. For SEO edits, check canonical URL, robots behavior, headings, sitemap implications, IndexNow implications, and visible title consistency.
4. Do not introduce i18n architecture unless explicitly requested; the current site content is Russian-first.
5. Do not run a full build by default. Use targeted validation, or explain why validation was skipped.

Output should include the files changed and any SEO or content risk that remains.
