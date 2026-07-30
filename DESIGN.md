---
name: A.I.C. Madeira
description: Warm institutional presence for a Funchal charity — aged paper, ink, and terracotta, kept strictly flat.
colors:
  bg: "#FAF7F2"
  surface: "#FFFFFF"
  ink: "#2E2A26"
  body: "#4A443E"
  muted: "#6F675E"
  terracotta: "#C0452B"
  terracotta-dark: "#A63A23"
  border: "#EAE2D6"
  border-strong: "#D9CFC1"
  on-dark: "#D8D1C7"
  on-dark-muted: "#B5ACA0"
  accent-warm: "#D89A6A"
  active-bg: "#F3E9DF"
  on-active-bg: "#A63A23"
  success-bg: "#EAF3E6"
  success-border: "#BCD9B0"
  success-ink: "#3C6B2E"
typography:
  display:
    fontFamily: "Lora, serif"
    fontSize: "clamp(36px, 6vw, 56px)"
    fontWeight: 600
    lineHeight: 1.12
  headline:
    fontFamily: "Lora, serif"
    fontSize: "clamp(32px, 5.5vw, 48px)"
    fontWeight: 600
    lineHeight: 1.15
  title:
    fontFamily: "Lora, serif"
    fontSize: "clamp(28px, 4.5vw, 36px)"
    fontWeight: 600
    lineHeight: 1.2
  subtitle-lg:
    fontFamily: "Lora, serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.25
  subtitle:
    fontFamily: "Lora, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
  subtitle-sm:
    fontFamily: "Lora, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.35
  quote:
    fontFamily: "Lora, serif"
    fontSize: "clamp(22px, 3.5vw, 30px)"
    fontWeight: 500
    lineHeight: 1.45
    fontStyle: "italic"
  figure:
    fontFamily: "Lora, serif"
    fontSize: "38px"
    fontWeight: 600
    letterSpacing: "0.06em"
  contact:
    fontFamily: "Lora, serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Karla, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Karla, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Karla, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  body-xs:
    fontFamily: "Karla, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Karla, sans-serif"
    fontSize: "16px"
    fontWeight: 700
  label:
    fontFamily: "Karla, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.14em"
    textTransform: "uppercase"
  label-sm:
    fontFamily: "Karla, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
    textTransform: "uppercase"
  brand:
    fontFamily: "Lora, serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.01em"
  brand-sub:
    fontFamily: "Karla, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.04em"
rounded:
  hairline: "2px"
  xs: "8px"
  sm: "10px"
  md: "12px"
  lg: "14px"
  xl: "16px"
  2xl: "20px"
  3xl: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  gutter: "24px"
  xl: "28px"
  2xl: "36px"
  3xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.surface}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-dark}"
    textColor: "{colors.surface}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-outline-hover:
    textColor: "{colors.terracotta}"
  button-inverse:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.terracotta}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "14px 34px"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
  nav-link-active:
    backgroundColor: "{colors.active-bg}"
    textColor: "{colors.terracotta}"
  nav-cta:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.2xl}"
    padding: "36px"
  option-card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.3xl}"
    padding: "clamp(26px, 4vw, 44px)"
  inset-box:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "24px"
  form-card:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.3xl}"
    padding: "clamp(24px, 4vw, 44px)"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
  doc-row:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.lg}"
    padding: "18px 22px"
  badge-pdf:
    backgroundColor: "{colors.active-bg}"
    textColor: "{colors.terracotta}"
    rounded: "{rounded.xs}"
    padding: "8px 10px"
---

# Design System: A.I.C. Madeira

## Overview

**Creative North Star: "The Hospício Parlour"**

The association has met in the same room since 22 January 1876 — a formal parlour in the Hospício Princesa D. Maria Amélia, with lime-washed plaster walls, terracotta in the light from the street, and dark wood. This system is that room rendered as a website. It is warm without being soft, formal without being cold, and it never raises its voice. A visitor arriving to audit the accounts should feel they have been received properly, not processed.

