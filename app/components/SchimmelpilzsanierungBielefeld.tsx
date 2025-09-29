'use client';

import Link from 'next/link';
import Image from 'next/image';
import KontaktformularMitBild from './KontaktformularMitBild';

export default function SchimmelpilzsanierungBielefeld() {
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 - Hauptüberschrift mit Ziel-Keyword */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
            Schimmelpilzsanierung Bielefeld - Gesund wohnen ohne Schimmel
          </h1>

          {/* Einleitung mit lokalem Bezug */}
          <div className="prose prose-lg max-w-none text-white/90 mb-12">
            <p className="text-xl leading-relaxed mb-6 text-white/90">
              Letzten Winter hatten wir wieder nen Notfall in Schildesche - schwarzer Schimmel im
              ganzen Schlafzimmer. Die Familie hatte schon seit Monaten Atemprobleme, wusste aber
              nicht warum. Innerhalb von zwei Tagen hatten wir alles saniert und die Ursache behoben.
              Schimmel ist in Bielefeld ein riesen Problem - die alten Häuser, der feuchte Winter am
              Teutoburger Wald, und dann noch falsches Lüften. Wir sind seit über 15 Jahren die
              Schimmelexperten in OWL. Von der kleinen Ecke im Bad bis zum kompletten Dachstuhl -
              wir kriegen jeden Schimmel weg. Und das Wichtigste: Er kommt nicht wieder!
            </p>
          </div>

          {/* Sanitärdienstleistungsunternehmen Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Sanitärdienstleistungsunternehmen</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-4 text-white/90">
                Als Sanitärdienstleistungsunternehmen kümmern wir uns um die komplette Sanierung und
                Desinfektion. Schimmel ist nicht nur hässlich - er ist gesundheitsgefährlich! Neulich
                in einem Kindergarten in Brackwede: Schimmel hinter den Schränken, die Kinder hatten
                ständig Husten. Wir haben alles professionell desinfiziert, die Sporen abgetötet und
                die Räume wieder sicher gemacht. Mit unseren Spezialgeräten messen wir die Sporenbelastung
                in der Luft und sanieren so lange, bis alles wieder im grünen Bereich ist.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 flex-shrink-0 text-xl font-bold">✓</span>
                  <div className="text-white/90">
                    <strong className="text-white">Professionelle Desinfektion:</strong> Mit zugelassenen Bioziden gegen alle Schimmelarten
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 flex-shrink-0 text-xl font-bold">✓</span>
                  <div className="text-white/90">
                    <strong className="text-white">Luftreinigung:</strong> HEPA-Filter und Ozongeräte für saubere Raumluft
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 flex-shrink-0 text-xl font-bold">✓</span>
                  <div className="text-white/90">
                    <strong className="text-white">Sporenbeseitigung:</strong> Komplette Entfernung aller Schimmelsporen
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1 flex-shrink-0 text-xl font-bold">✓</span>
                  <div className="text-white/90">
                    <strong className="text-white">Geruchsneutralisation:</strong> Gegen den modrigen Schimmelgeruch
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schimmelpilzuntersuchungsdienst Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Schimmelpilzuntersuchungsdienst</h2>
            <p className="text-lg mb-4 text-white/90">
              Bevor wir loslegen, muss klar sein: Was für ein Schimmel ist das? Unser
              Schimmelpilzuntersuchungsdienst analysiert genau, welche Art von Schimmel Sie haben.
              Schwarzschimmel ist besonders gefährlich, grüner Schimmel eher harmlos - aber eklig.
              Mit Laborproben bestimmen wir die Schimmelart und die Sporenkonzentration. Bei der
              alten Fabrik in Heepen haben wir 12 verschiedene Schimmelarten gefunden! Jede braucht
              ne andere Behandlung. Ohne professionelle Untersuchung ist Schimmelsanierung wie
              Stochern im Nebel.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <span className="mr-2 text-cerulean font-bold text-lg">🔍</span>
                  Schimmelanalyse
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Artbestimmung</li>
                  <li>• Sporenkonzentration</li>
                  <li>• Gefährdungsanalyse</li>
                  <li>• Ausbreitungsprognose</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <span className="mr-2 text-cerulean font-bold text-lg">🔬</span>
                  Laboruntersuchung
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Materialproben</li>
                  <li>• Luftkeimmessung</li>
                  <li>• MVOC-Analyse</li>
                  <li>• Feuchtmessung</li>
                </ul>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-white flex items-center">
                  <span className="mr-2 text-cerulean font-bold text-lg">📋</span>
                  Dokumentation
                </h3>
                <ul className="text-sm space-y-1 text-white/80">
                  <li>• Gutachten</li>
                  <li>• Fotodokumentation</li>
                  <li>• Sanierungsplan</li>
                  <li>• Nachkontrolle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wasserschadensanierungsservice Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Wasserschadensanierungsservice</h2>
            <div className="bg-cerulean/20 rounded-xl p-6 border-l-4 border-cerulean">
              <p className="text-lg mb-4 text-white/90">
                Wo Wasser ist, kommt Schimmel - das ist wie Naturgesetz! Unser Wasserschadensanierungsservice
                verhindert Schimmelbildung nach Wasserschäden. Letzte Woche in Sennestadt: Waschmaschine
                ausgelaufen, Wasser im ganzen Keller. Innerhalb von 24 Stunden hatten wir alles getrocknet -
                bevor der Schimmel überhaupt ne Chance hatte. Mit Bautrocknern, Entfeuchtungsgeräten und
                Heizlüftern trocknen wir alles bis in die letzte Ecke. Und dann messen wir nach - erst
                wenn die Feuchtigkeit unter 60% ist, ist Schluss.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-bold mb-3 text-white">Sofortmaßnahmen</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Wasser abpumpen binnen 2 Stunden
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Bautrockner aufstellen sofort
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Durchfeuchtete Materialien entfernen
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Schimmelprävention mit Desinfektionsmittel
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-white">Trocknungstechnik</h3>
                  <ul className="text-sm space-y-2 text-white/80">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Kondenstrockner bis 500L/Tag
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Hohlraumtrocknung für Wände
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Estrichtrocknung mit Dämmschichtverfahren
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-cerulean flex-shrink-0">▶</span>
                      Feuchtigkeitsmessung täglich
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
              Als Bauunternehmen machen wir nicht nur den Schimmel weg - wir bauen auch alles wieder
              auf. Nach der Sanierung müssen oft neue Wände her, neuer Putz, neue Tapeten. Bei dem
              Mehrfamilienhaus am Kesselbrink haben wir nach der Schimmelsanierung die kompletten
              Wohnungen renoviert. Neue Gipskartonwände, schimmelresistenter Putz, spezielle Anti-Schimmel-Farbe.
              Alles aus einer Hand bedeutet: Keine Wartezeiten zwischen den Gewerken, keine Diskussionen
              wer Schuld hat, wenn was nicht passt. Ein Ansprechpartner, fertig!
            </p>
            <div className="bg-gradient-to-r from-indigo-dye/20 to-cerulean/20 rounded-xl p-6 backdrop-blur-lg">
              <h3 className="font-bold mb-4 text-white text-xl">Wiederaufbau nach Schimmelsanierung:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center text-white/90">
                  <span className="mr-2 text-green-400 font-bold text-lg">✓</span>
                  Trockenbauarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <span className="mr-2 text-green-400 font-bold text-lg">✓</span>
                  Putzarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <span className="mr-2 text-green-400 font-bold text-lg">✓</span>
                  Malerarbeiten
                </div>
                <div className="flex items-center text-white/90">
                  <span className="mr-2 text-green-400 font-bold text-lg">✓</span>
                  Bodenverlegung
                </div>
                <div className="flex items-center text-white/90">
                  <span className="mr-2 text-green-400 font-bold text-lg">✓</span>
                  Dämmung erneuern
                </div>
                <div className="flex items-center text-white/90">
                  <span className="mr-2 text-green-400 font-bold text-lg">✓</span>
                  Fenster abdichten
                </div>
              </div>
            </div>
          </div>

          {/* Gebäudereinigungsdienst Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Gebäudereinigungsdienst</h2>
            <p className="text-lg mb-4 text-white/90">
              Nach der Schimmelsanierung muss alles blitzsauber sein - da kommt unser
              Gebäudereinigungsdienst ins Spiel. Schimmelsporen sind winzig klein und setzen sich
              überall fest - in Teppichen, Polstern, sogar in Büchern. Bei der Universität Bielefeld
              haben wir mal ne ganze Bibliothek gereinigt - 50.000 Bücher einzeln abgesaugt und
              desinfiziert! Mit HEPA-Filtersaugern, die 99,97% aller Sporen einfangen. Normale
              Staubsauger blasen die Sporen nur durch die Gegend. Nach unserer Reinigung können
              Sie wieder durchatmen - wortwörtlich!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">99,97%</div>
                <div className="text-sm text-white/80">Sporenfilterung</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-sm text-white/80">Desinfektion</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">Bio</div>
                <div className="text-sm text-white/80">Ökologische Mittel</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">24h</div>
                <div className="text-sm text-white/80">Schnell bewohnbar</div>
              </div>
            </div>
          </div>

          {/* Typische Schimmelprobleme in Bielefeld */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Typische Schimmelprobleme in Bielefeld</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <span className="mr-3 text-cerulean font-bold text-xl">🏠</span>
                  Altbau-Schimmel
                </h3>
                <p className="text-white/80 mb-3">
                  Die ganzen schönen Altbauten in der Bielefelder Altstadt und Gadderbaum - oft
                  schlecht gedämmt, kalte Wände, Wärmebrücken überall. Da kondensiert Feuchtigkeit
                  und Schimmel hat ein Fest.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Fensterlaibungen schwarz</li>
                  <li>• Ecken hinter Möbeln</li>
                  <li>• Stuck-Verzierungen befallen</li>
                  <li>• Kellergewölbe feucht</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <span className="mr-3 text-cerulean font-bold text-xl">💧</span>
                  Keller-Schimmel
                </h3>
                <p className="text-white/80 mb-3">
                  Der Lehmboden hier am Teutoburger Wald drückt Wasser in die Keller. Besonders
                  in Brackwede und Sennestadt kämpfen viele mit feuchten Kellern und Schimmel.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Wände durchfeuchtet</li>
                  <li>• Modergeruch überall</li>
                  <li>• Lagerware verschimmelt</li>
                  <li>• Heizungsrohre tropfen</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <span className="mr-3 text-cerulean font-bold text-xl">🌀</span>
                  Bad-Schimmel
                </h3>
                <p className="text-white/80 mb-3">
                  Klassiker: Fensterlose Bäder oder falsch gelüftet. Die Feuchtigkeit vom Duschen
                  muss raus, sonst gibts schwarze Fugen und Schimmel an der Decke.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Silikonfugen schwarz</li>
                  <li>• Decke über Dusche</li>
                  <li>• Hinter Waschmaschine</li>
                  <li>• Unter Badewanne</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-4 text-white flex items-center">
                  <span className="mr-3 text-cerulean font-bold text-xl">🌙</span>
                  Schlafzimmer-Schimmel
                </h3>
                <p className="text-white/80 mb-3">
                  Zu kalt geheizt, zu wenig gelüftet - nachts atmen wir literweise Feuchtigkeit
                  aus. Die muss morgens raus, sonst schimmelt's hinter dem Bett.
                </p>
                <ul className="text-sm space-y-1 text-white/70">
                  <li>• Matratze unten feucht</li>
                  <li>• Wand hinter Schrank</li>
                  <li>• Fensterbank schwarz</li>
                  <li>• Tapete löst sich</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Der Sanierungsprozess */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">So läuft die Schimmelpilzsanierung ab</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Notfall-Hotline 24/7",
                  description: "Anruf genügt - wir sind innerhalb von 2 Stunden vor Ort. Erste Sicherung und Absperrung des befallenen Bereichs."
                },
                {
                  step: 2,
                  title: "Ursachenforschung",
                  description: "Wo kommt die Feuchtigkeit her? Rohrbruch, Kondenswasser, aufsteigende Nässe? Ohne Ursachenbeseitigung kommt der Schimmel wieder!"
                },
                {
                  step: 3,
                  title: "Laboranalyse",
                  description: "Proben nehmen, ins Labor schicken. Welcher Schimmel, wie gefährlich, wie tief im Material? Das bestimmt die Sanierungsmethode."
                },
                {
                  step: 4,
                  title: "Abschottung & Schutz",
                  description: "Befallene Bereiche luftdicht abschotten. Unterdruck aufbauen, damit keine Sporen in andere Räume gelangen."
                },
                {
                  step: 5,
                  title: "Entfernung & Desinfektion",
                  description: "Befallenes Material raus, alles desinfizieren. Bei tiefem Befall auch Putz und Dämmung entfernen."
                },
                {
                  step: 6,
                  title: "Trocknung & Wiederaufbau",
                  description: "Alles durchtrocknen, neue Materialien einbauen. Mit schimmelresistenten Produkten für dauerhaften Schutz."
                },
                {
                  step: 7,
                  title: "Endkontrolle & Freigabe",
                  description: "Luftkeimmessung zum Abschluss. Erst wenn alles im grünen Bereich ist, geben wir die Räume frei."
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

          {/* Kosten */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Was kostet Schimmelpilzsanierung in Bielefeld?</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Die Kosten hängen vom Umfang ab - kleine Ecke im Bad oder ganzer Dachstuhl macht
                nen riesen Unterschied. Hier mal Richtwerte aus unseren Projekten in Bielefeld:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Kleine Sanierung (bis 2m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Bad-Fugen erneuern: ab 300€</li>
                    <li>• Fensterlaibung: ab 500€</li>
                    <li>• Kleine Wandfläche: ab 800€</li>
                    <li>• Mit Ursachenbeseitigung: +500€</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Große Sanierung (über 10m²)</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>• Komplettes Zimmer: ab 2.500€</li>
                    <li>• Keller komplett: ab 5.000€</li>
                    <li>• Dachstuhl: ab 8.000€</li>
                    <li>• Wasserschaden-Folge: oft Versicherung</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <h3 className="font-bold text-white mb-2 flex items-center">
                  <span className="mr-2 text-blue-400 font-bold">ℹ️</span>
                  Versicherung zahlt oft!
                </h3>
                <p className="text-sm text-white/90">
                  Bei Wasserschäden zahlt meist die Gebäude- oder Hausratversicherung. Wir helfen
                  bei der Schadensaufnahme und rechnen direkt mit der Versicherung ab. Das spart
                  Ihnen viel Papierkram!
                </p>
              </div>
            </div>
          </div>

          {/* Prävention */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">So verhindern Sie Schimmel in Zukunft</h2>
            <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-xl p-8 backdrop-blur-lg border border-white/20">
              <p className="text-lg mb-6 text-white/90">
                Nach der Sanierung geben wir Ihnen immer Tipps, damit der Schimmel nicht wiederkommt.
                Viele Bielefelder machen die gleichen Fehler - hier die wichtigsten Regeln:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-3">Richtig Lüften</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-green-400 flex-shrink-0 font-bold">✓</span>
                      3x täglich Stoßlüften für 5-10 Minuten
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-green-400 flex-shrink-0 font-bold">✓</span>
                      Durchzug schaffen - gegenüberliegende Fenster auf
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-green-400 flex-shrink-0 font-bold">✓</span>
                      Nach Duschen/Kochen sofort lüften
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-red-400 flex-shrink-0 font-bold">✗</span>
                      Keine Kippstellung im Winter - bringt nix!
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Richtig Heizen</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-green-400 flex-shrink-0 font-bold">✓</span>
                      Mindestens 16°C in allen Räumen
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-green-400 flex-shrink-0 font-bold">✓</span>
                      Türen zu kalten Räumen geschlossen halten
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-green-400 flex-shrink-0 font-bold">✓</span>
                      Möbel 5cm von Außenwänden wegrücken
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 text-red-400 flex-shrink-0 font-bold">✗</span>
                      Nicht komplett auskühlen lassen - kostet mehr!
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-white/70 mt-6 italic">
                Tipp: Ein Hygrometer für 10€ zeigt die Luftfeuchtigkeit. Über 60% = Schimmelgefahr!
                Unter 40% = zu trocken. 45-55% ist perfekt.
              </p>
            </div>
          </div>

          {/* Lokale Expertise */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Schimmelpilzsanierung in allen Stadtteilen</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="font-bold text-cerulean mb-2">Bielefeld-Mitte</div>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Altbauten Kesselbrink</li>
                  <li>• Uni-Gebäude</li>
                  <li>• Bürokomplexe</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-cerulean mb-2">Brackwede</div>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 60er-Jahre Bauten</li>
                  <li>• Mehrfamilienhäuser</li>
                  <li>• Feuchte Keller</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-cerulean mb-2">Schildesche</div>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Villen-Sanierung</li>
                  <li>• Altbau-Schimmel</li>
                  <li>• Dachgeschosse</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-cerulean mb-2">Sennestadt</div>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Reihenhäuser</li>
                  <li>• Plattenbauten</li>
                  <li>• Kellerschimmel</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-cerulean mb-2">Heepen</div>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Industriehallen</li>
                  <li>• Lagerhallen</li>
                  <li>• Bürogebäude</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-cerulean mb-2">Jöllenbeck</div>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Einfamilienhäuser</li>
                  <li>• Bauernhöfe</li>
                  <li>• Scheunen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Häufige Fragen zur Schimmelsanierung</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Ist Schimmel wirklich so gefährlich?",
                  a: "Ja! Schimmelsporen können Allergien, Asthma und andere Atemwegserkrankungen auslösen. Besonders Schwarzschimmel produziert Giftstoffe. Kinder und Immunschwache sind besonders gefährdet. Nicht auf die leichte Schulter nehmen!"
                },
                {
                  q: "Kann ich Schimmel selbst entfernen?",
                  a: "Bei kleinen Flächen unter 0,5m² mit Essig oder Alkohol möglich. Aber: Die Ursache bleibt! Und ohne Schutzkleidung verteilen Sie die Sporen nur. Ab 0,5m² sollten Profis ran - alles andere ist gefährlich."
                },
                {
                  q: "Kommt der Schimmel nach Sanierung wieder?",
                  a: "Nicht wenn wir die Ursache beseitigt haben! Wir sanieren nicht nur oberflächlich, sondern beheben das Feuchtigkeitsproblem. Plus: Anti-Schimmel-Beschichtungen als Langzeitschutz. 5 Jahre Garantie!"
                },
                {
                  q: "Zahlt die Versicherung?",
                  a: "Bei Wasserschäden (Rohrbruch, Überschwemmung) meist ja. Bei Schimmel durch falsches Lüften eher nicht. Wir checken das für Sie und helfen beim Versicherungskram."
                },
                {
                  q: "Wie lange dauert die Sanierung?",
                  a: "Kleine Fläche: 1-2 Tage. Ganzes Zimmer: 3-5 Tage. Komplette Wohnung: 1-2 Wochen. Inklusiv Trocknungszeit und Wiederaufbau. Wir arbeiten auch am Wochenende!"
                },
                {
                  q: "Was kostet ein Gutachten?",
                  a: "Erstbegehung kostenlos! Laboranalyse ab 150€. Ausführliches Gutachten mit Sanierungskonzept ab 500€. Oft übernimmt das die Versicherung oder der Vermieter."
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
              Schimmel entdeckt? Sofort handeln!
            </h2>
            <p className="text-xl mb-6 text-white/90">
              Je länger Sie warten, desto schlimmer wird's. Rufen Sie jetzt an -
              wir sind in 2 Stunden da! Kostenlose Erstbegehung, faire Preise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+491748083023"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-colors animate-pulse"
              >
                <span className="mr-2 text-xl">📞</span>
                NOTFALL: 0174 8083023
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-oxford-blue rounded-xl font-bold text-lg transition-colors"
              >
                <span className="mr-2 text-xl">📧</span>
                Beratung anfragen
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
                "name": "RückbauPRO Bielefeld - Schimmelpilzsanierung",
                "description": "Professionelle Schimmelpilzsanierung in Bielefeld. 24/7 Notdienst, zertifizierte Sanierung, dauerhafte Beseitigung. Gesund wohnen ohne Schimmel!",
                "url": "https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld",
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