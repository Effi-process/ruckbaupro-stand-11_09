'use client';

import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import ContactSection from '../components/ContactSection';

export default function ReinigungBielefeldPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Reinigung Bielefeld - Wir machen Ihre Baustelle wieder sauber
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-blue-100">
            Professionelle Baureinigung, Endreinigung und Industriereinigung in ganz OstWestfalen
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-yellow-300 transition-colors text-center">
              Kostenlose Beratung
            </Link>
            <Link href="tel:+4952136365998" className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-colors text-center">
              ☎ 0521 36365998
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
              Ihre Experten für professionelle Gebäudereinigung in Bielefeld
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Letzten Winter hatten wir so viele Anfragen aus Brackwede und Schildesche - alle wollten ihre Baustellen vor dem ersten Schnee fertig haben. Wenn der Estrich gelegt ist und die Maler durch sind, dann kommen wir. Als Reinigungsunternehmen in Bielefeld kennen wir jeden Winkel der Stadt - vom Teutoburger Wald bis nach Sennestadt. Nach über 15 Jahren in der Branche wissen wir genau, was Bauherren und Handwerker brauchen: schnelle, gründliche Arbeit zum fairen Preis.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Egal ob Sie eine komplette Baureinigung nach der Kernsanierung brauchen oder nur mal eben die Fenster nach dem Verputzen sauber haben wollen - wir sind Ihr Partner. Von der groben Baustellenreinigung bis zur feinen Endreinigung vor dem Einzug, alles aus einer Hand. Unsere Teams arbeiten mit modernen Industriestaubsaugern, HEPA-Filtern und umweltfreundlichen Reinigungsmitteln. Und das Beste: Wir kennen uns mit den ganzen Vorschriften aus. Grade wenn es um Feinstaub oder andere Schadstoffe geht, wissen viele garnicht was alles zu beachten ist.
            </p>
          </div>
        </div>
      </section>

      {/* Services - Glassmorphism Style */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Unsere Reinigungsleistungen für Bielefeld und Umgebung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Baureinigung",
                description: "Nach dem Bau ist vor dem Einzug - wir machen Ihre Baustelle bezugsfertig. Baustaub, Mörtelreste, Farbrückstände - alles muss weg bevor die neuen Mieter kommen.",
                features: ["Grobreinigung nach Rohbau", "Feinreinigung vor Abnahme", "Bauschuttentsorgung", "Staubfreie Übergabe"]
              },
              {
                title: "Endreinigung",
                description: "Die finale Reinigung vor der Übergabe. Fenster müssen glänzen, Böden streifenfrei sein. Besonders wichtig wenn die Kaution zurück soll.",
                features: ["Komplettreinigung aller Räume", "Fenster innen und außen", "Küche und Bad intensiv", "Böden versiegeln"]
              },
              {
                title: "Industriereinigung",
                description: "Produktionshallen, Werkstätten, Lagerhallen - überall wo gearbeitet wird, sammelt sich Dreck an. Öl, Metallspäne, Chemiereste - wir haben die richtigen Mittel.",
                features: ["Hallenreinigung", "Maschinenreinigung", "Hochdruckreinigung", "Ölfleckenentfernung"]
              },
              {
                title: "Unterhaltsreinigung",
                description: "Regelmäßige Reinigung für Büros, Praxen und Geschäfte. Täglich, wöchentlich oder monatlich - ganz wie Sie es brauchen.",
                features: ["Büroreinigung", "Treppenhausreinigung", "Sanitärreinigung", "Müllentsorgung"]
              },
              {
                title: "Sonderreinigung",
                description: "Manchmal braucht es spezielle Lösungen. Brand, Wasserschaden, Graffiti - wir haben für alles die richtige Technik.",
                features: ["Brandschadenreinigung", "Graffitientfernung", "Desinfektion", "Geruchsbeseitigung"]
              },
              {
                title: "Glasreinigung",
                description: "Saubere Fenster sind unsere Visitenkarte. Mit Teleskopstangen und Osmosewasser kriegen wir jede Scheibe streifenfrei.",
                features: ["Fensterreinigung", "Glasfassaden", "Wintergärten", "Schaufenster"]
              }
            ].map((service, index) => (
              <div key={index} className="backdrop-blur-md bg-gray-800/90 rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all hover:bg-gray-800/95 border border-white/50">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">{service.description}</p>
                <ul className="space-y-1 md:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-400">
                      <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            So läuft die Reinigung bei uns ab
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: "1", title: "Anruf", description: "Kurze Besprechung am Telefon, Termin noch diese Woche möglich" },
              { step: "2", title: "Besichtigung", description: "Wir schauen uns das Objekt an, kostenlos und unverbindlich" },
              { step: "3", title: "Festpreis", description: "Klarer Preis ohne versteckte Kosten, alles inklusive Material" },
              { step: "4", title: "Reinigung", description: "Professionelle Ausführung mit Abnahmegarantie" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mx-auto mb-2 md:mb-4">
                  {item.step}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas - Glassmorphism */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Wir reinigen in ganz Bielefeld und drumherum
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              Als Bielefelder Unternehmen sind wir überall schnell vor Ort. Ob in der Altstadt am Alten Markt, im Univiertel an der Uni, in Brackwede bei Real oder in Sennestadt - maximal 20 Minuten und wir sind da. Besonders viel zu tun haben wir immer in den Neubaugebieten in Schildesche und Jöllenbeck. Da wird viel gebaut und entsprechend viel gereinigt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Bielefeld Mitte/West</h3>
                <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                  <li>• Altstadt / Kesselbrink</li>
                  <li>• Siegfriedplatz (Siggi)</li>
                  <li>• Nordpark / Westend</li>
                  <li>• Sieker / Stieghorst</li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Bielefeld Nord/Ost</h3>
                <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                  <li>• Schildesche / Jöllenbeck</li>
                  <li>• Theesen / Brake</li>
                  <li>• Heepen / Oldentrup</li>
                  <li>• Milse / Vilsendorf</li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Bielefeld Süd</h3>
                <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                  <li>• Brackwede / Quelle</li>
                  <li>• Sennestadt / Senne</li>
                  <li>• Ummeln / Gadderbaum</li>
                  <li>• Bethel / Gellershagen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Spezialreinigungen für besondere Fälle
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Baureinigung nach Schadstoffsanierung</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Nach Asbestsanierungen oder KMF-Arbeiten muss besonders gründlich gereinigt werden. Wir haben die TRGS 519 Sachkunde und wissen genau was zu tun ist. Mit HEPA-gefilterten Saugern und speziellen Reinigungsmitteln sorgen wir dafür, dass keine Fasern zurückbleiben. Grade in den alten Gebäuden in Bielefeld-Mitte oder den Industriehallen in Oldentrup ist das oft ein Thema.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Die Dokumentation für Behörden und Versicherungen machen wir natürlich auch. Freimessungen, Protokolle, alles was gebraucht wird. Da sind wir penibel, denn bei Schadstoffen gibts keine zweite Chance.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Umweltfreundliche Reinigung</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Nachhaltigkeit ist uns wichtig - nicht nur weil es modern ist, sondern weil wir hier leben. Wir verwenden wo immer möglich biologisch abbaubare Reinigungsmittel. Besonders in Kindergärten, Schulen oder Arztpraxen achten wir drauf. Unser Fuhrpark wird nach und nach auf E-Autos umgestellt. Der erste Transporter fährt schon elektrisch durch Bielefeld.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Mit Mikrofasertüchern und dosierten Reinigungssystemen sparen wir Chemie und Wasser. Das ist nicht nur gut für die Umwelt sondern auch für Ihren Geldbeutel. Weniger Chemie bedeutet weniger Kosten.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">24/7 Notfallreinigung</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Rohrbruch, Brand, Vandalismus - manchmal muss es schnell gehen. Unser Notdienst ist rund um die Uhr erreichbar. Innerhalb von 2 Stunden sind wir überall in Bielefeld. Wir arbeiten mit allen großen Versicherungen zusammen und helfen bei der Schadensabwicklung.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Erst letzte Woche hatten wir einen Wasserschaden in einem Bürogebäude am Niederwall. Samstagnacht um 3 Uhr. Montag früh konnten die Mitarbeiter wieder normal arbeiten. So muss das laufen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Häufige Fragen zur Reinigung
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                question: "Wie schnell könnt ihr anfangen?",
                answer: "Normalerweise innerhalb von 2-3 Tagen. Bei Notfällen sofort. Kommt drauf an wie voll der Kalender ist. Aber irgendwie kriegen wir das immer hin."
              },
              {
                question: "Reinigt ihr auch am Wochenende?",
                answer: "Klar, besonders für Geschäfte die unter der Woche offen haben. Kostet zwar nen kleinen Aufschlag, aber manchmal muss es ja sein."
              },
              {
                question: "Was kostet eine Baureinigung?",
                answer: "Schwer zu sagen ohne das Objekt zu sehen. Grob geschätzt zwischen 3 und 8 Euro pro Quadratmeter. Kommt auf den Verschmutzungsgrad an. Am besten kurz anrufen und wir schauen vorbei."
              },
              {
                question: "Seid ihr versichert?",
                answer: "Natürlich! Betriebshaftpflicht bis 5 Millionen Euro. Ist auch wichtig, nicht dass mal was kaputt geht. Passiert zwar selten, aber sicher ist sicher."
              },
              {
                question: "Macht ihr auch regelmäßige Reinigung?",
                answer: "Ja klar, viele Büros und Praxen in Bielefeld nutzen unsere Unterhaltsreinigung. Von täglich bis monatlich, ganz wie Sie es brauchen."
              },
              {
                question: "Könnt ihr auch Graffiti entfernen?",
                answer: "Ja, haben wir die richtigen Mittel für. Je nach Untergrund mit Hochdruck, Sandstrahlen oder chemisch. Kriegen wir fast immer weg."
              }
            ].map((faq, index) => (
              <div key={index} className="backdrop-blur-md bg-gray-800/90 rounded-xl p-4 md:p-6 border border-white/50">
                <h3 className="text-base md:text-lg font-bold mb-2 text-white">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            Warum wir die Richtigen für Ihre Reinigung sind
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "🏢", title: "15+ Jahre dabei", description: "Kennen jeden Winkel in Bielefeld" },
              { icon: "⚡", title: "Schnell vor Ort", description: "Maximal 20 Minuten in ganz Bielefeld" },
              { icon: "💰", title: "Faire Preise", description: "Festpreis ohne Überraschungen" },
              { icon: "✨", title: "Top Qualität", description: "Moderne Technik, geschultes Personal" },
              { icon: "🌱", title: "Umweltfreundlich", description: "Bio-Reiniger wo möglich" },
              { icon: "📋", title: "Alles dabei", description: "Von Bau- bis Glasreinigung" },
              { icon: "🔒", title: "Versichert", description: "5 Mio Euro Haftpflicht" },
              { icon: "📞", title: "24/7 Notdienst", description: "Immer erreichbar wenns brennt" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">{item.icon}</div>
                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
              Reinigungsservice Bielefeld - mehr als nur putzen
            </h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-300">
              <p>
                Professionelle Gebäudereinigung ist mehr als nur mit dem Lappen drüber wischen. Da gehört Know-how dazu, die richtigen Geräte und ein Auge fürs Detail. Wir sind seit über 15 Jahren in Bielefeld unterwegs - vom Uni Campus bis zu den Industriegebieten an der A2. Jede Branche hat ihre eigenen Anforderungen. In der Lebensmittelindustrie muss es hygienisch sein, in Büros repräsentativ, und in Werkstätten robust.
              </p>
              <p>
                Besonders die Baureinigung hat es in sich. In Bielefeld wird viel gebaut - neue Wohnviertel in Schildesche, Sanierungen in der Altstadt, Industriehallen in Oldentrup. Nach dem Bau sieht es immer aus wie Sau. Baustaub überall, Mörtel an den Fenstern, Farbspritzer auf dem Boden. Da braucht es Profis die wissen was sie tun. Mit unseren Industriesaugern und Spezialreinigern kriegen wir alles wieder sauber.
              </p>
              <p>
                Die Endreinigung ist der letzte Schritt bevor die neuen Bewohner einziehen. Da muss alles perfekt sein. Keine Streifen an den Fenstern, keine Flecken auf dem Boden, kein Staub in den Ecken. Besonders wenn die Kaution zurück soll, lohnt sich eine professionelle Endreinigung. Die paar Euro die das kostet, spart man sich oft an Ärger mit dem Vermieter.
              </p>
              <p>
                Industriereinigung ist nochmal ne andere Nummer. In Produktionshallen sammelt sich ganz anderer Dreck an als im Büro. Maschinenöl, Metallspäne, Chemiereste - das braucht spezielle Reinigungsmittel und Techniken. Wir haben Hochdruckreiniger für hartnäckige Verschmutzungen und spezielle Entfetter für Ölflecken. Auch die Reinigung von Produktionsmaschinen machen wir - natürlich in Absprache mit den Technikern.
              </p>
              <p>
                Glasreinigung ist unsere Paradedisziplin. Saubere Fenster machen einfach was her. Mit unseren Teleskopstangen kommen wir bis in den dritten Stock, und mit Osmosewasser gibts keine Streifen. Auch Glasfassaden und Wintergärten sind kein Problem. Bei der Sparkasse am Jahnplatz putzen wir regelmäßig die komplette Glasfront - das sind mehrere hundert Quadratmeter.
              </p>
              <p>
                Die Unterhaltsreinigung ist das Brot und Butter Geschäft. Regelmäßige Reinigung hält nicht nur sauber sondern erhält auch den Wert der Immobilie. Dreck der sich festsetzt kann Oberflächen beschädigen. Deshalb empfehlen wir individuelle Reinigungsintervalle. Manche Büros brauchen täglich Reinigung, andere nur wöchentlich. Wir passen uns da an.
              </p>
              <p>
                Nachhaltigkeit wird immer wichtiger - auch in der Reinigung. Wir setzen wo möglich auf umweltfreundliche Reinigungsmittel. Mikrofasertücher reduzieren den Chemieeinsatz, und dosierbare Systeme vermeiden Verschwendung. Viele Kunden in Bielefeld legen da Wert drauf - besonders die die sich Nachhaltigkeit auf die Fahne geschrieben haben.
              </p>
              <p>
                Die Digitalisierung geht auch an uns nicht vorbei. Aufträge können online beauftragt werden, die Dokumentation läuft digital, und die Kommunikation per App. Das macht vieles einfacher und schneller. Grade bei großen Objekten mit vielen Beteiligten ist das ein Segen.
              </p>
              <p>
                Als Bielefelder Unternehmen sind wir fest verwurzelt in der Stadt. Wir kennen die Ecken und Kanten, die Mentalität der Menschen, und die Besonderheiten der Region. Diese lokale Verbundenheit merkt man auch in unserer Arbeit. Wir sind keine anonyme Reinigungskette sondern Ihr Partner vor Ort.
              </p>
              <p>
                Qualität zeigt sich in zufriedenen Kunden. Viele Bielefelder Unternehmen vertrauen seit Jahren auf uns - von der kleinen Praxis bis zum großen Industriebetrieb. Diese Erfahrung aus hunderten Projekten kommt jedem neuen Kunden zugute. Wir wissen was funktioniert und was nicht.
              </p>
              <p>
                Flexibilität ist heute wichtiger denn je. Reinigungszeiten müssen sich an Betriebsabläufe anpassen. Manchmal muss es auch mal schnell gehen. Wir sind darauf eingestellt - flexibles Personal, moderne Ausrüstung, und schnelle Reaktionszeiten. So können wir auch auf unvorhergesehene Situationen reagieren.
              </p>
              <p>
                Bei der Preisgestaltung sind wir transparent. Gute Reinigung hat ihren Preis, muss aber nicht teuer sein. Durch effiziente Abläufe und moderne Technik können wir faire Preise anbieten. Bei uns gibts keine versteckten Kosten - was im Angebot steht, das zahlne Sie auch. Nicht mehr und nicht weniger.
              </p>
              <p>
                Sonderreinigungen sind unsere Spezialität. Brand, Wasserschaden, Vandalismus - wir haben für alles die richtige Lösung. Mit speziellen Ozongeräten beseitigen wir Gerüche, mit Sandstrahlern entfernen wir Graffiti, und mit Trocknungsgeräten bewältigen wir Wasserschäden. Da arbeiten wir eng mit Versicherungen zusammen.
              </p>
              <p>
                Die Ausbildung unserer Mitarbeiter liegt uns am Herzen. Regelmäßige Schulungen sorgen dafür dass alle auf dem neuesten Stand sind. Grade bei Schadstoffen und Hygienevorschriften ändert sich viel. TRGS 519 für Asbest, Infektionsschutz für Krankenhäuser, Lebensmittelhygiene für Kantinen - unsere Leute kennen sich aus.
              </p>
              <p>
                Zum Schluss noch was Wichtiges: Reinigung ist Vertrauenssache. Sie lassen uns in Ihre Räume, oft wenn niemand da ist. Deshalb arbeiten wir nur mit zuverlässigen, geprüften Mitarbeitern. Alle haben ein polizeiliches Führungszeugnis und sind bei uns fest angestellt. Keine Subunternehmer, keine Schwarzarbeit - das ist uns wichtig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
            Jetzt Reinigungsangebot für Bielefeld einholen!
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns. Wir machen Ihnen ein faires Angebot und sorgen für Sauberkeit in Ihren Räumen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-blue-700 transition-colors">
              Kostenloses Angebot
            </Link>
            <Link href="tel:+4952136365998" className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-700 transition-colors">
              ☎ Direkt anrufen
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection
        title="Kostenloses Reinigungsangebot für Bielefeld"
        subtitle="Professionelle Reinigung in ganz Bielefeld - schnell, gründlich, fair"
      />

      <FooterWithMarquee />
    </div>
  );
}
