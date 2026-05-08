// RDB Travels — About page

// ─── Reveal hook (about) ───────────────────────────────────────────────────────
const useAboutReveal = (threshold = 0.12) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const AboutReveal = ({ children, delay = 0, style }) => {
  const [ref, visible] = useAboutReveal(0.1);
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

const AboutCounter = ({ to, suffix = "" }) => {
  const [val, setVal] = React.useState(0);
  const started = React.useRef(false);
  const [ref, visible] = useAboutReveal(0.3);
  React.useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const t0 = performance.now();
    const tick = (now) => {
      const t = Math.min((now - t0) / 1300, 1);
      setVal(Math.round((1 - Math.pow(1 - t, 3)) * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, to]);
  return <span ref={ref}>{val}{suffix}</span>;
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    year: "2015",
    title: "Founded",
    body: "Ronak Dineshbhai Barot starts RDB Travels out of Ahmedabad with two sedans and one Tempo Traveller. First Mumbai airport drop is booked within weeks.",
  },
  {
    year: "2018",
    title: "Fleet doubles",
    body: "Innova Crysta and 17-seater Tempo Travellers join the network. First repeat corporate accounts begin booking monthly.",
  },
  {
    year: "2020",
    title: "GST registered · AITP permits",
    body: "Full GST registration and All-India Tourist Permits on every vehicle. Inter-state routes formalised — Rajasthan, Maharashtra, Madhya Pradesh.",
  },
  {
    year: "2023",
    title: "Volvo & Maharaja added",
    body: "56-seater Volvo Multi-Axle and 26-seater Maharaja Tempo join the fleet. Wedding-scale bookings — bridal car, band bus, guest Tempos — now from one desk.",
  },
  {
    year: "2026",
    title: "500+ trips. 8 vehicle classes.",
    body: "One Ahmedabad office. Same WhatsApp number. Same dispatch philosophy. Sedan to Volvo, airport drop to week-long Rajasthan circuit.",
  },
];

const ABOUT_VALUES = [
  {
    n: "01",
    title: "Direct from the operator",
    body: "You speak to the desk that vets the drivers, owns the accountability, and knows every owner-driver by name. No broker in between. No 'the aggregator said something different' on the day of the trip.",
  },
  {
    n: "02",
    title: "Owner-driver model",
    body: "The person at the wheel owns the vehicle. They've made this route many times, their income depends on your experience, and Ronak's desk knows them by name — not by an app-assigned ID.",
  },
  {
    n: "03",
    title: "GST-itemised, no surprises",
    body: "Every quote lists vehicle, driver bata, GST, tolls, and night-halt separately. What you see on WhatsApp is what you pay. Proper tax invoice for every booking — GSTIN on every document.",
  },
  {
    n: "04",
    title: "24×7 dispatch — 3am is normal",
    body: "Mumbai 3am airport drops are the most-booked slot on this route. We run overnight, calculate your departure from your boarding gate backwards, and pad traffic realistically.",
  },
];

// ─── Portrait card (right panel) ──────────────────────────────────────────────
const FounderPortraitCard = () => {
  const [ref, visible] = useAboutReveal(0.1);
  return (
    <div ref={ref} className={`about-portrait-card${visible ? " about-portrait-card--in" : ""}`}>
      <div className="about-portrait-card__frame">
        <img
          src="public/images/ronak-portrait-fleet.webp"
          alt="Ronak Dineshbhai Barot, founder of RDB Travels, Ahmedabad"
          className="about-portrait-card__img"
          width="1066"
          height="1600"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="about-portrait-card__badge">
          <span className="about-portrait-card__badge-dot" aria-hidden="true" />
          Dispatch open · WhatsApp
        </div>
      </div>
      <div className="about-portrait-card__caption">
        <div className="about-portrait-card__name">Ronak Dineshbhai Barot</div>
        <div className="about-portrait-card__role">Founder · RDB Travels · Ahmedabad</div>
      </div>
    </div>
  );
};

// ─── Milestone timeline ────────────────────────────────────────────────────────
const Timeline = () => {
  const [ref, visible] = useAboutReveal(0.1);
  return (
    <div ref={ref} className="about-timeline">
      {MILESTONES.map((m, i) => (
        <div
          key={i}
          className={`about-timeline__item${visible ? " about-timeline__item--in" : ""}`}
          style={{ transitionDelay: `${0.1 + i * 0.14}s` }}
        >
          <div className="about-timeline__year">{m.year}</div>
          <div className="about-timeline__connector" aria-hidden="true">
            <div className="about-timeline__dot" />
            {i < MILESTONES.length - 1 && <div className="about-timeline__line" />}
          </div>
          <div className="about-timeline__content">
            <h3 className="about-timeline__title">{m.title}</h3>
            <p className="about-timeline__body">{m.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────
const AboutPage = () => (
  <main>

    {/* ════════════════════════════════════════
        HERO
        ════════════════════════════════════════ */}
    <section className="route-hero section">
      <div className="route-hero__blob"  aria-hidden="true" />
      <div className="route-hero__blob2" aria-hidden="true" />
      <div className="container">
        <div className="route-hero__inner" style={{ gridTemplateColumns: "1fr 320px" }}>

          {/* ── Left: copy ── */}
          <div>
            <AboutReveal>
              <span className="eyebrow">About RDB Travels · Ahmedabad</span>
            </AboutReveal>
            <AboutReveal delay={0.08}>
              <h1 style={{ margin: "var(--space-4) 0 var(--space-4)", maxWidth: "18ch" }}>
                A travels yard, <span className="accent">since 2015.</span>
              </h1>
            </AboutReveal>
            <AboutReveal delay={0.14}>
              <p className="lead" style={{ maxWidth: "52ch", marginBottom: "var(--space-4)" }}>
                We started with two sedans and one Tempo Traveller. Today Ronak's
                Ahmedabad desk dispatches every vehicle class — sedan to 56-seater
                Volvo — through a vetted owner-driver network he knows by name.
                Same family office, same WhatsApp number, since 2015.
              </p>
            </AboutReveal>
            <AboutReveal delay={0.2}>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-4)" }}>
                <a href="#" className="btn btn-whatsapp"><WhatsAppIcon /> WhatsApp for a quote</a>
                <a href="#" className="btn btn-outline">Call +91 [PHONE]</a>
              </div>
            </AboutReveal>
            <AboutReveal delay={0.26}>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <Chip>Founded 2015</Chip>
                <Chip>GST registered</Chip>
                <Chip>Tourist Permit · AITP</Chip>
                <Chip>Police-verified drivers</Chip>
              </div>
            </AboutReveal>
          </div>

          {/* ── Right: founder portrait ── */}
          <div className="route-hero__viz">
            <FounderPortraitCard />
          </div>
        </div>

        {/* Stats bar */}
        <AboutReveal delay={0.12} style={{ marginTop: "var(--space-4)" }}>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat__num"><AboutCounter to={500} suffix="+" /></div>
              <div className="hero-stat__label">outstation trips completed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__num">8</div>
              <div className="hero-stat__label">vehicle classes, one desk</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat__num">2015</div>
              <div className="hero-stat__label">founded in Ahmedabad</div>
            </div>
          </div>
        </AboutReveal>
      </div>
    </section>

    {/* ════════════════════════════════════════
        STORY
        ════════════════════════════════════════ */}
    <section className="section">
      <div className="container" style={{ maxWidth: "900px" }}>
        <AboutReveal>
          <span className="eyebrow">The story</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-5)" }}>
            Why <span className="accent">direct operator</span> matters.
          </h2>
        </AboutReveal>
        <div className="about-story-grid">
          <AboutReveal delay={0.05}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink-soft)", marginBottom: "var(--space-5)" }}>
              The outstation travels market in India is full of aggregators —
              platforms that take your booking and hand it to whoever is available
              that day. You get an unknown driver, a mismatch on vehicle expectations,
              and a "speak to the aggregator" response when something goes wrong.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink-soft)", marginBottom: "var(--space-5)" }}>
              Ronak started RDB Travels with a different model: a vetted network of
              owner-drivers — people who own their vehicles, know their routes, and
              whose names Ronak knows personally. The driver who picks you up for your
              Mumbai run has made that route dozens of times. His livelihood depends on
              your experience being good.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink-soft)" }}>
              Eleven years in, the model hasn't changed. The fleet has grown from two
              sedans to eight vehicle classes. The routes cover all of Gujarat and
              pan-India. The WhatsApp number is still the same.
            </p>
          </AboutReveal>
          <AboutReveal delay={0.12}>
            <blockquote className="about-pullquote">
              "The driver you get owns the vehicle and has made the route many times.
              No anonymous-app matching, no broker markup, no 'the operator said
              something different' on trip day."
              <cite className="about-pullquote__cite">— Ronak Dineshbhai Barot, Founder</cite>
            </blockquote>
          </AboutReveal>
        </div>
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        TIMELINE
        ════════════════════════════════════════ */}
    <section className="section section--alt">
      <div className="container" style={{ maxWidth: "900px" }}>
        <AboutReveal>
          <span className="eyebrow">Milestones</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-7)" }}>
            Eleven years, <span className="accent">one desk.</span>
          </h2>
        </AboutReveal>
        <Timeline />
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        VALUES / HOW WE DIFFER
        ════════════════════════════════════════ */}
    <section className="section">
      <div className="container">
        <AboutReveal>
          <span className="eyebrow">How we differ</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-7)" }}>
            Four things that haven't <span className="accent">changed since 2015.</span>
          </h2>
        </AboutReveal>
        <div className="about-value-grid">
          {ABOUT_VALUES.map((v, i) => (
            <AboutReveal key={i} delay={i * 0.08}>
              <div className="about-value-card">
                <div className="about-value-card__num">{v.n}</div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__body">{v.body}</p>
              </div>
            </AboutReveal>
          ))}
        </div>
      </div>
    </section>

    <hr className="divider" />

    {/* ════════════════════════════════════════
        HOW TO BOOK
        ════════════════════════════════════════ */}
    <section className="section section--alt">
      <div className="container">
        <AboutReveal>
          <span className="eyebrow">How to book</span>
          <h2 style={{ margin: "var(--space-3) 0 var(--space-3)" }}>
            3 steps. <span className="accent">5 minutes.</span>
          </h2>
          <p className="lead" style={{ maxWidth: "56ch", marginBottom: "var(--space-7)" }}>
            The fastest way is WhatsApp — quote in 15 minutes. For complex
            multi-vehicle itineraries, call Ronak's desk directly.
          </p>
        </AboutReveal>
        <div style={{ maxWidth: "820px" }}>
          <Pillar n="01" title="Tell us where, when, how many."
            body="WhatsApp or call. Pickup, destination, dates, group size. That's enough for vehicle options and a GST-itemised quote." />
          <Pillar n="02" title="Confirm with a small advance."
            body="No advance to enquire. Once you've chosen your vehicle and seen the itemised number, a small advance locks the calendar." />
          <Pillar n="03" title="We pick you up. You travel."
            body="Driver calls 30 minutes before pickup. Vehicle is fuelled, cleaned, AC-on. You travel; Ronak's desk monitors throughout." />
        </div>
      </div>
    </section>

    {/* CTA band */}
    <section className="section section--saffron">
      <div className="container" style={{ textAlign: "center", maxWidth: "760px" }}>
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>Ready to travel</span>
        <h2 style={{ margin: "var(--space-4) 0 var(--space-4)", color: "var(--color-white)" }}>
          Got a trip in mind?{" "}
          <span style={{ color: "rgba(255,255,255,0.78)" }}>Drop it on WhatsApp.</span>
        </h2>
        <p className="lead" style={{ color: "rgba(255,255,255,0.88)", marginBottom: "var(--space-6)" }}>
          Pickup, destination, date, and group size is enough. Quote comes
          back in 15 minutes — GST-itemised, no advance to enquire.
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn btn-whatsapp"><WhatsAppIcon /> WhatsApp us your trip</a>
          <a href="#" className="btn" style={{ background: "var(--color-white)", color: "var(--color-saffron-deep)" }}>
            Call +91 [PHONE]
          </a>
        </div>
      </div>
    </section>
  </main>
);

