'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function SchadstoffanmeldungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      {/* Floating Background Elements */}

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-24 md:pb-32 flex content-center items-center justify-center min-h-[60vh] md:min-h-[75vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
                  Schadstoffanmeldung Bielefeld
                </h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300 px-4">
                  Professionelle Anmeldung & Dokumentation von Schadstoffen - TRGS-konform & rechtssicher
                </p>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <a
                    href="tel:+4952199998480"
                    className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center justify-center text-sm md:text-base"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0521 9999 8480
                  </a>
                  <a
                    href="#kontakt"
                    className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center text-sm md:text-base"
                  >
                    Kostenloses Angebot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 md:pb-20 bg-gray-900 -mt-24">
        <div className="container mx-auto px-4">
          {/* Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:pt-12 pt-6 mb-12 md:mb-16">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-red-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">TRGS-konform</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Alle Anmeldungen nach aktuellen technischen Regeln
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Vollständige Dokumentation</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Lückenlose Nachweise für Behörden und Versicherungen
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-green-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Rechtssicherheit</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Schutz vor Bußgeldern und Haftungsrisiken
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-wrap items-center mt-8 md:mt-12">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto space-y-6">
              {/* Introduction */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-semibold text-white">
                  Schadstoffanmeldung Bielefeld - Warum die so wichtig ist
                </h2>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Vorletzte Woche ham wir nem Kollegen aus der Branche geholfen - der hatte bei nem Abbruch in
                    Sennestadt Asbest gefunden, aber nicht rechtzeitig angemeldet. Zack, Bußgeldbescheid über 15.000
                    Euro vom Umweltamt! Sowas passiert leider öfter als man denkt. Viele wissen nicht, dass man
                    Schadstoffe vor Beginn der Arbeiten beim Umweltamt und der Gewerbeaufsicht anmelden muss. Und
                    zwar schriftlich, mit allem Schnickschnack!
                  </p>
                  <p>
                    In Bielefeld und ganz NRW gibts da klare Vorschriften. Asbest, KMF, PCB, PAK, Blei - sobald Sie
                    mit sowas arbeiten, müssen die Behörden Bescheid wissen. Die Schadstoffanmeldung ist kein
                    bürokratischer Schnickschnack, sondern schützt Ihre Mitarbeiter, die Nachbarn und am Ende auch Sie
                    selbst vor richtig Ärger. Wir machen das seit Jahren für unsere Kunden und wissen genau welche
                    Formulare wohin müssen!
                  </p>
                </div>
              </div>

              {/* What needs to be reported */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Welche Schadstoffe müssen angemeldet werden?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Nicht jeder Schadstoff muss angemeldet werden, aber die meisten schon. Hier die wichtigsten
                    die in Bielefeld ständig vorkommen:
                  </p>
                  <p className="font-semibold text-white">Asbest (TRGS 519)</p>
                  <p>
                    Der Klassiker! Bei JEDEM Asbest-Arbeiten - egal ob Asbestzement-Platten auf dem Dach oder
                    Spritzasbest im Keller - muss mindestens 7 Tage vorher ne Anmeldung bei der Bezirksregierung
                    Detmold raus. Das gilt auch für kleine Mengen! Viele denken "ach, ist ja nur ne Wellplatte",
                    aber das Gesetz macht da keine Unterschiede. Ohne Anmeldung drohen Bußgelder bis 30.000 Euro.
                  </p>
                  <p className="font-semibold text-white">Künstliche Mineralfasern / KMF (TRGS 521)</p>
                  <p>
                    Alte Steinwolle, Glaswolle und Mineralfaserdämmung aus der Zeit vor 2000 - das ist alles
                    gesundheitsschädlich und meldepflichtig. Grade in Bielefeld haben wir viele Gebäude aus den
                    60er bis 90er Jahren wo das Zeug verbaut wurde. Die Anmeldung geht ans Umweltamt der Stadt
                    Bielefeld, mindestens 1 Woche vor Arbeitsbeginn.
                  </p>
                  <p className="font-semibold text-white">PCB (TRGS 524)</p>
                  <p>
                    Polychlorierte Biphenyle in alten Fugenmassen - findet man oft in Schulen und Plattenbauten
                    aus den 60ern und 70ern. Wenn die PCB-Werte über nem bestimmten Grenzwert liegen, muss das
                    angemeldet werden. Auch hier: Umweltamt Bielefeld und Gewerbeaufsicht müssen informiert werden.
                  </p>
                  <p className="font-semibold text-white">PAK / Teer</p>
                  <p>
                    Polyzyklische aromatische Kohlenwasserstoffe in alten Parkettkleber, Dachpappe oder Teerbelägen.
                    Findet man oft bei Sanierungen von Altbauten. Ab bestimmten Konzentrationen auch meldepflichtig,
                    vorallem wenn größere Mengen anfallen.
                  </p>
                  <p className="font-semibold text-white">Blei und Schwermetalle</p>
                  <p>
                    Alte Bleileitungen, bleihaltige Farben, Bleiakkus - alles was mit Schwermetallen zu tun hat und
                    in größeren Mengen anfällt, muss dokumentiert und oft auch angemeldet werden.
                  </p>
                  <p className="font-semibold text-white">Dioxine und Furane</p>
                  <p>
                    Kommen manchmal in alten Holzschutzmitteln vor oder entstehen beim unsachgemäßen Verbrennen.
                    Sehr giftig, sehr meldepflichtig!
                  </p>
                </div>
              </div>

              {/* When to report */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Wann muss angemeldet werden?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Das Timing ist mega wichtig! Viele machen den Fehler und melden erst an wenn sie schon angefangen
                    haben zu arbeiten - zu spät! Hier die Fristen:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Asbest:</strong> Mindestens 7 Tage VOR Arbeitsbeginn bei der Bezirksregierung Detmold anmelden</li>
                    <li><strong>KMF:</strong> Mindestens 1 Woche vorher beim Umweltamt der Stadt Bielefeld</li>
                    <li><strong>PCB:</strong> 2 Wochen vor Beginn der Sanierung, manchmal sogar früher wenn's kompliziert ist</li>
                    <li><strong>Andere Schadstoffe:</strong> Meistens 1-2 Wochen Vorlauf, kommt auf die Menge und Gefährlichkeit an</li>
                  </ul>
                  <p>
                    Wichtig: Die Fristen sind Mindestfristen! Wenn die Behörde Rückfragen hat oder Auflagen macht,
                    kann's noch länger dauern. Wir empfehlen immer 3-4 Wochen Vorlauf einzuplanen, dann ist man auf
                    der sicheren Seite.
                  </p>
                  <p>
                    Und noch was: Die Anmeldung muss schriftlich erfolgen! Ein Anruf reicht nicht. Braucht alles
                    seine Ordnung mit Unterschrift, Stempel, dem ganzen Programm. Wir haben die Formulare alle
                    parat und füllen die für Sie aus.
                  </p>
                </div>
              </div>

              {/* Which authorities */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Welche Behörden müssen informiert werden?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Je nach Schadstoff sind verschiedene Ämter zuständig. Das ist für Außenstehende oft verwirrend,
                    aber wir kennen uns da aus:
                  </p>
                  <p className="font-semibold text-white">Bezirksregierung Detmold</p>
                  <p>
                    Die ist zuständig für alle Asbest-Anmeldungen in OWL. Die sitzen in Detmold und haben ne eigene
                    Abteilung für Arbeitsschutz und Gewerbeaufsicht. Dorthin geht die ASI-Anmeldung (Anzeige für
                    Arbeiten mit asbesthaltigen Materialien). Die prüfen dann ob alles in Ordnung ist und geben
                    grünes Licht - oder machen Auflagen.
                  </p>
                  <p className="font-semibold text-white">Umweltamt Stadt Bielefeld</p>
                  <p>
                    Sitzt am Niederwall und ist zuständig für alle anderen Schadstoffe: KMF, PCB, PAK, Blei usw.
                    Die wollen wissen was wo entsorgt wird und wie der Transport abläuft. Ausserdem prüfen die ob
                    Nachbarn oder die Umwelt gefährdet sind.
                  </p>
                  <p className="font-semibold text-white">Gewerbeaufsichtsamt</p>
                  <p>
                    Kontrolliert den Arbeitsschutz. Die wollen sicherstellen dass Ihre Mitarbeiter geschützt sind
                    und die richtigen Schutzmaßnahmen getroffen werden. Bei größeren Sanierungen kommen die auch
                    mal unangemeldet vorbei und kontrollieren.
                  </p>
                  <p className="font-semibold text-white">Bauaufsicht</p>
                  <p>
                    Bei manchen Schadstoffen (vorallem wenn's um tragende Bauteile geht) muss auch die Bauaufsicht
                    informiert werden. Die prüfen dann ob die Statik noch passt wenn schadstoffbelastete Teile
                    entfernt werden.
                  </p>
                  <p className="font-semibold text-white">Untere Wasserbehörde</p>
                  <p>
                    Wenn Schadstoffe ins Grundwasser gelangen könnten (zum Beispiel bei PAK-belasteten Böden),
                    muss auch die Wasserbehörde informiert werden. Die gibt dann vor wie man das Grundwasser
                    schützen muss.
                  </p>
                </div>
              </div>

              {/* What information is needed */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Welche Informationen braucht die Anmeldung?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Die Behörden wollen's genau wissen! Hier was alles in so ne Schadstoffanmeldung rein muss:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Bauvorhaben:</strong> Was wird gemacht? Abbruch, Sanierung, Entkernung?</li>
                    <li><strong>Adresse:</strong> Genaue Anschrift der Baustelle mit Flurstücknummer</li>
                    <li><strong>Auftraggeber:</strong> Wer ist der Eigentümer? Name, Adresse, Telefon</li>
                    <li><strong>Ausführende Firma:</strong> Also wir! Mit Firmendaten und Sachkundenachweis</li>
                    <li><strong>Art des Schadstoffs:</strong> Was genau? Asbest? KMF? PCB? Wo wurde das gefunden?</li>
                    <li><strong>Menge:</strong> Wieviel Kubikmeter oder Tonnen fallen an?</li>
                    <li><strong>Lage im Gebäude:</strong> Wo genau sitzt der Schadstoff? Dach, Keller, Wände?</li>
                    <li><strong>Arbeitsverfahren:</strong> Wie wird entfernt? Nass oder trocken? Mit welchen Maschinen?</li>
                    <li><strong>Schutzmaßnahmen:</strong> Welche Schutzausrüstung wird verwendet? Absaugung? Schleusen?</li>
                    <li><strong>Entsorgung:</strong> Wo kommt der Schadstoff hin? Name der Entsorgungsfirma und Deponie</li>
                    <li><strong>Zeitplan:</strong> Wann fangen die Arbeiten an, wie lange dauern sie?</li>
                    <li><strong>Schadstoffgutachten:</strong> Muss als Anlage beigefügt werden</li>
                    <li><strong>Grundrisse/Fotos:</strong> Damit die Behörde sich ein Bild machen kann</li>
                  </ul>
                  <p>
                    Klingt nach viel Arbeit? Ist es auch! Aber wir haben Vorlagen für alle Schadstofftypen und
                    können die Anmeldung schnell ausfüllen. Die meisten Infos haben wir ja sowieso aus dem
                    Schadstoffgutachten.
                  </p>
                </div>
              </div>

              {/* Process */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Wie läuft die Schadstoffanmeldung ab?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Damit Sie wissen was auf Sie zukommt, hier der typische Ablauf:
                  </p>
                  <p className="font-semibold text-white">1. Schadstoffgutachten erstellen lassen</p>
                  <p>
                    Ohne Gutachten keine Anmeldung! Zuerst muss ein Sachverständiger kommen und Proben nehmen.
                    Der untersucht die im Labor und erstellt nen Bericht wo genau drin steht was für Schadstoffe
                    wo sind. Das dauert normalerweise 1-2 Wochen. Wir arbeiten mit erfahrenen Gutachtern zusammen
                    die schnell sind.
                  </p>
                  <p className="font-semibold text-white">2. Arbeitsplan entwickeln</p>
                  <p>
                    Aufgrund vom Gutachten planen wir wie die Sanierung ablaufen soll. Welche Schutzmaßnahmen
                    brauchen wir? Wie viele Leute? Welche Maschinen? Das alles muss in die Anmeldung rein.
                  </p>
                  <p className="font-semibold text-white">3. Anmeldeformulare ausfüllen</p>
                  <p>
                    Jetzt kommt der Papierkram! Wir füllen die entsprechenden Formulare aus - bei Asbest ist das
                    die ASI-Anzeige, bei anderen Schadstoffen gibt's eigene Formulare. Alles muss handschriftlich
                    unterschrieben werden (ja, wirklich!).
                  </p>
                  <p className="font-semibold text-white">4. Unterlagen zusammenstellen</p>
                  <p>
                    Zur Anmeldung gehören noch: Kopie vom Schadstoffgutachten, Grundrisse vom Gebäude, Fotos der
                    betroffenen Bereiche, Nachweise über Sachkunde der Mitarbeiter, Entsorgungsnachweise. Alles
                    schön ordentlich in nem Ordner.
                  </p>
                  <p className="font-semibold text-white">5. Anmeldung einreichen</p>
                  <p>
                    Die kompletten Unterlagen gehen raus - bei Asbest per Post oder persönlich zur Bezirksregierung
                    Detmold, bei anderen Schadstoffen ans Umweltamt Bielefeld. Wir machen das persönlich, dann
                    hat man nen Ansprechpartner und kann direkt Fragen klären.
                  </p>
                  <p className="font-semibold text-white">6. Wartezeit / Rückfragen</p>
                  <p>
                    Jetzt heisst es warten. Die Behörde prüft die Unterlagen und meldet sich wenn was fehlt oder
                    unklar ist. Manchmal gibt's auch Auflagen: "Die Arbeiten dürfen nur zwischen 8 und 17 Uhr
                    stattfinden" oder "Es muss ein zusätzliches Gutachten erstellt werden". Solche Sachen.
                  </p>
                  <p className="font-semibold text-white">7. Freigabe</p>
                  <p>
                    Wenn alles passt, kommt die Freigabe - manchmal schriftlich, manchmal auch nur mündlich mit
                    nem Aktenvermerk. Ab dann darf gearbeitet werden! Wichtig: Die Freigabe muss auf der Baustelle
                    vorliegen, sonst gibt's Ärger bei Kontrollen.
                  </p>
                  <p className="font-semibold text-white">8. Abschlussmeldung</p>
                  <p>
                    Nach Abschluss der Arbeiten muss noch ne Abschlussmeldung raus. Die Behörde will wissen:
                    Wurde alles wie geplant durchgeführt? Gab's Probleme? Wo ist der Schadstoff jetzt? Entsorgungsnachweise
                    müssen beigefügt werden.
                  </p>
                </div>
              </div>

              {/* Costs */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was kostet die Schadstoffanmeldung?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Die Anmeldung selbst kostet bei den Behörden normalerweise keine Gebühren - die ist quasi
                    umsonst. ABER: Der ganze Prozdrumherum kostet natürlich Geld:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Schadstoffgutachten:</strong> 800-3.000 Euro (je nach Größe und Komplexität)</li>
                    <li><strong>Unsere Dienstleistung (Anmeldung erstellen und einreichen):</strong> 300-800 Euro</li>
                    <li><strong>Nachweise und Bescheinigungen:</strong> 100-300 Euro</li>
                    <li><strong>Ggf. zusätzliche Gutachten bei Auflagen:</strong> 500-2.000 Euro</li>
                  </ul>
                  <p>
                    Unterm Strich müssen Sie mit 1.200-6.000 Euro rechnen für den kompletten Anmeldeprozess.
                    Das hört sich vielleicht nach viel an, aber bedenken Sie: Ohne ordnungsgemäße Anmeldung
                    drohen Bußgelder bis 50.000 Euro! Außerdem haften Sie persönlich wenn durch unsachgemäße
                    Arbeit jemand zu Schaden kommt.
                  </p>
                  <p>
                    Der beste Deal: Wenn Sie uns sowieso mit der Schadstoffsanierung beauftragen, machen wir
                    die Anmeldung oft zum reduzierten Preis mit dazu. Dann haben Sie alles aus einer Hand und
                    müssen sich um nix kümmern!
                  </p>
                </div>
              </div>

              {/* Consequences without registration */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was passiert ohne ordnungsgemäße Anmeldung?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Manche denken sich "ach, ich meld das einfach nicht, merkt ja keiner". Ganz schlechte Idee!
                    Hier was Ihnen blühen kann:
                  </p>
                  <p className="font-semibold text-white">Bußgelder</p>
                  <p>
                    Bei Asbest-Arbeiten ohne Anmeldung sind Bußgelder bis 30.000 Euro möglich. Bei anderen
                    Schadstoffen immer noch bis 50.000 Euro. Die Behörden verstehen da keinen Spaß, grade wenn's
                    um Asbest geht. Wir haben Fälle erlebt wo Firmen in den Ruin getrieben wurden durch so
                    Strafen.
                  </p>
                  <p className="font-semibold text-white">Baustellenstilllegung</p>
                  <p>
                    Wenn die Gewerbeaufsicht bei ner Kontrolle merkt dass Schadstoffe nicht angemeldet sind,
                    können die die Baustelle sofort stilllegen. Dann darf keiner mehr arbeiten bis alles korrekt
                    nachgemeldet ist. Das kostet Sie Zeit und Geld!
                  </p>
                  <p className="font-semibold text-white">Strafrechtliche Konsequenzen</p>
                  <p>
                    In schweren Fällen - vorallem wenn Menschen gefährdet werden - kann's auch strafrechtlich
                    werden. Gefährdung von Arbeitnehmern oder Anwohnern ist kein Kavaliersdelikt. Da drohen
                    Geldstrafen oder sogar Freiheitsstrafen.
                  </p>
                  <p className="font-semibold text-white">Haftung bei Gesundheitsschäden</p>
                  <p>
                    Wenn ein Mitarbeiter oder Nachbar durch unsachgemäße Schadstoffsanierung krank wird, haften
                    Sie persönlich! Die Berufsgenossenschaft und Versicherungen zahlen nicht wenn Sie illegal
                    ohne Anmeldung gearbeitet haben. Solche Schadensersatzforderungen können in die Hunderttausende
                    gehen.
                  </p>
                  <p className="font-semibold text-white">Probleme beim Verkauf</p>
                  <p>
                    Später mal die Immobilie verkaufen? Der Käufer will sehen dass alle Sanierungen ordnungsgemäß
                    durchgeführt wurden. Ohne Anmeldungen und Nachweise haben Sie ein Problem - der Wert der
                    Immobilie sinkt oder der Verkauf platzt ganz.
                  </p>
                  <p className="font-semibold text-white">Nachträgliche Sanierungspflicht</p>
                  <p>
                    In manchen Fällen müssen Sie nachträglich nochmal ran und alles korrekt machen. Das wird dann
                    doppelt teuer - einmal die Pfusch-Sanierung bezahlt und dann nochmal die richtige.
                  </p>
                </div>
              </div>

              {/* Why choose us */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Warum RückbauPRO für Ihre Schadstoffanmeldung?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Klar könnten Sie theoretisch die Anmeldung auch selbst machen. Aber mal ehrlich: Wollen Sie
                    sich durch Dutzende Formulare und Vorschriften kämpfen? Hier warum's besser ist wenn wir das
                    übernehmen:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Erfahrung:</strong> Wir haben hunderte Schadstoffanmeldungen gemacht, kennen alle Formulare auswendig</li>
                    <li><strong>Keine Fehler:</strong> Wir wissen genau was die Behörden sehen wollen, keine Rückfragen oder Ablehnungen</li>
                    <li><strong>Zeitersparnis:</strong> Während wir uns um den Papierkram kümmern, können Sie sich um wichtigere Dinge kümmern</li>
                    <li><strong>Persönliche Kontakte:</strong> Wir kennen die Sachbearbeiter bei der Bezirksregierung und im Umweltamt</li>
                    <li><strong>Komplettservice:</strong> Bei uns gibts alles aus einer Hand - Gutachten, Anmeldung, Sanierung, Entsorgung</li>
                    <li><strong>Rechtssicherheit:</strong> Sie haben die Gewissheit dass alles korrekt und gesetzeskonform läuft</li>
                    <li><strong>Dokumentation:</strong> Wir archivieren alle Unterlagen - falls Sie die später nochmal brauchen</li>
                    <li><strong>Schnelle Bearbeitung:</strong> Durch unsere Routine können wir Anmeldungen oft in 2-3 Tagen fertigmachen</li>
                  </ul>
                  <p>
                    Und das Beste: Wenn wir die Schadstoffsanierung sowieso machen, ist die Anmeldung oft schon
                    im Preis mit drin oder kostet nur nen kleinen Aufschlag. Lohnt sich also doppelt!
                  </p>
                </div>
              </div>

              {/* Special cases */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Besondere Fälle in Bielefeld
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Bielefeld hat ein paar Besonderheiten die bei der Schadstoffanmeldung beachtet werden müssen:
                  </p>
                  <p className="font-semibold text-white">Schulen und öffentliche Gebäude</p>
                  <p>
                    Bei Sanierungen in Schulen, Kindergärten oder anderen öffentlichen Gebäuden sind die Auflagen
                    nochmal strenger. Da muss oft die Gesundheitsamt mit einbezogen werden und es gibt besondere
                    Schutzmaßnahmen für die Nutzer. Wir haben Erfahrung mit solchen sensiblen Objekten.
                  </p>
                  <p className="font-semibold text-white">Denkmalgeschützte Gebäude</p>
                  <p>
                    In der Bielefelder Altstadt und bei vielen alten Höfen muss zusätzlich die Denkmalbehörde
                    informiert werden. Die wollen sicherstellen dass bei der Schadstoffsanierung keine wertvollen
                    Bauteile beschädigt werden. Das macht den Prozess komplizierter, aber nicht unmöglich.
                  </p>
                  <p className="font-semibold text-white">Wasserschutzgebiete</p>
                  <p>
                    Teile von Bielefeld (vorallem Richtung Senne) liegen in Wasserschutzgebieten. Da sind die
                    Auflagen nochmal härter was Grundwasserschutz angeht. Schadstoffhaltige Abwässer müssen
                    besonders behandelt werden.
                  </p>
                  <p className="font-semibold text-white">Wohngebiete mit empfindlichen Nachbarn</p>
                  <p>
                    In dicht besiedelten Gebieten wie Schildesche oder Brackwede müssen die Nachbarn oft zusätzlich
                    informiert werden. Nicht rechtlich verpflichtend, aber empfehlenswert um Ärger zu vermeiden.
                    Wir helfen dabei die Anwohner richtig zu informieren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-10/12 px-4 ml-auto mr-auto">
              <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 font-semibold text-white text-center">
                Häufige Fragen zur Schadstoffanmeldung
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann ich auch ohne Anmeldung arbeiten wenn's nur wenig Schadstoff ist?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Nein! Die Meldepflicht gilt unabhängig von der Menge. Selbst eine einzelne Asbestzement-Platte
                    muss angemeldet werden. Das Gesetz macht da keine Ausnahmen. Wer ohne Anmeldung arbeitet,
                    riskiert hohe Bußgelder - egal ob 10 oder 1000 Quadratmeter Asbest.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie lange dauert es bis die Behörde antwortet?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Bei Asbest dauert's normalerweise 7-14 Tage nach Einreichung der Unterlagen. Bei anderen
                    Schadstoffen oft schneller, 3-7 Tage. Wenn was fehlt oder unklar ist, kann's länger dauern.
                    Deshalb empfehlen wir immer 3-4 Wochen Vorlauf vor dem geplanten Arbeitsbeginn einzuplanen.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Muss ich als Privatperson auch anmelden?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Ja! Die Anmeldepflicht gilt für alle, egal ob Privatperson, Firma oder öffentliche Hand.
                    Einzige Ausnahme: Ganz kleine Eigenleistung bei nicht-asbesthaltigen Materialien in sehr
                    geringen Mengen. Aber sobald Asbest im Spiel ist oder größere Mengen anfallen, MUSS angemeldet
                    werden. Wir helfen auch Privatleuten bei der Anmeldung!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was ist wenn ich erst während der Arbeiten Schadstoffe finde?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Dann müssen Sie sofort stoppen! Arbeiten einstellen, Bereich absperren, Behörde informieren.
                    Dann muss nachträglich ein Gutachten erstellt und die Anmeldung nachgeholt werden. Erst wenn
                    die Freigabe da ist, darf weitergearbeitet werden. Deshalb empfehlen wir IMMER ein
                    Schadstoffgutachten VOR Beginn der Arbeiten zu machen!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann die Behörde die Arbeiten verbieten?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Theoretisch ja, praktisch kommt das selten vor. Meistens gibt's eher Auflagen: "So und so
                    müssen Sie vorgehen" oder "Sie brauchen noch diese zusätzliche Schutzmaßnahme". Nur wenn
                    die Gefahr zu groß ist oder die Firma nicht sachkundig genug, wird verboten. Mit uns als
                    erfahrenem Partner ist so ein Verbot praktisch ausgeschlossen.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Brauche ich für jede Baustelle eine neue Anmeldung?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Ja! Jede Baustelle ist anders und braucht ihre eigene Anmeldung. Selbst wenn Sie mehrere
                    Objekte kurz hintereinander sanieren - für jedes muss separat angemeldet werden. Eine
                    Sammelanmeldung gibt's nicht. Aber keine Sorge, wenn wir mehrere Projekte für Sie machen,
                    geht's schneller weil wir die Routine haben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="pb-12 md:pb-16 relative block bg-gray-900">
        <div className="container mx-auto px-4 pt-12 md:pt-16">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-8/12 px-4">
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Schadstoffanmeldung in ganz Bielefeld & Ostwestfalen-Lippe
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 text-gray-300">
                  Wir übernehmen Schadstoffanmeldungen in allen Bielefelder Stadtteilen:
                </p>
                <div className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Sennestadt, Stieghorst, Brackwede, Mitte, Schildesche, Jöllenbeck,
                  Heepen, Senne, Quelle, Ummeln, Dornberg, Gadderbaum, Hoberge-Uerentrup,
                  Brake, Brönninghausen, Vilsendorf, Oldentrup, Sieker, Hillegossen,
                  Altenhagen, Milse und Windwehe.
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Auch in Gütersloh, Herford, Paderborn, Bad Salzuflen, Detmold,
                  Lemgo und weiteren Städten in OWL melden wir Schadstoffe fachgerecht an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt">
        /* Related Services - Internal Linking for SEO */

        <RelatedServicesBielefeld currentSlug="schadstoffanmeldung-bielefeld" category="sanierung" maxServices={6} />

 />
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </div>
  );
}
