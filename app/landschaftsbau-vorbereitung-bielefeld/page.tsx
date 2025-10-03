'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/MultiStepWizard';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function LandschaftsbauVorbereitungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Professionelle Baustellenvorbereitung
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Vorbereitung von Landschaftsbaustellen Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzte Woche haben wir den Bürgerpark in Schildesche für die Neugestaltung vorbereitet -
              3 Hektar Fläche in nur vier Tagen komplett geräumt und planiert. Wenn Ihr Landschaftsbauprojekt
              in Bielefeld perfekt starten soll, dann wissen Sie jetzt, wer die Profis dafür sind.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Jahre Erfahrung' },
              { number: '300+', label: 'Vorbereitete Flächen' },
              { number: '48h', label: 'Schnellservice' },
              { number: '100%', label: 'Termingerecht' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Leistungen zur Baustellenvorbereitung</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Von der Rodung bis zur Planierung - alles aus einer Hand
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rodungsarbeiten',
                description: 'Professionelle Entfernung von Bäumen, Sträuchern und Wurzelwerk für Ihre neue Gartenanlage.'
              },
              {
                title: 'Erdarbeiten',
                description: 'Aushub, Abtrag und Modellierung des Geländes nach Ihren Vorgaben und Plänen.'
              },
              {
                title: 'Planierung',
                description: 'Millimetergenaue Einebnung der Fläche für perfekte Rasen- oder Pflasterflächen.'
              },
              {
                title: 'Bodenaustausch',
                description: 'Austausch von ungeeignetem Boden gegen hochwertige Erde oder Substrate.'
              },
              {
                title: 'Drainage',
                description: 'Installation von Drainagesystemen zur Vermeidung von Staunässe.'
              },
              {
                title: 'Baustelleneinrichtung',
                description: 'Zufahrten, Lagerplätze und Absicherung für reibungslose Bauabläufe.'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-8 h-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:border-sky-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="h-2 bg-gradient-to-r from-sky-400/50 to-sky-600/50 rounded-full mb-6 group-hover:from-sky-300/70 group-hover:to-sky-500/70 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Vorbereitungsprozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Strukturiert, effizient und immer pünktlich
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Begehung', desc: 'Analyse der Fläche und Bestandsaufnahme' },
              { step: '02', title: 'Planung', desc: 'Detaillierte Ablaufplanung mit Zeitschiene' },
              { step: '03', title: 'Räumung', desc: 'Entfernung von Bewuchs und Hindernissen' },
              { step: '04', title: 'Vorbereitung', desc: 'Planierung und Feinarbeiten für den Start' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 h-full hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{item.title}</h3>
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
      <MobileOptimizedContent>
        <MobileSection padding="large" className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-6 lg:p-8 xl:p-12 hover:shadow-2xl hover:shadow-sky-400/10 transition-all duration-300">

            <div className="prose prose-lg max-w-none text-white/90">
              <MobileParagraph className="mb-6 lg:mb-8">
                Als Abrissunternehmen in Bielefeld haben wir schon hunderte Gärten und Parks für Landschaftsbauer
                vorbereitet. Vom kleinen Reihenhausgarten in Brackwede bis zum großen Firmengelände bei Schüco -
                wir wissen genau, worauf es ankommt. Jede Baustelle ist anders, jeder Boden hat seine Tücken.
                In der Bielefelder Lehmboden müssen wir anders arbeiten als im sandigen Boden von Sennestadt.
              </MobileParagraph>

              <CollapsibleTextSection
                title="Rodungsarbeiten"
                content={
                  <>
                    <MobileParagraph>
                      Die Rodungsarbeiten in Bielefeld sind oft der erste große Schritt. Letzte Woche waren wir
                      im Bürgerpark und haben 50 alte Bäume gefällt - mit Genehmigung natürlich! Die Stadt will
                      dort einen modernen Spielplatz bauen. Mit unseren Forstmaschinen und Stubbenfräsen haben
                      wir alles sauber entfernt. Kein Ast, keine Wurzel blieb übrig. Der Landschaftsbauer konnte
                      direkt loslegen.
                    </MobileParagraph>
                    <MobileParagraph>
                      Das schwierigste bei Rodungen ist oft das Wurzelwerk. Besonders die alten Eichen in
                      Bielefeld haben Wurzeln, die meterweit reichen. Mit unserer Stubbenfräse mahlen wir die
                      bis 80 Zentimeter tief raus. Sonst wachsen die wieder nach oder verrotten und hinterlassen
                      Löcher im neuen Rasen. Sowas darf nicht passieren - schon gar nicht bei den teuren
                      Gartenanlagen, die heute gebaut werden.
                    </MobileParagraph>
                  </>
                }
              />

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Erdarbeiten
              </h2>
              <p className="mb-6">
                Erdarbeiten für Landschaftsbaustellen sind unser täglich Brot. Der schwere Lehmboden hier
                in Bielefeld macht oft Probleme - besonders nach dem vielen Regen, den wir immer haben.
                Letzten Monat mussten wir in Jöllenbeck 500 Kubikmeter Lehm abtragen und durch Mutterboden
                ersetzen. Der Kunde wollte einen englischen Rasen, und der wächst im Lehm einfach nicht gut.
              </p>
              <p className="mb-6">
                Mit unseren Baggern und Radladern bewegen wir Erde schnell und effizient. Wichtig ist die
                richtige Sortierung - Oberboden kommt extra, der kann oft wiederverwendet werden. Den
                Unterboden fahren wir zur Deponie oder verwenden ihn zum Auffüllen. In Heepen haben wir
                mal ein ganzes Grundstück um zwei Meter abgesenkt - der Kunde wollte ebenerdig zur Straße
                bauen. 3000 Kubikmeter Erde mussten weg!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Baumfällung
              </h2>
              <p className="mb-6">
                Baumfällungen in Bielefeld sind immer heikel - viele Bäume stehen unter Schutz. Wir kennen
                uns aus mit den Vorschriften und holen alle nötigen Genehmigungen ein. Die große Linde am
                Siegfriedplatz zum Beispiel - die durfte nur zwischen Oktober und Februar gefällt werden,
                wegen der Vögel. Wir haben gewartet und dann sauber gearbeitet, Ast für Ast.
              </p>
              <p className="mb-6">
                Manchmal müssen Bäume in engsten Verhältnissen gefällt werden. In der Altstadt, wo die
                Häuser dicht stehen, können wir nicht einfach umwerfen. Da arbeiten wir mit Seilklettertechnik
                und nehmen den Baum von oben Stück für Stück ab. Jeder Ast wird abgeseilt, nichts darf
                runterfallen. Das dauert länger, ist aber sicher. Die Nachbarn sind immer beeindruckt, wenn
                unsere Jungs wie Affen in den Bäumen rumturnen!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Geländemodellierung
              </h2>
              <p className="mb-6">
                Die Geländemodellierung ist Kunst und Handwerk zugleich. Moderne Gärten haben oft Terrassen,
                Hügel, Senken - alles muss perfekt modelliert werden. Mit GPS-gesteuerten Baggern arbeiten
                wir auf den Zentimeter genau. Im Botanischen Garten haben wir letztes Jahr einen künstlichen
                Bach angelegt - mit Gefälle, Kurven und kleinen Wasserfällen. Alles musste stimmen, damit
                das Wasser richtig fließt.
              </p>
              <p className="mb-6">
                In Bielefeld ist das Gefälle oft eine Herausforderung. Viele Grundstücke am Teutoburger
                Wald sind steil. Da müssen Stützmauern geplant, Terrassen angelegt werden. Wir bereiten
                alles vor - graben die Fundamente aus, schaffen ebene Flächen. Der Landschaftsbauer kann
                dann direkt mit dem Mauerbau beginnen. Teamwork ist wichtig - wir sprechen uns immer ab,
                damit alles passt.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Bodenaustausch
              </h2>
              <p className="mb-6">
                Bodenaustausch machen wir oft bei kontaminierten Flächen. Die alten Industriegebiete in
                Bielefeld - da ist der Boden oft mit Öl oder Schwermetallen belastet. Bevor da ein Garten
                entstehen kann, muss der komplette Boden raus. Wir graben bis zu zwei Meter tief aus und
                füllen mit sauberem Mutterboden auf. Das ist teuer, aber notwendig für die Sicherheit.
              </p>
              <p className="mb-6">
                Auch bei normalen Gärten tauschen wir oft Boden aus. Der schwere Lehm hier in Bielefeld
                ist für viele Pflanzen nicht ideal. Rhododendren brauchen sauren Boden, Lavendel mag es
                sandig - wir schaffen die richtigen Bedingungen. Mit verschiedenen Substraten und Erden
                können wir jeden Gartenwunsch erfüllen. Die Gartenbauer sind froh, wenn sie auf gut
                vorbereiteten Boden treffen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Entsorgung von Grünschnitt
              </h2>
              <p className="mb-6">
                Die Entsorgung von Grünschnitt ist ein großes Thema. Bei einer Rodung fallen schnell mal
                50 Kubikmeter Äste und Laub an. Wir haben große Container und fahren alles zur Kompostierung.
                Nichts wird verbrannt - das ist in Bielefeld sowieso verboten. Der Grünschnitt wird zu
                Kompost verarbeitet und kommt als Dünger wieder auf die Felder.
              </p>
              <p className="mb-6">
                Manchmal hacken wir den Grünschnitt direkt vor Ort. Unser großer Häcksler macht aus dicken
                Ästen feines Mulchmaterial. Das kann der Landschaftsbauer gleich wieder verwenden - zum
                Abdecken von Beeten oder für Wege. Nachhaltig und praktisch! Die Kunden freuen sich, wenn
                sie sehen, dass nichts verschwendet wird. In Zeiten des Klimawandels ist das wichtiger denn je.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Planierung
              </h2>
              <p className="mb-6">
                Die Planierung ist der letzte Schliff vor dem Landschaftsbau. Mit Laser und GPS arbeiten
                wir millimetergenau. Ein Fußballplatz muss absolut eben sein, ein Parkplatz braucht Gefälle
                für den Wasserablauf. Wir kennen alle Anforderungen und setzen sie präzise um. Der neue
                Sportplatz in Brackwede - den haben wir auf 5 Millimeter genau planiert. Die Spieler merken
                keinen Unterschied zwischen den verschiedenen Bereichen.
              </p>
              <p className="mb-6">
                Bei Privatgärten ist die Planierung oft komplex. Verschiedene Höhen für Terrasse, Rasen,
                Beete - alles muss harmonisch ineinander übergehen. Mit unserem Mini-Bagger kommen wir auch
                in kleine Gärten und arbeiten präzise. Die Übergänge werden sauber ausgeformt, Kanten
                gezogen. Wenn der Landschaftsbauer kommt, kann er sofort mit Rollrasen oder Pflasterarbeiten
                beginnen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Drainage-Installation
              </h2>
              <p className="mb-6">
                Drainage ist in Bielefeld super wichtig - wir haben hier viel Regen und schweren Boden,
                der das Wasser nicht gut ableitetet. Ohne Drainage wird jeder Garten zum Sumpf. Wir legen
                Drainagerohre in 60-80 Zentimeter Tiefe, umgeben von Kies. Das Wasser wird gesammelt und
                kontrolliert abgeleitet. Im Obersee-Viertel haben wir mal 500 Meter Drainage verlegt - der
                Garten war vorher jedes Frühjahr überschwemmt.
              </p>
              <p className="mb-6">
                Die moderne Drainage-Technik ist clever. Wir verwenden jetzt oft Sickerboxen, die das
                Regenwasser sammeln und langsam versickern lassen. Das entlastet die Kanalisation und ist
                gut fürs Grundwasser. Die Stadt Bielefeld fördert das sogar - es gibt Zuschüsse für
                Regenwasser-Management. Wir beraten die Kunden und bauen die optimale Lösung ein. Der
                Landschaftsbauer kann dann einen Garten anlegen, der auch nach Starkregen nicht absäuft.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Baustelleneinrichtung
              </h2>
              <p className="mb-6">
                Die Baustelleneinrichtung ist der erste Schritt jedes Projekts. Zufahrten müssen geschaffen
                werden - oft legen wir Stahlplatten aus, damit die schweren Maschinen nicht im Matsch
                versinken. Container für Material, Bauwagen fürs Personal, Dixie-Klos - alles muss organisiert
                werden. Bei großen Projekten bauen wir richtige Baustraßen mit Schotter. Die werden später
                wieder entfernt, aber während der Bauzeit sind sie unverzichtbar.
              </p>
              <p className="mb-6">
                Die Absicherung der Baustelle ist gesetzlich vorgeschrieben und wichtig für die Sicherheit.
                Bauzäune, Warnschilder, Beleuchtung - alles muss stimmen. In Wohngebieten achten wir besonders
                darauf, dass Kinder nicht auf die Baustelle kommen. Die sind neugierig und klettern überall
                rum. Mit stabilen Zäunen und klaren Absperrungen sorgen wir für Sicherheit. Die Landschaftsbauer
                können sich dann voll auf ihre Arbeit konzentrieren.
              </p>

              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Ihr Partner für Baustellenvorbereitung in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 15 Jahren Erfahrung in der Vorbereitung von Landschaftsbaustellen kennen wir
                  jeden Trick und jede Herausforderung. Von der kleinen Gartenumgestaltung bis zum großen
                  Parkprojekt - wir schaffen die perfekte Grundlage für Ihren Landschaftsbau.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ Komplette Räumung und Rodung</li>
                  <li>✓ Präzise Erdarbeiten und Modellierung</li>
                  <li>✓ Professionelle Drainage-Systeme</li>
                  <li>✓ Termingerechte Übergabe</li>
                  <li>✓ Perfekte Abstimmung mit Landschaftsbauern</li>
                </ul>
              </div>
            </div>
          </div>
        </MobileSection>
      </MobileOptimizedContent>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Baustellenvorbereitung in Ihrer Nähe</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Schnell vor Ort in ganz Bielefeld und Umgebung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld Mitte',
              'Schildesche',
              'Jöllenbeck',
              'Brackwede',
              'Heepen',
              'Sennestadt',
              'Dornberg',
              'Gadderbaum',
              'Stieghorst'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/20 to-sky-900/10 backdrop-blur-xl border border-sky-400/30 rounded-xl p-4 hover:bg-gradient-to-br hover:from-slate-700/30 hover:to-sky-800/20 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300">
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
              Häufige Fragen zur Baustellenvorbereitung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wie lange dauert die Vorbereitung einer Baustelle?',
                a: 'Je nach Größe zwischen 2-10 Tagen. Kleine Gärten schaffen wir oft in 2 Tagen, große Projekte brauchen mehr Zeit.'
              },
              {
                q: 'Brauche ich eine Genehmigung für Baumfällungen?',
                a: 'Ja, oft schon. Wir kümmern uns um alle nötigen Genehmigungen bei der Stadt Bielefeld.'
              },
              {
                q: 'Was kostet die Vorbereitung einer Landschaftsbaustelle?',
                a: 'Das hängt von der Größe und dem Aufwand ab. Gerne erstellen wir ein kostenloses Angebot nach Besichtigung.'
              },
              {
                q: 'Können Sie auch kontaminierten Boden entsorgen?',
                a: 'Ja, wir sind zertifiziert für die Entsorgung von belastetem Boden und arbeiten mit zugelassenen Deponien.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
              Baustellenvorbereitung in Bielefeld - Jetzt anfragen!
            </h2>
            <p className="text-white/80 mb-8">
              15 Jahre Erfahrung ✓ Moderne Technik ✓ Faire Preise ✓ Termingarantie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49 174 8083023"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-500 hover:to-sky-600 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/30 transition-all duration-300"
              >
                📞 +49 174 8083023
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 text-white font-bold rounded-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300"
              >
                Kostenloses Angebot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking for SEO */}
      <RelatedServicesBielefeld currentSlug="landschaftsbau-vorbereitung-bielefeld" category="all" maxServices={6} />

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}
