import React from 'react';
// RDB Travels — shared icons (inline SVG components)
const WhatsAppIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SedanIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 21h26M8 21l3-7h14l3 7M11 21v3a1 1 0 001 1h2a1 1 0 001-1v-3M21 21v3a1 1 0 001 1h2a1 1 0 001-1v-3M11 17.5h.5M24.5 17.5h.5"/>
  </svg>
);
const SuvIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 21h28M7 21l2-8h18l2 8M10 21v3a1 1 0 001 1h2a1 1 0 001-1v-3M22 21v3a1 1 0 001 1h2a1 1 0 001-1v-3M10 16.5h.5M25.5 16.5h.5M14 13v-2"/>
  </svg>
);
const TempoIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 22h30M5 22V11a1 1 0 011-1h22a1 1 0 011 1v3l4 2v6M9 22v3a1 1 0 001 1h2a1 1 0 001-1v-3M22 22v3a1 1 0 001 1h2a1 1 0 001-1v-3M8 14h6M16 14h6M8 17h6M16 17h6"/>
  </svg>
);
const BusIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 23h26M5 23V8a1 1 0 011-1h24a1 1 0 011 1v15M9 23v3a1 1 0 001 1h2a1 1 0 001-1v-3M23 23v3a1 1 0 001 1h2a1 1 0 001-1v-3M8 11h7M17 11h7M8 14h7M17 14h7M8 17h7M17 17h7"/>
  </svg>
);

// MPV (Ertiga) — taller roofline than sedan, single window
const MpvIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 21h28M7 21l2-9h18l2 9M10 21v3a1 1 0 001 1h2a1 1 0 001-1v-3M22 21v3a1 1 0 001 1h2a1 1 0 001-1v-3M10 16.5h.5M25.5 16.5h.5M11 14h14"/>
  </svg>
);
// 17-seater Tempo — wider rear bay
const Tempo17Icon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 22h30M5 22V10a1 1 0 011-1h23a1 1 0 011 1v4l3 2v6M9 22v3a1 1 0 001 1h2a1 1 0 001-1v-3M22 22v3a1 1 0 001 1h2a1 1 0 001-1v-3M8 13h6M16 13h6M24 13h4M8 16h6M16 16h6M24 16h4"/>
  </svg>
);
// 26-seater Maharaja Tempo — distinctive curved-front coach
const MaharajaIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 22h30M3 22v-8a4 4 0 014-4h22a1 1 0 011 1v3l4 2v6M9 22v3a1 1 0 001 1h2a1 1 0 001-1v-3M22 22v3a1 1 0 001 1h2a1 1 0 001-1v-3M7 14h6M15 14h6M23 14h6M7 17h6M15 17h6M23 17h6"/>
  </svg>
);
// 32-seater Mini Bus — between Tempo and full bus
const MiniBusIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 23h28M5 23V9a1 1 0 011-1h24a1 1 0 011 1v14M9 23v3a1 1 0 001 1h2a1 1 0 001-1v-3M23 23v3a1 1 0 001 1h2a1 1 0 001-1v-3M8 12h6M16 12h5M23 12h5M8 16h6M16 16h5M23 16h5"/>
  </svg>
);

// Scenario / channel / credential icons — same 1.6px stroke vocabulary
const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.5l-4-2-7 5-2-1 4-5L4 11l-1.5-1L4 9l9 1 4-5 2 .5-1.5 4.5 5 2-.5 1.5L22 16.5z"/>
  </svg>
);
const PlaneArriveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18M19.5 17.5L21 16l-1-2-3 .5-7-5-2 1 4 5L7 16l-2-1.5L4 16l3 2 12-.5z"/>
  </svg>
);
const TempleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18M5 21v-9M19 21v-9M5 12h14M5 12l7-5 7 5M9 21v-5a3 3 0 016 0v5M12 7V4M10 4h4"/>
  </svg>
);
const RingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="15" r="6"/><path d="M9 9l3-5 3 5M10.5 6.5h3"/>
  </svg>
);
const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 21h16M6 21V5a1 1 0 011-1h10a1 1 0 011 1v16M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2M11 21v-3h2v3"/>
  </svg>
);
const MountainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 20h18L15 8l-4 7-2-3-6 8zM14 7a2 2 0 100-4 2 2 0 000 4z"/>
  </svg>
);
const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-4 9 4-9 4-9-4zM7 11v4c0 1.5 2.5 3 5 3s5-1.5 5-3v-4M21 9v5"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>
  </svg>
);

export {
  WhatsAppIcon, SedanIcon, SuvIcon, TempoIcon, BusIcon,
  MpvIcon, Tempo17Icon, MaharajaIcon, MiniBusIcon,
  PlaneIcon, PlaneArriveIcon, TempleIcon, RingIcon, BuildingIcon, MountainIcon, SchoolIcon,
  PhoneIcon, MailIcon,
};
