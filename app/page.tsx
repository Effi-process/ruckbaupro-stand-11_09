'use client'
import VideoHeroSection from './components/VideoHeroSection';
import InkScrollSection from './components/InkScrollSection';
import ProjectCarousel from './components/ProjectCarousel';
import FooterWithMarquee from './components/FooterWithMarquee';
import LazyCalculator from './components/LazyCalculator';
import GlassHeader from './components/GlassHeader';
import IconServicesSection from './components/IconServicesSection';
import TwoColumnSection from './components/TwoColumnSection';
import CityServicesSection from './components/CityServicesSection';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './components/Icon';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SimpleContactForm from './components/SimpleContactForm';
import { ScrollAnimation, ParallaxSection, RevealOnScroll } from './components/ScrollAnimations';
import { GradientDivider, WaveTransition, MobileGradientSection } from './components/MobileGradientTransitions';
import { MobileScrollingBannerCSS } from './components/MobileScrollingBanner';

// Use Next.js dynamic imports instead of React.lazy for SSR compatibility
const ProjectGallery = dynamic(() => import('./components/ProjectGallery'), {
  ssr: false,
  loading: () => <div className="h-96 bg-off-white" />
});

export default function Home() {
  return (
    <main className="relative bg-[#1a2332] overflow-hidden" role="main">
      {/* Glass Header Navigation */}
      <GlassHeader />

      {/* Video Hero Section - New modern design */}
      <section id="hero" className="relative -mt-20 lg:mt-0" aria-label="Hauptbereich - RückbauPRO Vorstellung">
        <VideoHeroSection />
      </section>


      {/* Two Column Section */}
      <TwoColumnSection />

      {/* Ink Scroll Text Effect Section */}
      <ScrollAnimation animation="slideUp" duration={1000}>
        <section id="services-grid" className="section-divider" aria-label="Unsere Leistungen">
          <InkScrollSection />
        </section>
      </ScrollAnimation>

      {/* Project Carousel Section */}
      <ScrollAnimation animation="fadeIn" duration={1200} delay={200}>
        <section id="process" className="gradient-transition" aria-label="Unsere Projekte und Arbeitsabläufe">
          <ProjectCarousel />
        </section>
      </ScrollAnimation>

      {/* Mobile Scrolling Banner */}
      <MobileScrollingBannerCSS />

      {/* City Services Section with Tab Navigation */}
      <RevealOnScroll>
        <section className="section-divider" aria-label="Standorte und regionale Services">
          <CityServicesSection />
        </section>
      </RevealOnScroll>

      {/* Contact Form Section - Full Width */}
      <ScrollAnimation animation="slideUp" duration={1000}>
        <section id="contact-form" className="section-divider" aria-label="Kontakt und Angebotsanfrage">
          <SimpleContactForm />
        </section>
      </ScrollAnimation>

      {/* Karriere CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a2332] to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Werden Sie Teil unseres Teams
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Wir suchen motivierte Fachkräfte für sichere und zukunftsorientierte Arbeitsplätze
          </p>
          <Link
            href="/karriere"
            className="inline-block bg-cerulean text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-dye transition-all duration-300"
          >
            Zu den Karrieremöglichkeiten
          </Link>
        </div>
      </section>

      {/* Footer with Marquee */}
      <FooterWithMarquee />
    </main>
  );
}