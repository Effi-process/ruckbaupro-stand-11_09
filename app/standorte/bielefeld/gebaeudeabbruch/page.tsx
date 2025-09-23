import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/app/components/Icon';
import FloatingElements from '@/app/components/FloatingElements';
import FooterWithMarquee from '@/app/components/FooterWithMarquee';

export const metadata: Metadata = {
  title: 'Gebäudeabbruch Bielefeld - Professioneller Abbruch mehrstöckiger Gebäude | RückbauPRO',
  description: 'Gebäudeabbruch in Bielefeld ✓ Spezialisiert auf mehrstöckige Gebäude ✓ 24h Notdienst ✓ Kostenlose Beratung ✓ 25+ Jahre Erfahrung. Jetzt anrufen!',
  keywords: 'Gebäudeabbruch Bielefeld, Abbruch mehrstöckiger Gebäude, Abriss Bielefeld, Hochhausabbruch, Industrieabbruch',
  openGraph: {
    title: 'Gebäudeabbruch Bielefeld - RückbauPRO',
    description: 'Ihr Spezialist für Gebäudeabbruch in Bielefeld. Professioneller Abbruch mehrstöckiger Gebäude mit modernster Technik.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/standorte/bielefeld/gebaeudeabbruch',
  },
};

export default function GebaeudeabbruchBielefeld() {
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
                  Professioneller Gebäudeabbruch
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Gebäudeabbruch Bielefeld - Komplettservice aus einer Hand
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Letzten Sommer haben wir das alte Bürogebäude am Jahnplatz abgerissen - 8 Stockwerke in nur 3 Wochen.
                Wenn Sie auch vor so einem Projekt stehen, sind Sie bei uns genau richtig. Unser Team für <strong>Gebäudeabbruch
                in Bielefeld</strong> hat schon alles gesehen: vom kleinen Wohnhaus in Brackwede bis zum Industriekomplex in
                Oldentrup. Wir wissen genau, was die Stadt Bielefeld für Genehmigungen braucht und arbeiten eng mit dem
                Bauamt zusammen.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-cerulean">500+</div>
                <div className="text-sm text-white/70">Gebäude abgerissen</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400">24h</div>
                <div className="text-sm text-white/70">Notdienst</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange">100%</div>
                <div className="text-sm text-white/70">Recycling-Quote</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-sm text-white/70">Jahre Erfahrung</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="bulldozer" size={28} className="text-cerulean mr-3" />
                Abbruch mehrstöckiger Gebäude
              </h2>

              <p className="text-white/80 mb-6">
                Mehrstöckige Gebäude brauchen besondere Aufmerksamkeit beim Abriss. Wir haben gerade erst das alte
                Verwaltungsgebäude der Sparkasse in der Innenstadt abgerissen - direkt neben dem laufenden Betrieb.
                Sowas geht nur mit der richtigen Planung und Technik. Unsere Hochreach-Bagger kommen bis 30 Meter
                hoch, und wir arbeiten immer von oben nach unten. So bleibt alles sicher und die Nachbarn werden
                nicht verrückt vom Lärm.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="shield" size={28} className="text-cerulean mr-3" />
                Industrieabbruch
              </h2>

              <p className="text-white/80 mb-6">
                Die alten Fabrikhallen in Heepen und Jöllenbeck kennen wir wie unsere Westentasche. Beim
                <strong>Industrieabbruch in Bielefeld</strong> kommt es nicht nur auf große Maschinen an - man muss
                auch wissen, wo früher was produziert wurde. Asbest, PCB, alte Öltanks - wir checken alles vorher ab
                und entsorgen fachgerecht. Die Firma Gildemeister haben wir letztes Jahr komplett zurückgebaut,
                inklusive der ganzen Fundamentarbeiten.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="home" size={28} className="text-cerulean mr-3" />
                Entkernung
              </h2>

              <p className="text-white/80 mb-6">
                Manchmal muss nicht das ganze Gebäude weg, sondern nur das Innenleben raus. Grade in der Altstadt
                von Bielefeld gibts viele denkmalgeschützte Häuser, wo nur entkernt werden darf. Wir räumen alles
                raus bis auf die tragenden Wände - sauber und ordentlich. Das alte Stadttheater haben wir so für
                die Sanierung vorbereitet. Jetzt ist da ein schickes Bürogebäude drin, aber von außen siehts noch
                aus wie 1890.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="truck" size={28} className="text-cerulean mr-3" />
                Erdarbeiten
              </h2>

              <p className="text-white/80 mb-6">
                Nach dem Abriss kommt oft der Aushub. Für die neue Tiefgarage am Kesselbrink haben wir 15.000
                Kubikmeter Erde bewegt - in nur zwei Wochen. Unsere Bagger und LKWs sind jeden Tag im Einsatz,
                von Schildesche bis Sennestadt. Die Bodenbeschaffenheit in Bielefeld kennen wir genau - wo Lehm
                ist, wo Sand, und wo man mit Grundwasser rechnen muss. Das spart Zeit und Geld bei Ihrem Projekt.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="warning" size={28} className="text-cerulean mr-3" />
                Schadstoffsanierung
              </h2>

              <p className="text-white/80 mb-6">
                In vielen älteren Gebäuden in Bielefeld stecken noch Schadstoffe drin. Besonders in den 70er-Jahre-Bauten
                in Baumheide und Sieker findet man oft Asbest in den Deckenplatten. Wir sind TRGS 519 zertifiziert
                und kümmern uns drum - sicher und nach allen Vorschriften. Die alte Post am Jahnplatz hatte PCB
                in den Fugen, das haben wir komplett saniert bevor der Abriss losging. Sowas muss man wissen und
                richtig machen.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="cube" size={28} className="text-cerulean mr-3" />
                Betonarbeiten
              </h2>

              <p className="text-white/80 mb-6">
                Manchmal müssen nur einzelne Betonteile weg - eine Wand hier, eine Decke da. Mit unseren
                Betonsägen und Kernbohrgeräten gehts präzise und staubarm. Im Universitätsklinikum haben wir
                neue Durchbrüche für die Lüftungsanlage gemacht, während nebenan operiert wurde. Sowas braucht
                Fingerspitzengefühl und die richtige Technik. Diamantseilsägen, Wandsägen, Kernbohrungen bis
                80cm Durchmesser - wir haben alles da.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="trash" size={28} className="text-cerulean mr-3" />
                Entsorgung
              </h2>

              <p className="text-white/80 mb-6">
                Der ganze Bauschutt muss ja irgendwo hin. Wir sortieren direkt auf der Baustelle - Metall, Holz,
                Beton, alles getrennt. Das meiste wird recycelt und kommt als Schotter wieder auf Bielefelds
                Baustellen. Unsere Container stehen überall in der Stadt, und wir fahren auch kleine Mengen ab.
                Die Entsorgung läuft über zertifizierte Anlagen hier in der Region - kurze Wege, faire Preise.
              </p>

              {/* Local Area Info */}
              <div className="bg-cerulean/10 rounded-2xl p-6 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Unsere Einsatzgebiete in Bielefeld
                </h3>
                <p className="text-white/80 mb-4">
                  Wir sind in ganz Bielefeld und Umgebung für Sie da. Besonders oft arbeiten wir in:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Stadtteile:</h4>
                    <ul className="text-white/70 space-y-1">
                      <li>• Bielefeld-Mitte & Altstadt</li>
                      <li>• Brackwede & Senne</li>
                      <li>• Heepen & Oldentrup</li>
                      <li>• Jöllenbeck & Theesen</li>
                      <li>• Schildesche & Gadderbaum</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Industriegebiete:</h4>
                    <ul className="text-white/70 space-y-1">
                      <li>• Gewerbegebiet Eckendorfer Straße</li>
                      <li>• Industriegebiet Oldentrup</li>
                      <li>• Businesspark Bielefeld</li>
                      <li>• Gewerbepark Herford/Bielefeld</li>
                      <li>• Industriestraße Brackwede</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="my-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Häufige Fragen zum Gebäudeabbruch in Bielefeld
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Was kostet ein Gebäudeabbruch in Bielefeld?
                    </h3>
                    <p className="text-white/70">
                      Das hängt von der Größe ab. Ein kleines Einfamilienhaus kostet meist zwischen 10.000 und
                      25.000 Euro. Bei mehrstöckigen Gebäuden wirds mehr - da rechnen wir nach Kubikmetern.
                      Wir machen Ihnen gerne ein kostenloses Angebot nach der Besichtigung.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Brauche ich eine Genehmigung für den Abriss?
                    </h3>
                    <p className="text-white/70">
                      Ja, in Bielefeld brauchen Sie immer eine Abbruchgenehmigung vom Bauamt. Wir kümmern uns
                      um alle Papiere und kennen die Ansprechpartner. Das dauert normalerweise 4-6 Wochen.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Wie lange dauert ein Gebäudeabbruch?
                    </h3>
                    <p className="text-white/70">
                      Ein normales Wohnhaus ist in 3-5 Tagen weg. Mehrstöckige Gebäude brauchen 2-4 Wochen,
                      je nach Größe und Lage. Wenn noch Schadstoffe drin sind, dauerts länger.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl p-8 mt-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Jetzt Gebäudeabbruch in Bielefeld anfragen
                </h2>
                <p className="text-white/80 mb-6">
                  Egal ob Wohnhaus, Bürogebäude oder Industriehalle - wir machen das für Sie.
                  Rufen Sie uns an oder schreiben Sie uns. Wir kommen vorbei, schauen uns alles an
                  und machen Ihnen ein faires Angebot. Seit 25 Jahren sind wir in Bielefeld der
                  Partner für professionellen Gebäudeabbruch.
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