# RD TRAVELS — DESIGN SYSTEM
## Canonical visual specification for Claude Design

> **Paste this entire file into Claude Design's design system setup. Upload the visual-reference HTML/CSS files alongside as concrete examples. Toggle Published. Every project that follows will use this system automatically.**

---

## 1. Brand essence

RD Travels is an Ahmedabad-based travels operator since 2015 — providing cars, Tempo Travellers, and buses with professional drivers for outstation, group, and special-occasion travel. The brand is **direct, hospitable, and Indian**. The visual language must signal a reliable operator (not a broker, not a luxury agency, not a tech startup).

**Aesthetic direction:** White + saffron. Single sans-serif family. Clean surfaces with confident accent moments. Vehicles shown explicitly. Driver-included messaging on every vehicle. Transparent pricing surfaced as a design feature.

**Reference equivalents:** Indian hospitality (warm, direct), Apple-clean info architecture, light editorial restraint, but tuned to function like a regional service business — not a global luxury brand.

---

## 2. Color system

**Ratio: 70% white surfaces / 30% saffron accents.** Backgrounds dominate. Saffron punctuates.

### Saffron — the brand accent
| Token | Hex | OKLCH | Use |
|---|---|---|---|
| `--color-saffron` | `#E87722` | `oklch(0.66 0.16 47)` | Primary CTAs, accent phrase color, key icons. The brand's fingerprint. |
| `--color-saffron-deep` | `#C45F1A` | `oklch(0.55 0.15 46)` | Saffron text on white (passes WCAG AA), CTA hover state |
| `--color-saffron-soft` | `#FFE9D5` | `oklch(0.93 0.04 60)` | Soft fills behind icons, scenario card backgrounds, badge fills |
| `--color-saffron-50` | `#FEF6E8` | `oklch(0.97 0.02 75)` | Subtle hover backgrounds, selected row tint |

### White & surfaces — the dominant 70%
| Token | Hex | OKLCH | Use |
|---|---|---|---|
| `--color-white` | `#FFFFFF` | `oklch(1 0 0)` | Main page background, card surfaces |
| `--color-white-warm` | `#FBFAF7` | `oklch(0.98 0.005 80)` | Section bands for alternation, subtle elevation |
| `--color-surface-soft` | `#F5F2EC` | `oklch(0.94 0.01 80)` | Footer band, deep-content sections, table stripes |

### Ink — text and dark surfaces (NEVER pure black)
| Token | Hex | OKLCH | Use |
|---|---|---|---|
| `--color-ink` | `#1A1815` | `oklch(0.18 0.005 60)` | Primary text, headlines (warm near-black) |
| `--color-ink-soft` | `#4A4640` | `oklch(0.40 0.005 60)` | Body paragraphs, lead text |
| `--color-ink-mute` | `#7A746A` | `oklch(0.55 0.01 70)` | Captions, meta text, inactive states |
| `--color-ink-deep` | `#0F0E0C` | `oklch(0.12 0.005 60)` | Footer background, deep CTA bands |

### Semantic
| Token | Hex | Use |
|---|---|---|
| `--color-whatsapp` | `#1F6F3F` | WhatsApp CTAs only — instantly recognizable |
| `--color-whatsapp-deep` | `#155A30` | WhatsApp CTA hover state |
| `--color-success` | `#1F6F3F` | Verified badges, tick indicators |
| `--color-success-bg` | `#E1F0E5` | Success badge backgrounds |
| `--color-error` | `#A3322A` | Form validation only |

### Color usage rules

1. **The 70/30 ratio is non-negotiable.** White is the canvas. Saffron is paint. Inverting this (saffron-dominant) reads as "sale" or "advertising," not "operator."
2. **Saffron buttons** use `--color-saffron` background with white text (16px+ semi-bold passes AA Large).
3. **Saffron text on white** must use `--color-saffron-deep` (passes AA Normal at 16px).
4. **Pure black is forbidden.** All text uses `--color-ink` (warm near-black with slight brown undertone).
5. **WhatsApp green is acceptable** as a CTA color — it adds platform recognition and stays culturally consistent with the brand's "direct messaging" promise.
6. **Backgrounds alternate** between `--color-white` and `--color-white-warm` to give the page rhythm without introducing color noise. Never alternate using saffron-tinted backgrounds.

