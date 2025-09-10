'use client';

import Link from 'next/link';
import Icon from './Icon';

export default function AllServicesButton() {
  return (
    <div className="fixed top-6 left-6 z-40">
      <Link 
        href="/leistungen"
        className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/25 hover:border-cerulean/50 text-white hover:bg-white/20 transition-all duration-300 rounded-xl shadow-2xl hover:shadow-3xl group"
      >
        <span className="font-semibold text-sm">ALLE LEISTUNGEN ANSEHEN</span>
        <Icon 
          name="arrow" 
          size={16} 
          className="transition-transform duration-300 group-hover:translate-x-1" 
        />
      </Link>
    </div>
  );
}