# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js with Turbopack)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (`eslint .`, flat config; `next lint` no longer exists in Next 16)

No test framework is configured.

## Architecture

Single-page portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 3.

### Structure

- **Single route**: `src/app/page.tsx` renders all sections (Hero, About, Experience, Projects, Education, Contact) as a vertical scroll page. Each section after the hero uses `Section.tsx`: a full-sentence headline pinned on the left, content on the right
- **Static export**: `next.config.ts` sets `output: 'export'` with `images.unoptimized` for GitHub Pages, so images in `public/` must be pre-sized WebP files (there is no image optimizer)
- **Layout**: `src/app/layout.tsx` wraps everything in a custom `ThemeProvider` with `Navbar` and `Footer`
- **Path alias**: `@/*` maps to `./src/*`

### Key patterns

- **Design tokens**: Colors are CSS variables in `globals.css` (`--paper`, `--surface`, `--ink`, `--muted`, `--rule`, `--accent`, `--accent-soft`, `--on-accent`), redefined under `.dark` and exposed as Tailwind colors (`bg-paper`, `text-ink`, ...). Use these instead of `gray-*`/`blue-*` with `dark:` variants. Fonts: Newsreader (`font-display`) for headlines, Hanken Grotesk (`font-sans`) for everything else.
- **Dark mode**: Custom `ThemeProvider` (`src/components/theme-provider.tsx`) uses React Context + `localStorage`, toggling a `dark` class on `<html>`. An inline script in `layout.tsx` applies the stored or system theme before first paint. Use `useTheme()` hook to access theme state. The navbar toggle animates the switch with the View Transitions API.
- **Scroll animations**: `ScrollReveal` component uses IntersectionObserver to add `.active` to elements with `.reveal` class. Each element reveals once; stagger siblings with the `--i` CSS variable. The hero sequence (`hero-in`, `flow-*`), the `<details>` accordion, and the scroll progress bar are CSS-only, and all motion is disabled under `prefers-reduced-motion`.
- **Client components are limited to** `Navbar`, `ScrollReveal`, and `theme-provider` (browser APIs: IntersectionObserver, localStorage). Page sections are server components; keep them that way.
