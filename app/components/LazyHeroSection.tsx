'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Use Next.js dynamic import for SSR compatibility
const EnhancedHeroSection = dynamic(() => import('./EnhancedHeroSection'), {
  ssr: false,
  loading: () => <CriticalHero />
});

// Critical above-the-fold hero that renders immediately
function CriticalHero() {
  return (
    <div>
      {/* Video Section */}
      <section className="relative w-full" style={{ height: '70vh' }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ruempelschmiede-cdn.b-cdn.net/Neu.mp4" type="video/mp4" />
        </video>
        {/* Fallback image */}
        <Image
          src="/images/hero-poster.jpg"
          alt="Professioneller Rückbau & Abbruch"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover -z-10"
        />
      </section>
      
      {/* Content Section - Below Video */}
      <section className="bg-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professioneller Rückbau & Abbruch
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ihr zuverlässiger Partner für Rückbau, Abbruch und Entsorgung in ganz Deutschland
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491748083023"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0066CC] text-white font-bold rounded-lg hover:bg-[#0052A3] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +49 174 8083023
            </a>
            
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0066CC] text-[#0066CC] font-bold rounded-lg hover:bg-[#0066CC] hover:text-white transition-colors"
            >
              Kostenloses Angebot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Loading fallback for enhanced hero
function HeroSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-screen bg-gradient-to-br from-gray-300 to-gray-400"></div>
    </div>
  );
}

export default function LazyHeroSection() {
  const [loadEnhanced, setLoadEnhanced] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load enhanced hero after critical content
    const timer = setTimeout(() => {
      setLoadEnhanced(true);
    }, 1000);

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (typeof window !== 'undefined') {
      const heroElement = document.querySelector('.hero-section');
      if (heroElement) {
        observer.observe(heroElement);
      }
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Show critical hero immediately, then upgrade
  if (!loadEnhanced) {
    return <CriticalHero />;
  }

  return <EnhancedHeroSection />;
}