---

## 3. Typography

**Single family: Plus Jakarta Sans.** No secondary typeface. No display serif. Hierarchy is created entirely through weight, size, color, and tracking.

### Why Plus Jakarta Sans
- Designed by Tokotype (Indonesia, 2020) — South Asian regional context built in
- 8 weights (200–800) with matching italics — full hierarchy in one family
- Excellent tabular numerals — pricing tables align cleanly
- Geometric warmth — professional but not cold
- Slightly rounded edges signal hospitality without sacrificing reliability
- Free on Google Fonts, web-optimized, variable font version available

### Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap">
```

### Type scale (fluid, mobile → desktop)

| Role | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| **Display H1** (hero) | `clamp(2.5rem, 5.5vw, 4.5rem)` | 800 | -0.025em | 1.05 |
| **H2** (section) | `clamp(2rem, 4vw, 3rem)` | 700 | -0.02em | 1.1 |
| **H3** (subsection) | `clamp(1.4rem, 2.5vw, 1.75rem)` | 700 | -0.015em | 1.2 |
| **H4** (card title) | `1.15rem` | 600 | -0.01em | 1.3 |
| **Lead** (intro paragraph) | `clamp(1.1rem, 1.5vw, 1.3rem)` | 400 | normal | 1.55 |
| **Body** | `1rem` | 400 | normal | 1.65 |
| **Body small** | `0.9rem` | 400 | normal | 1.6 |
| **Eyebrow** (section labels) | `0.8rem` | 600 | 0.16em UPPERCASE | 1 |
| **Caption / meta** | `0.85rem` | 500 | normal | 1.4 |
| **Button** | `0.95rem` | 600 | normal | 1 |
| **Decorative numeral** (route cards) | `2.4rem` | 200 | -0.04em | 1 |

### Typographic signature: the saffron accent phrase

This replaces the rejected italic-serif flourish. It is the brand's typographic fingerprint.

**Rule:** Every H1 and H2 contains exactly one phrase wrapped in `<span class="accent">`. That phrase is colored `--color-saffron-deep` and otherwise inherits the heading's weight and size. No italic. No font-family change. Color is the entire flourish.

**Example:**
```html
<h1>Cars, Tempo Travellers & Buses, <span class="accent">with driver.</span></h1>
<h2>From Ahmedabad to <span class="accent">anywhere in India.</span></h2>
<h2>Booking takes <span class="accent">3 steps</span> and 5 minutes.</h2>
```

The accent phrase is always:
- The most important content phrase in the heading (the value, not the connector)
- One coherent unit, not random words
- Colored `--color-saffron-deep` (#C45F1A) for AA contrast on white
- Inheriting all other heading properties

### Decorative numerals
Route cards, step numbers, and milestone markers use **Plus Jakarta Sans 200 weight at 2.4rem in `--color-saffron`**. The thinness creates visual lightness; the saffron color provides the warm punctuation. This replaces the rejected serif italic numerals.

---

## 4. Spacing scale

8-point base, used for all margins, padding, gaps.

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
```

### Section padding rule
Vertical section padding is `clamp(--space-8, 7vw, --space-10)` — generous on desktop, breathing on mobile. No section is shorter than `--space-7` of vertical padding.

---

## 5. Layout

| Token | Value | Use |
|---|---|---|
| `--max-width` | `1200px` | Main content max-width |
| `--max-width-prose` | `720px` | Long-form reading (about page, route notes) |
| `--container-padding` | `clamp(20px, 4vw, 32px)` | Container side padding |

