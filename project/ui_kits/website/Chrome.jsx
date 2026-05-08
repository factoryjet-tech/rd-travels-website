import React from 'react';
import { WhatsAppIcon, PhoneIcon } from './Icons.jsx';

// ── Contact constants (replaced in one command when live numbers are ready) ───
const PHONE_RAW  = "919876543210";   // E.164 without +
const PHONE_DISP = "+91 98765 43210";
const EMAIL      = "hello@rdbtravels.in";

// ── Global quote trigger (call from any component) ────────────────────────────
export const openQuoteModal = () =>
  window.dispatchEvent(new CustomEvent("rdb:openQuote"));

// ── Quote / Lead Modal ────────────────────────────────────────────────────────
const QuoteModal = () => {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", phone: "", route: "", vehicle: "" });
  const firstRef = React.useRef(null);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("rdb:openQuote", handler);
    return () => window.removeEventListener("rdb:openQuote", handler);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstRef.current && firstRef.current.focus(), 50);
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = [
      "Hi RDB Travels, I'd like a quote.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Route / Requirement: ${form.route}`,
      form.vehicle ? `Vehicle: ${form.vehicle}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`, "_blank");
    close();
  };

  if (!open) return null;

  return (
    <div className="qmodal-overlay" onClick={(e) => { if (e.target === e.currentTarget) close(); }} role="presentation">
      <div className="qmodal" role="dialog" aria-modal="true" aria-labelledby="qmodal-title">
        <button className="qmodal__close" onClick={close} aria-label="Close quote form">✕</button>

        <p className="qmodal__eyebrow">Direct from operator · No broker markup</p>
        <h2 className="qmodal__title" id="qmodal-title">Get your quote in 15 minutes</h2>
        <p className="qmodal__sub">
          Fill in your trip — we reply on WhatsApp with an exact price, vehicle
          options, and GST invoice info. No advance needed to enquire.
        </p>

        <form className="qmodal__form" onSubmit={onSubmit} noValidate>
          <div className="qmodal__row">
            <div className="qmodal__field">
              <label htmlFor="qm-name">Your name</label>
              <input id="qm-name" type="text" ref={firstRef} placeholder="Ronak Shah"
                value={form.name} onChange={set("name")} required autoComplete="name" />
            </div>
            <div className="qmodal__field">
              <label htmlFor="qm-phone">Mobile number</label>
              <input id="qm-phone" type="tel" placeholder="+91 98765 43210"
                value={form.phone} onChange={set("phone")} required autoComplete="tel" />
            </div>
          </div>

          <div className="qmodal__field">
            <label htmlFor="qm-route">Route or requirement</label>
            <input id="qm-route" type="text"
              placeholder="e.g. Ahmedabad to Mumbai, 4 pax, 12 May"
              value={form.route} onChange={set("route")} required />
          </div>

          <div className="qmodal__field">
            <label htmlFor="qm-vehicle">Vehicle preference <span>(optional)</span></label>
            <select id="qm-vehicle" value={form.vehicle} onChange={set("vehicle")}>
              <option value="">Not sure — suggest one</option>
              <option value="Sedan (Dzire / Etios) — up to 4 pax">Sedan (Dzire / Etios) — up to 4 pax</option>
              <option value="MPV Ertiga — up to 6 pax">MPV Ertiga — up to 6 pax</option>
              <option value="SUV Innova / Crysta — up to 7 pax">SUV Innova / Crysta — up to 7 pax</option>
              <option value="Tempo Traveller 12-seater">Tempo Traveller 12-seater</option>
              <option value="Tempo Traveller 17-seater">Tempo Traveller 17-seater</option>
              <option value="Maharaja Tempo 26-seater (push-back recliners)">Maharaja Tempo 26-seater (recliners)</option>
              <option value="Mini Bus 32-seater">Mini Bus 32-seater</option>
              <option value="Volvo / BharatBenz 56-seater">Volvo / BharatBenz 56-seater</option>
            </select>
          </div>

          <div className="qmodal__actions">
            <button type="submit" className="btn btn-whatsapp">
              <WhatsAppIcon size={18} /> Send on WhatsApp
            </button>
            <a href={`tel:+${PHONE_RAW}`} className="btn btn-call">
              <PhoneIcon size={18} /> Call {PHONE_DISP}
            </a>
          </div>
        </form>

        <p className="qmodal__trust">
          <span>🔒 GST-clear pricing</span>
          <span aria-hidden="true">·</span>
          <span>No spam · No advance to enquire</span>
          <span aria-hidden="true">·</span>
          <span>Direct operator since 2015</span>
        </p>
      </div>
    </div>
  );
};

