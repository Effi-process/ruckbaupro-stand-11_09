'use client';

import Image from 'next/image';
import FloatingMenuButton from './FloatingMenuButton';

export default function FloatingElements() {
  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-40">
        <Image
          src="/logo-rueckbaupro-final.png"
          alt="RückbauPRO Logo"
          width={160}
          height={80}
          priority
          style={{ objectFit: 'contain' }}
          className="drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300"
        />
      </div>

      {/* Menu - Top Right */}
      <div className="fixed top-6 right-6 z-40">
        <FloatingMenuButton />
      </div>
    </>
  );
}