'use client'
import VideoHeroSection from './components/VideoHeroSection';
import InkScrollSection from './components/InkScrollSection';
import ProjectCarousel from './components/ProjectCarousel';
import FooterWithMarquee from './components/FooterWithMarquee';
import MenuFooter from './components/MenuFooter';
import LazyCalculator from './components/LazyCalculator';
import MultiStepWizard from './components/MultiStepWizard';
import FloatingElements from './components/FloatingElements';
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
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Video Hero Section - New modern design */}
      <div id="hero" className="relative">
        <VideoHeroSection />
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

      </div>

      
      {/* Footer with Marquee */}
      <MenuFooter />
    </main>
  );
}