Four qualities hold simultaneously and none may be traded for another: **warm, not cold** — the cream and terracotta are a deliberate refusal of the grey government-portal register, because this is a charity of people; **formal and institutional** — composed, a little ceremonious, matching the formal European Portuguese of the copy; **unhurried and spacious** — long line-heights, generous vertical rhythm, nothing competing or urging; **sober and documentary** — no ornament earns its place, because restraint is what reads as trustworthy to someone checking whether an institution is real.

The system is materially plain by doctrine. There are no shadows, no gradients, no decorative shapes, and almost no motion. Depth comes entirely from full-bleed tonal bands and 1px hairlines — the way a printed record gets its structure from paper stock and rules rather than from lighting. Interest is meant to come from the content: the dates, the names, the documents.

**Key Characteristics:**

- Four grounds only: aged paper, white, ink, terracotta — always full-bleed, never a floating panel
- Lora for every heading, quotation, and institutionally significant figure; Karla for everything else
- Terracotta as the sole accent, used as a signal at small scale plus at most one full-bleed band per page
- Strictly flat: zero shadows, depth from tonal banding and hairlines
- Intrinsically responsive — one media query in the entire system, and it only swaps navigation
- Radius grows with the element: pills for actions, soft rectangles for containers

## Colors

A warm, low-contrast neutral field — paper rather than white — carrying a single earthen accent and one dark ground.

### Primary

- **Terracotta Red** (`{colors.terracotta}`): The only accent in the system, and the only saturated color. It appears as the uppercase eyebrow above section headings, primary buttons, accent links and arrow links, the timeline year headings on the instituição page, the 2px underline beneath each governance body's name, the PDF badge on document rows, and — once per page at most — as a full-bleed contribution band. **Hover deepens to** `{colors.terracotta-dark}`, never lightens.
- **Terracotta Deep** (`{colors.terracotta-dark}`): Hover and pressed states for every terracotta surface and accent link. Also the form error text, which is the one place it appears without a terracotta partner.

### Tertiary

- **Warm Sand** (`{colors.accent-warm}`): Eyebrow labels on ink grounds only, where Terracotta Red would sit too close to the background. Never used on light grounds.
- **Active Wash** (`{colors.active-bg}`): The palest terracotta tint. Marks the current page in navigation, backs the PDF badge, and fills an empty photo frame. It signals "this one" or "nothing here yet" — never used as a general surface. It is the only ground in the system tinted toward the accent, which is precisely why the accent cannot sit on it — see The Deepened Accent Rule.
- **Deep on Wash** (`{colors.on-active-bg}` — an alias of Terracotta Deep): The text partner for Active Wash, at 5.4:1. Terracotta Deep is otherwise the hover tone; here it is a resting color, because Active Wash is a resting ground.

### Neutral

- **Aged Paper** (`{colors.bg}`): The default page ground and the resting state of the whole site. Also the fill for form cards, info boxes, document rows, and the cream option card — a warm surface reads as receptive where white reads as clinical.
- **White Surface** (`{colors.surface}`): Raised content against Aged Paper — cards, governance cards, inset boxes, inputs, and full sections that need to feel like a fresh page. Never the page ground.
- **Ink** (`{colors.ink}`): All headings, the strongest body text, and the dark ground for the statistics band, the mission quote, the dark option card, and the footer. A warm near-black (13.3:1 on Aged Paper), never true black.
- **Warm Graphite** (`{colors.body}`): Emphasized running text — the historical narrative, the copy inside cards on light grounds, form field labels.
- **Stone** (`{colors.muted}`): The lightest text color permitted on light grounds, and the floor of the neutral ramp. Carries leads and prose (5.2:1 on Aged Paper), and every piece of secondary text — italic captions, uppercase mini-labels, file sizes, the photo-frame caption.
- **Parchment** (`{colors.on-dark}`) and **Parchment Muted** (`{colors.on-dark-muted}`): The text pair for ink grounds — footer links and addresses at 9.4:1, and everything secondary at 6.4:1: statistic labels, prose on dark, footer column headings, the NIF line, and mini-labels inside the dark option card.

