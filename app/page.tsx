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

// Use Next.js dynamic imports instead of React.lazy for SSR compatibility
const ProjectGallery = dynamic(() => import('./components/ProjectGallery'), {
  ssr: false,
  loading: () => <div className="h-96 bg-off-white" />
});

export default function Home() {
  return (
    <main className="relative">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Video Hero Section - New modern design */}
      <div id="hero" className="relative">
        <VideoHeroSection />
      </div>

      {/* Container für durchgehenden Gradient ab dem Video */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Ink Scroll Text Effect Section */}
        <div id="services-grid">
          <InkScrollSection />
        </div>

        {/* Project Carousel Section */}
        <div id="process">
          <ProjectCarousel />
        </div>

      </div>

      {/* City Services Section with Tab Navigation */}
      <CityServicesSection />

      {/* Contact Form Section - Full Width */}
      <section id="contact-form" className="bg-oxford-blue">
        <SimpleContactForm purpose="quote" />
      </section>

      {/* Footer with Marquee */}
      <FooterWithMarquee />
    </main>
  );
}