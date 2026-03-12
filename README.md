# LinDB Docs

Static documentation site for the [LinDB](https://lindb.io) ecosystem — LinDB (distributed time-series database), Linsight, and Lingo.

Built with Next.js (Pages Router) and MDX, statically exported as a pure HTML/CSS/JS site.

## Tech Stack

- **Next.js 16** — Pages Router, static export (`output: "export"`)
- **React 19**, **TypeScript**
- **Tailwind CSS 4** + **DaisyUI 5**
- **MDX** with [Shiki](https://shiki.style) syntax highlighting
- **next-i18next** — English and Chinese (Simplified) localization
- **Algolia DocSearch**
- **pnpm**

## Getting Started

**Prerequisites:** Node.js, pnpm

```bash
pnpm install
pnpm dev        # Development server (Turbopack) at http://localhost:3000
```

## Commands

```bash
pnpm dev        # Development server (Turbopack)
pnpm build      # Production build
pnpm export     # Export static site
pnpm lint       # Run ESLint
pnpm scan       # Scan codebase for i18n translation keys
```

## Project Structure

```
docs/                   # MDX documentation files, organized by product and section
  lindb/
  linsight/
  lingo/
i18n/
  en/                   # English translation JSON files
  zh/                   # Chinese translation JSON files
src/
  pages/                # Next.js pages (Pages Router)
  components/           # Reusable components
    docs/               # Documentation-specific components
  utils/                # Core utilities
    docs.ts             # Doc fetching, getStaticProps/getStaticPaths
    mdx.ts              # MDX compilation with Shiki
    navs.ts             # Sidebar generation from filesystem
```

## Writing Documentation

Documentation lives in `docs/<product>/` as MDX files. Numeric file prefixes control sidebar ordering (e.g., `01-introduction.mdx`, `02-getting-started.mdx`).

### Frontmatter

```mdx
---
title: Introduction
sidebar: Section Name
description: Page description
sidebarHide: false
---
```

### Code Annotations

Shiki supports the following annotations in code blocks:

| Annotation | Effect |
|---|---|
| `+` / `-` at line start | Diff (added/removed) |
| `// [!code highlight]` | Highlight line |
| `// [!code focus]` | Focus line |

## i18n

Supported locales: `en` (default), `zh`

Translation files are in `i18n/en/` and `i18n/zh/`. After adding new `t('key')` calls in source code, run:

```bash
pnpm scan
```

This regenerates the translation key files.

## Code Style

- All source files must include an **Apache 2.0 license header** (enforced by ESLint)
- **Import order** enforced via `eslint-plugin-simple-import-sort`
- **Prettier** + Tailwind CSS class sorting enforced

Run `pnpm lint` to check for violations.

## License

[Apache 2.0](LICENSE)
