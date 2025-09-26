'use client';

import { useEffect, useRef } from 'react';

export default function MobileScrollingBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 1; // Speed of scrolling

      // Reset position when text has scrolled completely
      if (position <= -50) {
        position = 0;
      }

      if (scrollElement) {
        scrollElement.style.transform = `translateX(${position}%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="md:hidden relative overflow-hidden bg-gradient-to-r from-cerulean via-indigo-dye to-cerulean py-8 my-8">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Scrolling text container */}
      <div className="relative whitespace-nowrap">
        <div
          ref={scrollRef}
          className="inline-block"
          style={{ willChange: 'transform' }}
        >
          {/* Repeat text for seamless loop */}
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
        </div>
      </div>

      {/* Gradient edges for fade effect */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-cerulean to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-cerulean to-transparent pointer-events-none" />
    </div>
  );
}

// Alternative version with CSS animation (more performant)
export function MobileScrollingBannerCSS() {
  return (
    <div className="md:hidden relative overflow-hidden bg-gradient-to-r from-cerulean via-indigo-dye to-cerulean py-8 my-8">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Scrolling text container */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap">
          {/* Duplicate text for seamless loop */}
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          {/* Duplicate for seamless loop */}
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
          <span className="inline-block text-[80px] font-black text-white/20 tracking-wider mx-4">
            RÜCKBAUPRO
          </span>
        </div>
      </div>

      {/* Gradient edges for fade effect */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-cerulean to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-cerulean to-transparent pointer-events-none z-10" />
    </div>
  );
}