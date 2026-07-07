import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header, MobileCtaBar, Footer, QuoteModal } from '../Chrome.jsx';
import { HomePage } from '../HomePage.jsx';
import { AboutPage, ContactPage } from '../AboutContact.jsx';

// ── Page meta ─────────────────────────────────────────────────────────────────
const META = {
  home: {
    title: "RDB Travels — Car Rental & Cab Service, Ahmedabad",
    desc:  "Ahmedabad car rental & outstation cab — direct operator since 2015. Sedan, Innova, Tempo Traveller, Volvo bus. GST-clear pricing. Quote in 15 min.",
    canonical: "https://www.rdbtravels.com",
    ogUrl: "https://www.rdbtravels.com",
  },
  about: {
    title: "About RDB Travels | Direct Operator Since 2015",
    desc:  "RDB Travels — Ahmedabad's direct outstation cab & car rental operator since 2015. Vetted owner-drivers, 8 vehicle classes, GST-clear pricing across Gujarat and pan-India.",
    canonical: "https://www.rdbtravels.com/about",
    ogUrl: "https://www.rdbtravels.com/about",
  },
  contact: {
    title: "Contact RDB Travels | WhatsApp Quote in 15 Minutes",
    desc:  "Book outstation cab, car rental, Tempo Traveller or bus hire with RDB Travels, Ahmedabad. WhatsApp for a quote in 15 min. Direct operator since 2015, no broker.",
    canonical: "https://www.rdbtravels.com/contact",
    ogUrl: "https://www.rdbtravels.com/contact",
  }
};

// ── URL → page key ────────────────────────────────────────────────────────────
const PATH_TO_PAGE = {
  "/":        "home",
  "/about":   "about",
  "/contact": "contact",
};

function getPageFromPath(pathname) {
  return PATH_TO_PAGE[pathname] || PATH_TO_PAGE[pathname.replace(/\/$/, "")] || "home";
}

// ── App shell ─────────────────────────────────────────────────────────────────
const App = () => {
  // Initialise from the actual URL so direct navigation to /about or /contact works
  const [page, setPage] = React.useState(() => getPageFromPath(window.location.pathname));

  // Keep browser URL bar in sync and support the back/forward buttons
  const navigate = React.useCallback((newPage) => {
    const path = newPage === "home" ? "/" : `/${newPage}`;
    if (window.location.pathname !== path) {
      window.history.pushState({ page: newPage }, "", path);
    }
    setPage(newPage);
  }, []);

  // Handle browser back/forward
  React.useEffect(() => {
    const onPopState = (e) => {
      const target = e.state?.page || getPageFromPath(window.location.pathname);
      setPage(target);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Scroll to top on navigation
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  // Update <title>, meta description, canonical, og:url, og:title, og:description per page
  React.useEffect(() => {
    const m = META[page] || META.home;
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", m.desc);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", m.canonical);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", m.ogUrl);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", m.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", m.desc);
  }, [page]);

  return (
    <>
      <Header active={page} onNavigate={navigate} />
      <main id="main-content">
        {page === "home"    && <HomePage onNavigate={navigate} />}
        {page === "about"   && <AboutPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
      <MobileCtaBar />
      <QuoteModal />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
