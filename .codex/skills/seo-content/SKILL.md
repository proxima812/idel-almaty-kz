---
name: idel-seo-content
description: Используй для SEO и контентных задач idel-almaty.kz: русские title/description, canonical site URL, robots, sitemap, IndexNow, MDX headings, новости, события, истории и контакты.
---

# Idel SEO Content

Используй этот скилл для SEO, метаданных, маршрутов и редакторских правок.

## Источники правды

- Глобальный URL и OG-настройки: `src/config.ts`.
- SEO-компонент: `src/components/partials/SEO.astro`.
- Robots: `src/pages/robots.txt.ts`.
- Sitemap: `@astrojs/sitemap` в `astro.config.mjs`.
- IndexNow: `src/integrations/indexNow.ts` и ключ в `public/id123eanoXJFJQl.txt`.
- Новости: `src/data/posts`.
- Истории: `src/data/stories`.
- Страницы: `src/data/pages`.

## Workflow

1. Определи, что является источником правки: config, page route, MDX frontmatter или компонент SEO.
2. Для новостей/событий сохраняй `title`, `description`, `pubDate`, `draft` и `heroImage` совместимыми со схемой.
3. Проверяй, что H1/заголовки, title и description не противоречат друг другу.
4. Сохраняй route slugs, если пользователь явно не просит переименовать URL.
5. При изменениях robots/sitemap/config/integration запускай `bun run build` только если это действительно нужно для проверки.
6. В финальном ответе укажи реальный SEO-риск, если он остался.

## Правила

- Не меняй культурные названия, личные имена, даты и места без запроса.
- Не добавляй англоязычный SEO-текст на русские страницы без причины.
- Не удаляй IndexNow или verification-настройки без явного запроса.
- Не меняй canonical site URL `https://idel-almaty.kz` без запроса.
