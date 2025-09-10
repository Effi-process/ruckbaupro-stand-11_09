'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import { locations, getLocationsByRegion, searchLocations } from '../lib/locations-data';

export default function Standorte() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const regions = [
    { id: 'all', name: 'Alle Standorte', count: 650 },
    { id: 'baden-wuerttemberg', name: 'Baden-Württemberg', count: 88 },
    { id: 'bayern', name: 'Bayern', count: 125 },
    { id: 'berlin', name: 'Berlin', count: 12 },
    { id: 'brandenburg', name: 'Brandenburg', count: 18 },
    { id: 'bremen', name: 'Bremen', count: 2 },
    { id: 'hamburg', name: 'Hamburg', count: 7 },
    { id: 'hessen', name: 'Hessen', count: 42 },
    { id: 'mecklenburg-vorpommern', name: 'Mecklenburg-Vorpommern', count: 12 },
    { id: 'niedersachsen', name: 'Niedersachsen', count: 65 },
    { id: 'nordrhein-westfalen', name: 'Nordrhein-Westfalen', count: 185 },
    { id: 'rheinland-pfalz', name: 'Rheinland-Pfalz', count: 28 },
    { id: 'saarland', name: 'Saarland', count: 4 },
    { id: 'sachsen', name: 'Sachsen', count: 32 },
    { id: 'sachsen-anhalt', name: 'Sachsen-Anhalt', count: 16 },
    { id: 'schleswig-holstein', name: 'Schleswig-Holstein', count: 12 },
    { id: 'thueringen', name: 'Thüringen', count: 18 }
  ];

  // Use filtered locations based on search and region
  const filteredLocations = React.useMemo(() => {
    let result = locations;
    
    // Filter by region
    if (selectedRegion !== 'all') {
      result = getLocationsByRegion(selectedRegion);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      result = result.filter(loc => 
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.zip.includes(searchQuery)
      );
    }
    
    return result;
  }, [selectedRegion, searchQuery]);

  return (
    <main className="overflow-hidden relative">
      {/* Transparent Header */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
                RückbauPRO Standorte
              </h1>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Deutschlandweit für Sie da - professioneller Rückbau, Abbruch und Sanierung.
            </p>
            
            {/* Search Bar - moved here */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Stadt, PLZ oder Bezirk eingeben..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-300"
                />
                <Icon name="search" size={24} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/60" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                  Suchen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Region Filter - Horizontal Scroll */}
      <section className="py-8 bg-off-white border-b border-gray-200">
        <div className="container-custom">
          <div className="relative">
            {/* Scroll container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-4 px-4 min-w-max">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                      selectedRegion === region.id
                        ? 'bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {region.name}
                    <span className="ml-2 text-sm opacity-70">({region.count})</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-off-white to-transparent w-8 h-full pointer-events-none"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-off-white to-transparent w-8 h-full pointer-events-none"></div>
          </div>
          
          {/* Scroll hint */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Nach links und rechts scrollen für alle Bundesländer
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gradient-to-b from-off-white to-off-white">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {filteredLocations.length} {filteredLocations.length === 1 ? 'Standort' : 'Standorte'} gefunden
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <Link
                key={location.id}
                href={`/standorte/${location.city.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')}`}
                className="group"
              >
                <div className={`relative bg-off-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                  location.featured ? 'ring-2 ring-[#0066CC]' : ''
                }`}>
                  {location.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                      Premium Partner
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#0066CC] transition-colors">
                          {location.city}
                        </h3>
                        <p className="text-gray-600">{location.district}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Icon name="star" size={16} />
                          <span className="font-semibold">{location.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{location.reviews} Bewertungen</p>
                      </div>
                    </div>

                    {/* Quick Info */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="clock" size={16} className="text-[#0066CC]" />
                        <span className="text-gray-600">Reaktionszeit: {location.response}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="phone" size={16} className="text-[#0066CC]" />
                        <span className="text-gray-600">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon name="map-pin" size={16} className="text-[#0066CC]" />
                        <span className="text-gray-600">{location.address}, {location.zip}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.services.slice(0, 3).map((service, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-[#E8F0F7] text-[#0066CC] rounded-full">
                          {service}
                        </span>
                      ))}
                      {location.services.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                          +{location.services.length - 3} weitere
                        </span>
                      )}
                    </div>

                    {/* Coverage Area */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">Einsatzgebiet:</p>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {location.coverage.join(', ')}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[#0066CC] font-semibold group-hover:text-[#0052A3] transition-colors flex items-center gap-1">
                        Details ansehen
                        <Icon name="arrow" size={16} />
                      </span>
                      {location.emergency && (
                        <span className="text-xs text-red-600 font-semibold flex items-center gap-1">
                          <Icon name="warning" size={14} />
                          24/7 Notdienst
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-off-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Deutschlandweite Asbestsanierung mit lokalem Service
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Als Ihr neuer Partner arbeiten wir deutschlandweit mit modernster Ausrüstung und 
                fairen Preisen. Unser hochmotiviertes Team kennt die lokalen Gegebenheiten 
                und Vorschriften genau.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ihre Vorteile der regionalen Präsenz:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Icon name="check" size={20} className="text-[#0066CC] mt-1" />
                  <span>Kurze Anfahrtswege und schnelle Reaktionszeiten im Notfall</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check" size={20} className="text-[#0066CC] mt-1" />
                  <span>Kenntnis lokaler Behörden und Vorschriften</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check" size={20} className="text-[#0066CC] mt-1" />
                  <span>Persönliche Ansprechpartner in Ihrer Region</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="check" size={20} className="text-[#0066CC] mt-1" />
                  <span>Flexible Terminvereinbarung und Vor-Ort-Besichtigung</span>
                </li>
              </ul>

              <div className="mt-12 p-6 bg-[#F5F9FC] rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Schnelle Hilfe in Ihrer Nähe
                </h3>
                <p className="mb-4">
                  Egal ob in Berlin, Hamburg, Köln, München oder einer anderen Stadt - 
                  wir sind bereit für Ihren Auftrag. Mit modernster Technik und fairen Preisen 
                  sind wir Ihr neuer Partner für sichere Schadstoffsanierung.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Icon name="phone" size={20} />
                  Jetzt Standort kontaktieren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}