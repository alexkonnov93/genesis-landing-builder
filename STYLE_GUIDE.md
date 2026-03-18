# Style Guide — Genesis Landing Page

---

## 1. Visual Design System

### Color Palette

| Token | Hex / Value | Semantic Role |
|---|---|---|
| `--color-black` | `#0a0a0a` | Primary background, body |
| `--color-black-02` | `#121212` | Secondary background, card fills |
| `--color-dark-grey` | `#333333` | Surface background, borders, dividers |
| `--color-med-grey` | `#808080` | Muted text, muted borders |
| `--color-grey` | `#adadad` | Secondary text (descriptions) |
| `--color-light-grey` | `#dbdbdb` | Light text (footer address) |
| `--color-white` | `#ffffff` | Primary text, headings |
| `--color-primary-orange` | `#ff6e06` | Primary action, accent, CTA |
| `--color-light-orange` | `#e3b799` | Action hover state |

**Semantic Mappings**

| Semantic Token | Maps To | Usage |
|---|---|---|
| `--color-text-primary` | white | Headings, body copy |
| `--color-text-secondary` | grey | Descriptions, sublines |
| `--color-text-muted` | med-grey | Tags, labels, captions |
| `--color-text-inverse` | black | Text on light backgrounds |
| `--color-text-accent` | primary-orange | Highlighted text, links on hover |
| `--color-bg-primary` | black | Page background |
| `--color-bg-secondary` | black-02 | Card backgrounds |
| `--color-bg-surface` | dark-grey | Elevated surface areas |
| `--color-bg-glass` | `rgba(255,255,255,0.1)` | Frosted-glass overlays (nav, buttons) |
| `--color-bg-inverse` | white | Light-mode surfaces |
| `--color-bg-muted` | light-grey | Subdued fills |
| `--color-action-default` | primary-orange | Buttons, interactive accents |
| `--color-action-hover` | light-orange | Hover state for actions |
| `--color-border-default` | dark-grey | Standard borders |
| `--color-border-subtle` | `rgba(255,255,255,0.16)` | Low-contrast dividers |
| `--color-border-muted` | med-grey | Medium-contrast borders |
| `--color-border-accent` | primary-orange | Accent/focus borders |

### Typography System

**Font Families**
- **Headings:** Space Grotesk (`--font-space-grotesk`) — geometric sans-serif with distinctive character
- **Body / UI:** Inter (`--font-inter`) — neutral, highly legible at all sizes
- Both loaded via `next/font/google` with `display: 'swap'`

**Type Scale**

| Level | Size | Weight | Line Height | Letter Spacing | Font |
|---|---|---|---|---|---|
| H1 | 62px | 500 (medium) | 1.04 | -5px | Space Grotesk |
| H2 | 52px | 500 (medium) | 1.04 | -4px | Space Grotesk |
| H3 | 36px | 500 (medium) | 1.1 | —3px | Space Grotesk |
| H4 | 26px | 500 (medium) | 1.1 | —1.5px | Space Grotesk |
| H5 | 22px | 500 (medium) | 1.4 | —1.2px | Space Grotesk |
| Body (18px) | 18px | 400 (regular) | 1.5 | -0.36px | Inter |
| Body (16px) | 16px | 400 (regular) | 1.6 | -0.36px | Inter |
| Small | 14px | 400 (regular) | 1.5 | -0.32px | Inter |
| Caption | 13px | 500 (medium) | 1.5 | 0.26px | Inter |

**Key typographic traits:**
- Aggressive negative letter-spacing on headings (-5px at H1, -4px at H2) creates a dense, modern feel
- Body text uses subtle negative tracking (-0.36px) for tighter-than-default reading
- Captions/tags use positive tracking (0.26px) with uppercase transform for labeling hierarchy
- OpenType `dlig` (discretionary ligatures) enabled on card titles
- Only two weights used across the entire system: 400 and 500

### Spacing Scale

Base unit: **4px**. Scale follows a mostly linear 4px grid with jumps at larger values.

| Token | Value |
|---|---|
| `--spacing-1` | 4px |
| `--spacing-2` | 8px |
| `--spacing-3` | 12px |
| `--spacing-4` | 16px |
| `--spacing-5` | 20px |
| `--spacing-6` | 24px |
| `--spacing-7` | 28px |
| `--spacing-8` | 32px |
| `--spacing-10` | 40px |
| `--spacing-12` | 48px |
| `--spacing-16` | 64px |
| `--spacing-20` | 80px |

Note: Steps 9, 11, 13–15, 17–19 are intentionally skipped to keep the scale tight at small values and allow larger jumps for section-level spacing.

### Border Radii

| Token | Value | Usage |
|---|---|---|
| `--radius-full` | 9999px | Buttons (pill shape) |

