'use client';

import VideoBackground from './VideoBackground';
import Link from 'next/link';

export default function VideoHeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Video Background */}
      <VideoBackground
        src="/videos/asbestsanierung-szene.mp4"
        poster="/images/hero-poster.jpg"
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-end pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl">
            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6">
              <div className="break-words">Professioneller Rückbau.</div>
              <div className="break-words">Moderne Technik. Faire Preise.</div>
            </h1>
            
            {/* Subtext - Removed Deutschlandweit on mobile */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              <span className="hidden sm:inline">Deutschlandweiter Service für </span>
              <span className="sm:hidden">Service für </span>
              Asbest-Sanierung, Entkernung und Gebäudeabbruch.
              Moderne Ausrüstung, faire Preise und höchste Sicherheitsstandards.
            </p>
            
            {/* CTA Button - Glasmorphismus Style wie Announcement Bar */}
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 transition-all duration-300 min-h-[44px]"
            >
              Kostenlos beraten lassen
              <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}