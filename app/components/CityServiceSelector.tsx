'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function CityServiceSelector() {
  const [selectedCity, setSelectedCity] = useState<string>('bielefeld');

  const cities = [
    {
      id: 'bielefeld',
      name: 'Bielefeld',
      icon: '🏢',
      description: 'Hauptstandort mit 24/7 Notdienst',
      stats: {
        coverage: 'Vollständige Abdeckung',
        response: '< 2 Stunden',
        projects: '150+ Projekte 2024'
      }
    },
    {
      id: 'guetersloh',
      name: 'Gütersloh',
      icon: '🏛️',
      description: 'Kreis Gütersloh komplett abgedeckt',
      stats: {
        coverage: 'Kreis Gütersloh',
        response: '< 3 Stunden',
        projects: '120+ Projekte 2024'
      }
    },
    {
      id: 'paderborn',
      name: 'Paderborn',
      icon: '⛪',
      description: 'Paderborner Land & Umgebung',
      stats: {
        coverage: 'Stadt & Kreis',
        response: '< 3 Stunden',
        projects: '100+ Projekte 2024'
      }
    },
    {
      id: 'osnabrueck',
      name: 'Osnabrück',
      icon: '🏰',
      description: 'Stadt & Landkreis Osnabrück',
      stats: {
        coverage: 'Komplette Region',
        response: '< 2 Stunden',
        projects: '130+ Projekte 2024'
      }
    }
  ];

  // City-specific service links - matching menu categories
  const cityServices: Record<string, Array<{
    title: string;
    subtitle: string;
    icon: string;
    services: Array<{ name: string; link: string }>;
  }>> = {
    bielefeld: [
      {
        title: "Asbest-Sanierung",
        subtitle: "Sichere Asbestentfernung",
        icon: "shield",
        services: []
      },
      {
        title: "Entkernung",
        subtitle: "Innenraumdemontage",
        icon: "home",
        services: [
          { name: "Gebäudeabbruch mehrstöckig", link: "/gebaeudeabbruch-bielefeld" },
          { name: "Hochbau Abriss", link: "/hochbau-abriss-bielefeld" }
        ]
      },
      {
        title: "Beratung & Planung",
        subtitle: "Professionelle Projektplanung",
        icon: "users",
        services: []
      },
      {
        title: "KMF-Sanierung",
        subtitle: "Künstliche Mineralfasern",
        icon: "warning",
        services: []
      },
      {
        title: "Schimmelsanierung",
        subtitle: "Professionelle Schimmelentfernung",
        icon: "alert-circle",
        services: []
      },
      {
        title: "Betonarbeiten",
        subtitle: "Betonschneiden und -bearbeitung",
        icon: "cube",
        services: []
      }
    ],
    guetersloh: [
      {
        title: "Asbest-Sanierung",
        subtitle: "Sichere Asbestentfernung",
        icon: "shield",
        services: []
      },
      {
        title: "Entkernung",
        subtitle: "Innenraumdemontage",
        icon: "home",
        services: []
      },
      {
        title: "Beratung & Planung",
        subtitle: "Professionelle Projektplanung",
        icon: "users",
        services: []
      },
      {
        title: "KMF-Sanierung",
        subtitle: "Künstliche Mineralfasern",
        icon: "warning",
        services: []
      },
      {
        title: "Schimmelsanierung",
        subtitle: "Professionelle Schimmelentfernung",
        icon: "alert-circle",
        services: []
      },
      {
        title: "Betonarbeiten",
        subtitle: "Betonschneiden und -bearbeitung",
        icon: "cube",
        services: []
      }
    ],
    paderborn: [
      {
        title: "Asbest-Sanierung",
        subtitle: "Sichere Asbestentfernung",
        icon: "shield",
        services: []
      },
      {
        title: "Entkernung",
        subtitle: "Innenraumdemontage",
        icon: "home",
        services: []
      },
      {
        title: "Beratung & Planung",
        subtitle: "Professionelle Projektplanung",
        icon: "users",
        services: []
      },
      {
        title: "KMF-Sanierung",
        subtitle: "Künstliche Mineralfasern",
        icon: "warning",
        services: []
      },
      {
        title: "Schimmelsanierung",
        subtitle: "Professionelle Schimmelentfernung",
        icon: "alert-circle",
        services: []
      },
      {
        title: "Betonarbeiten",
        subtitle: "Betonschneiden und -bearbeitung",
        icon: "cube",
        services: []
      }
    ],
    osnabrueck: [
      {
        title: "Asbest-Sanierung",
        subtitle: "Sichere Asbestentfernung",
        icon: "shield",
        services: []
      },
      {
        title: "Entkernung",
        subtitle: "Innenraumdemontage",
        icon: "home",
        services: []
      },
      {
        title: "Beratung & Planung",
        subtitle: "Professionelle Projektplanung",
        icon: "users",
        services: []
      },
      {
        title: "KMF-Sanierung",
        subtitle: "Künstliche Mineralfasern",
        icon: "warning",
        services: []
      },
      {
        title: "Schimmelsanierung",
        subtitle: "Professionelle Schimmelentfernung",
        icon: "alert-circle",
        services: []
      },
      {
        title: "Betonarbeiten",
        subtitle: "Betonschneiden und -bearbeitung",
        icon: "cube",
        services: []
      }
    ]
  };

  const getCurrentCity = () => cities.find(c => c.id === selectedCity);

  return (
    <section className="py-20 bg-gradient-to-b from-oxford-blue via-gray-800 to-oxford-blue relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cerulean/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-dye/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-cerulean/20 backdrop-blur-lg rounded-full mb-6">
            <Icon name="map-pin" size={16} className="text-cerulean mr-2" />
            <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
              Lokal für Sie da
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Spezifische Leistungen in{' '}
            <span className="bg-gradient-to-r from-cerulean to-indigo-dye bg-clip-text text-transparent">
              Ihrer Stadt
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Als regional verwurzeltes Unternehmen kennen wir die spezifischen Anforderungen und
            Herausforderungen in Ihrer Stadt. Unsere Teams sind vor Ort stationiert und garantieren
            schnelle Reaktionszeiten sowie persönliche Betreuung.
          </p>
        </div>

        {/* City Selector Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`
                relative group transition-all duration-300 transform
                ${selectedCity === city.id
                  ? 'scale-105'
                  : 'hover:scale-105'
                }
              `}
            >
              <div className={`
                absolute inset-0 bg-gradient-to-br rounded-2xl transition-all duration-300
                ${selectedCity === city.id
                  ? 'from-cerulean to-indigo-dye opacity-100'
                  : 'from-white/10 to-white/5 opacity-60 group-hover:opacity-100'
                }
              `}></div>

              <div className={`
                relative backdrop-blur-xl rounded-2xl p-6 border-2 transition-all duration-300
                ${selectedCity === city.id
                  ? 'border-cerulean shadow-2xl shadow-cerulean/30'
                  : 'border-white/20 hover:border-cerulean/50'
                }
              `}>
                <div className="text-4xl mb-3">{city.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                <p className="text-sm text-white/70 mb-3 line-clamp-2 overflow-hidden">{city.description}</p>

                {selectedCity === city.id && (
                  <div className="mt-4 pt-4 border-t border-white/20 space-y-2 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Abdeckung:</span>
                      <span className="text-white font-semibold">{city.stats.coverage}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Reaktion:</span>
                      <span className="text-green-400 font-semibold">{city.stats.response}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Projekte:</span>
                      <span className="text-cerulean font-semibold">{city.stats.projects}</span>
                    </div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Selected City Content */}
        <div className="animate-fadeIn">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12">
            {/* City Header - Fixed */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-10 pb-8 border-b border-white/10">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  Unsere Leistungen in {getCurrentCity()?.name}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-2xl">
                  Mit über 25 Jahren Erfahrung sind wir Ihr zuverlässiger Partner für Abbruch,
                  Rückbau und Schadstoffsanierung. Unsere zertifizierten Teams arbeiten nach
                  höchsten Sicherheits- und Qualitätsstandards.
                </p>
              </div>
              <div className="mt-6 lg:mt-0">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cerulean/30 transition-all"
                >
                  <Icon name="phone" size={20} className="mr-2" />
                  Kostenlose Beratung
                </Link>
              </div>
            </div>

            {/* Service Categories - City Specific */}
            <div className="space-y-8">
              {cityServices[selectedCity]?.map((category, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-br from-cerulean to-indigo-dye rounded-xl shadow-lg">
                      <Icon name={category.icon} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-1 line-clamp-1 overflow-hidden">{category.title}</h4>
                      <p className="text-white/60 text-sm mb-4 line-clamp-2 overflow-hidden">{category.subtitle}</p>

                      {/* Service Links - Placeholder for future links */}
                      {category.services.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {category.services.map((service, sIndex) => (
                            <Link
                              key={sIndex}
                              href={service.link}
                              className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-cerulean/50 transition-all group/item"
                            >
                              <Icon name="check-circle" size={16} className="text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-white/90 group-hover/item:text-cerulean transition-colors line-clamp-2 overflow-hidden">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 border-dashed">
                          <p className="text-white/50 text-sm text-center italic">
                            Detaillierte Service-Seiten werden in Kürze verfügbar sein
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Elements */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 rounded-full mb-4">
                    <Icon name="award" size={28} className="text-cerulean" />
                  </div>
                  <h5 className="font-bold text-white mb-2">Zertifiziert & Versichert</h5>
                  <p className="text-sm text-white/60">
                    TRGS 519 zertifiziert, vollumfänglich versichert für Ihre Sicherheit
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 rounded-full mb-4">
                    <Icon name="users" size={28} className="text-cerulean" />
                  </div>
                  <h5 className="font-bold text-white mb-2">Lokale Expertise</h5>
                  <p className="text-sm text-white/60">
                    Ortskundige Teams mit jahrelanger Erfahrung in Ihrer Region
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 rounded-full mb-4">
                    <Icon name="clock" size={28} className="text-cerulean" />
                  </div>
                  <h5 className="font-bold text-white mb-2">24/7 Notdienst</h5>
                  <p className="text-sm text-white/60">
                    Rund um die Uhr für Sie erreichbar bei Notfällen und dringenden Anfragen
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-cerulean/10 to-indigo-dye/10 rounded-2xl border border-cerulean/20">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Bereit für Ihr Projekt in {getCurrentCity()?.name}?
                </h4>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
                  Unsere Experten stehen Ihnen mit Rat und Tat zur Seite.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+491748083023"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cerulean/30 transition-all"
                  >
                    <Icon name="phone" size={20} className="mr-3" />
                    24/7 Notdienst: 0174 8083023
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    <Icon name="mail" size={20} className="mr-3" />
                    Anfrage senden
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}