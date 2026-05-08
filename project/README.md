# RD Travels — Design System

Ahmedabad's direct travels operator since 2015. Cars, Tempo Travellers, and buses **with professional drivers**. This system is the canonical visual + voice spec for any RD Travels surface — marketing site, slide decks, WhatsApp creatives, print collateral.

---

## Who this is for

A designer or design agent producing artifacts for RD Travels. Read this README first, then `BRAND_BRIEF.md` (positioning + voice), then `DESIGN_SYSTEM.md` (token-level spec).

## What RD Travels actually is

A **vehicle-with-driver rental operator** for outstation, group, and special-occasion travel within India. Customers call/WhatsApp/fill a form; RD dispatches a vehicle **with a trained, employed driver** to pick them up. The customer is always a passenger, never the driver.

It is **not**:
- a self-drive rental (Zoomcar, Revv)
- a cab aggregator (Uber, Ola)
- a bus-ticket marketplace (RedBus)
- a luxury travel agency (Black Tomato)

It is the standard Indian "**travels**" model — a regional service business with a 10-year track record.

## Products covered

There is one surface: a **mobile-first marketing website** (Home, About, Contact). 60–70% of traffic is on phones. WhatsApp is the dominant booking channel.

A canonical reference HTML + CSS implementation lives in `reference/` for fidelity checks. The UI kit in `ui_kits/website/` is the React-component recreation.

## Sources used

- `uploads/BRAND_BRIEF.md` → root `BRAND_BRIEF.md` (positioning, voice, audience, anti-patterns)
- `uploads/DESIGN_SYSTEM.md` → root `DESIGN_SYSTEM.md` (tokens, components, motion)
- `uploads/index.html` + `uploads/styles.css` → `reference/` (canonical HTML/CSS)
- `uploads/Screenshot 2026-05-06 at 12.50.18 PM.png` … `12.51.16 PM.png` (12 screenshots of the reference page; visual sanity-check only)
- No Figma, no codebase repo. Reference HTML/CSS is the source of truth.

---

## Three rules that override everything

1. **70/30 white-to-saffron is non-negotiable.** White surfaces dominate. Saffron only fires at conversion moments — CTAs, accent phrases in headlines, decorative numerals, the final CTA band. Inverting it reads as "advertising," not "operator."
2. **Brand fingerprint = exactly one phrase per H1/H2 wrapped in `<span class="accent">`** colored saffron-deep `#C45F1A`. Same weight, same size. **No italic. No serif switch.** Color is the entire flourish.
3. **Every vehicle card surfaces "with driver" three ways:** saffron eyebrow (`CAR WITH DRIVER` / `TEMPO WITH DRIVER` / `BUS WITH DRIVER`), capacity line (`Seats X + driver`), and a green-tick `Includes professional driver, fuel, AC` indicator.

---

## Content fundamentals

### Voice
**Direct. Specific. Hospitable. Knowledgeable. Never effusive.** Indian hospitality — warm but not gushing, confident not desperate.

- "Book direct. Get a quote in 60 seconds." — not "Embark on a journey of seamless travel."
- "₹11/km outstation" — not "competitive rates."
- "No advance to enquire" — not "free quote, no obligation."
- "We've run this route for ten years — we know which dhaba is open at 4am on NH 48." (Specificity that proves operator-level expertise.)

### Person
**"We" (RD Travels) speaks to "you" (the customer).** First-person plural for the operator, second-person singular for the reader. No royal "we." No "our team." Not "the customer" — "you."

### Casing
- **Headlines** — sentence case ("Cars, Tempo Travellers & Buses, with driver."). Never Title Case Like A Marketing Site.
- **Eyebrows** — UPPERCASE with `0.16em` tracking. 1–3 words. ("WHY DIRECT", "OUR FLEET", "MOST-BOOKED ROUTES", "SINCE 2015".)
- **Buttons** — sentence case verb-object ("Get instant quote", "WhatsApp us your trip"). Never "Submit" / "Click here" / "Learn more".
- **Body** — sentence case. Indian conventions where they apply (Tempo Traveller, NH 48, Sabarmati riverfront).

