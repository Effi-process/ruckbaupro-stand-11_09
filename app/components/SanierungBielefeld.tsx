'use client';

import Link from 'next/link';
import Icon from './Icon';
import Image from 'next/image';
import KontaktformularMitBild from './KontaktformularMitBild';

export default function SanierungBielefeld() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 - Hauptüberschrift mit Ziel-Keyword */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
            Sanierung Bielefeld - Professionelle Gebäudesanierung vom Meisterbetrieb
          </h1>

          {/* Einleitung mit lokalem Bezug */}
          <div className="prose prose-lg max-w-none text-white/90 mb-12">
            <p className="text-xl leading-relaxed mb-6 text-white/90">
              Letzten Winter haben wir die komplette Sanierung vom alten Postamt am Jahnplatz durchgeführt -
              von der Asbestsanierung bis zur finalen Übergabe. Wenn Gebäude in Bielefeld saniert werden müssen,
              sind wir seit über 15 Jahren der erste Ansprechpartner. Ob Altbausanierung in der Altstadt,
              Industriesanierung in Oldentrup oder Wohnhaussanierung in Schildesche - wir kennen jede Ecke
              unserer Stadt und wissen genau, welche speziellen Herausforderungen jedes Viertel mit sich bringt.
            </p>
          </div>

          {/* Abrissunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Abrissunternehmen</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-4 text-white/90">
                Als führendes Abrissunternehmen in Bielefeld übernehmen wir alles vom kleinen Gartenhäuschen
                bis zum mehrstöckigen Industriekomplex. Letzte Woche haben wir die alte Textilfabrik an der
                Heeper Straße abgerissen - 8000 Quadratmeter in nur 10 Tagen, komplett sortiert und entsorgt.
                Unsere Spezialmaschinen mit Abbruchzangen und Sortiergreifern machen das möglich, ohne dass
                die Nachbarschaft unnötig belastet wird.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Kontrollierter Rückbau:</strong> Stockwerk für Stockwerk, sauber getrennt
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Sprengungen:</strong> Mit allen Genehmigungen und Sicherheitsvorkehrungen
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Maschinenabriss:</strong> Modernste Technik für schnelle Ergebnisse
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Handabriss:</strong> Wo Präzision gefragt ist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schadstoffsanierung Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Schadstoffsanierung</h2>
            <p className="text-lg mb-4 text-white/90">
              Bevor überhaupt saniert werden kann, müssen erstmal alle Schadstoffe raus. Gerade hier in
              Bielefeld mit den ganzen Nachkriegsbauten ist das ein riesen Thema. Asbest in den Decken,
              PCB in den Fugen, PAK im Kleber - wir finden alles und entfernen es fachgerecht. Die
              Universität Bielefeld? Da haben wir letztes Jahr 3 komplette Gebäude saniert - 12.000
              Quadratmeter Asbestplatten entfernt und entsorgt.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="shield" size={20} className="mr-2 text-green-400" />
                  Asbestsanierung
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Schwach gebundener Asbest</li>
                  <li>• Fest gebundene Asbestprodukte</li>
                  <li>• Spritzasbest-Entfernung</li>
                  <li>• Nachtkissen-Dämmung</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="alert-triangle" size={20} className="mr-2 text-yellow-400" />
                  Weitere Schadstoffe
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• PCB-haltige Fugenmassen</li>
                  <li>• KMF (alte Mineralwolle)</li>
                  <li>• PAK (Teerhaltige Stoffe)</li>
                  <li>• Schimmelpilzsanierung</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="clipboard-check" size={20} className="mr-2 text-blue-400" />
                  Dokumentation
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• TRGS 519 konform</li>
                  <li>• Freimessungen</li>
                  <li>• Entsorgungsnachweise</li>
                  <li>• Behördliche Abnahme</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gebäudesanierungsservice Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Gebäudesanierungsservice</h2>
            <div className="bg-cerulean/20 rounded-xl p-6 border-l-4 border-cerulean">
              <p className="text-lg mb-4 text-white/90">
                Unser Gebäudesanierungsservice geht weit über normales Renovieren hinaus. Wir machen aus
                maroden Gebäuden wieder funktionierende Immobilien. Das alte Krankenhaus in Bethel?
                Komplett von uns saniert und jetzt ein modernes Bürogebäude. Dabei kümmern wir uns um alles:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-bold mb-3 text-white">Kernsanierung</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Komplettentkernung bis auf die Rohbausubstanz
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Statische Ertüchtigung und Verstärkung
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Neue Haustechnik (Elektro, Sanitär, Heizung)
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Energetische Modernisierung nach EnEV
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-white">Teilsanierung</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Fassadensanierung und Dämmung
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Dachsanierung inkl. Asbestentsorgung
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Kellersanierung und Trockenlegung
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Brandschutzsanierung nach aktuellen Vorschriften
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bauunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Bauunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Als komplettes Bauunternehmen übernehmen wir nicht nur den Abriss und die Sanierung, sondern
              auch alle weiteren Bauarbeiten. Unsere 45 Mitarbeiter sind Spezialisten in ihren Bereichen -
              vom Maurer über den Zimmermann bis zum Fliesenleger. So bekommen Sie alles aus einer Hand,
              ohne nervige Abstimmungen zwischen verschiedenen Firmen.
            </p>
            <div className="bg-gradient-to-r from-indigo-dye/20 to-cerulean/20 rounded-xl p-6 backdrop-blur-lg">
              <h3 className="font-bold mb-4 text-white text-xl">Unsere Bauleistungen:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Maurerarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Betonarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Zimmerarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Dachdeckerarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Putz- und Stuckarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Trockenbau
                </div>
              </div>
            </div>
          </div>

          {/* Recyclingunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Recyclingunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Nachhaltigkeit ist uns wichtig - deswegen recyclen wir, was geht. Unser eigenes
              Recyclingunternehmen sortiert und bereitet Baumaterialien auf. Der Betonschutt vom
              letzten Abriss? Wird zu Recycling-Schotter für neue Bauprojekte. Altmetall? Geht
              direkt zum Schrotthändler. So sparen unsere Kunden Entsorgungskosten und schonen
              gleichzeitig die Umwelt.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-sm text-white/80">Recyclingquote bei Beton</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-sm text-white/80">Metallverwertung</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-sm text-white/80">Holzrecycling</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">CO₂</div>
                <div className="text-sm text-white/80">Neutral durch Recycling</div>
              </div>
            </div>
          </div>

          {/* Spezielle Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Spezialleistungen in Bielefeld</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="home" size={24} className="mr-3 text-cerulean" />
                  Altbausanierung
                </h3>
                <p className="text-white/80 mb-3">
                  Die vielen Altbauten in der Bielefelder Altstadt und am Siegfriedplatz sind unsere
                  Spezialität. Wir erhalten den Charme, während wir moderne Standards einbauen:
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Erhalt historischer Fassaden</li>
                  <li>• Denkmalschutzgerechte Sanierung</li>
                  <li>• Stuck-Restaurierung</li>
                  <li>• Originalgetreue Fenster</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="building" size={24} className="mr-3 text-cerulean" />
                  Industriesanierung
                </h3>
                <p className="text-white/80 mb-3">
                  Die alten Industriegebiete in Brackwede und Heepen verwandeln wir in moderne
                  Gewerbeflächen:
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Hallensanierung und Umbau</li>
                  <li>• Bodensanierung bei Altlasten</li>
                  <li>• Neue Industrieböden</li>
                  <li>• Kranbahn-Modernisierung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lokaler Bezug */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ihre Sanierungsexperten für ganz OWL</h2>
            <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-xl p-8 backdrop-blur-lg border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Wir sind nicht nur in Bielefeld aktiv, sondern in ganz Ostwestfalen-Lippe. Von unserem
                Standort in Bielefeld aus erreichen wir schnell alle Städte der Region:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-bold text-cerulean">Bielefeld</div>
                  <div className="text-sm text-white/70">Alle Stadtteile</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white">Gütersloh</div>
                  <div className="text-sm text-white/70">15 Min Anfahrt</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white">Herford</div>
                  <div className="text-sm text-white/70">20 Min Anfahrt</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white">Paderborn</div>
                  <div className="text-sm text-white/70">35 Min Anfahrt</div>
                </div>
              </div>
              <p className="text-lg text-white/90">
                Mit 15 Jahren Erfahrung und über 2000 abgeschlossenen Projekten kennen wir jede
                Herausforderung. Egal ob es die lehmigen Böden am Teutoburger Wald sind oder die
                speziellen Anforderungen der Bielefelder Bauordnung - wir haben für alles eine Lösung.
              </p>
            </div>
          </div>

          {/* Ablauf */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">So läuft Ihre Sanierung ab</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Kostenlose Erstberatung",
                  description: "Wir kommen vorbei, schauen uns alles an und besprechen Ihre Wünsche. Natürlich kostenlos und unverbindlich."
                },
                {
                  step: 2,
                  title: "Schadstoffprüfung",
                  description: "Bevor es losgeht, checken wir auf Asbest, PCB und andere Schadstoffe. Sicherheit geht vor!"
                },
                {
                  step: 3,
                  title: "Detailliertes Angebot",
                  description: "Sie bekommen ein transparentes Festpreisangebot. Keine versteckten Kosten, keine bösen Überraschungen."
                },
                {
                  step: 4,
                  title: "Genehmigungen einholen",
                  description: "Wir kümmern uns um alle Behördengänge - Abrissgenehmigung, Entsorgungsnachweise, alles."
                },
                {
                  step: 5,
                  title: "Durchführung",
                  description: "Professionell, schnell und sauber. Mit täglicher Baustellenreinigung und Rücksicht auf die Nachbarn."
                },
                {
                  step: 6,
                  title: "Abnahme & Dokumentation",
                  description: "Besenreine Übergabe mit kompletter Dokumentation. Alle Nachweise für Ihre Unterlagen."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="w-10 h-10 bg-cerulean rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preise und Kosten */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Faire Preise für Ihre Sanierung</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Jede Sanierung ist anders, deswegen gibt's keine Pauschalpreise von der Stange. Aber damit
                Sie eine Vorstellung haben, hier ein paar Richtwerte aus unseren letzten Projekten in Bielefeld:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Beispiel Einfamilienhaus (150m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Kernsanierung komplett: ab 60.000€</li>
                    <li>• Dachsanierung mit Asbest: ab 15.000€</li>
                    <li>• Fassadensanierung: ab 12.000€</li>
                    <li>• Schadstoffsanierung: ab 8.000€</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Beispiel Gewerbeimmobilie (500m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Komplettabriss: ab 25.000€</li>
                    <li>• Entkernung: ab 15.000€</li>
                    <li>• Asbestsanierung: ab 20.000€</li>
                    <li>• Industriebodensanierung: ab 30.000€</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-white/70 mt-6 italic">
                *Alle Preise sind Richtwerte und abhängig vom tatsächlichen Aufwand. Gerne erstellen wir
                Ihnen ein individuelles Angebot nach Besichtigung.
              </p>
            </div>
          </div>

          {/* Warum wir */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Darum sind wir die Richtigen für Ihre Sanierung</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="award" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Zertifiziert & Versichert</h3>
                <p className="text-sm text-white/70">
                  TRGS 519 zertifiziert, alle Genehmigungen, vollversichert bis 10 Mio Euro
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="users" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">45 Experten im Team</h3>
                <p className="text-sm text-white/70">
                  Festangestellte Profis, keine Subunternehmer, alle aus der Region
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="clock" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">24/7 Notdienst</h3>
                <p className="text-sm text-white/70">
                  Bei Wasserschaden, Brandschaden oder Sturmschaden sofort zur Stelle
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cerulean to-indigo-dye rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Jetzt Ihre Sanierung in Bielefeld planen!
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Rufen Sie uns an oder schreiben Sie uns - wir melden uns noch heute bei Ihnen und
              besprechen alles Weitere. Kostenlos und unverbindlich!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+491748083023"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-oxford-blue rounded-xl font-bold text-lg transition-colors"
              >
                <Icon name="phone" size={24} className="mr-2" />
                Jetzt anrufen: 0174 8083023
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-oxford-blue hover:bg-oxford-blue/90 text-white rounded-xl font-bold text-lg transition-colors border-2 border-white/20"
              >
                <Icon name="mail" size={24} className="mr-2" />
                Kostenlose Beratung
              </Link>
            </div>
          </div>

          {/* Schema.org Daten für lokale SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "RückbauPRO Bielefeld - Sanierung",
                "description": "Professionelle Gebäudesanierung in Bielefeld und OWL. Komplettsanierung, Kernsanierung, Schadstoffsanierung vom Meisterbetrieb.",
                "url": "https://www.rueckbaupro.de",
                "telephone": "+491748083023",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bielefeld",
                  "addressRegion": "NRW",
                  "postalCode": "33602",
                  "addressCountry": "DE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 52.0302,
                  "longitude": 8.5325
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "areaServed": [
                  "Bielefeld", "Bielefeld-Mitte", "Brackwede", "Schildesche", "Sennestadt",
                  "Oldentrup", "Gadderbaum", "Jöllenbeck", "Heepen", "Stieghorst",
                  "Gütersloh", "Herford", "Paderborn", "Bad Oeynhausen", "Minden"
                ]
              })
            }}
          />
        </div>
      </section>

      {/* Kontaktformular mit Bild */}
      <KontaktformularMitBild />
    </>
  );
}