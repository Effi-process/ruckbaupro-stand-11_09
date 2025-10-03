'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCarousel() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(true);

  const updateArrows = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 4);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll genau eine Karte weiter - Breite der Karte plus Gap
    const cardWidth = window.innerWidth * 0.90; // 90vw on mobile
    const gap = 32; // 8 * 4px from gap-8
    const amount = window.innerWidth < 768 ? cardWidth + gap : 444;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const projects = [
    {
      badge: "ASBEST-SANIERUNG",
      title: "Professionelle und sichere Entfernung von Asbest nach TRGS 519",
      image: "/images/asbest-team-hero.png",
      alt: "Professionelle Asbest-Sanierung mit Schutzausrüstung",
      link: "/leistungen/asbestsanierung"
    },
    {
      badge: "ENTKERNUNG",
      title: "Komplette Entkernung von Gebäuden für Sanierung oder Abriss",
      image: "/images/entkernung-team-hero.png",
      alt: "Professionelle Entkernung von Innenräumen",
      link: "/leistungen/entkernung"
    },
    {
      badge: "BERATUNG & PLANUNG",
      title: "Professionelle Beratung und detaillierte Projektplanung",
      image: "/images/beratung-planung-hero.png",
      alt: "Professionelle Beratung und Projektplanung",
      link: "/leistungen/beratung-planung"
    },
    {
      badge: "KMF-SANIERUNG",
      title: "Fachgerechte Sanierung künstlicher Mineralfasern",
      image: "/images/kmf-sanierung-hero.png",
      alt: "KMF-Sanierung mit Schutzausrüstung",
      link: "/leistungen/kmf-sanierung"
    },
    {
      badge: "SCHIMMELSANIERUNG",
      title: "Professionelle Schimmelentfernung und -sanierung",
      image: "/images/schimmelsanierung-hero.png",
      alt: "Professionelle Schimmelsanierung",
      link: "/leistungen/schimmelsanierung"
    },
    {
      badge: "BETONARBEITEN",
      title: "Betonschneiden, -bohren und -bearbeitung",
      image: "/images/demolition-action.png",
      alt: "Professionelle Betonarbeiten mit Diamanttechnik",
      link: "/leistungen/betonarbeiten"
    }
  ];

  return (
    <section className="relative px-3 sm:px-4 md:px-[5vw] -mt-32 pb-8 sm:py-16 md:py-20 overflow-hidden">
      {/* Professioneller Gradient-Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oxford-blue/30 to-oxford-blue/60 pointer-events-none" />

      {/* Carousel Container */}
      <div className="relative z-10">

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-center snap-mandatory flex gap-8 md:gap-6 pb-2 md:pb-6"
          style={{ paddingLeft: 'calc(50% - 45vw)', paddingRight: 'calc(50% - 45vw)' }}
        >
          {projects.map((project, i) => (
            <Link key={i} href={project.link} className="snap-center shrink-0 w-[90vw] sm:w-[85vw] md:w-[380px] lg:w-[420px] group cursor-pointer">
              <article className="flex flex-col">
                <div className="relative">
                  {/* Dekorativer Glow-Effekt hinter der Karte */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-cerulean/20 via-penn-blue/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-[280px] sm:h-[320px] md:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,.3)] group-hover:scale-[1.03] transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay für bessere Lesbarkeit */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Badge mit verbessertem Design */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cerulean/40 to-penn-blue/40 rounded-full blur-md" />
                        <span className="relative block text-xs md:text-sm px-3 py-2 md:px-4 md:py-3 rounded-full bg-white/20 backdrop-blur-md tracking-wide uppercase text-white font-bold shadow-lg border border-white/30">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Zusätzliches Icon unten rechts für Desktop */}
                    <div className="hidden md:block absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-cerulean/80 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title below image on mobile */}
                <div className="md:hidden mt-3 px-2">
                  <p className="text-sm text-white/80 line-clamp-2">
                    {project.title}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Navigation Controls - Below Carousel, Centered */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            aria-label="Nach links scrollen"
            onClick={() => scrollBy(-1)}
            disabled={!canLeft}
            className={`h-12 w-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md grid place-items-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${
              canLeft ? "opacity-100" : "opacity-40 cursor-not-allowed"
            }`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M15 5l-7 7 7 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Nach rechts scrollen"
            onClick={() => scrollBy(1)}
            disabled={!canRight}
            className={`h-12 w-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md grid place-items-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${
              canRight ? "opacity-100" : "opacity-40 cursor-not-allowed"
            }`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <Link
          href="/leistungen"
          className="inline-flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
        >
          Alle Leistungen ansehen
          <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
        </Link>
      </div>

      {/* Hilfsstyles: Scrollbar ausblenden */}
      <style jsx>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </section>
  );
}