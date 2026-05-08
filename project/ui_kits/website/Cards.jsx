// RDB Travels — Cards (vehicle + route + scenario + faq + chips)

const Chip = ({ children }) => <span className="chip">{children}</span>;

const VehicleCard = ({ icon, image, altText, category, name, capacity, desc, perKm, package: pkg, ctaLabel }) => (
  <article className="vehicle-card">
    {image
      ? <div className="vehicle-card__photo"><img src={image} alt={altText || name} loading="lazy" /></div>
      : <div className="vehicle-card__icon">{icon}</div>
    }
    <div>
      <div className="vehicle-card__category">{category}</div>
      <h3 className="vehicle-card__name">{name}</h3>
      <div className="vehicle-card__capacity">{capacity}</div>
    </div>
    <p className="vehicle-card__desc">{desc}</p>
    <div className="vehicle-card__price">
      <span>From <strong>{perKm}</strong> outstation</span>
      {pkg && <span><strong>{pkg}</strong> / 8-hour package</span>}
    </div>
    <div className="vehicle-card__includes">Includes professional driver, fuel, AC</div>
    <a href="#" style={{ fontWeight: 600, color: "var(--color-ink)", textDecoration: "none", fontSize: "0.95rem" }}>
      {ctaLabel} <span className="arrow">→</span>
    </a>
  </article>
);

const RouteCard = ({ n, name, meta, price, desc }) => (
  <article className="route-card">
    <div className="route-card__numeral">{n}</div>
    <h3 className="route-card__name">{name}</h3>
    <div className="route-card__meta">{meta}</div>
    <div className="route-card__price">{price}</div>
    <p className="route-card__desc">{desc}</p>
    <a href="#" style={{ fontWeight: 600, color: "var(--color-ink)", textDecoration: "none", fontSize: "0.95rem" }}>
      See route detail →
    </a>
  </article>
);

const ScenarioCard = ({ icon, title, sub, onClick }) => (
  <a href="#" className="scenario-card" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}>
    <span className="scenario-card__icon">{icon}</span>
    <div>
      <h4 className="scenario-card__title">{title}</h4>
      <p className="scenario-card__sub">{sub}</p>
    </div>
    <span className="scenario-card__arrow">→</span>
  </a>
);

// Channel card — contact page (WhatsApp / Phone / Email)
const ChannelCard = ({ icon, eyebrow, title, value, desc, ctaLabel, featured }) => (
  <article className={"channel-card" + (featured ? " channel-card--featured" : "")}>
    <div className="channel-card__icon">{icon}</div>
    <div className="channel-card__eyebrow">{eyebrow}</div>
    <h3 className="channel-card__title">{title}</h3>
    <div className="channel-card__value">{value}</div>
    <p className="channel-card__desc">{desc}</p>
    <a href="#" className="channel-card__cta">{ctaLabel} <span className="arrow">→</span></a>
  </article>
);

// Credential card — about page (✓ tile + title + body)
const CredentialCard = ({ title, body }) => (
  <article className="credential-card">
    <div className="credential-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
    </div>
    <h4 className="credential-card__title">{title}</h4>
    <p className="credential-card__body">{body}</p>
  </article>
);

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="faq-item">
      <div className="faq-item__q" onClick={() => setOpen(o => !o)} style={{ cursor: "pointer" }}>
        <span>{q}</span>
        <span className="faq-item__icon">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  );
};

const Pillar = ({ n, title, body }) => (
  <div className="pillar">
    <div className="pillar__numeral">{n}</div>
    <div>
      <h3 className="pillar__title">{title}</h3>
      <p className="pillar__body">{body}</p>
    </div>
  </div>
);

Object.assign(window, { Chip, VehicleCard, RouteCard, ScenarioCard, ChannelCard, CredentialCard, FaqItem, Pillar });
