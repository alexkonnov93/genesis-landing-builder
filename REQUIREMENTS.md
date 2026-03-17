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
| Icons | `pixelarticons` |
| Token pipeline | Figma Variables → Tokens Studio → Style Dictionary → CSS custom properties |
| Figma integration | Figma MCP Server |

---

## Build Phases

```
Phase 1 → Export Figma Variables → generate design tokens (CSS vars)
Phase 2 → Implement core components (Button, Header, NavBar) via Figma MCP
Phase 3 → Install & wire icon pack (pixelarticons)
Phase 4 → Implement landing page, section by section, via Figma MCP
Phase 5 → Generate brand/web guidelines SKILL for scaling
```

---

## Project Structure

```
/
├── public/
│   └── fonts/                        # Self-hosted brand fonts
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout: providers, fonts, globals
│   │   ├── page.tsx                  # Default landing /
│   │   └── (landing)/
│   │       └── [slug]/page.tsx       # Dynamic landing by slug
│   │
│   ├── components/
│   │   ├── ui/                       # Primitive components
│   │   │   ├── Button/
│   │   │   │   ├── index.tsx
│   │   │   │   └── Button.stories.tsx
│   │   │   └── Icon/                 # pixelarticons wrapper
│   │   │       └── index.tsx
│   │   ├── layout/                   # Header, Footer, NavBar
│   │   └── sections/                 # Landing sections (one folder per section)
│   │       └── Hero/
│   │           ├── index.tsx
│   │           └── Hero.stories.tsx
│   │
│   ├── styles/
│   │   ├── tokens/
│   │   │   ├── primitives.css        # --color-blue-500, --spacing-4 …
│   │   │   ├── semantic.css          # --color-text-primary, --color-bg-surface …
│   │   │   └── component.css        # --btn-bg-primary, --nav-height …
│   │   ├── base.css                  # Reset + @font-face
│   │   └── globals.css               # @import order: base → primitives → semantic → component
│   │
│   ├── lib/
│   │   ├── fonts.ts                  # next/font config
│   │   └── utils.ts                  # cn(), clsx
│   │
│   └── types/index.ts
│
├── tokens/                           # Tokens Studio JSON output (SSOT from Figma)
│   ├── primitives.json
│   ├── semantic.json
│   └── components.json
│
├── style-dictionary.config.js        # transforms tokens/ → src/styles/tokens/
├── .claude/
│   └── rules                         # Claude Code enforcement rules
└── CLAUDE.md                         # Claude Code project context
```

---

## Phase 1 · Design Token Pipeline

Three-tier architecture. Never skip a tier. Never apply primitives directly to elements.

```
Primitive   →  Raw values. Foundation only — never applied to UI.
               --color-blue-500: #3B82F6
               --spacing-4: 16px

Semantic    →  Reference primitives. Communicate intent and context.
               --color-text-primary: var(--color-gray-900)
               --color-bg-surface: var(--color-white)

Component   →  Scoped to one component. Reference semantic tokens only.
               --btn-bg-primary: var(--color-action-default)
               --btn-padding-x: var(--spacing-6)
```

### Token pipeline

```
Figma Variables (SSOT)
    ↓  Tokens Studio plugin → export W3C-compliant JSON
tokens/*.json
    ↓  Style Dictionary (style-dictionary.config.js)
src/styles/tokens/*.css
    ↓  @import chain in globals.css
```

**Naming rule:** CSS var names must mirror Figma variable names exactly — `camelCase` → `kebab-case`.

---

## Phase 2 · Figma MCP: Component & Section Implementation

Every component and section must follow this 7-step workflow without exception.

### Figma MCP tools used

- `get_design_context(fileKey, nodeId)` — layout, typography, token values, spacing
- `get_screenshot(fileKey, nodeId)` — visual source of truth for validation
- `get_metadata(fileKey, nodeId)` — node map when a frame is too large for one fetch

### 7-step workflow

```
1. PARSE URL
   Extract fileKey and nodeId from the Figma URL:
   https://figma.com/design/:fileKey/:fileName?node-id=1-2
                             ↑ fileKey                 ↑ nodeId

2. FETCH CONTEXT
   get_design_context(fileKey, nodeId)
   → returns layout, auto-layout, constraints, typography, color tokens, variants

   If response is truncated:
   → run get_metadata(fileKey, nodeId) first to get the node map
   → then run get_design_context per child node individually

3. CAPTURE VISUAL REFERENCE
   get_screenshot(fileKey, nodeId)
   → keep this screenshot accessible for the entire implementation — it is the
     final validation target

4. DOWNLOAD ASSETS
   - Use localhost URLs served by the Figma MCP assets endpoint directly
   - DO NOT pull icon SVGs from Figma output — all icons come from pixelarticons
   - DO NOT create placeholders when a localhost source is available

5. TRANSLATE TO PROJECT CONVENTIONS
   - Figma MCP output (React + Tailwind) is design intent, not final code
   - Replace all Tailwind utilities with CSS custom properties from src/styles/tokens/
   - Reuse existing components rather than duplicating (Button, Icon, typography)
   - Follow the project's existing routing and data patterns

6. ACHIEVE 1:1 VISUAL PARITY
   - All spacing, sizing, and color values must come from design tokens
   - Never hardcode px or hex values
   - When a project token differs from the raw Figma value, prefer the project token
     but adjust minimally to maintain visual fidelity
   - Meet WCAG AA contrast minimum

7. VALIDATE
   Compare final output side-by-side against the Step 3 screenshot:
   ✓ Layout — spacing, alignment, sizing
   ✓ Typography — font, size, weight, line-height
   ✓ Colors — exact token match
   ✓ Interactive states — hover, active, disabled
   ✓ Assets — rendering correctly
   ✓ Accessibility — contrast, focus indicators
```

