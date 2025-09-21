'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function ServiceCategoriesOverview() {
  const [selectedCity, setSelectedCity] = useState<string>('');

  const cities = [
    { name: 'Bielefeld', slug: 'bielefeld' },
    { name: 'Gütersloh', slug: 'guetersloh' },
    { name: 'Osnabrück', slug: 'osnabrueck' },
    { name: 'Paderborn', slug: 'paderborn' }
  ];

  const serviceCategories = [
    {
      title: 'Asbestsanierung',
      icon: 'shield',
      color: 'cerulean',
      services: [
        { name: 'Asbestmaterialentfernung', slug: 'asbestmaterialentfernung' },
        { name: 'TRGS519-konform', slug: 'trgs519-konform' },
        { name: 'Freimessung', slug: 'freimessung' },
        { name: 'Fachgerechte Entsorgung', slug: 'fachgerechte-entsorgung' },
        { name: 'Asbestentfernung', slug: 'asbestentfernung' },
        { name: 'Oberflächenreinigung', slug: 'oberflaechenreinigung' }
      ]
    },
    {
      title: 'Schadstoffbeseitigung',
      icon: 'warning',
      color: 'orange',
      services: [
        { name: 'PCB-Sanierung', slug: 'pcb-sanierung' },
        { name: 'KMF-Entfernung', slug: 'kmf-entfernung' },
        { name: 'Schimmelpilzsanierung', slug: 'schimmelpilzsanierung' },
        { name: 'Gefahrstoff-Entsorgung', slug: 'gefahrstoff-entsorgung' },
        { name: 'Schadstoffsanierung', slug: 'schadstoffsanierung' },
        { name: 'Entstaubung', slug: 'entstaubung' },
        { name: 'Reinigung', slug: 'reinigung' },
        { name: 'Sanierung', slug: 'sanierung' },
        { name: 'Teilsanierung', slug: 'teilsanierung' },
        { name: 'Komplettsanierung', slug: 'komplettsanierung' }
      ]
    },
    {
      title: 'Abbrucharbeiten',
      icon: 'cube',
      color: 'indigo-dye',
      services: [
        { name: 'Komplettabriss', slug: 'komplettabriss' },
        { name: 'Selektiver Abbruch', slug: 'selektiver-abbruch' },
        { name: 'Entkernung', slug: 'entkernung' },
        { name: 'Betonabbruch', slug: 'betonabbruch' },
        { name: 'Industrieabbruch', slug: 'industrieabbruch' },
        { name: 'Innenabbruch', slug: 'innenabbruch' },
        { name: 'Komplettentkernung', slug: 'komplettentkernung' },
        { name: 'Teilentkernung', slug: 'teilentkernung' },
        { name: 'Abbruch mehrstöckiger Gebäude', slug: 'abbruch-mehrstoeckiger-gebaeude' },
        { name: 'Abriss von Hochbauten', slug: 'abriss-hochbauten' },
        { name: 'Durchbrüche', slug: 'durchbrueche' },
        { name: 'Demontage', slug: 'demontage' },
        { name: 'Rückbau', slug: 'rueckbau' }
      ]
    },
    {
      title: 'Zertifizierte Entsorgung & Services',
      icon: 'check-circle',
      color: 'green',
      services: [
        { name: 'Dokumentationsverfahren', slug: 'dokumentationsverfahren' },
        { name: 'Behördengänge', slug: 'behordengaenge' },
        { name: 'Anmeldung von Schadstoffen', slug: 'anmeldung-schadstoffen' },
        { name: 'Glaswolle Entsorgung', slug: 'glaswolle-entsorgung' },
        { name: 'Einholen von Abbruchgenehmigungen', slug: 'abbruchgenehmigungen' },
        { name: 'Räumung und Rodung', slug: 'raeumung-rodung' },
        { name: 'Schrottumschlag', slug: 'schrottumschlag' },
        { name: 'Schutt-Aufräumarbeiten', slug: 'schutt-aufraeumarbeiten' },
        { name: 'Allgemeine Aufräumarbeiten', slug: 'allgemeine-aufraeumarbeiten' },
        { name: 'Vorbereitung von Landschaftsbaustellen', slug: 'vorbereitung-landschaftsbaustellen' }
      ]
    }
  ];

  const generateServiceLink = (city: string, serviceSlug: string) => {
    // Struktur für zukünftige URLs: /standorte/[stadt]/[service]
    return `/standorte/${city}/${serviceSlug}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Unsere Services in Ihrer Stadt
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Professionelle Abbruch- und Sanierungsdienstleistungen in Ihrer Region
          </p>

          {/* City Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCity('')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                selectedCity === ''
                  ? 'bg-cerulean text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Alle Städte
            </button>
            {cities.map(city => (
              <button
                key={city.slug}
                onClick={() => setSelectedCity(city.slug)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedCity === city.slug
                    ? 'bg-cerulean text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-${category.color}/20 rounded-xl mr-4`}>
                  <Icon name={category.icon} size={28} className={`text-${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Services List */}
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex}>
                    {selectedCity ? (
                      // Show link for selected city
                      <Link
                        href={generateServiceLink(selectedCity, service.slug)}
                        className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all group"
                      >
                        <div className="flex items-center">
                          <Icon name="check" size={16} className="text-green-400 mr-3" />
                          <span className="text-white group-hover:text-cerulean transition-colors">
                            {service.name}
                          </span>
                        </div>
                        <span className="text-xs text-white/50 group-hover:text-white/70">
                          {cities.find(c => c.slug === selectedCity)?.name}
                        </span>
                      </Link>
                    ) : (
                      // Show dropdown for all cities
                      <details className="group">
                        <summary className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all cursor-pointer list-none">
                          <div className="flex items-center">
                            <Icon name="check" size={16} className="text-green-400 mr-3" />
                            <span className="text-white">
                              {service.name}
                            </span>
                          </div>
                          <Icon
                            name="chevron-down"
                            size={16}
                            className="text-white/50 group-open:rotate-180 transition-transform"
                          />
                        </summary>
                        <div className="mt-2 ml-8 space-y-1">
                          {cities.map(city => (
                            <Link
                              key={city.slug}
                              href={generateServiceLink(city.slug, service.slug)}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-cerulean hover:bg-white/5 rounded transition-all"
                            >
                              → {service.name} in {city.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Text */}
        <div className="mt-12 text-center text-white/70">
          <p className="text-sm max-w-4xl mx-auto">
            RückbauPRO bietet professionelle Abbruch-, Entkernung- und Sanierungsdienstleistungen
            in Bielefeld, Gütersloh, Osnabrück und Paderborn. Unsere zertifizierten Fachkräfte
            sind spezialisiert auf Asbestsanierung nach TRGS 519, Schadstoffbeseitigung,
            komplette und selektive Abbrucharbeiten sowie fachgerechte Entsorgung.
            Wir übernehmen alle Behördengänge und Dokumentationsverfahren für Sie.
          </p>
        </div>
      </div>
    </section>
  );
}