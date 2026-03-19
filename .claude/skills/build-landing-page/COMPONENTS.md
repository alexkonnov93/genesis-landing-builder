# Component Catalog

Map each section in the user's copy to an existing component below before creating anything new. Read the source file of any component you plan to use.

---

## UI Primitives (`src/components/ui/`)

### Button
**Props:** `variant` (primary | secondary | tertiary | ghost), `size` (sm | lg), `href?` (renders `<a>` if present), `children`
**Use for:** All CTAs, action links, form submits

### Card
**Props:** `icon` (pixelarticons name), `title`, `description`
**Use for:** Feature grids, benefit cards, audience cards, any icon + title + description pattern

### Icon
**Props:** `name` (pixelarticons), `size` (24 | 48 | 72 | 96)
**Use for:** Inline icons, card icons — color via CSS class only

---

## Section Components (`src/components/sections/`)

### HeroSection
**Source:** `src/components/sections/Hero/`
**Props:** `tag`, `headline`, `subline`, `imageSrc`, `imageAlt`
**Layout:** Asymmetric two-column — text left (580px) + image right (523px), dark bg
**Use for:** Any hero/above-the-fold section with headline + media. Adapt for video embeds, webinar headers, product heroes.
**Animations:** Word-by-word blur reveal on headline, fade-up on tag/subline, fade-in on image

### DeploymentsSection
**Source:** `src/components/sections/Deployments/`
**Props:** `tag`, `headline`, `description`, `logos[]` (src, alt, width, height)
**Layout:** Tag/headline/description header with dashed borders, then horizontal logo row (140px height, bordered cells)
**Use for:** Platform logos, partner logos, trusted-by rows, any logo grid with a heading. Works for both dark and light backgrounds with CSS overrides.
**Animations:** Staggered logo fade-in on scroll

### IntegrationsSection
**Source:** `src/components/sections/Integrations/`
**Props:** `tag`, `logos[]` (src, alt, width, height)
**Layout:** Infinite horizontal marquee with gradient edge masks
**Use for:** Integration logos, technology partners, any auto-scrolling logo strip

### FeatureCardsSection
**Source:** `src/components/sections/FeatureCards/`
**Props:** `tag`, `headline`, `description`, `bgSrc`, `cards[]` (icon, title, description)
**Layout:** Centered header with background image, then 4-up Card grid (equal width, bordered)
**Use for:** Feature grids, benefit lists, audience cards (2x2 or 4x1), any set of icon + title + description items

### DemoSection
**Source:** `src/components/sections/Demo/`
**Props:** `tag`, `headline`, `imageSrc`, `imageAlt`, `playLabel`
**Layout:** Centered header, full-width image (680px height) with play button overlay
**Use for:** Video demos, screenshot showcases, any section centered around a single large media element

### ContentListingSection
**Source:** `src/components/sections/ContentListing/`
**Props:** `headline`, `items[]` (tag, title, thumbnailSrc?, thumbnailAlt?)
**Layout:** 3-column card grid with thumbnail + tag + title
**Use for:** Content grids, blog listings, video listings, resource cards

### CtaSection
**Source:** `src/components/sections/Cta/`
**Props:** `headline`, `description`, `bgSrc`, `actions[]` (label, href, variant)
**Layout:** Centered text + action buttons over full-bleed background image, bordered container
**Use for:** Final CTAs, mid-page CTAs, registration prompts, any conversion-focused section with headline + buttons

### DividerSection
**Source:** `src/components/sections/Divider/`
**Props:** `height?` (default 60px)
**Layout:** Dashed vertical border lines as visual spacer
**Use for:** Between all adjacent sections for vertical rhythm

---

## Layout Components (`src/components/layout/`)

### NavBar
**Props:** `links[]` (label, href), `actions[]` (label, href, variant)
**Use for:** Page header — fixed, frosted glass, logo + nav links + CTA buttons

### Footer
**Props:** `address`, `socials[]` (icon, alt, href), `copyright`, `legalLinks[]` (label, href)
**Use for:** Page footer — address, social icons, legal links, warm gradient background
