'use client';

import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import FloatingMenuButton from './FloatingMenuButton';
import LogoComponent from './LogoComponent';
import { motion } from 'framer-motion';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Certification {
  name: string;
  description: string;
}

export interface ServicePageData {
  serviceTitle: string;
  serviceSubtitle: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  trustIndicators: {
    icon: string;
    text: string;
    color?: string;
  }[];
  processSteps: ProcessStep[];
  serviceFeatures: ServiceFeature[];
  certifications: Certification[];
  ctaTitle: string;
  ctaDescription: string;
  emergencyNumber?: string;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  children?: ReactNode;
}

export default function ServicePageTemplate({ data, children }: ServicePageTemplateProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Dark Professional Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Premium Header with Logo */}
      <header className="relative z-40 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo Section */}
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white to-gray-100 p-3 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform">
                  <LogoComponent width={180} height={72} />
                </div>
              </div>
              <div className="hidden md:block">
                <p className="text-white/60 text-xs uppercase tracking-wider">{data.serviceSubtitle}</p>
                <p className="text-white font-bold text-lg">{data.serviceTitle}</p>
              </div>
            </Link>

            {/* Premium Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/leistungen" className="text-white/80 hover:text-white transition-colors">Leistungen</Link>
              <Link href="/standorte" className="text-white/80 hover:text-white transition-colors">Standorte</Link>
              <Link href="/preise" className="text-white/80 hover:text-white transition-colors">Preise</Link>
              <Link href="/ueber-uns" className="text-white/80 hover:text-white transition-colors">Über uns</Link>
              <Link 
                href="/kontakt" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Kontakt
              </Link>
            </nav>

            {/* Floating Menu for Mobile */}
            <div className="lg:hidden">
              <FloatingMenuButton />
            </div>
          </div>
        </div>
      </header>

      {/* Premium Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-7xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
                  {data.certifications[0]?.name || 'Zertifiziert'}
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-black text-white mt-6 mb-6"
              >
                {data.heroTitle}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {data.heroHighlight}
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                {data.heroDescription}
              </motion.p>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-6 mb-10"
              >
                {data.trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name={indicator.icon} size={20} className={indicator.color || "text-white"} />
                    <span className="text-white/80">{indicator.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  href="/kontakt" 
                  className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Icon name="phone" size={20} />
                  Kostenlose Beratung
                  <Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/preise" 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  Kostenrechner
                </Link>
              </motion.div>
            </div>

            {/* Premium Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/20">
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={data.heroImage}
                    alt={data.heroImageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay with Info */}
                  {data.emergencyNumber && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon name="check" size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold">24/7 Notdienst verfügbar</p>
                          <p className="text-white/80 text-sm">Schnelle Hilfe bei Notfällen</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Premium Features Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unsere Leistungen im Detail
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Professionelle {data.serviceTitle} mit höchsten Qualitätsstandards und modernster Technik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 hover:from-gray-800/90 hover:to-gray-900/90 transition-all hover:scale-105 hover:shadow-2xl"
              >
                {/* Highlight Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {feature.highlight}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="relative z-10 py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unser bewährter Prozess
            </h2>
            <p className="text-xl text-white/60">
              In {data.processSteps.length} Schritten zur perfekten Lösung
            </p>
          </motion.div>

          {/* Process Tabs */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Tab Navigation */}
            <div className="space-y-4">
              {data.processSteps.map((step, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl scale-105' 
                      : 'bg-gray-800/50 hover:bg-gray-800/70'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl font-bold ${activeTab === index ? 'text-white' : 'text-white/40'}`}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-1 ${activeTab === index ? 'text-white' : 'text-white/80'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${activeTab === index ? 'text-white/90' : 'text-white/60'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8"
            >
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={data.processSteps[activeTab].icon} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {data.processSteps[activeTab].title}
                </h3>
                <p className="text-white/80 mb-6">
                  {data.processSteps[activeTab].description}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">
                  Leistungsumfang:
                </p>
                {data.processSteps[activeTab].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name="check-circle" size={20} className="text-green-400" />
                    <span className="text-white/80">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link 
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-white transition-colors"
                >
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Content Section */}
      {children && (
        <section className="relative z-10 py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            {children}
          </div>
        </section>
      )}

      {/* Certifications Bar */}
      <section className="relative z-10 py-12 px-6 bg-gradient-to-r from-gray-900/90 to-gray-800/90">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {data.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">{cert.name}</div>
                <div className="text-xs text-white/60">{cert.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {data.ctaTitle}
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                {data.ctaDescription}
              </p>

              {/* Contact Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/kontakt" 
                  className="group bg-white text-indigo-dye px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="phone" size={20} />
                  Jetzt anrufen
                  <Icon name="arrow-right" size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/preise" 
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="calculator" size={20} />
                  Kosten berechnen
                </Link>
              </div>

              {/* Emergency Hotline */}
              {data.emergencyNumber && (
                <div className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90">24/7 Notdienst: {data.emergencyNumber}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <LogoComponent width={120} height={48} />
              <span className="text-white/60 text-sm">© 2024 RückbauPRO. Alle Rechte vorbehalten.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/impressum" className="text-white/60 hover:text-white text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-white/60 hover:text-white text-sm transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-white/60 hover:text-white text-sm transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}