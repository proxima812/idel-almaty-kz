---
name: idel-content-frontmatter-tester
description: Используй для проверки MDX-контента idel-almaty.kz: frontmatter новостей, историй и страниц, draft-флаги, даты, heroImage/image ссылки и соответствие src/content.config.ts.
---

# Idel Content Frontmatter Tester

Используй этот скилл, когда нужно проверить или исправить контент в `src/data`.

## Workflow

1. Проверь схему в `src/content.config.ts`.
2. Для новостей смотри `src/data/posts/*.mdx`:
   - `title`
   - `description`
   - `pubDate`
   - optional `heroImage`
   - `draft`
3. Для историй смотри `src/data/stories/*.mdx`:
   - `title`
   - optional `old`
   - optional `image`
   - optional `date`
   - optional `inst`
   - `style`
4. Для страниц смотри `src/data/pages/*.mdx`:
   - `title`
   - `description`
   - optional `index`
5. Проверь, что локальные изображения лежат в `src/assets` и путь соответствует существующему паттерну.
6. Для точечной валидации используй `bunx astro check`; полный `bun run build` нужен только при изменении схем, маршрутов или site-wide поведения.

## Rules

- Не меняй даты, имена, названия мероприятий и места без запроса.
- Не удаляй `draft: true/false` ради "чистоты".
- Не переписывай MDX-текст целиком, если нужна только frontmatter-правка.
- Сохраняй русский язык и культурный контекст.
- Если hero/image отсутствует намеренно, не добавляй placeholder без запроса.
