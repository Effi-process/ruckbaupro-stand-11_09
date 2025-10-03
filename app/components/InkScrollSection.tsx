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
        s.style.color = "rgba(255,255,255,0.3)"; // white mit wenig Opacity
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
        headlineSpans[i].style.color = `rgba(255,255,255,${alpha})`; // white
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
        subtextSpans[i].style.color = `rgba(255,255,255,${alpha})`; // white
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
    <div className="relative bg-[#1a2332]">

      {/* UNSERE PROJEKTE Section mit Milchglas-Hintergrund */}
      <div className="relative bg-[#1a2332] py-12 mt-0 z-0">
        <div className="px-3 sm:px-4 md:px-[5vw] relative">

          <div className="relative text-center mb-4 px-4">
            {/* Chip mit Gradient-Border - heller */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cerulean to-blue-500 rounded-full blur-sm opacity-40" />
                <span className="relative block text-cerulean font-semibold text-sm uppercase tracking-wider px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full border border-cerulean/40">
                  Unsere Projekte
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mt-3 sm:mt-4 mb-4 sm:mb-6 tracking-wider px-4">
              Professioneller Rückbau & Schadstoffsanierung
            </h2>

            {/* Dekorative Linie unter Überschrift */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cerulean to-transparent rounded-full" />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Sehen Sie selbst: Unsere Experten führen Rückbau- und Schadstoffsanierung mit höchsten Standards durch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}