---

## Phase 3 · Icons (pixelarticons)

```bash
npm install pixelarticons
```

### Key characteristics

- 800 handcrafted icons drawn on a strict 24×24 pixel grid, no anti-aliasing
- Pure `<path>` elements with `fill="currentColor"` — color always controlled via CSS
- Sharpest rendering at multiples of 24px: **24 · 48 · 72 · 96**
- Full TypeScript types included

### Import patterns

```tsx
// Named import — tree-shakeable, preferred
import { Heart, Home, Bell } from 'pixelarticons/react'

// Per-icon import — maximum bundle efficiency
import { Heart } from 'pixelarticons/react/Heart'

<Heart width={24} height={24} className="text-action-default" />
```

Icon name convention: PascalCase from SVG filename (`alarm-clock.svg` → `AlarmClock`).  
Digit-prefixed names get an `Icon` prefix (`4g.svg` → `Icon4G`).

### Typed wrapper component

```tsx
// src/components/ui/Icon/index.tsx
import * as Icons from 'pixelarticons/react'

type IconName = keyof typeof Icons

interface IconProps {
  name: IconName
  size?: 24 | 48 | 72 | 96
  className?: string
}

export function Icon({ name, size = 24, className }: IconProps) {
  const Glyph = Icons[name]
  return <Glyph width={size} height={size} className={className} />
}
```

**Rule:** pixelarticons is the sole icon library — do not install lucide-react or any other pack.  
**Rule:** Never use a Figma-exported SVG when an equivalent pixelarticons glyph exists.  
**Rule:** Icon color is always set via a CSS class or CSS var — never via the `fill` attribute.

---

## Phase 4 · Section Implementation Pattern

Each landing section is an isolated Server Component. The page file assembles sections.

```tsx
// components/sections/Hero/index.tsx
import { Button } from '@/components/ui'
import { Icon } from '@/components/ui/Icon'

interface HeroProps {
  headline: string
  subline: string
  cta: { label: string; href: string }
}

export function HeroSection({ headline, subline, cta }: HeroProps) {
  return (
    <section className="hero">
      <h1>{headline}</h1>
      <p>{subline}</p>
      <Button variant="primary" href={cta.href}>
        {cta.label}
        <Icon name="ArrowRight" size={24} />
      </Button>
    </section>
  )
}
```

```tsx
// app/(landing)/[slug]/page.tsx
import { HeroSection, FeaturesSection, CTASection } from '@/components/sections'

export default function LandingPage() {
  return (
    <>
      <HeroSection {...heroData} />
      <FeaturesSection {...featuresData} />
      <CTASection {...ctaData} />
    </>
  )
}
```

---

## Phase 5 · Brand/Web Guidelines SKILL

Once the first landing page version is complete and all tokens and components are stable,
generate `SKILL-brand-guidelines.md`. This becomes the scaling reference for generating
all future sections and page variants via Claude Code.

### Contents of the brand guidelines SKILL

```
- Design Tokens Reference
  Complete list of semantic tokens with values and usage context
  (autogenerated from tokens/)

- Typography
  Heading and body scale: token → Figma text style mapping
  Rules: line-height, letter-spacing, responsive breakpoints

- Color System
  Primitive palette (reference only)
  Semantic palette with usage guidance

- Spacing & Layout
  Grid: columns, gutter, margin
  Spacing scale: token name → value → usage context
  Breakpoints

- Component Inventory
  Table: component name | variants | Figma node link | status

- Section Inventory
  Table: section name | page type(s) | Figma node link | status

- Icon Usage Rules
  Library: pixelarticons
  Permitted sizes: 24 · 48 · 72 · 96px
  Color: via CSS var only
  Prohibited: mixing libraries

- Claude Code Rules
  All values trace to a semantic token
  New sections follow the Figma MCP 7-step workflow
  'use client' requires a justification comment
  Visual deviations from Figma documented in comments
```

---

## Claude Code Configuration

### `.claude/rules`

```
- TypeScript strict mode at all times
- All CSS values must reference design tokens — never hardcode hex or px
- Server Components by default; 'use client' requires a justification comment
- Icon source: pixelarticons only — do not install other icon libraries
- Icon color via CSS class or var — never via the fill attribute
- Icon size must be 24, 48, 72, or 96px
- Section components receive typed props — no inline or hardcoded content
- Token names in CSS must mirror Figma variable names (kebab-case)
- Check for an existing component before creating a new one
- Figma MCP 7-step workflow is required for every component and section
- Document any visual deviation from Figma in a code comment
```

### `CLAUDE.md` must include

- Stack versions
- Figma file URL + variable collection names
- Token pipeline diagram
- Section inventory: name · Figma node URL · status
- Component status table
- Link to `SKILL-brand-guidelines.md` once generated (Phase 5)

---

## Rules Reference

| Rule | Rationale |
|------|-----------|
| Primitives never applied directly to elements | Forces semantic abstraction |
| Token names mirror Figma variable names exactly | Single source of truth, zero drift |
| Figma MCP 7-step workflow for every component/section | Pixel parity + consistency |
| pixelarticons is the only icon library | Visual coherence + bundle discipline |
| Icon size must be a multiple of 24 | Pixel-grid sharpness |
| Sections are isolated Server Components | Performance + composability |
| `'use client'` requires justification comment | Minimize client-side JS |
| Style Dictionary transforms tokens | Automated pipeline, not manual copy |
| Phase 5 brand guidelines SKILL generated after v1 | Enables scaling without visual drift |
