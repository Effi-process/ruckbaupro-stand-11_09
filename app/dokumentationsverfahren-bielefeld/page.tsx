'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function DokumentationsverfahrenBielefeld() {
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
                  Dokumentationsverfahren Bielefeld
                </h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300 px-4">
                  Professionelle Dokumentation für Abbruch & Schadstoffsanierung - Lückenlos & Behördenkonform
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
                  <Link
                    href="/kontakt"
                    className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center text-sm md:text-base"
                  >
                    Kostenloses Angebot
                  </Link>
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
                  <h6 className="text-xl md:text-2xl font-bold text-white">Lückenlose Dokumentation</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Foto, Video & schriftliche Protokolle für jeden Arbeitsschritt
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
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
                  <h6 className="text-xl md:text-2xl font-bold text-white">Rechtssicher</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Alle Nachweise für Bauamt, Berufsgenossenschaft & Versicherungen
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Digital & Archiviert</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Alle Unterlagen digital gespeichert und jederzeit abrufbar
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
                  Dokumentationsverfahren Bielefeld - Wenns drauf ankommt was schwarz auf weiss zu haben
                </h2>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Letztes Jahr hatten wir nen Fall in Brackwede - Asbestsanierung in nem alten Industriegebäude.
                    Alles lief super, Material wurde fachgerecht entsorgt, Baustelle sauber übergeben. Drei Monate
                    später kam die Berufsgenossenschaft zur Nachkontrolle und wollte jeden einzelnen Arbeitsschritt
                    dokumentiert sehen. Zum Glück hatten wir alles penibel fotografiert, protokolliert und archiviert.
                    Ohne die Dokumentation hätt's richtig Ärger gegeben!
                  </p>
                  <p>
                    Genau deswegen nehmen wir Dokumentation so ernst. Bei Abbruch- und Schadstoffsanierungsarbeiten
                    in Bielefeld ist ne lückenlose Dokumentation nicht nur ne nette Idee - die ist Pflicht! Bauamt,
                    Berufsgenossenschaft, Umweltamt, Versicherungen - alle wollen nachvollziehen können was gemacht
                    wurde, wie es gemacht wurde und wohin die Abfälle gegangen sind. Wir dokumentieren jeden
                    Arbeitsschritt von Anfang bis Ende. Digital, archiviert und jederzeit abrufbar.
                  </p>
                </div>
              </div>

              {/* Why Documentation */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Warum ist Dokumentation bei Abbruch und Sanierung so wichtig?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Viele denken: "Hauptsache das Zeug ist weg, wen interessiert wie's dokumentiert wurde?" Aber
                    die Realität sieht anders aus. Hier sind die Gründe warum ordentliche Dokumentation absolut
                    unverzichtbar ist:
                  </p>
                  <p className="font-semibold text-white">Behördliche Nachweispflichten</p>
                  <p>
                    Das Bauamt will nach Abschluss der Arbeiten sehen dass alles gemäß Genehmigung gelaufen ist.
                    Bei Schadstoffsanierungen kommt die Umweltbehörde dazu. Die wollen nicht nur nen Zettel wo drauf
                    steht "Alles erledigt" - die wollen Fotos vom Zustand vorher und nachher, Protokolle über jeden
                    Arbeitsschritt, Nachweise über die fachgerechte Entsorgung. Ohne die kriegen Sie keine Abnahme
                    und die Baustelle gilt nicht als abgeschlossen!
                  </p>
                  <p className="font-semibold text-white">Berufsgenossenschaft (BG Bau)</p>
                  <p>
                    Die BG kann jederzeit kommen und überprüfen ob alle Arbeitsschutzmaßnahmen eingehalten wurden.
                    Grade bei Asbestarbeiten sind die sehr streng! Wir müssen nachweisen: Welche Schutzausrüstung
                    wurde getragen? Wie wurde abgesperrt? Wer war geschult? Wo sind die Schulungsnachweise? Wenn
                    da was fehlt, kann's richtig teuer werden - Bußgelder bis 10.000 Euro pro Verstoß!
                  </p>
                  <p className="font-semibold text-white">Haftung und Gewährleistung</p>
                  <p>
                    Wenn nach nem Jahr plötzlich Schäden auftauchen oder jemand behauptet wir hätten nicht ordentlich
                    gearbeitet, ist die Dokumentation unsere Lebensversicherung. Mit Fotos und Protokollen können wir
                    genau nachweisen was wir wann wie gemacht haben. Das schützt uns - und Sie als Auftraggeber!
                  </p>
                  <p className="font-semibold text-white">Entsorgungsnachweise</p>
                  <p>
                    Jedes Gramm Asbest, jeder Liter Altöl, jede Tonne Bauschutt muss nachweisbar entsorgt worden sein.
                    Seit 2020 sind die Vorschriften nochmal verschärft worden. Wir müssen lückenlos dokumentieren:
                    Wieviel Material wurde entfernt? Wann wurde es abtransportiert? Wohin ging's? Wer hat's entsorgt?
                    Gibt's ne Entsorgungsbestätigung? Ohne diese Nachweise kriegen Sie vom Bauamt keine Freigabe!
                  </p>
                  <p className="font-semibold text-white">Versicherungsschutz</p>
                  <p>
                    Bei Schäden während der Arbeiten will die Versicherung genau wissen was passiert ist. Ohne
                    ordentliche Dokumentation verweigern viele Versicherungen die Zahlung. Wir hatten mal nen Fall
                    wo beim Abbruch versehentlich ne Wasserleitung beschädigt wurde. Nur weil wir alles fotografiert
                    und protokolliert hatten, hat die Versicherung den Schaden übernommen.
                  </p>
                  <p className="font-semibold text-white">Verkauf der Immobilie</p>
                  <p>
                    Wenn Sie das Grundstück später verkaufen wollen, fragt der Käufer: "Was wurde hier gemacht?"
                    Mit ner lückenlosen Dokumentation können Sie nachweisen dass alle Sanierungen fachgerecht
                    durchgeführt wurden. Das erhöht den Verkaufswert und schützt vor späteren Regressansprüchen!
                  </p>
                </div>
              </div>

              {/* What We Document */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was dokumentieren wir alles?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Bei uns wird nix dem Zufall überlassen. Hier ist ne komplette Liste von dem was wir dokumentieren:
                  </p>
                  <p className="font-semibold text-white">Vor Arbeitsbeginn</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Bestandsaufnahme mit Fotos und Videos von allen Räumen und Gebäudeteilen</li>
                    <li>Dokumentation des Zustands von angrenzenden Gebäuden (wichtig bei Nachbarschaftsstreitigkeiten!)</li>
                    <li>Erfassung aller sichtbaren Schäden und Mängel (damit uns später keiner was unterstellen kann)</li>
                    <li>Schadstoffgutachten und Probenahmeprotokolle</li>
                    <li>Gefährdungsbeurteilung und Arbeitsschutzplan</li>
                    <li>Genehmigungen und Auflagen vom Bauamt</li>
                  </ul>
                  <p className="font-semibold text-white">Während der Arbeiten</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Tägliche Fotodokumentation vom Baufortschritt</li>
                    <li>Arbeitsprotokolle: Wer war wann wo tätig?</li>
                    <li>Dokumentation der Schutzmaßnahmen (Absperrungen, Schutzwände, Absaugungen)</li>
                    <li>Nachweis über getragene Schutzausrüstung bei Schadstoffarbeiten</li>
                    <li>Messungen (Luftmessungen bei Asbestarbeiten, Staubmessungen, etc.)</li>
                    <li>Entsorgungsprotokolle: Was wurde wann abtransportiert?</li>
                    <li>Lieferscheine und Wiegescheine vom Entsorgungsbetrieb</li>
                    <li>Besondere Vorkommnisse (Schäden, Verzögerungen, Funde von nicht erwarteten Schadstoffen)</li>
                  </ul>
                  <p className="font-semibold text-white">Nach Abschluss der Arbeiten</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Abschlussdokumentation mit Fotos vom gereinigten und geräumten Zustand</li>
                    <li>Freimessungsprotokolle bei Schadstoffsanierungen (Nachweis dass alles weg ist!)</li>
                    <li>Entsorgungsnachweise für alle entsorgten Materialien</li>
                    <li>Abnahmeprotokolle mit dem Auftraggeber</li>
                    <li>Mängelliste (falls noch was zu machen ist)</li>
                    <li>Übergabe aller Unterlagen in digitaler Form</li>
                  </ul>
                  <p>
                    Das klingt nach viel Papier? Ist es auch! Aber genau deswegen machen WIR das und nicht Sie.
                    Wir haben Vorlagen für alle Protokolle, unsere Mitarbeiter sind geschult alles zu fotografieren
                    und zu dokumentieren. Am Ende kriegen Sie nen USB-Stick mit allem drauf - schön sortiert und
                    jederzeit abrufbar.
                  </p>
                </div>
              </div>

              {/* Digital Documentation */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Digitale Dokumentation - Alles auf nem Klick
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Früher haben wir alles auf Papier dokumentiert. Riesige Ordner voll mit Fotos, Protokollen,
                    Nachweisen. War ne Katastrophe wenn man dann nach zwei Jahren was suchen musste! Seit ein
                    paar Jahren machen wir alles digital - viel übersichtlicher und sicherer.
                  </p>
                  <p className="font-semibold text-white">So funktioniert unsere digitale Dokumentation:</p>
                  <p>
                    Jedes Projekt kriegt ne eigene Projektnummer. Alle Fotos, Videos, Protokolle und Nachweise
                    werden digital gespeichert und mit Datum, Uhrzeit und GPS-Koordinaten versehen. Kein Foto
                    kann nachträglich manipuliert werden - das ist gerichtsfest!
                  </p>
                  <p>
                    Am Ende vom Projekt kriegen Sie:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>USB-Stick mit allen Dokumenten, schön sortiert nach Datum und Kategorie</li>
                    <li>PDF-Abschlussbericht mit allen wichtigen Infos auf nen Blick</li>
                    <li>Zugang zu unserem Online-Archiv (falls Sie später nochmal was brauchen)</li>
                    <li>Alle Entsorgungsnachweise und Freimessungsprotokolle in Papierform UND digital</li>
                  </ul>
                  <p>
                    Der Vorteil: Wenn in fünf Jahren das Bauamt oder die Versicherung was wissen will, loggen Sie
                    sich einfach ein und haben alles parat. Kein langes Suchen in Ordnern oder im Keller!
                  </p>
                  <p className="font-semibold text-white">Datenschutz und Datensicherheit</p>
                  <p>
                    Natürlich sind alle Daten verschlüsselt und werden auf deutschen Servern gespeichert. Nur Sie
                    und wir haben Zugang zu Ihrem Projektordner. Nach 10 Jahren werden die Daten automatisch gelöscht
                    (außer Sie wollen ne längere Archivierung). DSGVO-konform versteht sich!
                  </p>
                </div>
              </div>

              {/* Photo and Video Documentation */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Foto- und Videodokumentation - Ein Bild sagt mehr als tausend Worte
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Man kann noch so viel schreiben in Protokollen - am Ende will jeder Fotos sehen. Deswegen
                    fotografieren und filmen wir alles was wichtig ist.
                  </p>
                  <p className="font-semibold text-white">Was wird fotografiert?</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Zustand vor Beginn der Arbeiten (jeder Raum aus mehreren Perspektiven)</li>
                    <li>Alle Schadstoffvorkommen (Asbest, PCB, KMF, etc.) vor der Sanierung</li>
                    <li>Schutzmaßnahmen und Absperrungen</li>
                    <li>Jeder wichtige Arbeitsschritt (zum Beispiel Demontage von Asbestplatten)</li>
                    <li>Beladung der Entsorgungsfahrzeuge</li>
                    <li>Zustand nach Abschluss der Arbeiten</li>
                    <li>Besondere Vorkommnisse oder Funde</li>
                  </ul>
                  <p className="font-semibold text-white">Videodokumentation</p>
                  <p>
                    Bei größeren Projekten machen wir zusätzlich Videobegehungen. Vor Arbeitsbeginn gehen wir
                    mit der Kamera durchs ganze Gebäude und filmen alles. Das gleiche nochmal am Ende. So kann
                    man nachher genau sehen wie's vorher war und wie's nachher aussieht. Super hilfreich bei
                    Streitfällen oder wenn Jahre später Fragen auftauchen!
                  </p>
                  <p className="font-semibold text-white">Professionelle Qualität</p>
                  <p>
                    Wir fotografieren nicht mit dem Handy, sondern mit professionellen Kameras. Jedes Foto kriegt
                    automatisch nen Datumsstempel und GPS-Koordinaten. Die Bilder sind hochauflösend, man kann
                    auch kleinste Details erkennen. Und alles ist so dokumentiert dass es vor Gericht standhalten
                    würde (haben wir schon mehrfach bewiesen!).
                  </p>
                </div>
              </div>

              {/* Disposal Documentation */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Entsorgungsdokumentation - Wo ist das Zeug hin?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Das ist der Teil wo's richtig pingelig wird! Seit ein paar Jahren sind die Vorschriften zur
                    Entsorgungsdokumentation extrem verschärft worden. Früher hat's gereicht wenn die Entsorgungsfirma
                    nen Zettel geschrieben hat "X Tonnen Bauschutt entsorgt". Heute muss jede einzelne Fuhre
                    dokumentiert werden!
                  </p>
                  <p className="font-semibold text-white">Elektronischer Abfallbegleitschein</p>
                  <p>
                    Für gefährliche Abfälle (Asbest, PCB, kontaminierter Boden, etc.) braucht's seit 2020 elektronische
                    Begleitscheine. Das läuft über ein bundesweites System. Jede Fuhre wird erfasst: Was ist drin?
                    Wieviel? Von wo nach wo? Wer transportiert? Wer entsorgt? Wir übernehmen die komplette Abwicklung
                    und Sie kriegen alle Begleitscheine digital und in Papierform.
                  </p>
                  <p className="font-semibold text-white">Entsorgungsnachweise</p>
                  <p>
                    Am Ende jeder Entsorgung kriegen wir vom Entsorger nen Nachweis. Der bescheinigt: Material wurde
                    fachgerecht und umweltkonform entsorgt. Diese Nachweise sammeln wir und geben sie Ihnen weiter.
                    Ohne die kriegen Sie keine Abnahme vom Bauamt!
                  </p>
                  <p className="font-semibold text-white">Wiegescheine</p>
                  <p>
                    Jeder Container der abtransportiert wird, wird gewogen. Einmal voll, einmal leer. Die Differenz
                    ist die entsorgte Menge. Wir dokumentieren alle Wiegescheine und rechnen am Ende zusammen:
                    Wieviel Bauschutt? Wieviel Metall? Wieviel Sondermüll? Passt das mit den Schätzungen zusammen?
                    Wenn nicht, müssen wir nachforschen wo die Differenz herkommt.
                  </p>
                  <p className="font-semibold text-white">Deponiebestätigungen</p>
                  <p>
                    Die Deponie oder Entsorgungsanlage schickt uns ne Bestätigung dass das Material angekommen und
                    fachgerecht entsorgt wurde. Bei Schadstoffen müssen die auch dokumentieren WIE entsorgt wurde
                    (verbrannt, chemisch behandelt, deponiert). Auch diese Bestätigungen reichen wir an Sie weiter.
                  </p>
                  <p>
                    Unterm Strich haben Sie am Ende nen kompletten Nachweis: Jedes Gramm Material kann vom Ursprung
                    bis zur endgültigen Entsorgung nachverfolgt werden. Das nennt man "lückenlose Entsorgungskette" -
                    und genau das verlangen Bauamt und Umweltbehörde!
                  </p>
                </div>
              </div>

              {/* Legal Requirements */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Rechtliche Anforderungen in Bielefeld
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    In Bielefeld und ganz NRW gibt's klare gesetzliche Vorgaben was dokumentiert werden muss.
                    Hier die wichtigsten Vorschriften:
                  </p>
                  <p className="font-semibold text-white">TRGS 519 (Asbest)</p>
                  <p>
                    Die Technischen Regeln für Gefahrstoffe schreiben bei Asbestarbeiten vor: Lückenlose Dokumentation
                    von Schutzmaßnahmen, Messungen, Entsorgung. Jeder Mitarbeiter muss geschult sein (mit Nachweis!),
                    jede Luftmessung dokumentiert, jedes Kilo Asbest muss nachweisbar entsorgt sein. Verstöße können
                    zu Bußgeldern bis 50.000 Euro führen - für JEDEN Verstoß!
                  </p>
                  <p className="font-semibold text-white">Gewerbeabfallverordnung</p>
                  <p>
                    Seit 2018 verschärft: Bauabfälle müssen getrennt werden (Holz, Metall, Kunststoff, Mineralik).
                    Das muss dokumentiert werden! Wir müssen nachweisen dass wir ordentlich getrennt haben und nicht
                    einfach alles in einen Container geschmissen haben. Gemischte Abfälle sind teurer in der Entsorgung
                    UND können zu Strafen führen.
                  </p>
                  <p className="font-semibold text-white">Kreislaufwirtschaftsgesetz</p>
                  <p>
                    Recycling vor Entsorgung! Wir müssen dokumentieren dass wir wiederverwertbare Materialien auch
                    wirklich recycelt haben. Beton wird gebrochen und wiederverwendet, Metall eingeschmolzen, Holz
                    verheizt. Das muss alles nachgewiesen werden durch Entsorgungsbelege.
                  </p>
                  <p className="font-semibold text-white">Bauordnung NRW</p>
                  <p>
                    Die Landesbauordnung verlangt bei Abbrüchen ne Dokumentation der Standsicherheit während der
                    Arbeiten. Bei größeren Abbrüchen muss ein Statiker das abnehmen und dokumentieren. Diese
                    Nachweise sind Teil unserer Gesamtdokumentation.
                  </p>
                  <p className="font-semibold text-white">Berufsgenossenschaftliche Vorschriften</p>
                  <p>
                    Die BG Bau will bei Kontrollen sehen: Gefährdungsbeurteilung, Unterweisungsnachweise,
                    Arbeitsschutzmaßnahmen, Prüfprotokolle für Maschinen und Gerüste. Fehlt da was, kann die
                    Baustelle stillgelegt werden! Wir dokumentieren alles was die BG sehen will.
                  </p>
                </div>
              </div>

              {/* Costs */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was kostet professionelle Dokumentation?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Die gute Nachricht: Bei uns ist die Basisdokumentation im Preis für Abbruch oder Sanierung
                    mit drin! Fotos machen, Protokolle schreiben, Entsorgungsnachweise sammeln - das gehört für
                    uns zum Standard und kostet Sie nix extra.
                  </p>
                  <p>
                    Nur für erweiterte Dokumentationsleistungen berechnen wir Aufschläge:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Professionelle Videobegehung:</strong> 200-500 Euro (je nach Größe)</li>
                    <li><strong>Drohnenaufnahmen:</strong> 300-800 Euro (zum Beispiel für große Industrieabbrüche)</li>
                    <li><strong>3D-Scan vom Gebäude:</strong> 1.000-3.000 Euro (bei denkmalgeschützten Gebäuden manchmal Pflicht)</li>
                    <li><strong>Gutachterliche Beweissicherung:</strong> 500-2.000 Euro (wenn Nachbarn Schäden befürchten)</li>
                    <li><strong>Erweiterte Archivierung:</strong> 50 Euro pro Jahr (über die Standard 10 Jahre hinaus)</li>
                  </ul>
                  <p>
                    Die Kosten hören sich erstmal nach viel an, aber bedenken Sie: OHNE ordentliche Dokumentation
                    riskieren Sie Bußgelder, Nachforderungen und Haftungsrisiken die um Faktor 10 oder 100 höher
                    sein können! Ne professionelle Dokumentation ist ne Versicherung gegen böse Überraschungen.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Warum RückbauPRO für Ihre Dokumentation?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Dokumentation ist für viele Firmen ne lästige Pflicht. Für uns ist es selbstverständlich und
                    Teil unserer Qualitätsstandards. Hier sind unsere Stärken:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Erfahrung:</strong> Wir dokumentieren seit über 15 Jahren Abbruch- und Sanierungsprojekte in Bielefeld</li>
                    <li><strong>Professionelle Ausrüstung:</strong> Hochwertige Kameras, Drohnen, Messgeräte - alles auf neuestem Stand</li>
                    <li><strong>Geschulte Mitarbeiter:</strong> Jeder unserer Leute weiss was dokumentiert werden muss und wie</li>
                    <li><strong>Digitale Archivierung:</strong> Moderne Cloud-Lösung, DSGVO-konform, 10 Jahre gespeichert</li>
                    <li><strong>Gerichtsfeste Unterlagen:</strong> Unsere Dokumentationen wurden schon mehrfach vor Gericht anerkannt</li>
                    <li><strong>Komplettservice:</strong> Von der ersten Bestandsaufnahme bis zur Abschlussdokumentation - alles aus einer Hand</li>
                    <li><strong>Schnelle Verfügbarkeit:</strong> Wenn Sie Unterlagen brauchen, kriegen Sie die innerhalb von 24 Stunden</li>
                  </ul>
                  <p>
                    Am wichtigsten: Wir verstehen dass Dokumentation nicht Selbstzweck ist, sondern Sie und uns
                    absichern soll. Deswegen machen wir's nicht halbherzig, sondern richtig!
                  </p>
                </div>
              </div>

              {/* Real Examples */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Beispiele aus der Praxis
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Hier ein paar echte Fälle aus Bielefeld wo unsere Dokumentation den Unterschied gemacht hat:
                  </p>
                  <p className="font-semibold text-white">Fall 1: Nachbarschaftsstreit in Schildesche</p>
                  <p>
                    Abbruch von nem alten Wohnhaus. Der Nachbar behauptete nach Abschluss der Arbeiten, wir hätten
                    Risse in seine Hauswand gemacht. Zum Glück hatten wir VOR Arbeitsbeginn das komplette Nachbarhaus
                    fotografiert - und siehe da: Die Risse waren schon vorher da! Mit den Fotos konnten wir das
                    beweisen und der Streit war vom Tisch.
                  </p>
                  <p className="font-semibold text-white">Fall 2: BG-Kontrolle in Sennestadt</p>
                  <p>
                    Asbestsanierung in ner alten Schule. Die Berufsgenossenschaft kam unangemeldet zur Kontrolle.
                    Wollten alle möglichen Nachweise sehen: Schulungen, Messungen, Schutzmaßnahmen. Wir konnten
                    innerhalb von 10 Minuten alles vorlegen - digital aufm Tablet. Die Prüferin war so beeindruckt
                    dass sie uns als Beispiel für andere Firmen genannt hat!
                  </p>
                  <p className="font-semibold text-white">Fall 3: Versicherungsfall in Brackwede</p>
                  <p>
                    Bei nem Industrieabbruch ist versehentlich ne Hauptwasserleitung beschädigt worden. Großer
                    Wasserschaden. Die Versicherung wollte nicht zahlen, weil sie behaupteten wir hätten fahrlässig
                    gehandelt. Unsere Videodokumentation zeigte aber: Die Leitung war nicht im Plan eingetragen
                    und wir hatten trotzdem vorsichtig gearbeitet. Mit dem Video als Beweis zahlte die Versicherung
                    doch - hätten wir das Video nicht gehabt, wären wir auf dem Schaden sitzen geblieben!
                  </p>
                  <p className="font-semibold text-white">Fall 4: Umweltamt-Prüfung in Jöllenbeck</p>
                  <p>
                    Sanierung von PCB-belastetem Material in nem alten Bauernhof. Zwei Jahre später kam das
                    Umweltamt und wollte prüfen ob alles ordnungsgemäß entsorgt wurde. Wir konnten lückenlos
                    nachweisen: Wieviel Material entfernt wurde, wann es abtransportiert wurde, wo es entsorgt
                    wurde, welche Bestätigungen vorliegen. Das Umweltamt war zufrieden und wir hatten keine
                    Nachforderungen oder Strafen.
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
                Häufige Fragen zur Dokumentation
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Muss ich die Dokumentation selbst machen oder macht das die Firma?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Die ausführende Firma (also wir) ist für die Dokumentation verantwortlich. Sie als Auftraggeber
                    müssen nur die fertigen Unterlagen aufbewahren. Wir machen alles - fotografieren, protokollieren,
                    archivieren. Sie kriegen am Ende nen USB-Stick mit allem drauf.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie lange muss ich die Unterlagen aufbewahren?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Gesetzlich vorgeschrieben sind mindestens 5 Jahre. Bei Schadstoffsanierungen empfehlen wir aber
                    10 Jahre oder länger. Man weiss nie wann das Bauamt oder ne Versicherung nochmal was wissen will.
                    Wir archivieren die Daten standardmäßig 10 Jahre digital - kostenlos!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was passiert wenn die Dokumentation unvollständig ist?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Dann kriegen Sie keine Abnahme vom Bauamt! Bei Schadstoffsanierungen ist lückenlose Dokumentation
                    Pflicht. Fehlen Entsorgungsnachweise oder Protokolle, müssen die nachgereicht werden - oder im
                    schlimmsten Fall müssen Arbeiten wiederholt werden. Das wird teuer! Deswegen machen wir's von
                    Anfang an richtig.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann ich auch nachträglich noch Dokumentation bekommen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Wenn WIR die Arbeiten gemacht haben - kein Problem! Wir haben alles archiviert und können Ihnen
                    jederzeit wieder Unterlagen schicken. Wenn ne andere Firma gearbeitet hat und die haben nicht
                    dokumentiert - dann wirds schwierig. Nachträgliche Dokumentation ist fast unmöglich und wird von
                    Behörden nicht akzeptiert.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Sind die Fotos und Protokolle vor Gericht verwendbar?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Ja! Unsere Dokumentation ist gerichtsfest. Alle Fotos haben Zeitstempel und GPS-Daten, können
                    nicht nachträglich verändert werden. Wir hatten schon mehrere Fälle wo unsere Dokumentation
                    vor Gericht als Beweismittel anerkannt wurde. Das gibt Ihnen Rechtssicherheit!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kostet die Dokumentation extra oder ist die im Preis drin?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Die Standard-Dokumentation (Fotos, Protokolle, Entsorgungsnachweise) ist bei uns im Preis für
                    Abbruch oder Sanierung mit drin. Nur Spezialleistungen wie Drohnenaufnahmen, 3D-Scans oder
                    gutachterliche Beweissicherung kosten extra. Fragen Sie einfach nach nem Angebot!
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
                  Dokumentationsverfahren in ganz Bielefeld & Ostwestfalen-Lippe
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 text-gray-300">
                  Professionelle Dokumentation für alle Bielefelder Stadtteile:
                </p>
                <div className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Sennestadt, Stieghorst, Brackwede, Mitte, Schildesche, Jöllenbeck,
                  Heepen, Senne, Quelle, Ummeln, Dornberg, Gadderbaum, Hoberge-Uerentrup,
                  Brake, Brönninghausen, Vilsendorf, Oldentrup, Sieker, Hillegossen,
                  Altenhagen, Milse und Windwehe.
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Auch in Gütersloh, Herford, Paderborn, Bad Salzuflen, Detmold,
                  Lemgo und weiteren Städten in OWL dokumentieren wir professionell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking for SEO */}
      <RelatedServicesBielefeld currentSlug="dokumentationsverfahren-bielefeld" category="beratung" maxServices={6} />

      {/* Contact Form */}
      <SimpleContactForm />

      {/* Footer */}
      <FooterWithMarquee />
    </div>
  );
}
