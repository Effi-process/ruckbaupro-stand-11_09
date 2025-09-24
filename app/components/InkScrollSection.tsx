'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatedSection } from './RefinedAnimations';

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
        s.style.color = "rgba(255,255,255,0.1)";
        s.style.transition = "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
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

    const INK_MIN = 0.1;
    const INK_MAX = 0.95;
    const SOFT_WINDOW = 3.0;

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
          alpha = lerp(INK_MIN, INK_MAX, t * t); // Eased transition
        }
        headlineSpans[i].style.color = `rgba(255,255,255,${alpha})`;
      }

      // Subtext effect
      const subtextRect = currentSubtextEl.getBoundingClientRect();
      const subtextStart = vh * 0.9;
      const subtextEnd = vh * 0.1;
      const subtextProgress = clamp01((subtextStart - subtextRect.top) / (subtextStart - subtextEnd || 1));
      const subtextCursor = subtextProgress * (subtextSpans.length + SOFT_WINDOW);

      for (let i = 0; i < subtextSpans.length; i++) {
        const d = subtextCursor - i;
        let alpha = INK_MIN;
        if (d >= SOFT_WINDOW) {
          alpha = INK_MAX * 0.8; // Slightly dimmer for hierarchy
        } else if (d > 0 && d < SOFT_WINDOW) {
          const t = clamp01(d / SOFT_WINDOW);
          alpha = lerp(INK_MIN, INK_MAX * 0.8, t * t);
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
    <section className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />

      {/* Refined content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center space-y-12">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.1]"
          >
            Kompetenz trifft Innovation
          </h2>

          <p
            ref={subtextRef}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto"
          >
            Zwei Jahrzehnte Erfahrung in der präzisen Durchführung komplexer Rückbauprojekte.
            Modernste Technologie vereint mit bewährter Handwerkskunst.
          </p>
        </div>

        {/* Service grid with refined design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <AnimatedSection delay={200} className="group">
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none hover:bg-white/10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h3 className="text-xl font-light text-white mb-4">Asbestsanierung</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Fachgerechte Entfernung nach TRGS 519. Zertifiziert und sicher.
              </p>
              <div className="mt-6 flex items-center text-white/40 group-hover:text-white/60 transition-colors">
                <span className="text-sm">Mehr erfahren</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} className="group">
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none hover:bg-white/10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h3 className="text-xl font-light text-white mb-4">Entkernung</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Präzise Rückführung auf die Rohbausubstanz. Effizient und gründlich.
              </p>
              <div className="mt-6 flex items-center text-white/40 group-hover:text-white/60 transition-colors">
                <span className="text-sm">Mehr erfahren</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600} className="group">
            <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none hover:bg-white/10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h3 className="text-xl font-light text-white mb-4">Komplettabbruch</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Vollständiger Rückbau mit Recyclingkonzept. Nachhaltig und verantwortungsvoll.
              </p>
              <div className="mt-6 flex items-center text-white/40 group-hover:text-white/60 transition-colors">
                <span className="text-sm">Mehr erfahren</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}