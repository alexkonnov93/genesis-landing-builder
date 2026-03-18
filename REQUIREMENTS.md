# Landing Page Builder — Project Requirements

## Overview

Build brand-accurate landing pages section by section using Claude Code.
Source of truth: Figma (variables, components, sections) → code.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16, App Router |
| UI | React 19 |
| Language | TypeScript (strict) |
| Styling | CSS custom properties (design tokens), no Tailwind |
| Fonts | `next/font/google` (Inter + Space Grotesk) |
| Icons | `pixelarticons` |
| Animations | `framer-motion` |
| Figma integration | Figma MCP Server |

---

## Build Phases

```
Phase 1 → Export Figma Variables → generate design tokens (CSS vars)
Phase 2 → Implement core UI components (Button, Card, Icon) via Figma MCP
Phase 3 → Implement layout components (NavBar, Footer) via Figma MCP
Phase 4 → Implement landing page sections, one by one, via Figma MCP
Phase 5 → Add animations and polish
Phase 6 → Generate brand/web guidelines SKILL for scaling
```

---

## Project Structure

```
/
├── public/
│   └── images/                       # All image and SVG assets, organized by section
│       ├── logos/                     # Deployment platform logos
│       ├── integrations/             # Integration partner logos
│       ├── security/                 # FeatureCards section backgrounds
│       ├── demo/                     # Demo section assets
│       ├── cta/                      # CTA section backgrounds
│       ├── footer/                   # Footer backgrounds + social icons
│       ├── hero-image.jpg
│       └── logo-computing.svg
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout: font variables, metadata, globals
│   │   └── page.tsx                  # Landing page: assembles all sections with typed data
│   │
│   ├── components/
│   │   ├── ui/                       # Primitive components (Button, Card, Icon)
│   │   │   └── index.ts             # Barrel export
│   │   ├── layout/                   # Page shell (NavBar, Footer)
│   │   │   └── index.ts             # Barrel export
│   │   └── sections/                 # Landing sections (one folder per section)
│   │       └── index.ts             # Barrel export
│   │
│   ├── styles/
│   │   ├── tokens.css                # All design tokens as CSS custom properties
│   │   ├── base.css                  # CSS reset + system defaults
│   │   └── globals.css               # @import chain: base → tokens
│   │
│   ├── lib/
│   │   └── fonts.ts                  # next/font/google configuration
│   │
│   └── types/index.ts
│
├── CLAUDE.md                         # Claude Code project context
└── REQUIREMENTS.md                   # This file
```

---

## Phase 1 · Design Tokens

Single file: `src/styles/tokens.css`. All token names mirror Figma variable names in kebab-case.

### Token categories

| Category | Examples |
|----------|----------|
| Colors (9 primitives) | `--color-black`, `--color-primary-orange`, `--color-light-orange` |
| Semantic colors | `--color-text-primary`, `--color-bg-secondary`, `--color-border-default` |
| Font sizes | `--font-size-h1` (62px) through `--font-size-13` (13px) |
| Font weights | `--font-weight-regular` (400), `--font-weight-medium` (500) |
| Line heights | `--line-height-none` (1.04) through `--line-height-relaxed` (1.6) |
| Letter spacing | `--letter-spacing-h1` (-5px) through `--letter-spacing-caps` (0.26px) |
| Spacing scale | `--spacing-1` (4px) through `--spacing-20` (80px) |
| Radii | `--radius-sm` (4px) through `--radius-full` (9999px) |
| Effects | `--blur-sm` (8px), `--blur-md` (16px) |

**Fonts:** Inter (body/UI) and Space Grotesk (headings) via `next/font/google`, exposed as `--font-inter` and `--font-space-grotesk` CSS variables on `<html>`.

**Naming rule:** CSS var names must mirror Figma variable names exactly — `camelCase` → `kebab-case`.

---

## Phase 2 · UI Components

All UI primitives live in `src/components/ui/` with co-located CSS and barrel exports.

### Button

- Polymorphic: renders `<a>` when `href` is provided, `<button>` otherwise
- Variants: `primary`, `secondary`, `tertiary` (glass), `ghost`
- Sizes: `sm`, `lg`
- Hover states: primary darkens, tertiary brightens, ghost adds subtle bg

### Card

- Icon + title + description layout
- Accepts any valid `pixelarticons` icon name
- Optional `className` for context-specific styling from parent sections

### Icon

- Wrapper around `pixelarticons/react` with type-safe icon names
- Sizes restricted to multiples of 24: `24 | 48 | 72 | 96`
- Color always via CSS class/var — never `fill` attribute
- `pixelarticons` is the sole icon library — never install alternatives

---

## Phase 3 · Layout Components

Layout components live in `src/components/layout/` with co-located CSS.

### NavBar

- Fixed position with semi-transparent background and backdrop blur
- Left: logo + navigation links
- Right: action buttons (ghost + tertiary + primary)
- Renders a spacer element below to prevent content overlap

### Footer

