'use client';
import React, { useEffect, useState } from 'react';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee'
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'
import Link from 'next/link'
import Image from 'next/image'

export default function SelektiverAbbruchBielefeldPage() {
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
                  Professioneller Selektiver Abbruch
                </span>
              </div>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Selektiver Abbruch Bielefeld
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Ihr Spezialist für präzisen Teilabbruch und selektive Rückbauarbeiten in Bielefeld und Umgebung
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105">
                Kostenlose Beratung
              </Link>
              <a href="tel:+491748083023" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl">
                📞 +49 174 8083023
              </a>
            </div>
          </div>
        </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Projekte erfolgreich' },
              { number: '24h', label: 'Notfall-Service' },
              { number: '100%', label: 'Versichert' },
              { number: '15+', label: 'Jahre Erfahrung' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-sky-100/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <MobileOptimizedContent>
        <MobileSection padding="large" className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-white">
            <MobileParagraph>
              Letzten Frühling ham wir in Bielefeld-Mitte ein riesiges Bürogebäude teilweise zurückgebaut - der Kunde wollte nur die oberen drei Etagen weg haben. Sowas macht nicht jeder, aber für uns bei RückbauPRO ist selektiver Abbruch in Bielefeld tägliches Geschäft. Wir wissen genau, wie man präzise arbeitet ohne das restliche Gebäude zu beschädigen.
            </MobileParagraph>

            <MobileParagraph>
              Wenn Sie in Bielefeld einen teilweisen Gebäudeabbruch brauchen, sind Sie bei uns genau richtig. Egal ob Sie nur einen Anbau entfernen möchten oder einzelne Gebäudeteile zurückbauen müssen - wir haben die Erfahrung und das Equipment dafür.
            </MobileParagraph>

            <CollapsibleTextSection
              title="Teilabbruch"
              content={
                <MobileParagraph>
                  Teilabbruch ist ne heikle Sache - da muss man wirklich wissen was man tut. Letzte Woche hatten wir einen Auftrag in Schildesche, wo wir nur den Dachstuhl und das oberste Stockwerk entfernen sollten. Die unteren Etagen sollten während dem Abbruch sogar bewohnt bleiben! Mit unserer staubarmen Technik und präziser Planung haben wir das problemlos hinbekommen.
                </MobileParagraph>
              }
            />

            <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl border-l-4 border-sky-400 p-4 lg:p-6 my-6 lg:my-8 rounded-lg">
              <p className="text-white/90 text-sm lg:text-base">
                <strong>Wichtig:</strong> Bei jedem Teilabbruch prüfen wir erst die Statik. Nichts ist gefährlicher als einfach drauf los zu reißen. Unsere Statiker checken genau, welche Wände tragend sind und wie wir den Abbruch durchführen können ohne die Stabilität zu gefährden.
              </p>
            </div>

            <CollapsibleTextSection
              title="Rückbau einzelner Gebäudeteile"
              content={
                <>
                  <MobileParagraph>
                    Der Rückbau einzelner Gebäudeteile is unser Spezialgebiet. Ob Balkone, Erker, Anbauten oder Garagen - wir entfernen präzise nur das, was weg soll. Neulich in Sennestadt hatten wir einen interessanten Fall: Ein alter Wintergarten sollte weg, aber die angrenzende Hauswand musste perfekt erhalten bleiben für den neuen Anbau.
                  </MobileParagraph>
                  <MobileParagraph>
                    Mit unseren Diamantsägen und dem Abbruchroboter haben wir millimetergenau gearbeitet. Kein Riss in der Wand, keine Beschädigung am Putz - der Kunde war begeistert. Sowas können halt nicht viele Abbruchfirmen in Bielefeld.
                  </MobileParagraph>
                </>
              }
            />

            <CollapsibleTextSection
              title="Stockwerksrückbau"
              content={
                <>
                  <MobileParagraph>
                    Stockwerksrückbau machen wir öfters als man denkt. Viele alte Gebäude in Bielefeld haben nachträglich aufgestockte Etagen, die irgendwann wieder runter müssen. Sei es wegen Bauschäden, neuen Bauvorschriften oder einfach weil sich die Nutzung ändert.
                  </MobileParagraph>
                  <MobileParagraph>
                    Bei einem Projekt am Jahnplatz mussten wir mal drei komplette Stockwerke zurückbauen. Das Gebäude sollte von acht auf fünf Etagen reduziert werden. Mit unserm Kran und speziellen Abbruchtechniken haben wir Stockwerk für Stockwerk sauber abgetragen - ohne die unteren Etagen zu belasten.
                  </MobileParagraph>
                </>
              }
            />

            <CollapsibleTextSection
              title="Fassadenabbruch"
              content={
                <>
                  <MobileParagraph>
                    Fassadenabbruch ist besonders in der Altstadt von Bielefeld oft gefragt. Viele Gebäude haben noch alte, asbesthaltige Fassadenverkleidungen oder marode Vormauerungen die erneuert werden müssen. Da braucht man Fingerspitzengefühl und die richtige Technik.
                  </MobileParagraph>
                  <MobileParagraph>
                    Wir arbeiten beim Fassadenabbruch immer mit Gerüst und Schuttrutschen, damit nix auf die Straße fällt. Gerade in belebten Gegenden wie der Bahnhofstraße ist das super wichtig. Die Sicherheit von Passanten geht vor!
                  </MobileParagraph>
                </>
              }
            />

            <CollapsibleTextSection
              title="Innenabbruch"
              content={
                <>
                  <MobileParagraph>
                    Innenabbruch gehört auch zum selektiven Abbruch dazu. Wenn nur die Innenwände raus müssen aber die Außenhülle bleiben soll, sind wir die richtigen. Wir hatten schon Projekte wo wir komplette Büroetagen entkernt haben - nur die tragende Struktur blieb stehen.
                  </MobileParagraph>
                  <MobileParagraph>
                    Bei einem großen Umbau in einem Einkaufszentrum in Brackwede mussten wir mal nachts arbeiten, weil tagsüber die anderen Läden offen hatten. Mit unseren leisen Elektrogeräten und staubarmer Technik ging das ohne Probleme. Die Kunden in den anderen Geschäften haben nix mitbekommen.
                  </MobileParagraph>
                </>
              }
            />

            <CollapsibleTextSection
              title="Dachstuhlabbruch"
              content={
                <>
                  <MobileParagraph>
                    Dachstuhlabbruch machen wir mehrmals im Monat. Oft sind alte Dachstühle von Holzwurm befallen oder durch Wasserschäden so kaputt, dass sie komplett erneuert werden müssen. Da ist präzises Arbeiten gefragt, damit die darunterliegenden Geschosse nicht beschädigt werden.
                  </MobileParagraph>
                  <MobileParagraph>
                    Mit unserem Kran können wir ganze Dachstuhlteile am Stück abheben. Das geht schneller und is sicherer als alles klein zu sägen. Letztens in Jöllenbeck haben wir so einen kompletten Dachstuhl an einem Tag runterbekommen - inklusive Entsorgung!
                  </MobileParagraph>
                </>
              }
            />
          </div>

          {/* Service Areas */}
          <div className="mt-8 lg:mt-12 p-4 lg:p-8 bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl rounded-2xl border border-sky-400/20">
            <MobileHeading level={2} className="mb-4 lg:mb-6">Unsere Einsatzgebiete in Bielefeld</MobileHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3">
              {['Mitte', 'Schildesche', 'Gadderbaum', 'Brackwede', 'Sennestadt', 'Heepen', 'Jöllenbeck', 'Stieghorst', 'Dornberg'].map(area => (
                <div key={area} className="bg-slate-800/50 backdrop-blur px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sky-100 text-center border border-sky-400/20 text-sm lg:text-base">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <MobileFAQSection
            title="Häufige Fragen zum selektiven Abbruch"
            faqs={[
              {
                question: "Was kostet ein selektiver Abbruch?",
                answer: "Das hängt stark vom Umfang ab. Ein kleiner Balkonabbruch kostet natürlich weniger als der Rückbau mehrerer Stockwerke. Wir machen Ihnen gerne ein kostenloses Angebot nach Besichtigung vor Ort."
              },
              {
                question: "Brauche ich eine Genehmigung?",
                answer: "Ja, für die meisten selektiven Abbrüche brauchen Sie eine Abbruchgenehmigung vom Bauamt Bielefeld. Wir helfen Ihnen gerne bei den Anträgen und kennen uns mit den lokalen Vorschriften bestens aus."
              },
              {
                question: "Wie lange dauert ein Teilabbruch?",
                answer: "Je nach Größe zwischen einem Tag und mehreren Wochen. Einen einzelnen Balkon haben wir in 4-5 Stunden weg. Für einen kompletten Stockwerksrückbau sollten Sie mit 1-2 Wochen rechnen."
              },
              {
                question: "Muss ich während dem Abbruch ausziehen?",
                answer: "Nicht immer. Bei vielen selektiven Abbrüchen können Sie im Gebäude bleiben. Wir arbeiten staubarm und sichern alles ab. Nur bei größeren Arbeiten oder wenn die Statik betroffen ist, müssen Sie temporär raus."
              }
            ]}
          />

          {/* Process Section */}
          <div className="mt-12 lg:mt-16">
            <MobileHeading level={2}>So läuft Ihr selektiver Abbruch ab</MobileHeading>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex gap-3 lg:gap-4">
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-lg border border-sky-400/30">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg lg:text-xl font-semibold text-sky-200 mb-1 lg:mb-2">Kostenlose Besichtigung</h3>
                  <p className="text-white/70 text-sm lg:text-base">
                    Wir kommen zu Ihnen nach Bielefeld und schauen uns das Objekt genau an. Dabei prüfen wir die Statik und besprechen Ihre Wünsche.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-4">
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-lg border border-sky-400/30">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg lg:text-xl font-semibold text-sky-200 mb-1 lg:mb-2">Angebot und Planung</h3>
                  <p className="text-white/70 text-sm lg:text-base">
                    Sie bekommen ein detailliertes Angebot mit Festpreis. Nach Auftragserteilung planen wir den genauen Ablauf und kümmern uns um Genehmigungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-4">
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-lg border border-sky-400/30">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg lg:text-xl font-semibold text-sky-200 mb-1 lg:mb-2">Durchführung</h3>
                  <p className="text-white/70 text-sm lg:text-base">
                    Wir führen den selektiven Abbruch professionell durch. Mit modernster Technik arbeiten wir präzise, sicher und so leise wie möglich.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-4">
                <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-lg border border-sky-400/30">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg lg:text-xl font-semibold text-sky-200 mb-1 lg:mb-2">Entsorgung und Reinigung</h3>
                  <p className="text-white/70 text-sm lg:text-base">
                    Wir entsorgen alle Abbruchmaterialien fachgerecht und hinterlassen die Baustelle besenrein. Auf Wunsch bereiten wir alles für den Neuaufbau vor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 lg:mt-16 text-center bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl rounded-2xl p-6 lg:p-8 text-white border border-sky-400/20">
            <MobileHeading level={2} className="mb-3 lg:mb-4">Jetzt kostenloses Angebot anfordern!</MobileHeading>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-white/90">
              Professioneller selektiver Abbruch in Bielefeld - schnell, sicher und zum Festpreis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl">
                Kontaktformular
              </Link>
              <a href="tel:+491748083023" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                📞 Jetzt anrufen
              </a>
            </div>
          </div>
        </MobileSection>
      </MobileOptimizedContent>

      </div>

      <FooterWithMarquee />
    </main>
  )
}
