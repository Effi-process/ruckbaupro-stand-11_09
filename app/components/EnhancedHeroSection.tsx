'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EnhancedHeroSection() {
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
      
      {/* Content Section - Below Video with Professional Background */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-12"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(254, 252, 251, 0.95), rgba(254, 252, 251, 0.98)), url('/images/team-photo.jpeg')` 
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-oxford-blue mb-6 drop-shadow-lg">
            Professioneller Rückbau & Abbruch
          </h1>
          
          <p className="text-xl md:text-2xl text-indigo-dye mb-8 max-w-3xl mx-auto">
            Ihr zuverlässiger Partner für Rückbau, Abbruch und Entsorgung in ganz Deutschland
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491748083023"
              className="inline-flex items-center justify-center px-8 py-4 bg-cerulean text-white font-bold rounded-lg hover:bg-indigo-dye transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +49 174 8083023
            </a>
            
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-off-white border-2 border-cerulean text-cerulean font-bold rounded-lg hover:bg-cerulean hover:text-white transition-colors"
            >
              Kostenloses Angebot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}