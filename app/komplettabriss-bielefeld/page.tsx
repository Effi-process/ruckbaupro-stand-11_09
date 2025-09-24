'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function KomplettabrissBielefeld() {
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
                Professioneller Komplettabriss
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Komplettabriss Bielefeld - Vom Keller bis zum Dach alles weg
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Vorgestern hat uns Frau Müller aus Brackwede angerufen - das alte Elternhaus musste weg,
              komplett mit allem drum und dran. "Kriegt ihr das bis Ende des Monats hin?" Klar kriegen wir!
              <strong> Komplettabriss in Bielefeld</strong> is unser täglich Brot. Nach 25 Jahren wissen wir
              genau, wie man ein ganzes Haus verschwinden lässt - vom ersten Hammerschlag bis zur sauberen
              Baugrube. Egal ob Einfamilienhaus oder Mehrfamilienblock - wir machen Platz für Neues!
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '2.500+', label: 'Komplettabrisse' },
              { number: '7-14', label: 'Tage Durchschnitt' },
              { number: '100%', label: 'Recyclingquote' },
              { number: '0€', label: 'Versteckte Kosten' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Komplettabriss-Leistungen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Alles aus einer Hand - von der Planung bis zur sauberen Baugrube
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Einfamilienhausabriss',
                description: 'Kompletter Rückbau von Einfamilienhäusern inklusive Keller und Fundament.'
              },
              {
                title: 'Mehrfamilienhausabriss',
                description: 'Professioneller Abriss von Mehrfamilienhäusern und Wohnblöcken.'
              },
              {
                title: 'Schadstoffsanierung',
                description: 'Fachgerechte Entfernung von Asbest, KMF und anderen Schadstoffen.'
              },
              {
                title: 'Kellerabriss',
                description: 'Komplette Entfernung von Kellern inklusive Bodenplatte.'
              },
              {
                title: 'Entsorgung & Recycling',
                description: 'Umweltgerechte Entsorgung und maximale Wiederverwertung.'
              },
              {
                title: 'Baugrubenvorbereitung',
                description: 'Herstellung baureifer Grundstücke für Neubauvorhaben.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">In 4 Schritten zum Erfolg</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Strukturiert und planvoll zum sauberen Grundstück
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Besichtigung', desc: 'Kostenlose Vor-Ort-Begehung' },
              { step: '02', title: 'Angebot', desc: 'Transparentes Festpreisangebot' },
              { step: '03', title: 'Abriss', desc: 'Professionelle Durchführung' },
              { step: '04', title: 'Übergabe', desc: 'Saubere Baugrube' }
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
                Gestern stand ich mit Herrn Schmidt vor seinem Elternhaus in Schildesche. 1958 gebaut,
                jetzt muss es weg für nen Neubau. "Is schon komisch", sagte er, "hier bin ich
                aufgewachsen". Ich versteh das - bei jedem <strong>Komplettabriss in Bielefeld</strong>
                verschwindet auch ein Stück Geschichte. Aber wir machen das respektvoll und sauber,
                und am Ende entsteht was Neues. Nach drei Tagen war nur noch ne saubere Grube da,
                bereit für die Zukunft.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Einfamilienhausabriss
              </h2>
              <p className="mb-6">
                Einfamilienhäuser abreißen is unser Kerngeschäft. Jede Woche machen wir zwei bis drei
                Stück platt. Das klingt brutal, is aber ne Wissenschaft für sich. Erstmal muss alles
                raus was noch verwertbar is - alte Heizkörper, Kupferrohre, manchmal sogar noch gute
                Dachziegel. Dann kommt die Schadstoffprüfung. In nem Haus von 1965 findest du garantiert
                Asbest - im Dach, in den Fassadenplatten, manchmal sogar im Fliesenkleber!
              </p>
              <p className="mb-6">
                Letzte Woche in Jöllenbeck, typisches 70er-Jahre-Haus, eineinhalb Geschosse. Der Bagger
                hat zwei Tage gebraucht. Erst das Dach runter, dann Stockwerk für Stockwerk. Der Keller
                war der härteste Teil - 40cm dicke Betonwände, da musste der große Abbruchhammer ran.
                Am Ende waren es 450 Tonnen Schutt! Aber alles säuberlich sortiert: Ziegel zu Ziegel,
                Beton zu Beton, Holz zu Holz. So kriegen wir ne Recyclingquote von über 90 Prozent hin.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Mehrfamilienhausabriss
              </h2>
              <p className="mb-6">
                Mehrfamilienhäuser sind ne ganz andere Liga. Da reden wir von 3-4 Wochen Arbeit, mehreren
                tausend Tonnen Schutt und jeder Menge Logistik. Vor zwei Monaten hatten wir son Projekt
                in der Oldentruper Straße - ein Sechsfamilienhaus aus den 50ern, vier Stockwerke plus Keller.
                Erstmal mussten alle Mieter raus sein, dann die ganzen Versorgungsleitungen gekappt werden.
                Gas, Wasser, Strom, Telefon - alles muss fachgerecht stillgelegt werden.
              </p>
              <p className="mb-6">
                Bei sowas großen Projekten arbeiten wir mit zwei Baggern gleichzeitig. Einer reißt ab,
                der andere sortiert und lädt auf. Die LKWs fahren im Akkord - 40 Fuhren am Tag, jede
                25 Tonnen. Die Nachbarn haben wir vorher alle informiert, Staubschutznetze aufgehängt
                und die Straße zweimal täglich gewässert. Nach drei Wochen war der ganze Block weg,
                nur noch ne saubere Fläche. Der Investor war begeistert - zwei Wochen schneller als geplant!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Schadstoffsanierung
              </h2>
              <p className="mb-6">
                Schadstoffsanierung is bei fast jedem Komplettabriss dabei. Besonders Asbest macht immer
                wieder Probleme. Letztens in Heepen, schönes altes Fachwerkhaus, aber die komplette
                Fassade war mit Asbestplatten verkleidet. 300 Quadratmeter! Da kannst du nicht einfach
                mit dem Bagger ranfahren. Alles muss in Schutzanzügen abgebaut, doppelt verpackt und
                als Sondermüll entsorgt werden. Kostet extra, aber Sicherheit geht vor!
              </p>
              <p className="mb-6">
                Auch alte Nachtspeicheröfen sind so ne Sache - da is oft Asbest drin und manchmal sogar
                noch PCB im Kondensator. Oder die alten Teerkleber unter dem Parkett - auch krebserregend!
                Wir arbeiten da nur mit zertifizierten Fachfirmen zusammen. Die kommen mit Spezialausrüstung,
                machen alles dicht und saugen mit Unterdruckanlagen ab. Erst wenn die Messung sagt "sauber",
                dürfen wir mit dem eigentlichen Abriss anfangen. Sicherheit für unsere Jungs und die Nachbarn
                hat oberste Priorität!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kellerabriss
              </h2>
              <p className="mb-6">
                Der Keller is immer der härteste Part beim Komplettabriss. Die alten Keller hier in
                Bielefeld sind oft aus Bruchstein gemauert, manchmal sogar noch mit Lehm verfugt. Oder
                die Nachkriegskeller - massiver Beton, teilweise 50cm dick, weil die Leute damals noch
                an Bunker gedacht haben. Da brauchst du schweres Gerät!
              </p>
              <p className="mb-6">
                Neulich in Sennestadt mussten wir nen Keller rausreißen, der war tiefer als das Nachbarhaus
                gegründet. Da kannst du nicht einfach losbrechen, sonst sackt nebenan alles ab! Erstmal
                Spundwände setzen, dann schichtweise abtragen. Die Bodenplatte war 60cm dick - da hat
                selbst unser großer Abbruchhammer kapituliert. Am Ende mussten wir sprengen - natürlich
                mit allen Genehmigungen und Sicherheitsmaßnahmen. Hat geklappt, der Nachbar hat nix
                gemerkt außer nem kleinen Rums!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Entsorgung & Recycling
              </h2>
              <p className="mb-6">
                Entsorgung und Recycling sind heute das A und O beim Komplettabriss. Früher hat man
                alles auf die Kippe gefahren, fertig. Heute wird alles getrennt und wiederverwertet.
                Bei nem normalen Einfamilienhaus kommen da schnell 400-500 Tonnen Material zusammen.
                Davon sind 200 Tonnen Ziegel - die werden geschreddert und als Recycling-Schotter im
                Straßenbau verwendet. 150 Tonnen Beton - wird auch zu Schotter. 50 Tonnen Holz - geht
                in die Spanplattenproduktion oder ins Biomassekraftwerk.
              </p>
              <p className="mb-6">
                Metall is Gold wert - Kupfer, Messing, Edelstahl, alles wird raussortiert und verkauft.
                Bei nem alten Haus kommen da schnell 5.000 Euro zusammen, die wir direkt vom Preis
                abziehen. Selbst der alte Dachschiefer wird wiederverwendet - gibt Firmen die machen
                daraus Gartensplitt. Nur 5-10% landet wirklich auf der Deponie, meist Mischabfälle
                und kontaminiertes Material. Das is gut für die Umwelt und spart unseren Kunden Geld!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Baugrubenvorbereitung
              </h2>
              <p className="mb-6">
                Nach dem Abriss kommt die Baugrubenvorbereitung - oft unterschätzt, aber super wichtig!
                Der Baugrund muss perfekt vorbereitet sein für den Neubau. Letzte Woche in Brackwede,
                da sollte nach unserem Abriss direkt ein Mehrfamilienhaus hin. Problem: Der alte Öltank
                war undicht, der ganze Boden kontaminiert. 500 Kubikmeter Erde mussten raus und als
                Sondermüll entsorgt werden. Dann frische Erde rein und verdichten.
              </p>
              <p className="mb-6">
                Manchmal findest du auch Überraschungen - alte Bunkerreste, vergessene Zisternen oder
                wie neulich in Gadderbaum nen kompletten Luftschutzkeller, von dem keiner mehr wusste!
                Alles muss raus, sonst gibts später Probleme beim Neubau. Am Ende prüfen wir mit dem
                Bodengutachter die Tragfähigkeit, machen Verdichtungsmessungen und übergeben ne saubere,
                baureife Grube. Der Neubau kann direkt starten - keine bösen Überraschungen, keine Verzögerungen!
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihren Komplettabriss?
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre Erfahrung, über 2.500 erfolgreiche Komplettabrisse in ganz OWL.
                  Wir übernehmen alles - von der Planung über die Genehmigungen bis zur
                  baureifen Übergabe. Ein Ansprechpartner, ein Preis, eine Garantie!
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Festpreis-Garantie ohne versteckte Kosten</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Komplette Schadstoffsanierung inklusive</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 95% Recyclingquote</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Termingarantie mit Vertragsstrafe</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Baureife Übergabe garantiert</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Komplettabriss in allen Stadtteilen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Überall in Bielefeld schnell vor Ort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld Mitte',
              'Brackwede',
              'Schildesche',
              'Jöllenbeck',
              'Heepen',
              'Stieghorst',
              'Sennestadt',
              'Gadderbaum',
              'Dornberg'
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
              Häufige Fragen zum Komplettabriss
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet ein Komplettabriss?',
                a: 'Ein normales Einfamilienhaus kostet zwischen 15.000 und 30.000 Euro, je nach Größe und Schadstoffen. Festpreis gibts nach kostenloser Besichtigung.'
              },
              {
                q: 'Wie lange dauert ein Komplettabriss?',
                a: 'Ein Einfamilienhaus is in 3-5 Tagen weg, Mehrfamilienhäuser brauchen 2-4 Wochen. Kommt auf die Größe und eventuelle Schadstoffe an.'
              },
              {
                q: 'Was ist mit Asbest und anderen Schadstoffen?',
                a: 'Wir machen erstmal ne Schadstoffprüfung. Falls was gefunden wird, sanieren unsere zertifizierten Partner das fachgerecht. Alles aus einer Hand!'
              },
              {
                q: 'Kümmert ihr euch um die Genehmigungen?',
                a: 'Ja, komplett! Abbruchgenehmigung, Straßensperrung wenn nötig, Entsorgungsnachweise - wir regeln alles mit den Behörden.'
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
              Komplettabriss in Bielefeld? Wir machen das!
            </h2>
            <p className="text-sky-100/80 mb-8">
              Festpreis ✓ Termingarantie ✓ Alles aus einer Hand ✓ 25 Jahre Erfahrung
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
                Kostenlose Besichtigung →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
      </div>
    </main>
  );
}