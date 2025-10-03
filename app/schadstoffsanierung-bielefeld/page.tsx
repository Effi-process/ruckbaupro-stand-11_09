'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';

export default function SchadstoffsanierungBielefeld() {
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
                  Schadstoffsanierung Bielefeld
                </h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300 px-4">
                  Professionelle Schadstoffentfernung in ganz OWL - KMF, PCB, PAK & mehr
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
          <div className="flex flex-wrap">
            {/* Service Cards */}
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-6 md:mb-8 shadow-lg rounded-xl border border-white/50">
                <div className="px-4 py-4 md:py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 md:mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-lg md:text-xl font-semibold text-white">TRGS 519 & 521 Zertifiziert</h6>
                  <p className="mt-2 mb-3 md:mb-4 text-sm md:text-base text-gray-400">
                    Höchste Sicherheitsstandards für alle Schadstoffsanierungen
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-6 md:mb-8 shadow-lg rounded-xl border border-white/50">
                <div className="px-4 py-4 md:py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 md:mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-lg md:text-xl font-semibold text-white">24/7 Notdienst</h6>
                  <p className="mt-2 mb-3 md:mb-4 text-sm md:text-base text-gray-400">
                    Schnelle Hilfe bei Schadstoff-Notfällen in ganz OWL
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-6 md:mb-8 shadow-lg rounded-xl border border-white/50">
                <div className="px-4 py-4 md:py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 md:mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-lg md:text-xl font-semibold text-white">Festpreisgarantie</h6>
                  <p className="mt-2 mb-3 md:mb-4 text-sm md:text-base text-gray-400">
                    Transparente Preise ohne versteckte Kosten
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
                  Professionelle Schadstoffsanierung in Bielefeld
                </h2>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Letzen Winter hatten wir über 40 Anrufe aus Brackwede und Sennestadt, wo bei
                    Renovierungsarbeiten alte Mineralfaserdämmung gefunden wurde. Die meisten Hausbesitzer
                    wussten garnicht, dass in ihren Dachböden gefährliche KMF-Fasern lauern. Genau für
                    solche Fälle sind wir als TRGS 521 zertifizierter Fachbetrieb in ganz Bielefeld
                    und Ostwestfalen-Lippe unterwegs.
                  </p>
                  <p>
                    In Bielefeld gibt es tausende Gebäude mit versteckten Schadstoffen - von den
                    Industriegebieten in Oldentrup bis zu den Altbauten rund um den Siegfriedplatz.
                    Als zertifiziertes Sanierungsunternehmen kennen wir die typischen Problemstellen
                    und sorgen für sichere, gesetzeskonforme Schadstoffbeseitigung.
                  </p>
                </div>
              </div>

              {/* KMF-Sanierung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  KMF-Sanierung Bielefeld
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Künstliche Mineralfasern (KMF) sind in fast jedem Haus verbaut, das zwischen
                    1960 und 2000 gebaut oder saniert wurde. Besonders in den Stadtteilen Heepen,
                    Jöllenbeck und Schildesche finden wir regelmässig alte Glaswolle und Steinwolle,
                    die krebserregende Fasern freisetzt.
                  </p>
                  <p>
                    Unsere TRGS 521 geschulten Mitarbeiter entfernen die alten Dämmstoffe staubfrei
                    mit speziellen Absauganlagen. Viele Kunden sind überrascht, wenn wir erzählen,
                    dass ihre "harmlose" Dachisolierung aus den 80ern hochgefährlich ist. Nach der
                    Sanierung bauen wir moderne, ungefährliche Dämmung ein - oft sogar mit KfW-Förderung!
                  </p>
                </div>
              </div>

              {/* PCB-Entsorgung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  PCB-Entsorgung Bielefeld
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PCB (Polychlorierte Biphenyle) verstecken sich in vielen Bielefelder Gebäuden -
                    besonders in den Betonplatten-Schulen aus den 70ern und in alten Industriebauten
                    entlang der Eckendorfer Straße. Diese hochgiftigen Weichmacher in Fugenmassen und
                    Anstrichen sind extrem gesundheitsschädlich.
                  </p>
                  <p>
                    Wir waren schon in vielen Bielefelder Schulen und haben PCB-haltige Fugen saniert.
                    Die Arbeit muss unter Vollschutz mit luftdichten Abschottungen erfolgen. Nach der
                    Entfernung führen wir Raumluftmessungen durch - erst wenn die Werte unter dem
                    Grenzwert liegen, dürfen die Räume wieder genutzt werden. Die Entsorgung erfolgt
                    als Sondermüll über spezielle Deponien.
                  </p>
                </div>
              </div>

              {/* PAK-Sanierung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  PAK-Sanierung Bielefeld
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PAK (Polyzyklische aromatische Kohlenwasserstoffe) finden wir vorallem in alten
                    Teerklebern unter Parkett und in Dachbahnen. Letzte Woche hatten wir einen Notfall
                    in Quelle - die Familie hatte beim Parkettschleifen schwarzen Kleber freigelegt und
                    den typischen Teergeruch bemerkt. Gut dass sie uns sofort angerufen haben!
                  </p>
                  <p>
                    PAK-haltige Materialien sind krebserregend und müssen mit besonderen Schutzmaßnahmen
                    entfernt werden. Wir fräsen die alten Kleber mit Spezialmaschinen ab, die direkt an
                    Industriestaubsauger angeschlossen sind. Kein Staub, kein Geruch - und nach der
                    Freimessung können Sie wieder sorglos in Ihren Räumen leben.
                  </p>
                </div>
              </div>

              {/* Bleifarben-Entfernung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Bleifarben-Entfernung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    In vielen Altbauten rund um die Bielefelder Altstadt und am Kesselbrink sind noch
                    bleihaltige Anstriche vorhanden. Diese alten Farben blättern ab und der Staub ist
                    hochgiftig - besonders für Kinder! Bei Sanierungen müssen diese Anstriche fachgerecht
                    entfernt werden.
                  </p>
                  <p>
                    Wir nutzen spezielle Abbeizverfahren oder Sandstrahlkabinen mit Absaugung. Jeder
                    Quadratzentimeter wird dokumentiert, der Schutt als Sondermüll entsorgt. Viele
                    Vermieter beauftragen uns vor Neuvermietungen - niemand will riskieren, dass Kinder
                    mit bleihaltiger Farbe in Kontakt kommen.
                  </p>
                </div>
              </div>

              {/* Formaldehyd-Sanierung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Formaldehyd-Sanierung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Formaldehyd aus alten Spanplatten und Fertighäusern ist ein riesen Problem in
                    Bielefeld. Besonders die Fertighaussiedlungen in Brake und Vilsendorf aus den
                    70er Jahren sind betroffen. Die Bewohner klagen über Kopfschmerzen und
                    Atemwegsreizungen - oft ohne zu wissen, woher das kommt.
                  </p>
                  <p>
                    Nach einer Raumluftmessung lokalisieren wir die Quellen und entfernen belastete
                    Bauteile. Manchmal reicht es, die alten Spanplatten zu versiegeln, oft müssen sie
                    aber komplett raus. Die neuen Materialien sind garantiert formaldehydfrei - endlich
                    wieder gesunde Raumluft!
                  </p>
                </div>
              </div>

              {/* Holzschutzmittel-Sanierung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Holzschutzmittel-Sanierung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    DDT, Lindan, PCP - diese hochgiftigen Holzschutzmittel wurden bis in die 80er Jahre
                    grosszügig in Dachstühlen versprüht. In vielen Bielefelder Fachwerkhäusern, besonders
                    in Dornberg und Gadderbaum, finden wir immernoch diese Altlasten. Der Staub ist
                    krebserregend und reichert sich im Körperfett an!
                  </p>
                  <p>
                    Je nach Belastungsgrad müssen die Balken abgeschliffen, versiegelt oder komplett
                    ausgetauscht werden. Wir arbeiten mit speziellen Absauganlagen und Atemschutz. Nach
                    der Sanierung messen wir die Raumluft - erst wenn alle Werte im grünen Bereich sind,
                    geben wir die Räume wieder frei.
                  </p>
                </div>
              </div>

              {/* Schimmelpilzsanierung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Schimmelpilzsanierung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Nach dem Hochwasser letztes Jahr hatten wir hunderte Schimmelfälle in Bielefeld -
                    besonders in den tiefer gelegenen Stadtteilen wie Milse und Altenhagen. Aber auch
                    ohne Hochwasser ist Schimmel ein Problem: Undichte Dächer, Rohrbrüche oder einfach
                    falsches Lüften führen zu gefährlichen Pilzkolonien.
                  </p>
                  <p>
                    Schimmel ist nicht nur eklig, sondern richtig gesundheitsschädlich! Wir entfernen
                    befallene Materialien unter Unterdruck, behandeln die Flächen mit Spezial-Desinfektionsmitteln
                    und trocknen alles professionell. Wichtig: Die Ursache muss behoben werden, sonst
                    kommt der Schimmel wieder. Deshalb checken wir immer auch Dämmung und Lüftung.
                  </p>
                </div>
              </div>

              {/* Schadstoffgutachten */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Schadstoffgutachten & Analyse
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Bevor Sie ein altes Haus in Bielefeld kaufen oder sanieren - lassen Sie ein
                    Schadstoffgutachten machen! Wir arbeiten mit zertifizierten Gutachtern zusammen,
                    die jede Ecke untersuchen. Von der Materialprobe bis zur Raumluftmessung - alles
                    wird dokumentiert.
                  </p>
                  <p>
                    Das Gutachten zeigt genau, welche Schadstoffe wo verbaut sind und was gemacht werden
                    muss. Viele Hauskäufer in Bielefeld nutzen unsere Gutachten für Preisverhandlungen -
                    wenn im Dach noch Asbest liegt, kann man schnell mal 50.000 Euro vom Kaufpreis
                    runterhandeln. Die Investition ins Gutachten lohnt sich immer!
                  </p>
                </div>
              </div>

              {/* Notfall-Schadstoffsanierung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Notfall-Schadstoffsanierung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Manchmal muss es schnell gehen - wie letzte Woche in Sieker, wo bei Abbrucharbeiten
                    plötzlich Asbest gefunden wurde. Oder der Wasserschaden in Stieghorst, wo sich
                    innerhalb von Tagen schwarzer Schimmel ausgebreitet hat. Für solche Fälle haben wir
                    einen 24-Stunden-Notdienst!
                  </p>
                  <p>
                    Unser Notfall-Team ist innerhalb einer Stunde vor Ort, sichert die Gefahrenstelle ab
                    und beginnt sofort mit der Sanierung. Wir haben alle Materialien und Geräte immer
                    auf Lager - von der Schutzausrüstung bis zur Luftreinigungsanlage. Rufen Sie uns
                    an, wir sind immer erreichbar: 0521 9999 8480!
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
                Häufige Fragen zur Schadstoffsanierung
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Woran erkenne ich Schadstoffe in meinem Haus?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Typische Anzeichen sind: muffiger Geruch, schwarze Flecken (Schimmel), bröckelnde
                    Dämmung, alte Eternitplatten, schwarzer Kleber unter Böden oder gesundheitliche
                    Beschwerden wie Kopfschmerzen. Im Zweifel immer einen Fachmann rufen!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was kostet eine Schadstoffsanierung in Bielefeld?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Das hängt vom Schadstoff und der Menge ab. Eine kleine KMF-Sanierung im Dachboden
                    kostet ab 2.000 Euro, eine komplette PCB-Sanierung kann schnell 50.000 Euro kosten.
                    Wir machen immer erst eine kostenlose Besichtigung und ein Festpreis-Angebot.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie lange dauert eine Schadstoffsanierung?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Kleine Sanierungen wie ein Schimmelbefall im Bad schaffen wir in 2-3 Tagen. Große
                    Projekte wie eine komplette Dachsanierung mit Asbest können 2-3 Wochen dauern.
                    Wir arbeiten aber immer so schnell wie möglich.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Muss ich während der Sanierung ausziehen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Bei kleineren, abgeschotteten Bereichen können Sie meist wohnen bleiben. Bei größeren
                    Sanierungen oder wenn die Raumluft belastet ist, organisieren wir eine Ersatzunterkunft.
                    Die Kosten übernimmt oft die Versicherung.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Zahlt die Versicherung Schadstoffsanierungen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Bei Schäden durch Wasser oder Feuer oft ja. Bei Altlasten wie Asbest meist nicht.
                    Wir helfen bei der Kommunikation mit Ihrer Versicherung und kennen die Tricks,
                    wie man die maximale Erstattung bekommt.
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
                  Unser Einsatzgebiet
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 text-gray-300">
                  Wir sind in allen Bielefelder Stadtteilen für Sie da:
                </p>
                <div className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Mitte, Schildesche, Jöllenbeck, Heepen, Stieghorst, Sennestadt,
                  Brackwede, Senne, Quelle, Ummeln, Dornberg, Gadderbaum,
                  Hoberge-Uerentrup, Brake, Brönninghausen, Vilsendorf, Oldentrup,
                  Sieker, Hillegossen, Altenhagen, Milse und Windwehe.
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Auch in den Nachbarstädten Gütersloh, Herford, Bad Salzuflen
                  und Detmold sind wir regelmäßig im Einsatz.
                </p>
              </div>
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
