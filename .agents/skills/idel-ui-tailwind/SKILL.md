---
name: idel-ui-tailwind
description: Use for small idel-almaty.kz Astro UI changes with Tailwind v4, component styling, news/story layout fixes, responsive behavior, accessibility, and visual QA. Do not trigger for content-only edits.
---

# idel-almaty.kz UI Tailwind

Follow this workflow for UI tasks in this repository.

1. Inspect the existing component and nearby usage before editing.
2. Keep the current cultural-center editorial visual language unless the user asks for a redesign.
3. Use Tailwind v4 utilities and existing component patterns.
4. Avoid adding CSS files or dependencies unless there is no reasonable project-native option.
5. Keep responsive behavior explicit for changed components.
6. Check Russian text overflow, touch targets, keyboard/focus behavior, semantic HTML, and photo/card rendering for the affected surface.
7. Prefer targeted browser or screenshot verification for visual changes when a dev server is already running or easy to start.

Output should summarize the changed UI surface and the validation performed.
