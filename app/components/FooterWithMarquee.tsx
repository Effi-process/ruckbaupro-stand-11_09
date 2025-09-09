'use client';

import React from 'react';
import Link from 'next/link';

export default function FooterWithMarquee() {
  const BRAND = "RÜCKBAUPRO";
  const CTA_TEXT = "BERATUNG STARTEN";

  return (
    <div className="bg-oxford-blue text-white">
      {/* Footer-Block */}
      <footer className="px-[5vw] pt-16 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + CTA */}
          <div>
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

          {/* Leistungen - wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Unsere Leistungen</div>
            <ul className="space-y-3 text-white/90">
              <li><Link href="/leistungen" className="hover:text-cerulean transition-colors">Alle Leistungen</Link></li>
              <li><Link href="/leistungen/rueckbau" className="hover:text-cerulean transition-colors">Rückbau</Link></li>
              <li><Link href="/leistungen/abbruch" className="hover:text-cerulean transition-colors">Abbruch</Link></li>
              <li><Link href="/leistungen/entkernung" className="hover:text-cerulean transition-colors">Entkernung</Link></li>
              <li><Link href="/leistungen/entsorgung" className="hover:text-cerulean transition-colors">Entsorgung</Link></li>
            </ul>
          </nav>

          {/* Standorte - wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Standorte</div>
            <ul className="space-y-3 text-white/90">
              <li><Link href="/standorte" className="hover:text-cerulean transition-colors">Alle Standorte</Link></li>
              <li><Link href="/standorte/berlin" className="hover:text-cerulean transition-colors">Berlin</Link></li>
              <li><Link href="/standorte/hamburg" className="hover:text-cerulean transition-colors">Hamburg</Link></li>
              <li><Link href="/standorte/muenchen" className="hover:text-cerulean transition-colors">München</Link></li>
              <li><Link href="/standorte/koeln" className="hover:text-cerulean transition-colors">Köln</Link></li>
              <li><Link href="/standorte/frankfurt" className="hover:text-cerulean transition-colors">Frankfurt</Link></li>
            </ul>
          </nav>

          {/* Service & Business - wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Service & Business</div>
            <ul className="space-y-3 text-white/90">
              <li><Link href="/b2b" className="hover:text-cerulean transition-colors">B2B Portal</Link></li>
              <li><Link href="/franchise" className="hover:text-cerulean transition-colors">Franchise</Link></li>
              <li><Link href="/karriere" className="hover:text-cerulean transition-colors">Karriere</Link></li>
              <li><Link href="/kontakt" className="hover:text-cerulean transition-colors">Kontakt</Link></li>
            </ul>
          </nav>

          {/* Rechtliches - wie im Menü */}
          <nav className="text-sm">
            <div className="text-white/50 text-[11px] tracking-[.25em] uppercase mb-4">Rechtliches</div>
            <ul className="space-y-3 text-white/90">
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
      <MarqueeBand text={`${BRAND} • PROFESSIONELLER RÜCKBAU • ${BRAND} • SICHER • ZUVERLÄSSIG • `} />
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

        .marquee:hover .marquee-seq { animation-play-state: paused; }
      `}</style>
    </section>
  );
}