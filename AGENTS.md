# AGENTS.md

## Project

`idel-almaty.kz` is a static Astro site for the Tatar-Bashkir cultural center "Idel" in Almaty. The site publishes center news, events, personal stories, contact information, and cultural-community content in Russian.

## Stack

- Astro 6 with static output.
- MDX content through `@astrojs/mdx`.
- Sitemap through `@astrojs/sitemap`.
- SEO/meta helpers through `astro-meta-tags`.
- Icons through `astro-icon`.
- Tailwind CSS v4 through `@tailwindcss/vite`.
- Package manager: Bun.
- Main source folders: `src/pages`, `src/components`, `src/components/partials`, `src/components/Menu`, `src/data`, `src/assets`, `src/layouts`, `src/styles`, `src/integrations`.
- Content collections:
  - `src/data/posts` for news/events.
  - `src/data/stories` for people/stories.
  - `src/data/pages` for static page content.
- Public site URL and global SEO values live in `src/config.ts`.

## Working Rules

- Keep changes narrowly scoped to the requested task.
- Do not touch `.claude`.
- Do not modify generated artifacts, `.astro`, `.vercel`, `dist`, `node_modules`, `.DS_Store`, or local browser files unless explicitly asked.
- Do not redesign layout, spacing, hierarchy, color system, or interactions unless the task asks for UI changes.
- Prefer existing Astro component patterns, MDX collection schemas, data structures, and Tailwind utilities.
- Do not add dependencies when the current stack is enough.
- Use `rg` for search.
- Use `apply_patch` for manual file edits.

## UI And Styling

- Use Tailwind v4-compatible utilities by default.
- Preserve the current editorial/community visual language: clean white surfaces, strong typography, compact navigation, news cards, local photos, and simple calls to Instagram/2GIS.
- Keep responsive behavior explicit for changed components.
- Avoid new CSS files unless the affected surface already uses a local stylesheet or Tailwind cannot express the required behavior cleanly.
- Preserve accessibility basics: semantic HTML, focus states, keyboard behavior, readable contrast, and non-overlapping text.
- Do not replace real center/event photos with generic stock-like visuals.

## Content And SEO

- Russian is the primary visible language of the site.
- Preserve cultural names, dates, event locations, organization names, and personal names exactly unless the task asks to edit them.
- Post frontmatter must keep the collection schema: `title`, `description`, `pubDate`, optional `heroImage`, and `draft`.
- Story frontmatter must keep the collection schema: `title`, optional `old`, `image`, `date`, `inst`, and `style`.
- Page frontmatter must keep the collection schema: `title`, `description`, optional `index`.
- Preserve slugs, route shape, canonical site URL, robots behavior, sitemap assumptions, IndexNow key setup, headings, metadata, and internal linking unless the task explicitly changes them.
- When adding images, place them near the relevant content under `src/assets/images/posts/...` or `src/assets/activesti/...` and reference them through existing patterns.

## Validation

- Do not run full builds by default.
- Prefer targeted checks such as `bunx astro check`, focused content/schema inspection, or a local dev-server/browser check for UI changes.
- Run `bun run build` only when the change affects routing, Astro config, integrations, sitemap/robots behavior, content collection schemas, or site-wide data behavior.
- If validation is skipped, say so briefly.
