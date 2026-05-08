import React from 'react';
import { WhatsAppIcon, PhoneIcon } from './Icons.jsx';
import { openQuoteModal } from './Chrome.jsx';
import { Chip, VehicleCard, RouteCard, FaqItem, Pillar } from './Cards.jsx';

// RDB Travels — Home page

// ─── Homepage FAQ: tabbed 2-column redesign ────────────────────────────────────
const HOME_FAQ_DATA = {
  Booking: [
    { q: "Are you a broker or a direct operator?", a: "A direct operator with a vetted owner-driver network. Founded 2015 by Ronak Dineshbhai Barot. We run the dispatch desk in Ahmedabad — we confirm the vehicle, vet every driver by name, and own accountability for your trip. No broker markup, no anonymous-app matching, no 'the operator said something else' on trip day. You can visit the office before you book." },
    { q: "How do I book — WhatsApp, call, or the website?", a: "WhatsApp is the fastest path — share pickup, destination, date, and group size, and a GST-itemised quote comes back in about 15 minutes. For complex itineraries (multi-vehicle weddings, corporate retainers), a call works better. The quote form on the Contact page works too; we follow up on WhatsApp." },
    { q: "Do I need to pay an advance to get a quote?", a: "No. Quotes are free and non-binding. We send GST-itemised numbers on WhatsApp; you decide. For confirmed bookings, most one-day trips need no advance. Multi-day tours and bus bookings take a small confirmation amount (10–20% typical), balance settles after the trip." },
    { q: "What's the cancellation policy?", a: "Day-trip bookings cancelled 24 hours or more before departure are typically charge-free. Multi-day tours and bus bookings follow a sliding scale. The exact terms are stated with your booking confirmation — no hidden clauses." },
  ],
  Pricing: [
    { q: "Is the quote GST-inclusive?", a: "We itemise GST separately so you can see what's vehicle, what's tax. We're GST-registered (GSTIN on every invoice), so corporate customers can claim input credit. The total on the WhatsApp quote is what you pay — no convenience fee added at handover." },
    { q: "Are night halt charges and driver bata included in the quote?", a: "Every quote we send is itemised — vehicle rate, driver bata, GST, and applicable night-halt allowance are listed separately. There are no surprise additions at handover. Tolls, parking, and inter-state permits are billed at actuals and flagged in the quote upfront." },
    { q: "Do you provide a GST invoice for corporate bookings?", a: "Yes. RDB Travels is GST-registered and issues a proper tax invoice for every trip — GSTIN is printed on the invoice. Corporate customers can claim input credit. Multiple trips can be consolidated on a single monthly invoice; mention that requirement when you book." },
    { q: "Do you offer monthly car rental or long-term hire?", a: "Yes — monthly retainer arrangements are available. A dedicated vehicle with a regular driver, consolidated monthly billing, and a GST invoice. Works well for businesses that need regular executive transport or frequent outstation travel without ad-hoc booking overhead." },
  ],
  Fleet: [
    { q: "What's the largest vehicle you operate?", a: "56-seater Volvo Multi-Axle and Bharat Benz coaches for premium long-distance. We also run 45-seater AC coaches, 40-seater AC mini coaches, and 32-seater non-AC mini buses. Below that, the full Tempo Traveller range (9, 12, 17, 20, 26-seater Maharaja) and cars from Sedan to Innova Crysta." },
    { q: "How many people fit in a tempo traveller?", a: "Our Tempo Traveller range runs from 9-seater to 26-seater Maharaja. The standard 12-seater fits 12 passengers plus driver with luggage; the 17-seater is most-booked for extended families and corporate groups; the 26-seater Maharaja has push-back recliner seats and a larger luggage bay." },
    { q: "Can I rent a car for a single day in Ahmedabad?", a: "Yes — 8-hour city packages and outstation one-way day trips are available. A sedan or Innova for a single day covers airport transfers, business meetings in Vadodara, or any in-city requirement. Package rates are on the fleet cards; WhatsApp for an exact quote based on your route." },
    { q: "What permits and insurance cover the vehicles?", a: "Every vehicle has a Tourist Vehicle Permit, All-India Tourist Permit (AITP) for inter-state travel, valid PUC and fitness, and comprehensive insurance covering passengers for the trip duration. Drivers are police-verified. Documentation available on request." },
  ],
  Trips: [
    { q: "Do you handle airport drops and pickups for late-night flights?", a: "Yes — Mumbai BOM Terminal 2 is our most-booked route, including 3am drops and 1am pickups. We work backwards from your boarding time, factor in toll and traffic, and pad realistically. Driver waits for delayed flights at no extra cost up to 90 minutes." },
    { q: "Do you do multi-day trips like Rajasthan circuit or Somnath–Dwarka?", a: "Yes — Rajasthan circuits (Udaipur, Jaipur, Jodhpur), Somnath–Dwarka pilgrimage, Kutch and Bhuj, and longer routes to Pune or Nashik. We plan the itinerary day-by-day with realistic drive times, and the driver stays with your group throughout." },
    { q: "Do I get the same vehicle and driver across a multi-day trip?", a: "Yes. The owner-driver who picks you up on day one stays with the trip through the last drop. This is not a relay system — the same person knows the route, knows the group, and is reachable directly. Ronak's dispatch desk also stays contactable for the full duration." },
    { q: "What if there's a breakdown or issue during the trip?", a: "The driver contacts the office immediately. Ronak's desk arranges a replacement vehicle or roadside support as fast as possible. All vehicles carry valid fitness certificates and are checked before departure — breakdown situations are rare, and we have a clear protocol when they happen." },
  ],
};

