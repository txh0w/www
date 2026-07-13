# thom.wtf

Personal website and blog of **Thom** — a space for writing about technology, history, politics, books, and whatever else sparks curiosity.

Built with [Astro 7](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and a dark, earthy aesthetic.

## Stack

| What | How |
|------|-----|
| **Framework** | [Astro 7](https://astro.build) (static output) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/typography` |
| **Fonts** | Newsreader (serif), Inter (sans), JetBrains Mono (mono) via Fontsource |
| **Icons** | [astro-icon](https://github.com/natemoo-re/astro-icon) — Lucide, Phosphor, Simple Icons, Hugeicons |
| **Content** | Markdown + MDX, Zod-schematized content collections |
| **CMS** | [Pages CMS](https://pagescms.org) via `.pages.yml` (optional) |
| **Analytics** | Vercel Speed Insights |

## Features

- Linktree-style homepage with social link buttons and recent posts
- Blog with tags, pagination, and estimated reading time
- RSS feed, sitemap, dynamic OG images
- LaTeX math rendering (KaTeX)
- Admonitions (tip, note, important, caution, warning)
- Syntax highlighting (Expressive Code)
- Responsive design, dark theme, accessible (skip link, ARIA, focus-visible)

## Commands

| Command | Action |
|---------|--------|
| `bun dev` | Start dev server at `localhost:4321` |
| `bun build` | Build for production + generate search index |
| `bun run preview` | Preview production build |
| `bun run lint` | Check formatting (Prettier) |
| `bun run format` | Format all files (Prettier) |
| `bun run check` | Type-check (`astro check`) |

## Project structure

```
src/
├── components/        # Reusable UI (header, footer, head, share buttons)
│   ├── layout/        # Header (collapsible floating glass) and Footer
│   └── og/            # React component for OG image generation
├── content/
│   ├── config.ts      # Collection schemas (Zod)
│   ├── page/          # Static pages (about.md)
│   └── post/          # Blog posts (Markdown/MDX)
├── layouts/           # Base layout + BlogPost layout
├── pages/             # Routes (home, about, posts, 404, RSS, OG images)
├── plugins/           # Custom remark/rehype plugins
├── styles/            # Global CSS (Tailwind, component styles)
├── site.config.ts     # Site-wide config (author, socials, nav, OG defaults)
└── types.ts           # TypeScript interfaces
```

## Configuration

Edit `src/site.config.ts`:

- **`siteConfig`** — title, description, language, profile, default OG image
- **`socials`** — links displayed as buttons on the homepage (X, Instagram, Reddit, etc.)
- **`menuLinks`** — navigation items in the floating header
- **`defaultOgImage`** — fallback OG image for pages without a custom one (defaults to `/avatar.webp`)

### OG images

- **Blog posts** — auto-generated via `@vercel/og` at `/og-image/posts/<slug>.png`
- **Other pages** — fall back to `siteConfig.defaultOgImage`
- **Per-page override** — pass `ogImage` in the `meta` prop to any layout

## Adding content

### Blog post

Create a `.md` or `.mdx` file in `src/content/post/`:

```md
---
title: "My Post"
description: "A brief summary"
publishDate: 2026-07-13
tags: ["tech", "essay"]
draft: false
---

Post content here.
```

### Static page

Create a `.md` file in `src/content/page/` and add a route in `src/pages/`.

## License

MIT — based on [astro-sienna](https://github.com/AnjayGoel/astro-sienna) by Anjay Goel.
