'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function SEOTopicalMap() {
  const [selectedCity, setSelectedCity] = useState<string>('bielefeld');
  const [expandedTopic, setExpandedTopic] = useState<number | null>(0);

  const cities = [
    { id: 'bielefeld', name: 'Bielefeld', icon: '🏢' },
    { id: 'guetersloh', name: 'Gütersloh', icon: '🏛️' },
    { id: 'paderborn', name: 'Paderborn', icon: '⛪' },
    { id: 'osnabrueck', name: 'Osnabrück', icon: '🏰' }
  ];

  const topicalMap = [
    {
      category: "Asbestsanierung",
      icon: "shield",
      color: "from-cerulean to-blue-600",
      bgGradient: "bg-gradient-to-br from-cerulean/20 to-blue-600/20",
      description: "TRGS 519 zertifizierte Asbestentfernung",
      services: [
        "Asbestmaterialentfernung",
        "TRGS519-konform",
        "Freimessung",
        "Fachgerechte Entsorgung",
        "Asbestentfernung",
        "Oberflächenreinigung"
      ],
      seoKeywords: [
        { primary: "Asbestsanierung", secondary: ["Kosten", "Ablauf", "Dauer", "Förderung"] },
        { primary: "Asbestentsorgung", secondary: ["Container", "Preise", "Big Bags", "TRGS 519"] },
        { primary: "Asbesttest", secondary: ["Labor", "Schnelltest", "Gutachten", "Analyse"] }
      ]
    },
    {
      category: "Gebäudeabbruch",
      icon: "cube",
      color: "from-orange to-red-600",
      bgGradient: "bg-gradient-to-br from-orange/20 to-red-600/20",
      description: "Komplettabriss & selektiver Rückbau",
      services: [
        "Komplettabriss",
        "Selektiver Abbruch",
        "Entkernung",
        "Betonabbruch",
        "Industrieabbruch",
        "Innenabbruch"
      ],
      seoKeywords: [
        { primary: "Gebäudeabbruch", secondary: ["Kosten", "Genehmigung", "Ablauf", "Recycling"] },
        { primary: "Hausabriss", secondary: ["Einfamilienhaus", "Altbau", "Scheune", "Garage"] },
        { primary: "Abbruchunternehmen", secondary: ["Preise", "Referenzen", "Zertifiziert", "24h"] }
      ]
    },
    {
      category: "Schadstoffsanierung",
      icon: "warning",
      color: "from-yellow-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-yellow-500/20 to-orange-600/20",
      description: "PCB, KMF & Schimmelpilz-Sanierung",
      services: [
        "PCB-Sanierung",
        "KMF-Entfernung",
        "Schimmelpilzsanierung",
        "Gefahrstoff-Entsorgung",
        "Schadstoffsanierung",
        "Entstaubung"
      ],
      seoKeywords: [
        { primary: "PCB Sanierung", secondary: ["Fugenmassen", "Kosten", "Gesundheit", "Messung"] },
        { primary: "KMF Sanierung", secondary: ["Mineralwolle", "Glaswolle", "Steinwolle", "Entsorgung"] },
        { primary: "Schimmelsanierung", secondary: ["Kosten", "Versicherung", "Gutachten", "Ursachen"] }
      ]
    },
    {
      category: "Entkernung",
      icon: "home",
      color: "from-indigo-500 to-purple-600",
      bgGradient: "bg-gradient-to-br from-indigo-500/20 to-purple-600/20",
      description: "Teil- & Komplettentkernung",
      services: [
        "Komplettentkernung",
        "Teilentkernung",
        "Industrieentkernung",
        "Altbau-Entkernung",
        "Demontage",
        "Rückbau"
      ],
      seoKeywords: [
        { primary: "Entkernung", secondary: ["Kosten qm", "Denkmalschutz", "Altbau", "Industriegebäude"] },
        { primary: "Gebäudeentkernung", secondary: ["Ablauf", "Dauer", "Preis", "Förderung"] },
        { primary: "Rückbau", secondary: ["Innenausbau", "Haustechnik", "Sanitär", "Elektrik"] }
      ]
    },
    {
      category: "Betonarbeiten",
      icon: "bulldozer",
      color: "from-gray-600 to-slate-800",
      bgGradient: "bg-gradient-to-br from-gray-600/20 to-slate-800/20",
      description: "Betonschneiden & Kernbohrungen",
      services: [
        "Betonschneiden",
        "Kernbohrungen",
        "Wanddurchbrüche",
        "Betonsägen",
        "Betonabbruch",
        "Betonfräsen"
      ],
      seoKeywords: [
        { primary: "Betonschneiden", secondary: ["Diamantsäge", "Wandsäge", "Seilsäge", "Preise"] },
        { primary: "Kernbohrung", secondary: ["Durchmesser", "Kosten", "Statik", "Bewehrung"] },
        { primary: "Wanddurchbruch", secondary: ["Tragende Wand", "Kosten", "Statiker", "Genehmigung"] }
      ]
    }
  ];

  const getCurrentCityName = () => {
    return cities.find(c => c.id === selectedCity)?.name || 'Bielefeld';
  };

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
            <Icon name="trending-up" size={16} className="text-cerulean mr-2" />
            <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
              SEO-Optimierte Leistungen
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 bg-gradient-to-r from-white to-cerulean bg-clip-text text-transparent">
            Unsere Expertise
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Professionelle Abbruch- und Sanierungsdienstleistungen in {getCurrentCityName()} und Umgebung
          </p>
        </div>

        {/* City Selector - Beautiful Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/10 backdrop-blur-xl rounded-2xl p-1.5 border border-white/20">
            {cities.map(city => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                  ${selectedCity === city.id
                    ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white shadow-lg shadow-cerulean/30'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <span className="mr-2">{city.icon}</span>
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '25+', label: 'Jahre Erfahrung', color: 'text-cerulean' },
            { value: '500+', label: 'Projekte 2024', color: 'text-green-400' },
            { value: '100%', label: 'Zertifiziert', color: 'text-orange' },
            { value: '24/7', label: 'Notdienst', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:border-cerulean/50 transition-all">
                <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories - Beautiful Cards */}
        <div className="space-y-6">
          {topicalMap.map((topic, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-3xl transition-all duration-500
                ${expandedTopic === index ? 'shadow-2xl shadow-cerulean/20' : 'shadow-xl'}
              `}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 ${topic.bgGradient} opacity-50`}></div>

              {/* Card Content */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20">
                {/* Category Header */}
                <button
                  onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 bg-gradient-to-br ${topic.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all`}>
                      <Icon name={topic.icon} size={32} className="text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {topic.category} {getCurrentCityName()}
                      </h3>
                      <p className="text-white/70">{topic.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {topic.services.slice(0, 3).map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                            {service}
                          </span>
                        ))}
                        {topic.services.length > 3 && (
                          <span className="px-3 py-1 bg-cerulean/20 rounded-full text-xs text-cerulean">
                            +{topic.services.length - 3} weitere
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                      <div className="text-sm text-white/60">SEO Keywords</div>
                      <div className="text-2xl font-bold text-cerulean">
                        {topic.seoKeywords.length * 5}+
                      </div>
                    </div>
                    <Icon
                      name="chevron-down"
                      size={28}
                      className={`text-white/60 transition-transform duration-300 ${
                        expandedTopic === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedTopic === index && (
                  <div className="px-8 pb-8 border-t border-white/10">
                    {/* Services Grid */}
                    <div className="mt-8">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Icon name="check-circle" size={20} className="text-green-400 mr-2" />
                        Unsere Services in {getCurrentCityName()}
                      </h4>
                      <div className="grid md:grid-cols-3 gap-3">
                        {topic.services.map((service, sIndex) => (
                          <Link
                            key={sIndex}
                            href={`/standorte/${selectedCity}/${service.toLowerCase().replace(/ /g, '-')}`}
                            className="flex items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                          >
                            <Icon name="check" size={16} className="text-green-400 mr-3" />
                            <span className="text-white/90 group-hover:text-cerulean transition-colors">
                              {service}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* SEO Keywords */}
                    <div className="mt-8">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                        <Icon name="trending-up" size={20} className="text-cerulean mr-2" />
                        Top SEO Keywords für {getCurrentCityName()}
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {topic.seoKeywords.map((keyword, kIndex) => (
                          <div key={kIndex} className="bg-white/5 rounded-xl p-4">
                            <div className="font-bold text-cerulean mb-3">
                              {keyword.primary} {getCurrentCityName()}
                            </div>
                            <div className="space-y-2">
                              {keyword.secondary.map((sec, sIndex) => (
                                <div key={sIndex} className="flex items-start">
                                  <Icon name="search" size={12} className="text-white/40 mr-2 mt-0.5" />
                                  <span className="text-sm text-white/70">
                                    {keyword.primary} {sec} {getCurrentCityName()}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                          <h5 className="text-lg font-bold text-white mb-1">
                            Interesse an {topic.category} in {getCurrentCityName()}?
                          </h5>
                          <p className="text-sm text-white/70">
                            Kostenlose Beratung und transparente Preise garantiert
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            href={`/standorte/${selectedCity}/${topic.category.toLowerCase()}`}
                            className="px-6 py-3 bg-white text-oxford-blue rounded-xl font-semibold hover:bg-gray-100 transition-all"
                          >
                            Mehr erfahren
                          </Link>
                          <Link
                            href="/kontakt"
                            className="px-6 py-3 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cerulean/30 transition-all"
                          >
                            Anfrage stellen
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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