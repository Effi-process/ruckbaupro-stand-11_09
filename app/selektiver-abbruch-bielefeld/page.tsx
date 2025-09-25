'use client'
import FloatingElements from '../components/FloatingElements'
import FooterWithMarquee from '../components/FooterWithMarquee'
import CityServicesSection from '../components/CityServicesSection'
import Link from 'next/link'
import Image from 'next/image'

export default function SelektiverAbbruchBielefeldPage() {
  return (
    <main className="relative bg-white">
      <FloatingElements />

      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/abbruch-hero.png"
            alt="Selektiver Abbruch Bielefeld"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-full px-4 py-2 text-blue-300 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Professioneller Abbruch-Service
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Selektiver Abbruch Bielefeld
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Ihr Spezialist für präzisen Teilabbruch und selektive Rückbauarbeiten in Bielefeld und Umgebung
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105">
              Kostenlose Beratung
            </Link>
            <a href="tel:+491748083023" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl">
              📞 +49 174 8083023
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600 mt-1">Projekte erfolgreich</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">24h</div>
              <div className="text-sm text-gray-600 mt-1">Notfall-Service</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600 mt-1">Versichert</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Letzten Frühling ham wir in Bielefeld-Mitte ein riesiges Bürogebäude teilweise zurückgebaut - der Kunde wollte nur die oberen drei Etagen weg haben. Sowas macht nicht jeder, aber für uns bei RückbauPRO ist selektiver Abbruch in Bielefeld tägliches Geschäft. Wir wissen genau, wie man präzise arbeitet ohne das restliche Gebäude zu beschädigen.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Wenn Sie in Bielefeld einen teilweisen Gebäudeabbruch brauchen, sind Sie bei uns genau richtig. Egal ob Sie nur einen Anbau entfernen möchten oder einzelne Gebäudeteile zurückbauen müssen - wir haben die Erfahrung und das Equipment dafür.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Teilabbruch
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Teilabbruch ist ne heikle Sache - da muss man wirklich wissen was man tut. Letzte Woche hatten wir einen Auftrag in Schildesche, wo wir nur den Dachstuhl und das oberste Stockwerk entfernen sollten. Die unteren Etagen sollten während dem Abbruch sogar bewohnt bleiben! Mit unserer staubarmen Technik und präziser Planung haben wir das problemlos hinbekommen.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-gray-800">
                <strong>Wichtig:</strong> Bei jedem Teilabbruch prüfen wir erst die Statik. Nichts ist gefährlicher als einfach drauf los zu reißen. Unsere Statiker checken genau, welche Wände tragend sind und wie wir den Abbruch durchführen können ohne die Stabilität zu gefährden.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Rückbau einzelner Gebäudeteile
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Der Rückbau einzelner Gebäudeteile is unser Spezialgebiet. Ob Balkone, Erker, Anbauten oder Garagen - wir entfernen präzise nur das, was weg soll. Neulich in Sennestadt hatten wir einen interessanten Fall: Ein alter Wintergarten sollte weg, aber die angrenzende Hauswand musste perfekt erhalten bleiben für den neuen Anbau.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Mit unseren Diamantsägen und dem Abbruchroboter haben wir millimetergenau gearbeitet. Kein Riss in der Wand, keine Beschädigung am Putz - der Kunde war begeistert. Sowas können halt nicht viele Abbruchfirmen in Bielefeld.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Stockwerksrückbau
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Stockwerksrückbau machen wir öfters als man denkt. Viele alte Gebäude in Bielefeld haben nachträglich aufgestockte Etagen, die irgendwann wieder runter müssen. Sei es wegen Bauschäden, neuen Bauvorschriften oder einfach weil sich die Nutzung ändert.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Bei einem Projekt am Jahnplatz mussten wir mal drei komplette Stockwerke zurückbauen. Das Gebäude sollte von acht auf fünf Etagen reduziert werden. Mit unserm Kran und speziellen Abbruchtechniken haben wir Stockwerk für Stockwerk sauber abgetragen - ohne die unteren Etagen zu belasten.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Fassadenabbruch
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Fassadenabbruch ist besonders in der Altstadt von Bielefeld oft gefragt. Viele Gebäude haben noch alte, asbesthaltige Fassadenverkleidungen oder marode Vormauerungen die erneuert werden müssen. Da braucht man Fingerspitzengefühl und die richtige Technik.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Wir arbeiten beim Fassadenabbruch immer mit Gerüst und Schuttrutschen, damit nix auf die Straße fällt. Gerade in belebten Gegenden wie der Bahnhofstraße ist das super wichtig. Die Sicherheit von Passanten geht vor!
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Innenabbruch
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Innenabbruch gehört auch zum selektiven Abbruch dazu. Wenn nur die Innenwände raus müssen aber die Außenhülle bleiben soll, sind wir die richtigen. Wir hatten schon Projekte wo wir komplette Büroetagen entkernt haben - nur die tragende Struktur blieb stehen.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Bei einem großen Umbau in einem Einkaufszentrum in Brackwede mussten wir mal nachts arbeiten, weil tagsüber die anderen Läden offen hatten. Mit unseren leisen Elektrogeräten und staubarmer Technik ging das ohne Probleme. Die Kunden in den anderen Geschäften haben nix mitbekommen.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">
              Dachstuhlabbruch
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Dachstuhlabbruch machen wir mehrmals im Monat. Oft sind alte Dachstühle von Holzwurm befallen oder durch Wasserschäden so kaputt, dass sie komplett erneuert werden müssen. Da ist präzises Arbeiten gefragt, damit die darunterliegenden Geschosse nicht beschädigt werden.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Mit unserem Kran können wir ganze Dachstuhlteile am Stück abheben. Das geht schneller und is sicherer als alles klein zu sägen. Letztens in Jöllenbeck haben wir so einen kompletten Dachstuhl an einem Tag runterbekommen - inklusive Entsorgung!
            </p>
          </div>

          {/* Service Areas */}
          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Einsatzgebiete in Bielefeld</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Mitte', 'Schildesche', 'Gadderbaum', 'Brackwede', 'Sennestadt', 'Heepen', 'Jöllenbeck', 'Stieghorst', 'Dornberg'].map(area => (
                <div key={area} className="bg-white px-4 py-2 rounded-lg text-gray-700 text-center shadow-sm">
                  {area}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Häufige Fragen zum selektiven Abbruch</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Was kostet ein selektiver Abbruch?</h3>
                <p className="text-gray-700">
                  Das hängt stark vom Umfang ab. Ein kleiner Balkonabbruch kostet natürlich weniger als der Rückbau mehrerer Stockwerke. Wir machen Ihnen gerne ein kostenloses Angebot nach Besichtigung vor Ort.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Brauche ich eine Genehmigung?</h3>
                <p className="text-gray-700">
                  Ja, für die meisten selektiven Abbrüche brauchen Sie eine Abbruchgenehmigung vom Bauamt Bielefeld. Wir helfen Ihnen gerne bei den Anträgen und kennen uns mit den lokalen Vorschriften bestens aus.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Wie lange dauert ein Teilabbruch?</h3>
                <p className="text-gray-700">
                  Je nach Größe zwischen einem Tag und mehreren Wochen. Einen einzelnen Balkon haben wir in 4-5 Stunden weg. Für einen kompletten Stockwerksrückbau sollten Sie mit 1-2 Wochen rechnen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Muss ich während dem Abbruch ausziehen?</h3>
                <p className="text-gray-700">
                  Nicht immer. Bei vielen selektiven Abbrüchen können Sie im Gebäude bleiben. Wir arbeiten staubarm und sichern alles ab. Nur bei größeren Arbeiten oder wenn die Statik betroffen ist, müssen Sie temporär raus.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">So läuft Ihr selektiver Abbruch ab</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kostenlose Besichtigung</h3>
                  <p className="text-gray-700">
                    Wir kommen zu Ihnen nach Bielefeld und schauen uns das Objekt genau an. Dabei prüfen wir die Statik und besprechen Ihre Wünsche.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Angebot und Planung</h3>
                  <p className="text-gray-700">
                    Sie bekommen ein detailliertes Angebot mit Festpreis. Nach Auftragserteilung planen wir den genauen Ablauf und kümmern uns um Genehmigungen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Durchführung</h3>
                  <p className="text-gray-700">
                    Wir führen den selektiven Abbruch professionell durch. Mit modernster Technik arbeiten wir präzise, sicher und so leise wie möglich.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Entsorgung und Reinigung</h3>
                  <p className="text-gray-700">
                    Wir entsorgen alle Abbruchmaterialien fachgerecht und hinterlassen die Baustelle besenrein. Auf Wunsch bereiten wir alles für den Neuaufbau vor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Jetzt kostenloses Angebot anfordern!</h2>
            <p className="text-xl mb-8 text-white/90">
              Professioneller selektiver Abbruch in Bielefeld - schnell, sicher und zum Festpreis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl">
                Kontaktformular
              </Link>
              <a href="tel:+491748083023" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                📞 Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City Services Integration */}
      <CityServicesSection />

      <FooterWithMarquee />
    </main>
  )
}