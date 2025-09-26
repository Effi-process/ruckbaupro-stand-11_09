'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function InnenabbruchBielefeld() {
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
                Professioneller Innenabbruch
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Innenabbruch Bielefeld - Präzise Entkernung im laufenden Betrieb
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Gestern mussten wir im Stadttheater arbeiten - während der Proben! Die Schauspieler haben
              oben geprobt, wir haben unten die Garderobe entkernt. <strong>Innenabbruch in Bielefeld</strong>
              heißt für uns: leise, sauber und ohne den Betrieb zu stören. Nach 25 Jahren können wir
              das im Schlaf - von der Büroetage bis zum Krankenhaus-OP. Wenn Wände fallen müssen, ohne
              dass die Nachbarn was merken, dann sind wir die Richtigen!
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '3.000+', label: 'Innenprojekte' },
              { number: '< 65 dB', label: 'Lärmpegel' },
              { number: '99%', label: 'Staubfrei' },
              { number: '24/7', label: 'Nachtarbeit möglich' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Innenabbruch-Services</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Speziallösungen für präzise Arbeiten im Gebäudeinneren
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wanddurchbrüche',
                description: 'Präzise Öffnungen für Türen, Fenster und Durchgänge mit minimalem Schmutz.'
              },
              {
                title: 'Deckendurchbrüche',
                description: 'Saubere Durchbrüche für Treppen, Aufzüge und Installationsschächte.'
              },
              {
                title: 'Trennwandabbau',
                description: 'Rückbau von Leichtbauwänden und nichttragenden Elementen.'
              },
              {
                title: 'Büroentkernung',
                description: 'Komplette Entfernung von Büroausstattung und Zwischenwänden.'
              },
              {
                title: 'Ladenbauabbau',
                description: 'Professioneller Rückbau von Ladeneinrichtungen und Verkaufsflächen.'
              },
              {
                title: 'Staubschutzwände',
                description: 'Installation temporärer Schutzwände für sauberes Arbeiten.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unser Vorgehen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Sauber und leise zum perfekten Ergebnis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Begehung', desc: 'Analyse der Räumlichkeiten' },
              { step: '02', title: 'Schutzmaßnahmen', desc: 'Abschottung und Staubschutz' },
              { step: '03', title: 'Rückbau', desc: 'Präzise Demontage' },
              { step: '04', title: 'Endreinigung', desc: 'Besenreine Übergabe' }
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
                Letzte Woche kam der Anruf vom Universitätsklinikum - die Station 3B musste renoviert werden,
                aber die Patienten konnten nicht verlegt werden. "Geht das überhaupt?", fragte die
                Stationsleiterin. Klar geht das! Mit unserer Staubschutzwand, leisem Werkzeug und Nachtarbeit
                haben wir die halbe Station entkernt, während nebenan die Patienten geschlafen haben. Das is
                <strong> Innenabbruch in Bielefeld</strong> - wir arbeiten so leise, dass selbst die Nachtschwester
                nix gemerkt hat!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Wanddurchbrüche
              </h2>
              <p className="mb-6">
                Wanddurchbrüche sind unsere Spezialität. Egal ob für ne neue Tür, ein Fenster oder gleich
                nen ganzen Durchgang - wir machen das millimetergenau. Neulich im Rathaus, da wollten die
                zwei Büros verbinden. Problem: 50cm dicker Stahlbeton aus den 60ern, und rundherum sitzen
                Kollegen die arbeiten müssen. Mit unserer Diamantsäge haben wir das in drei Stunden geschafft -
                fast ohne Lärm und definitiv ohne Staub!
              </p>
              <p className="mb-6">
                Das Geheimnis is die richtige Technik. Erstmal mit dem Scanner prüfen wo Leitungen und
                Bewehrung liegen. Dann Schutzfolie an die Wand, Staubsauger direkt an die Säge, und los gehts.
                Der Schnitt is so sauber, dass man danach kaum verputzen muss. Und das Beste: Die Sekretärin
                im Nebenbüro hat weiter telefoniert, als wär nix gewesen. So muss Innenabbruch sein - professionell
                und rücksichtsvoll!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Deckendurchbrüche
              </h2>
              <p className="mb-6">
                Deckendurchbrüche sind noch kniffliger als Wände. Da hängt die Statik dran, und von oben
                rieselt der Dreck. Letzten Monat in der Sparkasse am Jahnplatz - die wollten ne neue Treppe
                zwischen den Etagen. Über uns die Schalterhalle mit Kundenverkehr, unter uns das Archiv. Da
                kannst du nicht einfach mit dem Presslufthammer anrücken!
              </p>
              <p className="mb-6">
                Wir haben das nachts gemacht, mit Seilsäge und Wasserkühlung. Erstmal Träger einziehen zur
                Absicherung, dann Schnitt für Schnitt die Decke rausschneiden. Jedes Stück einzeln mit dem
                Kran rausgehoben - 2 Tonnen schwer waren die Betonplatten! Am nächsten Morgen war alles fertig,
                nur das Loch in der Decke hat gezeigt dass wir da waren. Die Kunden haben nix mitbekommen,
                und das Archiv war staubfrei. Perfekt!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Trennwandabbau
              </h2>
              <p className="mb-6">
                Trennwände abreißen klingt einfach, is es aber nicht immer. Die modernen Glaswände im
                Büro sind noch okay, aber die alten Gipskartonwände aus den 80ern? Da is oft Asbest drin,
                oder die Elektrik is wild verlegt. Neulich bei Bertelsmann in Gütersloh, da sollten 20
                Büros zu nem Großraumbüro werden. 300 Meter Trennwände mussten weg - aber die Mitarbeiter
                sollten weiterarbeiten können.
              </p>
              <p className="mb-6">
                Wir haben Abschnitt für Abschnitt gearbeitet. Morgens um 6 angefangen, bevor die ersten
                Mitarbeiter kommen. Staubschutzwand aufgebaut, Wände rausgeschnitten, Müll direkt in
                Container. Um 8 war alles sauber und die Kollegen konnten normal arbeiten - nur halt mit
                mehr Platz! Nach zwei Wochen waren alle Wände weg und keiner hat sich beschwert. Das is
                wichtig bei sowas - die Leute müssen ja weiter ihrer Arbeit nachgehen können.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Büroentkernung
              </h2>
              <p className="mb-6">
                Büroentkernung is mehr als nur Wände rausreißen. Da hängen Kilometer von Kabeln, Klimarohre,
                Wasseranschlüsse - alles muss ordentlich zurückgebaut werden. Vor zwei Monaten hatten wir nen
                großen Auftrag: 3.000 Quadratmeter Bürofläche im Loom-Quartier sollten komplett entkernt werden.
                Der Investor wollte moderne Open-Space-Büros draus machen.
              </p>
              <p className="mb-6">
                Systematisch sind wir vorgegangen: Erst die Möbel raus, dann die Bodenbeläge, dann die
                Zwischenwände. Die ganzen Kabel haben wir säuberlich aufgerollt - kann man noch gebrauchen!
                Die Klimaanlage musste Stück für Stück demontiert werden, das Kühlmittel fachgerecht abgesaugt.
                Nach vier Wochen war aus den verwinkelten Büros eine riesige leere Halle geworden. Der
                Architekt war begeistert - endlich konnte er seine Vision umsetzen!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Ladenbauabbau
              </h2>
              <p className="mb-6">
                Ladenbau abreißen is immer Zeitdruck. Die Miete läuft, der neue Mieter will rein, und
                dazwischen müssen wir ran. Letzte Woche in der Altstadt - die alte Boutique musste raus,
                ein Handyladen sollte rein. Freitag Ladenschluss, Montag Neueröffnung. Dazwischen: wir!
              </p>
              <p className="mb-6">
                Samstag früh um 6 gings los. Die ganzen Einbauten raus - Regale, Umkleiden, Kasse, Beleuchtung.
                Die Holzverkleidung an den Wänden war noch gut, die haben wir vorsichtig abgebaut zum
                Wiederverwenden. Der alte Fliesenboden musste auch raus, aber leise - die Nachbarn schlafen
                ja noch! Mit speziellen Dämmmatten unter den Maschinen haben wir den Lärm gedämpft. Sonntag
                abend war alles fertig, besenrein übergeben. Der neue Mieter konnte Montag früh direkt mit
                dem Einrichten anfangen. So schnell kann Ladenbauabbau sein!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Staubschutzwände
              </h2>
              <p className="mb-6">
                Staubschutzwände sind das A und O beim Innenabbruch. Ohne die geht gar nix, besonders wenn
                nebenan weitergearbeitet wird. Wir haben ein ausgeklügeltes System: Metallrahmen mit
                Spezialfolie, dazu Unterdruck-Anlagen die den Staub absaugen. Das Zeug kostet, aber es
                lohnt sich! Keine Beschwerden, keine Reinigungskosten, alle sind zufrieden.
              </p>
              <p className="mb-6">
                Im Franziskus Hospital haben wir mal ne ganze Station saniert, während drumherum der
                normale Krankenhausbetrieb lief. Unsere Staubschutzwände waren so dicht, dass selbst die
                empfindlichen Beatmungsgeräte keine erhöhten Staubwerte angezeigt haben. Die Hygiene-
                beauftrage war erst skeptisch, aber nach den Messungen war sie begeistert. "Sauberer als
                bei normalem Betrieb", hat sie gesagt. Das is unser Anspruch - Innenabbruch ohne dass es
                jemand merkt!
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihren Innenabbruch?
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre Erfahrung mit sensiblen Innenprojekten. Wir arbeiten leise, sauber
                  und störungsfrei - auch während Ihr Betrieb weiterläuft. Von der kleinen
                  Wandöffnung bis zur kompletten Entkernung.
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Lärmreduzierte Arbeitsmethoden unter 65 dB</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Zertifizierte Staubschutzssysteme</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Nacht- und Wochenendarbeit möglich</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Arbeiten im laufenden Betrieb</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Besenreine Übergabe garantiert</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Innenabbruch in ganz Bielefeld</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Schnell vor Ort in allen Stadtteilen und Gewerbegebieten
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
              Häufige Fragen zum Innenabbruch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wie laut wird der Innenabbruch?',
                a: 'Mit unseren schallgedämpften Werkzeugen bleiben wir meist unter 65 dB - das is leiser als ne normale Unterhaltung. Für besonders sensible Bereiche haben wir Spezialwerkzeuge.'
              },
              {
                q: 'Kann während der Arbeiten weitergearbeitet werden?',
                a: 'Ja! Mit Staubschutzwänden und leisem Werkzeug stören wir den Betrieb kaum. Viele Kunden merken gar nicht, dass wir da sind.'
              },
              {
                q: 'Wie vermeidet ihr Staub?',
                a: 'Professionelle Staubschutzwände, Unterdruck-Anlagen und direkte Absaugung an den Werkzeugen. 99% staubfrei is unser Standard.'
              },
              {
                q: 'Arbeitet ihr auch nachts oder am Wochenende?',
                a: 'Klar! Gerade in Läden, Praxen oder Büros arbeiten wir oft außerhalb der Geschäftszeiten. Kostet nen kleinen Aufschlag, aber dafür läuft der Betrieb normal weiter.'
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
              Innenabbruch in Bielefeld? Leise, sauber, professionell!
            </h2>
            <p className="text-sky-100/80 mb-8">
              Staubfrei ✓ Lärmreduziert ✓ Im laufenden Betrieb ✓ Termingenau
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
                Kostenlose Beratung →
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