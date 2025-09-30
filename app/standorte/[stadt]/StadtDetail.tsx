'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Image from 'next/image';
import GoogleMap from '../../components/GoogleMap';
import GoogleReviews from '../../components/GoogleReviews';
import { CityData } from '../../lib/cities-data';
import { getButtonClass, getCardClass } from '../../lib/design-system';
import FooterWithMarquee from '../../components/FooterWithMarquee';

export default function StadtDetail({ city }: { city: CityData }) {
  const [selectedBezirk, setSelectedBezirk] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Lokale Projekte für diese Stadt
  const lokaleProjekte = [
    {
      name: `Sanierung Bürokomplex ${city.serviceAreas[0]}`,
      type: 'Gewerbeobjekt',
      size: '2.800 m²',
      duration: '3 Wochen',
      material: 'Spritzasbest',
      image: '/images/projekt1.jpg'
    },
    {
      name: `Dachsanierung ${city.serviceAreas[1] || city.serviceAreas[0]}`,
      type: 'Wohngebäude',
      size: '450 m²',
      duration: '5 Tage',
      material: 'Eternitplatten',
      image: '/images/projekt2.jpg'
    },
    {
      name: `Krankenhaus ${city.name}`,
      type: 'Öffentliches Gebäude',
      size: '5.200 m²',
      duration: '6 Wochen',
      material: 'Verschiedene',
      image: '/images/projekt3.jpg'
    }
  ];

  // Team-Mitglieder für diese Stadt
  const teamMitglieder = [
    {
      name: 'Thomas Schmidt',
      role: 'Standortleiter',
      experience: 'Hochqualifiziert',
      certifications: ['TRGS 519', 'Sachkundiger §2'],
      image: '/images/team1.jpg'
    },
    {
      name: 'Michael Weber',
      role: 'Projektleiter',
      experience: 'Hochqualifiziert',
      certifications: ['TRGS 519', 'SCC**'],
      image: '/images/team2.jpg'
    },
    {
      name: 'Stefan Müller',
      role: 'Bauleiter',
      experience: 'Hochqualifiziert',
      certifications: ['TRGS 519', 'ISO 14001'],
      image: '/images/team3.jpg'
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section mit Stadtbild */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-indigo-dye via-penn-blue to-oxford-blue overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cerulean/20 via-transparent to-indigo-dye/20" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(18, 130, 162, 0.15) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="relative container-custom py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-8 text-white/70">
                <Link href="/" className="hover:text-white transition-colors">Start</Link>
                <Icon name="chevron-right" size={16} />
                <Link href="/standorte" className="hover:text-white transition-colors">Standorte</Link>
                <Icon name="chevron-right" size={16} />
                <span className="text-white">{city.name}</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">24/7 Notdienst verfügbar</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                Asbestsanierung <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cerulean">{city.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-off-white/80 mb-8">
                Ihr neuer, zertifizierter Partner für sichere Schadstoffsanierung in {city.name}, {city.state}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <p className="text-3xl font-bold text-white">{Math.floor(city.population / 1000)}k</p>
                  <p className="text-sm text-off-white/70">Einwohner</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <p className="text-3xl font-bold text-white">{city.serviceAreas.length}</p>
                  <p className="text-sm text-off-white/70">Stadtteile</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <p className="text-3xl font-bold text-white">Neu</p>
                  <p className="text-sm text-off-white/70">Partner</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-off-white/70">Service</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${city.emergencyNumber}`}
                  className="group px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cerulean/25 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="phone" size={20} />
                    Notfall-Hotline {city.name}
                  </span>
                </a>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-cerulean transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="mail" size={20} />
                    Kostenlose Beratung
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              {/* Stadt-spezifische Illustration oder Karte */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Schnell vor Ort in:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {city.serviceAreas.slice(0, 8).map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/80">
                        <Icon name="map-pin" size={16} className="text-primary-400" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                  {city.serviceAreas.length > 8 && (
                    <p className="text-sm text-off-white/60 mt-3">
                      + {city.serviceAreas.length - 8} weitere Stadtteile
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einsatzgebiet Section */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Einsatzgebiet</span>
            <h2 className="text-4xl md:text-5xl font-black text-oxford-blue mt-4 mb-6">
              Überall in {city.name} für Sie da
            </h2>
            <p className="text-xl text-indigo-dye max-w-3xl mx-auto">
              Mit moderner Ausrüstung und fairen Preisen - Ihr neuer Partner in {city.name}
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {city.serviceAreas.map((area, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBezirk(area)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedBezirk === area
                    ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white border-transparent'
                    : 'bg-off-white border-secondary-200 hover:border-cerulean text-penn-blue'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{area}</span>
                  <Icon name="arrow" size={16} />
                </div>
              </button>
            ))}
          </div>

          {/* PLZ Bereiche */}
          <div className="bg-[#F5F9FC] rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Postleitzahlen im Einsatzgebiet {city.name}:</h3>
            <div className="flex flex-wrap gap-3">
              {city.postalCodes.map((plz, idx) => (
                <span key={idx} className="px-4 py-2 bg-off-white rounded-lg text-gray-700 font-medium shadow-sm">
                  {plz}
                </span>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Besondere Merkmale von {city.name}:</h4>
              <div className="flex flex-wrap gap-3">
                {city.localFeatures.map((feature, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[#E8F0F7] rounded-lg text-[#0066CC] font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokale Projekte */}
      <section className="py-20 bg-gradient-to-b from-off-white to-off-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Referenzen</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Erfolgreich saniert in {city.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Asbestsanierung mit höchsten Sicherheitsstandards - hier eine kleine Auswahl unserer Projekte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {lokaleProjekte.map((projekt, idx) => (
              <div key={idx} className="bg-off-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#E8F0F7] to-[#D4E2ED] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="building" size={48} className="text-[#0066CC]/20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{projekt.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Icon name="layers" size={16} className="text-[#0066CC]" />
                      <span>{projekt.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ruler" size={16} className="text-[#0066CC]" />
                      <span>{projekt.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="clock" size={16} className="text-[#0066CC]" />
                      <span>{projekt.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="warning" size={16} className="text-[#0066CC]" />
                      <span>{projekt.material}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Alle Referenzen ansehen
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Unser Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Ihre Experten in {city.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TRGS 519 zertifizierte Fachkräfte mit langjähriger Erfahrung für Ihre Sicherheit
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamMitglieder.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-[#E8F0F7] to-[#D4E2ED] rounded-full flex items-center justify-center">
                  <Icon name="user" size={64} className="text-[#0066CC]/50" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#0066CC] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.experience} Erfahrung</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.certifications.map((cert, certIdx) => (
                    <span key={certIdx} className="text-xs px-3 py-1 bg-[#E8F0F7] text-[#0066CC] rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Leistungen in [Stadt] - SEO Service Links */}
      <section className="py-20 bg-gradient-to-b from-off-white to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Unsere Leistungen</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Alle Services in {city.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von Asbestentfernung bis Entkernung - Ihr zertifizierter Partner für alle Rückbau-Leistungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Asbestsanierung Services */}
            <Link href={`/asbestentfernung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="shield" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Asbestentfernung</h3>
              <p className="text-gray-600 text-sm">TRGS 519 zertifizierte Asbestsanierung in {city.name}</p>
            </Link>

            <Link href={`/entkernung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="home" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Entkernung</h3>
              <p className="text-gray-600 text-sm">Professionelle Gebäudeentkernung in {city.name}</p>
            </Link>

            <Link href={`/rueckbau-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="building" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Rückbau</h3>
              <p className="text-gray-600 text-sm">Fachgerechter Rückbau in {city.name}</p>
            </Link>

            <Link href={`/schadstoffsanierung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="warning" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Schadstoffsanierung</h3>
              <p className="text-gray-600 text-sm">Sichere Schadstoffentsorgung in {city.name}</p>
            </Link>

            <Link href={`/sanierung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="tool" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Gebäudesanierung</h3>
              <p className="text-gray-600 text-sm">Komplettsanierung in {city.name}</p>
            </Link>

            <Link href={`/gebaeudeabbruch-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="hammer" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Gebäudeabbruch</h3>
              <p className="text-gray-600 text-sm">Professioneller Abbruch in {city.name}</p>
            </Link>

            <Link href={`/kmf-entfernung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="layers" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">KMF-Entfernung</h3>
              <p className="text-gray-600 text-sm">Künstliche Mineralfaser Sanierung in {city.name}</p>
            </Link>

            <Link href={`/glaswolle-entsorgung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="package" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Glaswolle Entsorgung</h3>
              <p className="text-gray-600 text-sm">TRGS 521 konforme KMF-Entsorgung in {city.name}</p>
            </Link>

            <Link href={`/schadstoffanmeldung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="file" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Schadstoffanmeldung</h3>
              <p className="text-gray-600 text-sm">Behördliche Anmeldung in {city.name}</p>
            </Link>

            <Link href={`/dokumentationsverfahren-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="document" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Dokumentationsverfahren</h3>
              <p className="text-gray-600 text-sm">Vollständige Projektdokumentation in {city.name}</p>
            </Link>

            <Link href={`/behoerdengaenge-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="briefcase" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Behördengänge</h3>
              <p className="text-gray-600 text-sm">Komplette behördliche Abwicklung in {city.name}</p>
            </Link>

            <Link href={`/fachgerechte-entsorgung-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="trash" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Fachgerechte Entsorgung</h3>
              <p className="text-gray-600 text-sm">Professionelle Entsorgung in {city.name}</p>
            </Link>

            <Link href={`/durchbrueche-${city.slug}`} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0066CC]">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name="tool" size={28} color="white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0066CC]">Durchbrüche</h3>
              <p className="text-gray-600 text-sm">Präzise Wanddurchbrüche in {city.name}</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Alle Leistungen im Überblick
              <Icon name="arrow" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Standort</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Standort {city.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Besuchen Sie uns vor Ort oder nutzen Sie unseren mobilen Service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Map Container */}
            <div className="relative">
              <GoogleMap
                address={`Hauptstraße 1, ${city.postalCodes[0]} ${city.name}`}
                city={city.name}
                plz={city.postalCodes[0]}
                lat={city.coordinates.lat}
                lng={city.coordinates.lng}
                height="500px"
              />
            </div>

            {/* Contact & Opening Hours */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-[#F5F9FC] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Schnellkontakt {city.name}</h3>
                
                <div className="space-y-4">
                  <a href={`tel:${city.emergencyNumber}`} className="flex items-center gap-4 p-4 bg-off-white rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center">
                      <Icon name="phone" size={24} color="white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">24/7 Notfall-Hotline</p>
                      <p className="text-lg font-bold text-gray-900">{city.emergencyNumber}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 bg-off-white rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center">
                      <Icon name="mail" size={24} color="white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">E-Mail</p>
                      <p className="text-lg font-bold text-gray-900">info.{city.slug}@asbestsanierung.de</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-off-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Öffnungszeiten</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Montag - Freitag</span>
                    <span className="font-bold text-gray-900">00:00 - 24:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Samstag</span>
                    <span className="font-bold text-gray-900">00:00 - 24:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Sonntag</span>
                    <span className="font-bold text-gray-900">00:00 - 24:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Feiertage</span>
                    <span className="font-bold text-gray-900">00:00 - 24:00 Uhr</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-green-800 font-semibold">24/7 Notdienst verfügbar</p>
                  </div>
                </div>
              </div>

              {/* Transport Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="train" size={20} className="text-[#0066CC]" />
                  Anfahrt & Parken
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Icon name="check" size={16} className="text-[#0066CC] mt-0.5" />
                    <span>Kostenlose Parkplätze direkt vor Ort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" size={16} className="text-[#0066CC] mt-0.5" />
                    <span>Barrierefrei zugänglich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" size={16} className="text-[#0066CC] mt-0.5" />
                    <span>
                      Öffentliche Verkehrsmittel gut erreichbar
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews 
        stadtKey={city.slug} 
        stadtName={city.name}
        averageRating={4.9}
        totalReviews={200}
      />

      {/* FAQ Section für lokale SEO */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Häufige Fragen</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
                Asbestsanierung in {city.name} - FAQ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F5F9FC] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wie schnell können Sie in {city.name} vor Ort sein?
                </h3>
                <p className="text-gray-600">
                  Unser Team erreicht Sie in {city.name} im Notfall innerhalb von 2 Stunden. Da wir nur {city.distanceFromBielefeld}km von unserem Hauptsitz entfernt sind, garantieren wir schnelle Reaktionszeiten.
                </p>
              </div>

              <div className="bg-[#F5F9FC] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Welche Stadtteile in {city.name} bedienen Sie?
                </h3>
                <p className="text-gray-600">
                  Wir sind in allen Stadtteilen von {city.name} aktiv, einschließlich {city.serviceAreas.slice(0, 5).join(', ')} 
                  und vielen weiteren. Auch die umliegenden Gemeinden gehören zu unserem Einzugsgebiet.
                </p>
              </div>

              <div className="bg-[#F5F9FC] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Was kostet eine Asbestsanierung in {city.name}?
                </h3>
                <p className="text-gray-600">
                  Die Kosten hängen von verschiedenen Faktoren ab. In {city.name} beginnen unsere Preise bei 35€/m² 
                  für einfache Dachsanierungen. Gerne erstellen wir Ihnen ein kostenloses, unverbindliches Angebot 
                  nach einer Vor-Ort-Besichtigung.
                </p>
              </div>

              <div className="bg-[#F5F9FC] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Haben Sie Referenzen in {city.name}?
                </h3>
                <p className="text-gray-600">
                  Ja, wir haben bereits zahlreiche Projekte in {city.name} erfolgreich durchgeführt. 
                  Gerne zeigen wir Ihnen Referenzobjekte in Ihrer Nähe und bringen Sie mit zufriedenen Kunden in Kontakt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-float animation-delay-300" />
        </div>
        
        <div className="relative container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Jetzt Kontakt aufnehmen in {city.name}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Kostenlose Erstberatung und Vor-Ort-Termin innerhalb von 24 Stunden
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${city.emergencyNumber}`}
              className="group px-10 py-5 bg-white text-[#0066CC] font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <Icon name="phone" size={24} />
                {city.emergencyNumber}
              </span>
            </a>
            
            <Link
              href="/kontakt"
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-[#0066CC] transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Icon name="mail" size={20} />
                Online-Anfrage für {city.name}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Note: Schema.org markup is handled in the parent page component */}
      
      <FooterWithMarquee />
    </main>
  );
}