### Semantic

- **Success** (`{colors.success-bg}` / `{colors.success-border}` / `{colors.success-ink}`): The only green in the system, and the only semantic color pair. Reserved for the contact form's sent-confirmation panel. There is deliberately no warning or info equivalent — do not invent one.

### Named Rules

**The Four Grounds Rule.** Every section sits on exactly one of four backgrounds — Aged Paper, White Surface, Ink, or Terracotta Red — and that color runs full-bleed edge to edge. The 1120px container governs inner content only. Never build a colored panel that floats inside a section with page ground visible around it.

**The Signal, Not Surface Rule.** Terracotta Red is a signal color. It may cover a large area exactly once per page, as a full-bleed band. Everywhere else it appears at the scale of a label, a line of text, a badge, or a pill — never as a card fill, never as a section background twice.

**The Deepened Accent Rule.** Terracotta Red never sits on Active Wash. Every ground in the system is neutral except this one, which is tinted toward the accent itself — so the accent loses separation against it and measures **4.25:1**, under the 4.5:1 threshold PRODUCT.md records as binding. On Active Wash the accent deepens to `{colors.on-active-bg}` (5.4:1). This is the same instinct as the hover rule — terracotta deepens, never lightens — applied to a ground instead of a state.

The failure was not a slip. Active Wash shipped with a defined background role and no defined foreground, so the current-page link and the PDF badge each independently reached for the accent and each independently landed at 4.25:1. **Any ground token added to this system names its text partner in the same commit.** The one deliberate exception is documented: the photo-frame caption sits on Active Wash in Stone at 4.64:1 — the tightest passing pair in the system, and a caption rather than an accent, so it must not be deepened into looking like a link. Darkening Active Wash would break it; recheck that pair before touching the token.

**The Accent Carries No Meaning Alone Rule.** Terracotta on a warm ground is intrinsically weak for red-blind vision, and deepening it only softens the problem. Simulated: Deep on Wash measures 5.4:1 normally but **3.4:1 under deuteranopia**, and white on Terracotta Red measures 5.1:1 but **3.0:1**. The neutrals are unaffected — Stone on Active Wash moves 4.64 → 4.58 — because only the accent depends on the red channel. WCAG is met on the real colors, so this is not a defect to fix; it is a limit to design within. Every terracotta signal therefore doubles up: the current page also carries 700 weight and a tinted chip, the PDF badge also spells "PDF" and repeats the format in the metadata line, the eyebrow is also separated by size and letterspacing. **Never let terracotta be the only thing distinguishing two states.** If a new signal cannot be read with the color removed, it is not finished.

**The Two-Floor Rule.** The neutral text ramp has exactly one floor per ground, and nothing lighter exists: **Stone** on light grounds, **Parchment Muted** on ink. There is deliberately no third, quieter step. A previous token, Ash (`#8F867B`), served that role at 3.35:1 on Aged Paper and 3.97:1 on Ink — both under the 4.5:1 threshold PRODUCT.md records as binding — so it was removed from the system rather than merely discouraged. If secondary text needs to recede further, reduce its size, weight, or tracking; never its contrast.

## Typography

**Display Font:** Lora (`serif` fallback) — headings, quotations, and institutionally significant figures
**Body Font:** Karla (`sans-serif` fallback) — running text, labels, navigation, controls

Both load from Google Fonts, and the request carries only the faces the stylesheet actually uses: Lora roman 400/600/700 plus italic 400/500, and Karla 400/500/700. Roman Lora 500 and Karla 600 were previously requested and never used; both are gone. **Adding a weight to the URL requires a declaration that uses it**, and removing the last user of a weight means removing it from the URL.

**Character:** A transitional serif with a slight calligraphic warmth against a compact, slightly condensed humanist sans. Lora carries the institution's age and formality; Karla keeps the practical layer legible and unfussy. The pairing is deliberately conventional — the design is not trying to be interesting where the content should be.

