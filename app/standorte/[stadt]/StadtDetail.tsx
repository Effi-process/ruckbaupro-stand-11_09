'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CityData } from '../../lib/cities-data';
import FooterWithMarquee from '../../components/FooterWithMarquee';

export default function StadtDetail({ city }: { city: CityData }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Stadtvorstellung */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-indigo-dye via-penn-blue to-oxford-blue overflow-hidden">
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

        <div className="relative container-custom py-24">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm mb-8 text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Start</Link>
              <span className="text-white/50">/</span>
              <Link href="/standorte" className="hover:text-white transition-colors">Standorte</Link>
              <span className="text-white/50">/</span>
              <span className="text-white">{city.name}</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Rückbau & Abbruch in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cerulean">{city.name}</span>
            </h1>

            {/* Stadt Beschreibung */}
            {city.slug === 'bielefeld' && (
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Bielefeld – Ostwestfalens größte Stadt am Teutoburger Wald mit über 340.000 Einwohnern. Bekannt für Sparrenburg, Universität und vielfältige Wirtschaft. Wir sind Ihr zuverlässiger Partner für professionelle Rückbau- und Abbrucharbeiten.
              </p>
            )}
            {city.slug === 'paderborn' && (
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Paderborn – Traditionsreiche Stadt mit über 153.000 Einwohnern. Heimat der Paderquellen, des Doms und des Heinz Nixdorf MuseumsForums. Wir sind Ihr zuverlässiger Partner für professionelle Rückbau- und Abbrucharbeiten.
              </p>
            )}
            {city.slug === 'osnabrueck' && (
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Osnabrück – Friedensstadt mit über 165.000 Einwohnern im südwestlichen Niedersachsen. Geprägt durch historische Altstadt und moderne Industrie. Wir sind Ihr zuverlässiger Partner für professionelle Rückbau- und Abbrucharbeiten.
              </p>
            )}
            {city.slug === 'guetersloh' && (
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Gütersloh – Dynamische Stadt mit über 100.000 Einwohnern in Ostwestfalen-Lippe. Bekannt für starke Wirtschaft, Stadtpark und Dalkeauen. Wir sind Ihr zuverlässiger Partner für professionelle Rückbau- und Abbrucharbeiten.
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${city.emergencyNumber}`}
                className="group px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cerulean/25 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>📞</span>
                  {city.emergencyNumber}
                </span>
              </a>
              <Link
                href="/kontakt"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-cerulean transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>✉️</span>
                  Kostenlose Beratung
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-16 bg-off-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Unsere Leistungen in {city.name}
            </h2>
            <p className="text-lg text-gray-600">
              Professionelle Rückbau- und Abbrucharbeiten für {city.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Abbrucharbeiten</h3>
              <p className="text-sm text-gray-600">Professioneller Gebäudeabbruch</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">🔨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entkernung</h3>
              <p className="text-sm text-gray-600">Fachgerechte Gebäudeentkernung</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-3">⚠️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Schadstoffsanierung</h3>
              <p className="text-sm text-gray-600">Sichere Schadstoffentsorgung</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Jetzt Anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="py-16 bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Kontakt für {city.name}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Rufen Sie uns an oder senden Sie eine Anfrage
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${city.emergencyNumber}`}
              className="px-10 py-4 bg-white text-[#0066CC] font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <span>📞</span>
                {city.emergencyNumber}
              </span>
            </a>

            <Link
              href="/kontakt"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-[#0066CC] transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>✉️</span>
                Anfrage senden
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}