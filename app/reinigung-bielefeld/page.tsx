'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';

export default function ReinigungBielefeldPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <FloatingElements />

      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Reinigung Bielefeld - Professionelle Gebäudereinigung
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Ihr Partner für Baureinigung, Endreinigung und Industriereinigung in OWL
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center">
              Kostenlose Beratung
            </Link>
            <Link href="tel:+4952136365998" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors text-center">
              ☎ 0521 36365998
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Professionelle Gebäudereinigung in Bielefeld und Umgebung
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Willkommen bei RückbauPRO - Ihrem zuverlässigen Partner für alle Arten von Reinigungsarbeiten in Bielefeld. Mit über 15 Jahren Erfahrung im Bereich der professionellen Gebäude- und Industriereinigung sind wir Ihr kompetenter Ansprechpartner von der Baureinigung bis zur Endreinigung. Ob im Bielefelder Westen rund um den Siggi, in Schildesche, Jöllenbeck oder Brackwede - wir sind schnell vor Ort und sorgen für makelllose Sauberkeit.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Unsere zertifizierten Reinigungsteams arbeiten mit modernsten Geräten und umweltfreundlichen Reinigungsmitteln. Von der Grobreinigung nach Bauarbeiten über die Feinreinigung vor dem Einzug bis hin zur regelmäßigen Unterhaltsreinigung - bei uns erhalten Sie alle Reinigungsleistungen aus einer Hand. Wir kennen die besonderen Anforderungen der Bielefelder Unternehmen und Privatpersonen genau.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Unsere Reinigungsleistungen in Bielefeld
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Baureinigung",
                description: "Grob- und Feinreinigung nach Bauarbeiten, Entfernung von Baustaub, Zementschleiern und Mörtelresten. Professionele Reinigung für Neubauten und Sanierungen.",
                features: ["Bauschlussreinigung", "Baugrobreinigung", "Baufeinreinigung", "Staubentfernung"]
              },
              {
                title: "Endreinigung",
                description: "Komplette Reinigung vor Übergabe oder Einzug. Fenster, Böden, Sanitär und alle Oberflächen werden gründlich gereinigt.",
                features: ["Fensterreinigung", "Bodenreinigung", "Sanitärreinigung", "Küchenreinigung"]
              },
              {
                title: "Industriereinigung",
                description: "Spezialreinigung für Produktionshallen, Werkstätten und Lagerhallen. Auch Hochdruckreinigung und Maschinenreinigung.",
                features: ["Hallenreinigung", "Maschinenreinigung", "Hochdruckreinigung", "Öl- und Fettentfernung"]
              },
              {
                title: "Unterhaltsreinigung",
                description: "Regelmäßige Reinigung von Büros, Praxen und Geschäftsräumen. Flexibel nach Ihrem Zeitplan.",
                features: ["Büroreinigung", "Praxisreinigung", "Treppenhausreinigung", "Sanitärreinigung"]
              },
              {
                title: "Sonderreinigung",
                description: "Spezielle Reinigungsaufgaben wie Graffitientfernung, Brandschadenreinigung oder Tatortreinigung.",
                features: ["Graffitientfernung", "Brandreinigung", "Geruchsneutralisation", "Desinfektion"]
              },
              {
                title: "Glasreinigung",
                description: "Professionelle Fenster- und Glasfassadenreinigung auch in schwer zugänglichen Bereichen.",
                features: ["Fensterreinigung", "Glasfassaden", "Wintergärten", "Schaufenster"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-blue-700">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Unser Reinigungsprozess - Sauber und effizient
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Kontaktaufnahme", description: "Anruf oder Anfrage über unser Kontaktformular. Schnelle Terminvereinbarung möglich." },
              { step: "2", title: "Besichtigung", description: "Kostenlose Objektbesichtigung und detaillierte Bedarfsanalyse vor Ort." },
              { step: "3", title: "Angebot", description: "Transparentes Festpreisangebot ohne versteckte Kosten. Faire Preise garantiert." },
              { step: "4", title: "Ausführung", description: "Professionelle Reinigung durch geschultes Personal mit Qualitätskontrolle." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Reinigungsservice in allen Bielefelder Stadtteilen
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Als lokales Reinigungsunternehmen kennen wir Bielefeld wie unsere Westentasche. Von der Altstadt mit dem Alten Markt über das Univiertel bis nach Sennestadt - wir sind überall schnell zur Stelle. Besonders in den Gewerbegebieten an der A2 und A33 betreuen wir viele zufriedene Geschäftskunden.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-700">Bielefeld Mitte & West</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Altstadt / Altstädter Kirchplatz</li>
                  <li>• Kesselbrink / Ravensberger Park</li>
                  <li>• Siegfriedplatz (Siggi)</li>
                  <li>• Westend / Nordpark</li>
                  <li>• Sieker / Stieghorst</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-700">Bielefeld Nord & Ost</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Schildesche</li>
                  <li>• Jöllenbeck</li>
                  <li>• Theesen / Vilsendorf</li>
                  <li>• Brake / Milse</li>
                  <li>• Heepen / Oldentrup</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-blue-700">Bielefeld Süd</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Brackwede / Quelle</li>
                  <li>• Sennestadt / Senne</li>
                  <li>• Ummeln / Hoberge</li>
                  <li>• Gadderbaum</li>
                  <li>• Bethel / Gellershagen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Spezialreinigungen für besondere Anforderungen
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Baureinigung nach TRGS 519</h3>
              <p className="text-gray-700 mb-4">
                Nach Sanierungsarbeiten mit Schadstoffen wie Asbest führen wir fachgerechte Reinigungen gemäß TRGS 519 durch. Unsere Mitarbeiter sind speziell geschult und verfügen über die notwendigen Sachkundenachweise. Die Reinigung erfolgt mit HEPA-gefilterten Industriesaugern und unter Einhaltung aller Sicherheitsvorschriften.
              </p>
              <p className="text-gray-700">
                Besonders in den älteren Gebäuden im Bielefelder Westen und in den Industriegebieten ist diese Art der Spezialreinigung oft erforderlich. Wir dokumentieren alle Arbeitsschritte und stellen Ihnen die notwendigen Nachweise für Behörden und Versicherungen aus.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-700">Ökologische Reinigung</h3>
              <p className="text-gray-700 mb-4">
                Nachhaltigkeit ist uns wichtig! Wir verwenden bevorzugt umweltfreundliche Reinigungsmittel und achten auf einen sparsamen Ressourceneinsatz. Besonders in sensiblen Bereichen wie Kindergärten, Schulen oder Arztpraxen setzen wir auf biologisch abbaubare Produkte.
              </p>
              <p className="text-gray-700">
                Unser Fuhrpark wird sukzessive auf Elektrofahrzeuge umgestellt. Als Bielefelder Unternehmen fühlen wir uns der Umwelt in OstWestfalen-Lippe besonders verpflichtet. Fragen Sie nach unserem Green-Clean-Konzept!
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-700">24/7 Notfallreinigung</h3>
              <p className="text-gray-700 mb-4">
                Bei Notfällen wie Wasserschäden, Brandschäden oder anderen unvorhergesehenen Ereignissen sind wir rund um die Uhr für Sie erreichbar. Unser Notdienst ist innerhalb von 2 Stunden in ganz Bielefeld und Umgebung vor Ort.
              </p>
              <p className="text-gray-700">
                Wir arbeiten eng mit Versicherungen zusammen und unterstützen Sie bei der Schadensabwicklung. Von der Sofortmaßnahme bis zur kompletten Wiederherstellung - wir begleiten Sie durch die schwierige Zeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Zertifizierungen und Qualifikationen
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "ISO 9001 Zertifiziert",
              "TRGS 519 Sachkunde",
              "Gebäudereinigerinnung",
              "Umweltmanagement ISO 14001"
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-3xl mb-3">🏆</div>
                <p className="font-semibold text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Häufige Fragen zur Reinigung in Bielefeld
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Wie schnell können Sie mit der Reinigung beginnen?",
                answer: "In dringenden Fällen können wir noch am selben Tag beginnen. Normalerweise vereinbaren wir einen Termin innerhalb von 2-3 Werktagen. Bei Notfällen ist unser 24/7-Service sofort verfügbar."
              },
              {
                question: "Reinigen Sie auch am Wochenende?",
                answer: "Ja, wir bieten auch Wochenend- und Feiertagsreinigungen an. Das ist besonders für Geschäftskunden interessant, die ihre Räume unter der Woche nutzen müssen."
              },
              {
                question: "Was kostet eine Baureinigung in Bielefeld?",
                answer: "Die Kosten hängen von der Größe und dem Verschmutzungsgrad ab. Eine Baureinigung startet bei etwa 3-5 Euro pro Quadratmeter. Gerne erstellen wir Ihnen ein individuelles Angebot."
              },
              {
                question: "Sind Sie versichert?",
                answer: "Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung bis 5 Millionen Euro. Alle unsere Mitarbeiter sind unfallversichert und geschult."
              },
              {
                question: "Bieten Sie auch regelmäßige Reinigung an?",
                answer: "Natürlich! Wir bieten flexible Reinigungsintervalle von täglich bis monatlich. Viele Bielefelder Unternehmen nutzen unsere Unterhaltsreinigung."
              },
              {
                question: "Können Sie auch Graffiti entfernen?",
                answer: "Ja, wir sind Spezialisten für Graffitientfernung. Mit schonenden Verfahren entfernen wir Graffiti von allen Oberflächen ohne Beschädigung des Untergrunds."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2 text-blue-700">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Warum RückbauPRO für Reinigung in Bielefeld?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏢", title: "Lokale Expertise", description: "15+ Jahre Erfahrung in Bielefeld und OWL" },
              { icon: "⚡", title: "Schneller Service", description: "Kurze Reaktionszeiten, flexibel Termine" },
              { icon: "💰", title: "Faire Preise", description: "Transparente Kalkulation, keine versteckten Kosten" },
              { icon: "✨", title: "Beste Qualität", description: "Geschultes Personal, moderne Technik" },
              { icon: "🌱", title: "Umweltfreundlich", description: "Ökologische Reinigungsmittel" },
              { icon: "📋", title: "Alles aus einer Hand", description: "Von Bau- bis Unterhaltsreinigung" },
              { icon: "🔒", title: "Versichert", description: "Umfassender Versicherungsschutz" },
              { icon: "📞", title: "24/7 Erreichbar", description: "Notdienst rund um die Uhr" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Reinigungsservice Bielefeld - Mehr als nur sauber
            </h2>
            <p className="text-gray-700 mb-6">
              Die professionelle Reinigung von Gebäuden und Industrieanlagen erfordert mehr als nur Putzmittel und Lappen. Als erfahrenes Reinigungsunternehmen in Bielefeld wissen wir, worauf es ankommt: Fachkenntnis, die richtigen Geräte und ein Auge fürs Detail. Ob im Teutoburger Wald Campus der Universität oder in den Gewerbeparks an der Eckendorfer Straße - wir sorgen für hygienische Sauberkeit.
            </p>
            <p className="text-gray-700 mb-6">
              Die Bielefelder Wirtschaft ist vielfältig - vom Maschinenbau über die Nahrungsmittelindustrie bis zur IT-Branche. Jede Branche hat spezielle Anforderungen an die Reinigung. In Produktionshallen müssen oft ölige Rückstände entfernt werden, in Büros geht es um repräsentative Sauberkeit, und in medizinischen Einrichtungen steht die Hygiene im Vordergrund. Wir kennen diese Unterschiede und passen unsere Reinigungsmethoden entsprechend an.
            </p>
            <p className="text-gray-700 mb-6">
              Ein besonderer Schwerpunkt unserer Arbeit liegt auf der Baureinigung. Gerade in Bielefeld wird viel gebaut und saniert - neue Wohnquartiere entstehen, alte Industriegebäude werden umgenutzt, und die Universität erweitert kontinuierlich ihre Gebäude. Nach Bauarbeiten ist eine gründliche Reinigung unerlässlich. Baustaub dringt in jede Ritze, Mörtelreste kleben an Fenstern, und überall finden sich Reste von Baumaterialien. Unsere Baureinigungsteams sind darauf spezialisiert, aus einer Baustelle einen bezugsfertigen Raum zu machen.
            </p>
            <p className="text-gray-700 mb-6">
              Die Endreinigung ist der letzte Schritt vor der Übergabe einer Immobilie. Egal ob Mietwohnung, Eigenheim oder Gewerbeobjekt - die Endreinigung muss perfekt sein. Fenster müssen streifenfrei glänzen, Böden makellos sein, und alle Oberflächen hygienisch sauber. Besonders bei Wohnungsübergaben in beliebten Bielefelder Vierteln wie dem Musikerviertel oder der Paulusstraße ist eine professionelle Endreinigung Gold wert. Sie spart Zeit, Nerven und sichert die volle Rückzahlung der Kaution.
            </p>
            <p className="text-gray-700 mb-6">
              Industriereinigung ist eine besondere Herausforderung. In Produktionshallen, Werkstätten und Lagern sammeln sich spezielle Verschmutzungen an. Maschinenöl, Metallspäne, Chemikalienreste - all das erfordert spezielle Reinigungstechniken und -mittel. Wir verfügen über Hochdruckreiniger, Industriesauger und Spezialreiniger für jeden Einsatzzweck. Auch die Reinigung von Produktionsmaschinen gehört zu unserem Leistungsspektrum. Dabei arbeiten wir eng mit den Technikern der Unternehmen zusammen, um Beschädigungen zu vermeiden und Stillstandszeiten zu minimieren.
            </p>
            <p className="text-gray-700 mb-6">
              Die Glasreinigung ist unser Aushängeschild - im wahrsten Sinne des Wortes. Saubere Fenster und Glasfassaden prägen den ersten Eindruck eines Gebäudes. Mit professioneller Ausrüstung und geschultem Personal reinigen wir Glasflächen aller Art. Von der Schaufensterscheibe im Einzelhandel bis zur mehrgeschossigen Glasfassade - wir haben die richtige Technik. Auch schwer erreichbare Bereiche sind für uns kein Problem. Mit Teleskopstangen, Hebebühnen oder auch Seilzugangstechnik erreichen wir jede Glasfläche.
            </p>
            <p className="text-gray-700 mb-6">
              Ein oft unterschätzter Bereich ist die Unterhaltsreinigung. Regelmäßige Reinigung erhält nicht nur die Sauberkeit, sondern auch den Wert einer Immobilie. Schmutz, der sich festsetzt, kann Oberflächen dauerhaft beschädigen. Deshalb empfehlen wir unseren Kunden individuelle Reinigungsintervalle. Büros werden oft täglich gereinigt, Treppenhäuser wöchentlich, und Tiefgaragen monatlich. Wir erstellen für jedes Objekt einen maßgeschneiderten Reinigungsplan.
            </p>
            <p className="text-gray-700 mb-6">
              Nachhaltigkeit wird auch in der Reinigungsbranche immer wichtiger. Wir setzen verstärkt auf umweltfreundliche Reinigungsmittel und ressourcenschonende Verfahren. Mikrofasertechnologie reduziert den Chemikalieneinsatz, und dosierbare Reinigungssysteme vermeiden Verschwendung. Auch unsere Kunden in Bielefeld legen zunehmend Wert auf ökologische Reinigung - besonders Unternehmen, die sich der Nachhaltigkeit verpflichtet haben.
            </p>
            <p className="text-gray-700 mb-6">
              Die Digitalisierung macht auch vor der Reinigungsbranche nicht halt. Wir nutzen digitale Systeme zur Auftragsplanung, Qualitätskontrolle und Kommunikation. Unsere Kunden können Reinigungsaufträge online beauftragen, den Status verfolgen und Feedback geben. Auch die Dokumentation der Reinigungsleistungen erfolgt digital - mit Fotos und Berichten, die direkt vom Einsatzort übermittelt werden.
            </p>
            <p className="text-gray-700 mb-6">
              Als lokales Unternehmen sind wir fest in Bielefeld verwurzelt. Wir kennen die Stadt, die Menschen und die Unternehmen. Diese lokale Verbundenheit ist uns wichtig. Wir unterstützen lokale Vereine, bilden aus und schaffen Arbeitsplätze in der Region. Wenn Sie einen Reinigungsservice suchen, der nicht nur sauber macht, sondern auch zur lokalen Wirtschaft beiträgt, sind Sie bei uns richtig.
            </p>
            <p className="text-gray-700 mb-6">
              Die Qualität unserer Arbeit zeigt sich in zufriedenen Kunden. Viele Bielefelder Unternehmen und Privatpersonen vertrauen seit Jahren auf unsere Dienste. Von der kleinen Arztpraxis in Schildesche bis zum großen Industriebetrieb in Brackwede - unsere Referenzliste ist lang und vielfältig. Diese Erfahrung aus hunderten von Reinigungsprojekten kommt jedem neuen Kunden zugute.
            </p>
            <p className="text-gray-700 mb-6">
              Flexibilität ist in der heutigen Zeit essentiell. Reinigungszeiten müssen sich an Betriebsabläufe anpassen, kurzfristige Änderungen sind oft nötig, und manchmal muss es einfach schnell gehen. Wir sind darauf eingestellt. Unsere Einsatzplanung ist flexibel, unser Personal geschult, und unsere Ausrüstung immer einsatzbereit. So können wir auch auf unvorhergesehene Situationen reagieren.
            </p>
            <p className="text-gray-700 mb-6">
              Abschließend noch ein Wort zur Preisgstaltung: Gute Reinigung hat ihren Preis, aber sie muss nicht teuer sein. Durch effiziente Arbeitsabläufe, moderne Technik und erfahrenes Personal können wir qualitativ hochwertige Reinigung zu fairen Preisen anbieten. Wir kalkulieren transparent und ohne versteckte Kosten. Bei uns wissen Sie immer, wofür Sie bezahlen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Jetzt Reinigungsangebot für Bielefeld anfragen!
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir beraten Sie gerne und finden die optimale Reinigungslösung für Ihre Anforderungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Kostenloses Angebot anfordern
            </Link>
            <Link href="tel:+4952136365998" className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors">
              ☎ Jetzt anrufen: 0521 36365998
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form with Background */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="Kontakt Hintergrund"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Kostenloses Reinigungsangebot für Bielefeld
          </h2>
          <p className="text-center text-blue-100 mb-8 text-lg">
            Professionelle Reinigung in ganz Bielefeld und Umgebung
          </p>
          <SimpleContactForm />
        </div>
      </section>

      <FooterWithMarquee />
    </div>
  );
}