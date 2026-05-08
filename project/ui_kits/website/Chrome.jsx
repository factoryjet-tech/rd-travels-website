// RD Travels — Header / Nav
const Header = ({ active = "home", onNavigate }) => {
  const link = (id, label) => (
    <a
      href="#"
      className="nav__link"
      aria-current={active === id ? "page" : undefined}
      onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(id); }}
    >{label}</a>
  );
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand" onClick={(e)=>{e.preventDefault(); onNavigate && onNavigate("home");}}>
          <span className="brand__monogram">R</span>
          <span>RD Travels</span>
        </a>
        <nav className="nav__links" aria-label="Primary">
          {link("home", "Home")}
          {link("about", "About")}
          {link("contact", "Contact")}
          <a href="#" className="btn btn-whatsapp" style={{ padding: "10px 18px", fontSize: "0.9rem" }}>
            <WhatsAppIcon /> WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};

// Sticky bottom CTA bar (mobile)
const MobileCtaBar = () => (
  <div className="mobile-cta">
    <a href="#" className="btn btn-whatsapp" style={{ flex: 1, justifyContent: "center" }}>
      <WhatsAppIcon /> WhatsApp us
    </a>
    <a href="#" className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }}>
      Call us
    </a>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="#" className="brand" style={{ color: "var(--color-white)" }}>
            <span className="brand__monogram">R</span>
            <span style={{ color: "var(--color-white)" }}>RD Travels</span>
          </a>
          <p style={{ margin: "var(--space-4) 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", maxWidth: "36ch" }}>
            Ahmedabad's direct travels operator since 2015. Cars, Tempo Travellers, and buses with driver. Vetted owner-driver network, transparent prices, no brokers.
          </p>
        </div>
        <div>
          <p className="footer__col-title">Explore</p>
          <ul className="footer__list"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul>
        </div>
        <div>
          <p className="footer__col-title">Top routes</p>
          <ul className="footer__list"><li><a href="#">Mumbai</a></li><li><a href="#">Rajasthan</a></li><li><a href="#">Surat</a></li><li><a href="#">Vadodara</a></li></ul>
        </div>
        <div>
          <p className="footer__col-title">Get in touch</p>
          <ul className="footer__list">
            <li><a href="#">WhatsApp +91 98765 43210</a></li>
            <li><a href="#">Call +91 98765 43210</a></li>
            <li><a href="#">hello@rdtravels.in</a></li>
            <li style={{ color: "rgba(255,255,255,0.7)" }}>Ahmedabad, Gujarat 380001</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 RD Travels. All rights reserved.</span>
        <span>GST · Tourist Permit · AITP · Insurance · Since 2015</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Header, MobileCtaBar, Footer });
