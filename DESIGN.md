---
name: ReviewIt
description: A lawyerly professional light system — navy authority, off-white paper ground, and one flagged-clause visual grammar shared by the landing demo and the real result screen.
colors:
  legal-navy: "#1a2d4d"
  legal-navy-light: "#2d4a7a"
  legal-white: "#ffffff"
  legal-off-white: "#f8f7f5"
  legal-gray: "#5a5a5a"
  legal-gray-light: "#a8a8a8"
  legal-gray-border: "#d4d4d4"
  legal-accent-red: "#b8232b"
  legal-accent-gold: "#9b7d47"
  legal-warning-amber: "#d97a2d"
typography:
  display:
    fontFamily: "-apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "-apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  sectionTitle:
    fontFamily: "-apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.01em"
  body:
    fontFamily: "-apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: "-apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  data:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.01em"
rounded:
  sharp: "3px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "22px"
  xl: "28px"
  xxl: "44px"
components:
  button-primary:
    backgroundColor: "{colors.legal-navy}"
    textColor: "{colors.legal-white}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.legal-navy-light}"
    textColor: "{colors.legal-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.legal-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "8px 14px"
  button-ghost-hover:
    backgroundColor: "{colors.legal-off-white}"
    textColor: "{colors.legal-navy}"
  input-field:
    backgroundColor: "{colors.legal-off-white}"
    textColor: "{colors.legal-gray}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "12px 14px"
---

# Design System: ReviewIt

## Overview

**Creative North Star: "The Signed Original"**

ReviewIt reads as a well-run small law office's own intake system, not a
consumer AI toy. A white paper ground, navy authority color, and warm
off-white panels carry the whole system — the same restraint a real firm
uses on its own letterhead and engagement documents. Nothing here performs
"AI product": no dark terminal chrome, no neon accent, no glowing gradient,
no chat-bubble Q&A. The system trusts plain hierarchy, generous whitespace,
and one severity vocabulary (Blocker / Push / Note) to do the organizing
work that color-coded pills or icon badges would do in a louder system.

This replaced an earlier "Gate Board" dark-terminal direction (near-black
ground, cream ink, airport-departure-board metaphor) that was explicitly
abandoned in favor of this lawyerly light system — see `CLAUDE.md`'s
"Never revert to dark terminal theme" rule. The dark direction is retired,
not paused; nothing in this document should be read as a return path to it.

**Key Characteristics:**
- White page ground with off-white (`#f8f7f5`) panel surfaces — never a dark
  or near-black ground anywhere in the product.
- Navy (`#1a2d4d`) is the single authority color: primary buttons, links,
  headings, the logo mark, the final-CTA band. No blue-adjacent competitor
  accent exists in the palette.
- Two-voice type system carried over from the original system: JetBrains
  Mono for anything that is data the signer scans (severity labels, clause
  names, board-head columns); the system sans stack for prose the signer
  reads for meaning.
- Flat by default — zero shadows anywhere. Depth comes from a single
  background-color step (white → off-white) and 1px gray-border dividers.
- Sharp corners (3px) throughout; bordered rectangles, not soft app chrome.
- Severity color vocabulary: accent-red for Blocker, warning-amber for Push,
  gray-light for Note — applied only to the severity label text, never to
  row backgrounds or borders at rest.

## Colors

### Primary
- **Legal Navy** (`#1a2d4d`): the one authority color — primary buttons,
  the logo mark, headline text, the final-CTA band background, active nav
  states.
- **Legal White** (`#ffffff`): the page ground. Everything sits on this by
  default.

### Secondary
- **Legal Accent Red** (`#b8232b`): the Blocker severity label color, the
  flagged-clause highlight border in the hero illustration, and the strike
  stroke in the logo mark. Not used as a resting badge background.
- **Legal Accent Gold** (`#9b7d47`): the hero tagline color and the Push
  counter-offer / "what to do" accent in the demo panel.
