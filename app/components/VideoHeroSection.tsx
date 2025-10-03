'use client';

import VideoBackground from './VideoBackground';
import Link from 'next/link';

export default function VideoHeroSection() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground
        src="/videos/asbestsanierung-szene.mp4"
        poster="/images/hero-poster.jpg"
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      {/* Hero Content - Unten Links */}
      <div className="relative z-20 h-full flex items-end pb-12 sm:pb-16 md:pb-24 lg:pt-20">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Hero Headline - Mobile optimized */}
            <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6">
              <div>Professioneller</div>
              <div>Rückbau.</div>
              <div className="text-[24px] sm:text-3xl md:text-4xl lg:text-5xl text-gray-300">Moderne Technik.</div>
            </h1>

            {/* Subtext - Mobile optimized without Deutschlandweit */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              <span className="hidden sm:inline">Deutschlandweiter Service für Asbest-Sanierung, Entkernung und Gebäudeabbruch. </span>
              <span className="sm:hidden">Asbest-Sanierung, Entkernung und Gebäudeabbruch. </span>
              <span className="hidden sm:inline">Moderne Ausrüstung, faire Preise und höchste Sicherheitsstandards.</span>
            </p>

            {/* CTA Button - Glasmorphismus Style wie Announcement Bar */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-lg font-bold hover:bg-white/20 transition-all duration-300 min-h-[44px]"
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