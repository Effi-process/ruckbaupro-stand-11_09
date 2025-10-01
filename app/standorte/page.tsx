'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function Standorte() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities = [
    {
      id: 'bielefeld',
      name: 'Bielefeld',
      region: 'Ostwestfalen-Lippe',
      services: ['Schadstoffsanierung', 'Entkernung', 'Betonarbeiten'],
      phone: '+49 174 8083023',
      address: 'Hauptstraße 12',
      zip: '33602'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-oxford-blue">
      {/* Transparent Header */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              UNSERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">STANDORTE</span>
            </h1>
            <p className="text-lg text-white/80">
              Professionelle Schadstoffsanierung in Ihrer Nähe
            </p>
          </div>
        </div>
      </section>



      {/* Cities Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city) => (
              <div
                key={city.id}
                onClick={() => setSelectedCity(selectedCity === city.id ? null : city.id)}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:transform hover:-translate-y-1"
              >
                {/* City Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {city.name}
                  </h3>
                  <p className="text-white/60">{city.region}</p>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <p className="text-sm text-white/60 mb-3">Unsere Leistungen:</p>
                  <div className="flex flex-wrap gap-2">
                    {city.services.map((service, idx) => (
                      <span key={idx} className="text-sm px-3 py-1 bg-white/10 backdrop-blur-md text-sky-400 rounded-full border border-white/20">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${selectedCity === city.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80">📍 {city.address}, {city.zip}</p>
                    <p className="text-white/80">📞 {city.phone}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/standorte/${city.id}`}
                    className="text-sky-400 font-semibold hover:text-sky-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Details ansehen →
                  </Link>
                  <span className="text-xs text-orange-400 font-semibold">
                    24/7 NOTDIENST
                  </span>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Sofort-Hilfe in Ihrer Region
            </h2>
            <p className="text-white/80 mb-8">
              Professionelle Schadstoffsanierung mit modernster Technik und fairen Preisen
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-sky-400/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              JETZT KONTAKTIEREN
            </Link>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}