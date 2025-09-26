'use client';

import React from 'react';
import Link from 'next/link';

export default function GlassCTASection() {
  const steps = [
    {
      number: '1',
      title: 'BESICHTIGUNG',
      description: 'KOSTENLOSE VOR-ORT-BESICHTIGUNG UND BERATUNG'
    },
    {
      number: '2',
      title: 'ANGEBOT',
      description: 'DETAILLIERTES FESTPREISANGEBOT INNERHALB 24 STUNDEN'
    },
    {
      number: '3',
      title: 'AUSFÜHRUNG',
      description: 'TERMINGERECHTE AUSFÜHRUNG MIT ENTSORGUNGSNACHWEIS'
    }
  ];

  return (
    <>      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-900">
        {/* Professional background image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/images/professional-demolition-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply'
          }}
        />
      
      {/* Glass Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Process Steps - Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="glass-card backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
            >
              {/* Step Number Circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cerulean to-indigo-dye text-white font-bold text-2xl mb-4">
                {step.number}
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-sm text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA Section - Positioned Below */}
        <div className="glass-morphism rounded-3xl p-10 backdrop-blur-xl bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 border border-white/20 shadow-2xl">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              KOSTENLOSES ANGEBOT ANFORDERN
            </h2>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
              RUFEN SIE UNS AN ODER NUTZEN SIE UNSER KONTAKTFORMULAR
            </p>
            
            {/* Buttons Container - Horizontal Layout */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch mt-8">
              {/* Phone Button */}
              <a
                href="tel:+491748083023"
                className="group relative flex-1 md:flex-initial"
              >
                <div className="glass-button px-8 py-5 rounded-xl backdrop-blur-md bg-white/90 hover:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5">
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-cerulean font-bold text-xl">+49 174 8083023</span>
                  </div>
                </div>
              </a>
              
              {/* Contact Form Button */}
              <Link
                href="/kontakt"
                className="group relative flex-1 md:flex-initial"
              >
                <div className="glass-button px-8 py-5 rounded-xl backdrop-blur-md bg-transparent border-2 border-white/40 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5">
                  <span className="text-white font-bold text-xl">KONTAKTFORMULAR</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}