'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';

export default function EntstaubungBielefeld() {
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
                  Entstaubung Bielefeld
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Professionelle Staubbeseitigung bei Abbruch & Sanierung in ganz OWL
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
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-8 shadow-lg rounded-lg border border-white/50">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-white">H14-Filter zertifiziert</h6>
                  <p className="mt-2 mb-4 text-gray-400">
                    Höchste Filterklasse für gefährliche Stäube
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-8 shadow-lg rounded-lg border border-white/50">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-white">24/7 Notdienst</h6>
                  <p className="mt-2 mb-4 text-gray-400">
                    Soforteinsatz bei Staubbelastung
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-8 shadow-lg rounded-lg border border-white/50">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-white">BG BAU geprüft</h6>
                  <p className="mt-2 mb-4 text-gray-400">
                    Arbeitsschutz nach höchsten Standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
              <h2 className="text-4xl mb-8 font-semibold text-white">
                Professionelle Entstaubung in Bielefeld
              </h2>

              <div className="text-lg font-light leading-relaxed mt-4 mb-8 text-gray-300">
                <p className="mb-4">
                  Letzten Sommer bei der Kernsanierung vom alten Verwaltungsgebäude der Stadtwerke
                  am Jahnplatz hatten wir ein riesen Staubproblem. Die Nachbarn haben sich beschwert,
                  die Stadt hat gedroht die Baustelle stillzulegen. Dann kamen wir mit unseren
                  Entstaubungsanlagen - in zwei Tagen war die Luft wieder sauber und die Baustelle
                  konnte weiterlaufen. So etwas erleben wir fast täglich in Bielefeld und ganz OWL!
                </p>
                <p className="mb-4">
                  Entstaubung Bielefeld ist unser Spezialgebiet seit über 10 Jahren. Egal ob bei
                  Abbrucharbeiten, Sanierungen oder in Produktionshallen - überall wo Staub zum
                  Problem wird, sind wir zur Stelle. Mit modernsten Entstaubungsanlagen und geschultem
                  Personal sorgen wir für saubere Luft und sichere Arbeitsbedingungen.
                </p>
              </div>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Baustellen-Entstaubung
              </h3>
              <p className="mb-4 text-gray-300">
                Auf Baustellen in Bielefeld ist Staub das größte Problem - besonders in der Innenstadt
                wo direkt neben bewohnten Gebäuden gearbeitet wird. Bei der Sanierung vom Crüwell-Haus
                haben wir mit unseren Entstaubungsanlagen dafür gesorgt, dass die Anwohner ihre
                Fenster öffnen konnten. Ohne uns wäre das unmöglich gewesen!
              </p>
              <p className="mb-8 text-gray-300">
                Unsere mobilen Entstaubungsanlagen schaffen bis zu 20.000 m³ Luft pro Stunde. Mit
                H14-Filtern (das ist Krankenhausstandard!) filtern wir selbst gefährliche Fasern
                und Feinstaub aus der Luft. Die Anlagen stellen wir strategisch auf - an Fenstern,
                Türen und überall wo Staub austritt. So bleibt der Dreck auf der Baustelle und
                nicht in der Nachbarschaft!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Industrielle Entstaubung
              </h3>
              <p className="mb-4 text-gray-300">
                In den Industriegebieten von Oldentrup und entlang der Eckendorfer Straße haben
                viele Betriebe Probleme mit Produktionsstaub. Bei Schüco haben wir eine komplette
                Entstaubungsanlage für die Aluminiumbearbeitung installiert. Die Mitarbeiter waren
                begeistert - endlich können sie wieder durchatmen!
              </p>
              <p className="mb-8 text-gray-300">
                Wir planen und installieren fest Entstaubungssysteme für alle Industriebereiche:
                Metallbearbeitung, Holzverarbeitung, Kunststoffproduktion, Lebensmittelindustrie.
                Mit Rohrleitungen, Absaughauben und zentralen Filteranlagen. Alles nach den
                Vorschriften der BG und mit TÜV-Abnahme. Viele Betriebe in Bielefeld sparen
                dadurch tausende Euro an Krankenstandskosten!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Asbest-Entstaubung
              </h3>
              <p className="mb-4 text-gray-300">
                Bei Asbestsanierungen ist Entstaubung lebenswichtig! Eine einzige Faser kann Krebs
                auslösen. Deshalb arbeiten wir bei Asbestprojekten mit Unterdruck-Systemen und
                mehrstufigen Filtern. Letzte Woche in einem Wohnblock in Sennestadt haben wir
                während der kompletten Asbestsanierung für staubfreie Luft gesorgt.
              </p>
              <p className="mb-8 text-gray-300">
                Unsere TRGS 519 zertifizierten Entstaubungsanlagen halten den vorgeschriebenen
                Unterdruck von mindestens 20 Pascal. Die Luft wird durch H13 und H14 Filter
                geleitet - da kommt keine Faser durch! Nach der Sanierung machen wir Freimessungen
                mit akkreditierten Messstellen. Erst wenn die Luft zu 100% sauber ist, bauen wir ab.
                So sind schon hunderte Familien in Bielefeld sicher in ihre sanierten Wohnungen
                zurückgekehrt.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Betonstaub-Absaugung
              </h3>
              <p className="mb-4 text-gray-300">
                Betonstaub ist richtig gefährlich - das Quarz darin verursacht Silikose, die
                "Steinstaublunge". Bei jedem Bohren, Schleifen oder Stemmen entsteht dieser
                gefährliche Staub. In der Bielefelder Altstadt, wo viele Altbauten saniert werden,
                sind wir fast täglich im Einsatz.
              </p>
              <p className="mb-8 text-gray-300">
                Mit unseren Betonschleifmaschinen mit integrierter Absaugung arbeiten wir praktisch
                staubfrei. Die Maschinen sind direkt an Entstauber angeschlossen - der Staub wird
                sofort an der Entstehungsstelle abgesaugt. Bei größeren Projekten wie dem Parkhaus
                am Kesselbrink haben wir zusätzlich Luftreiniger aufgestellt. So konnten die
                anderen Gewerke parallel weiterarbeiten ohne Staubmasken tragen zu müssen!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Holzstaub-Entstaubung
              </h3>
              <p className="mb-4 text-gray-300">
                Holzstaub ist nicht nur lästig, sondern auch krebserregend - besonders Eichen- und
                Buchenstaub! In Bielefeld gibt es viele Schreinereien und Zimmereien, die unsere
                Entstaubungssysteme nutzen. Bei der Tischlerei Müller in Brackwede haben wir eine
                komplette Absauganlage installiert - seitdem keine Probleme mehr mit der BG!
              </p>
              <p className="mb-8 text-gray-300">
                Für mobile Einsätze auf Baustellen haben wir spezielle Holzstaub-Entstauber. Die
                schließen wir direkt an Kreissägen, Schleifmaschinen und Fräsen an. Der Staub
                wird in Big-Bags gesammelt und kann als Brennstoff verkauft werden. Viele Zimmereien
                in Heepen und Jöllenbeck mieten unsere Geräte für Dachstuhlarbeiten - saubere
                Sache und die Nachbarn beschweren sich nicht mehr!
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Schimmelsporen-Filterung
              </h3>
              <p className="mb-4 text-gray-300">
                Nach Wasserschäden ist schnelles Handeln gefragt - Schimmelsporen verbreiten sich
                explosionsartig! Letztes Jahr nach dem Hochwasser in Milse und Altenhagen waren
                wir wochenlang im Dauereinsatz. Mit HEPA-Luftreinigern haben wir die Sporen aus
                der Luft gefiltert, bevor sie sich ausbreiten konnten.
              </p>
              <p className="mb-8 text-gray-300">
                Unsere Luftreiniger schaffen 99,995% aller Schimmelsporen aus der Luft. Während
                der Schimmelsanierung laufen die Geräte 24/7 und halten die Sporenzahl unter dem
                Grenzwert. Viele Hausverwaltungen in Bielefeld rufen uns prophylaktisch nach
                Wasserschäden - besser Vorsorge als teure Schimmelsanierung! Mit unseren
                Trocknungsgeräten und Entstaubern verhindern wir Schimmelbildung von Anfang an.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Feinstaub-Reduzierung
              </h3>
              <p className="mb-4 text-gray-300">
                Feinstaub ist der unsichtbare Killer - Partikel kleiner als 2,5 Mikrometer gehen
                direkt ins Blut! Bei Abbrucharbeiten entsteht massenhaft dieser gefährliche Staub.
                Am Ostwestfalendamm, wo gerade viel gebaut wird, sorgen unsere Entstaubungsanlagen
                für Feinstaubwerte unter dem Grenzwert.
              </p>
              <p className="mb-8 text-gray-300">
                Mit Nebelkanonen und Berieselungsanlagen binden wir Feinstaub schon in der Luft.
                Das Wasser vernebelt zu winzigen Tröpfchen, die sich mit dem Staub verbinden und
                zu Boden fallen. Bei der Sprengung vom alten Telekom-Hochhaus haben wir mit 6
                Nebelkanonen gearbeitet - die Feinstaubwerte waren niedriger als im normalen
                Straßenverkehr! Die Anwohner waren begeistert, die Stadt auch.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Gipsstaub-Absaugung
              </h3>
              <p className="mb-4 text-gray-300">
                Trockenbauer kennen das Problem: Gipsstaub überall! Beim Schleifen der Fugen
                entsteht feiner Staub, der sich in jeder Ritze festsetzt. In den Neubauten am
                Langen Kampe arbeiten wir mit mehreren Trockenbau-Firmen zusammen. Unsere
                Schleifgeräte mit Direktabsaugung machen die Arbeit sauber und schnell.
              </p>
              <p className="mb-8 text-gray-300">
                Die Vorteile sind enorm: Keine Staubmasken nötig, keine Reinigungsarbeiten, die
                anderen Gewerke können parallel arbeiten. Bei einem 5.000qm Bürogebäude in der
                Innenstadt haben wir dem Trockenbauer 3 Tage Reinigungszeit gespart - das sind
                schnell mal 5.000 Euro! Deshalb mieten immer mehr Handwerker aus Bielefeld unsere
                Entstaubungstechnik.
              </p>

              <h3 className="text-3xl mb-4 font-semibold text-white">
                Strahlstaub-Entsorgung
              </h3>
              <p className="mb-4 text-gray-300">
                Beim Sandstrahlen von Fassaden und Stahlkonstruktionen entsteht extremer Staub.
                Die alten Beschichtungen enthalten oft Schadstoffe wie Blei oder Chromate. Bei
                der Sanierung der Sparrenburg-Brücke haben wir mit einer komplett eingehausten
                Strahlkabine gearbeitet - kein Körnchen Strahlmittel ist in die Umwelt gelangt!
              </p>
              <p className="mb-8 text-gray-300">
                Unsere mobilen Einhausungen mit integrierten Entstaubungsanlagen machen Strahlarbeiten
                auch in bewohnten Gebieten möglich. Der Strahlstaub wird sofort abgesaugt, gefiltert
                und in Spezialcontainer gefüllt. Das gebrauchte Strahlmittel wird recycelt oder
                fachgerecht entsorgt. Viele Malerbetriebe aus Bielefeld buchen uns für
                Fassadensanierungen - sauber, schnell und ohne Ärger mit Anwohnern!
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
                Häufige Fragen zur Entstaubung
              </h2>

              <div className="space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-6 rounded-lg border border-white/50">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Was kostet eine professionelle Entstaubung?
                  </h3>
                  <p className="text-gray-300">
                    Die Miete für eine Entstaubungsanlage startet bei 150 Euro pro Tag. Größere
                    Projekte kalkulieren wir individuell. Bei Industrieanlagen machen wir Festpreise
                    für die komplette Installation. Oft sparen Sie durch weniger Ausfallzeiten und
                    Krankheitstage mehr als die Entstaubung kostet!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-6 rounded-lg border border-white/50">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Wie schnell können Sie vor Ort sein?
                  </h3>
                  <p className="text-gray-300">
                    In Bielefeld sind wir innerhalb von 2 Stunden vor Ort. Bei Notfällen wie
                    Asbestfunden oder Staubbelastung in bewohnten Gebäuden kommen wir sofort.
                    Unsere Entstaubungsanlagen haben wir immer auf Lager - kein Warten auf
                    Lieferungen!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-6 rounded-lg border border-white/50">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Welche Staubarten können Sie filtern?
                  </h3>
                  <p className="text-gray-300">
                    Alles! Von grobem Bauschutt bis zu gefährlichen Nanopartikeln. Asbest, KMF,
                    Quarzstaub, Holzstaub, Metallstaub, Schimmelsporen - unsere H14-Filter
                    schaffen 99,995% aller Partikel. Wir haben für jeden Staub die richtige
                    Lösung.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-6 rounded-lg border border-white/50">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Sind Ihre Anlagen lärmarm?
                  </h3>
                  <p className="text-gray-300">
                    Ja! Unsere modernen Entstauber arbeiten mit maximal 65 dB - das ist leiser
                    als ein normales Gespräch. Für Nachtarbeiten oder Krankenhäuser haben wir
                    extra schallgedämmte Geräte mit unter 50 dB. Die Nachbarn merken nichts!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-6 rounded-lg border border-white/50">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Bieten Sie auch Luftmessungen an?
                  </h3>
                  <p className="text-gray-300">
                    Klar! Wir messen vor, während und nach der Entstaubung. Mit kalibrierten
                    Messgeräten dokumentieren wir die Staubbelastung. Die Protokolle sind
                    gerichtsfest und werden von allen Behörden anerkannt. Viele Bauherren nutzen
                    das für ihre Dokumentation.
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
                Entstaubung in ganz Bielefeld
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                Wir entstauben in allen Stadtteilen:
              </p>
              <div className="text-gray-300">
                Mitte, Schildesche, Jöllenbeck, Heepen, Stieghorst, Sennestadt,
                Brackwede, Senne, Quelle, Ummeln, Dornberg, Gadderbaum,
                Hoberge-Uerentrup, Brake, Brönninghausen, Vilsendorf, Oldentrup,
                Sieker, Hillegossen, Altenhagen, Milse, Windflöte, Windwehe.
              </div>
              <p className="text-lg leading-relaxed mt-4 text-gray-400">
                Auch in Gütersloh, Herford, Bad Salzuflen, Detmold, Paderborn,
                Lemgo und ganz OWL sorgen wir für staubfreie Luft!
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