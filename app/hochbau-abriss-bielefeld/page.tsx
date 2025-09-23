import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/app/components/Icon';
import FloatingElements from '@/app/components/FloatingElements';
import FooterWithMarquee from '@/app/components/FooterWithMarquee';

export const metadata: Metadata = {
  title: 'Hochbau Abriss Bielefeld - Professioneller Abriss von Hochbauten | RückbauPRO',
  description: 'Hochbau Abriss in Bielefeld ✓ Spezialisiert auf Hochhäuser & Bürokomplexe ✓ 24h Notdienst ✓ Kostenlose Beratung ✓ Seit 1998 in OWL tätig. Jetzt anrufen!',
  keywords: 'Hochbau Abriss Bielefeld, Hochhaus Abriss, Bürogebäude Abriss, Hochbau Rückbau, Abrissunternehmen Bielefeld',
  openGraph: {
    title: 'Hochbau Abriss Bielefeld - RückbauPRO',
    description: 'Ihr Spezialist für Hochbau Abriss in Bielefeld. Professioneller Abriss von Hochhäusern und Bürokomplexen mit modernster Technik.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/hochbau-abriss-bielefeld',
  },
};

export default function HochbauAbrissBielefeld() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-oxford-blue via-gray-800 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-cerulean/20 backdrop-blur-lg rounded-full mb-4">
                <Icon name="cube" size={16} className="text-cerulean mr-2" />
                <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
                  Professioneller Hochbau Abriss
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Hochbau Abriss Bielefeld - Wenn's hoch hinaus geht, kommen wir runter
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Letzte Woche ham wir das alte Finanzamt am Niederwall plattgemacht - 12 Etagen in nur 4 Wochen.
                Kennen Sie noch das hässliche Bürogebäude an der Detmolder Straße? Das war auch wir. Bei <strong>Hochbau
                Abriss in Bielefeld</strong> sind wir die Profis wenns um große Kisten geht. Von der alten Sparkasse
                am Jahnplatz bis zum Uni-Hochhaus - wir haben schon alles runtergeholt was höher als drei Stockwerke ist.
                Die Jungs vom Bauamt kennen uns schon beim Namen, so oft wie wir da für Genehmigungen sind.
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="bulldozer" size={28} className="text-cerulean mr-3" />
                Hochhaus-Abbruch
              </h2>

              <p className="text-white/80 mb-6">
                Ein Hochhaus abreißen ist nicht wie'n Gartenhaus umhauen. Da brauchste schon ordentlich Technik und
                Know-how. Unser Liebherr R960 kommt bis 35 Meter hoch - das reicht für die meisten Bürotürme hier
                in Bielefeld. Wir arbeiten uns immer von oben nach unten vor, Stock für Stock. So bleibt alles
                kontrollierbar und die Nachbarn kriegen keinen Herzinfakt. Grade erst haben wir das alte
                Verwaltungsgebäude von Dr. Oetker in Brackwede abgerissen - direkt neben der Produktionshalle wo
                noch gearbeitet wurde. Sowas macht nicht jeder, aber wir habens drauf.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="home" size={28} className="text-cerulean mr-3" />
                Bürogebäude-Abriss
              </h2>

              <p className="text-white/80 mb-6">
                Die ganzen alten Büroklötze aus den 70ern müssen langsam alle weg. Asbest in den Decken, PCB in
                den Fugen, und energetisch sind die auch für'n Arsch. Wir machen das komplett - erst Schadstoffsanierung,
                dann Entkernung, und dann kommt der Bagger. Das alte Arbeitsamt in Heepen haben wir letzten Sommer
                gemacht. 8.000 Quadratmeter Bürofläche, alles voll mit Asbest. Hat 6 Wochen gedauert, aber jetzt
                steht da'n schicker Neubau. Beim <strong>Bürogebäude-Abriss in Bielefeld</strong> müssen Sie auf
                jeden Fall mit den richtigen Leuten arbeiten - sonst haben Sie nachher nur Ärger mit dem Umweltamt.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="shield" size={28} className="text-cerulean mr-3" />
                Industriehochbau-Rückbau
              </h2>

              <p className="text-white/80 mb-6">
                Industriehochbauten sind nochmal ne andere Hausnummer. Da haste oft noch alte Maschinen drin,
                Öltanks im Keller, und wer weiß was für Chemikalien in den Leitungen. Die alte Textilfabrik in
                Oldentrup war so'n Fall - 6 Stockwerke voll mit alten Webmaschinen und überall Schmieröl. Wir
                haben erst mal alles ausgeräumt, die Tanks saniert, und dann das ganze Ding rückgebaut. 15.000
                Tonnen Bauschutt, aber 90% davon konnten wir recyceln. Der Beton wird geschreddert und kommt
                als Schotter wieder auf Bielefelder Baustellen. Nachhaltigkeit ist uns wichtig - auch beim Abriss.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="truck" size={28} className="text-cerulean mr-3" />
                Teilabriss und Kernsanierung
              </h2>

              <p className="text-white/80 mb-6">
                Manchmal soll nicht alles weg, sondern nur Teile. Grade bei denkmalgeschützten Gebäuden in der
                Bielefelder Altstadt ist das oft der Fall. Die Fassade muss bleiben, aber innen wird alles neu
                gemacht. Oder es sollen nur ein paar Stockwerke runter - hatten wir beim alten Stadtwerke-Gebäude.
                Die oberen drei Etagen mussten weg, der Rest sollte bleiben. Mit unseren Betonsägen und präzisen
                Abbruchtechniken kriegen wir das millimetergenau hin. Kein Riss in den Stockwerken die bleiben
                sollen, versprochen.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="warning" size={28} className="text-cerulean mr-3" />
                Sprengvorbereitung
              </h2>

              <p className="text-white/80 mb-6">
                Sprengungen machen wir selbst nicht - dafür gibt's Spezialisten. Aber die Vorbereitung, das ist
                unser Job. Das ganze Gebäude muss entkernt werden, alle tragenden Teile müssen freigelegt sein,
                und die Sprengmeister müssen genau wissen wo was ist. Beim alten Telekom-Turm in Sennestadt haben
                wir die komplette Vorbereitung gemacht. 8 Wochen Arbeit, damit die Sprengung dann in 8 Sekunden
                durch war. Is schon verrückt, aber manchmal ist Sprengen die einzige Option - besonders wenn's
                eng wird mit den Nachbargebäuden.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="cube" size={28} className="text-cerulean mr-3" />
                Betonsanierung
              </h2>

              <p className="text-white/80 mb-6">
                Alter Beton ist oft marode. Bewehrung rostet, Beton platzt ab, und irgendwann wirds gefährlich.
                Bei vielen Hochbauten in Bielefeld müssen wir erst mal den Zustand checken bevor wir abreißen.
                Manchmal reicht auch ne Sanierung - neue Bewehrung einbauen, Beton erneuern, und das Ding hält
                nochmal 50 Jahre. Aber wenn der Beton durchgerostet ist wie beim alten Parkhaus am Kesselbrink,
                dann hilft nur noch abreißen. Wir haben die Technik um das sauber zu beurteilen - Ultraschall,
                Kernbohrungen, alles was man braucht.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="users" size={28} className="text-cerulean mr-3" />
                Projektmanagement
              </h2>

              <p className="text-white/80 mb-6">
                So'n Hochbau-Abriss ist wie'n Uhrwerk - alles muss perfekt ineinandergreifen. Erst die Genehmigungen
                vom Bauamt, dann die Anwohner informieren, Verkehrssperrungen beantragen, Strom und Gas abklemmen
                lassen, Container organisieren, Maschinen anliefern... Das ist'n Fulltime-Job nur die Planung.
                Unser Projektleiter Klaus macht das seit 20 Jahren - der kennt jeden beim Amt und weiß genau was
                wann gemacht werden muss. Bei großen Projekten sind wir oft ein halbes Jahr nur mit Planung
                beschäftigt bevor der erste Bagger anrollt.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="trash" size={28} className="text-cerulean mr-3" />
                Entsorgung und Recycling
              </h2>

              <p className="text-white/80 mb-6">
                Bei nem Hochhaus kommen schnell mal 20.000 Tonnen Bauschutt zusammen. Das muss alles sortiert
                und entsorgt werden. Metall kommt zum Schrotthändler, Holz wird verheizt oder zu Spanplatten,
                Beton wird geschreddert, und der ganze Sondermüll muss fachgerecht entsorgt werden. Wir haben
                eigene Container und fahren täglich zur Deponie. Die kurzen Wege hier in Bielefeld helfen -
                die Recyclinghöfe in Heepen und Brake sind nur 15 Minuten weg. Das spart Zeit und Spritkosten,
                und das geben wir an unsere Kunden weiter.
              </p>

              {/* Local Area Info */}
              <div className="bg-cerulean/10 rounded-2xl p-6 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hochbau-Projekte in Bielefeld und Umgebung
                </h3>
                <p className="text-white/80 mb-4">
                  Wir sind überall in OWL unterwegs, aber besonders viel zu tun haben wir in:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Büroviertel:</h4>
                    <ul className="text-white/70 space-y-1">
                      <li>• Niederwall & Oberntorwall</li>
                      <li>• Detmolder Straße Business District</li>
                      <li>• Jahnplatz & Kesselbrink</li>
                      <li>• Universitätsviertel</li>
                      <li>• Ravensberger Park</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Industriegebiete:</h4>
                    <ul className="text-white/70 space-y-1">
                      <li>• Oldentrup Industriepark</li>
                      <li>• Brackwede Gewerbegebiet</li>
                      <li>• Heepen Ost</li>
                      <li>• Sennestadt Zentrum</li>
                      <li>• Eckendorfer Straße</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="my-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Häufige Fragen zum Hochbau Abriss in Bielefeld
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Was kostet der Abriss von nem Hochhaus?
                    </h3>
                    <p className="text-white/70">
                      Das hängt von der Größe ab. Ein 6-stöckiges Bürogebäude liegt so bei 200.000 bis
                      500.000 Euro, je nachdem wieviel Schadstoffe drin sind. Bei größeren Projekten
                      wirds natürlich teurer. Wir machen Ihnen nach ner Besichtigung ein genaues Angebot.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Wie lange dauert so'n Hochbau-Abriss?
                    </h3>
                    <p className="text-white/70">
                      Ein normales Bürogebäude mit 5-8 Stockwerken braucht 4-8 Wochen. Wenn noch
                      Schadstoffe saniert werden müssen, dauerts länger. Die reine Abrisszeit ist
                      oft kürzer als die Vorbereitung - Genehmigungen und so können Monate dauern.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Können Sie auch neben bewohnten Gebäuden abreißen?
                    </h3>
                    <p className="text-white/70">
                      Klar, machen wir ständig. Mit unseren erschütterungsarmen Verfahren und
                      Staubschutzwänden kriegen die Nachbarn fast nix mit. Wir hatten noch nie
                      Probleme mit Schäden an Nachbargebäuden - dafür sind wir zu vorsichtig.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Was passiert mit dem ganzen Bauschutt?
                    </h3>
                    <p className="text-white/70">
                      90% wird recycelt. Beton wird zu Schotter, Metall eingeschmolzen, Holz verheizt.
                      Nur Sondermüll wie Asbest muss auf spezielle Deponien. Wir dokumentieren alles
                      genau - Sie kriegen alle Entsorgungsnachweise für Ihre Unterlagen.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl p-8 mt-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Hochbau Abriss in Bielefeld? Rufen Sie uns an!
                </h2>
                <p className="text-white/80 mb-6">
                  Egal ob Büroturm, Industriehochbau oder Wohnhochhaus - wir reißen alles ab was
                  höher als drei Stockwerke ist. 25 Jahre Erfahrung in Bielefeld und OWL, alle
                  Zertifikate die man braucht, und die beste Technik auf dem Markt. Rufen Sie an
                  oder schreiben Sie uns - wir machen Ihnen ein faires Angebot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="tel:+491748083023"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cerulean/30 transition-all"
                  >
                    <Icon name="phone" size={20} className="mr-3" />
                    24/7 Notdienst: 0174 8083023
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    <Icon name="mail" size={20} className="mr-3" />
                    Kostenloses Angebot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}