### Hierarchy

- **Display** (Lora 600, `clamp(36px, 6vw, 56px)`, 1.12): The home page headline. One per site.
- **Headline** (Lora 600, `clamp(32px, 5.5vw, 48px)`, 1.15, max 760px): Every interior page's `h1`.
- **Title** (Lora 600, `clamp(28px, 4.5vw, 36px)`, 1.2): Section headings. A slightly smaller variant (`clamp(24px, 4vw, 32px)`, white) titles the terracotta contribution band.
- **Subtitle** (Lora 600, three steps): 28px for the standalone subhead; 24px for card titles, box and document-group titles, and the contribution option titles (`clamp(24px, 3.5vw, 30px)`); 22px for governance body names (with a 2px terracotta underline) and the timeline year headings (set in terracotta).
- **Quote** (Lora italic 500, `clamp(22px, 3.5vw, 30px)`, 1.45, max 820px): The mission statement on ink. A smaller sibling (Lora italic 400, 18px, centered) carries the motto in the home page logo card.
- **Figure** (Lora 600): Institutional numerals — statistic numbers (38px, cream on ink), the NIF display (`clamp(24px, 5vw, 32px)`, `0.06em` tracking), and contact details (20px, 400 weight).
- **Lead** (Karla 400, 18px, 1.65, max 620px): The paragraph under every page title. The home page uses the same step at max 520px.
- **Body** (Karla 400, 16px, 1.7): Running prose. The historical narrative relaxes to 1.75.
- **Body Small** (Karla 400, 15px, 1.6–1.65): Card text, info boxes, governance member names.
- **Body Extra Small** (Karla 400, 14px, 1.6): Footer text and addresses, statistic labels, the photo-frame caption, small accent links, the form error.
- **Action** (Karla 700, 16px): Buttons and accent links. 15px for in-card links, 14px for small links.
- **Contact** (Lora 400, 20px, 1.5): Address, telephone and e-mail on the contactos page — serif, because they are institutional facts.
- **Label** (Karla 700, 13px, `0.14em`, uppercase): The eyebrow. Terracotta on light grounds, Warm Sand on ink, solid white on terracotta. It previously used white at 75% opacity there, which composited to 3.54:1; the eyebrow recedes by size and letterspacing against a 32px serif title, so it had no need to also recede by contrast.
- **Label Small** (Karla 700, 12px, `0.1em`, uppercase, Stone — Parchment Muted on ink): Field labels for data — Morada, Telefone, NIF, and the officer roles in governance cards.
- **Brand** (Lora 700, 20px, `0.01em`) over **Brand Sub** (Karla 400, 12px, `0.04em`, Stone): The header lockup only. A two-line pairing with no sibling elsewhere in the ramp — do not reuse either step for body content.

**The scale is eleven fixed steps: 12, 13, 14, 15, 16, 18, 20, 22, 24, 28, 38px**, plus the fluid `clamp()` ranges above. It previously carried 21 fixed sizes, 16 of them between 11.5px and 20px and several separated by only 0.5px (15 / 15.5 / 16 / 16.5 / 17 / 17.5 / 18). Those half-pixel neighbours were accumulated accident, not intent — imperceptible in use and impossible to apply consistently — so each was snapped onto the nearest real step. The steps above are now the whole vocabulary.

### Named Rules

**The Snap-To-Role Rule.** New text takes one of the documented roles, and therefore one of the eleven steps. If a size feels wrong, change role — never introduce an intermediate value. A half-pixel neighbour is not a design decision; nobody can see it, and it makes the scale unenforceable. The stylesheet is currently clean of them, and the design detector will flag the first one reintroduced.

**The Sixteen-Pixel Input Rule.** Text inputs never drop below 16px. Below that, iOS Safari zooms the viewport on focus, which on a form the visitor is already navigating by keyboard is a real usability failure rather than a cosmetic one.