**Grid patterns**
- Hero: `grid-template-columns: 1.05fr 0.95fr` (slight asymmetry, text-leading)
- Vehicle showcase: `repeat(auto-fit, minmax(260px, 1fr))`
- Route cards: `repeat(auto-fit, minmax(320px, 1fr))`
- Pillars / values: single column, vertical stack with hairline dividers
- FAQ: single column, max-width `--max-width-prose`

No 12-column rigid grid. Editorial feel comes from intentional asymmetry, not Bootstrap symmetry.

---

## 6. Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | `4px` | Form inputs, small chips |
| `--radius-md` | `10px` | Standard buttons, secondary cards |
| `--radius-lg` | `16px` | Service cards, vehicle cards, content blocks |
| `--radius-xl` | `24px` | Hero panels, large feature blocks |
| `--radius-pill` | `999px` | Primary CTAs, trust chips, navigation pill |

---

## 7. Shadows

```css
--shadow-sm: 0 1px 2px rgba(26, 24, 21, 0.04);
--shadow-md: 0 4px 14px rgba(26, 24, 21, 0.08);
--shadow-lg: 0 12px 36px rgba(26, 24, 21, 0.10);
--shadow-saffron: 0 4px 14px rgba(232, 119, 34, 0.18);  /* CTA shadow on hover */
--shadow-focus: 0 0 0 4px rgba(232, 119, 34, 0.20);     /* Focus ring */
```

Shadows are warm-tinted (ink-based, not pure black-based) and subtle. Saffron-tinted shadow used only on saffron CTAs for emphasis on hover.

---

## 8. Components — canonical specifications

These are the named components Claude Design must understand. Refer to them by these names when iterating.

### `.btn-primary` — Saffron CTA
```
Background: --color-saffron
Text: white, weight 600, 0.95rem
Padding: 14px 28px
Border-radius: --radius-pill
Hover: -2px translateY, --shadow-saffron, background --saffron-deep
Focus: --shadow-focus outline
```

### `.btn-whatsapp` — WhatsApp green CTA
```
Background: --color-whatsapp
Text: white, weight 600, 0.95rem
Padding: 14px 28px
Border-radius: --radius-pill
Includes WhatsApp icon (18px) inline-left, gap 8px
Hover: -2px translateY, background --color-whatsapp-deep
```

### `.btn-outline` — Secondary CTA
```
Background: transparent
Border: 1.5px solid --color-ink
Text: --color-ink, weight 600, 0.95rem
Padding: 14px 28px
Border-radius: --radius-pill
Hover: background --color-ink, text white
```

### `.btn-ghost` — Tertiary text-only CTA
```
Background: transparent, no border
Text: --color-ink, weight 600, 0.95rem with arrow → suffix
Padding: 8px 0
Hover: text --color-saffron-deep, arrow translates +4px
```

### `.nav` — Site navigation
- Sticky on scroll, white background, blur backdrop, subtle bottom hairline (`1px solid rgba(26,24,21,0.08)`)
- Brand mark: 32px circular saffron block with white "R" letter, plus "RD Travels" wordmark in 600 weight
- Links: `--color-ink-soft`, weight 500, hover changes to `--color-ink`
- Right side: WhatsApp green pill CTA
- Mobile: hamburger reveals full-bleed nav drawer

### `.hero` — Homepage hero
- Two-column grid `1.05fr 0.95fr` at desktop, stacks at <880px
- LEFT: eyebrow → H1 (with saffron accent phrase) → lead paragraph → trust chip row → dual CTA row → stat strip
- RIGHT: vehicle illustration card OR fleet photo card OR typographic showcase card (see below)
- Background: white
- Padding: `clamp(--space-8, 8vw, --space-10)` vertical

### `.hero-visual` — Hero right-side card
Three options for the hero visual block (pick based on what assets are available):

**Option A — Fleet showcase card (preferred when even basic illustrations exist)**
- White card, `--radius-xl`, `--shadow-md`
- Stack of 3 vehicle silhouettes (sedan, Tempo, bus) with small labels and seat counts
- Saffron-soft fill behind each silhouette
- Caption strip: "Cars · Tempo Travellers · Buses · with driver"

