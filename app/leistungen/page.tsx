'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, Suspense } from 'react';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import ProcessFlow from '../components/ProcessFlow';
import SimpleContactForm from '../components/SimpleContactForm';


export default function LeistungenPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: 'Rückbau',
      description: 'Professioneller Rückbau von Gebäuden und Anlagen. Fachgerecht, umweltschonend und termingerecht mit modernster Technik.',
      image: '/images/demolition-action.png',
      features: [
        'Kompletter Gebäuderückbau',
        'Selektiver Rückbau',
        'Umweltgerechte Entsorgung',
        'Termingarantie'
      ]
    },
    {
      title: 'Abbruch',
      description: 'Kompletter Abbruch von Gebäuden, Hallen und Industrieanlagen. Schnell, sicher und zu fairen Preisen.',
      image: '/images/demolition-action.png',
      features: [
        'Gebäudeabbruch',
        'Hallenabbruch',
        'Industrieabbruch',
        'Spezialabbruch'
      ]
    },
    {
      title: 'Asbestsanierung',
      description: 'Professionelle und sichere Entfernung von Asbest nach TRGS 519. Zertifizierte Fachkräfte garantieren höchste Sicherheitsstandards.',
      image: '/images/asbest-team-hero.png',
      features: [
        'TRGS 519 zertifiziert',
        'Luftmessungen inklusive',
        'Fachgerechte Entsorgung',
        'Komplette Dokumentation'
      ]
    },
    {
      title: 'Entkernung',
      description: 'Komplette Entkernung von Gebäuden für Sanierung oder Abriss. Sauber, schnell und zuverlässig mit modernster Technik.',
      image: '/images/entkernung-team-hero.png',
      features: [
        'Komplettentkernung',
        'Teilentkernung möglich',
        'Schadstoffsanierung',
        'Recycling & Entsorgung'
      ]
    },
    {
      title: 'Entsorgung',
      description: 'Fachgerechte Entsorgung und Verwertung aller anfallenden Materialien. Umweltgerecht und gesetzeskonform.',
      image: '/images/demolition-action.png',
      features: [
        'Bauschutt-Entsorgung',
        'Sonderabfall-Entsorgung',
        'Recycling & Verwertung',
        'Entsorgungsnachweise'
      ]
    },
    {
      title: 'Beratung & Planung',
      description: 'Professionelle Beratung und detaillierte Projektplanung. Von der ersten Begehung bis zur finalen Umsetzung.',
      image: '/images/beratung-planung-hero.png',
      features: [
        'Kostenlose Erstberatung',
        'Detaillierte Projektplanung',
        'Behördliche Genehmigungen',
        'Festpreisgarantie'
      ]
    },
    {
      title: 'KMF-Sanierung',
      description: 'Zertifizierte Sanierung von künstlichen Mineralfasern. Fachgerechter Abbau und Entsorgung nach TRGS 521.',
      image: '/images/kmf-sanierung-hero.png',
      features: [
        'TRGS 521 zertifiziert',
        'Vollschutz-Ausrüstung',
        'Staubfreie Arbeitsweise',
        'Entsorgungsnachweis inklusive'
      ]
    },
    {
      title: 'Schimmelsanierung',
      description: 'Wir befreien Ihr Zuhause von gesundheitsschädlichem Schimmel. Für ein gesundes Wohnklima und Ihre Sicherheit - professionell und nachhaltig.',
      image: '/images/schimmelsanierung-hero.png',
      features: [
        'Gesundheitsschutz garantiert',
        'Ursachenbekämpfung inklusive',
        'Nachhaltige Schimmelentfernung',
        'Präventionsberatung'
      ]
    },
    {
      title: 'Betonarbeiten',
      description: 'Spezialisiert auf Betonschneiden, Bohren und Abbruch von Betonkonstruktionen mit Diamanttechnik.',
      image: '/images/demolition-action.png',
      features: [
        'Betonschneiden',
        'Kernbohrungen',
        'Betonsägen',
        'Betonabbruch'
      ]
    }
  ];

  return (
    <main className="overflow-hidden relative">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Hero Section - mit Video wie auf der Hauptseite */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/asbestsanierung-szene.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-end pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
                <div>Unsere</div>
                <div>Leistungen.</div>
                <div>Komplett.</div>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                Professioneller Rückbau, Sanierung und Entsorgung. 
                Alles aus einer Hand mit höchsten Qualitätsstandards und modernster Technik.
              </p>
              
              <button
                onClick={() => {
                  const element = document.getElementById('services-grid');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                Leistungen entdecken
                <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - im gleichen Stil wie die Hauptseite */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Professioneller Service Chip */}
        <section className="relative py-16">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M13 3l-2 7h5l-5 11 2-8H8l5-10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white/90 text-sm tracking-wider uppercase">Alle Leistungen im Überblick</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="pb-24 px-4">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  id={service.title.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}
                  className="group relative flex"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex flex-col w-full">
                    {/* Service Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Service Title Overlay */}
                      <div className="absolute bottom-4 left-6">
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-white/80 mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3 mb-6 flex-grow">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-white/70">
                            <svg className="w-5 h-5 mr-3 text-cerulean flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Link
                        href={`/leistungen/${service.title.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 mt-auto"
                      >
                        Ins Detail
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
      
      {/* Process Flow Section - Beautiful Modern Design */}
      <ProcessFlow />
      
      {/* Contact Form Section - Full Width */}
      <section id="contact-form" className="section-divider">
        <SimpleContactForm />
      </section>
      
      {/* Footer with Marquee - genau wie auf der Hauptseite */}
      <FooterWithMarquee />
    </main>
  );
}
