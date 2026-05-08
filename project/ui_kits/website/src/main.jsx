import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header, MobileCtaBar, Footer, QuoteModal } from '../Chrome.jsx';
import { HomePage } from '../HomePage.jsx';
import { AboutPage, ContactPage } from '../AboutContact.jsx';

// ── Page meta ─────────────────────────────────────────────────────────────────
const META = {
  home: {
    title: "RDB Travels — Car Rental & Cab Service in Ahmedabad | Outstation Taxi, Tempo Traveller, Bus with Driver",
    desc:  "Ahmedabad car rental & outstation cab service direct from operator since 2015. Sedan, Innova, Tempo Traveller (12–26 seater), and 56-seater Volvo bus with driver. GST-clear pricing, no broker markup. WhatsApp quote in 15 minutes."
  },
  about: {
    title: "About RDB Travels — Ahmedabad Car Rental & Cab Service Operator Since 2015",
    desc:  "RDB Travels is Ahmedabad's direct car rental and outstation taxi operator since 2015. Founded by Ronak Dineshbhai Barot. Owned fleet, employed drivers, GST-clear pricing across Gujarat and pan-India."
  },
  contact: {
    title: "Contact RDB Travels — Ahmedabad Cab Service & Car Rental | WhatsApp +91 98765 43210",
    desc:  "Contact RDB Travels for outstation taxi, car rental, Tempo Traveller hire, and bus with driver in Ahmedabad. WhatsApp for a quote in 15 minutes. Same direct operator since 2015."
  }
};

// ── App shell ─────────────────────────────────────────────────────────────────
const App = () => {
  const [page, setPage] = React.useState("home");

  // Scroll to top on navigation
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  // Update <title> and meta description per page
  React.useEffect(() => {
    const m = META[page] || META.home;
    document.title = m.title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", m.desc);
  }, [page]);

  return (
    <>
      <Header active={page} onNavigate={setPage} />
      <main id="main-content">
        {page === "home"    && <HomePage onNavigate={setPage} />}
        {page === "about"   && <AboutPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer onNavigate={setPage} />
      <MobileCtaBar />
      <QuoteModal />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