**The Serif Numeral Rule.** Any figure carrying institutional weight is set in Lora, never Karla: the founding years, the statistics band, the NIF, the telephone number, the address. Numbers are evidence in this product, and the serif is what marks them as such. Karla numerals are for incidental data only — file sizes, dates in metadata.

**The Eyebrow Precedes Rule.** Every section opens with an uppercase letterspaced eyebrow above its serif heading. It names the section in one or two words and is the system's primary orientation device. A section heading without an eyebrow above it looks unfinished here.

**The Pretty Wrap Rule.** Every display, title, lead, prose, and quote class carries `text-wrap: pretty`. Ragged single-word last lines are treated as a defect, not a rendering detail. Extend it to any new type class.

## Layout

A single centered column: `1120px` maximum with `24px` inline padding, narrowing to `840px` for the document list, where a shorter measure aids scanning. Content is never wider than the container, but color always is.

**Vertical rhythm** is carried by a small set of fluid section paddings rather than margins: page heroes at `clamp(44px, 7vw, 72px)` top and `clamp(36px, 5.5vw, 56px)` bottom, the home hero slightly taller, standard sections at `clamp(48px, 7.5vw, 80px)`, large sections at `clamp(48px, 8vw, 88px)`. Three bands are deliberately fixed rather than fluid: the document list at `72px`, the contribution band at `64px`, the statistics band at `44px` — the tightest band in the system, because it reads as a rule across the page rather than a section.

**Every multi-column arrangement is intrinsic.** Splits, card grids, the statistics band, the footer, and the form's paired fields all use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` with the floor set to the content's natural minimum — 320px for editorial splits, 300px for cards, 280px for governance cards, 220px for footer columns, 200px for form fields, 150px for statistics. Columns collapse when they run out of room, with no breakpoint involved. Gaps are fluid on editorial splits (`clamp(32px, 5vw, 64px)`) and fixed at `28px` on card grids.

**Spacing** is applied through a flat utility scale of explicit gaps. The load-bearing steps are 8, 12, 16, 20, 24, 28, 36 and 48px; finer steps (2, 4, 6, 10, 14, 18) exist for label-to-value pairs and 40px for one hero stack. The scale is ad-hoc rather than ratio-derived — when extending it, reuse an existing step rather than adding a neighbour.

Two elements escape the flow: the header is sticky at `z-index: 50` with a translucent Aged Paper fill (`rgba(250, 247, 242, 0.96)`) and an `8px` backdrop blur; the history page's photo aside is sticky at `top: 100px`, clearing the header.

### Named Rules

**The One Breakpoint Rule.** The entire stylesheet contains exactly one media query — `min-width: 1024px` — and its only job is swapping the mobile menu for the desktop navigation. Every other responsive behavior is intrinsic. New layouts must adapt through `auto-fit`, `minmax`, `clamp()`, and `flex-wrap`; adding a second breakpoint requires a reason that intrinsic sizing genuinely cannot serve.

**The Full-Bleed Band Rule.** Section color changes always span the viewport. When two same-colored sections meet, separate them with a 1px hairline (`{colors.border}`), never with a gap or a shadow.

## Elevation & Depth

**This system is flat.** There are no shadows, no gradients, and no layered surfaces. Depth is communicated two ways and only two ways: full-bleed tonal banding (Aged Paper → White Surface → Ink → Terracotta Red as one scrolls) and 1px hairline borders that define edges without lifting them. A card is not "above" the page — it is a lighter region of the same plane, bounded by a rule.

The single translucency in the system is functional rather than decorative: the sticky header's 96%-opaque Aged Paper with an `8px` backdrop blur, which keeps text legible while scrolling without introducing a shadow to separate the header from the page. The hairline underneath does that job instead.

### Named Rules

**The No-Shadow Rule.** `box-shadow` is not part of this system. Depth comes from tonal banding and hairlines. The home page logo card previously carried the one exception (`0 20px 50px -30px rgba(46, 42, 38, 0.25)`); it has been removed so no precedent exists to cite. If an element seems to need lifting, change its ground or give it a border.

## Shapes

