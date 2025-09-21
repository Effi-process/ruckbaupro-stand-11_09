'use client';

import Icon from './Icon';
import { useState } from 'react';

export default function SchadstoffsanierungContent() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const services = [
    {
      icon: 'shield',
      title: 'Asbestsanierung',
      items: ['Asbestmaterialentfernung', 'TRGS519-konform', 'Freimessung', 'Fachgerechte Entsorgung']
    },
    {
      icon: 'warning',
      title: 'Schadstoffbeseitigung',
      items: ['PCB-Sanierung', 'KMF-Entfernung', 'Schimmelpilzsanierung', 'Gefahrstoff-Entsorgung']
    },
    {
      icon: 'cube',
      title: 'Abbrucharbeiten',
      items: ['Komplettabriss', 'Selektiver Abbruch', 'Entkernung', 'Betonabbruch']
    },
    {
      icon: 'check-circle',
      title: 'Zertifizierte Entsorgung',
      items: ['Dokumentationsverfahren', 'Behördengänge', 'Anmeldung von Schadstoffen', 'Glaswolle Entsorgung']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-oxford-blue to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            SCHADSTOFFSANIERUNG IN BIELEFELD
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-cerulean rounded-full"></div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ihr zertifizierter Partner für professionelle Schadstoffsanierung und Abbrucharbeiten in Bielefeld und Umgebung
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Detailed Content */}
          <div className="space-y-6 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-cerulean">
                Professionelle Schadstoffsanierung für Ihre Sicherheit
              </h3>
              <p className="mb-4 leading-relaxed">
                Als führendes Abrissunternehmen in Bielefeld sind wir Ihr zuverlässiger Partner für
                komplexe Schadstoffsanierungen. Mit über 15 Jahren Erfahrung und modernster Ausrüstung
                gewährleisten wir die sichere und normgerechte Entfernung von Schadstoffen aus Gebäuden
                aller Art.
              </p>
              <p className="mb-4 leading-relaxed">
                Unsere zertifizierten Fachkräfte sind spezialisiert auf die Sanierung von Asbest, PCB,
                KMF und weiteren Gefahrstoffen. Dabei arbeiten wir streng nach TRGS 519 und allen
                geltenden Umweltvorschriften. Von der ersten Begutachtung über die fachgerechte Entfernung
                bis zur finalen Freimessung – wir begleiten Sie durch den gesamten Sanierungsprozess.
              </p>
              <p className="leading-relaxed">
                In Bielefeld und der Region OWL vertrauen Privatpersonen, Unternehmen und öffentliche
                Auftraggeber auf unsere Expertise. Wir bieten Komplettlösungen aus einer Hand: von der
                Schadstoffanalyse über die Sanierung bis zur Entsorgung und Dokumentation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-cerulean">
                Umfassende Abbruch- und Rückbauarbeiten
              </h3>
              <p className="mb-4 leading-relaxed">
                Neben der Schadstoffsanierung bieten wir das komplette Spektrum professioneller
                Abbrucharbeiten. Ob Industrieabbruch, Hochbauabriss oder selektiver Rückbau –
                unser erfahrenes Team meistert jede Herausforderung. Mit modernsten Maschinen und
                durchdachten Konzepten sorgen wir für einen reibungslosen Ablauf Ihres Projekts.
              </p>
              <p className="leading-relaxed">
                Besonders im urbanen Raum Bielefeld sind präzise Teilabbrüche und Entkernungen gefragt.
                Wir arbeiten erschütterungsarm und staubminimiert, um Anwohner und Nachbargebäude zu
                schützen. Dabei übernehmen wir auch alle Behördengänge und das Einholen notwendiger
                Abbruchgenehmigungen.
              </p>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Icon name={service.icon} size={28} className="text-cerulean mr-4" />
                    <h4 className="text-xl font-bold text-white">{service.title}</h4>
                  </div>
                  <Icon
                    name={expandedSection === index ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    className="text-cerulean"
                  />
                </div>
                <div className={`grid grid-cols-2 gap-3 transition-all duration-300 ${
                  expandedSection === index ? 'opacity-100 max-h-96' : 'opacity-70 max-h-20 overflow-hidden'
                }`}>
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <Icon name="check" size={16} className="text-green-400 mr-2" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="bg-gradient-to-r from-cerulean to-indigo-dye rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Warum RückbauPRO Bielefeld?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="star" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>24/7 Notfall-Service für Schadstoffsanierung</span>
                </li>
                <li className="flex items-start">
                  <Icon name="shield" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Zertifiziert nach TRGS 519 & allen Umweltstandards</span>
                </li>
                <li className="flex items-start">
                  <Icon name="users" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Über 500 erfolgreiche Projekte in Bielefeld</span>
                </li>
                <li className="flex items-start">
                  <Icon name="clock" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Kostenlose Erstberatung innerhalb 24 Stunden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Overview Grid */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Unser Leistungsspektrum in Bielefeld
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-cerulean mb-3">Sanierungsarbeiten</h4>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>Asbestentfernung</li>
                <li>Schimmelpilzsanierung</li>
                <li>PCB-Sanierung</li>
                <li>KMF-Entfernung</li>
                <li>Oberflächenreinigung</li>
                <li>Entstaubung</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-cerulean mb-3">Abbrucharbeiten</h4>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>Komplettabriss</li>
                <li>Teilabbruch</li>
                <li>Entkernung</li>
                <li>Betonabbruch</li>
                <li>Industrieabbruch</li>
                <li>Innenabbruch</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-cerulean mb-3">Zusatzleistungen</h4>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>Behördengänge</li>
                <li>Dokumentationsverfahren</li>
                <li>Freimessung</li>
                <li>Fachgerechte Entsorgung</li>
                <li>Räumung und Rodung</li>
                <li>Durchbrüche</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local SEO Content */}
        <div className="mt-12 text-center text-white/80">
          <p className="mb-4">
            Als Ihr lokaler Spezialist für Schadstoffsanierung bedienen wir ganz Bielefeld und Umgebung:
            vom Stadtzentrum über Brackwede, Schildesche, Jöllenbeck bis nach Heepen und Sennestadt.
            Auch in den angrenzenden Städten Herford, Gütersloh, Bad Salzuflen und Detmold sind wir
            für Sie im Einsatz.
          </p>
          <p className="text-sm">
            Unsere Expertise umfasst die komplette Bandbreite der Schadstoffsanierung und des
            professionellen Rückbaus. Als Betonbauunternehmen und Erdbauunternehmen übernehmen wir
            auch Folgearbeiten nach der Sanierung. Mit unserem Asbestuntersuchungsdienst bieten wir
            Ihnen Sicherheit von der ersten Analyse bis zur finalen Freigabe.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Jetzt unverbindlich anfragen!
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Nutzen Sie unsere 24/7 Hotline oder fordern Sie direkt online Ihr kostenloses Angebot an.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491748083023"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-xl"
            >
              <Icon name="phone" size={20} className="mr-2" />
              +49 174 8083023
            </a>
            <button
              onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-cerulean text-white font-bold rounded-xl hover:bg-white/20 transition-all"
            >
              <Icon name="mail" size={20} className="mr-2" />
              Kostenloses Angebot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}