Cards, panels, containers, and all other rectangular elements use **sharp corners (0px)**. Border radius is reserved exclusively for pill-shaped buttons.

### Blur / Elevation

| Token | Value | Usage |
|---|---|---|
| `--blur-sm` | 8px | Light frosted glass |
| `--blur-md` | 16px | NavBar backdrop, tertiary buttons |

There are no box-shadow tokens — elevation is communicated through background color layering (black → black-02 → dark-grey) and backdrop blur rather than traditional shadows.

---

## 2. Component Patterns

### Button

**File:** `src/components/ui/Button/`

Polymorphic component — renders `<button>` or `<a>` depending on the presence of `href`.

| Variant | Background | Text Color | Border | Hover |
|---|---|---|---|---|
| `primary` | `--color-action-default` (#ff6e06) | `--color-text-inverse` (black) | none | #d95d05 |
| `secondary` | `--color-bg-inverse` (white) | `--color-text-inverse` (black) | none | opacity 0.9 |
| `tertiary` | `--color-bg-glass` (rgba 0.1) | `--color-text-primary` (white) | `--color-border-subtle` 1px | rgba(255,255,255,0.15) |
| `ghost` | transparent | `--color-text-primary` (white) | `--color-border-subtle` 1px | rgba(255,255,255,0.05) |

**Sizes:**
- `sm`: padding 2px 4px (minimal, used in NavBar)
- `lg`: padding 3px 7px (standard CTA)

**Shared traits:** `--radius-full` (pill), 16px font, -0.32px tracking, 0.15s ease transition on background-color.

### Card

**File:** `src/components/ui/Card/`

- Flex column, 32px internal gap
- Background: `--color-bg-secondary` (#121212)
- Icon: 24px, orange accent color
- Title: 18px medium weight, snug line-height
- Description: 16px regular, grey text
- Uses pixelarticons via `<Icon>` wrapper

### Icon

**File:** `src/components/ui/Icon/`

- Wraps `pixelarticons/react`
- Constrained to multiples of 24px: 24, 48, 72, 96
- Color controlled via CSS class, never `fill` attribute

### NavBar

**File:** `src/components/layout/NavBar/`

- Fixed position, `z-index: 100`
- Frosted glass: `rgba(10,10,10,0.1)` + 12px backdrop blur
- Bottom border: `--color-border-subtle`
- 95px spacer element to offset fixed positioning
- Logo: 149×54px
- Link hover: color transitions to `--color-text-accent`

### Footer

**File:** `src/components/layout/Footer/`

- DividerSection (100px) at top
- Absolute-positioned background image (warm gradient glow)
- Address: centered, `--color-light-grey`, `white-space: pre-line`
- Social icons: 20×20px, flex row with 20px gap
- Legal bar: uppercase copyright + legal links, space-between

### Naming Convention

All CSS classes follow **BEM** (Block Element Modifier):
```
.hero            → block
.hero__content   → element
.hero__tag       → element
.button--primary → modifier
.button--lg      → modifier
```

### Token / Theme Config

Single source of truth: `src/styles/tokens.css` — no Tailwind config, no JSON theme file. All component CSS files reference tokens directly via `var(--token-name)`.

---

## 3. Layout & Composition

### Grid System

No formal CSS Grid or column system. Layout is built with **flexbox** throughout.

**Container pattern (used by all sections):**
```css
.section__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 130px;
}
```
This produces an effective **1180px content width** (1440 − 260).

### Key Layout Widths

| Element | Width | Notes |
|---|---|---|
| Outer container | 1440px max | Centered with auto margins |
| Content area | 1180px effective | 130px padding each side |
| Hero text block | 580px | Left-aligned within content |
| Hero image | 523px | Right column, border-left separator |
| Heading blocks | 540–580px | Constrained for readable line lengths |
| Description blocks | 480px | Narrower than headings for hierarchy |
| Feature cards | 4-up flex (1 0 0) | Equal-width with border separators |
| Content listing | 3-up flex (1 0 0) | 20px gap, equal-width cards |
| Demo image | 680px height | Full content-width image |

### Breakpoints

**None.** The current implementation is desktop-only with no responsive breakpoints or media queries. All widths are fixed pixel values.

### Compositional Principles

- **Vertical rhythm via DividerSection:** Dashed vertical border lines create consistent visual breaks between sections; height is configurable (default 60px, footer uses 100px)
- **Dashed borders as structural motif:** Repeated across section headers, dividers, and content boundaries — creates a "wireframe-like" technical aesthetic
- **Asymmetric hero:** Text column (580px) + image column (523px) with unequal weighting, left-heavy for reading hierarchy
- **Centered text blocks:** FeatureCards, Demo, CTA, and ContentListing sections center headings and descriptions within the container
- **Constrained text widths:** Headings capped at 540–580px, descriptions at 480px — ensures 50–70 character line lengths
- **Border-defined cards:** Cards use 1px solid borders rather than shadows or background contrast — maintains the flat, technical aesthetic
- **Full-bleed backgrounds with contained content:** CTA and FeatureCards use absolute-positioned background images that span full width while content stays within 1180px

---

## 4. Motion & Interaction

### Animation Library

**framer-motion** (v12.38) for JavaScript-driven animations; **CSS `@keyframes`** for continuous/infinite loops.

### Scroll & Mount Animations

| Section | Element | Type | Duration | Easing | Trigger | Details |
|---|---|---|---|---|---|---|
| Hero | Tag pill | Fade up + blur | 0.8s | `[0.25, 0.1, 0.25, 1]` | Mount | 0.3s delay, y: 20→0, blur 4px→0 |
| Hero | Headline words | Word-by-word blur reveal | 0.4s per word | `[0.25, 0.1, 0.25, 1]` | Mount | 0.08s stagger between words, y: 20→0, blur 4px→0 |
| Hero | Subline | Fade up | 0.8s | `[0.25, 0.1, 0.25, 1]` | Mount | 1.2s delay |
| Hero | Image | Fade in | 1.2s | `[0.25, 0.1, 0.25, 1]` | Mount | opacity 0→1 |
| Deployments | Logos | Staggered fade | 0.6s each | `[0.25, 0.1, 0.25, 1]` | Scroll (whileInView) | 0.12s delay per logo, `once: true` |

### Continuous Animations

| Section | Animation | Duration | Easing | Details |
|---|---|---|---|---|
| Integrations | Marquee scroll | 40s | linear | CSS `@keyframes marquee`, `translateX(0) → translateX(-50%)`, logos duplicated for seamless loop |

### Interaction Transitions

| Element | Property | Duration | Easing | Trigger |
|---|---|---|---|---|
| Button (all) | `background-color` | 0.15s | ease | Hover |
| NavBar links | `color` | 0.15s | ease | Hover |

### Shared Easing Curve

```
[0.25, 0.1, 0.25, 1]
```
A slightly modified ease-out — faster initial acceleration than standard `ease`, with a smooth deceleration. Used consistently across all framer-motion animations.

### Integrations Marquee Masking

Gradient mask applied to the marquee track edges:
```css
mask-image: linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 80px), transparent 100%);
```
Creates 80px fade zones on left and right edges for a seamless infinite-scroll feel.

---

## 5. Key Design Principles

### Aesthetic Direction: Dark Technical Minimalism

The page commits to a **dark-mode-first, data-infrastructure aesthetic** that feels closer to a developer tool or terminal than a consumer product. Key commitments:

1. **Near-monochrome with a single accent.** The palette is 7 shades of grey/black with exactly one warm color (orange #ff6e06). This creates a focused visual hierarchy where anything orange is immediately actionable or important.

2. **Flat, borderline brutalist surfaces.** No drop shadows, no gradients on interactive elements, no rounded-corner softness except on pill buttons. Elevation is communicated through background color stepping (black → black-02 → dark-grey) and backdrop blur rather than traditional depth cues.

3. **Dashed borders as a signature motif.** The recurring dashed vertical lines (DividerSection, section headers, deployment logos) evoke technical blueprints, circuit diagrams, or wireframes — reinforcing the "engineering tool" identity.

4. **Aggressive typographic density.** H1 at -5px letter-spacing and H2 at -4px produces an unusually tight, compressed heading style that reads as confident and modern. The contrast with relaxed body text (1.5–1.6 line-height) creates clear hierarchy.

5. **Warm accent glows against cold backgrounds.** The CTA and footer sections use ambient orange/warm gradient background images behind dark content, creating depth and visual warmth at key conversion points without breaking the monochrome system.

6. **Motion as polish, not spectacle.** Animations are subtle and purposeful — word-by-word reveals, gentle fades, and a single marquee. Nothing bounces, scales dramatically, or draws attention to itself. The shared easing curve `[0.25, 0.1, 0.25, 1]` keeps everything feeling consistent and restrained.

7. **Content-width discipline.** Text blocks are deliberately constrained (480–580px) within the 1180px content area to maintain readable line lengths, while images and borders span the full container. This creates a rhythm of dense reading zones within generous negative space.

### Consistency Observations

- **Uniform section structure.** Every section uses the same `max-width: 1440px / padding: 0 130px` container, creating rock-solid vertical alignment across the full page.
- **Tag/headline/description hierarchy.** Most sections follow the same pattern: uppercase muted tag → large heading → grey description, reinforcing a predictable reading cadence.
- **Two-weight system.** Only 400 (regular) and 500 (medium) are used — medium for headings and action labels, regular for everything else. No bold, no light.