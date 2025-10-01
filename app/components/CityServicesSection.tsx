'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollAnimation, StaggerChildren } from '../components/ScrollAnimations';

interface CityData {
  name: string;
  population: string;
  description: string;
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

const servicesData = {
  BIELEFELD: [
    {
      title: 'Asbest-Sanierung',
      description: 'Professionelle Asbestentfernung nach TRGS 519',
      seoPages: [
        { name: 'TRGS 519 Fachbetrieb Bielefeld', link: '/trgs-519-bielefeld' },
        { name: 'Asbestentfernung Bielefeld', link: '/asbestentfernung-bielefeld' },
        { name: 'Asbestmaterialentfernung Bielefeld', link: '/asbestmaterialentfernung-bielefeld' },
        { name: 'Freimessung Bielefeld', link: '/freimessung-bielefeld' },
        { name: 'Schadstoffanmeldung Bielefeld', link: '/schadstoffanmeldung-bielefeld' }
      ]
    },
    {
      title: 'Entkernung',
      description: 'Komplette oder teilweise Gebäudeentkernung',
      seoPages: [
        { name: 'Rückbau Bielefeld', link: '/rueckbau-bielefeld' },
        { name: 'Entkernung Bielefeld', link: '/entkernung-bielefeld' },
        { name: 'Komplettentkernung Bielefeld', link: '/komplettentkernung-bielefeld' },
        { name: 'Teilentkernung Bielefeld', link: '/teilentkernung-bielefeld' },
        { name: 'Teilsanierung Bielefeld', link: '/teilsanierung-bielefeld' },
        { name: 'Hochbau-Abriss Bielefeld', link: '/hochbau-abriss-bielefeld' },
        { name: 'Gebäudeabbruch Bielefeld', link: '/gebaeudeabbruch-bielefeld' },
        { name: 'Aufräumarbeiten Bielefeld', link: '/aufraeumarbeiten-bielefeld' },
        { name: 'Industrieabbruch Bielefeld', link: '/industrieabbruch-bielefeld' },
        { name: 'Innenabbruch Bielefeld', link: '/innenabbruch-bielefeld' },
        { name: 'Komplettabriss Bielefeld', link: '/komplettabriss-bielefeld' },
        { name: 'Räumung & Rodung Bielefeld', link: '/raeumung-rodung-bielefeld' },
        { name: 'Schrottumschlag Bielefeld', link: '/schrottumschlag-bielefeld' },
        { name: 'Schutt-Aufräumarbeiten Bielefeld', link: '/schutt-aufraeumarbeiten-bielefeld' },
        { name: 'Selektiver Abbruch Bielefeld', link: '/selektiver-abbruch-bielefeld' },
        { name: 'Landschaftsbaustellen Vorbereitung', link: '/landschaftsbau-vorbereitung-bielefeld' },
        { name: 'Demontage Bielefeld', link: '/demontage-bielefeld' }
      ]
    },
    {
      title: 'Beratung & Planung',
      description: 'Umfassende Projektberatung und Genehmigungsmanagement',
      seoPages: [
        { name: 'Abbruchgenehmigung Bielefeld', link: '/abbruchgenehmigung-bielefeld' },
        { name: 'Behördengänge Bielefeld', link: '/behoerdengaenge-bielefeld' },
        { name: 'Dokumentationsverfahren Bielefeld', link: '/dokumentationsverfahren-bielefeld' }
      ]
    },
    {
      title: 'KMF-Sanierung',
      description: 'Fachgerechte Entsorgung künstlicher Mineralfasern',
      seoPages: [
        { name: 'Fachgerechte Entsorgung Bielefeld', link: '/fachgerechte-entsorgung-bielefeld' },
        { name: 'KMF-Entfernung Bielefeld', link: '/kmf-entfernung-bielefeld' },
        { name: 'Glaswolle Entsorgung Bielefeld', link: '/glaswolle-entsorgung-bielefeld' }
      ]
    },
    {
      title: 'Schimmelsanierung',
      description: 'Nachhaltige Schimmelbeseitigung und Prävention',
      seoPages: [
        { name: 'Sanierung Bielefeld', link: '/sanierung-bielefeld' },
        { name: 'Komplettsanierung Bielefeld', link: '/komplettsanierung-bielefeld' },
        { name: 'Schimmelpilzsanierung Bielefeld', link: '/schimmelpilzsanierung-bielefeld' },
        { name: 'Oberflächenreinigung Bielefeld', link: '/oberflaechenreinigung-bielefeld' },
        { name: 'Schadstoffsanierung Bielefeld', link: '/schadstoffsanierung-bielefeld' },
        { name: 'Gefahrenstoff Entsorgung Bielefeld', link: '/gefahrenstoff-entsorgung-bielefeld' },
        { name: 'PCB-Sanierung Bielefeld', link: '/pcb-sanierung-bielefeld' },
        { name: 'Entstaubung Bielefeld', link: '/entstaubung-bielefeld' },
        { name: 'Reinigung Bielefeld', link: '/reinigung-bielefeld' }
      ]
    },
    {
      title: 'Betonarbeiten',
      description: 'Präzise Betonschnitt- und Bohrarbeiten',
      seoPages: [
        { name: 'Betonabbruch Bielefeld', link: '/betonabbruch-bielefeld' },
        { name: 'Durchbrüche Bielefeld', link: '/durchbrueche-bielefeld' }
      ]
    },
  ],
  GÜTERSLOH: [
    {
      title: 'Asbest-Sanierung',
      description: 'Professionelle Asbestentfernung nach TRGS 519',
      seoPages: []
    },
    {
      title: 'Entkernung',
      description: 'Komplette oder teilweise Gebäudeentkernung',
      seoPages: []
    },
    {
      title: 'Beratung & Planung',
      description: 'Umfassende Projektberatung und Genehmigungsmanagement',
      seoPages: []
    },
    {
      title: 'KMF-Sanierung',
      description: 'Fachgerechte Entsorgung künstlicher Mineralfasern',
      seoPages: []
    },
    {
      title: 'Schimmelsanierung',
      description: 'Nachhaltige Schimmelbeseitigung und Prävention',
      seoPages: []
    },
    {
      title: 'Betonarbeiten',
      description: 'Präzise Betonschnitt- und Bohrarbeiten',
      seoPages: []
    },
  ],
  PADERBORN: [
    {
      title: 'Asbest-Sanierung',
      description: 'Professionelle Asbestentfernung nach TRGS 519',
      seoPages: []
    },
    {
      title: 'Entkernung',
      description: 'Komplette oder teilweise Gebäudeentkernung',
      seoPages: []
    },
    {
      title: 'Beratung & Planung',
      description: 'Umfassende Projektberatung und Genehmigungsmanagement',
      seoPages: []
    },
    {
      title: 'KMF-Sanierung',
      description: 'Fachgerechte Entsorgung künstlicher Mineralfasern',
      seoPages: []
    },
    {
      title: 'Schimmelsanierung',
      description: 'Nachhaltige Schimmelbeseitigung und Prävention',
      seoPages: []
    },
    {
      title: 'Betonarbeiten',
      description: 'Präzise Betonschnitt- und Bohrarbeiten',
      seoPages: []
    },
  ],
  OSNABRÜCK: [
    {
      title: 'Asbest-Sanierung',
      description: 'Professionelle Asbestentfernung nach TRGS 519',
      seoPages: []
    },
    {
      title: 'Entkernung',
      description: 'Komplette oder teilweise Gebäudeentkernung',
      seoPages: []
    },
    {
      title: 'Beratung & Planung',
      description: 'Umfassende Projektberatung und Genehmigungsmanagement',
      seoPages: []
    },
    {
      title: 'KMF-Sanierung',
      description: 'Fachgerechte Entsorgung künstlicher Mineralfasern',
      seoPages: []
    },
    {
      title: 'Schimmelsanierung',
      description: 'Nachhaltige Schimmelbeseitigung und Prävention',
      seoPages: []
    },
    {
      title: 'Betonarbeiten',
      description: 'Präzise Betonschnitt- und Bohrarbeiten',
      seoPages: []
    },
  ],
};

export default function CityServicesSection() {
  const [activeCity, setActiveCity] = useState(0);

  // Get current city services
  const currentCityName = cities[activeCity].name;
  const currentServices = servicesData[currentCityName as keyof typeof servicesData] || [];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cerulean/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-dye/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <span className="w-2 h-2 bg-cerulean rounded-full animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold text-cerulean uppercase tracking-wide">Zertifizierter Fachbetrieb</span>
          </div>

          <h2 className="text-2xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
            <span className="block md:inline">Von <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Schadstoffsanierung</span></span>
            <br className="hidden md:block" /><span className="block md:inline">bis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Abbruch</span></span>
          </h2>

          <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="block md:hidden">Ihr Partner in Ostwestfalen-Lippe</span>
            <span className="hidden md:block">Ihr zertifizierter Partner für Asbest-, KMF- und Schimmelsanierung,
            Entkernung, Betonarbeiten und professionelle Abbrucharbeiten in Ostwestfalen-Lippe</span>
          </p>
        </div>

        {/* City Tabs - Grid Layout */}
        <div className="grid grid-cols-2 gap-2 md:flex md:justify-center md:gap-4 mb-8 md:mb-12 max-w-2xl mx-auto">
          {cities.map((city, index) => (
            <button
              key={city.name}
              onClick={() => setActiveCity(index)}
              className={`group relative px-4 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-lg transition-all duration-500 md:transform md:hover:scale-105 ${
                activeCity === index
                  ? 'bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 backdrop-blur-xl text-white border border-cerulean/50 shadow-xl shadow-cerulean/20'
                  : 'bg-white/5 backdrop-blur-md text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              <div className="relative flex flex-col items-center justify-center h-full">
                <span className="text-sm md:text-xl font-bold uppercase tracking-wider">{city.name}</span>
                <span className="hidden md:block text-xs opacity-70 mt-1">{city.population} Einwohner</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active City Content */}
        <div className="relative mt-8">
          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-14 shadow-2xl overflow-hidden">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, cerulean 1px, transparent 1px), radial-gradient(circle at 80% 80%, indigo-dye 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            {/* City Header */}
            <div className="relative mb-8 md:mb-12 pb-8 md:pb-12 border-b border-gradient-to-r from-transparent via-white/20 to-transparent">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-2 h-8 md:h-12 bg-gradient-to-b from-cerulean to-indigo-dye rounded-full"></div>
                <h3 className="text-2xl md:text-5xl font-bold text-white">
                  {cities[activeCity].name}
                </h3>
              </div>
              {/* Hide description on mobile */}
              <p className="hidden md:block text-gray-200 leading-relaxed text-lg md:text-xl max-w-5xl">
                {cities[activeCity].description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="relative space-y-8">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h4 className="text-lg md:text-3xl font-bold text-white">
                  Unsere Leistungen
                  <span className="hidden md:inline"> in {cities[activeCity].name}</span>
                </h4>
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Verfügbar 24/7</span>
                </div>
              </div>

              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6" staggerDelay={150}>
                {currentServices.map((service, index) => (
                  <div
                    key={service.title}
                    className="group relative h-full stagger-child"
                  >
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-7 h-full flex flex-col hover:from-white/15 hover:to-white/10 hover:border-cerulean/30 transition-all duration-500 shadow-2xl group-hover:shadow-cerulean/10 overflow-hidden">

                      {/* Decorative gradient orb */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cerulean/20 to-transparent rounded-full blur-3xl group-hover:from-cerulean/30 transition-colors duration-700"></div>

                      <div className="relative z-10">
                        <h5 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 transition-colors duration-300">
                          {service.title}
                        </h5>

                        <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow">
                          {service.description}
                        </p>

                        {/* SEO Pages with enhanced styling */}
                        {service.seoPages && service.seoPages.length > 0 && (
                          <div className="mt-auto pt-5 border-t border-white/20">
                            <p className="text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-3 md:mb-4">
                              Spezialisierungen
                            </p>
                            <div className="space-y-3">
                              {service.seoPages.map((page) => (
                                <Link
                                  key={page.link}
                                  href={page.link}
                                  className="group/link flex items-center gap-3 text-base text-white hover:text-gray-200 transition-all duration-300 pl-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover/link:scale-150 transition-transform duration-300"></span>
                                  <span className="group-hover/link:translate-x-2 transition-transform duration-300 font-medium">
                                    {page.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cerulean/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </StaggerChildren>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}