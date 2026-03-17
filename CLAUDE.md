# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm start        # Serve production build
```

## Architecture

Next.js 16 App Router, React 19, TypeScript (strict), CSS custom properties for styling. No Tailwind — all styling uses design tokens as CSS vars.

### Design Tokens

Single file: `src/styles/tokens.css` — brand palette (9 colors), semantic color mappings, font sizes, weights, line heights, letter spacing, spacing scale, radii, and effects. All sourced from Figma Variables.

Component-specific values live in each component's co-located CSS file, referencing tokens directly. No intermediate component-token layer.

**Fonts:** Inter (body/UI) and Space Grotesk (headings) via `next/font/google`, exposed as `--font-inter` and `--font-space-grotesk` CSS variables.

`globals.css` imports: `base.css` → `tokens.css`

### Component Patterns

- **UI primitives** in `src/components/ui/` — Button (polymorphic button/link, 4 variants × 2 sizes), Icon (pixelarticons wrapper)
- **Layout** in `src/components/layout/` — NavBar (typed links + actions props)
- **Sections** in `src/components/sections/` — one folder per section, each a Server Component with typed props and co-located CSS
- Barrel exports: `src/components/ui/index.ts`, `src/components/sections/index.ts`, `src/components/layout/index.ts`
- Path alias: `@/*` → `./src/*`
- CSS uses BEM naming: `.block__element--modifier`

### Skills

**`/figma:implement-design`** — Use when implementing any component or section from Figma. Takes a Figma URL and follows the 7-step workflow: parse URL → fetch context → capture screenshot → download assets → translate to project conventions → achieve 1:1 parity → validate. After each implementation, review and update `tokens.css` if new values appear.

**`/validate-design`** — Use immediately after `/figma:implement-design` completes. Launches the dev server, screenshots the page via Chrome DevTools, compares against the Figma reference, and fixes visual issues (SVG rendering, overflow, missing backgrounds, font issues). Iterate until the implementation matches the design.

The standard workflow for any Figma implementation is: `/figma:implement-design` → build check → `/validate-design`.

### Icons

`pixelarticons` is the only icon library. Use the `<Icon>` wrapper (`src/components/ui/Icon/`). Colors via CSS class/var only — never `fill` attribute. Sizes must be multiples of 24 (24, 48, 72, 96).

### Key Rules

- Server Components by default; `'use client'` requires a justification comment
- All CSS values must reference design tokens — no hardcoded hex or px
- Token names in CSS must mirror Figma variable names (kebab-case)
- Section components receive typed props — no inline or hardcoded content
- Document any visual deviation from Figma in a code comment
- Check for an existing component before creating a new one

## Build Phases

1. ✅ Design tokens — `src/styles/tokens.css`
2. ✅ Button (4 variants × 2 sizes), NavBar — via Figma MCP
3. ⬜ Wire pixelarticons
4. ✅ Hero section — via Figma MCP; remaining sections pending
5. ⬜ Generate SKILL-brand-guidelines.md

## Figma

- **File key:** `3mybs5SYPuPERePVbWwvg3`
- **File URL:** https://www.figma.com/design/3mybs5SYPuPERePVbWwvg3/Landing-Page-Builder
