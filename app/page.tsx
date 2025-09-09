'use client'
import VideoHeroSection from './components/VideoHeroSection';
import InkScrollSection from './components/InkScrollSection';
import ProjectCarousel from './components/ProjectCarousel';
import FooterWithMarquee from './components/FooterWithMarquee';
import LazyCalculator from './components/LazyCalculator';
import MultiStepWizard from './components/MultiStepWizard';
import FloatingMenuButton from './components/FloatingMenuButton';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './components/Icon';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Use Next.js dynamic imports instead of React.lazy for SSR compatibility
const ProjectGallery = dynamic(() => import('./components/ProjectGallery'), {
  ssr: false,
  loading: () => <div className="h-96 bg-off-white" />
});

export default function Home() {
  return (
    <main className="relative">
      {/* Video Hero Section - New modern design */}
      <div id="hero" className="relative">
        <VideoHeroSection />
        {/* Sticky Menu Container - Now working! */}
        <div className="absolute top-4 right-4 z-50">
          <FloatingMenuButton />
        </div>
      </div>
      
      {/* Container für durchgehenden Gradient ab dem Video */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Ink Scroll Text Effect Section */}
        <section id="services-grid">
          <InkScrollSection />
        </section>

        {/* Project Carousel Section */}
        <section id="process">
          <ProjectCarousel />
        </section>

        {/* Contact Form Section */}
        <section id="kontakt-form" className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Kontakt</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                Kostenlose Beratung
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Lassen Sie sich unverbindlich beraten. Wir erstellen Ihnen ein maßgeschneidertes Angebot für Ihr Rückbau-Projekt.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Suspense fallback={
                <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cerulean mx-auto mb-4"></div>
                  <p className="text-indigo-dye">Lade Anfrage-Formular...</p>
                </div>
              }>
                <MultiStepWizard 
                  purpose="quote" 
                  onComplete={(data) => console.log('Form completed:', data)}
                />
              </Suspense>
            </div>

          </div>
        </section>
      </div>

      {/* Interactive Shooter Game Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Interaktiv</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              RÜCKBAUPRO Challenge
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Testen Sie Ihre Reflexe! Schießen Sie die Buchstaben frei und erleben Sie unsere Präzision spielerisch.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="h-96 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/20">
              <Suspense fallback={<div className="h-full bg-gray-800 flex items-center justify-center text-white">Spiel wird geladen...</div>}>
                <div className="h-full">
                  {(() => {
                    const CanvasShooterGame = dynamic(() => import('./components/CanvasShooterGame'), {
                      ssr: false,
                      loading: () => <div className="h-full bg-gray-800 flex items-center justify-center text-white">Spiel wird geladen...</div>
                    });
                    return <CanvasShooterGame />;
                  })()}
                </div>
              </Suspense>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                💻 Desktop: Maus bewegen & klicken oder Leertaste | 📱 Mobile: Touch & Swipe
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer with Marquee */}
      <FooterWithMarquee />
    </main>
  );
}