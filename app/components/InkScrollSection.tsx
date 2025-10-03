'use client';

import React from 'react';
import Image from 'next/image';

export default function InkScrollSection() {
  const headlineRef = React.useRef<HTMLHeadingElement>(null);
  const subtextRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    const setupInkEffect = (element: HTMLElement) => {
      const raw = element.innerText;
      element.innerText = "";
      const chars = Array.from(raw);
      const spans = chars.map((ch) => {
        const s = document.createElement("span");
        s.textContent = ch;
        s.style.whiteSpace = "pre";
        s.style.color = "rgba(255,255,255,0.3)";
        element.appendChild(s);
        return s;
      });
      return spans;
    };

    const headlineEl = headlineRef.current;
    const subtextEl = subtextRef.current;
    if (!headlineEl || !subtextEl) return;

    const headlineSpans = setupInkEffect(headlineEl);
    const subtextSpans = setupInkEffect(subtextEl);

    const INK_MIN = 0.3;
    const INK_MAX = 1.0;
    const SOFT_WINDOW = 2.0;

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    function updateInk() {
      const currentHeadlineEl = headlineRef.current;
      const currentSubtextEl = subtextRef.current;
      
      if (!currentHeadlineEl || !currentSubtextEl) return;
      
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      
      // Headline effect
      const headlineRect = currentHeadlineEl.getBoundingClientRect();
      const headlineStart = vh * 0.95;
      const headlineEnd = vh * 0.25;
      const headlineProgress = clamp01((headlineStart - headlineRect.top) / (headlineStart - headlineEnd || 1));
      const headlineCursor = headlineProgress * (headlineSpans.length + SOFT_WINDOW);

      for (let i = 0; i < headlineSpans.length; i++) {
        const d = headlineCursor - i;
        let alpha = INK_MIN;
        if (d >= SOFT_WINDOW) {
          alpha = INK_MAX;
        } else if (d > 0 && d < SOFT_WINDOW) {
          const t = clamp01(d / SOFT_WINDOW);
          alpha = lerp(INK_MIN, INK_MAX, t);
        }
        headlineSpans[i].style.color = `rgba(255,255,255,${alpha})`;
      }

      // Subtext effect (starts when subtext enters viewport)
      const subtextRect = currentSubtextEl.getBoundingClientRect();
      const subtextStart = vh * 0.9;
      const subtextEnd = vh * 0.1;
      const subtextProgress = clamp01((subtextStart - subtextRect.top) / (subtextStart - subtextEnd || 1));
      const subtextCursor = subtextProgress * (subtextSpans.length + SOFT_WINDOW);

      for (let i = 0; i < subtextSpans.length; i++) {
        const d = subtextCursor - i;
        let alpha = INK_MIN;
        if (d >= SOFT_WINDOW) {
          alpha = INK_MAX;
        } else if (d > 0 && d < SOFT_WINDOW) {
          const t = clamp01(d / SOFT_WINDOW);
          alpha = lerp(INK_MIN, INK_MAX, t);
        }
        subtextSpans[i].style.color = `rgba(255,255,255,${alpha})`;
      }
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateInk();
          ticking = false;
        });
        ticking = true;
      }
    }

    updateInk();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateInk);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateInk);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Dekorativer Gradient-Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cerulean/5 via-transparent to-transparent pointer-events-none" />

      {/* Hero section - reduced height without chip */}
      <section className="relative min-h-[8vh] sm:min-h-[15vh] overflow-hidden">
      </section>

      {/* Section mit Typing-Reveal pro Buchstabe */}
      <section className="relative py-2 sm:py-12 md:py-16 lg:py-20">
        {/* Zusätzliche Layout-Elemente für Vielfalt */}
        <div className="absolute top-10 left-[5%] w-2 h-24 bg-gradient-to-b from-cerulean to-transparent opacity-30 rounded-full hidden md:block" />
        <div className="absolute top-20 right-[8%] w-2 h-32 bg-gradient-to-b from-penn-blue to-transparent opacity-30 rounded-full hidden md:block" />

        <div className="flex justify-center px-4 sm:px-[5vw]">
          <h2
            ref={headlineRef}
            className="max-w-[900px] text-center font-extrabold leading-[1.2] sm:leading-[1.05] tracking-tight text-[20px] sm:text-[clamp(26px,6.2vw,64px)] whitespace-pre-wrap px-2"
          >
            {`Professioneller Rückbau.\nModerne Technik. Faire Preise.`}
          </h2>
        </div>

        {/* Professionelles Baustellen-Bild mit verbessertem Design */}
        <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-0 w-[min(1100px,95vw)] mx-auto">
          {/* Dekorativer Rahmen-Effekt */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cerulean/20 via-penn-blue/20 to-cerulean/20 rounded-3xl sm:rounded-[2rem] blur-2xl opacity-50" />

          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,.3)] group hover:scale-[1.02] transition-all duration-500">
            <Image
              src="/images/team-photo.jpeg"
              alt="Professioneller Rückbau mit Container-Entsorgung"
              className="absolute inset-0 w-full h-full object-cover"
              fill
              sizes="(max-width: 1100px) 92vw, 1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating Elements mit mehr Design */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex gap-2">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-white/20">
                Deutschlandweit
              </div>
            </div>

            {/* Zusätzlicher Badge oben links */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
              <div className="bg-cerulean/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold border border-cerulean/30 text-white">
                ✓ Zertifiziert
              </div>
            </div>
          </div>
        </div>

        {/* Text removed for mobile */}
      </section>

      {/* UNSERE PROJEKTE Section mit verbessertem Design */}
      <div className="relative">
        {/* Dekorative Akzent-Linie */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-cerulean/40 to-transparent" />

        <div className="px-3 sm:px-4 md:px-[5vw] pt-16 pb-8 relative">
          {/* Hintergrund-Akzente */}
          <div className="absolute top-20 left-[10%] w-32 h-32 bg-cerulean/10 rounded-full blur-3xl" />
          <div className="absolute top-10 right-[15%] w-40 h-40 bg-penn-blue/10 rounded-full blur-3xl" />

          <div className="relative text-center mb-8 sm:mb-10 md:mb-12 px-4">
            {/* Chip mit Gradient-Border */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cerulean to-penn-blue rounded-full blur-sm opacity-50" />
                <span className="relative block text-cerulean font-semibold text-sm uppercase tracking-wider px-4 py-1.5 bg-oxford-blue/50 backdrop-blur-sm rounded-full border border-cerulean/30">
                  Unsere Projekte
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mt-3 sm:mt-4 mb-4 sm:mb-6 tracking-wider">
              Professioneller Rückbau & Schadstoffsanierung
            </h2>

            {/* Dekorative Linie unter Überschrift */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cerulean to-transparent rounded-full" />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Sehen Sie selbst: Unsere Experten führen Rückbau- und Schadstoffsanierung mit höchsten Standards durch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}