'use client';

import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-4">
        <span className="text-white/90 text-sm font-medium">
          Deutschlandweiter Service • Faire Preise • 24/7 Notdienst
        </span>
        <button
          onClick={() => {
            const element = document.getElementById('kontakt');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-white text-sm font-semibold hover:text-white/80 transition-colors"
        >
          Kontakt →
        </button>
      </div>
    </div>
  );
}