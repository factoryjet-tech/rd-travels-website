// RDB Travels — Header / Nav
const Header = ({ active = "home", onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavigate = (id) => {
    setMenuOpen(false);
    onNavigate && onNavigate(id);
  };

  const link = (id, label) => (
    <a
      href="#"
      className="nav__link"
      aria-current={active === id ? "page" : undefined}
      onClick={(e) => { e.preventDefault(); handleNavigate(id); }}
    >{label}</a>
  );

  // Close menu on outside click
  React.useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => { if (!e.target.closest(".nav__inner")) setMenuOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand" onClick={(e)=>{e.preventDefault(); handleNavigate("home");}}>
          <span>RDB Travels</span>
        </a>
        <nav className={`nav__links${menuOpen ? " nav__links--open" : ""}`} aria-label="Primary">
          {link("home", "Home")}
          {link("about", "About")}
          {link("contact", "Contact")}
          <a
            href="https://wa.me/919876543210?text=Hi%20RDB%20Travels%2C%20I%27d%20like%20a%20quote%20for..."
            className="btn btn-whatsapp"
            style={{ padding: "10px 18px", fontSize: "0.9rem" }}
            target="_blank" rel="noopener noreferrer"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </nav>
        <button
          className={`nav__hamburger${menuOpen ? " nav__hamburger--open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="nav__hamburger__line" aria-hidden="true"></span>
          <span className="nav__hamburger__line" aria-hidden="true"></span>
          <span className="nav__hamburger__line" aria-hidden="true"></span>
        </button>
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
              <span style={{ color: "var(--color-white)" }}>RDB Travels</span>
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
            <li><a href="#">hello@rdbtravels.in</a></li>
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

Object.assign(window, { Header, MobileCtaBar, Footer });
