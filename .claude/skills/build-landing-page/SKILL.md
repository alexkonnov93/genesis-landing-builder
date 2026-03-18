---
name: build-landing-page
description: Builds new landing page sections, components, or full pages following the Genesis design system. Use when creating new UI, adding sections, building pages, styling elements, or when the user asks to build a landing page. Ensures visual consistency with existing pages.
---

# Build Landing Page

Follow these rules when building any new component, section, or page for the Genesis landing page product. Every decision — color, type, spacing, layout, motion — must follow this system. Read `STYLE_GUIDE.md` at the project root for the full reference including section-by-section visual observations.

## Aesthetic: Dark Technical Minimalism

A dark-mode-first, data-infrastructure aesthetic. Monochrome palette with a single orange accent. Flat surfaces, no shadows. Dashed borders as a structural motif. Dense typography. Motion as polish, not spectacle.

## Colors

Use design tokens from `src/styles/tokens.css` exclusively — never hardcode hex values.

**Palette:** 7 neutrals (black #0a0a0a through white #ffffff) + 1 accent (orange #ff6e06) + 1 hover (light-orange #e3b799).

**Rules:**
- Background layering for depth: `--color-bg-primary` (black) < `--color-bg-secondary` (black-02) < `--color-bg-surface` (dark-grey)
- No box shadows — use background stepping and backdrop blur for elevation
- Orange is reserved for actionable/important elements only (buttons, accent icons, tags, links on hover)
- Glass effect: `rgba(255,255,255,0.1)` + `backdrop-filter: blur(16px)` for overlays

## Typography

**Fonts:** Space Grotesk for headings (`--font-space-grotesk`), Inter for body/UI (`--font-inter`).

**Scale:**
- H1: 62px / 500 / 1.04 / -5px tracking
- H2: 52px / 500 / 1.04 / -4px tracking
- H3: 36px / 500 / 1.1 / -3px tracking
- H4: 26px / 500 / 1.1 / -1.5px tracking
- H5: 22px / 500 / 1.4 / -1.2px tracking
- Body 18px: 400 / 1.5 / -0.36px tracking (Inter)
- Body 16px: 400 / 1.6 / -0.36px tracking (Inter)
- Small 14px: 400 / 1.5 / -0.32px tracking (Inter)
- Caption 13px: 500 / 1.5 / +0.26px tracking, uppercase (Inter)

**Rules:**
- Only two weights: 400 (regular) and 500 (medium). Never use bold or light.
- Tags/labels: 13px uppercase with positive letter-spacing
- Headings capped at 540–580px width, descriptions at 480px

## Spacing

4px base unit. Use tokens: `--spacing-1` (4px) through `--spacing-20` (80px).

## Border Radius

`--radius-full` (9999px) for pill-shaped buttons ONLY. Everything else uses sharp corners (0px). No rounded cards, panels, or containers.

## Layout

**Container pattern (mandatory for all sections):**
```css
.section__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 130px;
}
```
Effective content width: 1180px. Flexbox only — no CSS Grid.

**Section structure:** Most sections follow tag (uppercase muted) -> heading (large) -> description (grey) -> content.

**DividerSection** between sections for vertical rhythm (dashed vertical border lines, default 60px height).

## Components

Check `src/components/ui/` and `src/components/sections/` for existing components before creating new ones.

- **Button:** Polymorphic (button/link), 4 variants (primary/secondary/tertiary/ghost), 2 sizes (sm/lg), pill shape
- **Card:** Flex column, sharp corners, border-defined, icon + title + description
- **Icon:** pixelarticons only, sizes in multiples of 24px, color via CSS class (never `fill`)
- **DividerSection:** Dashed vertical borders, configurable height

## CSS Rules

- BEM naming: `.block__element--modifier`
- All values reference design tokens via `var(--token-name)`
- Co-located CSS files per component
- No Tailwind, no inline styles
- Borders: 1px solid, use `--color-border-default` or `--color-border-subtle`
- Dashed borders for structural/decorative dividers

## Motion

- **Library:** framer-motion for scroll/mount animations, CSS @keyframes for infinite loops
- **Shared easing:** `[0.25, 0.1, 0.25, 1]`
- **Patterns:** fade-up (y: 20->0, 0.8s), word-by-word blur reveal (0.4s per word), staggered fade (0.12s delay per item)
- **Hover transitions:** 0.15s ease on background-color or color
- **Principle:** Subtle and purposeful. No bouncing, no dramatic scaling.
- Server Components by default; `'use client'` only when animations require it (add justification comment)

## Checklist for New Sections

1. Use the container pattern (`max-width: 1440px`, `padding: 0 130px`)
2. Follow tag/headline/description hierarchy where applicable
3. All colors, fonts, spacing from `tokens.css` — no hardcoded values
4. Sharp corners on all containers; pill radius on buttons only
5. BEM class naming, co-located CSS file
6. Check for reusable components (Button, Card, Icon, DividerSection)
7. Add DividerSection between new and adjacent sections
8. Server Component by default; `'use client'` + comment only if animated
9. Typed props — no inline or hardcoded content
10. Index-based keys when mapping items with potentially duplicate labels
