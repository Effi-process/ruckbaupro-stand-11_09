'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';

export default function PCBSanierungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      {/* Floating Background Elements */}
      <FloatingElements />

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
                  PCB-Sanierung Bielefeld
                </h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300 px-4">
                  Professionelle PCB-Entfernung & Fugensanierung - Zertifiziert nach TRGS 524
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h6 className="text-lg md:text-xl font-semibold text-white">TRGS 524 Zertifiziert</h6>
                  <p className="mt-2 mb-3 md:mb-4 text-sm md:text-base text-gray-400">
                    Sachkundenachweis für PCB-Sanierung nach gesetzlichen Vorgaben
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-6 md:mb-8 shadow-lg rounded-xl border border-white/50">
                <div className="px-4 py-4 md:py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 md:mb-5 shadow-lg rounded-full bg-blue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h6 className="text-lg md:text-xl font-semibold text-white">Raumluftmessung inklusive</h6>
                  <p className="mt-2 mb-3 md:mb-4 text-sm md:text-base text-gray-400">
                    Freimessung nach Sanierung - dokumentiert & zertifiziert
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md bg-gray-800/90 w-full mb-6 md:mb-8 shadow-lg rounded-xl border border-white/50">
                <div className="px-4 py-4 md:py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 md:mb-5 shadow-lg rounded-full bg-green-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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
                  PCB-Sanierung Bielefeld - Wenn die Fugen hochgiftig sind
                </h2>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Letzte Woche waren wir in der Gesamtschule Brackwede - PCB-Alarm in den Klassenzimmern!
                    Die Schulleitung hatte uns gerufen, weil bei ner Routineuntersuchung hochgiftige PCB-Werte
                    in der Raumluft gefunden wurden. Sowas passiert grade in Bielefeld ständig, besonders bei
                    Gebäuden aus den 60er bis 80er Jahren. Die grauen Fugenmassen zwischen den Betonplatten sehen
                    harmlos aus, sind aber extrem gesundheitsschädlich.
                  </p>
                  <p>
                    PCB (Polychlorierte Biphenyle) wurden in Bielefeld überall verbaut - in Schulen,
                    Verwaltungsgebäuden, Plattenbauten und Industriehallen. Besonders betroffen sind die
                    Betonplattenbauten in Sennestadt, Stieghorst und rund um die Universität. Viele Hausbesitzer
                    haben keine Ahnung, dass in ihren Wänden hochgiftige Stoffe schlummern, die langsam in die
                    Raumluft ausdünsten und sich im Körper anreichern.
                  </p>
                </div>
              </div>

              {/* What is PCB */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was ist PCB und wo kommt es vor?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PCB wurde früher als Weichmacher in elastischen Fugenmassen verwendet - vorallem in
                    Gebäuden mit Betonfertigteilen. Diese Fugen findet man überall: Zwischen Wandplatten,
                    in Dehnungsfugen, rund um Fenster und Türen. In Bielefeld haben wir PCB hauptsächlich
                    in diesen Gebäuden gefunden:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Schulen aus den 70er Jahren (besonders Gesamtschulen und Berufskollegs)</li>
                    <li>Plattenbauten in Sennestadt und Stieghorst</li>
                    <li>Verwaltungsgebäude und Ämter aus den 60er-80er Jahren</li>
                    <li>Industriehallen mit Betonfertigteilen</li>
                    <li>Hochhäuser mit Elementfassaden</li>
                  </ul>
                  <p>
                    Das Problem: PCB dünstet langsam aber stetig aus den Fugen aus. Über Jahre und Jahrzente
                    atmet man das Zeug ein, ohne es zu merken. PCB lagert sich im Fettgewebe an und kann
                    Krebs auslösen, das Immunsystem schwächen und das Hormonsystem stören. Besonders für
                    Kinder ist das extrem gefährlich!
                  </p>
                </div>
              </div>

              {/* PCB Detection */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  PCB-Nachweis - So erkennen wir die Belastung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Bevor wir mit der Sanierung anfangen, müssen wir erstmal wissen, wo überall PCB drin ist
                    und wie hoch die Belastung ist. Dafür nehmen wir Materialproben und machen Raumluftmessungen.
                    Letzte Woche hatten wir nen krassen Fall in Brackwede - die Raumluft war so belastet, dass
                    die Räume sofort gesperrt werden mussten!
                  </p>
                  <p>
                    Bei der Untersuchung gucken wir nach:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Elastische Fugenmassen (meistens grau oder beige)</li>
                    <li>Dichtungsbänder an Fertigteilen</li>
                    <li>Anstrichsysteme auf Beton (seltener, aber auch möglich)</li>
                    <li>PCB-Werte in der Raumluft</li>
                  </ul>
                  <p>
                    Die Grenzwerte sind klar definiert: Bis 300 ng/m³ gilt als Vorsorgebereich, ab 3000 ng/m³
                    muss sofort saniert werden. Alles dazwischen ist der Sanierungsbereich - hier empfehlen
                    wir auf jeden Fall ne zeitnahe Sanierung, besonders wenn Kinder im Gebäude sind.
                  </p>
                </div>
              </div>

              {/* PCB Removal Process */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  PCB-Entfernung - So läuft die Sanierung ab
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PCB-Sanierung ist nix für Heimwerker oder normale Handwerker - das darf nur gemacht werden
                    von Fachfirmen mit TRGS 524 Sachkundenachweis. Unsere Jungs haben alle die Schulung und
                    jahrelange Erfahrung. So gehen wir vor:
                  </p>
                  <p className="font-semibold text-white">1. Vorbereitung & Abschottung</p>
                  <p>
                    Zuerst schotten wir den kompletten Bereich luftdicht ab mit speziellen Staubschutzwänden.
                    Wir bauen Unterdruckhaltung auf - die Luft wird nur raus, nicht rein gelassen. So
                    verhindern wir, dass PCB-Staub in andere Räume kommt.
                  </p>
                  <p className="font-semibold text-white">2. Entfernung der PCB-haltigen Materialien</p>
                  <p>
                    Jetzt gehts ans Eingemachte: Die alten Fugen werden rausgefräst mit speziellen Maschinen,
                    die direkt an nen HEPA-Staubsauger angeschlossen sind. Kein Staub, kein Dreck - alles wird
                    sofort abgesaugt. In manchen Fällen müssen sogar ganze Wandplatten raus, wenn das PCB tief
                    ins Material eingedrungen ist.
                  </p>
                  <p className="font-semibold text-white">3. Reinigung & Entsorgung</p>
                  <p>
                    Nach der Entfernung wird alles mehrfach gereinigt mit Spezial-Reinigern. Der PCB-haltige
                    Abfall kommt in gekennzeichnete Big-Bags und wird als Sondermüll entsorgt - das kostet
                    extra, aber anders gehts nicht. Die Entsorgung wird dokumentiert, Sie bekommen nen
                    Entsorgungsnachweis.
                  </p>
                  <p className="font-semibold text-white">4. Neue Fugen & Raumluftmessung</p>
                  <p>
                    Dann kommen die neuen, PCB-freien Fugenmassen rein. Moderne Dichtstoffe sind komplett
                    ungefährlich. Nach paar Tagen Trocknungszeit machen wir die Freimessung - erst wenn die
                    PCB-Werte unter dem Grenzwert liegen, geben wir die Räume wieder frei. Bei der Schule in
                    Brackwede hat das geklappt - von 5000 ng/m³ runter auf unter 100 ng/m³!
                  </p>
                </div>
              </div>

              {/* PCB in Schools */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  PCB in Schulen - Ein besonderes Problem
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    In Bielefeld haben wir grade bei Schulen riesen Probleme mit PCB. Die meisten Schulgebäude
                    aus den 60er und 70er Jahren sind Betonfertigteilbauten - und fast alle haben PCB in den
                    Fugen. Wir waren schon in mindestens 15 Bielefelder Schulen für PCB-Sanierungen. Das
                    Schlimme: Kinder sind besonders empfindlich gegenüber Schadstoffen!
                  </p>
                  <p>
                    Die Schulträger nehmen das Thema mittlerweile ernst. Viele Schulen lassen jetzt systematisch
                    untersuchen. Wenn PCB gefunden wird, wird oft in den Ferien saniert, damit der Unterricht
                    nicht ausfällt. Manchmal müssen aber auch Gebäudeteile sofort gesperrt werden - wie letztes
                    Jahr an nem Berufskolleg in der Innenstadt, wo die Werte extrem hoch waren.
                  </p>
                  <p>
                    Wenn Sie Kinder haben und die Schule hat so nen Betonplattenbau aus den 70ern - fragen Sie
                    mal nach, ob schon auf PCB untersucht wurde! Eltern haben das Recht auf Information.
                  </p>
                </div>
              </div>

              {/* PCB in Residential Buildings */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  PCB in Wohngebäuden
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Besonders betroffen sind die Plattenbauten in Sennestadt - fast jedes Hochhaus aus dieser
                    Zeit hat PCB-haltige Fugen. Viele Bewohner wohnen da seit Jahrzehnten und haben keine
                    Ahnung von der Belastung. Erst wenn mal ne Raumluftmessung gemacht wird (zum Beispiel bei
                    nem Immobilienverkauf), kommt die böse Überraschung.
                  </p>
                  <p>
                    Wir hatten letztens nen Fall in Stieghorst - junge Familie wollte ne Wohnung im 8. Stock
                    kaufen, dann kam das PCB-Gutachten: Hochbelastet! Die haben den Kauf erstmal abgebrochen,
                    bis der Verkäufer zusagte, die Sanierung zu bezahlen. Die Sanierung hat dann 25.000 Euro
                    gekostet - das zeigt, wie wichtig so ein Gutachten vorm Kauf ist!
                  </p>
                  <p>
                    Als Mieter haben Sie übrigens Anspruch auf ne schadstofffreie Wohnung. Wenn PCB nachgewiesen
                    wird, muss der Vermieter sanieren. Wir helfen Ihnen bei der Kommunikation mit dem Vermieter
                    und erstellen die nötigen Gutachten.
                  </p>
                </div>
              </div>

              {/* Costs and Funding */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Kosten & Förderung der PCB-Sanierung
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PCB-Sanierung ist nicht billig - aber sie ist halt notwendig und gesetzlich vorgeschrieben
                    ab bestimmten Grenzwerten. Die Kosten hängen davon ab, wieviele Fugen betroffen sind und
                    wie schwer zugänglich die Stellen sind. Hier mal nen groben Überblick:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>PCB-Gutachten mit Raumluftmessung: 800-2.000 Euro</li>
                    <li>Fugensanierung pro Meter: 150-300 Euro</li>
                    <li>Komplette Wohnungssanierung: 15.000-40.000 Euro</li>
                    <li>Sanierung ganzes Treppenhaus: 30.000-80.000 Euro</li>
                    <li>Freimessung nach Sanierung: 500-1.500 Euro</li>
                  </ul>
                  <p>
                    Die gute Nachricht: Es gibt Fördermöglichkeiten! Über die KfW können energetische Sanierungen
                    gefördert werden, und PCB-Sanierung gilt da oft mit rein, wenn gleichzeitig die Dämmung
                    erneuert wird. Manche Kommunen haben auch eigene Förderprogramme für Schadstoffsanierungen.
                    Wir beraten Sie gerne zu den Möglichkeiten!
                  </p>
                  <p>
                    Wichtig: Bei Gewerbeimmobilien und vermieteten Wohnungen kann die Sanierung steuerlich
                    abgesetzt werden. Und wenn Sie ne Immobilie verkaufen wollen - ne sanierte, PCB-freie
                    Wohnung ist deutlich mehr wert und verkauft sich viel schneller!
                  </p>
                </div>
              </div>

              {/* Warning Signs */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Woran erkenne ich PCB-belastete Gebäude?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PCB sieht man nicht und riecht man nicht - das ist das Gefährliche daran. Aber es gibt
                    typische Anzeichen, wann Sie hellhörig werden sollten:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Ihr Gebäude ist zwischen 1955 und 1975 gebaut (Hochphase des PCB-Einsatzes)</li>
                    <li>Es ist ein Betonfertigteilbau oder Plattenbau</li>
                    <li>Die Fugen zwischen den Betonplatten sind grau oder beige und elastisch</li>
                    <li>Es ist eine Schule, Verwaltungsgebäude oder öffentliches Gebäude</li>
                    <li>Sie haben unerklärliche Gesundheitsprobleme (Müdigkeit, Kopfschmerzen, Immunschwäche)</li>
                  </ul>
                  <p>
                    Wenn mehrere Punkte zutreffen, sollten Sie auf jeden Fall mal ne Raumluftmessung machen
                    lassen. Das kostet nicht die Welt und gibt Ihnen Sicherheit. Wir kommen vorbei, nehmen
                    Proben und nach paar Tagen haben Sie das Ergebnis. Lieber einmal zu oft gemessen als einmal
                    zu wenig - grade wenn Kinder im Haus sind!
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Warum RückbauPRO für Ihre PCB-Sanierung?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    PCB-Sanierung ist Vertrauenssache - Sie wollen einen Fachbetrieb, der weiß was er tut und
                    der sauber arbeitet. Hier sind unsere Stärken:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>TRGS 524 Sachkunde:</strong> Alle unsere Mitarbeiter sind zertifiziert und regelmäßig geschult</li>
                    <li><strong>Lokale Expertise:</strong> Wir kennen die typischen Problemgebäude in Bielefeld</li>
                    <li><strong>Komplettservice:</strong> Von der Untersuchung über die Sanierung bis zur Freimessung - alles aus einer Hand</li>
                    <li><strong>Transparente Preise:</strong> Festpreis-Angebot nach Besichtigung, keine versteckten Kosten</li>
                    <li><strong>Schnelle Abwicklung:</strong> Besonders bei Notfällen sind wir innerhalb 24 Stunden vor Ort</li>
                    <li><strong>Saubere Arbeit:</strong> Staubfreie Entfernung mit Profi-Absauganlagen</li>
                  </ul>
                  <p>
                    Wir haben schon über 50 PCB-Sanierungen in Bielefeld und OWL durchgeführt - von kleinen
                    Wohnungen bis zu großen Schulkomplexen. Unsere Kunden schätzen vorallem, dass wir ehrlich
                    beraten und nicht unnötig Panik machen. Wenn die Werte im grünen Bereich sind, sagen wir
                    das auch. Und wenn saniert werden muss, machen wirs schnell und gründlich.
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
                Häufige Fragen zur PCB-Sanierung
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Ist PCB wirklich so gefährlich?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Ja, definitiv! PCB ist krebserregend, schädigt das Immunsystem und das Hormonsystem.
                    Es reichert sich im Fettgewebe an und baut sich kaum ab. Besonders für Kinder, Schwangere
                    und ältere Menschen ist PCB extrem gefährlich. Die WHO hat PCB als "wahrscheinlich
                    krebserregend" eingestuft.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann ich PCB-Fugen selbst entfernen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Auf keinen Fall! PCB-Sanierung darf nur von zertifizierten Fachfirmen mit TRGS 524
                    Sachkundenachweis durchgeführt werden. Wenn Sie selbst dran rumbasteln, verteilen Sie
                    hochgiftigen Staub in der ganzen Wohnung und gefährden Ihre Gesundheit massiv. Außerdem
                    machen Sie sich strafbar, wenn Sie PCB-haltigen Müll nicht ordnungsgemäß entsorgen.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie lange dauert eine PCB-Sanierung?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Das kommt drauf an, wieviele Fugen saniert werden müssen. Eine normale Wohnung schaffen
                    wir in 3-5 Tagen. Größere Objekte wie Treppenhäuser oder Schulen brauchen 2-4 Wochen.
                    Wir arbeiten aber immer so, dass die Beeinträchtigung für Sie minimal ist. Bei Schulen
                    sanieren wir oft in den Ferien.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Muss ich während der Sanierung ausziehen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Bei kleineren Sanierungen können Sie oft wohnen bleiben - wir schotten den Arbeitsbereich
                    luftdicht ab. Bei größeren Sanierungen oder stark belasteten Räumen empfehlen wir aber
                    auszuziehen. Die Kosten für ne Ersatzunterkunft übernimmt manchmal die Versicherung oder
                    können steuerlich abgesetzt werden.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was passiert wenn ich PCB ignoriere?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    PCB dünstet über Jahre weiter aus und Sie atmen es täglich ein. Das Gesundheitsrisiko
                    steigt mit jedem Jahr. Außerdem machen Sie sich als Eigentümer strafbar, wenn Sie trotz
                    Kenntnis nichts unternehmen - besonders bei vermieteten Objekten oder öffentlichen Gebäuden.
                    Und beim Verkauf müssen Sie PCB-Belastung angeben, sonst kann der Käufer nachträglich vom
                    Kauf zurücktreten.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Übernimmt die Versicherung die Kosten?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Bei Altlasten leider meistens nicht - das gilt als Instandhaltung. Aber: Wenn PCB bei nem
                    versicherten Schaden (Wasserschaden, Brandschaden) mitentdeckt wird, kann die Sanierung
                    manchmal mit übernommen werden. Wir unterstützen Sie bei der Kommunikation mit Ihrer
                    Versicherung und kennen die Tricks, um die maximale Erstattung rauszuholen.
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
                  PCB-Sanierung in ganz Bielefeld & Ostwestfalen-Lippe
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 text-gray-300">
                  Wir sind in allen Bielefelder Stadtteilen für Sie da:
                </p>
                <div className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Sennestadt, Stieghorst, Brackwede, Mitte, Schildesche, Jöllenbeck,
                  Heepen, Senne, Quelle, Ummeln, Dornberg, Gadderbaum, Hoberge-Uerentrup,
                  Brake, Brönninghausen, Vilsendorf, Oldentrup, Sieker, Hillegossen,
                  Altenhagen, Milse und Windwehe.
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Auch in Gütersloh, Herford, Paderborn, Bad Salzuflen, Detmold,
                  Lemgo und weiteren Städten in OWL führen wir PCB-Sanierungen durch.
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