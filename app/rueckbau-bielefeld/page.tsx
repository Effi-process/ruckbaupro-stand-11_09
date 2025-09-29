'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import ContactSection from '../components/ContactSection';

export default function RueckbauBielefeldPage() {
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
            Rückbau Bielefeld - Ihr Partner für professionellen Gebäuderückbau
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-blue-100">
            Fachgerechter Abbruch, Entkernung und Rückbau in ganz OstWestfalen
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
              Experten für professionellen Rückbau in Bielefeld
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Wenn es um professionellen Rückbau in Bielefeld geht, sind wir Ihr verlässlicher Partner. Ob in der historischen Altstadt am Alten Markt, in den Industriegebieten von Oldentrup oder in den Wohnvierteln von Schildesche - wir kennen die baulichen Besonderheiten jedes Stadtteils. Mit über 15 Jahren Erfahrung im Rückbau haben wir schon alles gesehen: von der behutsamen Entkernung denkmalgeschützter Gebäude bis zum kompletten Abbruch großer Industrieanlagen.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
              Rückbau ist mehr als nur Abriss - es ist die fachgerechte Demontage und Trennung von Baustoffen für eine optimale Wiederverwertung. Besonders in Bielefeld, wo viele Gebäude aus den 60er und 70er Jahren stammen, ist oft mit Schadstoffen wie Asbest oder künstlichen Mineralfasern zu rechnen. Hier ist Expertise gefragt: Wir haben die nötigen Qualifikationen nach TRGS 519 und arbeiten eng mit zertifizierten Entsorgungsfachbetrieben zusammen.
            </p>
          </div>
        </div>
      </section>

      {/* Services - Glassmorphism Style */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Unsere Rückbau-Leistungen für Bielefeld und Umgebung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Komplettabbruch",
                description: "Vollständiger Abbruch von Gebäuden aller Art - vom Einfamilienhaus bis zur Industriehalle. Mit modernster Technik und unter Einhaltung aller Sicherheitsvorschriften.",
                features: ["Gebäudeabbruch", "Fundamententfernung", "Bauschuttentsorgung", "Grundstücksräumung"]
              },
              {
                title: "Teilrückbau",
                description: "Gezielter Rückbau einzelner Gebäudeteile für Umbauten oder Sanierungen. Präzise und schadensfrei für den Erhalt der verbleibenden Bausubstanz.",
                features: ["Stockwerkrückbau", "Anbautenentfernung", "Dachgeschossrückbau", "Wanddurchbrüche"]
              },
              {
                title: "Entkernung",
                description: "Professionelle Entkernung bei Erhalt der Gebäudehülle. Ideal für Kernsanierungen und Revitalisierungsprojekte in der Bielefelder Innenstadt.",
                features: ["Innenraumdemontage", "Haustechnikrückbau", "Bodenaufbruch", "Fassadenerhalt"]
              },
              {
                title: "Schadstoffsanierung",
                description: "Fachgerechte Entfernung von Asbest, KMF und anderen Schadstoffen. Zertifiziert nach TRGS 519 mit allen erforderlichen Nachweisen.",
                features: ["Asbestsanierung", "KMF-Entfernung", "PCB-Sanierung", "Schadstoffmessungen"]
              },
              {
                title: "Industrierückbau",
                description: "Spezialisiert auf den Rückbau von Industrieanlagen, Produktionshallen und technischen Einrichtungen. Auch während laufendem Betrieb möglich.",
                features: ["Hallenrückbau", "Maschinendemontage", "Tankanlagenrückbau", "Schornsteinabbruch"]
              },
              {
                title: "Entsorgung & Recycling",
                description: "Umweltgerechte Entsorgung und maximale Wiederverwertung der Baustoffe. Dokumentation für Behörden und Bauherren inklusive.",
                features: ["Sortenreine Trennung", "Recyclingkonzepte", "Entsorgungsnachweise", "Verwertungsquote > 90%"]
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
            Unser Rückbau-Prozess - Schritt für Schritt
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: "1", title: "Beratung", description: "Kostenlose Erstberatung und Objektbesichtigung vor Ort" },
              { step: "2", title: "Planung", description: "Detailliertes Rückbaukonzept mit Zeitplan und Festpreisangebot" },
              { step: "3", title: "Genehmigung", description: "Wir kümmern uns um alle Genehmigungen und Anmeldungen" },
              { step: "4", title: "Ausführung", description: "Professioneller Rückbau mit modernster Technik und Dokumentation" }
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
            Rückbau in allen Bielefelder Stadtteilen
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              Als lokales Unternehmen kennen wir jeden Stadtteil Bielefelds und seine baulichen Besonderheiten. Von den Gründerzeitvillen in Gadderbaum über die Nachkriegsbauten in Sennestadt bis zu den Industriegebäuden in Oldentrup - jeder Rückbau erfordert spezielle Kenntnisse. Wir sind in maximal 30 Minuten überall in Bielefeld und dem Umland vor Ort.
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
            Spezieller Rückbau für besondere Anforderungen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Rückbau mit Schadstoffsanierung</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Viele Gebäude in Bielefeld, besonders aus den 60er bis 80er Jahren, enthalten Schadstoffe wie Asbest, künstliche Mineralfasern oder PCB. Als TRGS 519 zertifizierter Fachbetrieb führen wir die komplette Schadstoffsanierung durch - von der Probenahme über die fachgerechte Entfernung bis zur Freimessung. Besonders in den Industriegebieten entlang der A2 und in älteren Wohnsiedlungen ist das ein wichtiges Thema.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Die Dokumentation für Behörden, Versicherungen und Käufer erstellen wir vollständig digital. Alle Entsorgungsnachweise, Messprotokollen und Zertifikate erhalten Sie übersichtlich aufbereitet. So sind Sie rechtlich immer auf der sicheren Seite.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Selektiver Rückbau für Ressourcenschonung</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                Nachhaltigkeit ist uns wichtig. Durch selektiven Rückbau trennen wir die verschiedenen Baustoffe bereits beim Abbau sortenrein. Metalle, Holz, Beton, Ziegel - alles wird getrennt erfasst und der Wiederverwertung zugeführt. Mit einer Recyclingquote von über 90% schonen wir Ressourcen und Ihr Budget, denn wiederverwertbare Materialien reduzieren die Entsorgungskosten erheblich.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Besonders bei wertvollen Baustoffen wie Naturstein, alten Ziegeln oder historischen Bauteilen lohnt sich die sorgfältige Bergung. Diese können oft wiederverwendet oder verkauft werden. In der Bielefelder Altstadt haben wir schon viele historische Elemente für Restaurierungsprojekte gerettet.
              </p>
            </div>

            <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Rückbau unter beengten Verhältnissen</h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                In der dicht bebauten Bielefelder Innenstadt oder in Reihenhaussiedlungen ist oft kein Platz für große Maschinen. Hier setzen wir auf spezielle Kompaktgeräte und manuelle Rückbautechniken. Mit Minibaggern, elektrischen Abbruchhämmern und staubarmen Verfahren arbeiten wir auch dort, wo andere passen müssen.
              </p>
              <p className="text-sm md:text-base text-gray-300">
                Lärmschutz und Staubminimierung haben dabei oberste Priorität. Mit Wassernebel-Anlagen, Schallschutzwänden und zeitlich optimierter Arbeitsplanung minimieren wir die Belästigung für Anwohner. Gerade in Wohngebieten wie Schildesche oder am Siegfriedplatz ist das essentiell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
            Häufige Fragen zum Rückbau in Bielefeld
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                question: "Was kostet ein Gebäuderückbau in Bielefeld?",
                answer: "Die Kosten hängen von vielen Faktoren ab: Gebäudegröße, Bauweise, Schadstoffbelastung und Zugänglichkeit. Ein Einfamilienhaus-Abbruch kostet meist zwischen 15.000 und 30.000 Euro. Gerne erstellen wir Ihnen ein kostenloses Festpreisangebot nach Besichtigung."
              },
              {
                question: "Brauche ich eine Abbruchgenehmigung?",
                answer: "Ja, in Bielefeld ist für jeden Gebäudeabbruch eine Genehmigung erforderlich. Wir übernehmen die komplette Antragsstellung beim Bauamt für Sie, inklusive aller erforderlichen Unterlagen und Nachweise."
              },
              {
                question: "Wie lange dauert ein Rückbau?",
                answer: "Ein Einfamilienhaus ist meist in 3-5 Tagen abgebrochen. Bei Schadstoffsanierung oder beengten Verhältnissen kann es länger dauern. Nach der Besichtigung nennen wir Ihnen einen verbindlichen Zeitrahmen."
              },
              {
                question: "Was passiert mit dem Bauschutt?",
                answer: "Wir trennen alle Materialien sortenrein und führen sie der Wiederverwertung zu. Über 90% der Baustoffe können recycelt werden. Sie erhalten alle Entsorgungsnachweise für Ihre Unterlagen."
              },
              {
                question: "Können Sie auch Asbest entfernen?",
                answer: "Ja, wir sind TRGS 519 zertifiziert und dürfen Asbestsanierungen durchführen. Von der Beprobung über die Sanierung bis zur Freimessung - alles aus einer Hand mit allen erforderlichen Nachweisen."
              },
              {
                question: "Arbeiten Sie auch für Privatleute?",
                answer: "Natürlich! Ob Gartenhaus, Garage oder Wohnhaus - wir sind für Privatpersonen, Unternehmen und öffentliche Auftraggeber gleichermaßen da. Faire Preise für jeden Auftrag."
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
            Warum RückbauPRO Bielefeld die richtige Wahl ist
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "🏗️", title: "15+ Jahre Erfahrung", description: "Über 500 Projekte in Bielefeld" },
              { icon: "📜", title: "Alle Zertifikate", description: "TRGS 519, Entsorgungsfachbetrieb" },
              { icon: "💰", title: "Festpreisgarantie", description: "Transparente Kalkulation" },
              { icon: "♻️", title: "90% Recycling", description: "Nachhaltig und kostensparend" },
              { icon: "⚡", title: "Schnelle Ausführung", description: "Termintreue garantiert" },
              { icon: "🛡️", title: "Vollversichert", description: "Umfassender Versicherungsschutz" },
              { icon: "🏆", title: "Referenzen", description: "Zufriedene Kunden in ganz OWL" },
              { icon: "📱", title: "24/7 Notdienst", description: "Bei Havarie sofort da" }
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
              Professioneller Rückbau in Bielefeld - mehr als nur Abriss
            </h2>
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-700">
              <p>
                Rückbau in Bielefeld bedeutet für uns mehr als nur Gebäude abzureißen. Es geht um die fachgerechte Demontage unter Berücksichtigung aller Sicherheitsaspekte, Umweltauflagen und wirtschaftlichen Gesichtspunkte. Die Stadt Bielefeld mit ihren rund 340.000 Einwohnern befindet sich im stetigen Wandel - alte Industriegebäude weichen modernen Wohnquartieren, Nachkriegsbauten werden durch energieeffiziente Neubauten ersetzt.
              </p>
              <p>
                Besonders in den Stadtteilen entlang der Bahnlinie wie Brackwede oder Schildesche sehen wir viel Bewegung. Hier entstehen neue Wohngebiete auf ehemaligen Gewerbeflächen. Der Rückbau solcher Objekte erfordert besondere Sorgfalt, denn oft sind Altlasten im Boden oder Schadstoffe in der Bausubstanz vorhanden. Mit modernster Messtechnik und jahrelanger Erfahrung identifizieren wir Gefahrenstellen frühzeitig.
              </p>
              <p>
                Die Bielefelder Industriegeschichte hat ihre Spuren hinterlassen. Viele alte Fabrikgebäude, besonders im Osten der Stadt, stammen noch aus der Textilindustrie-Ära. Diese Gebäude enthalten oft Asbest in Dämmungen, Brandschutzverkleidungen oder Bodenbelägen. Als TRGS 519 zertifizierter Betrieb führen wir die komplette Asbestsanierung durch - von der Gefährdungsbeurteilung über die Sanierung bis zur Freimessung.
              </p>
              <p>
                Der selektive Rückbau gewinnt immer mehr an Bedeutung. Statt alles mit der Abrissbirne zu zerstören, bauen wir Gebäude systematisch zurück. Fenster, Türen, Heizkörper, Elektroleitungen - alles wird sortenrein getrennt. Das schont nicht nur die Umwelt, sondern spart auch Entsorgungskosten. Besonders Metalle haben einen hohen Schrottwert, der die Gesamtkosten des Rückbaus reduziert.
              </p>
              <p>
                In der dicht bebauten Innenstadt, etwa rund um den Jahnplatz oder in der Altstadt, sind spezielle Techniken gefragt. Hier setzen wir auf erschütterungsarme Verfahren wie Sägen und kontrolliertes Sprengen. Mit Wassernebel-Anlagen minimieren wir die Staubentwicklung - wichtig für Anwohner und Passanten. Die Koordination mit der Stadt und den Nachbarn ist dabei essentiell.
              </p>
              <p>
                Entkernung ist eine unserer Spezialitäten. Dabei wird nur das Innere eines Gebäudes entfernt, die Fassade bleibt erhalten. Das ist besonders bei denkmalgeschützten Gebäuden oder in geschlossener Bebauung wichtig. In Bielefeld haben wir schon mehrere historische Gebäude entkernt, etwa am Alten Markt oder in der Oberntorwall-Gegend. Die Herausforderung liegt darin, die Statik zu erhalten und gleichzeitig effizient zu arbeiten.
              </p>
              <p>
                Die Entsorgung des Bauschutts erfolgt über zertifizierte Entsorgungsfachbetriebe. Wir arbeiten mit regionalen Partnern zusammen, um kurze Transportwege zu gewährleisten. Der Großteil des Materials geht zu Recyclinganlagen in der Region, wo Beton zu Recycling-Schotter, Metalle eingeschmolzen und Holz zu Hackschnitzeln verarbeitet wird. Diese Kreislaufwirtschaft ist nicht nur ökologisch sinnvoll, sondern oft auch günstiger als die Deponierung.
              </p>
              <p>
                Bei Industrierückbauten, etwa in den Gewerbegebieten an der A2 oder in Oldentrup, kommen oft Spezialaufgaben dazu. Tanks müssen gereinigt und zerlegt, Maschinen demontiert und Fundamente gesprengt werden. Hier arbeiten wir eng mit Spezialfirmen zusammen, koordinieren aber alles aus einer Hand. So haben Sie nur einen Ansprechpartner für das gesamte Projekt.
              </p>
              <p>
                Die Genehmigungsverfahren in Bielefeld kennen wir aus dem Effeff. Jeder Abbruch muss beim Bauamt angezeigt werden, bei größeren Projekten ist eine Baugenehmigung erforderlich. Wir erstellen alle erforderlichen Unterlagen, vom Abbruchantrag über den Standsicherheitsnachweis bis zum Entsorgungskonzept. Die Behördengänge übernehmen wir komplett für Sie.
              </p>
              <p>
                Sicherheit hat bei uns oberste Priorität. Alle Mitarbeiter sind entsprechend geschult und ausgerüstet. Wir erstellen für jedes Projekt eine Gefährdungsbeurteilung und einen Sicherheits- und Gesundheitsschutzplan. Die Baustelle wird professionell abgesichert, bei Bedarf mit Bauzäunen, Gerüsten oder Fangnetzen. Regelmäßige Sicherheitsbegehungen stellen sicher, dass alle Vorschriften eingehalten werden.
              </p>
              <p>
                Die Dokumentation erfolgt lückenlos digital. Von der Fotodokumentation über Wiegescheine bis zu Entsorgungsnachweisen - alles wird erfasst und archiviert. Sie erhalten am Ende ein komplettes Projektdossier, das Sie für Behörden, Versicherungen oder Käufer benötigen. Diese Transparenz schafft Vertrauen und Rechtssicherheit.
              </p>
              <p>
                Kostentransparenz ist uns wichtig. Nach der Besichtigung erhalten Sie ein detailliertes Festpreisangebot. Darin sind alle Leistungen aufgeführt: Rückbau, Transport, Entsorgung, eventuelle Schadstoffsanierung und Nebenkosten. Versteckte Kosten gibt es bei uns nicht. Sollten während der Arbeiten unvorhergesehene Probleme auftreten, besprechen wir das sofort mit Ihnen.
              </p>
              <p>
                Die Zusammenarbeit mit anderen Gewerken klappt reibungslos. Oft arbeiten wir im Anschluss an unseren Rückbau mit Tiefbauern, Landschaftsgärtnern oder Hochbauern zusammen. Die Übergabe erfolgt koordiniert, sodass keine Verzögerungen entstehen. In Bielefeld kennen wir die meisten Firmen persönlich - das erleichtert die Abstimmung erheblich.
              </p>
              <p>
                Für Notfälle sind wir 24/7 erreichbar. Bei Einsturzgefahr, nach Bränden oder Unwettern müssen oft schnell Sicherungsmaßnahmen ergriffen werden. Unser Notdienst ist innerhalb einer Stunde überall in Bielefeld. Wir sichern Gebäude ab, räumen Trümmer und sorgen dafür, dass keine Gefahr mehr besteht. Die Abrechnung erfolgt meist direkt mit der Versicherung.
              </p>
              <p>
                Als Bielefelder Unternehmen sind wir fest in der Region verwurzelt. Wir kennen die lokalen Gegebenheiten, die Mentalität der Menschen und die Besonderheiten der Stadt. Diese Verbundenheit spiegelt sich in unserer Arbeit wider - zuverlässig, gründlich und fair, wie man es in Ostwestfalen erwartet. Viele unserer Kunden empfehlen uns weiter - das ist die beste Bestätigung unserer Arbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
            Jetzt Rückbau-Angebot für Bielefeld einholen!
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Festpreisangebot für Ihren Rückbau in Bielefeld.
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
        title="Kostenloses Rückbau-Angebot für Bielefeld"
        subtitle="Professioneller Rückbau in ganz Bielefeld - schnell, sicher, sauber"
      />

      <FooterWithMarquee />
    </div>
  );
}