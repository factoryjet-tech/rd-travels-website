---
name: rd-travels-design
description: Use this skill to generate well-branded interfaces and assets for RD Travels (Ahmedabad-based vehicle-with-driver rentals — cars, Tempo Travellers, buses), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files — `BRAND_BRIEF.md`, `DESIGN_SYSTEM.md`, `colors_and_type.css`, `assets/`, `preview/`, and `ui_kits/website/`.

Three rules override defaults and must never be relaxed:

1. **70/30 white-to-saffron** is non-negotiable. White surfaces dominate; saffron only fires at conversion moments.
2. **Brand fingerprint** — exactly one phrase per H1/H2 wrapped in `<span class="accent">`, colored saffron-deep `#C45F1A`. Same weight, same size. **No italic. No serif switch.**
3. **Every vehicle card** surfaces "with driver" three ways: saffron eyebrow, "Seats X + driver" line, green-tick "Includes professional driver, fuel, AC".

Forbidden: serifs (especially Fraunces), italic flourishes, purple gradients, glassmorphism, neumorphism, stock travel photography, generic CTAs ("Submit" / "Click here" / "Learn more"), exclamation marks in body copy, hype words ("amazing", "world-class", "embark on a journey", "seamless").

Required: Switzer single-family (200–800), warm near-black `#1A1815` for text (never `#000`), verb-object button labels, tabular numerals on prices, decorative numerals at weight 200 in saffron, mobile-first with a sticky bottom CTA bar (WhatsApp + Call) below 760px.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/` and create static HTML files for the user to view; the simplest path is to copy `reference/styles.css` and start from the patterns in `ui_kits/website/`. If working on production code, copy assets and read the rules in `README.md` and `DESIGN_SYSTEM.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask what they want to build or design, ask a few clarifying questions (audience, surface, fidelity, variations), and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
