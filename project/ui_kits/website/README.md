# RD Travels — Website UI Kit

A click-thru recreation of the marketing site (Home, About, Contact). Every screen is built from the same Switzer / 70% white / 30% saffron rules in `colors_and_type.css`.

## Files

- `index.html` — boots React 18 + Babel, renders nav + active page + footer + mobile sticky CTA
- `Icons.jsx` — `WhatsAppIcon`, `SedanIcon`, `SuvIcon`, `TempoIcon`, `BusIcon`
- `Chrome.jsx` — `Header`, `Footer`, `MobileCtaBar`
- `Cards.jsx` — `Chip`, `VehicleCard`, `RouteCard`, `ScenarioCard`, `FaqItem`, `Pillar`
- `HomePage.jsx` — full home: hero → fleet → routes → pillars → FAQ → CTA band
- `AboutPage.jsx` / `ContactPage.jsx` — in `AboutContact.jsx`, includes `QuoteForm` with the saffron focus + error state
- `styles.css` — copied from the canonical reference upload

## Conventions

- Every H1 / H2 carries exactly one `<span class="accent">` phrase
- Vehicle cards say "with driver" three ways: saffron eyebrow, "Seats X + driver" line, green-tick "Includes professional driver, fuel, AC"
- Buttons are verb + object: "Get instant quote", "WhatsApp us your trip", "Call +91 98765 43210"
- Below 760px the sticky bottom bar surfaces WhatsApp + Call as the always-on conversion path

## Not included (intentionally)

- Real telephony / WhatsApp deep-link wiring — UI only
- A working router — page is React state, not URL
- Form submission — the form validates phone format only and is decorative
