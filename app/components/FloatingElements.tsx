'use client';

import Image from 'next/image';
import FloatingMenuButton from './FloatingMenuButton';

export default function FloatingElements() {
  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-40">
        <div className="relative group">
          {/* Glasmorphism Background mit Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-4 hover:bg-white/15 transition-all duration-300 shadow-2xl">
            <Image
              src="/logo-rueckbaupro-new.svg"
              alt="RückbauPRO Logo"
              width={140}
              height={70}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          {/* Subtle Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cerulean/30 to-indigo-dye/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-sm"></div>
        </div>
      </div>

      {/* Menu - Top Right */}
      <div className="fixed top-6 right-6 z-40">
        <FloatingMenuButton />
      </div>
    </>
  );
}