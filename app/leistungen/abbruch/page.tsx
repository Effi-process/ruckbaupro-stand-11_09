'use client';

import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../../components/FooterWithMarquee';
import SimpleContactForm from '../../components/SimpleContactForm';
import StickyServiceMenu from '../../components/StickyServiceMenu';
import FloatingElements from '../../components/FloatingElements';

export default function AbbruchPage() {
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
          <source src="/videos/demolition-action.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="relative z-20 h-full flex items-end pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl pt-32 md:pt-0">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
                <div>Professioneller</div>
                <div>Abbruch.</div>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Kontrollierte Sprengung und mechanischer Abbruch. Sicher, effizient und umweltschonend.
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
                  Notdienst 24/7
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        {/* Service Details */}
        <section id="details" className="py-24 px-4">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Abbruch Expertise</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                  Kontrollierter Abbruch mit Präzision
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Von der kontrollierten Sprengung bis zum mechanischen Abbruch - wir beseitigen 
                  Bauwerke sicher und effizient. Minimale Auswirkungen auf die Umgebung garantiert.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { icon: '💥', title: 'Kontrollierte Sprengung', desc: 'Präzise Sprengungen für große Bauwerke' },
                    { icon: '🏗️', title: 'Mechanischer Abbruch', desc: 'Schonender Abbruch mit modernster Technik' },
                    { icon: '⚡', title: '24/7 Notdienst', desc: 'Soforteinsatz bei Gefahrensituationen' },
                    { icon: '♻️', title: 'Umweltschutz', desc: '95% Recyclingquote bei allen Materialien' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/demolition-action.png"
                  alt="Professioneller Abbruch"
                  className="rounded-2xl w-full"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Abbruch Methods */}
        <section id="methods" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Unsere Abbruch-Methoden
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Je nach Projekt wählen wir die optimale Abbruch-Methode für maximale Effizienz und Sicherheit
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'Kontrollierte Sprengung',
                  description: 'Präzise Sprengungen für große Bauwerke mit minimaler Umgebungsbelastung.',
                  features: ['Sekundengenau', 'Staubarm', 'Lärmreduziert', 'Behördengenehmigt'],
                  icon: '💥'
                },
                {
                  title: 'Mechanischer Abbruch',
                  description: 'Schonender Abbruch mit Baggern und Spezialwerkzeugen.',
                  features: ['Materialschonend', 'Flexibel', 'Recycling-optimiert', 'Präzise Steuerung'],
                  icon: '🏗️'
                },
                {
                  title: 'High-Reach Abbruch',
                  description: 'Abbruch von Hochhäusern mit Spezialbaggern bis 100m Höhe.',
                  features: ['Große Höhen', 'Sicher', 'Präzise', 'Schnell'],
                  icon: '🏢'
                },
                {
                  title: 'Seilsägen-Abbruch',
                  description: 'Präzise Schnitte in Beton, Stahl und Mauerwerk.',
                  features: ['Millimetergenau', 'Vibrationsfrei', 'Staubarm', 'Leise'],
                  icon: '⚡'
                },
                {
                  title: 'Wasserschneiden',
                  description: 'Hochdruckwasser-Abbruch für sensible Bereiche.',
                  features: ['Staubfrei', 'Erschütterungsfrei', 'Umweltfreundlich', 'Präzise'],
                  icon: '💧'
                },
                {
                  title: 'Notfall-Abbruch',
                  description: '24/7 Sofortabbruch bei akuter Einsturzgefahr.',
                  features: ['Soforteinsatz', 'Gefahrenbeseitigung', 'Schnell', 'Sicher'],
                  icon: '🚨'
                }
              ].map((method, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="text-white/80 mb-6">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
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

        {/* Safety Section */}
        <section id="safety" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl p-8 border border-cerulean/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Sicherheitsstandards</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { label: 'Null Unfälle', value: '0', desc: 'in den letzten 5 Jahren' },
                      { label: 'Zertifiziert', value: '100%', desc: 'nach DIN und EU-Normen' },
                      { label: 'Versichert bis', value: '10M€', desc: 'Haftpflichtversicherung' },
                      { label: 'Erfahrung', value: '15+', desc: 'Jahre Expertise' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-black text-cerulean mb-1">{stat.value}</div>
                        <div className="text-sm font-bold text-white">{stat.label}</div>
                        <div className="text-xs text-white/60">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Sicherheit</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                  Höchste Sicherheitsstandards
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Sicherheit steht bei jedem Abbruchprojekt an erster Stelle. Unsere Experten arbeiten 
                  nach strengsten Sicherheitsprotokollen und internationalen Standards.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Vollständige Risikoanalyse vor jedem Projekt',
                    'Zertifizierte Sprengmeister und Abbruchexperten',
                    'Modernste Sicherheitsausrüstung und Schutzmaßnahmen',
                    '24/7 Überwachung während kritischer Abbruchphasen',
                    'Koordination mit Feuerwehr und Rettungsdiensten'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-white/80">
                      <svg className="w-5 h-5 mr-3 text-cerulean flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Kontakt</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                Abbruch-Projekt planen
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Kostenloses Angebot für Ihr Abbruchprojekt. Wir beraten Sie über die beste Abbruch-Methode.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">24/7 Notdienst</h3>
                    <div className="space-y-4">
                      <a href="tel:+4917480830230" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">+49 174 8083023</p>
                          <p className="text-sm text-red-400">Notfall-Hotline</p>
                        </div>
                      </a>
                      
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-red-400 font-bold mb-2">Soforteinsatz bei:</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>• Einsturzgefahr</li>
                          <li>• Brandschäden</li>
                          <li>• Unwetterschäden</li>
                          <li>• Verkehrsgefährdung</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Abbruch-Anfrage</h3>
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
                      <label className="block text-white/80 text-sm font-medium mb-2">Abbruch-Art</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
                        <option>Gebäude-Abbruch</option>
                        <option>Industrieabbruch</option>
                        <option>Notfall-Abbruch</option>
                        <option>Teilabbruch</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Projekt beschreiben</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
                        placeholder="Beschreiben Sie Ihr Abbruch-Projekt..."
                      ></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                      Sofort-Angebot anfordern
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