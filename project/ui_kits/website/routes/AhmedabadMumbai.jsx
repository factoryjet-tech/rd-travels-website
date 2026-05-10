// RDB Travels — Ahmedabad to Mumbai route page (visually redesigned)

// ─── Scroll reveal hook ────────────────────────────────────────────────────────
const useReveal = (threshold = 0.12) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

// ─── Animated counter ──────────────────────────────────────────────────────────
const AnimatedCounter = ({ to, suffix = "" }) => {
  const [val, setVal] = React.useState(0);
  const started = React.useRef(false);
  const [ref, visible] = useReveal(0.3);
  React.useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const duration = 1300;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, to]);
  return <span ref={ref}>{val}{suffix}</span>;
};

// ─── Trust ticker ──────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  "Direct operator — no aggregators",
  "GST invoice on every booking",
  "3am departures routine on this route",
  "BOM T1 & T2 drops",
  "Flight-tracked airport pickups",
  "One WhatsApp · one desk",
  "Vetted owner-drivers since 2015",
  "No advance required to enquire",
];

const TrustTicker = () => {
  const doubled = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <div className="trust-ticker" aria-hidden="true">
      <div className="trust-ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="trust-ticker__item">
            <span className="trust-ticker__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Route data ────────────────────────────────────────────────────────────────
const STOPS = [
  { city: "Ahmedabad", state: "Gujarat",     dist: null,      time: "Start"        },
  { city: "Vadodara",  state: "Gujarat",     dist: "~110 km", time: "~1h 45m"      },
  { city: "Bharuch",   state: "Gujarat",     dist: "~95 km",  time: "~1h 15m"      },
  { city: "Surat",     state: "Gujarat",     dist: "~65 km",  time: "~1h"          },
  { city: "Mumbai",    state: "Maharashtra", dist: "~255 km", time: "~4h 30m"      },
];

// ─── Hero route visualization (vertical, right panel) ─────────────────────────
const HeroRouteViz = () => {
  const [ref, visible] = useReveal(0.1);
  return (
    <div ref={ref} className="route-map-card">
      <p className="route-map-card__nh">NH 48 · Ahmedabad to Mumbai</p>

      <div className="route-stops">
        {STOPS.map((stop, i) => (
          <React.Fragment key={i}>
            <div className="route-stop">
              {/* Connector line to next stop */}
              {i < STOPS.length - 1 && (
                <div
                  className={`route-stop__line${visible ? " route-stop__line--in" : ""}`}
                  style={{ transitionDelay: `${0.15 + i * 0.14}s` }}
                />
              )}
              {/* Dot */}
              <div
                className={`route-stop__dot${visible ? " route-stop__dot--active" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.14}s` }}
              />
              {/* City + state */}
              <div>
                <div className="route-stop__city">{stop.city}</div>
                <div className="route-stop__state">{stop.state}</div>
              </div>
              {/* Leg meta */}
              {stop.dist && (
                <div className="route-stop__meta">
                  <div className="route-stop__dist">{stop.dist}</div>
                  <div className="route-stop__time">{stop.time}</div>
                </div>
              )}
            </div>
            {i < STOPS.length - 1 && <div className="route-stop__gap" />}
          </React.Fragment>
        ))}
      </div>

      {/* Summary strip */}
      <div className="route-map-summary">
        <div className="route-map-summary__stat">
          <div className="route-map-summary__num">~525</div>
          <div className="route-map-summary__label">km total</div>
        </div>
        <div className="route-map-summary__divider" />
        <div className="route-map-summary__stat">
          <div className="route-map-summary__num">9–10</div>
          <div className="route-map-summary__label">hrs door-to-door</div>
        </div>
        <div className="route-map-summary__divider" />
        <div className="route-map-summary__stat">
          <div className="route-map-summary__num">8–10</div>
          <div className="route-map-summary__label">toll plazas</div>
        </div>
      </div>
    </div>
  );
};

