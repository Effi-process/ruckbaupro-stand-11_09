'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function GebaeudeabbruchBielefeld() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-oxford-blue">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 backdrop-blur-xl rounded-full mb-6">
              <span className="text-sm font-bold text-cerulean uppercase tracking-wider">
                Professioneller Gebäudeabbruch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Gebäudeabbruch Bielefeld - Komplettservice aus einer Hand
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Letzten Sommer haben wir das alte Bürogebäude am Jahnplatz abgerissen - 8 Stockwerke in nur 3 Wochen.
              Wenn Sie auch vor so einem Projekt stehen, sind Sie bei uns genau richtig. Unser Team für <strong>Gebäudeabbruch
              in Bielefeld</strong> hat schon alles gesehen: vom kleinen Wohnhaus bis zum Industriekomplex.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1500+', label: 'Abgerissene Gebäude' },
              { number: '25+', label: 'Jahre Erfahrung' },
              { number: '100%', label: 'Zertifizierte Entsorgung' },
              { number: '24/7', label: 'Notdienst verfügbar' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-cerulean/20">
                <div className="text-3xl font-black text-cerulean mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Unsere Gebäudeabbruch-Leistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Von der Planung bis zur Entsorgung - wir übernehmen jeden Aspekt Ihres Abriss-Projekts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mehrstöckiger Gebäudeabbruch',
                description: 'Professioneller Abriss von Bürogebäuden, Wohnkomplexen und Industrieanlagen bis 12 Stockwerke.',
                gradient: 'from-blue-400/20 to-cyan-400/20'
              },
              {
                title: 'Industrieabbruch',
                description: 'Spezialisiert auf Fabrikhallen, Produktionsanlagen und komplexe Industriebauten in Bielefeld.',
                gradient: 'from-purple-400/20 to-pink-400/20'
              },
              {
                title: 'Entkernung & Sanierung',
                description: 'Selective Entkernung für Renovierungen und denkmalgeschützte Gebäude in der Altstadt.',
                gradient: 'from-green-400/20 to-emerald-400/20'
              },
              {
                title: 'Erdarbeiten & Fundamente',
                description: 'Komplette Erdarbeiten nach dem Abriss, Fundamentaushub und Bodenvorbereitung.',
                gradient: 'from-orange-400/20 to-red-400/20'
              },
              {
                title: 'Schadstoffsanierung',
                description: 'TRGS 519 zertifizierte Asbestsanierung und PCB-Entfernung nach allen Vorschriften.',
                gradient: 'from-yellow-400/20 to-orange-400/20'
              },
              {
                title: 'Recycling & Entsorgung',
                description: 'Umweltgerechte Sortierung und Entsorgung aller Materialien mit 90% Recyclingquote.',
                gradient: 'from-teal-400/20 to-blue-400/20'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full hover:border-cerulean/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cerulean/10`}>
                  <div className="h-1 bg-gradient-to-r from-cerulean to-indigo-dye rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-cerulean/30 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-white/90">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-white mb-6">Unser bewährtes Abriss-Verfahren</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Seit 25 Jahren perfektionieren wir unsere Abbruch-Methoden für sichere und effiziente Projekte.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[
                  {
                    step: '01',
                    title: 'Analyse & Genehmigung',
                    description: 'Gebäudeprüfung, Schadstoffanalyse und Beantragung aller erforderlichen Genehmigungen.'
                  },
                  {
                    step: '02',
                    title: 'Vorbereitung & Sicherung',
                    description: 'Baustelle absichern, Nachbargebäude schützen und Entsorgungslogistik vorbereiten.'
                  },
                  {
                    step: '03',
                    title: 'Kontrollierter Abbruch',
                    description: 'Systematischer Abriss von oben nach unten mit modernster Technik und Staubschutz.'
                  },
                  {
                    step: '04',
                    title: 'Recycling & Übergabe',
                    description: 'Material sortieren, recyceln und Grundstück besenrein zur Neubebauung übergeben.'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-cerulean to-indigo-dye w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-black text-xl shadow-lg shadow-cerulean/30">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8">
                Als Abrissunternehmen in Bielefeld haben wir schon einiges an Gebäuden abgerissen -
                vom Einfamilienhaus-Aufstockung in Heepen bis zum kompletten Bürokomplex bei Dr. Oetker.
                Gebäudeabbruch ist unser täglich Brot und wir wissen genau, worauf es ankommt.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Mehrstöckiger Gebäudeabbruch in Bielefeld
              </h2>
              <p className="mb-6">
                Mehrstöckige Gebäude brauchen besondere Aufmerksamkeit beim Abriss. Wir haben gerade erst das alte
                Verwaltungsgebäude der Sparkasse in der Innenstadt abgerissen - direkt neben dem laufenden Betrieb.
                Sowas geht nur mit der richtigen Planung und Technik. Unsere Hochreach-Bagger kommen bis 30 Meter
                hoch, und wir arbeiten immer von oben nach unten.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Industrieabbruch in Bielefeld
              </h2>
              <p className="mb-6">
                Die alten Fabrikhallen in Heepen und Jöllenbeck kennen wir wie unsere Westentasche. Beim
                Industrieabbruch kommt es nicht nur auf große Maschinen an - man muss auch wissen, wo früher was
                produziert wurde. Asbest, PCB, alte Öltanks - wir checken alles vorher ab und entsorgen fachgerecht.
              </p>

              <div className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Warum RückbauPRO für Ihren Gebäudeabbruch?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-cerulean mb-2">Lokale Expertise</h4>
                    <p className="text-white/90 mb-4">Kennen alle Bielefelder Behörden und Vorschriften seit 25+ Jahren.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-cerulean mb-2">Komplettservice</h4>
                    <p className="text-white/90 mb-4">Von Genehmigungen über Schadstoffsanierung bis zur Entsorgung - alles aus einer Hand.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-cerulean mb-2">Modernste Technik</h4>
                    <p className="text-white/90 mb-4">Hochreach-Bagger, staubarme Verfahren und schonende Abbruch-Methoden.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-cerulean mb-2">Nachhaltig</h4>
                    <p className="text-white/90 mb-4">90% Recyclingquote und umweltgerechte Entsorgung aller Materialien.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cerulean/10 to-indigo-dye/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-white mb-8 text-center">
              Unsere Einsatzgebiete in Bielefeld und OWL
            </h3>
            <p className="text-xl text-white/80 mb-12 text-center max-w-3xl mx-auto">
              Wir sind in ganz Bielefeld und Umgebung für Sie da. Besonders viele Projekte realisieren wir in:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="font-bold text-cerulean mb-4 text-xl">Innenstadt</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Bielefeld-Mitte</li>
                  <li>• Altstadt & Niederwall</li>
                  <li>• Jahnplatz & Kesselbrink</li>
                  <li>• Ravensberger Park</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="font-bold text-cerulean mb-4 text-xl">Stadtteile</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Brackwede & Senne</li>
                  <li>• Heepen & Oldentrup</li>
                  <li>• Jöllenbeck & Theesen</li>
                  <li>• Schildesche & Gadderbaum</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="font-bold text-cerulean mb-4 text-xl">Industriegebiete</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Gewerbegebiet Eckendorfer Straße</li>
                  <li>• Industriegebiet Oldentrup</li>
                  <li>• Businesspark Bielefeld</li>
                  <li>• Industriestraße Brackwede</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h4 className="font-bold text-cerulean mb-4 text-xl">Umgebung</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Gütersloh & Verl</li>
                  <li>• Herford & Bad Salzuflen</li>
                  <li>• Paderborn & Detmold</li>
                  <li>• Minden & Lemgo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">
              Häufige Fragen zum Gebäudeabbruch
            </h2>
            <p className="text-xl text-white/80">
              Die wichtigsten Antworten zu Ihrem Abriss-Projekt in Bielefeld.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Was kostet ein Gebäudeabbruch in Bielefeld?",
                answer: "Das hängt von der Größe ab. Ein kleines Einfamilienhaus kostet meist zwischen 10.000 und 25.000 Euro. Bei mehrstöckigen Gebäuden wirds mehr - da rechnen wir nach Kubikmetern. Wir machen Ihnen gerne ein kostenloses Angebot nach der Besichtigung."
              },
              {
                question: "Brauche ich eine Genehmigung für den Abriss?",
                answer: "Ja, in Bielefeld brauchen Sie immer eine Abbruchgenehmigung vom Bauamt. Wir kümmern uns um alle Papiere und kennen die Ansprechpartner. Das dauert normalerweise 4-6 Wochen."
              },
              {
                question: "Wie lange dauert ein Gebäudeabbruch?",
                answer: "Ein normales Wohnhaus ist in 3-5 Tagen weg. Mehrstöckige Gebäude brauchen 2-4 Wochen, je nach Größe und Lage. Wenn noch Schadstoffe drin sind, dauerts länger."
              },
              {
                question: "Können Sie auch in der engen Altstadt arbeiten?",
                answer: "Selbstverständlich! Wir haben spezielle kompakte Maschinen für enge Verhältnisse und arbeiten besonders schonend in denkmalgeschützten Bereichen der Bielefelder Altstadt."
              },
              {
                question: "Was passiert mit den Materialien?",
                answer: "Wir erreichen eine Recyclingquote von über 90%. Beton wird zu Schotter, Metalle eingeschmolzen, Holz thermisch verwertet. Nur Schadstoffe müssen speziell entsorgt werden - alles dokumentiert und nachweisbar."
              },
              {
                question: "Arbeiten Sie auch am Wochenende?",
                answer: "Bei Notfällen und dringenden Projekten können wir auch Wochenendtermine vereinbaren. Normaler Abbruch läuft werktags, um die Anwohner nicht zu stören."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-white/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-black text-white mb-6">
              Jetzt Gebäudeabbruch in Bielefeld anfragen
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Egal ob Wohnhaus, Bürogebäude oder Industriehalle - wir machen das für Sie.
              Seit 25 Jahren sind wir in Bielefeld der Partner für professionellen Gebäudeabbruch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="tel:+491748083023"
                className="inline-block px-10 py-5 bg-gradient-to-r from-cerulean to-indigo-dye text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cerulean/30 transition-all duration-300 text-lg"
              >
                24/7 Notdienst: 0174 8083023
              </Link>
              <Link
                href="/kontakt"
                className="inline-block px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Kostenloses Angebot →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-cerulean mb-2">Express</div>
                <div className="text-white/90">Express-Bearbeitung möglich</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cerulean mb-2">Premium</div>
                <div className="text-white/90">25+ Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-cerulean mb-2">Service</div>
                <div className="text-white/90">Alle Genehmigungen inklusive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}