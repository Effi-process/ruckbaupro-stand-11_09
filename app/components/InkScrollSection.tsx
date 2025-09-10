'use client';

import React from 'react';

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
      if (!headlineEl || !subtextEl) return;
      const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      
      // Headline effect
      const headlineRect = headlineEl.getBoundingClientRect();
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
      const subtextRect = subtextEl.getBoundingClientRect();
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
    <div className="min-h-screen text-white">
      {/* Hero mit Chip */}
      <section className="relative min-h-[30vh] grid place-items-center overflow-hidden">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[12px] tracking-[.08em] uppercase px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center gap-2 select-none">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M13 3l-2 7h5l-5 11 2-8H8l5-10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Professioneller Service
        </div>
      </section>

      {/* Section mit Typing-Reveal pro Buchstabe */}
      <section className="py-4 sm:py-8 md:py-16 lg:py-20">
        <div className="flex justify-center px-[5vw]">
          <h1
            ref={headlineRef}
            className="max-w-[900px] text-center font-extrabold leading-[1.05] tracking-tight text-[clamp(26px,6.2vw,64px)] whitespace-pre-wrap"
          >
            {`Professioneller Rückbau.\nModerne Technik. Faire Preise.`}
          </h1>
        </div>

        {/* Professionelles Baustellen-Bild */}
        <div className="mt-12 sm:mt-16 md:mt-20 w-[min(1100px,92vw)] aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,.3)] relative group hover:scale-105 transition-transform duration-500 mx-auto">
          <img 
            src="/images/team-photo.jpeg" 
            alt="Professioneller Rückbau mit Container-Entsorgung"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Floating Element */}
          <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-sm font-semibold">
            Deutschlandweit
          </div>
        </div>

        {/* Text mittig unter dem Video mit Ink-Effect */}
        <div className="mt-12 text-center max-w-2xl mx-auto px-[5vw]">
          <p 
            ref={subtextRef}
            className="text-lg sm:text-xl leading-relaxed font-medium"
          >
            Modernste Technik trifft auf jahrelange 
            <br />
            Erfahrung. 
            <br /><br />
            Sehen Sie selbst, wie wir aus jedem Rückbau-Projekt ein Meisterwerk der Präzision 
            <br />
            und Sicherheit machen.
          </p>
        </div>
      </section>
    </div>
  );
}