Softly rounded rectangles throughout, with radius scaled to the element rather than fixed globally — small controls are crisp, large surfaces are generous. Nothing is sharp-cornered, and nothing is circular except fully-rounded actions.

**Radius vocabulary:** `2px` the menu toggle's bars, capping a 2px line rather than shaping a container · `8px` desktop nav links and PDF badges · `10px` inputs, mobile nav links, the footer logo chip · `12px` the menu toggle and success panel · `14px` document rows · `16px` inset boxes, info boxes, the map embed · `20px` cards, governance cards, photo frames · `24px` the logo card, contribution option cards, the form card · `999px` all buttons and the nav CTA.

**Borders carry meaning.** A `1px solid` hairline in `{colors.border}` is the default edge on light surfaces. `1.5px solid` in `{colors.border-strong}` marks something interactive but unfilled — the outline button and the menu toggle — and shifts to Terracotta Red on hover. A `2px solid` terracotta underline marks a governance body's name, the only place a border is used as emphasis rather than containment. On ink grounds, borders become translucent paper (`rgba(250, 247, 242, 0.15)`) rather than switching to a different token.

### Named Rules

**The Radius Tracks Scale Rule.** Radius grows with the element: 8–10px for controls, 12–16px for insets and small panels, 20–24px for cards and major surfaces, 999px for actions. A 24px radius on a small control, or 8px on a large card, breaks the system regardless of how it looks in isolation.

**The Dashed-Means-Absent Rule.** A dashed border (`1px dashed {colors.border-strong}`) marks **missing media** — a photo frame with no photograph, which fills with Active Wash and shows an italic caption naming what should be there. This is the visual form of PRODUCT.md's rule that absent evidence is stated, not filled with a stock substitute. Dashed borders mean nothing else; do not use them for emphasis, drafts, or notes.

## Components

Components are **softly tactile**: generous radii, roomy padding, fully-rounded actions. Approachable and hand-warm rather than austere — the parlour's furniture, not an office's.

### Buttons

- **Shape:** Fully rounded pill (`{rounded.pill}`), `14px 30px` padding, Karla 700 at 16px. Wide variants extend inline padding to 34px (band CTAs) or 36px (form submit).
- **Primary:** Terracotta Red ground, white text. Hover deepens the ground to Terracotta Deep; the text stays white.
- **Outline:** Transparent ground, Ink text, `1.5px` Border Strong stroke. Hover shifts both stroke and text to Terracotta Red. Used as the secondary action beside a primary, and as the sole action on cream grounds where a filled button would over-signal.
- **Inverse:** White ground, Terracotta Red text — the only button used on the terracotta band. Hover settles the ground to Aged Paper.
- **Focus:** a 2px Terracotta Red ring at 2px offset, inherited from the site-wide `:focus-visible` rule. It inverts to white inside the terracotta band and to Parchment inside the footer and dark cards, so it always clears 3:1 against its ground.
- **Inert (sending):** Border Strong ground, Warm Graphite text, `cursor: progress` — 6.2:1, built from existing tokens rather than an opacity trick, because a faded pill would read as damaged rather than busy. Driven by `aria-disabled="true"`, never the `disabled` property: a disabled element is blurred by the browser, which drops a keyboard user out of the form mid-task. Since `aria-disabled` does not block activation, the handler carries its own re-entrancy guard.
- **State gap:** no transitions on any button — every state change is instant. That is a gap rather than an intention, but it suits the still register; if motion is ever added, it belongs to hover and focus only.

### Cards / Containers

- **Corner Style:** `{rounded.2xl}` for standard and governance cards, `{rounded.3xl}` for the larger option, form, and logo cards.
- **Background:** White Surface on Aged Paper grounds; Aged Paper for form cards and info boxes on white grounds; Ink for the emphasized contribution option, whose title flips to Aged Paper.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** `1px solid {colors.border}`, omitted on ink-ground cards where the tonal shift is the edge.
- **Internal Padding:** `36px` standard cards, `32px` governance cards, fluid `clamp(26px, 4vw, 44px)` for option cards, `24px` inset boxes, `22px` info boxes.
- **Interaction:** Linked cards and document rows shift their border to Terracotta Red on hover. The border is the only thing that changes — no lift, no ground change, no scale.