### Punctuation
- **No exclamation marks in body copy.** Anywhere. Not even at the end of CTAs.
- **Em-dashes** for asides; periods on every sentence including standalone phrases.
- **Middle dot `·`** as a separator in meta strips: "525 km · 9–10 hrs · One-way / round".
- **Rupee symbol `₹`** before numbers, no space: `₹11/km`, `₹2,400`, `₹6,800`. Tabular numerals always on prices.

### Forbidden vocabulary
"Amazing" / "incredible" / "mind-blowing" / "world-class" / "best-in-class" / "premium" (as a noun) / "embark on a journey" / "discover" / "explore" / "seamless" / "frictionless" / "effortless" / "trusted by thousands" (without a real number). Generic CTAs: "Submit" / "Click here" / "Learn more".

### Approved vocabulary
"Direct from the operator" / "Owned fleet, employed drivers" / "GST-itemised quote" / "GST-clear pricing" / "Tourist Permit + AITP" / "Since 2015" / "Pan-India" / "Pickup" / "drop" / "outstation" / "round trip" / "WhatsApp us" / "Call us".

### Emoji
Used sparingly and **only in scenario cards** as a tonal choice (🛫 airport, 🛕 pilgrimage, 💍 wedding, 🏢 corporate). Never in headlines, body copy, or CTAs. Never as primary UI icons — those are inline SVG.

### Microcopy patterns
- Form footers: "No spam. No advance to enquire. GST-clear pricing on every quote."
- Loading: "Sending to WhatsApp…" — never "Magic happening!"
- Errors: "That phone number doesn't look right. Indian numbers start with 6, 7, 8, or 9."
- Empty states: "No quotes yet — WhatsApp us, most go out in 15 minutes."

---

## Visual foundations

### Colors
**70% white surfaces / 30% saffron accents.** White = canvas. Saffron = paint. See `colors_and_type.css` for the full palette and semantic aliases.

- **Primary saffron `#E87722`** — CTAs, accent phrase color, key icons, decorative numerals
- **Saffron-deep `#C45F1A`** — saffron text on white (passes WCAG AA), CTA hover
- **Saffron-soft `#FFE9D5`** — icon backgrounds, badge fills
- **Ink `#1A1815`** — all primary text (warm near-black, **never** pure `#000`)
- **Ink-soft `#4A4640`** — body
- **Ink-mute `#7A746A`** — captions/meta
- **Ink-deep `#0F0E0C`** — footer, deep CTA bands
- **WhatsApp `#1F6F3F`** — WhatsApp CTAs only (platform recognition)
- **White-warm `#FBFAF7`** — alternating section bands (rhythm without color noise)

### Typography
**Single family: Switzer, weights 200–800.** No secondary typeface. No display serif. Hierarchy comes from weight + size + color + tracking.

Why this family: neo-grotesque sans by Jeremie Hornus, published by Indian Type Foundry (ITF), Ahmedabad — Indian-foundry provenance for an Ahmedabad operator. Loaded from Fontshare's CDN (free for commercial use under ITF Free Font License). 7 weights including 200 for decorative numerals; italic 400/600 reserved for body emphasis only — the accent rule never switches to italic. Slightly rounded geometric warmth. See `colors_and_type.css` for the full role tokens.

### Backgrounds
- **White-dominant.** Sections alternate between `#FFFFFF` and `#FBFAF7` (white-warm) for rhythm — never alternate using saffron-tinted backgrounds.
- **No gradient backgrounds** anywhere. No glassmorphism. No textures.
- **No stock travel photography.** Sunsets, drone shots, generic couples — banned.
- **Hero visuals** are typographic showcase cards or fleet silhouettes, not hero photos.
- The **final CTA band** is full-bleed saffron `#E87722`. The **footer** is full-bleed ink-deep `#0F0E0C`. These are the only large-color blocks in the system.

