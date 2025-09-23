'use client';

import Link from 'next/link';
import Icon from './Icon';

export default function SchadstoffsanierungBielefeld() {
  return (
    <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 - Hauptüberschrift mit Ziel-Keyword */}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
          Schadstoffsanierung Bielefeld - Ihr Partner für sichere Gebäudesanierung
        </h1>

        {/* Einleitung mit lokalem Bezug */}
        <div className="prose prose-lg max-w-none text-white/90 mb-12">
          <p className="text-xl leading-relaxed mb-6 text-white/90">
            Letzten Sommer haben wir über 200 Gebäude in Bielefeld-Mitte und Brackwede von Schadstoffen befreit.
            Ob alte Industriehallen am Ostwestfalendamm oder Wohnhäuser in Schildesche - wenn es um professionelle
            Schadstoffsanierung in Bielefeld geht, kennen wir jeden Stadtteil und jede Herausforderung. Seit 15 Jahren
            sind wir der verlässliche Partner für Hausbesitzer, Verwaltungen und Bauunternehmen in ganz OWL.
          </p>
        </div>

        {/* Betonbauunternehmen Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Betonbauunternehmen</h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <p className="text-lg mb-4 text-white/90">
              Als zertifiziertes Betonbauunternehmen in Bielefeld kümmern wir uns nicht nur um den Betonabbruch,
              sondern bereiten auch alles für Neubauten vor. Letzte Woche erst haben wir die alte Sparkassen-Filiale
              am Jahnplatz komplett entkernt - inklusive der massiven Betonwände aus den 70ern. Mit unseren
              Diamantsägen schaffen wir präzise Durchbrüche ohne die Statik zu gefährden.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <Icon name="check" size={20} className="text-green-400 mr-3 mt-1" />
                <div className="text-white/90">
                  <strong className="text-white">Betonabbruch:</strong> Kontrollierter Rückbau mit modernster Technik
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="check" size={20} className="text-green-400 mr-3 mt-1" />
                <div className="text-white/90">
                  <strong className="text-white">Durchbrüche:</strong> Millimetergenaue Öffnungen für neue Raumkonzepte
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Erdbauunternehmen Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Erdbauunternehmen</h2>
          <p className="text-lg mb-4 text-white/90">
            Nach dem Abriss kommt oft der Erdbau - und da kennen wir uns aus! Besonders hier in Bielefeld mit
            dem lehmigen Boden am Teutoburger Wald. Wir bereiten nicht nur Landschaftsbaustellen vor, sondern
            kümmern uns auch um die komplette Räumung und Rodung. Das alte Fabrikgelände an der Eckendorfer Straße?
            Das waren wir - 3 Hektar in nur 2 Wochen komplett geräumt und planiert.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-white/90">
              <Icon name="check" size={16} className="text-green-400 mr-2" />
              Vorbereitung von Landschaftsbaustellen
            </li>
            <li className="flex items-center text-white/90">
              <Icon name="check" size={16} className="text-green-400 mr-2" />
              Räumung und Rodung inkl. Wurzelentfernung
            </li>
            <li className="flex items-center text-white/90">
              <Icon name="check" size={16} className="text-green-400 mr-2" />
              Bodenaustausch bei Kontaminationen
            </li>
          </ul>
        </div>

        {/* Bauunternehmen Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Bauunternehmen</h2>
          <div className="bg-cerulean/20 rounded-xl p-6 border-l-4 border-cerulean">
            <p className="text-lg mb-4 text-white/90">
              Wir sind mehr als nur ein Abrissunternehmen - wir sind ein komplettes Bauunternehmen mit allem drum
              und dran. Von der ersten Begehung bis zur besenreinen Übergabe. Unsere Jungs kennen sich aus mit:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div>
                <h3 className="font-bold mb-2 text-white">Komplettabriss</h3>
                <p className="text-sm text-white/80">Ganze Gebäude verschwinden - sauber und termingerecht</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-white">Selektiver Abbruch</h3>
                <p className="text-sm text-white/80">Nur das weg, was weg muss - der Rest bleibt stehen</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-white">Entkernung</h3>
                <p className="text-sm text-white/80">Komplett- oder Teilentkernung je nach Bedarf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Asbestuntersuchungsdienst Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Asbestuntersuchungsdienst</h2>
          <p className="text-lg mb-4 text-white/90">
            Bevor wir loslegen, muss erstmal klar sein, womit wir es zu tun haben. Unser zertifizierter
            Asbestuntersuchungsdienst checkt jede Ecke. Gerade in den ganzen 60er und 70er Jahre Bauten hier
            in Bielefeld - vom Uni-Hauptgebäude bis zu den Wohnblocks in Sennestadt - findet sich oft mehr
            Asbest als man denkt. Wir machen die Freimessung und kümmern uns um alle Behördengänge.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/10 border border-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-white">TRGS519-konforme Arbeiten</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Asbestmaterialentfernung nach Vorschrift</li>
                <li>• Oberflächenreinigung mit Spezialverfahren</li>
                <li>• Freimessung durch akkreditiertes Labor</li>
                <li>• Fachgerechte Entsorgung mit Nachweis</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2 text-white">Weitere Schadstoffe</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• PCB-Sanierung (alte Fugenmassen)</li>
                <li>• KMF-Entfernung (Mineralwolle)</li>
                <li>• Schimmelpilzsanierung</li>
                <li>• Gefahrstoff-Entsorgung aller Art</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Entsorgungsunternehmen Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Entsorgungsunternehmen</h2>
          <p className="text-lg mb-4 text-white/90">
            Die Entsorgung ist oft der kniffligste Teil - aber nicht für uns! Wir haben alle Genehmigungen und
            arbeiten mit zertifizierten Deponien zusammen. Egal ob Glaswolle-Entsorgung, Schrottumschlag oder
            normale Schutt-Aufräumarbeiten - wir dokumentieren alles lückenlos. Das Dokumentationsverfahren
            übernehmen wir komplett, inklusive Anmeldung von Schadstoffen bei der Stadt Bielefeld.
          </p>
        </div>

        {/* Umfassende Dienstleistungen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Unsere Leistungen im Detail</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-cerulean mb-3">Abbrucharbeiten</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Abbruch von mehrstöckigen Gebäuden</li>
                <li>• Abriss von Hochbauten</li>
                <li>• Industrieabbruch</li>
                <li>• Innenabbruch</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cerulean mb-3">Sanierungsarbeiten</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Schadstoffsanierung</li>
                <li>• Komplettsanierung</li>
                <li>• Teilsanierung</li>
                <li>• Entstaubung und Reinigung</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cerulean mb-3">Service & Verwaltung</h3>
              <ul className="text-sm space-y-1 text-white/80">
                <li>• Einholen von Abbruchgenehmigungen</li>
                <li>• Behördengänge</li>
                <li>• Dokumentationsverfahren</li>
                <li>• Allgemeine Aufräumarbeiten</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lokale Expertise */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Warum RückbauPRO in Bielefeld?</h2>
          <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-xl p-8 backdrop-blur-lg border border-white/20">
            <p className="text-lg mb-6 text-white/90">
              Wir kennen Bielefeld wie unsere Westentasche. Von den alten Industriegebieten in Oldentrup bis zu
              den Neubauprojekten in Gadderbaum - überall waren wir schon im Einsatz. Unsere Mannschaft wohnt
              hier, unsere Kinder gehen hier zur Schule, und wenn Arminia spielt, sitzen wir auch auf der Alm.
            </p>
            <p className="text-lg mb-6 text-white/90">
              Das heißt: Wir wissen genau, wie wichtig saubere Arbeit ist. Niemand will wochenlang Baulärm und
              Dreck vor der Tür haben. Deswegen arbeiten wir schnell, sauber und immer mit Rücksicht auf die
              Nachbarschaft. Die Demontage vom alten Kaufhaus am Kesselbrink? In nur 3 Wochen erledigt - ohne
              eine einzige Beschwerde aus der Nachbarschaft.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cerulean">15+</div>
                <div className="text-sm text-white/80">Jahre Erfahrung in OWL</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cerulean">500+</div>
                <div className="text-sm text-white/80">Projekte in Bielefeld</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cerulean">24/7</div>
                <div className="text-sm text-white/80">Notfall-Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cerulean to-indigo-dye rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Brauchen Sie Hilfe mit Schadstoffsanierung in Bielefeld?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Rufen Sie uns einfach an - wir kommen vorbei, schauen uns das an und machen Ihnen ein faires Angebot.
            Keine versteckten Kosten, keine bösen Überraschungen.
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
              "name": "RückbauPRO Bielefeld - Schadstoffsanierung",
              "description": "Professionelle Schadstoffsanierung in Bielefeld und Umgebung. Asbest, PCB, KMF - wir sanieren sicher und zertifiziert.",
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
                "Oldentrup", "Gadderbaum", "Jöllenbeck", "Heepen", "Stieghorst"
              ]
            })
          }}
        />
      </div>
    </section>
  );
}