### Inputs / Fields

- **Style:** White Surface ground, `1px solid {colors.border-strong}`, `{rounded.sm}` radius, `12px 14px` padding, Karla 15.5px in Ink. Labels sit above in Karla 700 at 13.5px in Warm Graphite. Textareas resize vertically only.
- **Focus:** Border shifts to Terracotta Red, reinforced by the site-wide 2px Terracotta Red ring at 2px offset.
- **Placeholder:** Stone (`{colors.muted}`) at 5.6:1 on white — distinct from entered text, which is Ink.
- **Success:** A dedicated panel replaces the submit row on send — Success ground, `1px` Success Border, `{rounded.md}`, Karla 700 in Success Ink.
- **Error:** Inline Terracotta Deep text at 14px 700, beside the submit button.
- **Announcement:** a permanent `role="status"` region, visually hidden with `.sr-only`, sits inside the form and receives the panel's text when state changes. The visible panels are for sighted users; the region is what screen readers hear. Never rely on revealing a styled panel alone — a live region that appears at the same moment as its content is not reliably announced.
- **Focus on send:** the success panel carries `tabindex="-1"` and takes focus when it appears, because the submit row it replaces was holding focus. Any panel that replaces the control that summoned it inherits this obligation.
- **Autofill:** every field that maps to a standard token declares `autocomplete` (`name`, `email`). WCAG 1.3.5 is an AA criterion, not a convenience.
- **Works without JavaScript:** the form declares a real `action` and `method`, so a failed script degrades to a native POST rather than a dead button. The scripted path calls `preventDefault()` and takes over from there; the unscripted path ends on the endpoint's own confirmation page rather than back on the site, which is the accepted cost of keeping every URL relative.

### Navigation

- **Brand:** 44px logo beside a two-line lockup — Lora 700 at 19px over Karla 11.5px at `0.04em` in Stone.
- **Desktop links** (≥1024px): Karla 500 at 15px in Ink, `8px 12px` padding, `{rounded.xs}` radius. Hover shifts text to Terracotta Red. The active page gets Deep on Wash text at 700 on an Active Wash ground, driven by a `body[data-page]` / `[data-nav]` attribute pair rather than a class. The active selector names the `<a>` element (`a[data-nav="…"]`) purely to outrank the hover rule: without that, hovering the current page would lighten it back to Terracotta Red, and the current page should not react to a pointer at all — there is nowhere for it to go.
- **Nav CTA:** A terracotta pill sitting outside the link rhythm, present in both navigations.
- **Mobile** (<1024px): A 46px square toggle with `1.5px` Border Strong stroke and `{rounded.md}` radius, whose three bars animate into a cross (`0.2s` on transform and opacity — the only transition in the entire system). The open panel is a full-width Aged Paper column beneath the header, links at 17px with `13px 14px` padding.
- **Disclosure:** the toggle carries `aria-expanded` and `aria-controls="nav-mobile"`; the panel is revealed by `display` toggling, so exactly one navigation landmark is in the accessibility tree at any viewport. Escape closes it and returns focus to the toggle, and crossing the 1024px breakpoint closes it too — otherwise the open state strands `aria-expanded="true"` on a button that is no longer rendered.
- **Forced colors:** the three toggle bars are pure `background`, which Windows high-contrast mode overrides with the canvas color, erasing the icon. A `forced-colors: active` block repaints them in `CanvasText`. Any future glyph built from background fills alone owes the same treatment.

### Statistics Band

Four centered figures on Ink, each a Lora 600 38px numeral in Aged Paper above a 14px Karla label in Parchment Muted. Collapses intrinsically from a 150px floor. The shortest band in the system at `44px` padding — it reads as a horizontal rule of facts rather than a section, and should stay that way.

### Photo Frame

