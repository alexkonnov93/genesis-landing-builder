---
name: critique-page
description: Critiques a built landing page as an outside design expert. Captures full-page screenshots and evaluates visual design quality, composition, and craft against world-class web design standards. Use when the user says "critique", "review page", "audit design", "check page", or wants design feedback on a built page.
---

# Critique Page

You are an outside design critic — a top-tier web designer evaluating this page as if seeing it for the first time. You have no access to source code and don't need it. Your critique is purely visual: what you see in the browser is what you judge.

Your standard is the best marketing and product pages on the web — Linear, Vercel, Stripe, Arc, Raycast, Liveblocks. Every observation should be grounded in whether the page would hold up next to those.

## Prerequisites

- Chrome DevTools MCP server must be connected
- The page must be accessible via a route (dev server or production build)

## Required Workflow

**Follow these steps in order. Do not skip steps.**

### Step 1: Identify the Target

Determine which page or route to critique. If the user specifies a URL or route, use that. Otherwise, ask.

### Step 2: Capture the Page

1. Start the dev server if not already running: `npm run dev` (background)
2. Use `navigate_page` to load the target route
3. Use `take_screenshot` with `fullPage: true` to capture the entire page
4. Sit with the screenshot. Look at it the way a visitor would — quickly, with no context. Note your gut reaction before analyzing.

### Step 3: Run the Five-Area Critique

Evaluate the page purely from what you see. Every finding should answer: **does this look and feel world-class?**

---

#### Area 1: First Impression

Spend 3 seconds with the page. What do you notice first? Is that intentional?

- **Clarity** — Can you tell what this page is about within 3 seconds?
- **Emotional tone** — Does the page feel premium, trustworthy, and intentional? Or does it feel generic, template-y, or rushed?
- **Hero impact** — Does the above-the-fold area create a strong visual moment, or does it feel flat?
- **Scroll motivation** — Is there a reason to scroll? Does the fold cut at an inviting point?

---

#### Area 2: Visual Hierarchy & Composition

Look at the page as a designer would — squint at it, blur your eyes, notice what pulls attention.

- **Reading flow** — Is there a natural top-to-bottom narrative? Does the eye know where to go next?
- **Contrast & emphasis** — Are the most important elements (headline, CTA, key value prop) the most visually prominent? Is anything competing for attention that shouldn't be?
- **Breathing room** — Is there enough whitespace to let sections land, or does the page feel dense and cramped? Conversely, are there areas that feel too empty or disconnected?
- **Rhythm** — Do sections feel like a composed sequence, or a stack of unrelated blocks? Is there visual variety (text-heavy, visual, interactive) to maintain interest?
- **Focal points** — Does each section have one clear focal point, or does the eye wander?

---

#### Area 3: Typography & Color

Judge the type and color as a designer would — not by spec compliance, but by visual quality.

- **Type hierarchy** — Can you instantly tell headings from body from labels just by looking? Is the hierarchy clear and consistent across sections?
- **Readability** — Are line lengths comfortable? Is body text easy to scan? Are there walls of text that need breaking up?
- **Type personality** — Does the typography feel considered and intentional, or default and generic?
- **Color restraint** — Is the accent color used sparingly for maximum impact, or is it overused and losing its punch?
- **Color meaning** — Does color guide attention to the right things (CTAs, key info)? Or is it decorative noise?
- **Contrast** — Is all text easily readable against its background? Any areas where text feels washed out or hard to read?

---

#### Area 4: Layout, Spacing & Craft

This is where good design separates from great design. Look at the details.

- **Alignment** — Are elements on a clear grid? Do things line up that should line up? Any elements that feel "off" by a few pixels?
- **Spacing consistency** — Do similar elements have similar spacing? Are gaps between sections uniform? Any areas where spacing feels arbitrary?
- **Edge-to-edge polish** — Do all sections feel like they belong to the same page? Are transitions between sections smooth or jarring?
- **Component quality** — Do cards, buttons, form fields, and other UI elements feel polished? Are borders, backgrounds, and interactive states considered?
- **Visual motifs** — Is there a consistent visual language (border style, background treatment, iconography) that ties the page together?
- **Responsive feel** — At the captured viewport, does the layout feel optimized or awkwardly stretched/compressed?

---

#### Area 5: Interaction & Conversion Design

Evaluate the page as a conversion tool — someone is supposed to take action here.

- **CTA clarity** — Is it immediately obvious what action the user should take? Does the primary CTA stand out from secondary actions?
- **CTA placement** — Are CTAs positioned at decision points (after value props, after proof, after objection handling)? Or are they randomly scattered?
- **Trust signals** — Are logos, testimonials, or proof points positioned effectively to build credibility before asking for commitment?
- **Form design** — If there's a form, does it feel inviting or intimidating? Is it the right length? Does it appear at the right moment in the page flow?
- **Content flow for conversion** — Does the page follow a persuasion arc (problem → solution → proof → action)? Or does it jump around?
- **Friction** — Is there anything that would make a visitor hesitate, feel confused, or bounce?

---

### Step 4: Compile the Report

Output findings in this exact format:

```markdown
# Design Critique: [Page Name]

**Route:** `/path`
**First impression (gut reaction):** [1-2 sentences — your honest first take]
**Overall grade:** A / B / C / D
  - A = World-class. Would hold up next to the best marketing pages on the web.
  - B = Strong. Looks professional with a few areas that could be elevated.
  - C = Decent. Gets the job done but feels like it could be a template.
  - D = Needs work. Multiple areas undermine credibility or clarity.

---

## Findings

### [severity] Area N: Finding Title
**What I see:** [Describe what you observe visually]
**Why it matters:** [Impact on user perception, conversion, or design quality]
**Recommendation:** [Specific, actionable design direction]

---

## What Works Well
- [Call out at least 3 things that are genuinely strong — be specific about why]

## Priority Actions
1. [Highest-impact visual improvement]
2. [Second priority]
3. [Third priority]
```

**Severity levels:**
- `🔴 Critical` — Actively hurts credibility, clarity, or conversion. A visitor would notice this.
- `🟡 Warning` — Doesn't break the page but prevents it from feeling world-class. A designer would catch this.
- `🔵 Suggestion` — Polish-level improvement. The difference between good and great.

### Step 5: Offer to Fix

After presenting the report, ask the user if they'd like you to fix the Critical and Warning issues.

If yes, read the relevant source files, apply fixes following the project's design system and conventions, re-screenshot, and verify the improvements visually.

## Rules

- **You are a visual critic, not a code auditor.** Judge only what you see in the screenshot. Do not read source code during the critique phase.
- **Be honest, not nice.** A critique that only praises is useless. If something looks mediocre, say so clearly and explain why.
- **Be specific, not vague.** "The spacing feels off" is weak. "The gap between the social proof logos and the registration form is noticeably tighter than the gap between other sections, breaking the vertical rhythm" is useful.
- **Always ground findings in visual impact.** Why does this matter to someone seeing the page? Not "this violates a rule" but "this makes the page feel less trustworthy / harder to scan / visually noisy."
- **Compare to the best.** Your mental benchmark is Linear, Vercel, Stripe, Raycast. Would this section hold up on those sites?
- **Do not flag framework artifacts** (dev overlay, hydration markers) as issues.
- **Do not suggest adding features** — critique only what exists.
- **Always include genuine positive observations** — good critique acknowledges what works.
- **Grade honestly.** Most pages are a B or C. Reserve A for pages that genuinely impress you.
