'use client';

import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import SimpleContactForm from '../components/SimpleContactForm';

export default function RueckbauBielefeldPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-blue-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Rückbau Bielefeld – Professioneller Gebäuderückbau
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ihr Spezialist für fachgerechten Rückbau, Abbruch und Entkernung in ganz OstWestfalen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491748083023"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <span className="relative z-10">☎ 0174 808 3023</span>
            </a>
            <a
              href="#kontakt"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Projekte in Bielefeld' },
              { number: '15+', label: 'Jahre Erfahrung' },
              { number: '90%', label: 'Recycling-Quote' },
              { number: '24/7', label: 'Notdienst verfügbar' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was ist Rückbau und warum ist er wichtig?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Rückbau in Bielefeld</strong> – das ist weit mehr als einfacher Abriss. Wenn es um professionellen Gebäuderückbau geht, sind wir Ihr verlässlicher Partner in ganz OstWestfalen. Ob in der historischen Altstadt am Alten Markt, in den Industriegebieten von Oldentrup oder in den Wohnvierteln von Schildesche – wir kennen die baulichen Besonderheiten jedes Stadtteils.
              </p>
              <p>
                Mit über 15 Jahren Erfahrung im Rückbau haben wir schon alles gesehen: von der behutsamen Entkernung denkmalgeschützter Gebäude bis zum kompletten Abbruch großer Industrieanlagen. Rückbau bedeutet die fachgerechte Demontage und Trennung von Baustoffen für eine optimale Wiederverwertung.
              </p>
              <p>
                Besonders in Bielefeld, wo viele Gebäude aus den 60er und 70er Jahren stammen, ist oft mit Schadstoffen wie <strong className="text-blue-400">Asbest</strong> oder <strong className="text-blue-400">künstlichen Mineralfasern</strong> zu rechnen. Hier ist Expertise gefragt: Wir haben die nötigen Qualifikationen nach TRGS 519 und arbeiten eng mit zertifizierten Entsorgungsfachbetrieben zusammen.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rückbau vs. Abbruch – Was ist der Unterschied?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Viele Menschen verwenden die Begriffe "Rückbau" und "Abbruch" synonym, aber es gibt wichtige Unterschiede:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Rückbau</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      Selektive Demontage
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      Sortenreine Trennung
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      Maximales Recycling
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      Umweltschonend
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-700/40 to-gray-600/40 rounded-2xl p-6 border border-gray-500/20">
                  <h3 className="text-xl font-bold text-gray-300 mb-3">Abbruch</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Vollständige Zerstörung
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Gemischter Bauschutt
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Weniger Recycling
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Schneller, aber weniger nachhaltig
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Der moderne Rückbau berücksichtigt Nachhaltigkeit und Ressourcenschonung. Durch sortenreine Trennung erreichen wir Recyclingquoten von über 90%, was nicht nur die Umwelt schont, sondern auch Ihre Entsorgungskosten senkt.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unser Rückbau-Prozess in Bielefeld
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Kostenlose Erstberatung',
                  description: 'Wir besichtigen Ihr Objekt vor Ort in Bielefeld und Umgebung. Dabei prüfen wir die Bausubstanz, erfassen mögliche Schadstoffe und klären alle technischen Details.'
                },
                {
                  number: '2',
                  title: 'Detailliertes Festpreisangebot',
                  description: 'Sie erhalten ein transparentes Angebot mit allen Leistungen: Rückbau, Schadstoffsanierung, Transport, Entsorgung und Dokumentation. Keine versteckten Kosten.'
                },
                {
                  number: '3',
                  title: 'Genehmigungen & Planung',
                  description: 'Wir übernehmen die komplette Antragsstellung beim Bauamt Bielefeld, erstellen den Sicherheits- und Gesundheitsschutzplan und koordinieren alle beteiligten Gewerke.'
                },
                {
                  number: '4',
                  title: 'Professionelle Ausführung',
                  description: 'Fachgerechter Rückbau mit modernster Technik, lückenlose Dokumentation und sortenreine Entsorgung. Sie erhalten alle Nachweise für Behörden und Versicherungen.'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/50">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unsere Rückbau-Leistungen in Bielefeld
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🏗️',
                  title: 'Komplettabbruch',
                  description: 'Vollständiger Abbruch von Wohn- und Gewerbegebäuden mit Fundamententfernung und Grundstücksräumung.'
                },
                {
                  icon: '🔨',
                  title: 'Teilrückbau',
                  description: 'Gezielter Rückbau einzelner Gebäudeteile bei Erhalt der verbleibenden Bausubstanz – ideal für Umbauten.'
                },
                {
                  icon: '🏚️',
                  title: 'Entkernung',
                  description: 'Professionelle Entkernung bei Erhalt der Gebäudehülle – perfekt für Kernsanierungen in der Altstadt.'
                },
                {
                  icon: '⚠️',
                  title: 'Schadstoffsanierung',
                  description: 'TRGS 519 zertifizierte Entfernung von Asbest, KMF, PCB und anderen Schadstoffen mit allen Nachweisen.'
                },
                {
                  icon: '🏭',
                  title: 'Industrierückbau',
                  description: 'Rückbau von Produktionshallen, Maschinen und technischen Anlagen – auch während laufendem Betrieb.'
                },
                {
                  icon: '♻️',
                  title: 'Entsorgung & Recycling',
                  description: 'Sortenreine Trennung und Verwertung mit über 90% Recyclingquote – gut für Umwelt und Budget.'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl p-6 border border-white/10 group-hover:border-blue-500/30 transition-all duration-300">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Rückbau in allen Bielefelder Stadtteilen
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Als lokales Unternehmen kennen wir jeden Stadtteil Bielefelds und seine baulichen Besonderheiten. Von den Gründerzeitvillen in Gadderbaum über die Nachkriegsbauten in Sennestadt bis zu den Industriegebäuden in Oldentrup – jeder Rückbau erfordert spezielle Kenntnisse. Wir sind in maximal 30 Minuten überall in Bielefeld und dem Umland vor Ort.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Bielefeld Mitte/West</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Altstadt / Kesselbrink</li>
                  <li>• Siegfriedplatz / Nordpark</li>
                  <li>• Westend / Pauluskirche</li>
                  <li>• Sieker / Stieghorst</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Bielefeld Nord/Ost</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Schildesche / Jöllenbeck</li>
                  <li>• Theesen / Brake</li>
                  <li>• Heepen / Oldentrup</li>
                  <li>• Milse / Vilsendorf</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Bielefeld Süd</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Brackwede / Quelle</li>
                  <li>• Sennestadt / Senne</li>
                  <li>• Ummeln / Gadderbaum</li>
                  <li>• Bethel / Gellershagen</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schadstoffsanierung beim Rückbau
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Viele Gebäude in Bielefeld, besonders aus den 60er bis 80er Jahren, enthalten Schadstoffe wie Asbest, künstliche Mineralfasern (KMF) oder PCB. Als <strong className="text-blue-400">TRGS 519 zertifizierter Fachbetrieb</strong> führen wir die komplette Schadstoffsanierung durch – von der Probenahme über die fachgerechte Entfernung bis zur Freimessung.
              </p>
              <p>
                Besonders in den Industriegebieten entlang der A2 und in älteren Wohnsiedlungen ist das ein wichtiges Thema. Mit modernster Messtechnik identifizieren wir Gefahrenstellen frühzeitig und sanieren nach allen gesetzlichen Vorgaben.
              </p>
              <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/20 mt-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">Typische Schadstoffe beim Rückbau:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Asbesthaltige Baustoffe (Eternit, Fußbodenbeläge)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Künstliche Mineralfasern (KMF)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>PCB in Fugenmassen und Anstrichen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>PAK-haltige Teerpappe und Bitumen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was kostet ein Rückbau in Bielefeld?
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Die Kosten für einen Rückbau hängen von vielen Faktoren ab: Gebäudegröße, Bauweise, Schadstoffbelastung, Zugänglichkeit und erforderliche Entsorgung. Hier einige typische Beispiele aus Bielefeld:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Einfamilienhaus (150 m²)</h3>
                  <div className="text-3xl font-bold text-white mb-2">15.000 - 30.000 €</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Kompletter Abbruch inkl. Keller</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Entsorgung aller Baustoffe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Grundstücksräumung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Gewerbegebäude (500 m²)</h3>
                  <div className="text-3xl font-bold text-white mb-2">40.000 - 80.000 €</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Rückbau mit Schadstoffsanierung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Sortenreine Trennung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Alle Genehmigungen inkl.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/20">
                <p className="text-white font-semibold mb-2">💡 Kostenersparnis durch Recycling:</p>
                <p>
                  Durch sortenreine Trennung und hohe Recyclingquoten können wir die Entsorgungskosten um bis zu 30% senken. Besonders bei Metallen und sortenreinem Beton lassen sich erhebliche Erlöse erzielen, die wir an Sie weitergeben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Häufig gestellte Fragen zum Rückbau
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Brauche ich eine Abbruchgenehmigung in Bielefeld?',
                answer: 'Ja, in Bielefeld ist für jeden Gebäudeabbruch eine Genehmigung beim Bauamt erforderlich. Wir übernehmen die komplette Antragsstellung für Sie, inklusive aller erforderlichen Unterlagen wie Standsicherheitsnachweis, Entsorgungskonzept und Nachweisen zur Schadstofffreiheit.'
              },
              {
                question: 'Wie lange dauert ein Rückbau?',
                answer: 'Ein Einfamilienhaus ist meist in 3-5 Tagen abgebrochen. Bei größeren Objekten, Schadstoffsanierung oder beengten Verhältnissen kann es 2-4 Wochen dauern. Nach der Objektbesichtigung nennen wir Ihnen einen verbindlichen Zeitrahmen mit allen Zwischenschritten.'
              },
              {
                question: 'Was passiert mit dem Bauschutt?',
                answer: 'Wir trennen alle Materialien sortenrein: Beton wird zu Recycling-Schotter, Metalle werden eingeschmolzen, Holz zu Hackschnitzeln verarbeitet. Über 90% der Baustoffe können recycelt werden. Sie erhalten alle Entsorgungsnachweise und Wiegescheine für Ihre Unterlagen.'
              },
              {
                question: 'Können Sie auch bei Asbestverdacht helfen?',
                answer: 'Ja, als TRGS 519 zertifizierter Fachbetrieb führen wir die komplette Asbestsanierung durch. Wir beginnen mit Probenahmen zur Identifizierung, erstellen die Gefährdungsbeurteilung, führen die fachgerechte Sanierung durch und veranlassen die abschließende Freimessung. Alle Nachweise erhalten Sie dokumentiert.'
              },
              {
                question: 'Arbeiten Sie auch in engen Innenstadtlagen?',
                answer: 'Ja, gerade in der Bielefelder Altstadt haben wir viel Erfahrung. Wir setzen Kompaktgeräte ein, arbeiten mit erschütterungsarmen Verfahren und Wassernebel-Anlagen zur Staubminimierung. Die Koordination mit Nachbarn und der Stadt übernehmen wir vollständig.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-blue-400 flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                  {openFaq === index && (
                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für Ihren Rückbau in Bielefeld?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Festpreisangebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491748083023"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                ☎ Jetzt anrufen
              </a>
              <a
                href="#kontakt"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Angebot anfordern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Warum RückbauPRO Bielefeld?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📜', title: 'TRGS 519 zertifiziert', description: 'Alle Qualifikationen' },
              { icon: '💰', title: 'Festpreisgarantie', description: 'Keine versteckten Kosten' },
              { icon: '♻️', title: '90% Recycling', description: 'Nachhaltig & günstig' },
              { icon: '⚡', title: 'Schnell vor Ort', description: 'Max. 30 Min. in Bielefeld' },
              { icon: '🛡️', title: 'Vollversichert', description: 'Umfassender Schutz' },
              { icon: '🏆', title: '500+ Projekte', description: 'Erfahren & zuverlässig' },
              { icon: '📱', title: '24/7 Notdienst', description: 'Immer erreichbar' },
              { icon: '✓', title: 'Alle Leistungen', description: 'Aus einer Hand' }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-blue-500/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🏗️</div>
                <div className="text-white font-semibold text-sm">TRGS 519</div>
                <div className="text-gray-400 text-xs">zertifiziert</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">♻️</div>
                <div className="text-white font-semibold text-sm">Entsorgungsfachbetrieb</div>
                <div className="text-gray-400 text-xs">zertifiziert</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <div className="text-white font-semibold text-sm">Vollversichert</div>
                <div className="text-gray-400 text-xs">Haftung & Unfallschutz</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-white font-semibold text-sm">Geprüfte Qualität</div>
                <div className="text-gray-400 text-xs">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="relative z-10">
        <SimpleContactForm />
      </section>

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
