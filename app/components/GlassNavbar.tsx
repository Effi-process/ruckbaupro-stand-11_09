'use client';

import Link from 'next/link';

export default function GlassNavbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 md:top-20 md:right-4 md:left-auto md:transform-none">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-3 md:gap-6">
        <Link
          href="/leistungen"
          className="text-white/90 text-xs md:text-sm font-medium hover:text-white transition-colors"
        >
          Leistungen
        </Link>
        <button
          onClick={() => scrollToSection('kontakt')}
          className="text-white/90 text-xs md:text-sm font-medium hover:text-white transition-colors"
        >
          Kontakt
        </button>
        <button
          onClick={() => scrollToSection('kontakt')}
          className="bg-white/20 text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/30 transition-colors"
        >
          Beratung
        </button>
      </div>
    </nav>
  );
}