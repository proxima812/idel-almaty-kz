---
name: idel-motion-animations
description: Use for idel-almaty.kz Astro UI animation work, especially menu transitions, card hover effects, buttons, scroll/in-view animation, and reduced-motion-safe motion QA.
---

# idel-almaty.kz Motion Animations

Use this workflow for animation tasks in this repository.

1. Inspect the affected Astro component and nearby usage before editing.
2. Prefer CSS/Tailwind transitions for simple hover, focus, menu, and card-state changes.
3. Do not add an animation dependency unless the task clearly requires it.
4. Scope selectors to the affected component or a `data-*` root instead of querying the whole document.
5. Support `prefers-reduced-motion: reduce` when adding new motion.
6. Animate transform and opacity first. Avoid effects that make Russian text, menus, or real photos harder to read.
7. Avoid layout shifts in the header, menu, news cards, story cards, and contact blocks.
8. Keep timing quick and functional; do not add looping decorative motion unless explicitly requested.

Validation should include a local render check when a dev server is available or easy to start.
