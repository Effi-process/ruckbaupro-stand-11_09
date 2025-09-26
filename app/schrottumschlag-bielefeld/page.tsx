'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function SchrottumschlagBielefeld() {
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
                Professioneller Schrottumschlag
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Schrottumschlag Bielefeld - Aus Alt mach Geld
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Heute morgen kam der Anruf vom Maschinenbauer in Brackwede: "Die alte Produktionslinie muss
              raus, 50 Tonnen Stahl!" Für uns kein Problem - zwei LKW, ein Kran und unser Team waren in
              zwei Stunden da. <strong>Schrottumschlag in Bielefeld</strong> is unser Geschäft seit 25 Jahren.
              Wir zahlen Tagespreise für Altmetall, holen alles ab und kümmern uns um die komplette
              Verwertung. Egal ob Kupfer, Alu oder Stahl - bei uns wird aus Schrott bares Geld!
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50.000t', label: 'Schrott pro Jahr' },
              { number: 'Top', label: 'Tagespreise' },
              { number: '24h', label: 'Abholung' },
              { number: '100%', label: 'Recycling' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Schrottumschlag-Services</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Ankauf, Abholung und fachgerechte Verwertung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Metallankauf',
                description: 'Faire Tagespreise für alle Metalle - Kupfer, Messing, Alu, Edelstahl.'
              },
              {
                title: 'Containerstellung',
                description: 'Container in allen Größen für Baustellen und Industriebetriebe.'
              },
              {
                title: 'Maschinendemontage',
                description: 'Zerlegung und Abholung von Produktionsanlagen und Maschinen.'
              },
              {
                title: 'Kabelrecycling',
                description: 'Ankauf und Verwertung von Altkabeln aller Art.'
              },
              {
                title: 'Autoentsorgung',
                description: 'Kostenlose Abholung und Verschrottung von Altfahrzeugen.'
              },
              {
                title: 'Industrieschrott',
                description: 'Komplettservice für Industriebetriebe mit regelmäßiger Abholung.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">So funktioniert's</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Einfach und transparent zum besten Preis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Anruf', desc: 'Menge und Art angeben' },
              { step: '02', title: 'Preisangebot', desc: 'Faire Tagespreise' },
              { step: '03', title: 'Abholung', desc: 'Schnell vor Ort' },
              { step: '04', title: 'Auszahlung', desc: 'Sofort bar oder Überweisung' }
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
                Gestern wars wieder sowas - der Elektriker aus Heepen ruft an: "Ich hab 200 Kilo
                Kupferkabel vom Umbau, was zahlt ihr denn?" Ich sag: "Moment, ich schau die aktuellen
                Kurse." 7,20 Euro das Kilo, macht 1.440 Euro! Der Mann war baff - hatte mit der Hälfte
                gerechnet. Eine Stunde später war unser Fahrer da, hat gewogen, gezahlt und mitgenommen.
                So läuft <strong>Schrottumschlag in Bielefeld</strong> bei uns - schnell, fair und unkompliziert!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Metallankauf
              </h2>
              <p className="mb-6">
                Metallankauf is unser Kerngeschäft. Kupfer is momentan Gold wert - 7-8 Euro das Kilo,
                je nach Qualität. Blankes Kupfer ohne Isolierung bringt am meisten. Messing läuft auch
                gut, besonders die schweren Armaturen. Aluminium schwankt mehr, aber bei größeren Mengen
                lohnt sichs trotzdem. Edelstahl is stabil, V2A und V4A sind immer gefragt.
              </p>
              <p className="mb-6">
                Letzte Woche kam ne Heizungsfirma mit nem ganzen LKW voll alter Heizkörper. 3 Tonnen
                Gusseisen! Die wollten das eigentlich auf die Kippe fahren - hätte 500 Euro Entsorgung
                gekostet. Bei uns haben sie 450 Euro bekommen! Die kommen jetzt jeden Monat. Wir zahlen
                immer Tagespreise, transparent und fair. Keine versteckten Abzüge, kein Kleingedrucktes.
                Was auf der Waage steht, wird bezahlt!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Containerstellung
              </h2>
              <p className="mb-6">
                Container stellen wir überall in Bielefeld - von 5 bis 40 Kubikmeter. Für Baustellen,
                Abbruchprojekte oder wenn Betriebe aufräumen. Der Vorteil: Ihr sammelt in Ruhe, wir
                holen ab wenn's voll is. Keine Fahrerei, kein Stress. Und bei Metall gibts sogar noch
                Geld zurück statt Entsorgungskosten!
              </p>
              <p className="mb-6">
                Bei der Großbaustelle am Jahnplatz haben wir letzten Monat drei 40-Kubiker hingestellt.
                Die Bauarbeiter haben alle Metallreste reingeworfen - Armierungseisen, alte Rohre,
                Blechverkleidungen. Nach zwei Wochen waren 35 Tonnen Mischschrott zusammen. Normalerweise
                kostet die Entsorgung von Bauschutt richtig Geld. Bei uns haben die 2.800 Euro bekommen!
                Der Bauleiter konnte es kaum glauben.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Maschinendemontage
              </h2>
              <p className="mb-6">
                Maschinendemontage machen wir komplett - von der Zerlegung bis zum Abtransport. Alte
                Drehbänke, Fräsmaschinen, Pressen - alles was aus Metall is, nehmen wir. Die großen
                Maschinen von früher, die sind oft noch richtig was wert. Massives Gusseisen, dicke
                Stahlplatten, manchmal sogar noch Kupferwicklungen in den Motoren.
              </p>
              <p className="mb-6">
                Neulich bei Gildemeister, die haben ihre alte Werkstatt aufgelöst. 15 Maschinen, teilweise
                noch von 1960! Jede mindestens 2 Tonnen schwer. Wir sind mit Kran und Schneidbrenner
                angerückt, haben alles fein säuberlich zerlegt. Die Gussgestelle, die Stahlwellen, die
                Kupfermotoren - alles getrennt für beste Preise. Am Ende haben die 18.000 Euro bekommen
                statt Entsorgungskosten zu zahlen. Win-win für alle!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kabelrecycling
              </h2>
              <p className="mb-6">
                Kabelrecycling is ne Goldgrube - wortwörtlich! In alten Kabeln steckt oft mehr drin
                als man denkt. Kupfer natürlich, aber manchmal auch Aluminium oder sogar Silber in
                Spezialkabeln. Wir haben ne eigene Kabelschälanlage, die trennt sauber Metall von
                Isolation. Höchste Ausbeute, beste Preise!
              </p>
              <p className="mb-6">
                Die Telekom hat letztes Jahr ihr altes Rechenzentrum in Sennestadt umgebaut. Kilometer
                von alten Datenkabeln mussten raus! Die wollten erst alles wegschmeißen. Wir haben
                gesagt: "Halt, das is bares Geld!" 8 Tonnen Kabel, davon 3 Tonnen reines Kupfer nach
                der Schälung. Bei 7 Euro das Kilo macht das über 20.000 Euro! Die IT-Jungs haben Augen
                gemacht. Jetzt rufen die bei jedem Umbau an.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Autoentsorgung
              </h2>
              <p className="mb-6">
                Autoentsorgung machen wir kostenlos - sogar mit Abholung! Der alte Golf in der Garage,
                der seit Jahren nicht mehr läuft? Wir holen den ab, geben die Abmeldebescheinigung und
                fertig. Bei Autos mit Katalysator gibts sogar noch was obendrauf. Die Kats haben Platin
                und Palladium drin - das is richtig was wert!
              </p>
              <p className="mb-6">
                Letzte Woche kam ne alte Dame aus Brackwede - der Mann war gestorben, drei alte Autos
                standen noch auf dem Hof. Ein Mercedes W123, ein alter Passat und sogar noch ein Käfer.
                "Die müssen weg, aber ich kann nicht fahren", sagte sie. Kein Problem! Wir haben alle
                drei abgeholt, ordnungsgemäß verschrottet und für den Mercedes gabs sogar noch 300 Euro.
                Die Frau war so erleichtert - endlich Platz auf dem Hof und sogar noch Geld bekommen!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Industrieschrott
              </h2>
              <p className="mb-6">
                Industrieschrott is unser Großgeschäft. Wir betreuen Firmen in ganz OWL mit regelmäßiger
                Abholung. Metallverarbeitende Betriebe, Maschinenbauer, Autowerkstätten - alle produzieren
                täglich Schrott. Späne, Stanzabfälle, Verschnitt - das summiert sich! Wir stellen Container,
                holen regelmäßig ab und rechnen monatlich ab.
              </p>
              <p className="mb-6">
                Bei Schüco in Bielefeld haben wir nen Dauervertrag. Jeden Tag fallen da tonnenweise
                Aluminiumreste an - Profile, Verschnitt, Späne von der CNC-Bearbeitung. Wir haben denen
                ein komplettes System aufgebaut: Verschiedene Container für verschiedene Legierungen,
                wöchentliche Abholung, monatliche Abrechnung. Die bekommen jeden Monat ne fünfstellige
                Summe von uns! Aus Produktionsabfall wird bares Geld - besser gehts nicht.
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihren Schrottumschlag?
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre im Geschäft, faire Preise und schnelle Abwicklung. Wir sind
                  zertifizierter Entsorgungsfachbetrieb und zahlen immer Tagespreise.
                  Von der Büroklammer bis zur Fabrikanlage - bei uns wird alles zu Geld!
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Tagesaktuelle Höchstpreise</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Sofortige Barauszahlung möglich</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Kostenlose Abholung ab 100kg</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Container in allen Größen</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Zertifizierte Entsorgung mit Nachweis</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Schrottabholung in ganz Bielefeld</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Schnell vor Ort in allen Stadtteilen und Industriegebieten
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
              'Oldentrup',
              'Industriegebiet Ost'
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
              Häufige Fragen zum Schrottumschlag
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Welche Metalle kauft ihr an?',
                a: 'Alles! Kupfer, Messing, Aluminium, Edelstahl, Zink, Blei, Gusseisen, Stahl. Auch Elektroschrott, Kabel und Katalysatoren. Einfach anrufen und fragen!'
              },
              {
                q: 'Ab welcher Menge holt ihr ab?',
                a: 'Ab 100 Kilo holen wir kostenlos ab. Bei Kupfer und Messing auch schon bei kleineren Mengen. Große Mengen oder Maschinen holen wir sofort!'
              },
              {
                q: 'Wie werden die Preise berechnet?',
                a: 'Immer tagesaktuelle Börsenpreise! Wir wiegen vor Ort mit geeichter Waage. Keine versteckten Abzüge. Was die Waage zeigt, wird bezahlt.'
              },
              {
                q: 'Bekomme ich eine Quittung?',
                a: 'Klar! Ordentlicher Ankaufsbeleg mit allem drum und dran. Für Firmen auch mit Entsorgungsnachweis und allen nötigen Papieren fürs Finanzamt.'
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
              Schrottumschlag in Bielefeld? Beste Preise garantiert!
            </h2>
            <p className="text-sky-100/80 mb-8">
              Tagespreise ✓ Sofort Bargeld ✓ Kostenlose Abholung ✓ Faire Verwiegung
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
                Preisanfrage stellen →
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