- **Legal Warning Amber** (`#d97a2d`): the Push severity label color and the
  "copied" confirmation state on the counter-offer copy button.

### Neutral
- **Legal Off-White** (`#f8f7f5`): the one elevated surface tone — panel
  backgrounds (flag board, form inputs, resource cards), never combined with
  a shadow.
- **Legal Gray** (`#5a5a5a`): primary body-copy ink.
- **Legal Gray, Light** (`#a8a8a8`): field labels, placeholder text, Note
  severity label, footnote/disclosure copy. Meets 4.5:1+ against white.
- **Legal Gray Border** (`#d4d4d4`): the only border/divider color in the
  system — panel borders, section dividers, input borders, nav bottom rule.

### Named Rules
**The One Color Per Severity Rule.** Each severity level (Blocker, Push,
Note) owns exactly one label color, applied only to the severity label text
— never blended into row backgrounds, borders, or icons at rest. Carried
forward unchanged from the prior system because the underlying flag-row
component is unchanged; only its ground and neutral tones moved from dark
to light.

## Typography

**Body Font:** system-UI sans stack (`-apple-system, "Segoe UI", Roboto,
Helvetica, Arial, sans-serif`)
**Label/Mono Font:** JetBrains Mono (loaded via `next/font/google`), with
`ui-monospace, "SF Mono", Menlo, Consolas, monospace` fallback.

**Character:** the two-voice split survives from the original system:
JetBrains Mono carries board/data content — severity labels, clause names,
panel micro-labels — while the system sans stack carries prose the signer
reads for meaning (why-text, quoted source sentences, counter-offer text,
Q&A answers, benefit copy, footnotes).

### Hierarchy
- **Display** (700, 40px, sans, line-height 1.15): the landing hero
  headline only.
- **Headline** (600, 28px, sans, line-height 1.2): page-level headings
  outside the hero (Sign in, Resources, dashboard welcome).
