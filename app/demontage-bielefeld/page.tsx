'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';

export default function DemontageBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[75vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-white font-semibold text-5xl mb-4">
                  Demontage Bielefeld
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Professionelle Rückbauarbeiten in ganz OWL - sauber, schnell, zuverlässig
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+4952199998480"
                    className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0521 9999 8480
                  </a>
                  <Link
                    href="/kontakt"
                    className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
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
      <section className="pb-20 bg-gray-900 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Service Cards */}
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Über 500 Projekte</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Erfahrung in allen Demontage-Arten seit 2010
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Festpreisgarantie</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Transparente Preise ohne versteckte Kosten
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Umweltgerecht</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Fachgerechte Trennung und Entsorgung aller Materialien
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
              <h2 className="text-4xl mb-8 font-semibold text-white">
                Professionelle Demontage in Bielefeld
              </h2>

              <div className="text-lg font-light leading-relaxed mt-4 mb-8 text-gray-300">
                <p className="mb-4">
                  Letztes Jahr haben wir über 80 Demontage-Projekte in Bielefeld durchgeführt - von
                  kleinen Badezimmer-Renovierungen in Schildesche bis zum kompletten Fabrikrückbau
                  bei Oetker in Brackwede. Die meisten Kunden rufen uns an, wenn sie merken, dass
                  Demontage mehr ist als nur "kaputt machen". Es geht um saubere Arbeit, Materialtrennung
                  und oft auch um versteckte Schadstoffe. Genau dafür sind wir die Spezialisten in
                  ganz Ostwestfalen-Lippe!
                </p>
                <p className="mb-4">
                  Demontage Bielefeld bedeutet für uns: professioneller Rückbau mit System. Egal ob
                  Küche, Bad, Produktionshalle oder komplettes Bürogebäude - wir demontieren alles
                  fachgerecht und entsorgen umweltgerecht. Viele unserer Kunden aus dem Teutoburger Wald
                  bis nach Herford schätzen besonders, dass bei uns alles aus einer Hand kommt.
                </p>
              </div>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Industriedemontage Bielefeld
              </h3>
              <p className="mb-4 text-gray-300">
                In den Industriegebieten von Oldentrup und entlang der Eckendorfer Straße stehen
                viele alte Produktionshallen, die modernisiert werden müssen. Wir demontieren
                komplette Fertigungslinien, Krananlagen, Förerbänder und Maschinenparks. Letzte
                Woche haben wir bei Gildemeister eine alte CNC-Anlage zerlegt - 40 Tonnen Stahl
                und Elektronik, alles sauber getrennt und recycelt.
              </p>
              <p className="mb-8 text-gray-300">
                Bei Industriedemontagen arbeiten wir oft unter Zeitdruck - die Produktion muss
                weiterlaufen! Deshalb kommen wir auch nachts und am Wochenende. Mit unserem
                Spezialwerkzeug und erfahrenen Monteuren schaffen wir auch grosse Demontagen in
                Rekordzeit. Die ganzen Metalle verkaufen wir an Schrotthändler - das reduziert
                Ihre Kosten erheblich!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Küchendemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Alte Küche raus, neue rein - klingt einfach, ist es aber nicht! Besonders in den
                Altbauten rund um den Siegfriedplatz und in der Altstadt haben wir schon alles
                erlebt: Asbesthaltige Fliesenkleber, marode Wasserleitungen, Schimmel hinter den
                Schränken. Gut dass unsere Monteure für alles ausgebildet sind!
              </p>
              <p className="mb-8 text-gray-300">
                Wir demontieren Ihre alte Küche professionel: Erst Elektro und Wasser abstellen,
                dann systematisch von oben nach unten abbauen. Hängeschränke, Arbeitsplatte,
                Unterschränke, Geräte - alles wird sauber getrennt. Funktionierende Geräte bringen
                wir zur Bielefelder Tafel, den Rest entsorgen wir fachgerecht. In 3-4 Stunden ist
                alles erledigt und der Raum besenrein für die neue Küche!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Baddemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Badezimmer-Demontage ist eine staubige Angelegenheit - besonders wenn die alten
                Fliesen runter müssen! In vielen Häusern in Heepen und Jöllenbeck haben wir schon
                komplette 70er-Jahre-Bäder rausgerissen. Orange Fliesen, braune Badewannen, und
                oft genug Asbest im Fliesenkleber.
              </p>
              <p className="mb-8 text-gray-300">
                Unsere Jungs arbeiten mit Staubschutzwänden und Industriesaugern, damit der Rest
                der Wohnung sauber bleibt. Wanne, WC, Waschbecken - alles wird vorsichtig demontiert
                und abtransportiert. Die Fliesen stemmen wir mit Spezialmaschinen ab, die direkt
                absaugen. Nach 1-2 Tagen ist Ihr Bad ready für die Sanierung. Viele Kunden aus
                Sennestadt und Brackwede buchen uns direkt über ihren Handwerker - wir arbeiten
                mit allen grossen Sanitärfirmen in Bielefeld zusammen.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Bürodemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Büroumzüge und Modernisierungen sind unser täglich Brot. Besonders in der Bielefelder
                Innenstadt und am Kesselbrink werden ständig Büros umgebaut. Wir demontieren komplette
                Büroeinrichtungen: Trennwände, Zwischendecken, Bodenbeläge, Verkabelungen. Alles
                wird ordentlich dokumentiert, falls Teile wiederverwendet werden sollen.
              </p>
              <p className="mb-8 text-gray-300">
                Letzte Woche haben wir bei der Sparkasse am Jahnplatz 2 komplette Etagen demontiert -
                500qm Teppichboden, 80 Meter Glastrennwände, die komplette IT-Verkabelung. Alles
                musste am Wochenende raus, damit Montag die neuen Handwerker anfangen konnten.
                Mit 8 Mann haben wir es geschafft! Die Glaswände haben wir vorsichtig ausgebaut
                und verkauft - der Kunde hat 3000 Euro gespart.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Ladendemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Im Einzelhandel muss es immer schnell gehen - jeder Tag Schließung kostet Geld!
                Wir haben schon dutzende Läden in der Bahnhofstraße und im Loom demontiert.
                Regalsysteme, Theken, Beleuchtung, Klimaanlagen - wir räumen alles raus und
                hinterlassen einen besenreinen Rohbauzustand.
              </p>
              <p className="mb-8 text-gray-300">
                Besonders knifflig sind alte Ladeneinbauten mit Sonderanfertigungen. Letzte Woche
                haben wir eine alte Metzgerei in Quelle demontiert - mit original 60er Jahre
                Kühltheken und Fliesenwänden. Die Kühlanlage musste fachgerecht entsorgt werden
                (FCKW!), die alten Fliesen hatten Asbest im Kleber. Gut dass unsere Leute für
                sowas ausgebildet sind! Am Ende war alles sauber raus und der neue Mieter konnte
                direkt mit dem Umbau starten.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Maschinendemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Bielefeld ist Maschinenstadt - DMG Mori, Schüco, Goldbeck und viele mehr. Wenn
                alte Maschinen raus müssen, sind wir zur Stelle. Mit Spezialwerkzeug und viel
                Erfahrung zerlegen wir auch tonnenschwere Anlagen. Pressen, Stanzen, Fräsmaschinen,
                Lackieranlagen - wir haben schon alles demontiert.
              </p>
              <p className="mb-8 text-gray-300">
                Das wichtigste bei Maschinendemontage: Dokumentation! Jede Schraube, jedes Kabel
                wird fotografiert und beschriftet. Falls die Maschine woanders wieder aufgebaut
                werden soll, muss alles passen. Wir arbeiten oft mit Maschinenhändlern zusammen,
                die die Anlagen nach Osteuropa oder Asien verkaufen. Die Demontage muss dann besonders
                sorgfältig sein - jeder Kratzer mindert den Wert!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Heizungsdemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Alte Ölheizungen und Nachtspeicheröfen müssen raus - die Energiewende läuft auch
                in Bielefeld! Besonders in den Stadtteilen Gadderbaum und Hoberge-Uerentrup stehen
                noch viele alte Heizungsanlagen. Wir demontieren fachgerecht: Erst Öl abpumpen,
                dann Tank stilllegen, schließlich die komplette Anlage rausbauen.
              </p>
              <p className="mb-8 text-gray-300">
                Nachtspeicheröfen sind besonders heikel - viele enthalten Asbest! Wir haben die
                TRGS 519 Zulassung und dürfen diese Öfen fachgerecht demontieren. Mit Schutzanzügen,
                Absaugung und Luftmessungen sorgen wir dafür, dass keine Fasern in die Raumluft
                gelangen. Die Entsorgung läuft über spezielle Deponien - alles mit Nachweis für
                Ihre Unterlagen. Viele Hausbesitzer in Brake und Vilsendorf nutzen die KfW-Förderung
                für den Heizungstausch - wir helfen bei den Anträgen!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Dachbodendemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Dachböden sind oft wahre Schatzkammern - oder Müllhalden! Bei Hausauflösungen in
                Bielefeld räumen wir regelmäßig Dachböden aus. Alte Möbel, Kisten, oft auch
                gefährliche Dämmstoffe wie KMF oder Asbest. Alles muss über enge Treppen und
                Luke runter - da braucht man Erfahrung und die richtigen Geräte.
              </p>
              <p className="mb-8 text-gray-300">
                Letzten Monat haben wir einen 200qm Dachboden in einem Altbau am Siggi (wie die
                Bielefelder den Siegfriedplatz nennen) ausgeräumt. 60 Jahre Familiengeschichte,
                alte Glaswolle-Dämmung, morsche Holzbalken. Mit unserem Schrägaufzug ging alles
                durchs Dachfenster - sauber und schnell. Die alte Dämmung haben wir als Sondermüll
                entsorgt, brauchbare Sachen zur Diakonie gebracht. Nach zwei Tagen war der
                Dachboden ready für den Ausbau!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Fassadendemontage
              </h3>
              <p className="mb-4 text-gray-300">
                Alte Fassadenverkleidungen müssen oft komplett runter - besonders die asbesthaltigen
                Eternitplatten an vielen Gebäuden in Sennestadt und Stieghorst. Aber auch vorgehängte
                Fassaden, alte Wärmedämmungen oder marode Holzverkleidungen demontieren wir fachgerecht.
              </p>
              <p className="mb-8 text-gray-300">
                Bei Fassadendemontagen arbeiten wir mit Gerüst und Absturzsicherung - Sicherheit
                geht vor! Die alten Materialien werden sauber getrennt: Metall zum Schrott, Holz
                zur Verbrennung, Sondermüll zur Deponie. Wir haben alle nötigen Nachweise und
                Zertifikate für die Entsorgung. Viele Wohnungsbaugesellschaften in Bielefeld
                beauftragen uns regelmäßig - die wissen, dass wir sauber und zuverlässig arbeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-10/12 px-4 ml-auto mr-auto">
              <h2 className="text-3xl mb-8 font-semibold text-white">
                Häufige Fragen zur Demontage
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Was kostet eine Demontage in Bielefeld?
                  </h3>
                  <p className="text-gray-300">
                    Das hängt vom Umfang ab. Eine Küchendemontage kostet 300-500 Euro, ein komplettes
                    Bad 500-800 Euro. Industriedemontagen kalkulieren wir individuell. Oft bekommen
                    Sie Geld zurück durch den Schrottwert! Wir machen immer ein kostenloses Angebot
                    vor Ort.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Wie lange dauert eine Demontage?
                  </h3>
                  <p className="text-gray-300">
                    Eine Küche schaffen wir in 3-4 Stunden, ein Bad in 1-2 Tagen. Größere Projekte
                    planen wir individuell. Wir arbeiten auch nachts und am Wochenende, wenn es
                    schnell gehen muss. Die meisten Kunden sind überrascht, wie fix wir sind!
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Was passiert mit dem Demontage-Material?
                  </h3>
                  <p className="text-gray-300">
                    Wir trennen alles sauber: Metall zum Schrotthändler, Holz zur Verbrennung,
                    Elektrogeräte zum Recyclinghof, Sondermüll zur Deponie. Funktionierende Sachen
                    spenden wir an soziale Einrichtungen. Sie bekommen alle Entsorgungsnachweise
                    für Ihre Unterlagen.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Demontieren Sie auch asbesthaltige Materialien?
                  </h3>
                  <p className="text-gray-300">
                    Ja, wir haben die TRGS 519 Zulassung für Asbestarbeiten. Viele alte Gebäude
                    in Bielefeld haben noch Asbest in Fliesen, Fassaden oder Dächern. Wir demontieren
                    das fachgerecht mit Schutzausrüstung und entsorgen es als Sondermüll. Alles mit
                    offiziellem Nachweis!
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Muss ich während der Demontage anwesend sein?
                  </h3>
                  <p className="text-gray-300">
                    Nein, das ist nicht nötig. Viele Kunden geben uns den Schlüssel und wir erledigen
                    alles selbstständig. Wir sind versichert und arbeiten absolut vertrauenswürdig.
                    Über 500 zufriedene Kunden in Bielefeld können das bestätigen!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="pb-20 relative block bg-gray-900">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Demontage in allen Bielefelder Stadtteilen
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                Wir demontieren in ganz Bielefeld und Umgebung:
              </p>
              <div className="text-gray-300">
                Mitte, Schildesche, Jöllenbeck, Heepen, Stieghorst, Sennestadt,
                Brackwede, Senne, Quelle, Ummeln, Dornberg, Gadderbaum,
                Hoberge-Uerentrup, Brake, Brönninghausen, Vilsendorf, Oldentrup,
                Sieker, Hillegossen, Altenhagen, Milse, Windflöte, Windwehe.
              </div>
              <p className="text-lg leading-relaxed mt-4 text-gray-400">
                Auch in Gütersloh, Herford, Bad Salzuflen, Detmold, Paderborn
                und ganz OWL sind wir für Sie da!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <SimpleContactForm />

      {/* Footer */}
      <FooterWithMarquee />
    </div>
  );
}