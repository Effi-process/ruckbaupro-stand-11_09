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
    // Scroll genau eine Karte weiter (420px + 24px gap)
    const amount = 444; // 420px Karte + 24px Gap
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const projects = [
    {
      badge: "ASBEST-SANIERUNG",
      title: "Professionelle und sichere Entfernung von Asbest nach TRGS 519",
      image: "/images/demolition-action.png",
      alt: "Professionelle Asbest-Sanierung mit Schutzausrüstung"
    },
    {
      badge: "ENTKERNUNG", 
      title: "Komplette Entkernung von Gebäuden für Sanierung oder Abriss",
      image: "/images/construction-worker.png",
      alt: "Professionelle Entkernung von Innenräumen"
    },
    {
      badge: "BERATUNG & PLANUNG",
      title: "Professionelle Beratung und detaillierte Projektplanung", 
      image: "/images/demolition-site.png",
      alt: "Professionelle Beratung und Projektplanung"
    },
    {
      badge: "KMF-SANIERUNG",
      title: "Fachgerechte Sanierung künstlicher Mineralfasern",
      image: "/images/professional-demolition-bg.png",
      alt: "KMF-Sanierung mit Schutzausrüstung"
    },
    {
      badge: "SCHIMMELSANIERUNG",
      title: "Professionelle Schimmelentfernung und -sanierung",
      image: "/images/demolition-action.png",
      alt: "Professionelle Schimmelsanierung"
    },
    {
      badge: "BETONARBEITEN",
      title: "Betonschneiden, -bohren und -bearbeitung",
      image: "/images/construction-worker.png",
      alt: "Professionelle Betonarbeiten"
    }
  ];

  return (
    <section className="px-[5vw] py-20">
      <div className="text-center mb-12">
        <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Unsere Projekte</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
          Professioneller Rückbau & Abbruch
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Sehen Sie selbst: Unsere Experten führen Rückbau- und Abbrucharbeiten mit höchsten Standards durch
        </p>
      </div>

      {/* Controls */}
      <div className="relative">
        <div className="absolute -top-6 right-0 z-10 flex gap-3">
          <button
            aria-label="Nach links scrollen"
            onClick={() => scrollBy(-1)}
            disabled={!canLeft}
            className={`h-12 w-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md grid place-items-center transition-opacity hover:bg-white/20 ${
              canLeft ? "opacity-100" : "opacity-40"
            }`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M15 5l-7 7 7 7"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Nach rechts scrollen"
            onClick={() => scrollBy(1)}
            disabled={!canRight}
            className={`h-12 w-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md grid place-items-center transition-opacity hover:bg-white/20 ${
              canRight ? "opacity-100" : "opacity-40"
            }`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 pb-6"
        >
          {projects.map((project, i) => (
            <article key={i} className="snap-start shrink-0 w-[420px] max-w-[86vw] group">
              <div className="relative">
                <div className="relative h-[280px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,.3)] group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute top-4 left-4 text-xs px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 tracking-wide uppercase text-white font-semibold">
                    {project.badge}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-lg leading-snug text-white font-semibold">{project.title}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/leistungen"
          className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
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