**Option B — Numbers card (typographic, no imagery needed)**
- White card with saffron-soft border, `--radius-xl`
- Three large numbers: "10+ years" / "9–56 seater" / "Pan-India"
- Each number in Plus Jakarta Sans 200 weight, 3rem, saffron color
- Label below in eyebrow style

**Option C — Live-status card (functional, signals "we're available now")**
- White card, `--radius-xl`, top border 4px saffron
- Small pulsing green dot + "Direct from operator · responding now" label
- Below: 3-line "What we'll send you" mini-checklist (e.g., "✓ GST-itemised quote / ✓ Driver name & phone / ✓ Vehicle photo")

### `.trust-chip` — Inline trust pill
```
Background: --color-white-warm
Border: 1px solid rgba(26,24,21,0.08)
Border-radius: --radius-pill
Padding: 8px 14px
Text: --color-ink-soft, weight 500, 0.85rem
Includes a small saffron dot (6px) on the left
```

### `.vehicle-card` — Service/vehicle showcase card (the most important new component)
```
Background: --color-white
Border: 1px solid rgba(26,24,21,0.08)
Border-radius: --radius-lg
Padding: --space-6
Vertical stack
```

Contents top-to-bottom:
1. **Vehicle illustration / icon** — 80×80, saffron-soft fill, saffron line-art icon
2. **Category label** — eyebrow style, `--color-saffron-deep`, e.g., "CAR WITH DRIVER"
3. **H4 vehicle name** — e.g., "Toyota Innova Crysta"
4. **Capacity line** — "Seats 6 + driver" in `--color-ink-mute`, weight 500
5. **Description** — 2-line prose in `--color-ink-soft`
6. **Price line** — "**₹16/km** outstation · **₹3,800** / 8-hour package" with prices in weight 700 `--color-ink`, units in 500 `--color-ink-mute`
7. **Driver-included indicator** — small green tick + "Includes professional driver, fuel, AC" in 0.85rem `--color-ink-mute`
8. **Ghost CTA** — "Book this vehicle →"

Hover: -4px lift, `--shadow-md`, border becomes `--color-saffron`.

### `.route-card` — Route showcase card
```
Background: --color-white
Border: 1px solid rgba(26,24,21,0.08)
Border-radius: --radius-lg
Padding: --space-6
Position: relative
```

Contents:
1. **Decorative numeral** — pinned top-right, Plus Jakarta Sans 200 weight, 2.4rem, `--color-saffron` color, e.g., "01"
2. **H3 route name** — "Ahmedabad → Mumbai International Airport", padded right to clear numeral
3. **Meta strip** — distance · drive time · trip type, separated by "·", in `--color-ink-mute` 0.85rem, with dashed bottom border
4. **Price call-out** — "From ₹6,800 one-way (sedan)" with the number in weight 700 `--color-saffron-deep`
5. **Description** — 2–3 line prose
6. **Ghost CTA** — "See route detail →"

### `.pillar` — Numbered value proposition
```
Display: grid
Grid-template-columns: 80px 1fr
Padding: --space-6 0
Border-bottom: 1px solid rgba(26,24,21,0.08)
```

LEFT column: oversized decorative numeral (Plus Jakarta Sans 200, 2.4rem, `--color-saffron`)
RIGHT column: H3 + body paragraph

### `.faq-item` — Accordion FAQ item
```
Border-bottom: 1px solid rgba(26,24,21,0.08)
Padding: --space-5 0
```

Header row (always visible):
- Question in H4 style (1.15rem, weight 600)
- Right-side circular plus/minus icon, 32px, `--color-white-warm` fill, `--color-ink` stroke

Body (revealed on click):
- max-height transition 0 → 600px, 0.4s ease-out (NO spring/bounce)
- Body text in 1rem, `--color-ink-soft`, line-height 1.65

### `.cta-band` — Section-level CTA strip
Three variants:

