'use client';

import Link from 'next/link';
import Icon from './Icon';
import Image from 'next/image';
import KontaktformularMitBild from './KontaktformularMitBild';

export default function TeilsanierungBielefeld() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 - Hauptüberschrift mit Ziel-Keyword */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
            Teilsanierung Bielefeld - Gezielte Modernisierung für Ihr Gebäude
          </h1>

          {/* Einleitung mit lokalem Bezug */}
          <div className="prose prose-lg max-w-none text-white/90 mb-12">
            <p className="text-xl leading-relaxed mb-6 text-white/90">
              Letzte Woche hatten wir einen Anruf aus Schildesche - ein Hausbesitzer wollte nur sein
              Dach sanieren, weil er Asbestplatten entdeckt hatte. Als wir vor Ort waren, stellten wir
              fest: Die Fassade war top, der Keller trocken, nur das Dach musste weg. Genau dafür gibt's
              die Teilsanierung. Nicht immer muss gleich das ganze Gebäude saniert werden. Manchmal reicht
              es, gezielt die Problemzonen anzugehen. In Bielefeld haben wir das perfektioniert - ob in den
              Altbauten der Innenstadt oder den Einfamilienhäusern in Jöllenbeck, wir sanieren genau das,
              was saniert werden muss. Nicht mehr und nicht weniger.
            </p>
          </div>

          {/* Bauunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Bauunternehmen</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-4 text-white/90">
                Als etabliertes Bauunternehmen in Bielefeld verstehen wir uns nicht nur aufs Abreißen -
                wir bauen auch wieder auf. Bei einer Teilsanierung ist das besonders wichtig. Nach dem
                wir letztens die maroden Balkone an einem Mehrfamilienhaus am Kesselbrink entfernt hatten,
                haben wir gleich neue gebaut. Alles aus einer Hand, keine nervigen Abstimmungen zwischen
                verschiedenen Gewerken. Unsere 35 Mitarbeiter decken alles ab - vom Maurer bis zum Dachdecker.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Komplettservice:</strong> Abriss, Neubau und alles dazwischen
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Festangestellte Profis:</strong> Keine Subunternehmer, alles aus einer Hand
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Lokale Expertise:</strong> Wir kennen jedes Viertel in Bielefeld
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="check" size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div className="text-white/90">
                    <strong className="text-white">Moderne Technik:</strong> Neueste Maschinen für effiziente Arbeit
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abrissunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Abrissunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Teilsanierung heißt oft: chirurgische Präzision beim Abriss. Als spezialisiertes
              Abrissunternehmen in Bielefeld haben wir die Technik dafür. Letzte Woche in Brackwede -
              nur der Anbau aus den 60ern sollte weg, das schöne Haupthaus aus der Gründerzeit sollte
              bleiben. Mit unseren Abbruchzangen haben wir den Anbau Stück für Stück abgetragen, ohne
              auch nur einen Kratzer am Altbau zu hinterlassen. Das ist unser Spezialgebiet: kontrollierter
              Teilabriss ohne Kollateralschäden.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="building" size={20} className="mr-2 text-cerulean" />
                  Selektiver Rückbau
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Etageweise Entkernung</li>
                  <li>• Teilabbruch von Anbauten</li>
                  <li>• Balkon-Demontage</li>
                  <li>• Garagen-Abriss</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="tool" size={20} className="mr-2 text-cerulean" />
                  Präzisionstechnik
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Diamantseilsägen</li>
                  <li>• Wandsägen</li>
                  <li>• Kernbohrungen</li>
                  <li>• Abbruchroboter</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <Icon name="shield" size={20} className="mr-2 text-cerulean" />
                  Schutzmaßnahmen
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Staubschutzwände</li>
                  <li>• Lärmschutz</li>
                  <li>• Erschütterungsarm</li>
                  <li>• Nachbarschaftsschutz</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Schadstoffuntersuchungsdienst Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Schadstoffuntersuchungsdienst</h2>
            <div className="bg-cerulean/20 rounded-xl p-6 border-l-4 border-cerulean">
              <p className="text-lg mb-4 text-white/90">
                Bevor überhaupt irgendwas saniert wird, muss klar sein: Wo sind Schadstoffe drin?
                Unser Schadstoffuntersuchungsdienst checkt das professionell. Neulich in einem
                Bürogebäude am Ostwestfalendamm - der Eigentümer wollte nur die oberen Etagen
                sanieren. Unsere Untersuchung zeigte: Asbest nur im 3. Stock in den Deckenplatten,
                PCB in den Fugen im 2. Stock, der Rest sauber. So konnten wir gezielt nur die
                belasteten Bereiche sanieren und dem Kunden tausende Euro sparen.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-bold mb-3 text-white">Untersuchungsleistungen</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Raumweise Schadstoffkartierung
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Materialproben mit Labor-Analyse
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Raumluftmessungen vor Ort
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Digitale Schadstoffkataster
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-white">Typische Fundorte</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Dacheindeckungen (Asbest bis 1993)
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Fassadenplatten (Eternit)
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Bodenbeläge (Vinyl-Asbest)
                    </li>
                    <li className="flex items-start">
                      <Icon name="arrow-right" size={16} className="mr-2 mt-1 text-cerulean flex-shrink-0" />
                      Rohrdämmungen im Keller
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Betonbauunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Betonbauunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Bei Teilsanierungen spielt Beton oft die Hauptrolle. Als Betonbauunternehmen mit
              Spezialisierung auf Sanierung wissen wir: Nicht jede Betonwand muss raus. Letztens
              bei der alten Post in Heepen - die Betondecken hatten Risse, aber die Statik war
              noch gut. Statt alles rauszureißen, haben wir die Decken saniert: Risse verpresst,
              Bewehrung freigelegt und neu beschichtet, Oberflächen versiegelt. Spart Zeit, Geld
              und Nerven.
            </p>
            <div className="bg-gradient-to-r from-indigo-dye/20 to-cerulean/20 rounded-xl p-6 backdrop-blur-lg">
              <h3 className="font-bold mb-4 text-white text-xl">Betonarbeiten bei Teilsanierung:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Betonsanierung
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Rissverpressung
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Bewehrungsschutz
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Betonkosmetik
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Verstärkungen
                </div>
                <div className="flex items-center text-white/90">
                  <Icon name="check-circle" size={20} className="mr-2 text-green-400" />
                  Abdichtungen
                </div>
              </div>
            </div>
          </div>

          {/* Entsorgungsunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Entsorgungsunternehmen</h2>
            <p className="text-lg mb-4 text-white/90">
              Bei einer Teilsanierung fällt oft weniger, aber dafür gemischter Müll an. Als
              zertifiziertes Entsorgungsunternehmen sortieren wir alles direkt auf der Baustelle.
              Container für Bauschutt, Big Bags für Asbest, Mulden für Holz - alles getrennt.
              Das spart Entsorgungskosten. Letzten Monat bei der Dachsanierung in Sennestadt:
              15 Tonnen Asbestplatten ordnungsgemäß in Big Bags verpackt und zur Deponie gebracht,
              5 Tonnen Dachlatten ins Holzrecycling, 3 Tonnen Ziegel wiederverwendet. So geht
              nachhaltige Entsorgung!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-sm text-white/80">Trennung vor Ort</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">24h</div>
                <div className="text-sm text-white/80">Container-Service</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">Digital</div>
                <div className="text-sm text-white/80">Entsorgungsnachweise</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">Fair</div>
                <div className="text-sm text-white/80">Abrechnung nach Gewicht</div>
              </div>
            </div>
          </div>

          {/* Typische Teilsanierungen */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Beliebte Teilsanierungen in Bielefeld</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="home" size={24} className="mr-3 text-cerulean" />
                  Dachsanierung
                </h3>
                <p className="text-white/80 mb-3">
                  Das häufigste Projekt in Bielefeld - alte Eternitplatten runter, neue Dämmung und
                  Ziegel drauf. Besonders in Stadtteilen wie Gadderbaum oder Schildesche mit ihren
                  vielen Altbauten ein Dauerbrenner.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Asbestdach-Entfernung</li>
                  <li>• Neue Dämmung nach EnEV</li>
                  <li>• Dachstuhl-Verstärkung</li>
                  <li>• Gauben-Modernisierung</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="droplet" size={24} className="mr-3 text-cerulean" />
                  Kellersanierung
                </h3>
                <p className="text-white/80 mb-3">
                  Feuchte Keller sind in Bielefeld ein Problem - der Lehmboden am Teutoburger Wald
                  drückt Wasser rein. Wir dichten ab, legen trocken und machen aus Bruchbuden
                  brauchbare Räume.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Außenabdichtung</li>
                  <li>• Drainage-Erneuerung</li>
                  <li>• Horizontalsperre</li>
                  <li>• Schimmelsanierung</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="sun" size={24} className="mr-3 text-cerulean" />
                  Fassadensanierung
                </h3>
                <p className="text-white/80 mb-3">
                  Neue Fassade macht aus alten Häusern Schmuckstücke. Plus: Mit moderner Dämmung
                  sparen Sie richtig Heizkosten - in Bielefeld bei den Energiepreisen ein Muss.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• WDVS-Systeme</li>
                  <li>• Klinker-Sanierung</li>
                  <li>• Eternit-Austausch</li>
                  <li>• Putz-Erneuerung</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <Icon name="zap" size={24} className="mr-3 text-cerulean" />
                  Haustechnik-Sanierung
                </h3>
                <p className="text-white/80 mb-3">
                  Alte Rohre, marode Elektrik - oft muss nur die Technik erneuert werden.
                  Wir reißen Wände auf, verlegen neu und machen wieder zu. Sauber und schnell.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Elektro-Erneuerung</li>
                  <li>• Rohr-Austausch</li>
                  <li>• Heizungsmodernisierung</li>
                  <li>• Smart-Home-Nachrüstung</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prozess */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">So läuft Ihre Teilsanierung in Bielefeld</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Bestandsaufnahme vor Ort",
                  description: "Wir kommen vorbei, checken was saniert werden muss und was bleiben kann. Kostenlos und unverbindlich."
                },
                {
                  step: 2,
                  title: "Schadstoffprüfung",
                  description: "Gezielte Proben nur da, wo saniert wird. Spart Untersuchungskosten bei großen Gebäuden."
                },
                {
                  step: 3,
                  title: "Maßgeschneidertes Konzept",
                  description: "Detaillierter Plan für die Teilsanierung mit Festpreis. Keine Überraschungen, alles transparent."
                },
                {
                  step: 4,
                  title: "Koordinierte Durchführung",
                  description: "Alle Gewerke aus einer Hand - Abriss, Sanierung, Neubau. Alles perfekt getaktet."
                },
                {
                  step: 5,
                  title: "Saubere Übergabe",
                  description: "Besenrein, dokumentiert, abgenommen. Der sanierte Bereich wie neu, der Rest unberührt."
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

          {/* Lokale Expertise */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Teilsanierung in allen Bielefelder Stadtteilen</h2>
            <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-xl p-8 backdrop-blur-lg border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Jeder Stadtteil in Bielefeld hat seine Eigenarten - und wir kennen sie alle.
                Die Gründerzeitvillen in Gadderbaum brauchen andere Sanierungskonzepte als die
                50er-Jahre-Siedlungen in Brake. Die Plattenbauten in Sennestadt haben andere
                Probleme als die Fachwerkhäuser in der Altstadt. Nach 15 Jahren Teilsanierung
                in Bielefeld wissen wir genau, was wo gemacht werden muss.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="font-bold text-cerulean mb-2">Bielefeld-Mitte</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Altbau-Fassaden</li>
                    <li>• Stuck-Sanierung</li>
                    <li>• Denkmalschutz</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Brackwede</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Nachkriegsbauten</li>
                    <li>• Eternit-Fassaden</li>
                    <li>• Flachdächer</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Sennestadt</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Plattenbauten</li>
                    <li>• Balkonsanierung</li>
                    <li>• Wärmedämmung</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Heepen</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Industriebauten</li>
                    <li>• Hallendächer</li>
                    <li>• Betonsanierung</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Jöllenbeck</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Einfamilienhäuser</li>
                    <li>• Dachsanierung</li>
                    <li>• Kellertrockenlegung</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-cerulean mb-2">Schildesche</div>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• Villen-Sanierung</li>
                    <li>• Garten-Häuser</li>
                    <li>• Pool-Abriss</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/90">
                <strong className="text-white">Tipp:</strong> Bei Teilsanierungen lohnt sich oft die
                Kombination mehrerer Maßnahmen. Wenn wir schon mal das Gerüst für die Fassade aufbauen,
                können wir gleich auch die Dachrinnen erneuern. Spart Kosten und Zeit!
              </p>
            </div>
          </div>

          {/* Kosten und Förderungen */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Was kostet eine Teilsanierung in Bielefeld?</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Jede Teilsanierung ist anders - deswegen gibt's keine Preise von der Stange.
                Aber damit Sie 'ne Vorstellung haben, hier echte Beispiele aus Bielefeld:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Beispiel: Dachsanierung (150m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Asbestentsorgung: 3.500€</li>
                    <li>• Neue Dämmung: 4.500€</li>
                    <li>• Neueindeckung: 12.000€</li>
                    <li>• Gesamt: ab 20.000€</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Beispiel: Kellersanierung (80m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Außenabdichtung: 8.000€</li>
                    <li>• Drainage: 2.500€</li>
                    <li>• Innenausbau: 6.000€</li>
                    <li>• Gesamt: ab 16.500€</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <h3 className="font-bold text-white mb-2 flex items-center">
                  <Icon name="gift" size={20} className="mr-2" />
                  Förderungen nutzen!
                </h3>
                <p className="text-sm text-white/90">
                  KfW und BAFA fördern energetische Sanierungen mit bis zu 40%. Die Stadt Bielefeld
                  hat zusätzliche Programme für Altbausanierung. Wir helfen bei den Anträgen -
                  das holt oft tausende Euro raus!
                </p>
              </div>
            </div>
          </div>

          {/* Vorteile Teilsanierung */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Warum Teilsanierung oft schlauer ist</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="piggy-bank" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Kostenersparnis</h3>
                <p className="text-sm text-white/70">
                  Nur sanieren was nötig ist. Der Rest bleibt stehen - spart oft 50-70% gegenüber Komplettsanierung
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="home" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Bewohnbar bleiben</h3>
                <p className="text-sm text-white/70">
                  Bei Teilsanierung können Sie oft wohnen bleiben. Spart Hotel und Umzugsstress
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cerulean to-indigo-dye rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="calendar" size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Etappenweise</h3>
                <p className="text-sm text-white/70">
                  Dieses Jahr das Dach, nächstes Jahr die Fassade - verteilt die Kosten sinnvoll
                </p>
              </div>
            </div>
          </div>

          {/* Notfall-Service */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">24/7 Notfall-Teilsanierung</h2>
            <div className="bg-red-500/20 rounded-xl p-6 border border-red-500/30">
              <p className="text-lg mb-4 text-white/90">
                Manchmal muss es schnell gehen - Sturmschaden am Dach, Wasserschaden im Keller,
                Brand in einer Wohnung. Unser Notdienst ist rund um die Uhr für Sie da. Wir sichern
                ab, sanieren den Schaden und sorgen dafür, dass der Rest des Gebäudes bewohnbar bleibt.
                Letzte Woche hatten wir einen Notfall in Oldentrup - Feuer in der Küche, Rest der
                Wohnung nur verrußt. Innerhalb von 3 Tagen war die Küche entkernt, gereinigt und
                wieder bewohnbar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link
                  href="tel:+491748083023"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors"
                >
                  <Icon name="phone" size={20} className="mr-2" />
                  Notfall-Hotline: 0174 8083023
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Häufige Fragen zur Teilsanierung</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Wann lohnt sich eine Teilsanierung?",
                  a: "Wenn nur bestimmte Bereiche sanierungsbedürftig sind und der Rest noch gut ist. Typisch: Dach marode aber Fassade top, oder Keller feucht aber Obergeschosse trocken. Wir checken das kostenlos für Sie."
                },
                {
                  q: "Kann ich während der Teilsanierung wohnen bleiben?",
                  a: "Meistens ja! Bei Dachsanierung oder Fassadenarbeiten kein Problem. Bei Kellersanierung auch. Nur bei Arbeiten in Wohnräumen wird's schwierig - aber auch da finden wir Lösungen."
                },
                {
                  q: "Wie lange dauert eine Teilsanierung?",
                  a: "Kommt drauf an: Dachsanierung 1-2 Wochen, Fassade 2-3 Wochen, Keller 1 Woche. Wir geben Ihnen einen verbindlichen Zeitplan mit Puffer für schlechtes Wetter."
                },
                {
                  q: "Was ist mit den nicht sanierten Bereichen?",
                  a: "Die schützen wir professionell - Abdeckfolien, Staubschutzwände, alles was nötig ist. Nach der Sanierung sieht der Rest aus wie vorher, nur der sanierte Bereich ist wie neu."
                },
                {
                  q: "Gibt's Förderung für Teilsanierung?",
                  a: "Ja! KfW fördert auch Einzelmaßnahmen. Neue Fenster, Dachdämmung, Fassadendämmung - alles förderfähig. Wir kennen die Programme und helfen bei den Anträgen."
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
              Teilsanierung in Bielefeld? Wir machen's möglich!
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Kostenlose Beratung, faire Preise, alles aus einer Hand.
              Rufen Sie an oder schreiben Sie uns - wir sind für Sie da!
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
                Angebot anfragen
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
                "name": "RückbauPRO Bielefeld - Teilsanierung",
                "description": "Professionelle Teilsanierung in Bielefeld. Dachsanierung, Fassadensanierung, Kellersanierung - gezielt modernisieren statt komplett sanieren.",
                "url": "https://www.rueckbaupro.de/teilsanierung-bielefeld",
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
                  "Oldentrup", "Gadderbaum", "Jöllenbeck", "Heepen", "Stieghorst", "Brake",
                  "Milse", "Bethel", "Quelle", "Ummeln"
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