// ── Header / Nav ──────────────────────────────────────────────────────────────
const Header = ({ active = "home", onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigate = (id) => {
    setMenuOpen(false);
    onNavigate && onNavigate(id);
  };

  const link = (id, label) => (
    <a href="#" className="nav__link"
      aria-current={active === id ? "page" : undefined}
      onClick={(e) => { e.preventDefault(); handleNavigate(id); }}
    >{label}</a>
  );

  React.useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (!e.target.closest(".nav__inner")) setMenuOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand" onClick={(e) => { e.preventDefault(); handleNavigate("home"); }}>
          <span>RDB Travels</span>
        </a>
        <nav className={`nav__links${menuOpen ? " nav__links--open" : ""}`} aria-label="Primary">
          {link("home", "Home")}
          {link("about", "About")}
          {link("contact", "Contact")}
          <div className="nav__cta-group">
            <button className="btn btn-whatsapp nav__btn" onClick={openQuoteModal}>
              <WhatsAppIcon /> WhatsApp
            </button>
            <a href={`tel:+${PHONE_RAW}`} className="btn btn-call nav__btn">
              <PhoneIcon /> Call
            </a>
          </div>
        </nav>
        <button
          className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav__hamburger__line" aria-hidden="true"></span>
          <span className="nav__hamburger__line" aria-hidden="true"></span>
          <span className="nav__hamburger__line" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
};

// ── Mobile sticky CTA bar ─────────────────────────────────────────────────────
const MobileCtaBar = () => (
  <div className="mobile-cta">
    <button className="btn btn-whatsapp" style={{ flex: 1, justifyContent: "center" }} onClick={openQuoteModal}>
      <WhatsAppIcon /> WhatsApp us
    </button>
    <a href={`tel:+${PHONE_RAW}`} className="btn btn-call" style={{ flex: 1, justifyContent: "center" }}>
      <PhoneIcon /> Call now
    </a>
  </div>
);

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = ({ onNavigate }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="#" className="brand" style={{ color: "var(--color-white)" }}>
            <span style={{ color: "var(--color-white)" }}>RDB Travels</span>
          </a>
          <p style={{ margin: "var(--space-4) 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", maxWidth: "36ch" }}>
            Ahmedabad's direct travels operator since 2015. Cars, Tempo Travellers, and buses with driver. Vetted owner-driver network, transparent prices, no brokers.
          </p>
        </div>
        <div>
          <p className="footer__col-title">Explore</p>
          <ul className="footer__list">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("about"); }}>About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("contact"); }}>Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="footer__col-title">Top routes</p>
          <ul className="footer__list">
            <li><a href="routes/ahmedabad-to-mumbai.html">Ahmedabad → Mumbai</a></li>
            <li><a href="routes/ahmedabad-to-rajasthan.html">Ahmedabad → Rajasthan</a></li>
            <li><a href="routes/ahmedabad-to-surat.html">Ahmedabad → Surat</a></li>
            <li><a href="routes/ahmedabad-to-vadodara.html">Ahmedabad → Vadodara</a></li>
          </ul>
        </div>
        <div>
          <p className="footer__col-title">Get in touch</p>
          <ul className="footer__list">
            <li>
              <button onClick={openQuoteModal}
                style={{ background:"none",border:"none",color:"rgba(255,255,255,0.85)",cursor:"pointer",padding:0,font:"inherit",textDecoration:"underline" }}>
                WhatsApp {PHONE_DISP}
              </button>
            </li>
            <li><a href={`tel:+${PHONE_RAW}`}>Call {PHONE_DISP}</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li style={{ color: "rgba(255,255,255,0.7)" }}>Ahmedabad, Gujarat 380001</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 RDB Travels. All rights reserved.</span>
        <span>GST · Tourist Permit · AITP · Insurance · Since 2015</span>
      </div>
    </div>
  </footer>
);

export { Header, MobileCtaBar, Footer, QuoteModal };
