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
    const amount = window.innerWidth < 640 ? 324 : window.innerWidth < 768 ? 404 : 444;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const projects = [
    {
      category: "Asbestsanierung",
      title: "Sichere Entfernung von Gefahrstoffen",
      description: "Zertifizierte Fachkräfte. TRGS 519 konform.",
      image: "/images/asbest-team-hero.png",
      alt: "Asbestsanierung",
      link: "/leistungen/asbestsanierung"
    },
    {
      category: "Entkernung",
      title: "Präzise Rückführung auf Rohbau",
      description: "Effizient. Sauber. Termingerecht.",
      image: "/images/entkernung-hero.png",
      alt: "Entkernung",
      link: "/leistungen/entkernung"
    },
    {
      category: "Komplettabbruch",
      title: "Professioneller Gebäuderückbau",
      description: "Von der Planung bis zur Entsorgung.",
      image: "/images/abbruch-hero.png",
      alt: "Komplettabbruch",
      link: "/leistungen/abbruch"
    },
    {
      category: "Schadstoffsanierung",
      title: "Umfassende Gebäudereinigung",
      description: "PAK, PCB, KMF fachgerecht entfernt.",
      image: "/images/schadstoff-hero.png",
      alt: "Schadstoffsanierung",
      link: "/leistungen/schadstoffsanierung"
    },
    {
      category: "Betonarbeiten",
      title: "Präzise Betonsanierung",
      description: "Bohren. Sägen. Fräsen.",
      image: "/images/beton-hero.png",
      alt: "Betonarbeiten",
      link: "/leistungen/betonarbeiten"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Refined header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
            Unsere Expertise
          </h2>
          <p className="text-lg text-white/70 font-light leading-relaxed">
            Spezialisierte Lösungen für komplexe Herausforderungen im Rückbau.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons - refined design */}
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canLeft}
            className={`absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
              canLeft
                ? 'text-white/60 hover:text-white'
                : 'text-white/20 cursor-not-allowed'
            }`}
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scrollBy(1)}
            disabled={!canRight}
            className={`absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
              canRight
                ? 'text-white/60 hover:text-white'
                : 'text-white/20 cursor-not-allowed'
            }`}
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project cards */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="group flex-none w-[300px] sm:w-[380px] md:w-[420px]"
              >
                <div className="relative h-[500px] overflow-hidden bg-neutral-900">
                  {/* Image with refined overlay */}
                  <div className="relative h-3/5 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <span className="text-xs font-light text-white/60 tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 font-light mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm font-light">Details ansehen</span>
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}