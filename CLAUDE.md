# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Development server (Turbopack)
pnpm build      # Production build
pnpm export     # Export static site
pnpm lint       # Run ESLint
pnpm scan       # Scan codebase for i18n translation keys
```

No test framework is configured.

## Architecture

This is a **Next.js static documentation site** for the LinDB ecosystem (LinDB, Linsight, Lingo), using the **Pages Router** (not App Router) with static export (`output: "export"`).

### Path Aliases
- `@site/*` → `./src/*`
- `@/*` → `./`

### Key Directories
- `docs/` — MDX documentation files, organized numerically by section (e.g., `01-introduction.mdx`, `02-getting-started/`)
- `i18n/en/` and `i18n/zh/` — translation JSON files; update these when adding new UI strings
- `src/pages/` — Next.js pages using Pages Router; `docs/[[...slug]].tsx` and `[locale]/docs/[[...slug]].tsx` handle all doc routes
- `src/utils/` — core utilities: `docs.ts` (doc fetching + `getStaticProps`/`getStaticPaths`), `mdx.ts` (MDX compilation with Shiki), `navs.ts` (sidebar generation from filesystem)
- `src/components/docs/` — documentation-specific components

### Routing
- Default locale: `/docs/[product]/[...slug]`
- Localized: `/[locale]/docs/[product]/[...slug]` (supports `en`, `zh`)
- Downloads: `/downloads/[product]`
- OSS pages: `/oss/[product]`

### Documentation (MDX)
MDX files use frontmatter to control sidebar behavior:
```mdx
---
title: Introduction
sidebar: Section Name
description: Page description
sidebarHide: false
---
```
Sidebar ordering is driven by numeric file prefixes (`01-`, `02-`). Shiki handles code highlighting with support for diff (`+`/`-`), highlight (`// [!code highlight]`), and focus (`// [!code focus]`) annotations.

### i18n
Uses `next-i18next` with `i18next-resources-to-backend`. Run `pnpm scan` to regenerate translation keys from source after adding `t('key')` calls. Locale is detected via a custom language detector and falls back to English.

### GitHub Releases Integration
Release notes and contributors are fetched from the GitHub API at build time (or from cached JSON files in dev mode) and rendered as MDX.

### Code Style Enforcement
- All source files **must** include an Apache 2.0 license header — enforced by ESLint
- Import order is enforced via `eslint-plugin-simple-import-sort`
- Prettier + Tailwind CSS class sorting is enforced
- Stylelint enforces license headers in CSS files
