'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <>
      {/* Logo - Fixed position with safe area for mobile */}
      <Link href="/" className="lg:hidden fixed top-2 left-4 z-[100] block bg-black/20 backdrop-blur-md rounded-2xl p-1 border border-white/10 -rotate-90">
        <Image
          src="/Design ohne Titel 2.svg.svg"
          alt="RückbauPRO"
          className="h-20 w-auto sm:h-24"
          width={300}
          height={100}
          priority
        />
      </Link>

      {/* Menu Button - Fixed position on video with glass effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[100] flex items-center gap-2.5 px-4 py-3 rounded-xl bg-black/20 backdrop-blur-xl border border-white/20 text-white hover:bg-black/30 transition-all"
        aria-label="Menu"
      >
        {/* Grid Icon from normal website */}
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-semibold text-sm">MENÜ</span>
        <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[99] transition-all duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel with glass morphism effect */}
        <div className={`absolute right-2 top-20 w-[calc(100vw-1rem)] sm:w-[380px] max-w-[420px] bg-white/10 backdrop-blur-3xl shadow-3xl border border-white/25 rounded-2xl z-[99] overflow-hidden max-h-[85vh] transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
          style={{
            backdropFilter: 'blur(40px) saturate(150%)',
            WebkitBackdropFilter: 'blur(40px) saturate(150%)',
            background: 'rgba(255, 255, 255, 0.08)'
          }}
        >
          <div className="overflow-y-auto max-h-[85vh] text-white">
            {/* Menu Header */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cerulean/60 to-indigo-dye/60 backdrop-blur-2xl text-white border-b border-white/15">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg sm:text-xl">RÜCKBAUPRO NAVIGATION</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-10 h-10 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                  aria-label="Schließen"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm sm:text-base opacity-90 mt-2">ALLE SEITEN & SERVICES</p>
            </div>


            {/* Main Navigation */}
            <nav className="py-3">
              {/* Startseite */}
              <div className="px-3">
                <Link
                  href="/"
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/15 rounded-xl transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-7 h-7 text-cerulean group-hover:text-indigo-dye transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                    <span className="font-bold text-white text-xl">Startseite</span>
                  </div>
                </Link>
              </div>

              {/* Unsere Leistungen */}
              <div className="px-3">
                <button
                  onClick={() => toggleSection('leistungen')}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/15 rounded-xl transition-all text-white group"
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-cerulean group-hover:text-indigo-dye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                    </svg>
                    <span className="text-lg font-semibold">Unsere Leistungen</span>
                  </div>
                  <svg className={`w-4 h-4 transform transition-transform text-white/70 ${expandedSections.includes('leistungen') ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.includes('leistungen') && (
                  <div className="ml-10 pl-5 border-l-2 border-white/25 space-y-2 pb-4 mt-3">
                    <Link href="/leistungen" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Alle Leistungen</Link>
                    <Link href="/leistungen/asbestsanierung" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Asbest-Sanierung</Link>
                    <Link href="/leistungen/entkernung" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Entkernung</Link>
                    <Link href="/leistungen/beratung---planung" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Beratung & Planung</Link>
                    <Link href="/leistungen/kmf-sanierung" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>KMF-Sanierung</Link>
                    <Link href="/leistungen/schimmelsanierung" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Schimmelsanierung</Link>
                    <Link href="/leistungen/betonarbeiten" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Betonarbeiten</Link>
                  </div>
                )}
              </div>

              {/* Service & Business */}
              <div className="px-3">
                <button
                  onClick={() => toggleSection('service')}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/15 rounded-xl transition-all text-white group"
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-cerulean group-hover:text-indigo-dye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                    </svg>
                    <span className="text-lg font-semibold">Service & Business</span>
                  </div>
                  <svg className={`w-4 h-4 transform transition-transform text-white/70 ${expandedSections.includes('service') ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.includes('service') && (
                  <div className="ml-10 pl-5 border-l-2 border-white/25 space-y-2 pb-4 mt-3">
                    <Link href="/standorte" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Standorte</Link>
                    <Link href="/preise" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Preise</Link>
                    <Link href="/franchise" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Franchise</Link>
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="px-3">
                <button
                  onClick={() => toggleSection('info')}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/15 rounded-xl transition-all text-white group"
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-cerulean group-hover:text-indigo-dye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                    <span className="text-lg font-semibold">Information</span>
                  </div>
                  <svg className={`w-4 h-4 transform transition-transform text-white/70 ${expandedSections.includes('info') ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.includes('info') && (
                  <div className="ml-10 pl-5 border-l-2 border-white/25 space-y-2 pb-4 mt-3">
                    <Link href="/ueber-uns" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Über uns</Link>
                    <Link href="/schadstoffschulungen" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Schadstoffschulungen</Link>
                    <Link href="/gesetzliche-vorschriften" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Gesetzliche Vorschriften</Link>
                  </div>
                )}
              </div>

              {/* Rechtliches */}
              <div className="px-3">
                <button
                  onClick={() => toggleSection('legal')}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/15 rounded-xl transition-all text-white group"
                >
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-cerulean group-hover:text-indigo-dye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <span className="text-lg font-semibold">Rechtliches</span>
                  </div>
                  <svg className={`w-4 h-4 transform transition-transform text-white/70 ${expandedSections.includes('legal') ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.includes('legal') && (
                  <div className="ml-10 pl-5 border-l-2 border-white/25 space-y-2 pb-4 mt-3">
                    <Link href="/impressum" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Impressum</Link>
                    <Link href="/datenschutz" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>Datenschutz</Link>
                    <Link href="/agb" className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg" onClick={() => setIsOpen(false)}>AGB</Link>
                  </div>
                )}
              </div>
            </nav>


            {/* Contact Info */}
            <div className="px-6 py-4 bg-white/10 backdrop-blur-2xl border-t border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wide font-medium">
                    24/7 NOTFALL-HOTLINE
                  </div>
                  <a
                    href="tel:+491748083023"
                    className="text-cerulean hover:text-white font-bold text-xl transition-colors"
                  >
                    +49 174 8083023
                  </a>
                </div>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-cerulean hover:bg-indigo-dye text-white text-base font-bold rounded-xl transition-colors shadow-lg"
                >
                  KONTAKT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}