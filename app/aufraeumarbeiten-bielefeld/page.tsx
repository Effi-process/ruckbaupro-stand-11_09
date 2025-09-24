'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import MultiStepWizard from '../components/MultiStepWizard';

export default function AufraeumarbeitenBielefeld() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-oxford-blue">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Aufräumarbeiten Bielefeld - Ihr Partner für saubere Lösungen
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Letzte Woche ham wir wieder bei drei Haushalten in Sennestadt ausgeholfen, nachdem die
              Renovierungsarbeiten abgeschlosen waren. Die Leute wussten einfach nicht wohin mit dem ganzen
              Bauschutt und alten Möbeln. Das ist typisch für Aufräumarbeiten in Bielefeld - die meisten
              unterschätzen, wieviel Arbeit das wirklich ist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">

            <div className="prose prose-lg max-w-none text-white/90">
              <p className="text-lg leading-relaxed mb-8">
                Als Abrissunternehmen in Bielefeld sehen wir täglich, wie schwer es den Menschen fällt,
                ihre Räume ordentlich aufzuräumen. Ob nach einem Umzug, einer Renovierung oder wenn ein
                Familienangehöriger verstorben ist - plötzlich steht man vor Bergen von Sachen und weiß
                nicht, wo man anfangen sol. Wir kennen jeden Winkel in Bielefeld, von der Altstadt bis
                nach Brackwede, und wissen genau, welche Herausforderungen die verschiedenen Stadtteile
                mit sich bringen.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
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

              <div className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Warum wir in Bielefeld die Richtigen sind
                </h3>
                <p className="text-white/90 mb-4">
                  Seit über 15 Jahren räumen wir in Bielefeld auf. Wir kennen jeden Stadtteil, jede
                  Entsorgungsmöglichkeit und haben für jedes Problem eine Lösung. Von der kleinen
                  Kellerecke bis zur kompletten Firmenauflösung - kein Auftrag ist uns zu klein oder
                  zu groß.
                </p>
                <p className="text-white/90 mb-4">
                  Unsere Kunden schätzen besonders unsere Zuverlässigkeit und Transparenz. Festpreise
                  ohne versteckte Kosten, pünktliche Termine und saubere Arbeit - das ist unser
                  Versprechen. Und wenn mal was nicht passt, sind wir sofort da und lösen das Problem.
                </p>
                <p className="text-white/90">
                  Rufen Sie uns an - wir machen Ihnen ein faires Angebot und räumen schnell und
                  gründlich auf. In Bielefeld und Umgebung sind wir immer für Sie da!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Jetzt Aufräumarbeiten in Bielefeld anfragen
            </h2>
            <p className="text-white/80 mb-8">
              Kostenlose Besichtigung, faire Preise, schnelle Ausführung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08000060970"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-sky-400/30 transition-all duration-300"
              >
                📞 0800 0060970
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Kontaktformular →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}