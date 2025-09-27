'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServiceHeroSectionProps {
  badge?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ServiceHeroSection({
  badge,
  title,
  description,
  image,
  imageAlt
}: ServiceHeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content positioned on the left side with padding for mobile logo */}
      <div className="relative z-10 flex items-center h-full px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl">
            {/* Add top padding on mobile to avoid logo overlap */}
            <div className="pt-32 md:pt-0">
              {badge && (
                <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">
                  {badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="bg-cerulean text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-indigo-dye transition-all transform hover:scale-105 min-h-[44px] text-center"
                >
                  KOSTENLOSE BERATUNG
                </Link>
                <Link
                  href="/leistungen"
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 min-h-[44px] text-center"
                >
                  ALLE LEISTUNGEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}