**`.cta-band--saffron`** (full bleed, used as final CTA):
- Background: `--color-saffron`
- Text: white
- Centered H2, lead paragraph, dual CTAs
- Padding: `--space-9` vertical

**`.cta-band--ink`** (deep neutral, used for premium positioning):
- Background: `--color-ink-deep`
- Text: white
- Same structure as saffron version

**`.cta-band--soft`** (subtle, used for mid-page CTAs):
- Background: `--color-white-warm`
- Text: `--color-ink`
- Same structure

### `.booking-bar` — Quick quote form
```
Background: --color-white-warm
Border: 1px solid rgba(26,24,21,0.08)
Border-radius: --radius-lg
Padding: --space-6
Box-shadow: --shadow-sm
```

Layout: 5-column grid at desktop (vehicle / pickup / destination / date / submit button), stacks below 880px.
- Eyebrow labels above each input in `--color-saffron-deep`
- Inputs: white background, 1px ink border, `--radius-md`, focus state shows `--shadow-focus`
- Submit button: `.btn-primary` (saffron)
- Microcopy below: "No spam. No advance to enquire. GST-clear pricing." in 0.85rem `--color-ink-mute`

### `.scenario-card` — One-tap WhatsApp deep-link card
For the contact page. Each card is a fully-clickable WhatsApp deep-link.
```
Background: --color-white
Border: 1px solid rgba(26,24,21,0.08)
Border-radius: --radius-lg
Padding: --space-5
Display: flex, align-items center, gap 16px
```

Contents: emoji icon (40px) + label H4 + arrow → on the right.
Hover: -2px translateY, border becomes `--color-saffron`, background slight `--color-saffron-50`.

### `.mobile-cta-bar` — Sticky bottom mobile CTA
- `position: fixed; bottom: 0; left: 0; right: 0`
- Visible only at `max-width: 760px`
- White background with backdrop-blur, top hairline border
- Two flex-1 buttons: WhatsApp green + saffron Call
- Padding: 12px 16px with `padding-bottom: max(12px, env(safe-area-inset-bottom))`
- Height: 64px

### `.footer` — Site footer
- Background: `--color-ink-deep`
- Text: white-warm
- 4-column grid (brand+blurb / explore / top routes / get in touch)
- Brand mark adapted for dark background (saffron block, white "R")
- Bottom row with copyright + credentials line
- Padding: `--space-9` vertical, `--space-7` bottom-row vertical separator

---

## 9. Iconography

- **Style:** Inline SVG, 1.6px stroke weight, rounded line-cap, no fills
- **Color:** Match parent text color via `currentColor` — except in vehicle card icons, where they use `--color-saffron`
- **Sizes:** 22px in card icons, 18px in buttons, 14px in trust chips
- **Vehicle icons (custom):** Sedan (4-door silhouette), MPV (rounded box on wheels), SUV (taller box on wheels), Tempo Traveller (extended van silhouette), Mini Bus (compact bus silhouette), Volvo Coach (long bus with windows)
- **Forbidden:** Filled icons except in WhatsApp logo, multi-color icons, emoji as primary UI icons (emoji is OK in scenario cards as a tonal choice)

---

## 10. Imagery direction

### Until real photography exists
- **Hero visual:** Use Option A (fleet silhouettes) or Option B (typographic numbers card). Avoid stock photography.
- **Vehicle cards:** Custom silhouette icons in saffron line-art on saffron-soft background.
- **Route cards:** No imagery needed. The numerals + type composition is the visual.
- **About page founder block:** Saffron block with white "R" monogram + name typeset clearly. Replace with portrait when available.

### When real photography is added
- **Founder portrait:** Outdoor or office, soft natural light, 4:5 aspect, slight warm grade
- **Fleet photography:** Wide environmental shots — vehicles parked at office or at a known Ahmedabad location (Sabarmati riverfront, Kankaria), golden hour. NOT studio cutouts.
- **Driver photos:** Square 1:1 with proper consent, professional uniform if used, warm-graded
- **Color grade target:** All photos lean toward `--color-white-warm` warmth (slightly amber undertone, never cool blue)

