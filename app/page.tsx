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
import MultiStepWizard from './components/MultiStepWizard';

// Use Next.js dynamic imports instead of React.lazy for SSR compatibility
const ProjectGallery = dynamic(() => import('./components/ProjectGallery'), {
  ssr: false,
  loading: () => <div className="h-96 bg-neutral-50" />
});

export default function Home() {
  return (
    <main className="relative bg-white">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Video Hero Section - Refined design */}
      <div id="hero" className="relative">
        <VideoHeroSection />
      </div>

      {/* Smooth transition from hero to content */}
      <div className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-100">
        {/* Services Section with refined gradient */}
        <section id="services-grid" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/5 to-transparent opacity-40" />
          <InkScrollSection />
        </section>

        {/* Project Carousel with smooth transition */}
        <section id="process" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 to-transparent" />
          <ProjectCarousel />
        </section>
      </div>

      {/* City Services with elegant background */}
      <div className="relative bg-gradient-to-b from-neutral-100 to-white">
        <CityServicesSection />
      </div>

      {/* Contact Form with refined dark section */}
      <section id="contact-form" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
        <div className="relative z-10 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MultiStepWizard purpose="quote" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}