- Reuses `DividerSection` as top spacer
- Background image with subtle border
- Content: address, social icon links, copyright, legal links
- All data passed via typed props

---

## Phase 4 · Section Implementation

Each section is its own folder in `src/components/sections/` with:
- `index.tsx` — component with typed props interface
- `SectionName.css` — co-located styles using BEM naming

Sections are Server Components by default. Use `'use client'` only when animations or interactivity require it, with a justification comment.

### Section layout convention

Most sections follow this pattern for consistent 1180px content width:

```css
.section__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 130px;
}
```

### Page composition

The page file (`src/app/page.tsx`) defines all data as typed constants and assembles sections:

```tsx
export default function HomePage() {
  return (
    <>
      <NavBar links={navLinks} actions={navActions} />
      <HeroSection {...heroProps} />
      <DeploymentsSection {...deploymentsProps} />
      {/* ... more sections */}
      <Footer {...footerProps} />
    </>
  )
}
```

### Figma MCP workflow (required for every component/section)

```
1. PARSE URL        → Extract fileKey and nodeId from Figma URL
2. FETCH CONTEXT    → get_design_context(fileKey, nodeId)
3. CAPTURE VISUAL   → get_screenshot(fileKey, nodeId)
4. DOWNLOAD ASSETS  → Save images/SVGs to public/images/
5. TRANSLATE        → Replace Tailwind with CSS tokens, reuse existing components
6. ACHIEVE PARITY   → Match Figma design using design tokens
7. VALIDATE         → Compare output against Figma screenshot
```

### SVG asset handling

SVGs exported from Figma use `fill="var(--fill-0, white)"` which breaks when served via `<img>` or Next.js `<Image>`. After downloading, always replace CSS var fills with literal color values:

```bash
sed -i '' 's/var(--fill-0, white)/white/g' path/to/icon.svg
```

### DividerSection

A reusable spacer component with configurable height (default 60px). Renders dashed vertical border lines on left and right edges. Used between sections and inside the Footer.

---

## Phase 5 · Animations

Use `framer-motion` for scroll-triggered and on-load animations.

### Shared easing curve

```ts
const ease = [0.25, 0.1, 0.25, 1] as const;
```

### Animation patterns

| Pattern | Usage | Trigger |
|---------|-------|---------|
| Word-by-word blur reveal | Hero tag + headline | On load |
| Fade up | Hero subline, general text blocks | On load / whileInView |
| Fade in | Hero image, background elements | On load |
| Staggered fade | Deployment logos, card grids | whileInView (once) |
| CSS marquee | Integration logos horizontal scroll | Always running |

### Word-by-word reveal implementation

Split text by spaces, render each word as `<motion.span>` with `inline-block` display and `margin-right: 0.25em`:

```tsx
initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
transition={{ duration: 0.4, delay: baseDelay + i * 0.08, ease }}
```

### Scroll-triggered animations

Use `whileInView` with `viewport={{ once: true }}` so animations play once when the element enters the viewport.

---

## Phase 6 · Brand Guidelines SKILL

Once the first landing page is complete and all tokens/components are stable, generate `SKILL-brand-guidelines.md` covering:

- Design tokens reference (all semantic tokens with values)
- Typography scale and rules
- Color system with usage guidance
- Spacing and layout conventions
- Component inventory with variants
- Section inventory
- Icon usage rules
- Animation patterns and easing

---

## Rules

### Code conventions

- TypeScript strict mode at all times
- Server Components by default; `'use client'` requires a justification comment
- All CSS values must reference design tokens — no hardcoded hex or px
- Token names in CSS must mirror Figma variable names (kebab-case)
- CSS uses BEM naming: `.block__element--modifier`
- Section components receive typed props — no inline or hardcoded content
- Check for an existing component before creating a new one
- When mapping over items with potentially duplicate labels, use index-based keys

### Icons

- `pixelarticons` is the sole icon library — do not install alternatives
- Icon color via CSS class or var — never via the `fill` attribute
- Icon size must be 24, 48, 72, or 96px (multiples of pixel grid)

### Figma workflow

- Figma MCP 7-step workflow is required for every component and section
- Document any visual deviation from Figma in a code comment
- Always fix CSS var fills in downloaded SVGs before committing

### Rules rationale

| Rule | Rationale |
|------|-----------|
| Token names mirror Figma variable names | Single source of truth, zero drift |
| Figma MCP 7-step workflow for every component/section | Pixel parity + consistency |
| `pixelarticons` is the only icon library | Visual coherence + bundle discipline |
| Icon size must be a multiple of 24 | Pixel-grid sharpness |
| Sections are isolated Server Components | Performance + composability |
| `'use client'` requires justification | Minimize client-side JS |
| Replace CSS var fills in SVGs | `<img>` tags cannot resolve CSS custom properties |

---

## Figma

- **File key:** `3mybs5SYPuPERePVbWwvg3`
- **File URL:** https://www.figma.com/design/3mybs5SYPuPERePVbWwvg3/Landing-Page-Builder
