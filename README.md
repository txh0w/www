# thom.wtf

Personal website and blog of Thom. A place for writing about technology, history, politics, books, and whatever else sparks curiosity.

## Stack

- **Framework:** [Astro 7](https://astro.build) (static output)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/typography`
- **Fonts:** Newsreader (serif), Inter (sans), JetBrains Mono (mono) via Fontsource
- **Icons:** [astro-icon](https://github.com/natemoo-re/astro-icon) with Lucide, Phosphor, Simple Icons, Hugeicons
- **Content:** Markdown + MDX with Zod-schematized collections
- **Deployment:** Static HTML in `dist/`

## Features

- Blog with tags, pagination, and reading time
- Full-text search via [Pagefind](https://pagefind.app)
- RSS feed, sitemap, OG images
- LaTeX math rendering (KaTeX)
- Admonitions (tip, note, important, caution, warning)
- Syntax highlighting (Expressive Code)
- Google Analytics / GoatCounter support (opt-in)
- Vercel Speed Insights
- Accessibility: skip link, ARIA labels, focus-visible outlines
- Responsive: works on all screen sizes

## Commands

| Command           | Action                      |
| ----------------- | --------------------------- |
| `bun dev`         | Start dev server            |
| `bun build`       | Build for production        |
| `bun run preview` | Preview production build    |
| `bun run lint`    | Check formatting (Prettier) |
| `bun run format`  | Format all files (Prettier) |
| `bun run check`   | Type-check (astro check)    |

## Configuration

Edit `src/site.config.ts` to customize:

- Site metadata (title, description, language)
- Social links (X, Instagram, Reddit, etc.)
- Navigation menu links
- Analytics IDs (Google Analytics, GoatCounter)
- Expressive Code theme options

## License

MIT — based on [astro-sienna](https://github.com/AnjayGoel/astro-sienna) by Anjay Goel.