// ─── Animated horizontal timeline (route snapshot section) ────────────────────
const RouteTimelineV2 = () => {
  const [ref, visible] = useReveal(0.2);
  return (
    <div ref={ref} className="htl">
      <div className="htl__wrap">
        <div className="htl__inner">
          {/* Animated track line */}
          <div className="htl__track">
            <div className={`htl__fill${visible ? " htl__fill--in" : ""}`} />
          </div>
          {/* Stops row */}
          <div className="htl__stops">
            {STOPS.map((stop, i) => (
              <div key={i} className="htl__stop">
                <div
                  className={`htl__dot${visible ? " htl__dot--lit" : ""}`}
                  style={{ transitionDelay: visible ? `${0.35 + i * 0.22}s` : "0s" }}
                />
                <div className="htl__city">{stop.city}</div>
                {stop.dist && <div className="htl__dist">{stop.dist}</div>}
                <div className="htl__time">{stop.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="htl__note">
        Times above are highway legs only. City exit from Ahmedabad adds 45–90 min
        and is factored into your departure calculation individually.
      </p>
    </div>
  );
};

// ─── Departure cards ───────────────────────────────────────────────────────────
const DEPARTURES = [
  { flight: "6:00 AM",  leave: "6:00 PM — previous evening",   note: "Early-morning domestic — most-booked slot" },
  { flight: "9:00 AM",  leave: "9:00 PM — previous evening",   note: "Morning domestic" },
  { flight: "2:00 PM",  leave: "2:00 AM — overnight departure", note: "Afternoon domestic" },
  { flight: "6:00 PM",  leave: "6:00 AM — same morning",        note: "Evening domestic" },
  { flight: "11:00 PM", leave: "11:00 AM — same day",           note: "Late-night or early international" },
  { flight: "Your flight", leave: "We'll calculate it for you", note: "Drop your flight number on WhatsApp — we work backwards from boarding time, always." },
];

const DepartureCards = () => (
  <div className="departure-cards">
    {DEPARTURES.map((r, i) => (
      <div key={i} className="departure-card">
        <div className="departure-card__flight">{r.flight}</div>
        <div className="departure-card__arrow" aria-hidden="true">→</div>
        <div>
          <div className="departure-card__leave">Leave by {r.leave}</div>
          <div className="departure-card__note">{r.note}</div>
        </div>
      </div>
    ))}
  </div>
);

// ─── Terminal cards v2 ─────────────────────────────────────────────────────────
const TerminalCards = () => (
  <div className="terminal-cards">
    <div className="terminal-card-v2">
      <div className="terminal-card-v2__bg" aria-hidden="true">T1</div>
      <div className="terminal-card-v2__label">Terminal 1 · Santa Cruz</div>
      <h3 className="terminal-card-v2__title">Domestic — select carriers</h3>
      <p className="terminal-card-v2__body">
        Handles select domestic airlines. Shorter walk from the pre-paid taxi
        and cab drop zones. Check your e-ticket — if it says T1, it will say
        so clearly.
      </p>
    </div>
    <div className="terminal-card-v2">
      <div className="terminal-card-v2__bg" aria-hidden="true">T2</div>
      <div className="terminal-card-v2__label">Terminal 2 · Sahar</div>
      <h3 className="terminal-card-v2__title">Most domestic + all international</h3>
      <p className="terminal-card-v2__body">
        Handles most major domestic airlines and all international flights.
        Cab drop zone is well-marked. The most-booked terminal on this route.
      </p>
    </div>
  </div>
);

// ─── Scroll-reveal wrapper ─────────────────────────────────────────────────────
const Reveal = ({ children, delay = 0, style }) => {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`js-reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────
const AhmedabadMumbaiPage = () => (
  <main>

    {/* ════════════════════════════════════════
        HERO
        ════════════════════════════════════════ */}
    <section className="route-hero section">
      {/* Decorative blobs */}
      <div className="route-hero__blob"  aria-hidden="true" />
      <div className="route-hero__blob2" aria-hidden="true" />

      <div className="container">
        <div className="route-hero__inner">

          {/* ── Left: copy ── */}
          <div>
            <Reveal>
              <span className="eyebrow">Ahmedabad → Mumbai · NH 48 · ~525 km</span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 style={{ margin: "var(--space-4) 0 var(--space-5)", maxWidth: "20ch" }}>
                Ahmedabad to Mumbai,{" "}
                <span className="accent">with driver.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="lead" style={{ maxWidth: "56ch", marginBottom: "var(--space-4)" }}>
                Direct dispatch from Ronak's Ahmedabad desk. Your departure is
                calculated from your boarding gate back — not guessed. Sedan
                drops, Innova family runs, Tempo Travellers for groups. GST
                invoice on every booking.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
                <a href="https://wa.me/919876543210" className="btn btn-whatsapp">
                  <WhatsAppIcon /> WhatsApp your trip
                </a>
                <a href="tel:+919876543210" className="btn btn-outline">
                  Call +91 98765 43210
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <Chip>~525 km · NH 48</Chip>
                <Chip>9–10 hrs door-to-door</Chip>
                <Chip>BOM T1 &amp; T2 drops</Chip>
                <Chip>3am departures routine</Chip>
                <Chip>GST invoice included</Chip>
              </div>
            </Reveal>
          </div>

          {/* ── Right: route visualization ── */}
          <div className="route-hero__viz">
            <HeroRouteViz />
          </div>
        </div>

        {/* Stats bar — spans full width below the split */}
        <Reveal delay={0.1} style={{ marginTop: "var(--space-4)" }}>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat__num">
                <AnimatedCounter to={525} /> km
              </div>
              <div className="hero-stat__label">on NH 48 via Vadodara &amp; Surat</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__num">9–10 hrs</div>
              <div className="hero-stat__label">door-to-door, traffic buffer included</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__num">24×7</div>
              <div className="hero-stat__label">dispatch · 3am pickups routine</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* ── Trust ticker ── */}
    <TrustTicker />

    {/* ════════════════════════════════════════
        ROUTE SNAPSHOT
        ════════════════════════════════════════ */}
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Route at a glance</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-4)" }}>
            525 km. One driver.{" "}
            <span className="accent">Door to door.</span>
          </h2>
          <p className="lead" style={{ maxWidth: "60ch", marginBottom: "var(--space-7)" }}>
            NH 48 is a four-lane divided highway for most of this route — well-lit
            with rest stops at Vadodara, Bharuch, and Surat. Every toll plaza is
            billed at actuals and listed separately in your quote.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{
            padding: "var(--space-7)",
            background: "var(--color-white)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-sm)",
          }}>
            <p style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--color-saffron-deep)",
              margin: "0 0 var(--space-6)", opacity: 0.8,
            }}>
              NH 48 · Ahmedabad to Mumbai via Vadodara · Bharuch · Surat
            </p>
            <RouteTimelineV2 />
          </div>
        </Reveal>
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        FLEET
        ════════════════════════════════════════ */}
    <section className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Choose your vehicle</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-4)" }}>
            Right vehicle for{" "}
            <span className="accent">your group size.</span>
          </h2>
          <p className="lead" style={{ maxWidth: "60ch", marginBottom: "var(--space-7)" }}>
            Every vehicle comes with a vetted owner-driver from our Ahmedabad
            network — dispatched from one desk, on one WhatsApp number. No
            coordinating across operators.
          </p>
        </Reveal>

        <div className="grid-auto-260">
          {[
            {
              image: "../public/images/fleet/fleet-sedan-dzire.webp",
              altText: "Maruti Suzuki Dzire sedan with driver — Ahmedabad to Mumbai airport drop",
              category: "Car with driver",
              name: "Sedan (Dzire / Etios)",
              capacity: "Seats 4 + driver",
              desc: "The workhorse of this route. Solo travellers, couples, small business trips. Comfortable on the highway, straightforward at BOM drop zones.",
              ctaLabel: "Book a sedan",
              delay: 0,
            },
            {
              image: "../public/images/fleet/fleet-mpv-ertiga.webp",
              altText: "Maruti Ertiga 6-seater MPV with driver — Ahmedabad to Mumbai family travel",
              category: "Car with driver",
              name: "Maruti Ertiga",
              capacity: "Seats 6 + driver",
              desc: "More legroom and boot space than a sedan. Families of 4–5, mixed adult-child groups with luggage for a multi-day stay.",
              ctaLabel: "Book an Ertiga",
              delay: 0.07,
            },
            {
              image: "../public/images/fleet/fleet-suv-innova.webp",
              altText: "Toyota Innova Crysta SUV with driver — premium Ahmedabad to Mumbai cab",
              category: "Car with driver",
              name: "Toyota Innova / Crysta",
              capacity: "Seats 6–7 + driver",
              desc: "The premium pick for a 10-hour highway run. Reclining seats, highway AC, rear luggage space. Families, NRI visits, executive transfers.",
              ctaLabel: "Book an Innova",
              delay: 0.14,
            },
            {
              image: "../public/images/fleet/fleet-tempo-12seater.webp",
              altText: "12-seater Tempo Traveller with driver — Ahmedabad to Mumbai group travel",
              category: "Tempo Traveller with driver",
              name: "12-seater Tempo Traveller",
              capacity: "Seats 12 + driver",
              desc: "Groups of 8–12. Extended family relocations, office offsites, friend groups. Split the cost — per-head rate often beats economy train.",
              ctaLabel: "Book a 12-seater",
              delay: 0.21,
            },
          ].map(({ delay, ...v }) => (
            <Reveal key={v.name} delay={delay}>
              <VehicleCard {...v} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} style={{ marginTop: "var(--space-6)" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--color-ink-mute)", maxWidth: "68ch" }}>
            Rates above are starting rates. WhatsApp for a GST-itemised quote with
            no surprise additions. NH 48 has 8–10 toll plazas billed at actuals;
            driver bata and any applicable night-halt allowance are listed
            line-by-line in your quote.
          </p>
        </Reveal>
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        DEPARTURE GUIDE
        ════════════════════════════════════════ */}
    <section className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Departure planning</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-4)" }}>
            Planned from your{" "}
            <span className="accent">boarding gate back.</span>
          </h2>
          <p className="lead" style={{ maxWidth: "60ch", marginBottom: "var(--space-7)" }}>
            We start with your flight time, subtract check-in cutoff, subtract
            drive time from your pickup address, then add a real traffic buffer
            for the Ahmedabad city exit. The cards below show the formula for
            five common flight slots.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <DepartureCards />
        </Reveal>

        <Reveal delay={0.18}>
          <div style={{
            marginTop: "var(--space-5)",
            padding: "var(--space-4) var(--space-6)",
            background: "var(--color-white)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            maxWidth: "640px",
            fontSize: "0.85rem",
            color: "var(--color-ink-soft)",
            lineHeight: 1.6,
          }}>
            <strong style={{ color: "var(--color-ink)" }}>International flights:</strong>{" "}
            Add 1 hour to the above — international check-in closes 3 hours
            before departure, not 2. Share your flight number on WhatsApp and
            we'll calculate your exact departure from your pickup address.
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="delay-callout">
            <div className="delay-callout__icon">
              <PlaneArriveIcon />
            </div>
            <div>
              <p className="delay-callout__title">Flight delayed? Driver waits.</p>
              <p className="delay-callout__body">
                For airport pickups in Mumbai, our driver tracks your flight's
                live arrival status and waits up to 90 minutes from the scheduled
                landing time — at no extra cost. Beyond that, Ronak's dispatch
                desk coordinates directly. You're not left managing an app at
                midnight.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        TERMINAL GUIDE
        ════════════════════════════════════════ */}
    <section className="section">
      <div className="container" style={{ maxWidth: "820px" }}>
        <Reveal>
          <span className="eyebrow">Mumbai airport</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-4)" }}>
            T1 or T2 —{" "}
            <span className="accent">we drop at both.</span>
          </h2>
          <p className="lead" style={{ marginBottom: "var(--space-6)" }}>
            Chhatrapati Shivaji Maharaj International Airport has two terminals
            about 4 km apart. Your terminal is always printed on your e-ticket
            or boarding pass. Tell us when you book — we route directly to your
            terminal and factor in the correct drop zone approach.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <TerminalCards />
        </Reveal>
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        FAQ
        ════════════════════════════════════════ */}
    <section className="section section--alt">
      <div className="container" style={{ maxWidth: "820px" }}>
        <Reveal>
          <span className="eyebrow">This route, answered</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-6)" }}>
            Ahmedabad–Mumbai,{" "}
            <span className="accent">no guessing.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FaqItem defaultOpen
            q="How much does an Ahmedabad to Mumbai cab cost?"
            a="Rates depend on vehicle class, travel date, and whether it's one-way or round-trip. NH 48 has 8–10 toll plazas billed at actuals and listed separately in your quote. WhatsApp your dates, vehicle preference, and pickup address — GST-itemised quote in about 15 minutes."
          />
          <FaqItem
            q="When should I leave Ahmedabad for a morning flight?"
            a="Work backwards from your boarding time, not your flight time. For a 6am domestic flight: check-in closes at 4am, drive time is 9–10 hours plus 45–90 minutes for Ahmedabad city traffic — that puts your pickup around 5:30–6pm the previous evening. The departure cards on this page show the formula for five common flight slots. Share your flight number on WhatsApp and we calculate the exact pickup from your address."
          />
          <FaqItem
            q="Is this a one-way drop or round-trip?"
            a="Both. One-way airport drops to Mumbai are the most-booked format on this route. Round-trip pricing gives a slight per-km discount on the return leg. WhatsApp for the exact number based on your dates and vehicle preference."
          />
          <FaqItem
            q="Can we stop in Vadodara or Surat on the way?"
            a="Yes. A 30-minute halt in Vadodara or a meal break in Surat is standard on long runs — just flag it when booking. Extended stops (2+ hours for a family visit or business meeting) are treated as a package and quoted upfront with no surprise additions at handover."
          />
          <FaqItem
            q="Do you drop to Andheri, Bandra, BKC, Thane, Navi Mumbai, or Pune?"
            a="Yes — we drop anywhere in Mumbai and the wider Mumbai Metropolitan Region. Airport terminal drops are most common, but Andheri West, Bandra, BKC, Powai, Thane, and Navi Mumbai are all regular. For Pune, that extends the route to ~660 km total — quoted separately as an outstation trip."
          />
          <FaqItem
            q="What if my flight is delayed and I'm being picked up in Mumbai?"
            a="Our driver tracks your flight's live arrival status. Standard complimentary wait is 90 minutes from the scheduled landing time. For delays beyond that, Ronak's dispatch desk coordinates directly — you're not left chasing a ride app at midnight after a delayed flight."
          />
          <FaqItem
            q="How early should I book?"
            a="For a sedan one-way, same-day confirmation is possible if slots are open — check on WhatsApp. For Innova and Tempo Traveller bookings, 48 hours ahead is safer. For long-weekend dates (Diwali, Navratri, New Year), book a week out — this route fills fast. Multi-vehicle bookings need 5–7 days minimum."
          />
        </Reveal>
      </div>
    </section>

    {/* ════════════════════════════════════════
        CTA BAND
        ════════════════════════════════════════ */}
    <section className="route-cta-band">
      <div className="container" style={{ textAlign: "center", maxWidth: "700px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.8)" }}>
            Ready to book?
          </span>
          <h2 style={{ margin: "var(--space-4) 0 var(--space-4)", color: "var(--color-white)" }}>
            Ahmedabad → Mumbai.{" "}
            <span style={{ color: "rgba(255,255,255,0.72)" }}>Two ways to start.</span>
          </h2>
          <p className="lead" style={{ color: "rgba(255,255,255,0.88)", marginBottom: "var(--space-7)" }}>
            WhatsApp your pickup address, destination, date, and group size.
            GST-itemised quote in 15 minutes. No advance to enquire.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/919876543210" className="btn btn-whatsapp">
              <WhatsAppIcon /> WhatsApp us now
            </a>
            <a
              href="tel:+919876543210"
              className="btn"
              style={{
                background: "rgba(255,255,255,0.14)",
                color: "var(--color-white)",
                border: "1.5px solid rgba(255,255,255,0.38)",
                backdropFilter: "blur(4px)",
              }}
            >
              Call +91 98765 43210
            </a>
          </div>
        </Reveal>
      </div>
    </section>

  </main>
);

Object.assign(window, { AhmedabadMumbaiPage });
