'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import ContactSection from '../components/ContactSection';

export default function SanierungBielefeldPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <FloatingElements />

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Sanierung Bielefeld - Professionelle Schadstoffsanierung für Ihre Sicherheit
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-blue-100">
            Zertifizierte Sanierungsexperten für Asbest, KMF und Schadstoffe in ganz OstWestfalen
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-yellow-300 transition-colors text-center">
              Kostenlose Beratung
            </Link>
            <Link href="tel:+491748083023" className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-colors text-center">
              ☎ 0174 808 3023
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
              Ihre Experten für Schadstoffsanierung in Bielefeld
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Letzen Winter hatten wir einen Notfall in Sennestadt - eine Familie hatte beim Renovieren ihres Hauses aus den 70ern Asbest in den Wänden gefunden. Innerhalb von zwei Stunden waren wir vor Ort, haben alles abgesichert und die komplette Sanierung durchgeführt. Solche Situationen sind in Bielefeld keine Seltenheit. Viele Gebäude aus der Nachkriegszeit bis in die 80er Jahre enthalten Schadstoffe wie Asbest, künstliche Mineralfasern oder PCB. Als TRGS 519 zertifiziertes Sanierungsunternehmen wissen wir genau, worauf es ankommt.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Sanierung bedeutet für uns mehr als nur das Entfernen von Schadstoffen. Es geht um Ihre Gesundheit, Ihre Sicherheit und die Ihrer Familie. Ob in der historischen Altstadt am Alten Markt, in den Industriegebieten von Oldentrup oder in den Wohnvierteln von Schildesche - wir kennen die baulichen Besonderheiten jedes Stadtteils. Mit modernster Messtechnik identifizieren wir Gefahrenstellen, erstellen ein maßgeschneidertes Sanierungskonzept und führen alle Arbeiten fachgerecht durch. Von der ersten Beprobung bis zur finalen Freimessung - alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Services - Glassmorphism Style */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Unsere Sanierungsleistungen für Bielefeld und Umgebung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Asbestsanierung",
                description: "Komplette Asbestentfernung nach TRGS 519. Von der Probenahme über die Sanierung bis zur Freimessung - alles mit höchster Sicherheit.",
                features: ["TRGS 519 zertifiziert", "Luftdichtheitsprüfung", "Freimessungen", "Entsorgungsnachweise"]
              },
              {
                title: "KMF-Sanierung",
                description: "Professionelle Entfernung künstlicher Mineralfasern nach TRGS 521. Glaswolle, Steinwolle - wir entsorgen alles fachgerecht.",
                features: ["TRGS 521 konform", "Staubfreie Demontage", "Spezialverpackung", "Dokumentation komplett"]
              },
              {
                title: "PCB-Sanierung",
                description: "Sanierung PCB-belasteter Fugenmassen, Anstriche und Bauteile. Besonders wichtig bei öffentlichen Gebäuden und Schulen.",
                features: ["PCB-Messungen", "Primärsanierung", "Sekundärsanierung", "Raumluftmessungen"]
              },
              {
                title: "Schimmelsanierung",
                description: "Nachhaltige Schimmelbeseitigung mit Ursachenbekämpfung. Wir finden die Feuchtequelle und sanieren dauerhaft.",
                features: ["Ursachenanalyse", "Desinfektion", "Bautrocknung", "Präventionsberatung"]
              },
              {
                title: "Schadstoffmessungen",
                description: "Professionelle Schadstoffanalysen und Raumluftmessungen. Klarheit über Belastungen in Ihrem Gebäude.",
                features: ["Asbestproben", "KMF-Analysen", "Raumluftmessungen", "Gutachtenerstellung"]
              },
              {
                title: "Brandschadensanierung",
                description: "Komplette Sanierung nach Bränden. Von der Schadstoffbeseitigung bis zum Wiederaufbau.",
                features: ["Rußentfernung", "Geruchsneutralisation", "Schadstoffentsorgung", "Wiederherstellung"]
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
            Unser Sanierungsprozess - sicher und transparent
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: "1", title: "Analyse", description: "Kostenlose Erstbegehung und Schadstoffanalyse vor Ort" },
              { step: "2", title: "Konzept", description: "Detailliertes Sanierungskonzept mit Festpreisangebot" },
              { step: "3", title: "Sanierung", description: "Fachgerechte Durchführung nach allen Vorschriften" },
              { step: "4", title: "Freimessung", description: "Abschlussmessung und vollständige Dokumentation" }
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
            Sanierung in allen Bielefelder Stadtteilen
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              Als lokales Unternehmen sind wir in ganz Bielefeld schnell vor Ort. Besonders in den älteren Stadtteilen wie Gadderbaum mit seinen Villen aus der Gründerzeit oder in den Nachkriegsbauten von Sennestadt ist Schadstoffsanierung oft ein Thema. Aber auch in moderneren Gebäuden finden sich immer wieder Überraschungen. Wir kennen die typischen Bauweisen jeder Epoche und wissen, wo Schadstoffe versteckt sein könnten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-white">Bielefeld Mitte/West</h3>
                <ul className="space-y-1 text-xs md:text-sm text-gray-400">
                  <li>• Altstadt / Kesselbrink</li>
                  <li>• Siegfriedplatz / Nordpark</li>
                  <li>• Westend / Pauluskirche</li>
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
            Spezialsanierungen für besondere Herausforderungen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Sanierung öffentlicher Gebäude</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Schulen, Kindergärten, Verwaltungsgebäude - hier gelten besondere Anforderungen. Wir haben schon viele öffentliche Gebäude in Bielefeld saniert, von der Universität bis zu städtischen Kindergärten. Die Arbeiten müssen oft während des laufenden Betriebs erfolgen, was besondere Schutzmaßnahmen erfordert. Mit staubdichten Abschottungen, Unterdruck-Technik und zeitlich optimierter Planung minimieren wir die Beeinträchtigungen.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Alle Arbeiten werden lückenlos dokumentiert. Die Freimessungen erfolgen durch akkreditierte Messstellen. So haben Träger und Nutzer die Gewissheit, dass keine Gefahr mehr besteht. Besonders bei PCB-Sanierungen in Schulen ist das wichtig - hier arbeiten wir eng mit dem Gesundheitsamt zusammen.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Sanierung unter Denkmalschutz</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Die historische Bausubstanz in Bielefeld erfordert besondere Sensibilität. Bei denkmalgeschützten Gebäuden müssen oft historische Baustoffe erhalten bleiben, auch wenn sie Schadstoffe enthalten. Hier setzen wir auf spezielle Verfahren wie Beschichtungen oder Verkapselungen. In der Altstadt haben wir schon mehrere Fachwerkhäuser saniert - immer in enger Abstimmung mit der Denkmalbehörde.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Manchmal finden wir bei solchen Projekten wahre Schätze - historische Malereien unter Asbestplatten oder original Jugendstil-Fliesen. Die werden natürlich erhalten und fachgerecht restauriert. So verbinden wir Schadstoffsanierung mit Denkmalpflege.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Notfallsanierung 24/7</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Wasserschäden, Brände, beschädigte Asbestplatten - manchmal muss es schnell gehen. Unser Notdienst ist rund um die Uhr erreichbar. Innerhalb einer Stunde sind wir überall in Bielefeld. Wir sichern die Gefahrenstelle ab, führen Sofortmaßnahmen durch und kümmern uns um die weitere Sanierung. Letzte Woche hatten wir einen Rohrbruch in Brackwede - die Asbestdämmung war komplett durchnässt. Noch in der Nacht haben wir alles abgeschottet und am nächsten Tag saniert.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Die Zusammenarbeit mit Versicherungen läuft reibungslos. Wir erstellen alle erforderlichen Gutachten und Dokumentationen. So bekommen Sie schnell Ihr Geld und können sich auf das Wesentliche konzentrieren - die Wiederherstellung Ihrer Räume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Häufige Fragen zur Sanierung in Bielefeld
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                question: "Wann brauche ich eine Schadstoffsanierung?",
                answer: "Bei Gebäuden vor 1993 sollten Sie vor Renovierungen immer eine Schadstoffanalyse machen lassen. Asbest wurde bis 1993 verbaut, KMF bis 2000. Wenn Sie verdächtige Materialien finden - graue Platten, alte Dämmung, Vinyl-Asbest-Fliesen - rufen Sie uns an. Wir machen eine kostenlose Erstbegehung."
              },
              {
                question: "Was kostet eine Asbestsanierung?",
                answer: "Das hängt von der Menge und Art des Materials ab. Eine kleine Sanierung startet bei etwa 2.000 Euro, größere Projekte können schnell fünfstellig werden. Aber: Wir erstellen Ihnen ein Festpreisangebot nach Besichtigung. Keine versteckten Kosten, alles transparent."
              },
              {
                question: "Wie lange dauert eine Sanierung?",
                answer: "Kleinere Sanierungen sind in 2-3 Tagen erledigt. Bei größeren Projekten rechnen Sie mit 1-2 Wochen. Die genaue Dauer hängt von der Schadstoffart, der Menge und den örtlichen Gegebenheiten ab. Wir geben Ihnen einen verbindlichen Zeitplan."
              },
              {
                question: "Muss ich während der Sanierung ausziehen?",
                answer: "Bei Teilsanierungen oft nicht. Wir schotten den Arbeitsbereich luftdicht ab. Bei Komplettsanierungen oder wenn Wohnräume betroffen sind, ist ein vorübergehender Auszug meist sinnvoll. Wir besprechen das individuell mit Ihnen."
              },
              {
                question: "Sind Sie wirklich zertifiziert?",
                answer: "Ja, absolut! TRGS 519 für Asbest, TRGS 521 für KMF. Alle unsere Mitarbeiter haben die erforderlichen Sachkundenachweise. Die Zertifikate können Sie jederzeit einsehen. Wir arbeiten nur mit zugelassenen Entsorgern und akkreditierten Messstellen."
              },
              {
                question: "Was passiert mit dem Sondermüll?",
                answer: "Alle Schadstoffe werden fachgerecht verpackt, gekennzeichnet und zu zugelassenen Deponien transportiert. Sie erhalten alle Entsorgungsnachweise für Ihre Unterlagen. Bei Asbest gibt es spezielle Verpackungsvorschriften - Big Bags oder Plattensäcke, alles doppelt verpackt und gekennzeichnet."
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
            Warum Sanierung mit RückbauPRO Bielefeld?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "🛡️", title: "TRGS 519/521", description: "Alle Zertifikate vorhanden" },
              { icon: "⚡", title: "24/7 Notdienst", description: "Immer erreichbar" },
              { icon: "📊", title: "Festpreise", description: "Transparent & fair" },
              { icon: "🔬", title: "Moderne Technik", description: "Präzise Messungen" },
              { icon: "📋", title: "Dokumentation", description: "Lückenlos & digital" },
              { icon: "🏆", title: "15+ Jahre", description: "Erfahrung in Bielefeld" },
              { icon: "♻️", title: "Umweltgerecht", description: "Fachgerechte Entsorgung" },
              { icon: "✅", title: "Garantie", description: "Freimessung inklusive" }
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
              Professionelle Sanierung in Bielefeld - Ihre Gesundheit ist unser Auftrag
            </h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-700">
              <p>
                Sanierung in Bielefeld ist mehr als nur ein Job für uns - es ist unsere Verantwortung für die Gesundheit der Menschen in unserer Stadt. Jedes Jahr führen wir hunderte Sanierungsprojekte durch, von kleinen Wohnungen bis zu großen Industrieanlagen. Die Vielfalt der Gebäude in Bielefeld spiegelt die Geschichte der Stadt wider: Gründerzeitvillen in Gadderbaum, Nachkriegsbauten in Brackwede, Plattenbauten in Sennestadt, moderne Bürokomplexe am Niederwall. Jede Epoche hat ihre eigenen Schadstoffe hinterlassen.
              </p>
              <p>
                Asbest ist nach wie vor das größte Thema. Bis 1993 wurde es überall verbaut - in Dachplatten, Fassaden, Rohrisolierungen, Bodenbelägen, sogar in Blumenkästen. Viele Hausbesitzer wissen gar nicht, dass sie auf einer Zeitbombe sitzen. Solange Asbest nicht beschädigt wird, ist es ungefährlich. Aber sobald gebohrt, gesägt oder geschliffen wird, werden die tödlichen Fasern freigesetzt. Deshalb ist es so wichtig, vor jeder Renovierung eine Schadstoffanalyse zu machen.
              </p>
              <p>
                Künstliche Mineralfasern sind das zweithäufigste Problem. Die alte Glas- oder Steinwolle in Dächern und Wänden kann krebserregende Fasern freisetzen. Besonders in den Häusern aus den 70er und 80er Jahren finden wir oft KMF. Die Sanierung ist aufwendig, weil die Fasern sich überall verteilen. Mit speziellen Saugern und Unterdrucktechnik sorgen wir dafür, dass nichts in die Raumluft gelangt.
              </p>
              <p>
                PCB in Fugenmassen und Anstrichen ist ein oft unterschätztes Problem. Gerade in öffentlichen Gebäuden aus den 60er und 70er Jahren wurden PCB-haltige Materialien verbaut. Die Schadstoffe gasen noch heute aus und belasten die Raumluft. Bei Schulen und Kindergärten ist das besonders kritisch. Wir haben schon mehrere Schulen in Bielefeld saniert - immer in den Ferien, damit der Unterricht nicht gestört wird.
              </p>
              <p>
                Schimmel ist ein wachsendes Problem, besonders in schlecht gedämmten Altbauten. Durch die steigenden Energiepreise drehen viele die Heizung runter und lüften weniger. Das Ergebnis: Feuchtigkeit kondensiert an kalten Wänden und Schimmel breitet sich aus. Wir finden die Ursache, sanieren den Schimmel und beraten zur Prävention. Oft reichen schon kleine bauliche Veränderungen, um das Problem dauerhaft zu lösen.
              </p>
              <p>
                Die Sanierung unter bewohnten Verhältnissen erfordert besondere Sorgfalt. Mit staubdichten Abschottungen, Schleusen und Unterdruckhaltung sorgen wir dafür, dass keine Schadstoffe in Wohnbereiche gelangen. Die Bewohner können oft in ihrer Wohnung bleiben, während wir im Bad oder in der Küche sanieren. Das spart Hotelkosten und Stress.
              </p>
              <p>
                Notfallsanierungen sind unser Spezialgebiet. Wenn nachts ein Rohr platzt und Asbestdämmung durchnässt, oder wenn bei Bauarbeiten versehentlich Asbest freigesetzt wird, sind wir sofort da. Unser Notdienst ist 24/7 erreichbar. Wir haben immer ein Team in Bereitschaft und alle Materialien im Lager. So können wir innerhalb einer Stunde überall in Bielefeld sein.
              </p>
              <p>
                Die Zusammenarbeit mit Behörden läuft reibungslos. Wir kennen die Ansprechpartner beim Umweltamt, beim Bauamt und beim Gesundheitsamt persönlich. Alle Anmeldungen und Genehmigungen erledigen wir für Sie. Nach der Sanierung erhalten Sie alle Dokumente ordentlich aufbereitet - für Ihre Unterlagen, für Käufer oder für Versicherungen.
              </p>
              <p>
                Qualität und Sicherheit stehen bei uns an erster Stelle. Alle Mitarbeiter werden regelmäßig geschult und haben die erforderlichen Sachkundenachweise. Wir arbeiten nur mit zugelassenen Entsorgern und akkreditierten Messstellen zusammen. Die Freimessungen nach der Sanierung sind unabhängig und rechtssicher. So haben Sie die Gewissheit, dass wirklich keine Gefahr mehr besteht.
              </p>
              <p>
                Die Kosten für eine Sanierung sind oft geringer als befürchtet. Durch effiziente Arbeitsweise und moderne Technik können wir faire Preise anbieten. Außerdem gibt es oft Fördermöglichkeiten, besonders bei energetischen Sanierungen in Kombination mit Schadstoffsanierung. Wir beraten Sie gerne zu Förderprogrammen und helfen bei der Antragstellung.
              </p>
              <p>
                Nachhaltigkeit ist uns wichtig. Wo möglich, trennen wir Materialien für die Wiederverwertung. Metalle werden recycelt, unbelastetes Holz wird thermisch verwertet. Nur wirklich belastete Materialien gehen auf die Sonderdeponie. So reduzieren wir die Umweltbelastung und die Entsorgungskosten.
              </p>
              <p>
                Die Digitalisierung hat auch die Sanierungsbranche erfasst. Alle Messungen, Protokolle und Berichte erstellen wir digital. Sie erhalten alle Dokumente per Mail und können sie jederzeit abrufen. Auch die Kommunikation während des Projekts läuft digital - per App sind Sie immer auf dem Laufenden über den Fortschritt.
              </p>
              <p>
                Als lokales Unternehmen sind wir fest in Bielefeld verwurzelt. Wir kennen die Stadt, die Menschen und die Besonderheiten der Region. Diese Verbundenheit spiegelt sich in unserer Arbeit wider. Wir sind nicht nur Dienstleister, sondern Partner. Viele Kunden empfehlen uns weiter - das ist die beste Bestätigung unserer Arbeit.
              </p>
              <p>
                Die Zukunft der Sanierung liegt in der Prävention. Durch regelmäßige Schadstoffchecks können Probleme frühzeitig erkannt werden. Wir bieten Wartungsverträge für Großkunden an - regelmäßige Kontrollen, Messungen und kleine Sanierungen. So bleiben Gebäude dauerhaft schadstofffrei.
              </p>
              <p>
                Zum Schluss noch ein wichtiger Hinweis: Versuchen Sie niemals, Schadstoffe selbst zu entfernen! Die Gefahr für Ihre Gesundheit ist zu groß. Außerdem drohen hohe Bußgelder bei unsachgemäßer Entsorgung. Rufen Sie uns lieber an - die Erstberatung ist kostenlos und wir finden immer eine Lösung, die zu Ihrem Budget passt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
            Jetzt Sanierungsberatung für Bielefeld anfordern!
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
            Kostenlose Erstbegehung und unverbindliches Angebot für Ihre Schadstoffsanierung in Bielefeld.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-blue-700 transition-colors">
              Kostenloses Angebot
            </Link>
            <Link href="tel:+491748083023" className="bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-700 transition-colors">
              ☎ Direkt anrufen
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection
        title="Kostenlose Sanierungsberatung für Bielefeld"
        subtitle="Professionelle Schadstoffsanierung - sicher, schnell, zertifiziert"
      />

      <FooterWithMarquee />
    </div>
  );
}