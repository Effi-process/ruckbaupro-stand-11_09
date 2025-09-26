'use client';

import React from 'react';
import Link from 'next/link';

export default function FooterWithMarquee() {
  const BRAND = "RÜCKBAUPRO";
  const CTA_TEXT = "BERATUNG STARTEN";

  return (
    <div className="bg-indigo-dye text-white">
      {/* Footer-Block */}
      <footer className="px-[5vw] pt-16 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10">
          {/* Brand + CTA */}
          <div className="col-span-2 sm:col-span-1">
            <div className="text-[11px] tracking-[.35em] uppercase text-white/70">{BRAND}</div>
            <p className="mt-5 text-sm text-white/80 max-w-[28ch]">
              Professioneller Rückbau & Abbruch deutschlandweit. Kostenlose Beratung für Ihr Projekt.
            </p>
            <Link 
              href="/kontakt"
              className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-[.08em] uppercase px-4 py-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 transition-colors"
            >
              {CTA_TEXT}
            </Link>
          </div>

          {/* Unsere Leistungen - alle Unterkategorien wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Unsere Leistungen</div>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/leistungen" className="hover:text-cerulean transition-colors">Alle Leistungen</Link></li>
              <li><Link href="/leistungen/asbestsanierung" className="hover:text-cerulean transition-colors">Asbest-Sanierung</Link></li>
              <li><Link href="/leistungen/entkernung" className="hover:text-cerulean transition-colors">Entkernung</Link></li>
              <li><Link href="/leistungen/beratung---planung" className="hover:text-cerulean transition-colors">Beratung & Planung</Link></li>
              <li><Link href="/leistungen/kmf-sanierung" className="hover:text-cerulean transition-colors">KMF-Sanierung</Link></li>
              <li><Link href="/leistungen/schimmelsanierung" className="hover:text-cerulean transition-colors">Schimmelsanierung</Link></li>
              <li><Link href="/leistungen/betonarbeiten" className="hover:text-cerulean transition-colors">Betonarbeiten</Link></li>
            </ul>
          </nav>

          {/* Service & Business - alle Unterkategorien wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Service & Business</div>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/standorte" className="hover:text-cerulean transition-colors">Standorte</Link></li>
              <li><Link href="/preise" className="hover:text-cerulean transition-colors">Preise</Link></li>
              <li><Link href="/franchise" className="hover:text-cerulean transition-colors">Franchise</Link></li>
            </ul>
          </nav>

          {/* Information - alle Unterkategorien wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Information</div>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/ueber-uns" className="hover:text-cerulean transition-colors">Über uns</Link></li>
              <li><Link href="/zertifikate" className="hover:text-cerulean transition-colors">Zertifikate</Link></li>
              <li><Link href="/gesetzliche-vorschriften" className="hover:text-cerulean transition-colors">Gesetzliche Vorschriften</Link></li>
            </ul>
          </nav>

          {/* Rechtliches - alle Unterkategorien wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Rechtliches</div>
            <ul className="space-y-2 text-white/90">
              <li><Link href="/impressum" className="hover:text-cerulean transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-cerulean transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-cerulean transition-colors">AGB</Link></li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60">
            <span>© 2024 RückbauPRO GmbH • Professioneller Rückbau & Abbruch</span>
            <span>Zertifiziert • Vollversichert • Deutschlandweit</span>
          </div>
        </div>
      </footer>

      {/* Mega-MARQUEE */}
      <MarqueeBand text={`${BRAND} • `} />
    </div>
  );
}

/**
 * Mega-MARQUEE: sehr große, unendliche Laufzeile
 */
function MarqueeBand({ text }: { text: string }) {
  const row = Array.from({ length: 6 }, () => text).join("");
  return (
    <section className="relative select-none">
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap will-change-transform">
          <span className="marquee-seq">{row}</span>
          <span className="marquee-seq" aria-hidden="true">{row}</span>
        </div>
      </div>

      {/* Styles nur für die Marquee-Animation */}
      <style jsx>{`
        .marquee { display:flex; }
        .marquee-seq {
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 0.85;
          font-size: clamp(60px, 18vw, 280px);
          padding-block: 6vh;
          color: #fff;
          opacity: 0.15;
          animation: marquee-move 120s linear infinite;
          text-shadow: 0 0 1px rgba(255,255,255,.1);
        }
        .marquee-seq + .marquee-seq { margin-left: 2vw; }

        @keyframes marquee-move {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-seq {
            font-size: 60px;
            padding-block: 3vh;
          }
        }

        .marquee:hover .marquee-seq { animation-play-state: paused; }
      `}</style>
    </section>
  );
}