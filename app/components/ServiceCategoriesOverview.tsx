'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function ServiceCategoriesOverview() {
  const [selectedCity, setSelectedCity] = useState<string>('bielefeld');

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
      title: 'Entsorgung & Services',
      icon: 'check-circle',
      color: 'green',
      services: [
        { name: 'Dokumentationsverfahren', slug: 'dokumentationsverfahren' },
        { name: 'Behördengänge', slug: 'behordengaenge' },
        { name: 'Anmeldung von Schadstoffen', slug: 'anmeldung-schadstoffen' },
        { name: 'Glaswolle Entsorgung', slug: 'glaswolle-entsorgung' },
        { name: 'Abbruchgenehmigungen', slug: 'abbruchgenehmigungen' },
        { name: 'Räumung und Rodung', slug: 'raeumung-rodung' },
        { name: 'Schrottumschlag', slug: 'schrottumschlag' },
        { name: 'Schutt-Aufräumarbeiten', slug: 'schutt-aufraeumarbeiten' },
        { name: 'Allgemeine Aufräumarbeiten', slug: 'allgemeine-aufraeumarbeiten' },
        { name: 'Landschaftsbaustellen', slug: 'vorbereitung-landschaftsbaustellen' }
      ]
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-gray-800 to-oxford-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header mit Stadt-Auswahl */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Unsere Leistungen
          </h2>

          {/* Stadt-Auswahl */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {cities.map(city => (
              <button
                key={city.slug}
                onClick={() => setSelectedCity(city.slug)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
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

        {/* Service Categories Grid - 4 Spalten nebeneinander */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20"
            >
              {/* Category Header - Kompakt */}
              <div className="flex items-start mb-2">
                <Icon name={category.icon} size={18} className={`text-${category.color} mr-1.5 mt-0.5`} />
                <h3 className="text-base font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Services List - Als Links */}
              <div className="space-y-0.5">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    href={`/standorte/${selectedCity}/${service.slug}`}
                    className="flex items-start py-1 px-1.5 bg-white/5 rounded hover:bg-white/10 transition-colors group"
                  >
                    <Icon name="check" size={10} className="text-green-400 mr-1.5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-white/85 leading-tight group-hover:text-cerulean">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Footer - Minimal */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/50">
            Zertifiziert nach TRGS 519 • Vollversichert • Deutschlandweit
          </p>
        </div>
      </div>
    </section>
  );
}