'use client';

import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../../components/FooterWithMarquee';
import SimpleContactForm from '../../components/SimpleContactForm';
import StickyServiceMenu from '../../components/StickyServiceMenu';
import FloatingElements from '../../components/FloatingElements';

export default function RueckbauPage() {
  return (
    <main className="overflow-hidden">
      {/* Transparent Header */}
      <FloatingElements />
      
      <StickyServiceMenu />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/rueckbau-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="relative z-20 h-full flex items-end pb-12">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl pt-32 md:pt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                <div>Professioneller</div>
                <div>Rückbau.</div>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Fachgerechter Rückbau von Gebäuden und Anlagen. Sicher, umweltschonend und nach höchsten Standards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cerulean to-indigo-dye text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Kostenlose Beratung
                  <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-white border-y-[4px] sm:border-y-[6px] border-y-transparent"></div>
                </Link>
                <Link
                  href="tel:+4917480830230"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                >
                  +49 174 8083023
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Service Details */}
        <section id="details" className="py-12 px-4">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div>
                <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Rückbau Expertise</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
                  Präziser Rückbau mit System
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Beim Rückbau geht es um mehr als nur Abriss. Wir demontieren Gebäude systematisch 
                  und umweltschonend, um wertvolle Materialien zu erhalten und Schadstoffe sicher zu entfernen.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  {[
                    { number: '500+', label: 'Projekte erfolgreich abgeschlossen' },
                    { number: '24/7', label: 'Notdienst verfügbar' },
                    { number: '100%', label: 'Umweltgerechte Entsorgung' },
                    { number: '15+', label: 'Jahre Erfahrung' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-cerulean mb-1">{stat.number}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/rueckbau-professional.png"
                  alt="Professioneller Rückbau"
                  className="rounded-2xl w-full"
                  width={600}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-12 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Unsere Rückbau-Leistungen
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Von der Planung bis zur Entsorgung - alle Rückbau-Arbeiten aus einer Hand
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: 'Selektiver Rückbau',
                  description: 'Gezielter Rückbau einzelner Gebäudeteile unter Erhaltung der Hauptstruktur.',
                  features: ['Schonung der Bausubstanz', 'Präzise Demontage', 'Minimaler Staub', 'Wertstofferhaltung']
                },
                {
                  title: 'Komplettrückbau',
                  description: 'Vollständiger Rückbau von Gebäuden bis auf das Fundament.',
                  features: ['Komplette Demontage', 'Entsorgung inklusive', 'Baugrubenvorbereitung', 'Termingarantie']
                },
                {
                  title: 'Industrierückbau',
                  description: 'Fachgerechter Rückbau von Industrieanlagen und Produktionsstätten.',
                  features: ['Anlagentechnik', 'Maschinentransport', 'Schadstoffentfernung', 'Betriebssicherheit']
                },
                {
                  title: 'Schadstoffsanierung',
                  description: 'Sichere Entfernung von Asbest, KMF und anderen gefährlichen Stoffen.',
                  features: ['TRGS 519/521 zertifiziert', 'Luftmessungen', 'Fachgerechte Entsorgung', 'Dokumentation']
                },
                {
                  title: 'Entkernung',
                  description: 'Komplette Entfernung der Innenausstattung bei Erhaltung der Außenhülle.',
                  features: ['Erhalt der Fassade', 'Saubere Trennung', 'Recycling-optimiert', 'Staubarm']
                },
                {
                  title: 'Notfallrückbau',
                  description: '24/7 Verfügbar für dringende Rückbau-Arbeiten nach Schäden.',
                  features: ['Soforteinsatz', 'Gefahrenbeseitigung', 'Notabstützung', 'Schadensminimierung']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/70 text-sm">
                        <svg className="w-4 h-4 mr-3 text-cerulean flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-12 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Unser Rückbau-Prozess
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Systematisch, sicher und umweltschonend - so führen wir Ihre Rückbau-Projekte durch
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { step: '01', title: 'Bestandsaufnahme', desc: 'Detaillierte Analyse der Bausubstanz und Schadstoffe' },
                { step: '02', title: 'Genehmigungen', desc: 'Beantragung aller erforderlichen Genehmigungen' },
                { step: '03', title: 'Demontage', desc: 'Systematischer Rückbau nach bewährten Verfahren' },
                { step: '04', title: 'Entsorgung', desc: 'Umweltgerechte Trennung und Entsorgung der Materialien' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cerulean to-indigo-dye rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-12">
          <div className="container-custom">
            <div className="text-center mb-8">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Kontakt</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                Rückbau-Projekt planen
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Lassen Sie sich kostenlos beraten. Wir erstellen Ihnen ein maßgeschneidertes Angebot für Ihr Rückbau-Projekt.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Sofort erreichbar</h3>
                    <div className="space-y-4">
                      <a href="tel:+4917480830230" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">+49 174 8083023</p>
                          <p className="text-sm text-white/60">24/7 Notdienst</p>
                        </div>
                      </a>
                      
                      <a href="mailto:info@rueckbaupro.de" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center">
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
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Rückbau-Anfrage</h3>
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
                      <label className="block text-white/80 text-sm font-medium mb-2">Projekt beschreiben</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
                        placeholder="Beschreiben Sie Ihr Rückbau-Projekt..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cerulean to-indigo-dye text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                      Kostenlose Beratung anfordern
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <FooterWithMarquee />
    </main>
  );
}