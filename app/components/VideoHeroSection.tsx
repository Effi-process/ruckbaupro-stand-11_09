'use client';

import VideoBackground from './VideoBackground';
import Link from 'next/link';

export default function VideoHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground
        src="/videos/asbestsanierung-szene.mp4"
        poster="/images/hero-poster.jpg"
      />

      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* Hero Content with refined positioning */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-4xl">
            {/* Minimalist headline */}
            <h1 className="font-light tracking-tight text-white mb-8">
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-2">
                Professioneller
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.9] mb-2">
                Rückbau
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/80 leading-[1.1]">
                in Perfektion
              </span>
            </h1>

            {/* Refined subtext */}
            <div className="mb-12 space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed">
                Deutschlandweiter Service für anspruchsvolle Rückbauprojekte.
              </p>
              <p className="text-base md:text-lg text-white/70 font-light">
                Zertifiziert. Versichert. Zuverlässig.
              </p>
            </div>

            {/* Elegant CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 font-medium text-lg overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Beratungsgespräch vereinbaren</span>
                <div className="absolute inset-0 bg-neutral-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-light text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Leistungen entdecken
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}