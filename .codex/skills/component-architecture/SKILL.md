---
name: idel-component-architecture
description: Use when adding, moving, or refactoring idel-almaty.kz Astro components so routes, partials, menu components, cards, and utilities stay in the existing project structure without broad rewrites.
---

# Idel Component Architecture

Use this skill for component organization in `idel-almaty.kz`.

## Project Pattern

- Page routes live in `src/pages`.
- Shared layout lives in `src/layouts/Layout.astro`.
- Shared components live in `src/components`.
- Header/footer/SEO/container primitives live in `src/components/partials`.
- Menu components live in `src/components/Menu`.
- Home-specific components can live in focused folders such as `src/components/index`.
- Utilities live in `src/utils`.

## Workflow

1. Before adding a component, inspect the nearest existing component and imports.
2. Place new UI in the smallest matching folder:
   - `partials` for site shell primitives.
   - `Menu` for navigation/menu behavior.
   - `index` for home-only pieces.
   - root `src/components` for genuinely shared cards/buttons/content blocks.
3. Keep imports consistent with current aliases and relative imports.
4. Do not introduce barrel files, aliases, or folder reorganizations unless explicitly requested.
5. Preserve route shape and existing component names when editing pages.
6. After component/import changes, prefer `bunx astro check` or focused route inspection.

## Guardrails

- Do not reorganize folders for cleanliness.
- Do not touch `.claude`.
- Do not add dependencies for simple Astro/Tailwind composition.
- Do not replace MDX/content logic with hardcoded page data.
