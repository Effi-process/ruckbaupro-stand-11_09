'use client';

import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../../components/FooterWithMarquee';
import StickyServiceMenu from '../../components/StickyServiceMenu';
import FloatingMenuButton from '../../components/FloatingMenuButton';

export default function EntsorgungPage() {
  return (
    <main className="overflow-hidden">
      {/* Floating Menu Button - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <FloatingMenuButton />
      </div>
      
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
          <source src="/videos/entsorgung-professional.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        <div className="relative z-20 h-full flex items-end pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
                <div>Umweltgerechte</div>
                <div>Entsorgung.</div>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
                Fachgerechte Entsorgung und Recycling von Bau- und Abbruchmaterialien. Nachhaltig und gesetzeskonform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-lg transition-all duration-300"
                >
                  Kostenlose Beratung
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent"></div>
                </Link>
                <Link
                  href="tel:+4917480830230"
                  className="inline-flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Container bestellen
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Entsorgung Expertise</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                  Nachhaltigkeit durch Recycling
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Wir sorgen dafür, dass Ihre Bau- und Abbruchmaterialien umweltgerecht entsorgt 
                  und größtmöglich recycelt werden. Für eine nachhaltige Zukunft.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: '95%', label: 'Recyclingquote' },
                    { number: '24h', label: 'Container-Lieferung' },
                    { number: '100%', label: 'Gesetzeskonform' },
                    { number: '15+', label: 'Materialarten' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">{stat.number}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/entsorgung-recycling.png"
                  alt="Umweltgerechte Entsorgung"
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

        {/* Material Types */}
        <section id="materials" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Materialien & Entsorgung
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Professionelle Entsorgung aller Baumaterialien mit maximaler Wiederverwertung
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Bauschutt',
                  materials: ['Beton', 'Ziegel', 'Naturstein', 'Fliesen'],
                  recycling: '98%',
                  color: 'from-gray-500 to-gray-600',
                  icon: '🏗️'
                },
                {
                  title: 'Metalle',
                  materials: ['Stahl', 'Aluminium', 'Kupfer', 'Edelstahl'],
                  recycling: '100%',
                  color: 'from-yellow-500 to-yellow-600',
                  icon: '🔩'
                },
                {
                  title: 'Holz',
                  materials: ['Konstruktionsholz', 'Furniere', 'Spanplatten', 'OSB'],
                  recycling: '95%',
                  color: 'from-amber-600 to-amber-700',
                  icon: '🌳'
                },
                {
                  title: 'Dämmstoffe',
                  materials: ['Mineralwolle', 'Styropor', 'PU-Schaum', 'Naturdämmstoffe'],
                  recycling: '85%',
                  color: 'from-blue-500 to-blue-600',
                  icon: '🏠'
                },
                {
                  title: 'Glas',
                  materials: ['Fensterglas', 'Isolierglas', 'Sicherheitsglas', 'Glasbaustein'],
                  recycling: '99%',
                  color: 'from-teal-500 to-teal-600',
                  icon: '🪟'
                },
                {
                  title: 'Kunststoffe',
                  materials: ['PVC-Rohre', 'PE-Folien', 'Kabelschutz', 'Isoliermaterial'],
                  recycling: '75%',
                  color: 'from-purple-500 to-purple-600',
                  icon: '♻️'
                },
                {
                  title: 'Schadstoffe',
                  materials: ['Asbest', 'KMF', 'PAK', 'PCB'],
                  recycling: '0%',
                  color: 'from-red-500 to-red-600',
                  icon: '⚠️'
                },
                {
                  title: 'Gemischte Abfälle',
                  materials: ['Büromöbel', 'Sanitär', 'Türen', 'Diverses'],
                  recycling: '80%',
                  color: 'from-indigo-500 to-indigo-600',
                  icon: '📦'
                }
              ].map((material, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{material.icon}</span>
                    <div className={`px-3 py-1 bg-gradient-to-r ${material.color} text-white text-xs font-bold rounded-full`}>
                      {material.recycling} Recycling
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{material.title}</h3>
                  <ul className="space-y-1">
                    {material.materials.map((item, idx) => (
                      <li key={idx} className="text-white/70 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Container Services */}
        <section id="container" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Container-Service
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Passende Container für jeden Bedarf - schnell geliefert und fachgerecht entsorgt
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  size: '5 m³',
                  dimensions: '3,5 × 1,5 × 1,0 m',
                  suitable: ['Kleinere Renovierungen', 'Gartenabfälle', 'Haushaltsauflösungen'],
                  price: 'ab 149€',
                  popular: false
                },
                {
                  size: '10 m³',
                  dimensions: '4,0 × 1,8 × 1,4 m',
                  suitable: ['Badezimmer-Sanierung', 'Dachausbau', 'Kleinere Abbrüche'],
                  price: 'ab 199€',
                  popular: true
                },
                {
                  size: '20 m³',
                  dimensions: '5,5 × 2,3 × 1,6 m',
                  suitable: ['Komplett-Sanierung', 'Entkernung', 'Größere Abbrüche'],
                  price: 'ab 299€',
                  popular: false
                }
              ].map((container, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  container.popular ? 'border-cerulean bg-cerulean/10' : 'border-white/20 hover:bg-white/10'
                }`}>
                  {container.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cerulean to-indigo-dye px-4 py-2 rounded-full text-white text-sm font-bold">
                      Beliebteste Größe
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-black text-white mb-2">{container.size}</h3>
                    <p className="text-white/70 text-sm">{container.dimensions}</p>
                    <div className={`text-2xl font-bold mt-4 ${container.popular ? 'text-cerulean' : 'text-white'}`}>
                      {container.price}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-bold text-white text-sm">Geeignet für:</h4>
                    {container.suitable.map((item, idx) => (
                      <div key={idx} className="flex items-center text-white/70 text-sm">
                        <svg className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    container.popular 
                      ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white hover:shadow-lg'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  }`}>
                    Container bestellen
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/80 mb-4">Individuelle Größen und Sondercontainer auf Anfrage verfügbar</p>
              <Link
                href="tel:+4917480830230"
                className="inline-flex items-center gap-2 text-cerulean hover:text-white transition-colors font-bold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 174 8083023 - Beratung & Bestellung
              </Link>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Unser Entsorgung-Prozess
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Von der Bestellung bis zur Verwertung - transparent und umweltgerecht
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Beratung & Bestellung', desc: 'Kostenlose Beratung und schnelle Container-Bereitstellung', icon: '📞' },
                { step: '02', title: 'Lieferung & Befüllung', desc: 'Pünktliche Lieferung und fachgerechte Befüllung vor Ort', icon: '🚛' },
                { step: '03', title: 'Abholung & Sortierung', desc: 'Termingerechte Abholung und professionelle Sortierung', icon: '🔄' },
                { step: '04', title: 'Recycling & Entsorgung', desc: 'Maximales Recycling und umweltgerechte Entsorgung', icon: '♻️' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="text-lg font-bold text-green-400 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section id="sustainability" className="py-24 px-4 border-t border-white/10">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">Umwelt-Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: 'CO2 eingespart', value: '2.4t', desc: 'pro Container durch Recycling' },
                      { label: 'Recycling-Quote', value: '95%', desc: 'aller Baumaterialien' },
                      { label: 'Aufbereitungsanlagen', value: '50+', desc: 'zertifizierte Partner' },
                      { label: 'Wiederverwertung', value: '85%', desc: 'zu neuen Bauprodukten' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-black text-green-400 mb-1">{stat.value}</div>
                        <div className="text-sm font-bold text-white">{stat.label}</div>
                        <div className="text-xs text-white/60">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Nachhaltigkeit</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                  Kreislaufwirtschaft leben
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Wir sehen Abfall als wertvollen Rohstoff. Durch konsequentes Recycling und 
                  Wiederverwertung schonen wir Ressourcen und schützen die Umwelt.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Digitale Dokumentation aller Entsorgungswege',
                    'Partnerschaften mit zertifizierten Recyclingbetrieben',
                    'Qualitätskontrolle bei allen Verwertungsprozessen',
                    'Transparente Nachweise über Verbleib der Materialien'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-white/80">
                      <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
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
                Container bestellen
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Schnelle Lieferung, faire Preise und umweltgerechte Entsorgung - alles aus einer Hand.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">24h Container-Service</h3>
                    <div className="space-y-4">
                      <a href="tel:+4917480830230" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">+49 174 8083023</p>
                          <p className="text-sm text-green-400">Bestellung & Beratung</p>
                        </div>
                      </a>
                    </div>
                    
                    <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-400 font-bold mb-2">Express-Service:</h4>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li>• Container innerhalb 24h</li>
                        <li>• Wochenend-Lieferung möglich</li>
                        <li>• Flexible Abholtermine</li>
                        <li>• Kostenlose Beratung</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-6">Container-Anfrage</h3>
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
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Container-Größe</label>
                        <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
                          <option>5 m³</option>
                          <option>10 m³</option>
                          <option>20 m³</option>
                          <option>Sondergröße</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Material</label>
                        <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
                          <option>Bauschutt</option>
                          <option>Holz</option>
                          <option>Metall</option>
                          <option>Gemischt</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Lieferadresse</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50"
                        placeholder="Straße, PLZ Ort"
                      />
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300">
                      Container bestellen
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