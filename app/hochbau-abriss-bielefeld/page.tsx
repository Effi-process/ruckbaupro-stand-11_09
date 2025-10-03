'use client';
import React, { useEffect, useState } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function HochbauAbrissBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-sky-800/10 to-slate-900/50" />
      </div>
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl rounded-full mb-6 border border-sky-400/20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <span className="text-sm font-bold text-sky-200 uppercase tracking-wider animate-pulse">
                Professioneller Hochbau Abriss
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Hochbau Abriss Bielefeld - Wenn's hoch hinaus geht, kommen wir runter
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Letzte Woche ham wir das alte Finanzamt am Niederwall plattgemacht - 12 Etagen in nur 4 Wochen.
              Kennen Sie noch das hässliche Bürogebäude an der Detmolder Straße? Das war auch wir. Bei <strong>Hochbau
              Abriss in Bielefeld</strong> sind wir die Profis wenns um große Kisten geht.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '25+', label: 'Jahre Erfahrung' },
              { number: '200+', label: 'Hochbauten abgerissen' },
              { number: '24/7', label: 'Notdienst verfügbar' },
              { number: '100%', label: 'Zufriedene Kunden' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-sky-100/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Unsere Hochbau-Abriss Leistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Von Hochhäusern bis Industriekomplexen - wir haben die Technik und Erfahrung für jeden Abriss.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Hochhaus-Abbruch',
                description: 'Spezialisiert auf Gebäude über 8 Stockwerke mit modernster Hochreach-Technik bis 35 Meter Höhe.'
              },
              {
                title: 'Bürogebäude-Abriss',
                description: 'Komplettservice für Bürokomplexe inklusive Schadstoffsanierung und Entsorgungsmanagement.'
              },
              {
                title: 'Industriehochbau-Rückbau',
                description: 'Fachgerechter Rückbau von Industrieanlagen mit Berücksichtigung aller Umweltauflagen.'
              },
              {
                title: 'Teilabriss & Kernsanierung',
                description: 'Präzise Teilabrisse mit millimetergenauer Ausführung für denkmalgeschützte Gebäude.'
              },
              {
                title: 'Sprengvorbereitung',
                description: 'Professionelle Vorbereitung für kontrollierte Sprengungen durch zertifizierte Partner.'
              },
              {
                title: 'Projektmanagement',
                description: 'Komplette Projektabwicklung von Genehmigungen bis zur schlüsselfertigen Übergabe.'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-8 h-full hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20 transform hover:-translate-y-2 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-sky-900/30 group-hover:to-slate-800/40">
                  <div className="h-2 bg-gradient-to-r from-sky-400/40 to-sky-300/40 rounded-full mb-6 group-hover:from-sky-400/60 group-hover:to-sky-300/60 transition-all duration-500 group-hover:shadow-md group-hover:shadow-sky-400/30"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4 group-hover:from-white group-hover:to-sky-100 transition-all duration-300">{service.title}</h3>
                  <p className="text-sky-50/80 leading-relaxed group-hover:text-sky-50/90 transition-all duration-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/10 via-slate-900/30 to-sky-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Unser Abriss-Prozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Strukturiert, sicher und termingerecht - so arbeiten wir bei jedem Hochbau-Projekt
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Besichtigung & Analyse', desc: 'Kostenlose Vor-Ort-Begehung und Zustandsanalyse' },
              { step: '02', title: 'Planung & Genehmigung', desc: 'Alle Behördengänge und Genehmigungen für Sie' },
              { step: '03', title: 'Vorbereitung', desc: 'Entkernung, Schadstoffsanierung, Sicherung' },
              { step: '04', title: 'Abriss & Entsorgung', desc: 'Fachgerechter Rückbau und Recycling' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 h-full hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-4 animate-pulse">{item.step}</div>
                  <h3 className="text-xl font-bold text-sky-100 mb-2">{item.title}</h3>
                  <p className="text-sky-100/70 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-sky-300/60 text-2xl animate-pulse">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-sky-900/30">
            <div className="prose prose-lg max-w-none text-white/90">

              <h2 className="text-3xl font-bold text-white mb-6">
                Spezialisiert auf Hochbau-Abriss in Bielefeld
              </h2>
              <p className="mb-8">
                Ein Hochhaus abreißen ist nicht wie'n Gartenhaus umhauen. Da brauchste schon ordentlich Technik und
                Know-how. Unser Liebherr R960 kommt bis 35 Meter hoch - das reicht für die meisten Bürotürme hier
                in Bielefeld. Wir arbeiten uns immer von oben nach unten vor, Stock für Stock. So bleibt alles
                kontrollierbar und die Nachbarn kriegen keinen Herzinfakt.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">
                Bürogebäude-Abriss mit System
              </h2>
              <p className="mb-8">
                Die ganzen alten Büroklötze aus den 70ern müssen langsam alle weg. Asbest in den Decken, PCB in
                den Fugen, und energetisch sind die auch für'n Arsch. Wir machen das komplett - erst Schadstoffsanierung,
                dann Entkernung, und dann kommt der Bagger. Das alte Arbeitsamt in Heepen haben wir letzten Sommer
                gemacht. 8.000 Quadratmeter Bürofläche, alles voll mit Asbest.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">
                Industriehochbau-Rückbau
              </h2>
              <p className="mb-8">
                Industriehochbauten sind nochmal ne andere Hausnummer. Da haste oft noch alte Maschinen drin,
                Öltanks im Keller, und wer weiß was für Chemikalien in den Leitungen. Die alte Textilfabrik in
                Oldentrup war so'n Fall - 6 Stockwerke voll mit alten Webmaschinen und überall Schmieröl.
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 my-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Warum wir die Richtigen für Ihren Hochbau-Abriss sind
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 25 Jahren Erfahrung im Hochbau-Abriss kennen wir jede Herausforderung. Von der
                  kleinen Verwaltungsetage bis zum kompletten Hochhaus - wir haben das richtige Equipment
                  und das Know-how.
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Modernste Hochreach-Bagger bis 35 Meter</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Zertifizierte Schadstoffsanierung</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Erschütterungsarme Abbruchverfahren</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 90% Recyclingquote beim Bauschutt</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Alle Genehmigungen aus einer Hand</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-6">Unsere Einsatzgebiete in Bielefeld</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Wir sind überall in OWL unterwegs, besonders aktiv in diesen Bielefelder Stadtteilen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Niederwall & Oberntorwall',
              'Detmolder Straße Business District',
              'Jahnplatz & Kesselbrink',
              'Universitätsviertel',
              'Oldentrup Industriepark',
              'Brackwede Gewerbegebiet',
              'Heepen Ost',
              'Sennestadt Zentrum',
              'Ravensberger Park'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/30 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-xl p-4 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                <span className="text-sky-100/90 hover:text-sky-200 transition-colors duration-300">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-6">
              Häufige Fragen zum Hochbau-Abriss
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet der Abriss von nem Hochhaus?',
                a: 'Ein 6-stöckiges Bürogebäude liegt so bei 200.000 bis 500.000 Euro, je nachdem wieviel Schadstoffe drin sind.'
              },
              {
                q: 'Wie lange dauert so\'n Hochbau-Abriss?',
                a: 'Ein normales Bürogebäude mit 5-8 Stockwerken braucht 4-8 Wochen. Mit Schadstoffsanierung dauerts länger.'
              },
              {
                q: 'Können Sie auch neben bewohnten Gebäuden abreißen?',
                a: 'Klar, machen wir ständig. Mit erschütterungsarmen Verfahren und Staubschutzwänden kriegen die Nachbarn fast nix mit.'
              },
              {
                q: 'Was passiert mit dem ganzen Bauschutt?',
                a: '90% wird recycelt. Beton wird zu Schotter, Metall eingeschmolzen, Holz verheizt. Nur Sondermüll muss auf spezielle Deponien.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{faq.q}</h3>
                <p className="text-sky-100/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hochbau-Abriss in Bielefeld? Jetzt anfragen!
            </h2>
            <p className="text-white/80 mb-8">
              25 Jahre Erfahrung ✓ Alle Zertifikate ✓ Faire Preise ✓ Schnelle Ausführung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49 174 8083023"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600/40 to-sky-700/40 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-600/60 hover:to-sky-700/60 hover:shadow-lg hover:shadow-sky-400/30 transform hover:scale-105 transition-all duration-300"
              >
                📞 +49 174 8083023
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-r from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/30 text-sky-100 font-bold rounded-full hover:border-sky-400/50 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300"
              >
                Kostenloses Angebot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
      </div>
    </main>
  );
}
