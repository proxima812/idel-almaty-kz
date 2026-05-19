---
name: idel-readme-site-writer
description: Use when writing or rewriting README.md for idel-almaty.kz. Produces a concise, factual README for the Astro static site, preserving real commands, routes, content collections, deployment assumptions, and SEO notes.
---

# Idel README Site Writer

Use this skill when the user asks to create, rewrite, polish, or fill `README.md` for this repo.

## Workflow

1. Inspect the project before writing:
   - `package.json`
   - `astro.config.mjs`
   - `src/config.ts`
   - `src/content.config.ts`
   - `src/pages`
   - existing README, if present
2. Keep the README factual and compact.
3. Preserve:
   - project name `idel-site` unless the user asks for public branding;
   - live URL `https://idel-almaty.kz`;
   - Astro 6 static output;
   - Bun commands from `package.json`;
   - MDX content collections for posts, stories, and pages;
   - SEO/sitemap/IndexNow notes only if they are currently configured.
4. Do not invent deployment provider, license, screenshots, badges, or contribution workflow.
5. Use Russian when the user writes in Russian or when documenting editor workflow for this site.

## Recommended Structure

```markdown
# idel-almaty.kz

Short description.

## Stack

## Quick Start

## Content

## Project Structure

## SEO

## Commands
```

## Quality Checklist

1. Commands match `package.json`.
2. Route/content descriptions match `src/pages` and `src/content.config.ts`.
3. README does not mention stale project names, unavailable locales, or unavailable features.
4. Markdown renders cleanly.
