'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function SEOTopicalMap() {
  const [expandedCity, setExpandedCity] = useState<string | null>('bielefeld');

  const cities = [
    {
      id: 'bielefeld',
      name: 'Bielefeld',
      icon: '🏢',
      description: 'Hauptstandort mit 24/7 Notdienst',
      stats: { projects: '150+', response: '< 2h' }
    },
    {
      id: 'guetersloh',
      name: 'Gütersloh',
      icon: '🏛️',
      description: 'Kreis Gütersloh komplett abgedeckt',
      stats: { projects: '120+', response: '< 3h' }
    },
    {
      id: 'paderborn',
      name: 'Paderborn',
      icon: '⛪',
      description: 'Paderborner Land & Umgebung',
      stats: { projects: '100+', response: '< 3h' }
    },
    {
      id: 'osnabrueck',
      name: 'Osnabrück',
      icon: '🏰',
      description: 'Stadt & Landkreis Osnabrück',
      stats: { projects: '130+', response: '< 2h' }
    }
  ];

  const services = [
    {
      category: "Asbestsanierung",
      icon: "shield",
      color: "from-cerulean to-blue-600",
      items: [
        "Asbestmaterialentfernung",
        "TRGS519-konform",
        "Freimessung",
        "Fachgerechte Entsorgung",
        "Asbestentfernung",
        "Oberflächenreinigung",
        "Asbestdachsanierung",
        "Asbestbodensanierung",
        "Fliesenkleberentfernung"
      ]
    },
    {
      category: "Gebäudeabbruch",
      icon: "cube",
      color: "from-orange to-red-600",
      items: [
        "Komplettabriss",
        "Selektiver Abbruch",
        "Entkernung",
        "Betonabbruch",
        "Industrieabbruch",
        "Innenabbruch",
        "Teilabbruch",
        "Scheunenabbruch",
        "Garagenabbruch"
      ]
    },
    {
      category: "Schadstoffsanierung",
      icon: "warning",
      color: "from-yellow-500 to-orange-600",
      items: [
        "PCB-Sanierung",
        "KMF-Entfernung",
        "Schimmelpilzsanierung",
        "Gefahrstoff-Entsorgung",
        "Schadstoffsanierung",
        "Entstaubung",
        "PAK-Sanierung",
        "Bleisanierung",
        "Holzschutzmittelsanierung"
      ]
    },
    {
      category: "Entkernung",
      icon: "home",
      color: "from-indigo-500 to-purple-600",
      items: [
        "Komplettentkernung",
        "Teilentkernung",
        "Industrieentkernung",
        "Altbau-Entkernung",
        "Demontage",
        "Rückbau",
        "Brandschadenentkernung",
        "Wasserschadenentkernung",
        "Hotelentkernung"
      ]
    },
    {
      category: "Betonarbeiten",
      icon: "bulldozer",
      color: "from-gray-600 to-slate-800",
      items: [
        "Betonschneiden",
        "Kernbohrungen",
        "Wanddurchbrüche",
        "Betonsägen",
        "Betonabbruch",
        "Betonfräsen",
        "Fugenschneiden",
        "Seilsägen",
        "Diamantbohren"
      ]
    }
  ];


  return (
    <section className="py-20 bg-gradient-to-b from-oxford-blue via-gray-800 to-oxford-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cerulean rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-dye rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-cerulean/20 backdrop-blur-lg rounded-full mb-4">
            <Icon name="map-pin" size={16} className="text-cerulean mr-2" />
            <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
              Unsere Standorte
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 bg-gradient-to-r from-white to-cerulean bg-clip-text text-transparent">
            Leistungen nach Stadt
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Wählen Sie Ihre Stadt für detaillierte Informationen zu unseren Services
          </p>
        </div>

        {/* City Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cities.map((city) => (
            <div key={city.id} className="group">
              <button
                onClick={() => setExpandedCity(expandedCity === city.id ? null : city.id)}
                className={`
                  w-full relative overflow-hidden rounded-2xl transition-all duration-500
                  ${expandedCity === city.id
                    ? 'ring-4 ring-cerulean/50 shadow-2xl shadow-cerulean/20'
                    : 'hover:shadow-xl hover:scale-105'
                  }
                `}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"></div>

                {/* Card Content */}
                <div className="relative p-6 text-center border border-white/20">
                  <div className="text-4xl mb-3">{city.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-sm text-white/70 mb-4">{city.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                    <div>
                      <div className="text-xs text-white/60">Projekte</div>
                      <div className="text-lg font-bold text-cerulean">{city.stats.projects}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Reaktion</div>
                      <div className="text-lg font-bold text-green-400">{city.stats.response}</div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="mt-4 flex items-center justify-center">
                    <Icon
                      name={expandedCity === city.id ? "chevron-up" : "chevron-down"}
                      size={20}
                      className="text-cerulean"
                    />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Services for Selected City */}
        {expandedCity && (
          <div className="mb-16 animate-fadeIn">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Unsere Leistungen in {cities.find(c => c.id === expandedCity)?.name}
              </h3>
              <p className="text-white/70 mb-8">
                Klicken Sie auf eine Kategorie um alle verfügbaren Services zu sehen
              </p>

              {/* Service Categories */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${service.color} p-[2px]`}>
                      <div className="bg-oxford-blue/90 backdrop-blur-xl rounded-2xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 bg-gradient-to-br ${service.color} rounded-xl`}>
                              <Icon name={service.icon} size={24} className="text-white" />
                            </div>
                            <h4 className="text-2xl font-bold text-white">{service.category}</h4>
                          </div>
                          <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                            {service.items.length} Services
                          </span>
                        </div>

                        {/* Service Items Grid */}
                        <div className="grid md:grid-cols-3 gap-3">
                          {service.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={`/standorte/${expandedCity}/${item.toLowerCase().replace(/ /g, '-')}`}
                              className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group/item"
                            >
                              <Icon name="arrow-right" size={16} className="text-cerulean mr-3 group-hover/item:translate-x-1 transition-transform" />
                              <span className="text-white/90 group-hover/item:text-cerulean transition-colors">
                                {item}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA for City */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href={`/standorte/${expandedCity}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-oxford-blue rounded-xl font-bold hover:bg-gray-100 transition-all"
                >
                  <Icon name="map-pin" size={20} className="mr-3" />
                  Alle Services in {cities.find(c => c.id === expandedCity)?.name}
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-bold hover:shadow-lg hover:shadow-cerulean/30 transition-all"
                >
                  <Icon name="mail" size={20} className="mr-3" />
                  Kostenloses Angebot anfordern
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '25+', label: 'Jahre Erfahrung', icon: 'award', color: 'text-cerulean' },
            { value: '500+', label: 'Projekte 2024', icon: 'trending-up', color: 'text-green-400' },
            { value: '100%', label: 'Zertifiziert', icon: 'shield', color: 'text-orange' },
            { value: '24/7', label: 'Notdienst', icon: 'phone', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:border-cerulean/50 transition-all">
                <Icon name={stat.icon} size={24} className={`${stat.color} mb-3`} />
                <div className={`text-3xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="tel:+491748083023"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cerulean/30 transition-all"
            >
              <Icon name="phone" size={24} className="mr-3" />
              24/7 Notdienst: 0174 8083023
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Icon name="mail" size={24} className="mr-3" />
              Kostenvoranschlag anfordern
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}