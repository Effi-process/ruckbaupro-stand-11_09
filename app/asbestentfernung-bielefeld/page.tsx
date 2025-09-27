'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AsbestentfernungBielefeldPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie erkenn ich Asbest in meinem Haus in Bielefeld?",
      answer: "Asbest wurde vor allem in Häusern vor 1993 verbaut - besonders häufig in den alten Industrievierteln von Brackwede und Heepen. Typische Asbestmaterialen sind wellige Eternitdächer, alte Fassadenplatten, Vinylbodenbeläge mit schwarzem Kleber und alte Rohrisolierungen. Wenn Ihr Haus in Bielefeld vor 1993 gebaut wurde, sollten Sie bei Renovierungsarbeiten immer erst eine professionelle Asbestprüfung durchführen lassen. Wir bieten schnelle Materialanalysen direkt vor Ort an."
    },
    {
      question: "Was kostet eine Asbestsanierung in Bielefeld?",
      answer: "Die Kosten hängen von vielen Faktoren ab - Art des Materials, Menge, Zugänglichkeit und ob es fest gebunden oder schwach gebunden ist. Eine kleine Asbestsanierung wie die Entfernung von 50m² Welleternit kostet ab 2.500€. Größere Projekte wie komplette Dachsanierungen beginnen bei 8.000€. Wir erstellen Ihnen gerne ein kostenloses Angebot nach einer Vor-Ort-Besichtigung in ganz Bielefeld und Umgebung."
    },
    {
      question: "Wie lange dauert eine Asbestentfernung?",
      answer: "Kleinere Projekte wie Bodenbeläge oder einzelne Platten können wir meist innerhalb von 1-2 Tagen erledigen. Größere Sanierungen wie komplette Dächer oder Fassaden dauern 3-7 Tage. Die genaue Dauer hängt von der Größe, dem Asbesttyp und den Sicherheitsanforderungen ab. Nach TRGS 519 müssen wir bestimmte Sicherheitsprotokolle einhalten, die Zeit brauchen aber Ihre Sicherheit garantieren."
    },
    {
      question: "Brauche ich eine Genehmigung für die Asbestentsorgung in Bielefeld?",
      answer: "Ja, in Bielefeld müssen alle Asbestarbeiten beim Amt für Umwelt angemeldet werden. Wir übernehmen die komplette Anmeldung für Sie inklusive aller erforderlichen Dokumente und Nachweise. Die Anmeldung muss mindestens 7 Tage vor Arbeitsbeginn erfolgen. Als zertifizierter Fachbetrieb nach TRGS 519 kennen wir alle lokalen Vorschriften und sorgen für eine reibungslose Genehmigung."
    },
    {
      question: "Muss ich während der Asbestsanierung ausziehen?",
      answer: "Das kommt auf den Umfang der Arbeiten an. Bei Außenarbeiten wie Dach- oder Fassadensanierungen können Sie meist wohnen bleiben. Bei Innenraumarbeiten oder wenn schwach gebundener Asbest entfernt wird, empfehlen wir für die Dauer der Arbeiten alternative Unterkünfte. Wir richten abgeschottete Arbeitsbereiche mit Unterdruck ein, um eine Kontamination anderer Bereiche zu verhindern. Nach Abschluss führen wir Freimessungen durch, die die Sicherheit bestätigen."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Asbestentfernung{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Bielefeld
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professionelle Asbestsanierung nach TRGS 519 - Schnell, sicher und zertifiziert in ganz Ostwestfalen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Kostenlose Beratung
            </Link>
            <a href="tel:+4952199998480" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              Jetzt anrufen →
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1.500+</div>
              <div className="text-gray-400">Sanierte Objekte</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-400">Notdienst</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-400">Zertifiziert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-400">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Unsere Asbestentfernungs-Leistungen in Bielefeld
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary">Asbestdachsanierung</h3>
              <p className="text-gray-300">
                Professionelle Entfernung von Welleternit und asbesthaltigen Dacheindeckungen. Besonders häufig in den Stadtteilen Schildesche und Gadderbaum. Inklusive fachgerechter Entsorgung und neuer Eindeckung.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary">Asbestfassadensanierung</h3>
              <p className="text-gray-300">
                Sichere Demontage asbesthaltiger Fassadenverkleidungen und Eternitplatten. Häufig bei Industriegebäuden in Brackwede und Sennestadt. Mit staubdichter Einhausung und Luftreinigung.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary">Asbestbodenentfernung</h3>
              <p className="text-gray-300">
                Entfernung von Floor-Flex-Platten und asbesthaltigen Klebern. Besonders in Altbauten rund um den Kesselbrink. Staubfreie Arbeitsweise mit speziellen Absaugsystemen.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary">Rohrisolierung entfernen</h3>
              <p className="text-gray-300">
                Sanierung asbesthaltiger Rohrleitungsisolierungen in Heizungskellern. Viele Altbauten in der Bielefelder Altstadt betroffen. Komplette Entsorgung und Neuisolierung.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary">Asbestanalyse & Gutachten</h3>
              <p className="text-gray-300">
                Schnelle Materialproben und Laboranalyse binnen 24 Stunden. Wichtig vor jeder Renovierung in Bielefeld-Mitte. Rechtssichere Dokumentation für Behörden.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-primary">Notfall-Asbestsanierung</h3>
              <p className="text-gray-300">
                24/7 Notdienst bei Asbestfunden oder Beschädigungen. Sofortige Sicherung und Sanierung. Schnelle Hilfe in ganz Bielefeld und Umgebung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Unser Ablauf der Asbestsanierung
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kostenlose Erstberatung & Materialprobe</h3>
                <p className="text-gray-300">
                  Wir kommen zu Ihnen nach Bielefeld und nehmen professionelle Materialproben. Die Laboranalyse dauert nur 24 Stunden. Bei positivem Befund erstellen wir sofort ein detailliertes Sanierungskonzept.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Behördenanmeldung & Genehmigung</h3>
                <p className="text-gray-300">
                  Wir übernehmen die komplette Anmeldung beim Umweltamt Bielefeld. Alle erforderlichen Unterlagen nach TRGS 519 werden von uns vorbereitet und eingereicht.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professionelle Schutzmaßnahmen</h3>
                <p className="text-gray-300">
                  Einrichtung abgeschotteter Arbeitsbereiche mit Unterdruck und Schleusen. Unsere Mitarbeiter tragen spezielle Schutzausrüstung. Kontinuierliche Luftüberwachung während der Arbeiten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fachgerechte Asbestentfernung</h3>
                <p className="text-gray-300">
                  Sorgfältige Demontage unter Einhaltung aller Sicherheitsvorschriften. Staubfreie Arbeitsweise mit Spezialwerkzeugen. Doppelte Verpackung in zugelassene Big-Bags.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entsorgung & Freimessung</h3>
                <p className="text-gray-300">
                  Transport zu zertifizierten Deponien mit allen erforderlichen Begleitpapieren. Abschließende Freimessung und Dokumentation für Ihre Unterlagen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Professionelle Asbestentfernung in Bielefeld - Ihr zertifizierter Partner</h2>

            <p className="text-gray-300 mb-6">
              Letzten Winter haben wir allein in Brackwede über 30 Asbestdächer saniert - viele Hausbesitzer wussten garnicht, dass ihr Welleternit asbesthaltig war. In Bielefeld stehen noch tausende Gebäude mit Asbest, besonders in den Industriegebieten und älteren Wohnvierteln. Als TRGS 519 zertifizierter Fachbetrieb sorgen wir für sichere und gesetzeskonforme Asbestentfernung in ganz Ostwestfalen-Lippe.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Asbestdachsanierung Bielefeld</h3>
            <p className="text-gray-300 mb-6">
              Die meisten Eternitdächer in Bielefeld wurden zwischen 1960 und 1990 verbaut - fast alle enthalten Asbest. Besonders betroffen sind die Stadtteile Heepen, Schildesche und Sennestadt. Wir entfernen Ihre alte Asbesteindeckung professionel und montieren auf Wunsch direkt eine neue Eindeckung. Unsere Spezialisten kennen die lokalen Bauvorschriften und arbeiten eng mit dem Bauamt Bielefeld zusammen. Die Entsorgung erfolgt über die zugelassene Deponie in Bielefeld-Herford.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Asbestfassadensanierung</h3>
            <p className="text-gray-300 mb-6">
              Viele Gewerbegebäude entlang der Eckendorfer Straße und im Industriegebiet Oldentrup haben noch asbesthaltige Fassadenverkleidungen. Diese Eternitplatten müssen bei Sanierungen oder Abriss fachgerecht entfernt werden. Wir errichten staubdichte Einhausungen und nutzen spezielle Absauganlagen, damit keine Fasern in die Umgebung gelangen. Nach der Demontage können wir moderne, energieeffiziente Fassadensysteme montieren.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Asbestbodenbeläge entfernen</h3>
            <p className="text-gray-300 mb-6">
              Floor-Flex-Platten und Cushion-Vinyl-Beläge finden sich noch in vielen Bielefelder Altbauten, besonders rund um den Siegfriedplatz und die Altstadt. Der schwarze Kleber unter diesen Böden enthält oft bis zu 50% Asbest! Wir entfernen diese Beläge staubfrei mit Spezialmaschinen und entsorgen sie ordnungsgemäß. Viele Kunden sind überrascht, wenn wir in ihrem 70er-Jahre Haus in Quelle oder Ummeln asbesthaltige Böden finden.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Asbesthaltige Rohrisolierungen</h3>
            <p className="text-gray-300 mb-6">
              In den Kellern vieler Mehrfamilienhäuser in Bielefeld-Mitte und am Kesselbrink finden sich noch alte Heizungsrohre mit asbesthaltiger Isolierung. Diese sogenannte "Spritzasbest" ist besonders gefährlich, weil sie schwach gebunden ist und leicht Fasern freisetzt. Wir sanieren diese Bereiche unter höchsten Sicherheitsvorkehrungen mit Vollschutzanzügen und Atemschutz. Nach der Sanierung installieren wir moderne, energiesparende Isolierungen.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Asbestentsorgung und Dokumentation</h3>
            <p className="text-gray-300 mb-6">
              Die fachgerechte Entsorgung ist genauso wichtig wie die sichere Demontage. Wir arbeiten mit der Deponie Bielefeld-Herford und haben alle erforderlichen Transportgenehmigungen. Jede Entsorgung wird lückenlos dokumentiert - Sie erhalten Entsorgungsnachweise, Wiegescheine und Freimessungsprotokolle. Diese Dokumente sind wichtig für den Wiederverkauf Ihrer Immobilie oder bei Vermietung. Das Umweltamt Bielefeld kontrolliert regelmäßig, ob alle Vorschriften eingehalten wurden.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Notfall-Asbestsanierung in Bielefeld</h3>
            <p className="text-gray-300 mb-6">
              Manchmal wird Asbest erst während laufender Bauarbeiten entdeckt - dann muss es schnell gehen. Unser 24-Stunden-Notdienst ist immer erreichbar. Wir waren schon bei Wasserschäden in Jöllenbeck, wo die Deckenplatten asbesthaltig waren, oder bei Bränden in Stieghorst, wo asbesthaltige Materialien beschädigt wurden. In solchen Fällen sichern wir sofort den Bereich ab und beginnen mit der Sanierung, um Gesundheitsgefahren zu vermeiden.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Kosten und Förderungen für Asbestsanierung</h3>
            <p className="text-gray-300 mb-6">
              Die Stadt Bielefeld und das Land NRW bieten verschiedene Förderprogramme für energetische Sanierungen, die oft mit Asbestentfernungen kombiniert werden können. Wir helfen Ihnen bei der Beantragung und rechnen direkt mit den Förderstellen ab. Eine typische Dachsanierung mit 150m² Welleternit kostet zwischen 8.000 und 12.000 Euro inklusive Entsorgung. Bei gleichzeitiger Dämmung können Sie bis zu 20% Förderung erhalten. Kleinere Projekte wie die Entfernung einzelner Asbestplatten beginnen schon ab 500 Euro.
            </p>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Asbestentfernung in allen Bielefelder Stadtteilen
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Bielefeld-Mitte",
              "Brackwede",
              "Schildesche",
              "Gadderbaum",
              "Sennestadt",
              "Heepen",
              "Stieghorst",
              "Jöllenbeck",
              "Dornberg",
              "Quelle",
              "Ummeln",
              "Oldentrup"
            ].map((area) => (
              <div key={area} className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Häufige Fragen zur Asbestentfernung
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 border-t border-white/10">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jetzt kostenlose Asbestanalyse anfragen
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schnelle Terminvergabe in ganz Bielefeld - Meist noch diese Woche möglich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary/90 hover:to-primary-dark/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Kostenlose Beratung
            </Link>
            <a href="tel:+4952199998480" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              0521 9999 8480
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}