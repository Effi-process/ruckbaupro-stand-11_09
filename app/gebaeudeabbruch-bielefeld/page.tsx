'use client';
import React, { useEffect, useState } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function GebaeudeabbruchBielefeld() {
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
                Professioneller Gebäudeabbruch
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
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
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-sky-100/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Gebäudeabbruch-Leistungen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Von der Planung bis zur Entsorgung - wir übernehmen jeden Aspekt Ihres Abriss-Projekts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mehrstöckiger Gebäudeabbruch',
                description: 'Professioneller Abriss von Bürogebäuden, Wohnkomplexen und Industrieanlagen bis 12 Stockwerke.'
              },
              {
                title: 'Industrieabbruch',
                description: 'Spezialisiert auf Fabrikhallen, Produktionsanlagen und komplexe Industriebauten in Bielefeld.'
              },
              {
                title: 'Entkernung & Sanierung',
                description: 'Selective Entkernung für Renovierungen und denkmalgeschützte Gebäude in der Altstadt.'
              },
              {
                title: 'Erdarbeiten & Fundamente',
                description: 'Komplette Erdarbeiten nach dem Abriss, Fundamentaushub und Bodenvorbereitung.'
              },
              {
                title: 'Schadstoffsanierung',
                description: 'TRGS 519 zertifizierte Asbestsanierung und PCB-Entfernung nach allen Vorschriften.'
              },
              {
                title: 'Recycling & Entsorgung',
                description: 'Umweltgerechte Sortierung und Entsorgung aller Materialien mit 90% Recyclingquote.'
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

      {/* Detailed Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/10 via-slate-900/30 to-sky-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-sky-900/30">
            <div className="prose prose-lg max-w-none text-white/90">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unser bewährtes Abriss-Verfahren</h2>
                <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
                  Seit 25 Jahren perfektionieren wir unsere Abbruch-Methoden für sichere und effiziente Projekte.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-4 animate-pulse">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-sky-100 mb-2">{item.title}</h3>
                    <p className="text-sky-100/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mb-8">
                Als Abrissunternehmen in Bielefeld haben wir schon einiges an Gebäuden abgerissen -
                vom Einfamilienhaus-Aufstockung in Heepen bis zum kompletten Bürokomplex bei Dr. Oetker.
                Gebäudeabbruch ist unser täglich Brot und wir wissen genau, worauf es ankommt.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Mehrstöckiger Gebäudeabbruch in Bielefeld
              </h2>
              <p className="mb-6">
                Mehrstöckige Gebäude brauchen besondere Aufmerksamkeit beim Abriss. Wir haben gerade erst das alte
                Verwaltungsgebäude der Sparkasse in der Innenstadt abgerissen - direkt neben dem laufenden Betrieb.
                Sowas geht nur mit der richtigen Planung und Technik. Unsere Hochreach-Bagger kommen bis 30 Meter
                hoch, und wir arbeiten immer von oben nach unten.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Industrieabbruch in Bielefeld
              </h2>
              <p className="mb-6">
                Die alten Fabrikhallen in Heepen und Jöllenbeck kennen wir wie unsere Westentasche. Beim
                Industrieabbruch kommt es nicht nur auf große Maschinen an - man muss auch wissen, wo früher was
                produziert wurde. Asbest, PCB, alte Öltanks - wir checken alles vorher ab und entsorgen fachgerecht.
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihren Gebäudeabbruch?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-sky-300 mb-2 hover:text-sky-200 transition-colors duration-300">Lokale Expertise</h4>
                    <p className="text-sky-100/90 mb-4">Kennen alle Bielefelder Behörden und Vorschriften seit 25+ Jahren.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sky-300 mb-2 hover:text-sky-200 transition-colors duration-300">Komplettservice</h4>
                    <p className="text-sky-100/90 mb-4">Von Genehmigungen über Schadstoffsanierung bis zur Entsorgung - alles aus einer Hand.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sky-300 mb-2 hover:text-sky-200 transition-colors duration-300">Modernste Technik</h4>
                    <p className="text-sky-100/90 mb-4">Hochreach-Bagger, staubarme Verfahren und schonende Abbruch-Methoden.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sky-300 mb-2 hover:text-sky-200 transition-colors duration-300">Nachhaltig</h4>
                    <p className="text-sky-100/90 mb-4">90% Recyclingquote und umweltgerechte Entsorgung aller Materialien.</p>
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
          <div className="bg-gradient-to-r from-sky-900/20 to-slate-800/30 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-12 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-8 text-center">
              Unsere Einsatzgebiete in Bielefeld und OWL
            </h3>
            <p className="text-xl text-sky-100/80 mb-12 text-center max-w-3xl mx-auto">
              Wir sind in ganz Bielefeld und Umgebung für Sie da. Besonders viele Projekte realisieren wir in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                <h4 className="font-bold text-sky-300 mb-4 text-xl hover:text-sky-200 transition-colors duration-300">Innenstadt</h4>
                <ul className="text-sky-100/70 space-y-2 text-sm">
                  <li>• Bielefeld-Mitte</li>
                  <li>• Altstadt & Niederwall</li>
                  <li>• Jahnplatz & Kesselbrink</li>
                  <li>• Ravensberger Park</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                <h4 className="font-bold text-sky-300 mb-4 text-xl hover:text-sky-200 transition-colors duration-300">Stadtteile</h4>
                <ul className="text-sky-100/70 space-y-2 text-sm">
                  <li>• Brackwede & Senne</li>
                  <li>• Heepen & Oldentrup</li>
                  <li>• Jöllenbeck & Theesen</li>
                  <li>• Schildesche & Gadderbaum</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                <h4 className="font-bold text-sky-300 mb-4 text-xl hover:text-sky-200 transition-colors duration-300">Industriegebiete</h4>
                <ul className="text-sky-100/70 space-y-2 text-sm">
                  <li>• Gewerbegebiet Eckendorfer Straße</li>
                  <li>• Industriegebiet Oldentrup</li>
                  <li>• Businesspark Bielefeld</li>
                  <li>• Industriestraße Brackwede</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                <h4 className="font-bold text-sky-300 mb-4 text-xl hover:text-sky-200 transition-colors duration-300">Umgebung</h4>
                <ul className="text-sky-100/70 space-y-2 text-sm">
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">
              Häufige Fragen zum Gebäudeabbruch
            </h2>
            <p className="text-xl text-sky-100/80">
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
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-8 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4 hover:from-white hover:to-sky-100 transition-all duration-300">{faq.question}</h3>
                <p className="text-sky-100/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-500">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">
              Jetzt Gebäudeabbruch in Bielefeld anfragen
            </h2>
            <p className="text-xl text-sky-100/80 mb-12 max-w-2xl mx-auto">
              Egal ob Wohnhaus, Bürogebäude oder Industriehalle - wir machen das für Sie.
              Seit 25 Jahren sind wir in Bielefeld der Partner für professionellen Gebäudeabbruch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="tel:+491748083023"
                className="inline-block px-10 py-5 bg-gradient-to-r from-sky-600/40 to-sky-700/40 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-600/60 hover:to-sky-700/60 hover:shadow-lg hover:shadow-sky-400/30 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                24/7 Notdienst: 0174 8083023
              </Link>
              <Link
                href="/kontakt"
                className="inline-block px-10 py-5 bg-gradient-to-r from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/30 text-sky-100 font-bold rounded-full hover:border-sky-400/50 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Kostenloses Angebot →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-2 animate-pulse">Express</div>
                <div className="text-sky-100/90">Express-Bearbeitung möglich</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-2 animate-pulse">Premium</div>
                <div className="text-sky-100/90">25+ Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-2 animate-pulse">Service</div>
                <div className="text-sky-100/90">Alle Genehmigungen inklusive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Background Image */}
      <section className="relative">
        /* Related Services - Internal Linking for SEO */

        <RelatedServicesBielefeld currentSlug="gebaeudeabbruch-bielefeld" category="abbruch" maxServices={6} />

 purpose="quote" />
      </section>

      <FooterWithMarquee />
      </div>
    </main>
  );
}
