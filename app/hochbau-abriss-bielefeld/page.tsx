'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function HochbauAbrissBielefeld() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-slate-900">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full mb-6">
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Professioneller Hochbau Abriss
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
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
              <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                  <div className="h-2 bg-white/30 rounded-full mb-6 group-hover:bg-white/40 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Unser Abriss-Prozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Strukturiert, sicher und termingerecht - so arbeiten wir bei jedem Hochbau-Projekt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Besichtigung & Analyse', desc: 'Kostenlose Vor-Ort-Begehung und Zustandsanalyse' },
              { step: '02', title: 'Planung & Genehmigung', desc: 'Alle Behördengänge und Genehmigungen für Sie' },
              { step: '03', title: 'Vorbereitung', desc: 'Entkernung, Schadstoffsanierung, Sicherung' },
              { step: '04', title: 'Abriss & Entsorgung', desc: 'Fachgerechter Rückbau und Recycling' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-black text-white mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/60 text-2xl">
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
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
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

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Warum wir die Richtigen für Ihren Hochbau-Abriss sind
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 25 Jahren Erfahrung im Hochbau-Abriss kennen wir jede Herausforderung. Von der
                  kleinen Verwaltungsetage bis zum kompletten Hochhaus - wir haben das richtige Equipment
                  und das Know-how.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ Modernste Hochreach-Bagger bis 35 Meter</li>
                  <li>✓ Zertifizierte Schadstoffsanierung</li>
                  <li>✓ Erschütterungsarme Abbruchverfahren</li>
                  <li>✓ 90% Recyclingquote beim Bauschutt</li>
                  <li>✓ Alle Genehmigungen aus einer Hand</li>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <span className="text-white/90">{area}</span>
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
              <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hochbau-Abriss in Bielefeld? Jetzt anfragen!
            </h2>
            <p className="text-white/80 mb-8">
              25 Jahre Erfahrung ✓ Alle Zertifikate ✓ Faire Preise ✓ Schnelle Ausführung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08000060970"
                className="inline-block px-8 py-4 bg-white/20 backdrop-blur-xl text-white font-bold rounded-full hover:bg-white/30 hover:shadow-lg transition-all duration-300"
              >
                📞 0800 0060970
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Kostenloses Angebot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}