- **Section Title** (700, 26px, sans, line-height 1.25): landing-page
  section headings ("How it works," "See it in action," "Why trust the
  flags").
- **Title** (500, 22px, mono, line-height 1.3): reserved for board/route-
  style data displays if reintroduced; not currently in use on a shipped
  screen.
- **Data** (500, 15px, mono, line-height 1.3): flag-row clause names.
- **Body** (400, 14px, sans, line-height 1.6): counter-offer text,
  blockquote source sentences, Q&A answers, benefit/step copy.
- **Caption** (400, 13px, sans, line-height 1.5): a flag row's "why" text,
  the synthetic-contract footnote, resource-card copy.
- **Label** (600, 11px, mono, uppercase, letter-spacing 0.08em): panel
  micro-labels ("What the contract says," detail-panel headers, form field
  labels).

### Named Rules
**The Two-Voice Rule.** Mono is for data the signer scans (severity labels,
clause names, panel micro-labels); sans is for prose the signer reads (why-
text, quotes, answers, benefit copy). Never put a full sentence of prose in
mono, and never label a data column in sans.

## Layout

A single-column frame capped at 1180px, centered, with 28px side padding
(16px on mobile ≤760px). The landing page composes as stacked full-width
sections (hero, how-it-works, demo, trust, final-CTA band, footer), each
its own 1180px-capped container except the final-CTA band, which is a
full-bleed navy band with centered narrow content. The flag-row demo is a
three-column grid (`84px severity / 1fr clause+why / 32px chevron`),
identical in the landing-page teaser and the real result screen.

## Elevation & Depth

Flat by default: zero `box-shadow` anywhere in the product. Depth is
conveyed entirely through one background-color step (white → off-white)
and 1px gray-border rule dividers between regions. There is no ambient
glow, no drop shadow on hover, and no elevated "card" anywhere in the
system.

### Named Rules
**The Flat-By-Default Rule.** Surfaces never lift with a shadow, at rest or
on interaction. Depth is background-step + rule-divider only.

## Shapes

Sharp corners throughout: a single 3px radius (`--radius`) applied
everywhere a radius is used — buttons, panels, inputs, the flag board, the
logo mark's rounded-square badge. No pill-shaped buttons and no soft
rounded cards anywhere. Borders are plain 1px solid gray-border lines.
Icons and the logo mark are authored inline SVG, never a Unicode glyph or
icon font.

### Named Rules
**The Bordered Rectangle Rule.** Interactive containers (buttons, form
inputs) are bordered rectangles at 3px radius, not soft app chrome.

**The Authored-Mark Rule.** The logo mark and every landing-page
illustration (hero document, how-it-works step icons, trust-section
icons) are hand-authored inline SVG in one consistent stroke weight, never
an icon-font glyph, emoji, or CSS-gradient stand-in.

## Components

### Navigation Header
Sticky white header, 1px gray-border bottom rule, max-width 1180px inner
container. Logo mark + wordmark on the left; primary text links plus one
navy CTA button on the right. On mobile (≤760px), secondary text links
collapse, leaving one primary link and the CTA button.

### Buttons
- **Shape:** bordered rectangle, 3px radius, no pill shapes.
- **Primary (nav CTA, hero CTA, final-CTA band, form submit):** solid navy
  background, navy border, white text, `12-13px` vertical / `18-26px`
  horizontal padding. Hover: `legal-navy-light`.
- **Ghost (Copy counter-offer, sign-out, clear):** transparent background,
  1px gray-border, navy text. Hover: off-white background, navy border.
  A successful copy switches border/text color to warning-amber with the
  label swapped to "Copied" for 1.6s.

### Cards / Panels (flag board, form inputs, resource cards)
- **Corner Style:** 3px radius.
- **Background:** Legal Off-White.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Border:** 1px Legal Gray Border.

### Inputs / Fields
- **Style:** Legal Off-White background, 1px Legal Gray Border, 3px
  radius, Legal Gray text, Legal Gray Light placeholder.
- **Focus:** border switches to Legal Navy, background switches to white.
- **Disabled:** Legal Gray Border background, 0.6 opacity.

### The Flag Row (signature component)
Unchanged in behavior from the original system: severity label (mono,
color-coded), clause name + "why" text, chevron toggle. Expands in place
via `grid-template-rows: 0fr → 1fr` on the detail wrapper (not
`max-height`), revealing the exact source sentence (blockquote) and a
drafted counter-offer with a copy button. This is the one component shared
verbatim between the landing-page demo and the real analysis result
screen — it is the product's core trust mechanism made visible.

### Logo Mark
A 3px-radius navy square containing a two-tone checkmark: a short
accent-red stroke meeting a longer white stroke at the same vertex,
reading as "flagged, then cleared" in one continuous mark. Authored as
inline SVG at `src/components/Logo.tsx`; never a raster export.

## Do's and Don'ts

### Do:
- **Do** use JetBrains Mono for severity labels, clause names, and panel
  micro-labels; system sans for everything the signer reads for meaning.
- **Do** use the `grid-template-rows: 0fr → 1fr` technique for any new
  expand/collapse panel, not `max-height`.
- **Do** author icons, the hero illustration, and the logo as inline SVG.
- **Do** keep the flag-row component identical between the landing-page
  demo and the real result screen — divergence there would undercut the
  citation-integrity story the whole product is built on.

### Don't:
- **Don't** reintroduce the dark terminal ground, cream ink, or airport-
  board metaphor — that direction is retired per `CLAUDE.md`.
- **Don't** add a box-shadow anywhere in this system.
- **Don't** use a pill-shaped button, a soft-shadow card, or a radius
  larger than 3px.
- **Don't** use more than one severity color as a resting badge, border,
  or icon color; Blocker/Push/Note each own exactly one label color.
- **Don't** use a Unicode glyph, emoji, or CSS gradient as a stand-in icon
  — the logo, step icons, and hero illustration are all authored SVG.
- **Don't** fall into the same-size icon+heading+text card grid for
  benefit/differentiator sections — the trust section uses a flowing
  divided list, not boxed cards, deliberately.
