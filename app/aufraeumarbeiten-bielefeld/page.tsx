'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';

export default function AufraeumarbeitenBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-sky-800/10 to-slate-900/50" />
      </div>
      <FloatingElements />
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl rounded-full mb-6 border border-sky-400/20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <span className="text-sm font-bold text-sky-200 uppercase tracking-wider animate-pulse">
                Professionelle Aufräumarbeiten
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Aufräumarbeiten Bielefeld - Ihr Partner für saubere Lösungen
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Letzte Woche ham wir wieder bei drei Haushalten in Sennestadt ausgeholfen, nachdem die
              Renovierungsarbeiten abgeschlosen waren. Die Leute wussten einfach nicht wohin mit dem ganzen
              Bauschutt und alten Möbeln. Das ist typisch für Aufräumarbeiten in Bielefeld - die meisten
              unterschätzen, wieviel Arbeit das wirklich ist.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Jahre Erfahrung' },
              { number: '3000+', label: 'Aufräumarbeiten' },
              { number: '48h', label: 'Schnellservice' },
              { number: '100%', label: 'Entsorgungsnachweis' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 text-center hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-sky-100/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Aufräum-Services</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Von der kleinen Kellerecke bis zur kompletten Firmenauflösung - wir räumen alles auf.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Haushaltsauflösung',
                description: 'Komplette Räumung von Wohnungen und Häusern mit Wertanrechnung und fachgerechter Entsorgung.'
              },
              {
                title: 'Entrümpelung',
                description: 'Professionelle Entrümpelung von Kellern, Dachböden und Garagen zum Festpreis.'
              },
              {
                title: 'Nachlassräumung',
                description: 'Sensible und respektvolle Räumung von Nachlässen mit Dokumentensicherung.'
              },
              {
                title: 'Messie-Wohnungen',
                description: 'Diskrete und gründliche Räumung auch bei extremen Verschmutzungen.'
              },
              {
                title: 'Gewerbliche Räumung',
                description: 'Büroauflösungen und Geschäftsräumungen mit Datenschutz-konformer Aktenvernichtung.'
              },
              {
                title: 'Express-Service',
                description: 'Notfallräumungen innerhalb von 24-48 Stunden bei Räumungsklagen oder Termindruck.'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-8 h-full hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-400/20 transform hover:-translate-y-2 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-sky-900/30 group-hover:to-slate-800/40">
                  <div className="h-2 bg-gradient-to-r from-sky-400/40 to-sky-300/40 rounded-full mb-6 group-hover:from-sky-400/60 group-hover:to-sky-300/60 transition-all duration-500 group-hover:shadow-md group-hover:shadow-sky-400/30"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4 group-hover:from-white group-hover:to-sky-100 transition-all duration-300">{service.title}</h3>
                  <p className="text-sky-50/80 leading-relaxed group-hover:text-sky-50/90 transition-all duration-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/10 via-slate-900/30 to-sky-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unser Ablauf</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Strukturiert, transparent und zuverlässig - so arbeiten wir
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Kostenlose Besichtigung', desc: 'Vor-Ort-Termin zur Einschätzung' },
              { step: '02', title: 'Festpreisangebot', desc: 'Transparente Kosten ohne Überraschungen' },
              { step: '03', title: 'Terminvereinbarung', desc: 'Flexibel nach Ihrem Zeitplan' },
              { step: '04', title: 'Durchführung', desc: 'Professionelle Räumung und Entsorgung' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 h-full hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white mb-4 animate-pulse">{item.step}</div>
                  <h3 className="text-xl font-bold text-sky-100 mb-2">{item.title}</h3>
                  <p className="text-sky-100/70 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-sky-300/60 text-2xl animate-pulse">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-sky-900/30">

            <div className="prose prose-lg max-w-none text-white/90">
              <p className="text-lg leading-relaxed mb-8">
                Als Abrissunternehmen in Bielefeld sehen wir täglich, wie schwer es den Menschen fällt,
                ihre Räume ordentlich aufzuräumen. Ob nach einem Umzug, einer Renovierung oder wenn ein
                Familienangehöriger verstorben ist - plötzlich steht man vor Bergen von Sachen und weiß
                nicht, wo man anfangen sol. Wir kennen jeden Winkel in Bielefeld, von der Altstadt bis
                nach Brackwede, und wissen genau, welche Herausforderungen die verschiedenen Stadtteile
                mit sich bringen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Haushaltsauflösung
              </h2>
              <p className="mb-6">
                Wenn Oma's Wohnung in der Bielefelder Altstadt aufgelöst werden muss, stehen die meisten
                Familien vor einer emotionalen und physischen Mammutaufgabe. 70 Jahre Leben passen nicht
                mal eben in ein paar Kartons. Wir machen das anders - systematisch, respektvoll und vor
                allem gründlich. Erst letzte Woche waren wir in einem alten Fachwerkhaus am Siggi (so
                nennen wir Bielefelder den Siegfriedplatz) und haben eine komplette Haushaltsauflösung
                durchgeführt. Die Familie war überrascht, das wir sogar die alten Fotoalben separat
                sortiert und sicher verwahrt haben.
              </p>
              <p className="mb-6">
                Bei einer Haushaltsauflösung in Bielefeld gibt's einiges zu beachten. Die Entsorgungshöfe
                haben strenge Regeln, was wo abgegeben werden darf. Elektrogeräte müssen zum Recyclinghof
                in Heepen, Sperrmüll wird nur zu bestimmten Terminen abgeholt, und für Sondermüll braucht
                man speziele Genehmigungen. Wir kennen alle Vorschriften und kümmern uns drum - Sie müssen
                sich um nichts sorgen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Entrümpelung
              </h2>
              <p className="mb-6">
                Der Keller ist voll, der Dachboden quillt über und in der Garage passt schon lang kein
                Auto mehr rein? Willkommen im Club! Fast jeder zweite Bielefelder den wir treffen, hat
                das gleiche Problem. Die Entrümpelung ist unser täglich Brot. Gestern waren wir in
                Jöllenbeck bei einer Familie, die seit 30 Jahren "sammelte". Drei LKW-Ladungen später
                war der Keller wieder begehbar und die Garage konnte endlich wieder ihrem eigentlichen
                Zweck dienen.
              </p>
              <p className="mb-6">
                Eine professionelle Entrümpelung in Bielefeld bedeutet mehr als nur Sachen rauszuschmeißen.
                Wir sortieren alles ordentlich - was kann noch gespendet werden, was ist Wertstoff, was
                ist wirklich Müll? Die Bielefelder Tafel freut sich über gut erhaltene Haushaltsgegenstände,
                das Sozialkaufhaus in der Innenstadt nimmt Möbel an, und Metalle bringen wir zum
                Schrotthandel nach Oldentrup. So wird aus Ihrer Entrümpelung auch noch was Gutes für andere.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Gebäudereinigung
              </h2>
              <p className="mb-6">
                Nach jedem Abriss oder jeder Sanierung sieht's aus wie Sau - entschuldigung für den
                Ausdruck, aber anders kann man's nicht sagen. Staub überall, Bauschuttreste in jeder
                Ecke, und die Fenster sieht man vor lauter Dreck nicht mehr durch. Unsere
                Gebäudereinigung in Bielefeld macht aus Baustellen wieder bewohnbare Räume. Mit
                Industriestaubsaugern, speziellen Reinigungsmitteln und viel Erfahrung kriegen wir
                jeden Dreck weg.
              </p>
              <p className="mb-6">
                Besonders in den alten Gebäuden rund um den Kesselbrink oder in den Gründerzeitvillen
                in Gadderbaum ist Fingerspitzengefühl gefragt. Historische Böden, empfindliche Stuck-
                decken oder original Jugendstil-Fliesen vertragen keine aggressive Reinigung. Wir
                wissen genau, welche Mittel wo eingesetzt werden können und bringen Ihre Immobilie
                wieder zum Glänzen - egal ob Altbau oder Neubau.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Wohnungsauflösung
              </h2>
              <p className="mb-6">
                Eine Wohnungsauflösung in Bielefeld ist oft mit Zeitdruck verbunden. Der Mietvertrag
                läuft aus, die Wohnung muss schnell übergeben werden, und man hat keine Ahnung, wohin
                mit all den Sachen. Wir machen Wohnungsauflösungen in rekordzeit - professionell und
                gründlich. Letzte Woche haben wir eine 4-Zimmer-Wohnung in Schildesche innerhalb von
                zwei Tagen komplett geräumt und besenrein übergeben.
              </p>
              <p className="mb-6">
                Bei jeder Wohnungsauflösung prüfen wir erstmal, was noch Wert hat. Alte Möbel aus den
                60ern sind wieder voll im Trend, Vintage-Geschirr wird auf dem Flohmarkt am Siegfriedplatz
                gut bezahlt, und Bücher nimmt die Stadtbibliothek oft gerne als Spende. Was übrig bleibt,
                entsorgen wir fachgerecht - immer nach den aktuellen Vorschriften der Stadt Bielefeld.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Nachlassräumung
              </h2>
              <p className="mb-6">
                Wenn ein geliebter Mensch verstirbt, ist die Nachlassräumung das Letzte, worum man sich
                kümmern möchte. Wir verstehen das und gehen besonders sensibel mit solchen Aufträgen um.
                In Bielefeld kennen wir viele Familien, die wir in dieser schweren Zeit unterstützt haben.
                Persönliche Gegenstände werden sorgfältig aussortiert, Erinnerungsstücke sicher verwahrt
                und alles andere diskret und respektvoll entsorgt.
              </p>
              <p className="mb-6">
                Eine Nachlassräumung erfordert oft auch bürokratische Schritte. Wir arbeiten eng mit
                Bielefelder Notaren, dem Nachlassgericht und wenn nötig auch mit dem Sozialamt zusammen.
                Alle wichtigen Dokumente werden gesichert und den Angehörigen übergeben. Bei wertvollen
                Gegenständen vermitteln wir gerne Kontakte zu seriösen Antiquitätenhändlern in Bielefeld
                - wir kennen die ehrlichen von den Abzockern.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kellerentrümpelung
              </h2>
              <p className="mb-6">
                Der Keller - die Bielefelder Rumpelkammer schlechthin! Jeder hat einen, keiner räumt ihn
                auf. Bis es zu spät ist und der Vermieter meckert oder man umziehen muss. Kellerentrümpelung
                in Bielefeld ist unser Spezialgebiet. Die feuchten Keller in der Nähe der Lutter, die
                vollgestopften Kellerabteile in den Hochhäusern am Teutoburger Wald oder die riesigen
                Gewölbekeller in der Altstadt - wir haben schon alles gesehen und geräumt.
              </p>
              <p className="mb-6">
                Bei einer Kellerentrümpelung finden wir oft wahre Schätze. Alte Werkzeuge, die heute ein
                Vermögen wert sind, vergessene Weine, die perfekt gereift sind, oder Spielzeug aus den
                70ern, das Sammler suchen. Aber auch jede Menge Müll, Feuchtigkeit und manchmal sogar
                Schimmel. Mit der richtigen Ausrüstung und Schutzkleidung räumen wir jeden Keller - egal
                wie vollgestopft oder verdreckt er ist.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Besenreine Übergabe
              </h2>
              <p className="mb-6">
                "Besenrein" - ein Wort, das in Bielefeld für viel Streit zwischen Mietern und Vermietern
                sorgt. Was genau bedeutet das eigentlich? Wir sorgen dafür, dass es keinen Ärger gibt.
                Eine besenreine Übergabe nach unseren Standards bedeutet: Alle persönlichen Gegenstände
                sind raus, der Boden ist gefegt, Spinnweben sind entfernt, und die Wohnung macht einen
                ordentlichen Eindruck. Mehr ist gesetzlich auch nicht gefordert.
              </p>
              <p className="mb-6">
                In Bielefeld gibt's aber regionale Besonderheiten. Viele Vermieter, besonders die großen
                Wohnungsgesellschaften wie BGW oder Vonovia, haben eigene Vorstellungen von "besenrein".
                Wir kennen die Anforderungen aller großen Vermieter in Bielefeld und sorgen dafür, dass
                Sie Ihre Kaution komplett zurückbekommen. Keine Diskussionen, keine Nachforderungen -
                einfach sauber übergeben und fertig.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Müllentsorgung
              </h2>
              <p className="mb-6">
                Die Müllentsorgung in Bielefeld hat ihre eigenen Regeln. Der Umweltbetrieb der Stadt ist
                da sehr genau - und das ist auch gut so. Aber für normale Bürger ist es oft ein Rätsel,
                was wohin gehört. Gelber Sack, blaue Tonne, Biotonne, Restmüll - und dann noch die
                ganzen Sonderabfälle. Wir kennen uns aus und sorgen dafür, dass alles richtig entsorgt wird.
              </p>
              <p className="mb-6">
                Besonders bei größeren Mengen wird's kompliziert. Der Recyclinghof in der Herforder Straße
                nimmt nur begrenzte Mengen an, für Gewerbemüll braucht man spezielle Genehmigungen, und
                manche Sachen werden gar nicht angenommen. Wir haben die nötigen Lizenzen und Kontakte,
                um auch große Mengen Müll schnell und legal zu entsorgen. Keine Schwarzentsorgung, keine
                Bußgelder - alles sauber und nachweisbar.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Sperrmüllabholung
              </h2>
              <p className="mb-6">
                Die offizielle Sperrmüllabholung in Bielefeld ist kostenlos - aber man wartet manchmal
                wochenlang auf einen Termin. Und dann darf man nur bestimmte Mengen rausstellen. Wir
                bieten eine schnelle Alternative zur städtischen Sperrmüllabholung. Innerhalb von 24 bis
                48 Stunden holen wir Ihren Sperrmüll ab - egal wieviel es ist.
              </p>
              <p className="mb-6">
                Was viele Bielefelder nicht wissen: Nicht alles darf als Sperrmüll rausgestellt werden.
                Bauabfälle, Autoreifen, Elektrogeräte - das sind alles Sonderfälle. Wir sortieren das
                für Sie und kümmern uns um die fachgerechte Entsorgung. Die alten Möbel vom Dachboden,
                die kaputte Waschmaschine aus dem Keller, der Bauschutt von der Renovierung - wir nehmen
                alles mit und Sie haben Ihre Ruhe.
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum wir in Bielefeld die Richtigen sind
                </h3>
                <p className="text-white/90 mb-4">
                  Seit über 15 Jahren räumen wir in Bielefeld auf. Wir kennen jeden Stadtteil, jede
                  Entsorgungsmöglichkeit und haben für jedes Problem eine Lösung. Von der kleinen
                  Kellerecke bis zur kompletten Firmenauflösung - kein Auftrag ist uns zu klein oder
                  zu groß.
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Festpreise ohne versteckte Kosten</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Kostenlose Wertanrechnung</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Besenreine Übergabe garantiert</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Alle Entsorgungsnachweise inklusive</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Versichert und zertifiziert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Einsatzgebiete</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Schnell vor Ort in allen Bielefelder Stadtteilen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld Mitte',
              'Sennestadt',
              'Brackwede',
              'Schildesche',
              'Jöllenbeck',
              'Heepen',
              'Gadderbaum',
              'Stieghorst',
              'Oldentrup'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/30 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-xl p-4 hover:border-sky-400/40 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300">
                <span className="text-sky-100/90 hover:text-sky-200 transition-colors duration-300">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">
              Häufige Fragen zu Aufräumarbeiten
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet eine Haushaltsauflösung?',
                a: 'Eine 3-Zimmer-Wohnung kostet durchschnittlich 1.500-3.000€. Nach der kostenlosen Besichtigung gibts einen Festpreis.'
              },
              {
                q: 'Wie schnell können Sie räumen?',
                a: 'Im Normalfall innerhalb von 3-5 Tagen. Bei Notfällen bieten wir auch 24-Stunden-Service.'
              },
              {
                q: 'Kaufen Sie auch Gegenstände an?',
                a: 'Ja, wertvolle Gegenstände rechnen wir direkt mit dem Räumungspreis gegen. Das spart Ihnen bares Geld.'
              },
              {
                q: 'Ist die Entsorgung im Preis enthalten?',
                a: 'Ja, alle Entsorgungskosten sind im Festpreis enthalten. Sie bekommen auch alle Nachweise.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/20 rounded-2xl p-6 hover:border-sky-400/40 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{faq.q}</h3>
                <p className="text-sky-100/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-500">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-4">
              Jetzt Aufräumarbeiten in Bielefeld anfragen!
            </h2>
            <p className="text-sky-100/80 mb-8">
              15 Jahre Erfahrung ✓ Festpreise ✓ Versichert ✓ Schnelle Ausführung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49 174 8083023"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600/40 to-sky-700/40 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-600/60 hover:to-sky-700/60 hover:shadow-lg hover:shadow-sky-400/30 transform hover:scale-105 transition-all duration-300"
              >
                📞 +49 174 8083023
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-r from-slate-800/50 to-sky-900/30 backdrop-blur-xl border border-sky-400/30 text-sky-100 font-bold rounded-full hover:border-sky-400/50 hover:shadow-md hover:shadow-sky-400/20 transform hover:scale-105 transition-all duration-300"
              >
                Kostenloses Angebot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Background Image */}
      <section className="relative">
        <SimpleContactForm purpose="quote" />
      </section>

      {/* Footer */}
      <FooterWithMarquee />
      </div>
    </main>
  );
}