A fixed-height region (380px, 340px on the history page) with `{rounded.2xl}` radius, Active Wash fill, and a `1px dashed` Border Strong edge, centering an italic Stone caption that names the intended photograph. When an image is present it covers the frame absolutely with `object-fit: cover`; a script hides broken images so the frame and its caption return. This is the system's mechanism for honestly declaring absent imagery — the most product-specific component here.

### Document Row

A horizontal Aged Paper row (`{rounded.lg}`, `18px 22px`) holding a serif Deep on Wash PDF badge on Active Wash, a two-line name and metadata block, and a right-aligned "Descarregar ↓" in Terracotta Red 700. Wraps rather than truncating. Grouped under Lora 26px headings as a `<ul>`, with 10px between rows and 48px between groups.

The name block sets `min-width: 0` and the name itself `overflow-wrap: anywhere`. Publishing is "commit a PDF and push" with no filename review, so the title is whatever someone typed — and a long name with no spaces or hyphens (a scanner dump, a run-together title) would otherwise refuse to shrink inside its flex row, push past the row, and make the whole page scroll sideways on a phone. The row grows taller instead. Treat any component fed by filenames as receiving hostile input.

Rendered at build time by `build.py` from the contents of `documentos/` — no JavaScript, no network request, no loading or error state. The badge and the arrow are `aria-hidden`, so each row's accessible name is the document title, its format and size, then "Descarregar". This is the primary-audience component — the thing the scrutineer came for — and it should stay the most legible, least decorated element on the site.

## Do's and Don'ts

### Do:

- **Do** keep every section on one of the four grounds, full-bleed, with a 1px hairline where two same-colored sections meet.
- **Do** set institutionally significant numerals in Lora — years, statistics, the NIF, the telephone number.
- **Do** open sections with an uppercase letterspaced eyebrow: Terracotta Red on light grounds, Warm Sand on ink, solid white on terracotta.
- **Do** name a text partner for every new ground token in the same commit, and measure the pair before shipping it.
- **Do** build new layouts with `auto-fit` / `minmax(min(100%, Npx), 1fr)` and `clamp()`, so they adapt without a breakpoint.
- **Do** scale radius to the element — 8–10px controls, 12–16px insets, 20–24px cards, 999px actions.
- **Do** signal hover on containers by shifting the border to Terracotta Red, and on filled buttons by deepening the ground.
- **Do** let new interactive elements inherit the site-wide `:focus-visible` ring (2px Terracotta Red at 2px offset), and check it clears 3:1 against whatever ground it lands on — invert it to white or Parchment on dark and terracotta grounds.
- **Do** state absent imagery with the dashed photo frame and a caption naming what belongs there.
- **Do** carry `text-wrap: pretty` onto any new display or prose class.
- **Do** keep text inputs at 16px or above, so iOS Safari does not zoom the viewport on focus.
- **Do** announce dynamic state through the permanent `.sr-only` `role="status"` region, not by revealing a styled panel alone.

### Don't:

- **Don't** add a `box-shadow`. The system is flat; change the ground or add a border instead.
- **Don't** introduce a neutral lighter than Stone on light grounds or Parchment Muted on ink. Those are the floors; recede with size or weight instead of contrast.
- **Don't** fill a card or a second section with Terracotta Red. One full-bleed terracotta band per page is the ceiling; everywhere else it is a signal at label scale.
- **Don't** use White Surface as the page ground. Aged Paper is the resting state; white is for raised content.
- **Don't** introduce a second accent hue, or extend the success green into a warning/info family. One accent, one semantic pair.
- **Don't** add a media query for layout. The 1024px breakpoint belongs to navigation alone.
- **Don't** use dashed borders for anything but missing media.
- **Don't** set `outline: none` without replacing the focus indicator.
- **Don't** use true black or pure grey. Ink is a warm near-black; every neutral in the system carries warmth.
- **Don't** add motion beyond state transitions. The menu toggle's 0.2s cross is the system's only animation, and the register is deliberately still.