### Animation
- **Page-load reveal** — hero elements fade-in + 12px translateY → 0, staggered 80ms apart, 0.7s settle
- **Scroll reveal** — IntersectionObserver, 16px translateY → 0, opacity 0 → 1, 0.7s ease-out, 12% threshold
- **Easing** — `cubic-bezier(0.2, 0.7, 0.2, 1)` (`--ease-out`). No spring. No bounce.
- **FAQ accordion** — max-height + opacity, 0.4s ease-out (NOT spring/bounce)
- **Forbidden:** parallax of any kind, infinite-scroll marquees, mouse-trailing cursors, scroll-jacking, scroll-snap on the homepage, auto-playing carousels with arrows
- **Reduced motion** — fully honored (`@media (prefers-reduced-motion: reduce)` collapses all transitions to 0.01ms)

### Hover states
- **Cards** — translateY(-4px), `--shadow-md` scales up, border becomes `--color-saffron`, transition 0.3s ease-out
- **Buttons** — translateY(-2px) + `--shadow-saffron` (saffron-tinted shadow), transition 0.25s ease-out
- **Ghost CTA arrows** — `→` translates +4px on hover; text recolors to `--color-saffron-deep`
- **Nav links** — color shifts from `--color-ink-soft` to `--color-ink`. No underlines.
- **Scenario cards** — translateY(-2px), border becomes saffron, background tints to `--color-saffron-50`

### Press / focus
- Press: no shrink, no extra color shift — translateY snaps back to 0 (the lifted state is the active feedback)
- Focus-visible: `--shadow-focus` ring (4px saffron at 0.20 opacity) on every interactive element

### Borders
- **1px solid** at `rgba(26, 24, 21, 0.08)` (`--color-border`) — the default card / divider line. Warm, not pure-black-tinted.
- **1.5px** for outline buttons (one notch heavier so the pill reads).
- **1px dashed** at `--color-border-strong` for in-card section breaks (between price strip and includes line).
- **Hairline dividers `<hr>`** at 1px `--color-border` between sections — never thick rules, never decorative SVG dividers.

### Shadows
**Warm-tinted, never pure-black-based.** All shadows use `rgba(26, 24, 21, …)` so they sit on warm surfaces without going gray.
- `--shadow-sm` `0 1px 2px / 0.04` — booking-bar resting elevation
- `--shadow-md` `0 4px 14px / 0.08` — card hover state
- `--shadow-lg` `0 12px 36px / 0.10` — modals, drawer (rare)
- `--shadow-saffron` `0 4px 14px / saffron 0.18` — saffron CTA hover **only**
- `--shadow-focus` 4px saffron at 0.20 — focus ring

No inset shadows. No neumorphism (forbidden). No multi-layer 3D elevation stacks.

