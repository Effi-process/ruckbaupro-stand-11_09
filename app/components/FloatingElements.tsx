'use client';

import Image from 'next/image';
import Link from 'next/link';
import FloatingMenuButton from './FloatingMenuButton';

export default function FloatingElements() {
  return (
    <>
      {/* Logo - Top Left Corner */}
      <div className="fixed top-2 left-8 z-40">
        <Link href="/" className="block relative group cursor-pointer">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-2 hover:bg-white/15 transition-all duration-300 shadow-2xl -rotate-90">
            <Image
              src="/Design ohne Titel 2.svg.svg"
              alt="RückbauPRO Logo"
              width={120}
              height={40}
              priority
              className="block"
            />
          </div>
        </Link>
      </div>

      {/* Menu - Top Right */}
      <div className="fixed top-2 right-6 z-50">
        <FloatingMenuButton />
      </div>
    </>
  );
}