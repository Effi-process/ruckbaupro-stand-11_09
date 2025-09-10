'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function LeistungenPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: 'Asbestsanierung',
      description: 'Professionelle und sichere Entfernung von Asbest nach TRGS 519. Zertifizierte Fachkräfte garantieren höchste Sicherheitsstandards.',
      image: '/images/asbestos-professional.png',
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
      image: '/images/entkernung-professional.png',
      features: [
        'Komplettentkernung',
        'Teilentkernung möglich',
        'Schadstoffsanierung',
        'Recycling & Entsorgung'
      ]
    },
    {
      title: 'Beratung & Planung',
      description: 'Professionelle Beratung und detaillierte Projektplanung. Von der ersten Begehung bis zur finalen Umsetzung.',
      image: '/images/beratung-professional.png',
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
      image: '/images/kmf-sanierung.png',
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
      image: '/images/schimmel-sanierung.png',
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
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
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Link
                        href={`/leistungen/${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`}
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

        {/* Process Section */}
        <section id="process" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Unser Ablauf
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Von der ersten Beratung bis zur finalen Abnahme - 
                wir begleiten Sie durch jeden Schritt Ihres Projekts
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Beratung', desc: 'Kostenlose Erstberatung und Begehung vor Ort' },
                { step: '02', title: 'Angebot', desc: 'Transparentes und detailliertes Festpreisangebot' },
                { step: '03', title: 'Durchführung', desc: 'Professionelle Umsetzung mit modernster Technik' },
                { step: '04', title: 'Abnahme', desc: 'Dokumentation und ordnungsgemäße Übergabe' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt Section - genau wie auf der Hauptseite */}
        <section id="kontakt" className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Kontakt</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                Kostenlose Beratung
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Lassen Sie sich unverbindlich beraten. Wir erstellen Ihnen ein maßgeschneidertes Angebot für Ihr Rückbau-Projekt.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Kontaktinformationen */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Sofort erreichbar</h3>
                    <div className="space-y-4">
                      <a href="tel:+491748083023" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">+49 174 8083023</p>
                          <p className="text-sm text-white/60">24/7 erreichbar</p>
                        </div>
                      </a>
                      
                      <a href="mailto:info@rueckbaupro.de" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">info@rueckbaupro.de</p>
                          <p className="text-sm text-white/60">Antwort innerhalb 24h</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Unsere Vorteile</h3>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Kostenlose Erstberatung
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Festpreisgarantie
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Deutschlandweiter Service
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Kontaktformular */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Schnellanfrage</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Telefon</label>
                      <input 
                        type="tel" 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Nachricht</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
                        placeholder="Beschreiben Sie Ihr Projekt..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cerulean to-indigo-dye text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                      Nachricht senden
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer with Marquee - genau wie auf der Hauptseite */}
      <FooterWithMarquee />
    </main>
  );
}
