'use client';

import Image from 'next/image';
import FloatingMenuButton from './FloatingMenuButton';

export default function FloatingElements() {
  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-40">
        <Image
          src="/Gemini_Generated_Image_307lsf307lsf307l.png"
          alt="RückbauPRO Logo"
          width={140}
          height={70}
          priority
          style={{ objectFit: 'contain' }}
          className="drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
        />
      </div>

      {/* Menu - Top Right */}
      <div className="fixed top-6 right-6 z-40">
        <FloatingMenuButton />
      </div>
    </>
  );
}