// RDB Travels — Contact page
const ContactPage = () => (
  <main>
    <section className="section">
      <div className="container">
        <span className="eyebrow">Contact</span>
        <h1 style={{ margin: "var(--space-5) 0 var(--space-5)", maxWidth: "20ch" }}>
          Booking takes <span className="accent">3 steps</span> and 5 minutes.
        </h1>
        <p className="lead" style={{ maxWidth: "60ch", marginBottom: "var(--space-7)" }}>
          The fastest path is WhatsApp — most quotes go out in 15 minutes.
          For complex itineraries (weddings, multi-vehicle, corporate retainer), call.
        </p>

        <div className="grid-2" style={{ gap: "var(--space-7)" }}>
          {/* SCENARIOS */}
          <div>
            <span className="eyebrow">Common bookings — one tap</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <ScenarioCard icon={<PlaneIcon />} title="Mumbai Airport drop" sub="Sedan or Innova · 9–10 hours" />
              <ScenarioCard icon={<TempleIcon />} title="Somnath–Dwarka pilgrimage" sub="Tempo or Innova · 3–4 days" />
              <ScenarioCard icon={<RingIcon />} title="Wedding transport" sub="Bridal car + band bus + family Tempos" />
              <ScenarioCard icon={<BuildingIcon />} title="Corporate retainer" sub="Monthly billing, dedicated vehicle" />
            </div>
          </div>

          {/* FORM */}
          <div>
            <span className="eyebrow">Or send a quote request</span>
            <h3 style={{ margin: "var(--space-3) 0 var(--space-5)" }}>
              We'll WhatsApp you <span className="accent">in 15 minutes.</span>
            </h3>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>

    <hr className="divider" />

    <section className="section section--alt">
      <div className="container" style={{ maxWidth: "820px" }}>
        <span className="eyebrow">Find us</span>
        <h2 style={{ margin: "var(--space-4) 0 var(--space-5)" }}>
          The yard is in <span className="accent">Ahmedabad.</span>
        </h2>
        <div className="grid-3" style={{ gap: "var(--space-5)" }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-saffron-deep)", margin: 0 }}>WhatsApp</p>
            <p style={{ margin: "var(--space-2) 0 0", fontWeight: 600 }}>+91 98765 43210</p>
            <p style={{ margin: "var(--space-1) 0 0", color: "var(--color-ink-mute)", fontSize: "0.9rem" }}>Quotes in 15 minutes</p>
          </div>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-saffron-deep)", margin: 0 }}>Call</p>
            <p style={{ margin: "var(--space-2) 0 0", fontWeight: 600 }}>+91 98765 43210</p>
            <p style={{ margin: "var(--space-1) 0 0", color: "var(--color-ink-mute)", fontSize: "0.9rem" }}>Mon–Sat · 8am to 9pm IST</p>
          </div>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-saffron-deep)", margin: 0 }}>Office</p>
            <p style={{ margin: "var(--space-2) 0 0", fontWeight: 600 }}>[OFFICE ADDRESS]</p>
            <p style={{ margin: "var(--space-1) 0 0", color: "var(--color-ink-mute)", fontSize: "0.9rem" }}>Ahmedabad, Gujarat 380001</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const QuoteForm = () => {
  const [phone, setPhone] = React.useState("");
  const phoneError = phone && !/^[6-9]/.test(phone.replace(/\D/g, "").slice(-10, -9));
  const Field = ({ label, value, onChange, placeholder, help, error }) => (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-saffron-deep)" }}>{label}</span>
      <input
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          background: "#fff",
          border: `1px solid ${error ? "var(--color-error)" : "rgba(26,24,21,0.18)"}`,
          borderRadius: 10,
          padding: "12px 14px",
          fontFamily: "var(--font-sans)",
          fontSize: "0.95rem",
          color: "var(--color-ink)",
        }}
      />
      <span style={{ fontSize: "0.78rem", color: error ? "var(--color-error)" : "var(--color-ink-mute)" }}>
        {error || help}
      </span>
    </label>
  );
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
      <Field label="Pickup" placeholder="Ahmedabad — Satellite" help="Your pickup neighbourhood or address." />
      <Field label="Destination" placeholder="Mumbai International Airport" help="Pan-India · we route via NH 48." />
      <Field label="Travel date" placeholder="DD / MM / YYYY" help="Outward date; we'll ask about return on WhatsApp." />
      <Field label="Group size" placeholder="2 adults, 1 child" help="Helps us pick the right vehicle." />
      <Field label="Phone" placeholder="+91 98xxx xxxxx" value={phone} onChange={(e) => setPhone(e.target.value)}
        help="We'll WhatsApp the quote here." error={phoneError && "Indian numbers start with 6, 7, 8, or 9."} />
      <Field label="Email (optional)" placeholder="you@example.com" help="Only if you want a GST invoice copy." />
      <div style={{ gridColumn: "1 / -1", display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
        <button className="btn btn-primary" type="submit">Get instant quote</button>
        <a href="#" className="btn btn-whatsapp"><WhatsAppIcon /> WhatsApp instead</a>
      </div>
      <p style={{ gridColumn: "1 / -1", fontSize: "0.82rem", color: "var(--color-ink-mute)", margin: 0 }}>
        No spam. No advance to enquire. GST-clear pricing.
      </p>
    </form>
  );
};

Object.assign(window, { AboutPage, ContactPage, QuoteForm });
