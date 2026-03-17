---
name: validate-design
description: Validates implemented designs by launching the dev server, taking screenshots via Chrome DevTools, comparing against Figma references, and fixing visual issues. Use after implementing a component or section from Figma, when user says "validate", "check design", "evaluate results", "compare with Figma", or "fix visual issues".
---

# Validate Design

## Overview

This skill automates post-implementation visual validation. It launches the dev server, captures screenshots via Chrome DevTools MCP, compares them against Figma references, identifies visual discrepancies, and fixes them — iterating until the implementation matches the design.

## Prerequisites

- Chrome DevTools MCP server must be connected (for screenshots and page inspection)
- Figma MCP server must be connected (for fetching reference screenshots)
- The component/section must already be implemented and wired into a page route
- Project must be buildable (`npm run build` passes)

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Verify Build

Run `npm run build` to ensure there are no compilation or type errors before starting the dev server.

If the build fails, fix the errors first before proceeding.

### Step 2: Start Dev Server

Start the development server in the background:

```bash
npm run dev
```

Run this in the background and verify it starts successfully on localhost:3000.
Wait for the "Ready" message before proceeding.

### Step 3: Navigate and Screenshot

Use Chrome DevTools MCP tools:

1. `navigate_page` to `http://localhost:3000` (or the specific route being validated)
2. `take_screenshot` with `fullPage: true` to capture the current implementation

Study the screenshot carefully — note all visible elements, their positioning, colors, and typography.

### Step 4: Fetch Figma Reference

If a Figma URL was provided or is known from the implementation context:

1. Use `get_screenshot` from the Figma MCP server to capture the reference design
2. Keep both screenshots accessible for comparison

If no Figma URL is available, ask the user or check the CLAUDE.md section inventory for the relevant node URL.

### Step 5: Compare and Identify Issues

Compare the implementation screenshot against the Figma reference. Check for:

- **Layout** — spacing, alignment, sizing, overflow
- **Typography** — font family, size, weight, line-height, letter-spacing
- **Colors** — background, text, borders, accents
- **Assets** — images rendering correctly, SVGs displaying properly (watch for CSS-var-in-SVG issues with `<img>` tags)
- **Interactive elements** — buttons visible, correct variants showing
- **Overflow** — content clipping or extending beyond viewport
- **Background** — page/body background color matching the design context

### Common Issues to Check

| Issue | Symptom | Fix |
|-------|---------|-----|
| White-on-white text | Elements invisible on light background | Add `background-color` and `color` to `body` in `base.css` |
| SVG CSS variables | SVG `fill="var(--fill-0, white)"` not working in `<img>` tags | Replace CSS var fills with actual color values in the SVG file |
| Content overflow | Elements extending past viewport edge | Add `overflow: hidden` to the containing section |
| Missing fonts | Fallback system font rendering | Verify font CSS variables are applied to `<html>` in layout.tsx |
| Image not covering | White gaps around images | Ensure `object-fit: cover` and proper `width`/`height` on image containers |

### Step 6: Fix Issues

For each identified issue:

1. Determine the root cause (CSS, SVG, layout, missing token)
2. Apply the fix in the appropriate file
3. Do NOT introduce new hardcoded values — use design tokens from `src/styles/tokens.css`

### Step 7: Re-validate

After applying fixes:

1. `navigate_page` with `type: reload` and `ignoreCache: true`
2. `take_screenshot` again with `fullPage: true`
3. Compare the updated screenshot against the Figma reference
4. If issues remain, repeat Steps 5–7

### Step 8: Final Report

Once the implementation matches the design, report:

- What was validated (component/section names)
- Issues found and fixed (with brief descriptions)
- Any remaining deviations that are intentional or require design input
- Confirmation that the build still passes

## Rules

- Never skip the build verification step — catching errors early saves iteration time
- Always use `ignoreCache: true` when reloading after fixes
- Do not hardcode CSS values to fix issues — always use tokens
- If a fix requires a new token value, add it to `src/styles/tokens.css`
- SVG assets served via `<img>` or Next.js `<Image>` cannot use CSS custom properties in `fill` attributes — replace with literal values
- The Next.js dev overlay ("1 Issue" badge) is expected in development and should be ignored during validation
- Run the dev server in the background so you can continue working while it runs
