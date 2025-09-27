'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'

export default function FreimessungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                VDI 3492 Zertifiziert
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Freimessung Bielefeld - Sicherheit nach Asbestsanierung
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Heute Morgen haben wir wieder grünes Licht gegeben - die Grundschule in Heepen ist
              nach der Asbestsanierung wieder sicher. Wenn Sie in Bielefeld eine professionelle
              Freimessung brauchen, sind wir Ihr akkreditierter Partner mit modernster Messtechnik.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: 'DAkkS', label: 'Akkreditiert' },
              { number: '10.000+', label: 'Messungen' },
              { number: '<0,01', label: 'Fasern/cm³' },
              { number: '24h', label: 'Express-Service' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Messleistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Akkreditierte Messverfahren nach höchsten Standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Raumluftmessung',
                description: 'Präzise Faserzahlbestimmung nach VDI 3492 mit modernsten REM-Verfahren.'
              },
              {
                title: 'Materialanalyse',
                description: 'Schnelle Laboruntersuchung verdächtiger Materialien auf Asbestgehalt.'
              },
              {
                title: 'KMF-Messung',
                description: 'Nachweis künstlicher Mineralfasern nach TRGS 521 und BIA 7487.'
              },
              {
                title: 'Kontrollmessung',
                description: 'Begleitende Messungen während laufender Sanierungsarbeiten.'
              },
              {
                title: 'Erfolgskontrole',
                description: 'Abschließende Freigabemessung nach Sanierungsende.'
              },
              {
                title: 'Gutachten',
                description: 'Rechtssichere Dokumentation für Behörden und Versicherungen.'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-8 h-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:border-sky-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="h-2 bg-gradient-to-r from-sky-400/50 to-sky-600/50 rounded-full mb-6 group-hover:from-sky-300/70 group-hover:to-sky-500/70 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Messverfahren</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nach VDI 3492 - präzise, dokumentiert und rechtssicher
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Probenahme', desc: 'Definierte Luftvolumina nach Rasterverfahren' },
              { step: '02', title: 'Präparation', desc: 'Goldbedampfung für REM-Analyse' },
              { step: '03', title: 'Analyse', desc: 'Faserzählung im Elektronenmikroskop' },
              { step: '04', title: 'Bewertung', desc: 'Freigabe bei <500 Fasern/m³' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 h-full hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/60 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <MobileOptimizedContent>
        <MobileSection padding="large" className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-6 lg:p-8 xl:p-12 hover:shadow-2xl hover:shadow-sky-400/10 transition-all duration-300">

            <div className="prose prose-lg max-w-none text-white/90">
              <MobileParagraph className="mb-6 lg:mb-8">
                Wir sind die Messprofis, denen Bielefeld vertraut. Vom Gesundheitsamt bis zur
                Bezirksregierung - alle verlassen sich auf unsere Messungen. Freimessung ist
                kein Hexenwerk, aber es muss absolut präzise sein. Eine falsche Messung kann
                Menschen gefährden oder unnötige Panik auslösen. Jede Faser zählt, jeder Wert
                muss stimmen. In Schulen und Kindergärten sind wir besonders vorsichtig, in
                Industriegebäuden können wir zügiger arbeiten.
              </MobileParagraph>

              <CollapsibleTextSection
                title="Raumluftmessung"
                content={
                  <>
                    <MobileParagraph>
                      Die Raumluftmessung nach VDI 3492 ist der Goldstandard der Freimessung. Letzte
                      Woche waren wir in der Realschule Jöllenbeck - nach der Asbestsanierung mussten
                      alle Klassenzimmer freigmessen werden. Mit unseren Pumpen saugen wir definierte
                      Luftmengen durch spezielle Filter. 8000 Liter Luft pro Messpunkt, das dauert
                      seine Zeit, aber nur so kriegt man verlässliche Ergebnisse.
                    </MobileParagraph>
                    <MobileParagraph>
                      Die Filter kommen dann ins Labor zur REM-Analyse. Jede einzelne Faser wird
                      gezählt und vermessen. Asbest hat eine charakteristische Struktur - lang, dünn
                      und spröde. Unter dem Elektronenmikroskop sieht man das genau. Der Grenzwert
                      liegt bei 500 Fasern pro Kubikmeter. Unsere Messungen liegen meist weit darunter -
                      wenn ordentlich saniert wurde, finden wir oft gar keine Fasern mehr. Das ist
                      dann die beste Nachricht für unsere Kunden!
                    </MobileParagraph>
                  </>
                }
              />

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Materialanalyse
              </h2>
              <p className="mb-6">
                Bevor überhaupt saniert wird, muss erstmal analysiert werden. Ist das überhaupt Asbest?
                Die Leute bringen uns alles Mögliche - Dachpappe, Bodenbeläge, Spachtelmasse. Neulich
                kam einer mit ner alten Blumenkiste aus dem Keller. Tatsächlich - Asbestzement! Mit
                unserem Polarisationsmikroskop sehen wir sofort, obs Asbest ist. Die typischen Fasern
                erkennt man auf den ersten Blick.
              </p>
              <p className="mb-6">
                Die Materialanalyse in Bielefeld machen wir meist innerhalb von 24 Stunden. Express
                gehts sogar in 2 Stunden - wichtig bei Baustopps oder Notfällen. Das Labor ist direkt
                hier in Bielefeld, keine langen Transportwege. Die Proben werden nach VDI 3866 aufbereitet
                und untersucht. Am Ende gibts ein rechtssicheres Protokoll - wichtig für Bauherren,
                Versicherungen und Behörden. Ohne unsere Analyse darf kein Handwerker ran!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                KMF-Messung
              </h2>
              <p className="mb-6">
                KMF, also künstliche Mineralfasern, sind fast genauso problematisch wie Asbest. Die
                alte Glaswolle und Steinwolle aus den 70ern und 80ern - das Zeug ist krebserregend!
                Bei Miele in Gütersloh haben wir letztens die komplette Werkshalle nach KMF-Sanierung
                freigmessen. 50 Messpunkte, alles nach TRGS 521. Die Fasern sind anders als Asbest,
                aber genauso gefährlich.
              </p>
              <p className="mb-6">
                Die KMF-Messung läuft ähnlich wie bei Asbest, aber mit anderen Grenzwerten. 10.000
                Fasern pro Kubikmeter sind erlaubt - klingt viel, ist aber streng. Die Fasern müssen
                bestimmte Kriterien erfüllen - Länge, Durchmesser, Verhältnis. Wir zählen alles
                einzeln unterm Mikroskop. Nach der Sanierung der alten Sparkassen-Filiale in Brackwede
                haben wir nur noch 200 Fasern gefunden - weit unter dem Grenzwert. Die Mitarbeiter
                konnten beruhigt wieder rein.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kontrollmessung
              </h2>
              <p className="mb-6">
                Während der Sanierung messen wir kontinuierlich - die sogenannte Kontrollmessung.
                Besonders wichtig bei Arbeiten in bewohnten Gebäuden. Im Seniorenzentrum Bethel
                mussten wir während der gesamten Asbestsanierung messen. Jeden Tag neue Proben,
                um sicherzustellen, dass keine Fasern in die bewohnten Bereiche gelangen. Die
                Bewohner sollten ja nicht umziehen müssen.
              </p>
              <p className="mb-6">
                Die Kontrollmessungen machen wir mit mobilen Geräten direkt vor Ort. Schnelltests
                geben erste Hinweise, die genaue Analyse folgt im Labor. Bei kritischen Werten
                stoppen wir sofort die Arbeiten. Sicherheit geht vor! Die Sanierungsfirmen in
                Bielefeld kennen uns und vertrauen unserem Urteil. Wenn wir sagen "Stopp", dann
                wird gestoppt. Und wenn wir grünes Licht geben, gehts weiter.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Erfolgskontrole
              </h2>
              <p className="mb-6">
                Die Erfolgskontrolle ist die wichtigste Messung - die finale Freigabe nach der
                Sanierung. Da muss alles stimmen! Wir messen nach einem festgelegten Raster, mindestens
                4 Messpunkte pro Raum. Die Klimaanlage läuft, um realistische Bedingungen zu schaffen.
                Beim neuen Stadthaus haben wir 200 Räume freigmessen - drei Tage non-stop, aber am
                Ende waren alle Werte im grünen Bereich.
              </p>
              <p className="mb-6">
                Die Erfolgskontrole muss besonders gründlich dokumentiert werden. Jeder Messpunkt
                wird fotografiert, jeder Wert protokolliert. Das Gesundheitsamt Bielefeld prüft
                unsere Protokolle genau. Ein Fehler, und die ganze Sanierung war umsonst. Aber in
                20 Jahren hatten wir noch nie eine Beanstandung. Unsere Messungen sind wasserdicht -
                darauf können sich die Bielefelder verlassen!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Gutachten
              </h2>
              <p className="mb-6">
                Ein professionelles Gutachten ist Gold wert - für Käufer, Verkäufer und Versicherungen.
                Wir erstellen komplette Schadstoffgutachten für Gebäude in ganz Bielefeld. Von der
                kleinen Eigentumswohnung bis zum Industriekomplex. Jedes Material wird untersucht,
                jeder Raum bewertet. Am Ende steht ein dickes Dokument mit allen Messwerten, Fotos
                und Handlungsempfehlungen.
              </p>
              <p className="mb-6">
                Unser Gutachten hat schon manchen Immobiliendeal in Bielefeld gerettet. Oder auch
                verhindert - wenn zu viel Asbest drin ist, lohnt sich der Kauf oft nicht. Die
                Volksbank Bielefeld verlangt bei älteren Gebäuden immer unser Gutachten, bevor sie
                Kredite vergibt. Wir sind neutral und unabhängig - wir sagen, was Sache ist. Keine
                Beschönigung, keine Panikmache, nur Fakten.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Arbeitsplatzmessung
              </h2>
              <p className="mb-6">
                Arbeitsplatzmessungen sind Pflicht in vielen Betrieben. Überall wo mit gefährlichen
                Stoffen gearbeitet wird, muss regelmäßig gemessen werden. Bei Schüco messen wir
                quartalsweise die Produktionshallen. Metallstaub, Lösemittel, Fasern - alles wird
                überwacht. Die Berufsgenossenschaft verlangt lückenlose Dokumentation.
              </p>
              <p className="mb-6">
                In Bielefeld gibts viele Betriebe, die regelmäßige Messungen brauchen. Druckereien,
                Lackierereien, Metallverarbeitung - überall lauern Gefahren für die Mitarbeiter.
                Wir kommen mit unserem mobilen Labor direkt in den Betrieb. Die Messungen laufen
                während der normalen Arbeitszeit, um realistische Werte zu bekommen. Die Ergebnisse
                besprechen wir direkt mit dem Betriebsrat und der Geschäftsführung. Gemeinsam
                finden wir Lösungen für besseren Arbeitsschutz.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Schimmelpilzmessung
              </h2>
              <p className="mb-6">
                Schimmel ist ein großes Problem in Bielefeld - die feuchten Winter sorgen für
                ideale Bedingungen. Wir messen nicht nur die Sporen in der Luft, sondern auch
                die Mykotoxine - die giftigen Stoffwechselprodukte der Pilze. In der Siedlung
                am Wellensiek haben wir mal einen kompletten Block untersucht. Jede zweite Wohnung
                hatte Schimmelprobleme!
              </p>
              <p className="mb-6">
                Die Schimmelmessung machen wir mit verschiedenen Verfahren. Luftkeimsammlung,
                Abklatschproben, Materialproben - je nach Situation. Die Sporen werden im Labor
                kultiviert und bestimmt. Manche Arten sind harmlos, andere hochgiftig. Aspergillus
                niger zum Beispiel - der schwarze Schimmel - der ist richtig gefährlich. Nach unserer
                Messung wissen die Leute, was zu tun ist. Oft reicht besseres Lüften, manchmal muss
                komplett saniert werden.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Raumklimamessung
              </h2>
              <p className="mb-6">
                Das Raumklima hat enormen Einfluss auf Gesundheit und Wohlbefinden. Wir messen
                nicht nur Schadstoffe, sondern auch Temperatur, Luftfeuchtigkeit, CO2-Gehalt.
                In den Bielefelder Schulen ist das ein Dauerthema. Zu wenig gelüftet, zu viel CO2,
                die Schüler werden müde und unkonzentriert. Nach unseren Messungen werden oft
                Lüftungskonzepte geändert oder Lüftungsanlagen eingebaut.
              </p>
              <p className="mb-6">
                Moderne Gebäude sind oft zu dicht - keine natürliche Luftzirkulation mehr. Im
                neuen Bürogebäude der Stadtwerke haben wir kritische CO2-Werte gemessen. 2000 ppm
                in den Konferenzräumen! Kein Wunder, dass die Meetings einschläfernd waren. Nach
                Installation einer kontrollierten Lüftung waren die Werte wieder im grünen Bereich.
                Die Mitarbeiter sind wacher, produktiver und seltener krank. Gutes Raumklima zahlt
                sich aus!
              </p>

              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Ihr akkreditierter Partner für Freimessungen in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Mit DAkkS-Akkreditierung und modernster Messtechnik sind wir Ihr zuverlässiger
                  Partner für alle Schadstoffmessungen. Von der Asbestanalyse bis zur finalen
                  Freigabe - alles aus einer Hand.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ DAkkS akkreditiertes Prüflabor</li>
                  <li>✓ VDI 3492 & TRGS 519 konform</li>
                  <li>✓ 24h Express-Service möglich</li>
                  <li>✓ Rechtssichere Dokumentation</li>
                  <li>✓ Behördlich anerkannt</li>
                </ul>
              </div>
            </div>
          </div>
        </MobileSection>
      </MobileOptimizedContent>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Freimessungen in Ihrer Nähe</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Schnell vor Ort in ganz Bielefeld und Umgebung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld Mitte',
              'Brackwede',
              'Schildesche',
              'Jöllenbeck',
              'Heepen',
              'Stieghorst',
              'Sennestadt',
              'Bethel',
              'Gadderbaum'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/20 to-sky-900/10 backdrop-blur-xl border border-sky-400/30 rounded-xl p-4 hover:bg-gradient-to-br hover:from-slate-700/30 hover:to-sky-800/20 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300">
                <span className="text-white/90">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
              Häufige Fragen zur Freimessung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wann ist eine Freimessung nötig?',
                a: 'Nach jeder Asbestsanierung und vor Wiedernutzung der Räume. Gesetzlich vorgeschrieben nach TRGS 519.'
              },
              {
                q: 'Wie lange dauert eine Freimessung?',
                a: 'Probenahme 2-4 Stunden, Laboranalyse 1-2 Tage. Express-Service in 24 Stunden möglich.'
              },
              {
                q: 'Was kostet eine Freimessung?',
                a: 'Je nach Anzahl der Messpunkte 150-300€ pro Messung. Komplette Gebäude individuell.'
              },
              {
                q: 'Wer darf Freimessungen durchführen?',
                a: 'Nur akkreditierte Labore mit geschultem Personal. Wir sind DAkkS-akkreditiert.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
              Freimessung in Bielefeld - Jetzt beauftragen!
            </h2>
            <p className="text-white/80 mb-8">
              DAkkS akkreditiert ✓ VDI 3492 konform ✓ 24h Service ✓ Rechtssicher
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49 174 8083023"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-500 hover:to-sky-600 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/30 transition-all duration-300"
              >
                📞 +49 174 8083023
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 text-white font-bold rounded-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300"
              >
                Messauftrag anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Background Image */}
      <section className="relative">
        <SimpleContactForm purpose="quote" />
      </section>

      {/* Footer */>
      <FooterWithMarquee />
    </main>
  );
}