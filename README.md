# idel-almaty.kz

Статический сайт Татаро-Башкирского культурного центра «Идел» в Алматы.

Проект публикует новости центра, анонсы мероприятий, истории участников, фотографии, контакты и ссылки на социальные площадки. Основной язык сайта — русский.

## Stack

- Astro 6
- MDX для контента
- Tailwind CSS v4
- Astro Content Collections
- Astro Sitemap
- Astro Icon
- Bun

## Content

- `src/data/posts` — новости и события.
- `src/data/stories` — истории участников.
- `src/data/pages` — статические страницы.
- `src/assets` — изображения и SVG.
- `src/config.ts` — адрес сайта и базовые SEO-настройки.

## Commands

```bash
bun install
bun run dev
bun run build
bun run preview
```

## Routes

- `/` — главная страница.
- `/posts` — список новостей и событий.
- `/posts/post-[id]` — страница отдельного поста.
- `/stories` — истории участников.
- `/contacts` — контакты.
- `/events` — мероприятия.
- `/gallery` — галерея.

![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?style=for-the-badge&logo=astro&logoColor=white)
