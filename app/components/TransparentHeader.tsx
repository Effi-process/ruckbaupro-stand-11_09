'use client';

import { useState, useEffect } from 'react';
import LogoComponent from './LogoComponent';
import FloatingMenuButton from './FloatingMenuButton';

export default function TransparentHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-600/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-xl hover:bg-white/15 transition-all duration-300">
              <LogoComponent width={120} height={48} />
            </div>
          </div>

          {/* Menu Button */}
          <div>
            <FloatingMenuButton />
          </div>
        </div>
      </div>
    </header>
  );
}