### Forbidden imagery
- Generic Shutterstock travel hero photos (couples, sunsets, drone shots of highways)
- Vehicle stock photos (clearly catalog/manufacturer images)
- Lens flare, heavy filter grading, overlay text on busy photos

---

## 11. Motion principles

- **Page load:** Hero elements fade-in + 12px translateY → 0, staggered 80ms apart, 0.7s total settle
- **Scroll reveal:** IntersectionObserver-driven on cards and section headers, 16px translateY → 0, opacity 0 → 1, 0.7s ease-out, 12% threshold
- **Hover (cards):** -4px translateY, shadow scales up, border becomes `--color-saffron`, transition 0.3s ease-out
- **Hover (buttons):** -2px translateY + saffron-tinted shadow, transition 0.25s ease-out
- **FAQ accordion:** max-height 0 → 600px, opacity 0 → 1, 0.4s ease-out (NOT spring/bounce)
- **Mobile CTA bar:** appears at scroll >200px, slides up from bottom, 0.3s ease-out

### Forbidden motion
- Parallax scrolling (any kind)
- Infinite scroll marquees
- Mouse-trailing cursors / cursor effects
- Scroll-jacking / scroll-snap on the homepage
- Auto-playing carousels with arrows
- Spring/bounce easing on functional elements

### Reduced motion
`@media (prefers-reduced-motion: reduce)` removes all transitions and animations. Honor this fully.

---

## 12. Voice in UI

- **Buttons** are verb-object: "Get instant quote", "Book Mumbai airport drop", "WhatsApp us your trip". Never "Click here", "Submit", "Learn more".
- **Eyebrows** are 1–3 words: "WHY DIRECT", "OUR FLEET", "MOST-BOOKED ROUTES", "SINCE 2015".
- **Empty states** are specific and dry: "No quotes yet — WhatsApp us, most go out in 15 minutes."
- **Error states** are honest: "That phone number doesn't look right. Indian numbers start with 6, 7, 8, or 9."
- **Loading states** are plain: "Sending to WhatsApp…" Never "Magic happening!"
- **Microcopy under forms** builds trust: "No spam. No advance to enquire. GST-clear pricing on every quote."

---

## 13. Accessibility

- **Color contrast:** All ink-on-bg combinations hit WCAG AA (4.5:1) minimum. Saffron-deep on white passes AA. White on saffron passes AA Large (used only on 16px+ semibold buttons).
- **Focus states:** Every interactive element gets a `--shadow-focus` ring (4px saffron at 0.20 opacity) on `:focus-visible`.
- **Form labels:** Always visible, never placeholder-only.
- **Tap targets:** Minimum 44×44px on mobile.
- **Skip link:** "Skip to main content" at the top of every page.
- **Reduced motion:** Honored fully (transitions become 0.01ms).
- **Screen-reader text:** `.sr-only` class for icon-only buttons (menu toggle, close icons).
- **Semantic HTML:** Proper landmarks (header, nav, main, footer), heading hierarchy (no skipped levels).

---

## 14. Quick reference card

```
COLOR        White (70%) + saffron #E87722 (30%)
TYPE         Plus Jakarta Sans, all weights 200–800
SIGNATURE    Saffron-colored phrase in headlines (no italic, no serif)
LAYOUT       Asymmetric grids, max-width 1200px, prose 720px
RADIUS       4 / 10 / 16 / 24 / 999px
SHADOWS      Warm-tinted, subtle, saffron-tinted on CTA hover only
MOTION       Page-load reveal + hover lift only. No parallax. Reduced-motion honored.
VOICE        Direct, specific, hospitable. Verb-object CTAs. No "amazing".
DRIVERS      Always visible. Every vehicle says "with driver" or shows a driver indicator.
```

That's the system. When the design drifts — saffron creeping past 30%, italic flourishes returning, vehicles shown without drivers, prose getting flowery — return to this card.
