'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CityData {
  name: string;
  population: string;
  description: string;
  services: {
    title: string;
    link: string;
    description: string;
  }[];
}

const cities: CityData[] = [
  {
    name: 'BIELEFELD',
    population: '340.000',
    description: `Als größte Stadt in Ostwestfalen-Lippe ist Bielefeld das wirtschaftliche Herz der Region. Mit über 340.000 Einwohnern und einer vielfältigen Industrielandschaft bietet die Stadt am Teutoburger Wald optimale Voraussetzungen für professionelle Abbruch- und Sanierungsarbeiten. Unsere langjährige Erfahrung in Bielefeld erstreckt sich von der historischen Sparrenburg über die modernen Universitätsgebäude bis hin zu den zahlreichen Industrieanlagen. Wir kennen die lokalen Gegebenheiten, Vorschriften und Besonderheiten der Stadt. Ob im Stadtzentrum am Jahnplatz, in den Wohngebieten von Schildesche oder den Gewerbegebieten in Brackwede - unser Team ist innerhalb kürzester Zeit vor Ort und garantiert eine fachgerechte, termingerechte Ausführung aller Arbeiten unter Berücksichtigung der städtischen Auflagen und Umweltstandards.`,
  },
  {
    name: 'GÜTERSLOH',
    population: '100.000',
    description: `Gütersloh, die Stadt der kurzen Wege und Heimat weltbekannter Unternehmen wie Miele und Bertelsmann, stellt besondere Anforderungen an Abbruch- und Sanierungsunternehmen. Mit rund 100.000 Einwohnern vereint die Stadt traditionelle Wohnviertel mit modernen Industriebauten. Unsere Expertise in Gütersloh umfasst sowohl die sensible Sanierung historischer Fachwerkhäuser in der Altstadt als auch den professionellen Rückbau industrieller Anlagen. Die enge Bebauung im Stadtkern, die Nähe zur Dalke und die hohen Qualitätsansprüche der ansässigen Unternehmen erfordern präzise Planung und saubere Ausführung. Von Avenwedde bis Spexard, von Isselhorst bis Friedrichsdorf - wir sind mit den örtlichen Gegebenheiten bestens vertraut und arbeiten eng mit den städtischen Behörden zusammen, um Ihre Projekte reibungslos und effizient umzusetzen.`,
  },
  {
    name: 'PADERBORN',
    population: '150.000',
    description: `Paderborn, die über 1200 Jahre alte Dom- und Universitätsstadt, verbindet historisches Erbe mit moderner Dynamik. Mit etwa 150.000 Einwohnern und als Oberzentrum für das östliche Westfalen stellt die Stadt besondere Herausforderungen an Abbruch- und Sanierungsexperten. Die Nähe zu denkmalgeschützten Gebäuden rund um Dom und Abdinghof, die besonderen geologischen Verhältnisse mit den Paderquellen und die moderne Universitätsarchitektur erfordern spezialisiertes Know-how. Unsere Arbeit in Paderborn zeichnet sich durch respektvollen Umgang mit der historischen Bausubstanz und modernste Techniken bei Neubauprojekten aus. Vom Riemekeviertel über Schloß Neuhaus bis zum Technologiepark - wir kennen jeden Stadtteil und seine Besonderheiten. Die enge Zusammenarbeit mit dem Denkmalschutz und den städtischen Ämtern garantiert eine vorschriftsmäßige und kulturell sensible Projektabwicklung.`,
  },
  {
    name: 'OSNABRÜCK',
    population: '165.000',
    description: `Osnabrück, die Friedensstadt und drittgrößte Stadt Niedersachsens, mit ihren 165.000 Einwohnern steht für Nachhaltigkeit und Umweltbewusstsein. Als Standort zwischen Teutoburger Wald und Wiehengebirge hat die Stadt eine besondere Verantwortung für den Umweltschutz entwickelt. Diese Philosophie prägt auch unsere Arbeit in Osnabrück. Von der historischen Altstadt mit ihrem mittelalterlichen Marktplatz über die grünen Wohnviertel bis zu den modernen Gewerbegebieten - wir setzen auf umweltschonende Verfahren und nachhaltige Entsorgungskonzepte. Die Hase-Auen, der Schlossgarten und die zahlreichen Grünflächen der Stadt erfordern besondere Rücksichtnahme bei allen Baumaßnahmen. Unser Team in Osnabrück ist spezialisiert auf lärmarme Abbruchverfahren, staubminimierende Techniken und die fachgerechte Trennung von Wertstoffen. Die enge Abstimmung mit dem Umweltamt und die Einhaltung aller Naturschutzauflagen sind für uns selbstverständlich.`,
  },
];

const services = [
  {
    title: 'Asbest-Sanierung',
    link: '/leistungen/asbestsanierung',
    description: 'Professionelle Asbestentfernung nach TRGS 519',
  },
  {
    title: 'Entkernung',
    link: '/leistungen/entkernung',
    description: 'Komplette oder teilweise Gebäudeentkernung',
  },
  {
    title: 'Beratung & Planung',
    link: '/leistungen/beratung---planung',
    description: 'Umfassende Projektberatung und Genehmigungsmanagement',
  },
  {
    title: 'KMF-Sanierung',
    link: '/leistungen/kmf-sanierung',
    description: 'Fachgerechte Entsorgung künstlicher Mineralfasern',
  },
  {
    title: 'Schimmelsanierung',
    link: '/leistungen/schimmelsanierung',
    description: 'Nachhaltige Schimmelbeseitigung und Prävention',
  },
  {
    title: 'Betonarbeiten',
    link: '/leistungen/betonarbeiten',
    description: 'Präzise Betonschnitt- und Bohrarbeiten',
  },
];

export default function CityServicesSection() {
  const [activeCity, setActiveCity] = useState(0);

  // Add services to each city
  const citiesWithServices = cities.map(city => ({
    ...city,
    services: services,
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professionelle Abbrucharbeiten in Ihrer Region
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Zertifizierte Fachkompetenz für Abbruch, Entkernung und Schadstoffsanierung
            in Ostwestfalen-Lippe und Niedersachsen
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {citiesWithServices.map((city, index) => (
            <button
              key={city.name}
              onClick={() => setActiveCity(index)}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeCity === index
                  ? 'bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 shadow-xl'
                  : 'bg-white/5 backdrop-blur text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">{city.name}</span>
                <span className="text-xs opacity-70 mt-1">{city.population} Einwohner</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active City Content */}
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded-3xl blur-3xl opacity-50"></div>

          <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 md:p-12">
            {/* City Header */}
            <div className="mb-8 pb-8 border-b border-gray-700">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {citiesWithServices[activeCity].name}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {citiesWithServices[activeCity].description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-6">
                Unsere Leistungen in {citiesWithServices[activeCity].name}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {citiesWithServices[activeCity].services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.link}
                    className="group relative overflow-hidden"
                  >
                    <div className="bg-gray-700/30 backdrop-blur border border-gray-600/50 rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:border-gray-500">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>

                      <h5 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h5>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center mt-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-semibold">Mehr erfahren</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}