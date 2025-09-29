'use client';

import Link from 'next/link';
import Icon from './Icon';
import Image from 'next/image';
import KontaktformularMitBild from './KontaktformularMitBild';

export default function KomplettsanierungBielefeld() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 - Hauptüberschrift mit Ziel-Keyword */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
            Komplettsanierung Bielefeld - Rundum-Erneuerung für Ihre Immobilie
          </h1>

          {/* Einleitung mit lokalem Bezug */}
          <div className="prose prose-lg max-w-none text-white/90 mb-12">
            <p className="text-xl leading-relaxed mb-6 text-white/90">
              Letzten Herbst haben wir das alte Kaufhaus am Kesselbrink komplett saniert - von der
              ersten Begehung bis zur Schlüsselübergabe alles aus einer Hand. Wenn in Bielefeld ein
              Gebäude von Grund auf erneuert werden soll, sind wir die Richtigen. Ob die verfallene
              Villa in Gadderbaum, die marode Fabrikhalle in Oldentrup oder das sanierungsbedürftige
              Mehrfamilienhaus in Brackwede - wir machen aus Bruchbuden wieder Schmuckstücke. Mit über
              500 Komplettsanierungen in ganz OWL wissen wir genau, worauf es ankommt: Planung,
              Koordination und Qualität bis ins kleinste Detail.
            </p>
          </div>

          {/* Abrissunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Abrissunternehmen</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-4 text-white/90">
                Bei einer Komplettsanierung muss oft erstmal alles raus - und da kommen wir als
                erfahrenes Abrissunternehmen ins Spiel. Letzte Woche haben wir ein komplettes
                Bürogebäude am Niederwall entkernt. 5 Etagen, 3000 Quadratmeter, alles raus bis
                auf den Rohbau. Mit unseren Spezialmaschinen und dem eingespielten Team ging das
                in nur einer Woche. Kein Schutt im Treppenhaus, keine Beschwerden von Nachbarn,
                alles sauber getrennt und entsorgt. So muss Entkernung laufen!
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Komplettentkernung:</strong> Vom Dachboden bis zum Keller, alles raus
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Schadstoffsanierung:</strong> Asbest, PCB, KMF - wir entfernen alles fachgerecht
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Statische Eingriffe:</strong> Wände raus, Durchbrüche rein - immer mit Statiker
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Entsorgung:</strong> Sortiert, dokumentiert, umweltgerecht
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bauunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Bauunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Als komplettes Bauunternehmen übernehmen wir nach der Entkernung auch den kompletten
              Wiederaufbau. Bei der Villa in Schildesche letztens - nachdem wir alles rausgerissen
              hatten, haben wir neue Wände gezogen, Decken eingezogen, Treppen eingebaut. Unsere
              45 Mitarbeiter decken alle Gewerke ab. Keine nervigen Koordinationen zwischen verschiedenen
              Firmen, kein Terminchaos, keine Schuldzuweisungen. Alles aus einer Hand bedeutet:
              Ein Ansprechpartner, ein Zeitplan, ein Preis.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="hammer" size={20} className="mr-2 text-cerulean" />
                  Rohbauarbeiten
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Mauerarbeiten</li>
                  <li>• Betonarbeiten</li>
                  <li>• Stahlbau</li>
                  <li>• Zimmerarbeiten</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="wrench" size={20} className="mr-2 text-cerulean" />
                  Ausbauarbeiten
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Trockenbau</li>
                  <li>• Estricharbeiten</li>
                  <li>• Fliesenarbeiten</li>
                  <li>• Malerarbeiten</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="zap" size={20} className="mr-2 text-cerulean" />
                  Haustechnik
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Elektroinstallation</li>
                  <li>• Sanitär & Heizung</li>
                  <li>• Lüftungstechnik</li>
                  <li>• Smart Home</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gebäudeinstandhaltungsdienst Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Gebäudeinstandhaltungsdienst</h2>
            <div className="bg-cerulean/20 rounded-xl p-6 border-l-4 border-cerulean">
              <p className="text-lg mb-4 text-white/90">
                Nach der Komplettsanierung hört unser Service nicht auf. Unser Gebäudeinstandhaltungsdienst
                sorgt dafür, dass Ihre Immobilie auch in Zukunft top bleibt. Viele unserer Kunden in
                Bielefeld nutzen das - vom Universitätsklinikum bis zu privaten Vermietern. Regelmäßige
                Kontrollen, kleine Reparaturen sofort erledigt, große Probleme früh erkannt. Das alte
                Rathaus in Bethel? Haben wir vor 5 Jahren komplett saniert und seitdem betreuen wir es.
                Läuft wie am ersten Tag!
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-bold mb-3 text-white">Wartungsleistungen</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Regelmäßige Gebäudechecks alle 6 Monate
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Dach- und Fassadeninspektion
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Heizungswartung und Optimierung
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      24/7 Notdienst bei Problemen
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-white">Vorteile</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Werterhalt Ihrer Immobilie
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Probleme früh erkennen = Geld sparen
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Garantieverlängerung auf unsere Arbeiten
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Digitale Dokumentation aller Maßnahmen
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Erdbauunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Erdbauunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Bei einer Komplettsanierung gehts oft auch ums Drumherum. Als Erdbauunternehmen machen
              wir auch die Außenanlagen komplett neu. Bei dem Projekt in Sennestadt haben wir nicht
              nur das Haus saniert, sondern auch den kompletten Garten umgestaltet - alte Bäume raus,
              Gelände planiert, neue Zufahrt angelegt, Terrasse gebaut. Mit unseren Baggern und Radladern
              schaffen wir bis zu 500 Kubikmeter Erde am Tag. Und das Beste: Der Lehmboden hier in
              Bielefeld? Kennen wir seit Jahren, wissen genau wie man damit umgeht.
            </p>
            <div className="bg-gradient-to-r from-indigo-dye/20 to-cerulean/20 rounded-xl p-6 backdrop-blur-lg">
              <h3 className="font-bold mb-4 text-white text-xl">Unsere Erdbau-Leistungen:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Baugrubenaushub
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Geländemodellierung
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Fundamentarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Kanalbau
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Pflasterarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Gartengestaltung
                </div>
              </div>
            </div>
          </div>

          {/* Entsorgungsunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Entsorgungsunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Bei einer Komplettsanierung fallen Berge von Müll an - aber für uns als zertifiziertes
              Entsorgungsunternehmen kein Problem. Beim alten Postgebäude am Jahnplatz waren es 120
              Container voll - alles sortiert, alles dokumentiert, alles legal entsorgt. Wir haben
              eigene LKWs, eigene Container und Verträge mit allen wichtigen Deponien. Asbest nach
              Herford, Bauschutt nach Gütersloh, Holz ins Biomassekraftwerk. Und das Beste: Durch
              die Sortierung sparen unsere Kunden richtig Geld bei den Entsorgungskosten.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-sm text-white/80">Container pro Jahr</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-sm text-white/80">Recycling-Quote</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">24h</div>
                <div className="text-sm text-white/80">Container-Lieferung</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-sm text-white/80">Legal & dokumentiert</div>
              </div>
            </div>
          </div>

          {/* Der Ablauf einer Komplettsanierung */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">So läuft Ihre Komplettsanierung in Bielefeld</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Bestandsaufnahme & Machbarkeit",
                  description: "Erstbegehung, Schadstoffprüfung, Statik-Check. Wir prüfen, was möglich ist und was Sinn macht."
                },
                {
                  step: 2,
                  title: "Planung & Genehmigungen",
                  description: "Architekten einbeziehen, Bauantrag stellen, Nachbarn informieren. Wir kümmern uns um alles."
                },
                {
                  step: 3,
                  title: "Entkernung & Schadstoffsanierung",
                  description: "Raus mit dem Alten! Professionell, sauber und immer mit Rücksicht auf die Nachbarschaft."
                },
                {
                  step: 4,
                  title: "Rohbau & Statik",
                  description: "Neue Wände, neue Decken, neue Fenster. Der Rohbau wird komplett erneuert."
                },
                {
                  step: 5,
                  title: "Haustechnik & Dämmung",
                  description: "Moderne Heizung, neue Elektrik, perfekte Dämmung. Alles nach neuesten Standards."
                },
                {
                  step: 6,
                  title: "Innenausbau & Finish",
                  description: "Böden, Wände, Bäder - alles wird fertiggestellt. Bis zur letzten Steckdose."
                },
                {
                  step: 7,
                  title: "Außenanlagen & Übergabe",
                  description: "Garten, Zufahrt, Terrasse - auch draußen alles perfekt. Dann Schlüsselübergabe!"
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

          {/* Beispielprojekte */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Erfolgreiche Komplettsanierungen in Bielefeld</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="building" size={24} className="mr-3 text-cerulean" />
                  Bürogebäude Niederwall
                </h3>
                <p className="text-white/80 mb-3">
                  4.000m², 5 Etagen, komplette Entkernung und Neugestaltung als modernes Bürogebäude.
                  Von der Asbestsanierung bis zum Smart-Office alles aus einer Hand.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Projektdauer: 8 Monate</li>
                  <li>• Budget: 2,4 Mio Euro</li>
                  <li>• Besonderheit: Denkmalschutz-Fassade</li>
                  <li>• Energieeffizienz: KfW 55 Standard</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="home" size={24} className="mr-3 text-cerulean" />
                  Villa Gadderbaum
                </h3>
                <p className="text-white/80 mb-3">
                  Gründerzeitvilla von 1895, komplett saniert unter Erhalt historischer Elemente.
                  Stuck restauriert, moderne Haustechnik unsichtbar integriert.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Projektdauer: 12 Monate</li>
                  <li>• Budget: 1,8 Mio Euro</li>
                  <li>• Besonderheit: Denkmalschutz</li>
                  <li>• Extras: Tiefgarage & Pool</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="users" size={24} className="mr-3 text-cerulean" />
                  Mehrfamilienhaus Brackwede
                </h3>
                <p className="text-white/80 mb-3">
                  60er-Jahre Bau mit 12 Wohnungen, komplett modernisiert. Neue Balkone, Aufzug
                  nachgerüstet, energetisch auf Neubau-Niveau.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Projektdauer: 6 Monate</li>
                  <li>• Budget: 950.000 Euro</li>
                  <li>• Besonderheit: Bewohnt während Sanierung</li>
                  <li>• Mietsteigerung: +40%</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="truck" size={24} className="mr-3 text-cerulean" />
                  Industriehalle Oldentrup
                </h3>
                <p className="text-white/80 mb-3">
                  Alte Maschinenhalle zu modernem Gewerbezentrum umgebaut. Komplettsanierung
                  inklusive Bodensanierung und neuer Kranbahn.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Projektdauer: 5 Monate</li>
                  <li>• Budget: 1,2 Mio Euro</li>
                  <li>• Besonderheit: Altlastensanierung</li>
                  <li>• Neue Nutzung: 8 Gewerbeeinheiten</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kosten und Finanzierung */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Was kostet eine Komplettsanierung in Bielefeld?</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Jedes Gebäude ist anders, aber hier mal echte Zahlen aus unseren Projekten in Bielefeld,
                damit Sie ne Hausnummer haben:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Einfamilienhaus (150m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Basis-Sanierung: ab 120.000€</li>
                    <li>• Standard-Sanierung: ab 180.000€</li>
                    <li>• Premium-Sanierung: ab 250.000€</li>
                    <li>• Mit Keller & Außenanlagen: +30-50%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Mehrfamilienhaus (500m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Pro Quadratmeter: 800-1.500€</li>
                    <li>• Komplett mit Außenanlagen: ab 400.000€</li>
                    <li>• Mit Aufzug-Nachrüstung: +80.000€</li>
                    <li>• Energetisch auf KfW 55: +20%</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <h3 className="font-bold text-white mb-2 flex items-center">
                  <Icon name="euro" size={20} className="mr-2" />
                  Finanzierung & Förderung
                </h3>
                <p className="text-sm text-white/90 mb-2">
                  KfW-Kredit 261: Bis zu 150.000€ pro Wohneinheit, nur 0,01% Zinsen!
                  BAFA-Zuschuss: Bis zu 40% für energetische Sanierung.
                  Stadt Bielefeld: Extra-Förderung für Altbausanierung im Stadtgebiet.
                </p>
                <p className="text-sm text-white/90">
                  Wir helfen bei allen Anträgen und kennen jeden Fördertopf. Da kommen schnell
                  50.000€ oder mehr zusammen!
                </p>
              </div>
            </div>
          </div>

          {/* Lokale Expertise */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Komplettsanierung überall in Bielefeld</h2>
            <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-xl p-8 backdrop-blur-lg border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Nach 15 Jahren Komplettsanierung in Bielefeld kennen wir jeden Stadtteil wie unsere
                Westentasche. Die Gründerzeitvillen in Gadderbaum haben andere Herausforderungen als
                die Plattenbauten in Sennestadt. Die historische Altstadt braucht anderen Respekt als
                die Gewerbegebiete in Oldentrup. Diese lokale Expertise macht den Unterschied:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="font-bold text-cerulean mb-2">Mitte & Altstadt</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Denkmalschutz-Expertise</li>
                    <li>• Enge Bebauung</li>
                    <li>• Historische Substanz</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Gadderbaum</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Villen-Sanierung</li>
                    <li>• Große Grundstücke</li>
                    <li>• Gehobener Standard</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Brackwede</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• 50er-70er Bauten</li>
                    <li>• Mehrfamilienhäuser</li>
                    <li>• Energetische Sanierung</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Sennestadt</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Reihenhäuser</li>
                    <li>• Plattenbauten</li>
                    <li>• Moderne Standards</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Heepen/Oldentrup</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Industriebauten</li>
                    <li>• Umnutzungen</li>
                    <li>• Großprojekte</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Jöllenbeck</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Einfamilienhäuser</li>
                    <li>• Hofanlagen</li>
                    <li>• Ländlicher Charakter</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/90">
                <strong className="text-white">Wichtig:</strong> Bei Komplettsanierungen arbeiten wir
                eng mit den lokalen Behörden zusammen. Bauamt, Denkmalschutz, Umweltamt - wir kennen
                alle Ansprechpartner persönlich und wissen, worauf es ankommt. Das spart Zeit und Nerven!
              </p>
            </div>
          </div>

          {/* Vorteile Komplettsanierung */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Warum Komplettsanierung die beste Lösung ist</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="trending-up" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Wertsteigerung garantiert</h3>
                <p className="text-sm text-white/70">
                  Nach Komplettsanierung steigt der Immobilienwert um 40-60%. In Bielefeld-Mitte sogar noch mehr!
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="battery-charging" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Energiekosten halbiert</h3>
                <p className="text-sm text-white/70">
                  Moderne Dämmung und Heizung - Ihre Nebenkosten sinken um mindestens 50%
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="shield-check" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">25 Jahre Ruhe</h3>
                <p className="text-sm text-white/70">
                  Einmal richtig saniert = Jahrzehnte keine Sorgen. Wir geben 10 Jahre Garantie!
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Häufige Fragen zur Komplettsanierung</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Wie lange dauert eine Komplettsanierung?",
                  a: "Einfamilienhaus: 4-6 Monate. Mehrfamilienhaus: 6-12 Monate. Wir geben Ihnen einen verbindlichen Zeitplan mit Puffer. Bei uns heißt 'Ende Mai' auch wirklich Ende Mai!"
                },
                {
                  q: "Kann ich während der Sanierung wohnen bleiben?",
                  a: "Bei Komplettsanierung meist nicht. Aber: Wir organisieren auf Wunsch Ersatzwohnungen oder Container-Büros. Viele Kunden verbinden die Sanierung mit nem längeren Urlaub."
                },
                {
                  q: "Was ist alles in einer Komplettsanierung drin?",
                  a: "Wirklich alles! Entkernung, Schadstoffsanierung, neue Wände, neue Böden, neue Bäder, neue Küche, neue Heizung, neue Elektrik, neue Fenster, neue Türen, Malerarbeiten - das volle Programm!"
                },
                {
                  q: "Lohnt sich Komplettsanierung oder besser abreißen?",
                  a: "Kommt auf die Substanz an. Faustregel: Wenn die Sanierung mehr als 70% vom Neubaupreis kostet, lohnt Abriss. Wir prüfen das kostenlos für Sie!"
                },
                {
                  q: "Wie sicher ist mein Festpreis?",
                  a: "Zu 100%! Unser Festpreis gilt - auch wenn wir mehr Asbest finden als gedacht. Nur wenn Sie extra Wünsche haben, kostet es mehr. Aber das besprechen wir vorher."
                },
                {
                  q: "Was ist mit Garantie und Gewährleistung?",
                  a: "10 Jahre Garantie auf alle Arbeiten! Plus: Unser Instandhaltungsservice sorgt dafür, dass alles top bleibt. Viele Kunden nutzen das - gibt Sicherheit."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/80 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cerulean to-indigo-dye rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ihre Komplettsanierung in Bielefeld startet hier!
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Kostenlose Erstbegehung, ehrliche Beratung, faire Preise.
              Machen Sie aus Ihrer alten Immobilie ein Schmuckstück!
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
                Beratungstermin buchen
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
                "name": "RückbauPRO Bielefeld - Komplettsanierung",
                "description": "Professionelle Komplettsanierung in Bielefeld. Rundum-Erneuerung für Ihre Immobilie - alles aus einer Hand vom Meisterbetrieb.",
                "url": "https://www.rueckbaupro.de/komplettsanierung-bielefeld",
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
                  "Bethel", "Brake", "Milse", "Quelle", "Ummeln"
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