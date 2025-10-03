'use client'
import VideoHeroSection from './components/VideoHeroSection';
import InkScrollSection from './components/InkScrollSection';
import ProjectCarousel from './components/ProjectCarousel';
import FooterWithMarquee from './components/FooterWithMarquee';
import LazyCalculator from './components/LazyCalculator';
import FloatingElements from './components/FloatingElements';
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
    <main className="relative" role="main">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Video Hero Section - New modern design */}
      <section id="hero" className="relative" aria-label="Hauptbereich - RückbauPRO Vorstellung">
        <VideoHeroSection />
      </section>

      {/* Container für durchgehenden Gradient ab dem Video */}
      <div className="relative bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Dekorative Hintergrund-Elemente für mehr Vielfalt */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cerulean/20 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-penn-blue/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-oxford-blue/40 rounded-full blur-[100px]" />
        </div>

        {/* Ink Scroll Text Effect Section */}
        <div className="relative">
          <ScrollAnimation animation="slideUp" duration={1000}>
            <section id="services-grid" className="section-divider" aria-label="Unsere Leistungen">
              <InkScrollSection />
            </section>
          </ScrollAnimation>
        </div>

        {/* Wellenförmiger Übergang */}
        <div className="relative h-24 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C150,80 350,80 600,60 C850,40 1050,40 1200,60 L1200,120 L0,120 Z" fill="url(#gradient1)" opacity="0.3"/>
            <path d="M0,20 C200,100 400,100 600,80 C800,60 1000,60 1200,80 L1200,120 L0,120 Z" fill="url(#gradient2)" opacity="0.5"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#2874A6" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.4"/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f2540" stopOpacity="0.5"/>
                <stop offset="50%" stopColor="#1e3a5f" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#0f2540" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Project Carousel Section */}
        <div className="relative bg-gradient-to-b from-oxford-blue/80 to-penn-blue/60">
          <ScrollAnimation animation="fadeIn" duration={1200} delay={200}>
            <section id="process" className="gradient-transition" aria-label="Unsere Projekte und Arbeitsabläufe">
              <ProjectCarousel />
            </section>
          </ScrollAnimation>
        </div>

      </div>

      {/* Mobile Scrolling Banner */}
      <MobileScrollingBannerCSS />

      {/* City Services Section with Tab Navigation */}
      <MobileGradientSection variant="strong">
        <RevealOnScroll>
          <section className="section-divider" aria-label="Standorte und regionale Services">
            <CityServicesSection />
          </section>
        </RevealOnScroll>
      </MobileGradientSection>

      {/* Gradient Divider for Mobile */}
      <div className="md:hidden">
        <GradientDivider />
      </div>

      {/* Contact Form Section - Full Width */}
      <ScrollAnimation animation="slideUp" duration={1000}>
        <section id="contact-form" className="section-divider" aria-label="Kontakt und Angebotsanfrage">
          <SimpleContactForm />
        </section>
      </ScrollAnimation>

      {/* Footer with Marquee */}
      <FooterWithMarquee />
    </main>
  );
}