const HomeFaqItem = ({ n, q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`hfaq-item${open ? ' hfaq-item--open' : ''}`}>
      <button className="hfaq-item__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span className="hfaq-item__num">{String(n).padStart(2, '0')}</span>
        <span className="hfaq-item__text">{q}</span>
        <span className="hfaq-item__icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="hfaq-item__a">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
};

const HomeFaqSection = () => {
  const tabs = Object.keys(HOME_FAQ_DATA);
  const [active, setActive] = React.useState(tabs[0]);
  const items = HOME_FAQ_DATA[active];
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);
  return (
    <section className="home-faq">
      <div className="container">
        <div className="home-faq__header">
          <span className="eyebrow">Frequently asked</span>
          <h2 className="home-faq__h2">Honest answers.<br /><span className="accent">No fine print.</span></h2>
          <p className="home-faq__lead">Every question people ask before they book RDB Travels — answered straight.</p>
        </div>
        <div className="home-faq__tabs" role="tablist" aria-label="FAQ categories">
          {tabs.map(tab => (
            <button key={tab}
              role="tab"
              aria-selected={active === tab}
              className={`home-faq__tab${active === tab ? ' home-faq__tab--on' : ''}`}
              onClick={() => setActive(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <div className="home-faq__cols">
          <div className="home-faq__col">
            {col1.map((item, i) => <HomeFaqItem key={i} n={i + 1} q={item.q} a={item.a} />)}
          </div>
          <div className="home-faq__col">
            {col2.map((item, i) => <HomeFaqItem key={i} n={i + 1 + half} q={item.q} a={item.a} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Scroll reveal hook (home page) ───────────────────────────────────────────
const useHomeReveal = (threshold = 0.12) => {
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

// ─── Animated counter (home) ───────────────────────────────────────────────────
const HomeCounter = ({ to, suffix = "" }) => {
  const [val, setVal] = React.useState(0);
  const started = React.useRef(false);
  const [ref, visible] = useHomeReveal(0.3);
  React.useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const duration = 1400;
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

// ─── Scroll-reveal wrapper (home) ─────────────────────────────────────────────
const HomeReveal = ({ children, delay = 0, style }) => {
  const [ref, visible] = useHomeReveal(0.1);
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

// ─── Home hero stat card (right panel) ────────────────────────────────────────
const HomeStatCard = () => {
  const [ref, visible] = useHomeReveal(0.1);
  const VEHICLES = ["Sedan", "Ertiga", "Innova", "Tempo 12", "Tempo 17", "Maharaja 26", "Mini Bus 32", "Volvo 56"];
  const STATS = [
    { num: "500+", label: "trips done" },
    { num: "8",    label: "vehicle classes" },
    { num: "24×7", label: "dispatch" },
    { num: "2015", label: "founded" },
  ];
  return (
    <div ref={ref} className="home-stat-card">
      <p className="home-stat-card__eyebrow">RDB Travels · Ahmedabad, Gujarat</p>
      <div className="home-stat-card__grid">
        {STATS.map((s, i) => (
          <div
            key={i}
            className={`home-stat-card__item${visible ? " home-stat-card__item--in" : ""}`}
            style={{ transitionDelay: `${0.1 + i * 0.11}s` }}
          >
            <div className="home-stat-card__num">{s.num}</div>
            <div className="home-stat-card__label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="home-stat-card__status">
        <span className="home-stat-card__dot" aria-hidden="true" />
        <span>Live on WhatsApp · quote in 15 min</span>
      </div>
      <div className="home-stat-card__vehicles">
        {VEHICLES.map((v, i) => (
          <span
            key={i}
            className={`home-stat-card__pill${visible ? " home-stat-card__pill--in" : ""}`}
            style={{ transitionDelay: `${0.42 + i * 0.07}s` }}
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
};

// ─── Trust ticker (home) ───────────────────────────────────────────────────────
const HOME_TRUST = [
  "Direct operator · no brokers",
  "GST invoice on every booking",
  "All of Gujarat · Pan-India routes",
  "Airport drops & pickups",
  "3am departures routine",
  "One WhatsApp · one desk",
  "Vetted owner-drivers since 2015",
  "Sedan to 56-seater Volvo",
];
const HomeTrustTicker = () => {
  const doubled = [...HOME_TRUST, ...HOME_TRUST];
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

// ─── Page ──────────────────────────────────────────────────────────────────────
const HomePage = ({ onNavigate }) => (
  <main>

    {/* ════════════════════════════════════════
        HERO — split layout
        ════════════════════════════════════════ */}
    <section className="route-hero section">
      <div className="route-hero__blob"  aria-hidden="true" />
      <div className="route-hero__blob2" aria-hidden="true" />
      <div className="container">
        <div className="route-hero__inner">

          {/* ── Left: copy ── */}
          <div>
            <HomeReveal>
              <span className="eyebrow">Car Rental &amp; Cab Service · Ahmedabad · Since 2015</span>
            </HomeReveal>

            <HomeReveal delay={0.08}>
              <h1 style={{ margin: "var(--space-4) 0 var(--space-4)", maxWidth: "16ch" }}>
                Cars, Tempos &amp; Buses,{" "}
                <span className="accent">with driver.</span>
              </h1>
            </HomeReveal>

            <HomeReveal delay={0.14}>
              <p className="lead" style={{ maxWidth: "52ch", marginBottom: "var(--space-4)" }}>
                Ahmedabad's direct travels operator since 2015. Sedan airport drops,
                Innova family tours, Tempo Travellers for groups, 56-seater Volvos
                for weddings — GST-clear quote on WhatsApp in 15 minutes.
              </p>
            </HomeReveal>

            <HomeReveal delay={0.2}>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
                <button className="btn btn-whatsapp" onClick={openQuoteModal}><WhatsAppIcon /> WhatsApp us your trip</button>
                <a href="tel:+919876543210" className="btn btn-call"><PhoneIcon /> Call +91 98765 43210</a>
              </div>
            </HomeReveal>

            <HomeReveal delay={0.26}>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <Chip>Since 2015</Chip>
                <Chip>Tourist Permit · AITP</Chip>
                <Chip>Vetted owner-drivers</Chip>
                <Chip>24×7 dispatch</Chip>
              </div>
            </HomeReveal>
          </div>

          {/* ── Right: animated stat card ── */}
          <div className="route-hero__viz">
            <HomeStatCard />
          </div>
        </div>

        {/* Stats bar */}
        <HomeReveal delay={0.1} style={{ marginTop: "var(--space-4)" }}>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat__num"><HomeCounter to={500} suffix="+" /></div>
              <div className="hero-stat__label">outstation trips completed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__num">8</div>
              <div className="hero-stat__label">vehicle classes, one desk</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__num">10+</div>
              <div className="hero-stat__label">years direct operator</div>
            </div>
          </div>
        </HomeReveal>
      </div>
    </section>

    {/* Trust ticker */}
    <HomeTrustTicker />

    <hr className="divider" />

    {/* FLEET — all 8 vehicles per CONTENT.md §3 */}
    <section className="section section--alt">
      <div className="container">
        <span className="eyebrow">Our fleet</span>
        <h2 style={{ margin: "var(--space-4) 0 var(--space-3)" }}>
          Every vehicle class, <span className="accent">every group size.</span>
        </h2>
        <p className="lead" style={{ maxWidth: "60ch", marginBottom: "var(--space-7)" }}>
          From a four-seat sedan for an airport drop to a 56-seater Volvo for a
          wedding party — every vehicle below comes with a driver from our vetted
          owner-driver network. Same dispatch desk, same pricing logic, same
          WhatsApp number.
        </p>
        <div className="grid-auto-260">
          <VehicleCard image="public/images/fleet/fleet-sedan-dzire.webp"
            altText="Maruti Suzuki Dzire sedan with driver — for airport drops and business trips from Ahmedabad"
            category="Car with driver" name="Sedan (Dzire / Etios)"
            capacity="Seats 4 + driver"
            desc="Comfortable for airport drops, business trips, small family outstation runs."
            perKm="₹11/km" package="₹2,400" ctaLabel="Book a sedan" />
          <VehicleCard image="public/images/fleet/fleet-mpv-ertiga.webp"
            altText="Maruti Suzuki Ertiga 6-seater MPV with driver — family-friendly outstation choice from Ahmedabad"
            category="Car with driver" name="Maruti Ertiga"
            capacity="Seats 6 + driver"
            desc="The family-friendly choice — extra space for luggage on multi-day Gujarat or Rajasthan trips."
            perKm="₹13/km" package="₹3,000" ctaLabel="Book an Ertiga" />
          <VehicleCard image="public/images/fleet/fleet-suv-innova.webp"
            altText="Toyota Innova / Innova Crysta SUV with driver — premium pick for long-distance and weddings"
            category="Car with driver" name="Toyota Innova / Crysta"
            capacity="Seats 6–7 + driver"
            desc="Premium pick for long-distance comfort, executive transport, weddings, NRI family trips."
            perKm="₹16/km" package="₹3,800" ctaLabel="Book an Innova" />
          <VehicleCard image="public/images/fleet/fleet-tempo-12seater.webp"
            altText="12-seater tempo traveller with driver — for family tours and group outstation trips from Ahmedabad"
            category="Tempo Traveller with driver" name="12-seater Tempo Traveller"
            capacity="Seats 12 + driver"
            desc="The workhorse for family tours, pilgrimage groups, school trips. AC, push-back seats, luggage space."
            perKm="₹24/km" package="₹6,500" ctaLabel="See Tempo Traveller hire"
            ctaHref="tempo-traveller-hire-ahmedabad.html" />
          <VehicleCard image="public/images/fleet/fleet-tempo-17seater.webp"
            altText="17-seater tempo traveller with driver — extended families, corporate groups, college trips"
            category="Tempo Traveller with driver" name="17-seater Tempo Traveller"
            capacity="Seats 17 + driver"
            desc="Extended families, mid-size corporate groups, college trips. Same comfort, more capacity."
            perKm="₹28/km" ctaLabel="See Tempo Traveller hire"
            ctaHref="tempo-traveller-hire-ahmedabad.html" />
          <VehicleCard image="public/images/fleet/fleet-tempo-26seater-maharaja.webp"
            altText="26-seater Maharaja tempo traveller with push-back recliners and AC — premium group travel"
            category="Tempo Traveller with driver" name="26-seater Maharaja Tempo"
            capacity="Seats 26 + driver"
            desc="Premium group travel — push-back recliners, AC, large luggage area. Wedding parties, premium tours."
            perKm="₹32/km" ctaLabel="See Tempo Traveller hire"
            ctaHref="tempo-traveller-hire-ahmedabad.html" />
          <VehicleCard image="public/images/fleet/fleet-bus-32seater-mini.webp"
            altText="32-seater mini bus with driver — school trips, mid-size weddings, corporate offsites"
            category="Bus with driver" name="32-seater Mini Bus"
            capacity="Seats 32 + driver"
            desc="School trips, mid-size wedding parties, corporate offsites. AC and non-AC available."
            perKm="₹40/km" ctaLabel="See bus hire options"
            ctaHref="bus-hire-ahmedabad.html" />
          <VehicleCard image="public/images/fleet/fleet-bus-56seater-volvo.webp"
            altText="56-seater Volvo multi-axle bus with driver — premium long-distance group travel and large pilgrimage groups"
            category="Bus with driver" name="56-seater Volvo Multi-Axle"
            capacity="Seats 56 + driver(s)"
            desc="Premium long-distance group travel. Volvo and Bharat Benz options. Used for weddings, large pilgrimage groups, corporate events."
            perKm="₹70/km" ctaLabel="See bus hire options"
            ctaHref="bus-hire-ahmedabad.html" />
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--color-ink-mute)", marginTop: "var(--space-6)", maxWidth: "70ch" }}>
          Prices are starting rates. Final quote includes GST and accounts for season, route, vehicle availability, and night-halt requirements.
          Tolls, parking, and inter-state permits billed at actuals.
        </p>
      </div>
    </section>

    <hr className="divider" />

    {/* ROUTES — all 8 per CONTENT.md §5 */}
    <section className="section">
      <div className="container">
        <span className="eyebrow">Outstation routes</span>
        <h2 style={{ margin: "var(--space-4) 0 var(--space-3)" }}>
          From Ahmedabad to <span className="accent">anywhere in India.</span>
        </h2>
        <p className="lead" style={{ maxWidth: "60ch", marginBottom: "var(--space-7)" }}>
          Eight routes that make up the bulk of our work. Distances and drive times
          are real. WhatsApp for current rates — your quote adjusts for vehicle,
          season, and stops.
        </p>
        <div className="grid-auto-320">
          <RouteCard n="01" name="Ahmedabad → Mumbai"
            href="routes/ahmedabad-to-mumbai.html"
            meta="~525 km · 9–10 hrs · One-way / round trip"
            price="WhatsApp for current rates."
            desc="The most-booked route on the desk. NH 48 via Vadodara, drop to BOM Terminal 2 or T1. Departures are plotted backwards from your boarding time — late-night and 3am drops are routine." />
          <RouteCard n="02" name="Ahmedabad → Rajasthan Circuit"
            href="routes/ahmedabad-to-rajasthan.html"
            meta="Jaipur / Udaipur / Jodhpur · Multi-day"
            price="WhatsApp for current rates."
            desc="Full circuit or straight to one city. Sedans for couples, Tempos for extended families. Drive times are real; we'll flag which NH segments to watch in the monsoon." />
          <RouteCard n="03" name="Ahmedabad → Surat"
            href="routes/ahmedabad-to-surat.html"
            meta="~265 km · 4–5 hrs · One-way / round"
            price="WhatsApp for current rates."
            desc="Gujarat's business corridor. NH 48 south, 4–5 hours depending on traffic leaving Ahmedabad. Popular for corporate day trips and family visits where flying doesn't make sense." />
          <RouteCard n="04" name="Ahmedabad → Vadodara"
            href="routes/ahmedabad-to-vadodara.html"
            meta="~110 km · 2 hrs · One-way / round"
            price="WhatsApp for current rates."
            desc="Our shortest outstation run. Airport transfers, business meetings, family visits — works as a quick morning-and-back. Vadodara Airport pickups on the way in from Mumbai flights." />
          <RouteCard n="05" name="Ahmedabad → Rajkot"
            href="routes/ahmedabad-to-rajkot.html"
            meta="~215 km · 4 hrs · One-way / round"
            price="WhatsApp for current rates."
            desc="Saurashtra's commercial hub, four hours west on NH 27. Most bookings are business day-trips; some extend to Jamnagar or Dwarka on the same vehicle." />
          <RouteCard n="06" name="Ahmedabad → Bhuj"
            href="routes/ahmedabad-to-bhuj.html"
            meta="~330 km · 6 hrs · One-way / round"
            price="WhatsApp for current rates."
            desc="Gateway to Kutch — the white Rann, artisan villages around Hodka, Bhuj old city. Demand runs heavily seasonal Nov–Feb; book the vehicle early if you're planning Rann Utsav." />
          <RouteCard n="07" name="Ahmedabad → Pune"
            href="routes/ahmedabad-to-pune.html"
            meta="~660 km · 11 hrs · One-way / round"
            price="WhatsApp for current rates."
            desc="Long haul — full day on the road or a comfortable overnight start. Families relocating, corporate transfers, students. The NH 48 to NH 60 route is well-lit and well-serviced." />
          <RouteCard n="08" name="Ahmedabad → Nashik"
            href="routes/ahmedabad-to-nashik.html"
            meta="~580 km · 10 hrs · One-way / round"
            price="WhatsApp for current rates."
            desc="Trimbakeshwar, the wine belt, and family connections for many Gujarati households. Can be combined with a Mumbai leg — Nashik to Mumbai is four hours, not a detour." />
          <RouteCard n="09" name="Your Route"
            meta="Outstation · Pan-India · Any destination"
            price="WhatsApp for current rates."
            desc="Not on the list? We cover all of Gujarat and operate pan-India — Goa, Delhi, Shirdi, Dwarka, Nathdwara, or anywhere else. Drop your from/to on WhatsApp and we'll quote with vehicle options." />
        </div>
      </div>
    </section>

    <hr className="divider" />

    {/* PILLARS — all 5 per CONTENT.md §4 */}
    <section className="section section--alt">
      <div className="container">
        <span className="eyebrow">Why RDB Travels</span>
        <h2 style={{ margin: "var(--space-4) 0 var(--space-3)" }}>
          Five reasons Ahmedabad <span className="accent">keeps coming back.</span>
        </h2>
        <div style={{ maxWidth: "820px", marginTop: "var(--space-6)" }}>
          <Pillar n="01" title="Direct from the operator. No brokers."
            body="You speak to Ronak's dispatch desk — the office that vets the drivers, confirms the vehicle, and owns the accountability. No three-way phone calls, no second markup, no &quot;the broker said something different&quot; on the day of your trip." />
          <Pillar n="02" title="Every vehicle class. One vendor."
            body="Sedan to 56-seater Volvo, all dispatched from one office. One number for a wedding's bridal car and the band's bus — the same person picks up. No coordinating four operators for one event." />
          <Pillar n="03" title="GST-compliant, transparent pricing."
            body="Every quote is itemised — vehicle, driver bata, fuel, GST. No &quot;convenience fee&quot; appearing at handover. You pay what we quoted. We provide a proper GST tax invoice for corporate billing." />
          <Pillar n="04" title="Real Gujarat & pan-India routing knowledge."
            body="Ten years of trips means we know the actual drive — which dhaba is open at 4am on NH 48, which border permit holds you up, which Saurashtra temple closes at noon. Not Google Maps. Drivers who've made the run a hundred times." />
          <Pillar n="05" title="Permit-verified vehicles, safety-first drivers."
            body="Tourist Permit, AITP, valid PUC and fitness on every vehicle. Drivers are police-verified, vetted by our office, and known to dispatch by name — not anonymous-app matching. Comprehensive insurance covers you for the entire trip." />
        </div>
      </div>
    </section>

    <hr className="divider" />

    {/* FAQ — redesigned: tabbed 2-column */}
    <HomeFaqSection />

    {/* CTA BAND */}
    <section className="section section--saffron">
      <div className="container" style={{ textAlign: "center", maxWidth: "760px" }}>
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>Ready when you are</span>
        <h2 style={{ margin: "var(--space-4) 0 var(--space-4)", color: "var(--color-white)" }}>
          Ready to book? <span style={{ color: "rgba(255,255,255,0.78)" }}>Two ways</span> to start.
        </h2>
        <p className="lead" style={{ color: "rgba(255,255,255,0.92)", marginBottom: "var(--space-6)" }}>
          WhatsApp for an instant quote, call for complex itineraries.
          No advance to enquire — paperwork only after you've seen the GST-itemised number.
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-whatsapp" onClick={openQuoteModal}><WhatsAppIcon /> WhatsApp us</button>
          <a href="tel:+919876543210" className="btn btn-call" style={{ background: "var(--color-white)", color: "var(--color-saffron-deep)", borderColor: "var(--color-saffron)" }}>
            <PhoneIcon /> Call +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  </main>
);

export { HomePage };
