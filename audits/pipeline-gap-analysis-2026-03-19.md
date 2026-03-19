# Pipeline Gap Analysis: Page Generation Quality

**Date:** 2026-03-19
**Triggered by:** Design critique of `/webinar` landing page (grade: C+)
**Scope:** The `build-landing-page` skill, component catalog, and end-to-end page generation workflow

---

## The Core Problem

The build skill is excellent at **design system compliance** (tokens, BEM, container patterns, component reuse) but has **zero guidance on design quality**. It tells you *how* to build sections but not *how to compose a great page*. Every critique finding maps to a missing layer.

---

## Gap 1: No Page Composition / Conversion Flow Guidance

**Caused:** `🔴 Registration form before the pitch`

The skill says "Compose the page from existing and extended components" but provides no guidance on **what order sections should appear**. The copy file listed sections 1–9 and they were assembled in that exact order — but the copy author's section numbering isn't necessarily the right visual/conversion sequence.

**What's missing:** A persuasion-arc framework. Webinar pages, product pages, and event pages each have a proven narrative structure. The skill should include section-ordering principles like:
- Problem before solution
- Value props before commitment (form)
- Social proof adjacent to CTAs
- Visual variety alternation (text-heavy → visual → interactive → text)

---

## Gap 2: No Visual Density / Hierarchy Guidance Per Section

**Caused:** `🔴 Hero overloaded`, `🟡 Monotonous page`, `🔵 Tabbed section too small`

The copy file had 6 distinct text elements for the hero. The pipeline faithfully rendered all of them. There's no step that asks: *"Is this too much for one section? Should some of this move elsewhere?"*

**What's missing:** Editorial judgment rules — guidance on:
- Maximum element count per section (hero should have 3–4 elements, not 6)
- When to push content to a different section vs. cramming it in
- Visual weight proportionality (the most important section should have the most visual presence)
- When a section needs imagery/visuals vs. text alone

---

## Gap 3: No Asset Readiness Gate

**Caused:** `🟡 Placeholder social proof logos`, `🟡 Host section missing headshot`

The pipeline creates placeholder SVGs with text labels and moves on. There's no checkpoint that flags: *"This section requires real assets to be credible. Mark it as blocked or hide it."*

**What's missing:** An asset inventory step. Before composing the page, the skill should:
- List every asset the copy requires (logos, headshots, screenshots, videos)
- Check what exists in `/public/images/`
- Flag missing assets and recommend: skip the section, use a different component, or block until assets arrive
- Never render text-as-logo placeholders — they're worse than omitting the section

---

## Gap 4: No Color Frequency / Accent Discipline

**Caused:** `🟡 Orange overused in hero and across tags`

The skill says "Orange is reserved for actionable/important elements only" but doesn't enforce this when composing a full page. When every section has an orange tag label, the accent loses its signal value.

**What's missing:** A page-level color audit step. After composition, check:
- How many orange elements appear above the fold?
- Are tags/labels using orange when muted grey would suffice?
- Is the accent color guiding the eye to CTAs, or creating noise?

---

## Gap 5: No Visual Variety / Rhythm Check

**Caused:** `🟡 Monotonous page`, `🔵 Final CTA gradient feels disconnected`

The skill has no concept of section-to-section rhythm. The webinar page stacks 4 text-on-black sections in a row (Social Proof → Form → Problem → Tabs) with no visual break. The warm gradient on the final CTA is the only visual flourish, making it feel like it belongs to a different page.

**What's missing:** A rhythm/variety checklist applied after page composition:
- No more than 2 text-heavy sections in a row without a visual break
- Alternate between left-aligned, centered, and full-width layouts
- Background treatment variety (pure black → dark grey → subtle gradient) to create depth
- If a visual treatment appears once (gradient), echo it at least once more for cohesion

---

## Gap 6: No Content Editing / Length Constraints

**Caused:** `🟡 Host bio too long`

The copy file had 3 paragraphs of bio text. The pipeline rendered all 3 paragraphs verbatim. There's no step that evaluates whether the content length is appropriate for the section type.

**What's missing:** Content-fit guidance per section pattern:
- Hero: headline (8 words max), subline (1 sentence), one CTA
- Bio/speaker: 2 sentences max on a landing page
- Blockquotes: 2–3 sentences each
- Card descriptions: 1 sentence
- The skill should treat copy as input to be *edited for the medium*, not transcribed literally

---

## Gap 7: No Self-Critique Step

**Caused:** All findings — the pipeline has no feedback loop

The skill ends at "Compose the page from existing and extended components, then validate visually." But "validate visually" just means "check it renders." There's no step that asks *"Does this look world-class?"*

**What's missing:** A built-in critique pass before delivery. After composing the page, the pipeline should:
- Screenshot the page
- Evaluate it against the five areas from `/critique-page`
- Identify and fix issues before presenting to the user

---

## Summary: What to Add to the Skill

| Gap | Add to Pipeline | Where |
|-----|----------------|-------|
| Section ordering | Persuasion-arc framework with section sequencing principles | New section in SKILL.md after "Required Steps" |
| Visual density | Element-count limits and visual-weight guidance per section type | New section or embedded in component descriptions |
| Asset readiness | Asset inventory step before composition; never use text placeholders | New required step (between step 3 and 4) |
| Accent discipline | Page-level color frequency check | Addition to the "Colors" section |
| Visual rhythm | Variety checklist: no 2+ text-heavy sections in a row, bg alternation | New section in SKILL.md |
| Content editing | Length constraints per section type; treat copy as input, not transcript | New section in SKILL.md |
| Self-critique | Screenshot + evaluate before delivery | New final step |