### Protection gradients vs capsules
**Capsules.** `--radius-pill 999px` for primary CTAs and trust chips. No protection gradients (we don't put text over imagery — typographic compositions instead).

### Layout rules
- `--max-width 1200px` content; `--max-width-prose 720px` for long-form (about page, FAQ).
- `--container-pad clamp(20px, 4vw, 32px)`.
- **No 12-column rigid grid.** Editorial feel comes from intentional asymmetry: hero is `1.05fr 0.95fr` (text-leading), vehicle showcase is `auto-fit minmax(260px, 1fr)`, route cards is `auto-fit minmax(320px, 1fr)`, pillars are single column with hairline dividers.
- **Sticky nav** with white/85% + `backdrop-filter: blur(12px) saturate(180%)`.
- **Mobile sticky bottom CTA bar** (WhatsApp + Call) below 760px viewport — `padding-bottom: max(12px, env(safe-area-inset-bottom))` to clear iOS home indicator.

### Transparency / blur
Used only on the **sticky nav** (white at 85% with `backdrop-filter`) and the **mobile CTA bar** (same). Nowhere else. No frosted card backgrounds. No backdrop-blur on modals.

### Imagery vibe
Until real photography exists, no photography. When added: **warm-graded** (slight amber undertone, never cool blue), outdoor or office natural light for portraits, environmental fleet shots at known Ahmedabad locations (Sabarmati riverfront, Kankaria), golden hour. Color grade target leans toward `--color-white-warm`. **No lens flare. No heavy filters. No overlay text on busy photos.**

### Corner radii
4 / 10 / 16 / 24 / 999 — the system. Form inputs `4`, secondary buttons + standard cards `10`, vehicle/route/scenario cards `16`, hero panels `24`, pills/chips/CTAs `999`.

### Card anatomy
Standard card is white + 1px border + `--radius-lg 16px` + `--space-6 32px` padding. Hover lifts -4px and recolors border to saffron. There is **no card with rounded corners + colored left-border accent** (forbidden trope).

---

## Iconography

### Style
- **Inline SVG, 1.6px stroke, rounded line-cap, no fills.**
- **Color via `currentColor`** — except in vehicle card icons, where stroke is `--color-saffron` on a `--color-saffron-soft` background tile.
- **Sizes** — 22px in card icons, 18px in buttons, 14px in trust chips. 36px stroke-only vehicle silhouettes inside the 64px saffron-soft tile.

### Vehicle silhouettes (custom)
Six custom 1-stroke silhouettes used across vehicle cards: **Sedan** (4-door), **MPV** (Ertiga-style rounded box), **SUV** (taller box), **Tempo Traveller** (extended van), **Mini Bus** (compact bus), **Volvo Coach** (long bus with windows). All drawn at 36×36 viewBox, 1.5–1.6px stroke, no fill. See `assets/icons/vehicles/` for the SVG sources.

### UI icons (CDN substitution)
The reference does not ship a UI icon set — only the WhatsApp brand glyph (inline SVG) and custom vehicle silhouettes. For arrows, ticks, plus/minus accordion controls, phone, location, mail, etc., we substitute **Lucide** (rounded line-cap, 1.5–2px stroke — same family as the vehicle silhouettes). **This is a substitution; flag it to the user if pixel-fidelity to a final icon set matters.**

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="arrow-right"></i>
```

### Forbidden
- Filled icons (except the WhatsApp brand glyph)
- Multi-color icons
- Emoji as primary UI icons (emoji is OK in scenario cards as a tonal choice)
- Heroicons, Material Icons, Font Awesome — too distinct from the Lucide rounded-stroke language

### Logo / brand mark
- **Monogram** — saffron `#E87722` circle, 36px, white "R" letter at weight 800. See `assets/logo/monogram.svg`.
- **Wordmark** — "RD Travels" in Switzer 700, ink `#1A1815`. See `assets/logo/wordmark.svg`.
- **Lockup** — monogram + wordmark side-by-side with 12px gap. See `assets/logo/lockup.svg`.
- On dark backgrounds (footer), the monogram stays saffron with white "R"; the wordmark inverts to white.

---

## File index

```
README.md                        — this file
BRAND_BRIEF.md                   — positioning, voice, audience, anti-patterns
DESIGN_SYSTEM.md                 — full token + component spec
SKILL.md                         — Agent Skills entry point

colors_and_type.css              — token layer: CSS vars + base type styles

assets/
  logo/                          — monogram, wordmark, lockup (SVG)
  icons/vehicles/                — sedan, MPV, SUV, Tempo, mini-bus, Volvo (SVG)
  icons/whatsapp.svg             — WhatsApp brand glyph

reference/
  index.html                     — canonical reference page (HTML)
  styles.css                     — canonical reference CSS (full implementation)

preview/                         — Design System tab cards (one HTML per concept)

ui_kits/
  website/
    README.md                    — kit notes
    index.html                   — interactive marketing-site recreation
    *.jsx                        — Nav, Hero, VehicleCard, RouteCard, FAQ, Footer, etc.
```

## Caveats & substitutions

- **Icons** — Lucide via CDN substitutes for unspecified UI icons (arrows, ticks, plus/minus, phone, location, mail). The vehicle silhouettes and WhatsApp glyph are the canonical originals.
- **Photography** — none exists yet. The reference deliberately avoids it; the UI kit follows suit. When real fleet/founder photos arrive, replace the typographic showcase card in the hero per `DESIGN_SYSTEM.md §10`.
- **Fonts** — Switzer loaded from Fontshare's CDN via `@import` (substituted from the brief's Plus Jakarta Sans; ITF/Ahmedabad provenance is on-brand for an Ahmedabad operator). Free for commercial use under ITF Free Font License.
