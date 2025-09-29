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
      <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Ink Scroll Text Effect Section */}
        <MobileGradientSection variant="default">
          <ScrollAnimation animation="slideUp" duration={1000}>
            <section id="services-grid" className="section-divider" aria-label="Unsere Leistungen">
              <InkScrollSection />
            </section>
          </ScrollAnimation>
        </MobileGradientSection>

        {/* Gradient Divider for Mobile */}
        <div className="md:hidden">
          <GradientDivider />
        </div>

        {/* Project Carousel Section */}
        <MobileGradientSection variant="reverse">
          <ScrollAnimation animation="fadeIn" duration={1200} delay={200}>
            <section id="process" className="gradient-transition" aria-label="Unsere Projekte und Arbeitsabläufe">
              <ProjectCarousel />
            </section>
          </ScrollAnimation>
        </MobileGradientSection>

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
        <section id="contact-form" className="bg-oxford-blue section-divider" aria-label="Kontakt und Angebotsanfrage">
          <SimpleContactForm purpose="quote" />
        </section>
      </ScrollAnimation>

      {/* Footer with Marquee */}
      <FooterWithMarquee />
    </main>
  );
}