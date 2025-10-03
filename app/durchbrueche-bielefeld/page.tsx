'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function DurchbruecheBielefeld() {
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
                  Durchbrüche Bielefeld
                </h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300 px-4">
                  Professionelle Kernbohrungen & Wanddurchbrüche - Präzise & Staubarm
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Staubarme Technik</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Moderne Absauganlagen für sauberes Arbeiten ohne Dreck
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
                  <h6 className="text-xl md:text-2xl font-bold text-white">Präzises Arbeiten</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Millimetergenaue Durchbrüche ohne Beschädigung der Bausubstanz
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Schnelle Umsetzung</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Kurze Wartezeiten, flexible Terminplanung
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
                  Durchbrüche Bielefeld - Wenn neue Öffnungen her müssen
                </h2>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Gestern waren wir in nem Altbau in der Altstadt - der Eigentümer wollte ne offene Küche und
                    brauchte nen Durchbruch durch die tragende Wand. So Anfragen kriegen wir ständig! Mal soll
                    ne neue Tür rein, mal braucht man Platz für Rohre oder Leitungen, manchmal will jemand einfach
                    mehr Licht im Keller haben. Durchbrüche sind unsere tägliche Arbeit und wir haben die Technik,
                    um das sauber und präzise zu machen - ohne dass Ihnen das halbe Haus zusammenkracht!
                  </p>
                  <p>
                    In Bielefeld haben wir mit allen Gebäudetypen zu tun: Alte Fachwerkhäuser in Jöllenbeck, dicke
                    Ziegelwände in Brackwede, Betonbauten in Sennestadt. Jedes Material braucht ne andere Technik
                    und vorallem muss man wissen, was tragend ist und was nicht. Ein falscher Durchbruch kann richtig
                    teuer werden - oder im schlimmsten Fall gefährlich!
                  </p>
                </div>
              </div>

              {/* Types of Breakthroughs */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Welche Durchbrüche machen wir?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Bei Durchbrüchen gibts viele verschiedene Möglichkeiten. Hier sind die häufigsten Sachen,
                    die wir machen:
                  </p>
                  <p className="font-semibold text-white">Wanddurchbrüche für Türen und Durchgänge</p>
                  <p>
                    Das ist der Klassiker - Sie wollen zwei Räume verbinden oder ne neue Tür einbauen. Dabei
                    müssen wir erstmal klären, ob die Wand tragend ist. Bei tragenden Wänden brauchen wir nen
                    Statiker und müssen mit Stahlträgern arbeiten, um die Last abzufangen. Bei nicht-tragenden
                    Wänden geht das einfacher. Letzte Woche haben wir in ner Wohnung in Schildesche so nen
                    Durchbruch gemacht - jetzt haben die ne richtig schöne offene Wohnküche!
                  </p>
                  <p className="font-semibold text-white">Kernbohrungen für Leitungen</p>
                  <p>
                    Wenn Sie neue Heizungsrohre, Wasserleitungen, Lüftungskanäle oder Kabel verlegen wollen,
                    brauchen Sie oft Bohrungen durch Wände oder Decken. Wir haben Kernbohrgeräte von 10 bis
                    60 cm Durchmesser - damit kriegen wir durch Beton, Ziegel, Naturstein, alles. Die Bohrungen
                    sind millimetergenau und staubarm, weil wir mit Wasserabsaugung arbeiten.
                  </p>
                  <p className="font-semibold text-white">Deckendurchbrüche für Treppen und Schächte</p>
                  <p>
                    Manchmal braucht man nen Durchbruch durch die Decke - zum Beispiel wenn ne neue Treppe zum
                    Dachboden soll oder ein Lüftungsschacht. Deckendurchbrüche sind komplizierter als Wanddurchbrüche,
                    weil man von unten arbeiten muss und die Statik besonders wichtig ist. Da arbeiten wir immer
                    mit nem Statiker zusammen.
                  </p>
                  <p className="font-semibold text-white">Fensterdurchbrüche</p>
                  <p>
                    Dunkler Keller? Fensterloser Raum? Wir machen neue Fensteröffnungen in Außenwänden. Grade
                    bei Kellern ist das beliebt - mit nem Fenster wird aus dem dunklen Loch plötzlich ein
                    nutzbarer Hobbyraum oder Büro. Bei Fensterdurchbrüchen müssen wir besonders aufpassen wegen
                    der Dämmung und Abdichtung nach außen.
                  </p>
                  <p className="font-semibold text-white">Durchbrüche für Schornsteine und Abgasrohre</p>
                  <p>
                    Neue Heizung? Kaminofen? Dann brauchen Sie wahrscheinlich nen Durchbruch für den Schornstein
                    oder das Abgasrohr. Da müssen wir die Brandschutzvorschriften beachten und die richtigen
                    Abstände zu brennbaren Materialien einhalten. Wir arbeiten dabei eng mit den Schornsteinfegern
                    und Heizungsbauern zusammen.
                  </p>
                </div>
              </div>

              {/* Process */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Wie läuft so ein Durchbruch ab?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Viele Leute denken, Durchbruch machen ist einfach - Presslufthammer raus und drauflos! Aber
                    so einfach ist das nicht. Wenn mans richtig macht, gibt's ne klare Reihenfolge:
                  </p>
                  <p className="font-semibold text-white">1. Bestandsaufnahme und Planung</p>
                  <p>
                    Zuerst kommen wir vorbei und gucken uns die Wand an. Wir checken die Baupläne (falls vorhanden),
                    messen die Wanddicke, prüfen das Material. Besonders wichtig: Gibts da Leitungen in der Wand?
                    Mit nem Leitungssuchgerät finden wir Strom-, Wasser- und Heizungsleitungen. Nichts ist blöder
                    als versehentlich ne Wasserleitung durchzubohren!
                  </p>
                  <p className="font-semibold text-white">2. Statik prüfen</p>
                  <p>
                    Bei tragenden Wänden holen wir nen Statiker dazu. Der rechnet aus, wie groß der Durchbruch
                    sein darf und welche Stahlträger wir brauchen. Die Statikprüfung kostet extra, ist aber Pflicht
                    bei tragenden Wänden. Ohne Statiknachweis kriegen Sie keine Baugenehmigung!
                  </p>
                  <p className="font-semibold text-white">3. Baugenehmigung einholen</p>
                  <p>
                    Nicht jeder Durchbruch braucht ne Baugenehmigung, aber bei tragenden Wänden oder Außenwänden
                    schon. Wir helfen Ihnen bei den Anträgen und Gesprächen mit dem Bauamt. In Bielefeld dauert
                    das normalerweise 4-8 Wochen. Bei kleineren Durchbrüchen reicht manchmal auch nur ne Bauanzeige.
                  </p>
                  <p className="font-semibold text-white">4. Absicherung und Vorbereitung</p>
                  <p>
                    Bevor wir loslegen, wird alles abgesichert. Wir bauen Staubschutzwände auf, decken Möbel ab,
                    legen Schutzfolien aus. Bei Kernbohrungen stellen wir unsere Wassertanks auf. Wenn nötig,
                    sichern wir die Decke mit Stützen ab. Sicherheit geht vor!
                  </p>
                  <p className="font-semibold text-white">5. Der eigentliche Durchbruch</p>
                  <p>
                    Jetzt geht's los! Bei kleineren Durchbrüchen bohren wir erstmal die Umrisse vor, dann wird das
                    Stück rausgesägt oder rausgemeißelt. Bei größeren Wanddurchbrüchen mit Stahlträger müssen wir
                    schrittweise vorgehen: Erst die Auflager für den Träger schaffen, dann den Träger einsetzen,
                    dann erst den kompletten Durchbruch machen. Bei Kernbohrungen setzen wir die Bohrmaschine an
                    und bohren in einem Durchgang durch - sauber und präzise.
                  </p>
                  <p className="font-semibold text-white">6. Verputzen und Saubermachen</p>
                  <p>
                    Nach dem Durchbruch müssen die Kanten noch sauber verputzt werden. Bei Außenwänden kommt
                    Dämmung rein. Wir machen die Baustelle sauber, saugen alles durch, entsorgen den Bauschutt.
                    Sie kriegen die Baustelle besenrein zurück!
                  </p>
                </div>
              </div>

              {/* Materials and Techniques */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Durchbrüche in verschiedenen Materialien
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Jedes Baumaterial braucht ne andere Technik. In Bielefeld haben wir mit allem möglichen zu tun:
                  </p>
                  <p className="font-semibold text-white">Ziegelwände</p>
                  <p>
                    Das klassische Bielefelder Mauerwerk - rote Backsteine oder Kalksandstein. Ziegel lassen sich
                    relativ gut durchbrechen, aber es staubt wie verrückt! Wir arbeiten mit Absaugung und feuchten
                    das Material an. Bei alten Ziegeln muss man aufpassen, die sind manchmal ganz brüchig. In
                    Brackwede und der Altstadt haben wir viele solche Wände.
                  </p>
                  <p className="font-semibold text-white">Betonwände</p>
                  <p>
                    Beton ist das härteste Material - vorallem Stahlbeton. Da kommen wir mit normalem Werkzeug
                    nicht durch, wir brauchen Kernbohrmaschinen oder Betonsägen. Durchbrüche in Betonwänden
                    dauern länger und kosten mehr, sind aber auch super präzise. In Sennestadt und rund um die
                    Uni haben wir oft mit Beton zu tun.
                  </p>
                  <p className="font-semibold text-white">Natursteinwände</p>
                  <p>
                    Bei alten Bauernhäusern in Jöllenbeck oder Dornberg finden wir oft Natursteinwände - dicke
                    Bruchsteinmauern, manchmal 80cm dick! Das ist richtig harte Arbeit, Naturstein ist mega zäh.
                    Da braucht man Geduld und die richtige Technik. Manchmal müssen wir Stein für Stein rausholen.
                  </p>
                  <p className="font-semibold text-white">Fachwerk</p>
                  <p>
                    Fachwerk ist trickreich - da darf man auf keinen Fall die tragenden Balken beschädigen! Bei
                    Fachwerkhäusern machen wir Durchbrüche nur in den Gefachen (die Ausfachungen zwischen den
                    Balken). Das geht eigentlich ganz gut, weil das Gefach nicht tragend ist. Aber man muss
                    wissen wo die Balken laufen!
                  </p>
                  <p className="font-semibold text-white">Poroton und Ytong</p>
                  <p>
                    Moderne Neubauten haben oft Porenbeton (Ytong) oder Poroton-Ziegel. Das sind leichte, gut
                    dämmende Steine. Die lassen sich relativ einfach durchbrechen, sind aber auch empfindlich -
                    da muss man sauber arbeiten, damit nicht mehr abbricht als geplant.
                  </p>
                </div>
              </div>

              {/* Costs */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was kostet ein Durchbruch?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Die Frage kommt immer zuerst! Die Kosten hängen von vielen Faktoren ab - Material, Größe,
                    ob tragend oder nicht, Zugänglichkeit. Hier mal grobe Richtwerte für Bielefeld:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Kleine Kernbohrung (10-20cm Durchmesser): 150-400 Euro</li>
                    <li>Große Kernbohrung (30-60cm Durchmesser): 500-1.500 Euro</li>
                    <li>Türdurchbruch in nicht-tragender Wand: 800-2.000 Euro</li>
                    <li>Türdurchbruch in tragender Wand (mit Stahlträger): 3.000-8.000 Euro</li>
                    <li>Fensterdurchbruch Außenwand: 2.500-6.000 Euro</li>
                    <li>Großer Wanddurchbruch für offene Küche: 4.000-12.000 Euro</li>
                    <li>Statikgutachten: 500-2.000 Euro (abhängig vom Aufwand)</li>
                  </ul>
                  <p>
                    Bei tragenden Wänden kommen die Kosten für den Stahlträger dazu - je nach Größe und Material
                    nochmal 1.000-3.000 Euro. Beton ist teurer als Ziegel, weil's länger dauert. Und wenn wir
                    aufwendig Leitungen verlegen oder umsetzen müssen, kostet das auch extra.
                  </p>
                  <p>
                    Wichtig: Die Preise sind ohne Baugenehmigung, Statiker, Folgearbeiten wie Elektrik, Heizung,
                    Türeinbau. Das müssen Sie extra einplanen. Wir machen Ihnen nach ner Besichtigung nen Festpreis,
                    dann wissen Sie genau was auf Sie zukommt.
                  </p>
                </div>
              </div>

              {/* Permits and Regulations */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Baugenehmigung und Vorschriften
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Viele Heimwerker denken: "Ist ja nur ne Wand, kann ich einfach durchhauen!" - Falsch! Bei
                    Durchbrüchen gibts klare Vorschriften und manchmal braucht man ne Genehmigung. Hier die
                    wichtigsten Regeln:
                  </p>
                  <p className="font-semibold text-white">Wann brauche ich ne Baugenehmigung?</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Bei allen Durchbrüchen in tragenden Wänden</li>
                    <li>Bei Durchbrüchen in Außenwänden (betrifft die Gebäudehülle)</li>
                    <li>Bei Veränderungen an der Gebäudestatik</li>
                    <li>Wenn durch den Durchbruch Brandschutzwände betroffen sind</li>
                  </ul>
                  <p>
                    Kleine Durchbrüche in nicht-tragenden Innenwänden brauchen meistens keine Genehmigung, aber
                    es schadet nicht beim Bauamt nachzufragen. In Bielefeld ist das Bauamt eigentlich ganz
                    kooperativ.
                  </p>
                  <p className="font-semibold text-white">Was passiert wenn ich ohne Genehmigung durchbreche?</p>
                  <p>
                    Schwarzbau! Das Bauamt kann Sie zwingen, alles wieder zurückzubauen. Im schlimmsten Fall
                    kostet das Bußgeld bis zu 50.000 Euro. Und bei nem Versicherungsschaden oder Verkauf der
                    Immobilie bekommen Sie richtig Probleme, wenn der Durchbruch nicht genehmigt war. Also:
                    Lieber vorher klären!
                  </p>
                  <p className="font-semibold text-white">Besondere Regeln bei Mietwohnungen</p>
                  <p>
                    Als Mieter dürfen Sie KEINE Durchbrüche machen ohne Erlaubnis vom Vermieter! Auch nicht in
                    nicht-tragenden Wänden. Das wäre ne unzulässige Veränderung der Mietsache. Der Vermieter
                    kann Sie auf Rückbau und Schadenersatz verklagen. Also immer vorher fragen und schriftlich
                    genehmigen lassen!
                  </p>
                  <p className="font-semibold text-white">Denkmalschutz</p>
                  <p>
                    Steht Ihr Haus unter Denkmalschutz? Dann wird's kompliziert. In der Bielefelder Altstadt und
                    bei vielen alten Höfen in den Außenbezirken gilt Denkmalschutz. Da müssen Sie erstmal mit
                    der Denkmalbehörde reden, bevor Sie auch nur nen kleinen Durchbruch machen dürfen. Die sind
                    manchmal sehr streng!
                  </p>
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Typische Fehler bei Durchbrüchen
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Wir sehen immer wieder die gleichen Fehler, wenn Leute selbst versuchen Durchbrüche zu machen
                    oder ne billige Firma beauftragen. Hier die Top 5 Fehler:
                  </p>
                  <p className="font-semibold text-white">1. Tragende Wand angebohrt ohne Statiker</p>
                  <p>
                    Das ist der gefährlichste Fehler! Letzte Woche hatten wir nen Notfall in Heepen - da hatte
                    jemand selbst nen Durchbruch in ne tragende Wand gemacht, ohne Stahlträger. Über dem Durchbruch
                    haben sich Risse gebildet, die Decke hing durch. Wir mussten sofort stützen und dann mit
                    Hochdruck nen Stahlträger einbauen. Das hat den Kunden am Ende das Dreifache gekostet!
                  </p>
                  <p className="font-semibold text-white">2. Leitungen nicht geortet</p>
                  <p>
                    Wasserleitung durchbohrt, Stromkabel erwischt - passiert leider oft. Mit nem Leitungssuchgerät
                    für 30 Euro könnte man das vermeiden. Wenn Sie ne Leitung treffen, kann das richtig teuer
                    werden. Wir hatten mal nen Fall wo jemand die Hauptwasserleitung durchbohrt hat - komplette
                    Wohnung unter Wasser!
                  </p>
                  <p className="font-semibold text-white">3. Zu großer Durchbruch ohne Genehmigung</p>
                  <p>
                    "Bisschen größer geht schon" - dachte sich ein Kunde in Schildesche und hat aus seinem geplanten
                    80cm Durchbruch einfach nen 2 Meter Durchgang gemacht. Ohne Statikprüfung, ohne Genehmigung.
                    Das Bauamt hat das bei ner Routinebegehung gesehen - Baustopp, Zwangsgeld, Rückbau. Am Ende
                    musste er die ganze Wand neu mauern und nochmal von vorne anfangen mit Genehmigung.
                  </p>
                  <p className="font-semibold text-white">4. Falsche Technik für Material</p>
                  <p>
                    Mit nem normalen Bohrhammer kommt man nicht durch Stahlbeton. Wir haben schon Leute gesehen,
                    die tagelang an ner Betonwand rumgebohrt haben und am Ende nur ein paar Löcher hatten. Dann
                    rufen sie uns an und es dauert mit der richtigen Technik 2 Stunden. Richtiges Werkzeug ist
                    das A und O!
                  </p>
                  <p className="font-semibold text-white">5. Schlechte Abdichtung bei Außenwänden</p>
                  <p>
                    Bei Durchbrüchen in Außenwänden muss man ordentlich abdichten und dämmen, sonst kriegen Sie
                    Feuchtigkeit und Schimmel. Wir hatten nen Fall in Jöllenbeck - da hatte jemand selbst nen
                    Fensterdurchbruch gemacht und einfach nur verputzt, ohne Dämmung. Nach nem Jahr war die ganze
                    Wand voll Schimmel, weil an der Stelle Kondenswasser entstand.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Warum RückbauPRO für Ihre Durchbrüche?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Durchbrüche sind Vertrauenssache - ein Fehler kann richtig teuer werden oder sogar gefährlich
                    sein. Hier sind unsere Stärken:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Erfahrung:</strong> Wir haben hunderte Durchbrüche in Bielefeld gemacht - in allen Gebäudetypen und Materialien</li>
                    <li><strong>Moderne Technik:</strong> Staubarme Kernbohrmaschinen, Betonsägen, Leitungsortung - wir haben alles</li>
                    <li><strong>Statiker-Netzwerk:</strong> Wir arbeiten mit erfahrenen Statikern zusammen, schnelle Termine</li>
                    <li><strong>Komplettservice:</strong> Vom Bauantrag über den Durchbruch bis zum Verputzen - alles aus einer Hand</li>
                    <li><strong>Sauberes Arbeiten:</strong> Staubschutzwände, Absaugung, Schutzfolien - wir hinterlassen keine Baustelle</li>
                    <li><strong>Festpreise:</strong> Nach Besichtigung gibt's nen verbindlichen Festpreis, keine Überraschungen</li>
                    <li><strong>Schnelle Abwicklung:</strong> Kurze Wartezeiten, flexible Terminplanung auch am Wochenende möglich</li>
                  </ul>
                  <p>
                    Unsere Kunden schätzen vorallem, dass wir ehrlich beraten. Wenn ein Durchbruch technisch
                    problematisch oder zu teuer wäre, sagen wir das auch und schlagen Alternativen vor. Manchmal
                    gibt's einfachere Lösungen! Und wenn der Durchbruch machbar ist, setzen wir ihn sauber und
                    präzise um.
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
                Häufige Fragen zu Durchbrüchen
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann ich selbst nen Durchbruch machen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Bei kleinen Durchbrüchen in nicht-tragenden Wänden können handwerklich geschickte Leute das
                    theoretisch selbst machen. Aber Sie brauchen das richtige Werkzeug und müssen die Leitungen
                    orten. Bei tragenden Wänden: Finger weg! Das ist lebensgefährlich und illegal ohne Statiker
                    und Genehmigung. Außerdem haben Sie als Laie keine Haftpflichtversicherung für Bauarbeiten -
                    wenn was schiefgeht, zahlen Sie alles selbst.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie erkenne ich ob ne Wand tragend ist?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Außenwände sind fast immer tragend. Wände die auf Fundamenten stehen oder durchgehend von
                    Keller bis Dach gehen sind meistens tragend. Wände die parallel zu den Deckenbalken verlaufen
                    sind oft nicht tragend. Aber 100% Sicherheit gibt nur nen Blick in die Baupläne oder ne
                    Begutachtung durch nen Statiker. Im Zweifel immer nen Fachmann fragen!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie lange dauert ein Durchbruch?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Kleine Kernbohrungen schaffen wir in 1-2 Stunden. Ein einfacher Türdurchbruch in nicht-tragender
                    Wand dauert 1-2 Tage. Bei tragenden Wänden mit Stahlträger brauchen wir 3-5 Tage. Die Planung
                    und Baugenehmigung vorher kann aber 4-8 Wochen dauern. Wir empfehlen für größere Projekte
                    mindestens 2-3 Monate Vorlaufzeit einzuplanen.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was passiert mit dem Bauschutt?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Wir entsorgen den Bauschutt fachgerecht. Ziegel, Beton und Mörtel kommen auf die Bauschuttdeponie,
                    wo sie recycelt werden können. Die Entsorgungskosten sind normalerweise in unserem Angebot mit
                    drin. Bei größeren Mengen stellen wir nen Container - den können Sie auch für Ihren anderen
                    Bauabfall nutzen.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Macht ein Durchbruch viel Dreck?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Mit der richtigen Technik hält sich der Dreck in Grenzen. Wir arbeiten mit Staubschutzwänden
                    und Absauganlagen. Bei Kernbohrungen arbeiten wir mit Wasser, da entsteht kaum Staub. Trotzdem
                    sollten Sie empfindliche Möbel aus dem Raum entfernen oder gut abdecken. Wir räumen nach getaner
                    Arbeit alles sauber auf und saugen durch.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was kostet ein Statikgutachten?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Ein einfaches Statikgutachten für nen Wanddurchbruch kostet etwa 500-800 Euro. Bei komplizierteren
                    Fällen (große Durchbrüche, mehrere Geschosse, schwierige Statik) können es auch 1.500-2.000 Euro
                    werden. Das Gutachten brauchen Sie für die Baugenehmigung und um den richtigen Stahlträger zu
                    berechnen. Daran sollte man nicht sparen - ein zu schwacher Stahlträger kann katastrophale
                    Folgen haben!
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
                  Durchbrüche in ganz Bielefeld & Ostwestfalen-Lippe
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
                  Lemgo und weiteren Städten in OWL führen wir Durchbrüche durch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking for SEO */}
      <RelatedServicesBielefeld currentSlug="durchbrueche-bielefeld" category="all" maxServices={6} />

      {/* Contact Form */}
      <SimpleContactForm />

      {/* Footer */}
      <FooterWithMarquee />
    </div>
  );
}
