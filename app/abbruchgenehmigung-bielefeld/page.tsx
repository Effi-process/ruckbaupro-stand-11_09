'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function AbbruchgenehmigungBielefeld() {
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
                Professionelle Genehmigungsberatung
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Abbruchgenehmigung Bielefeld - Schnell und unkompliziert zum Abriss
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Letzte Woche ham wir wieder drei Genehmigungen durchbekommen - alle beim ersten Versuch!
              Der Trick? Man muss wissen, was die Jungs vom Bauamt in Bielefeld sehen wollen. Nach 25 Jahren
              kennen wir jeden Sachbearbeiter persönlich und wissen genau, worauf es ankommt. Wenn Sie ne
              <strong> Abbruchgenehmigung in Bielefeld</strong> brauchen, dann machen wir das für Sie - garantiert
              ohne Stress und Rennerei.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Genehmigte Abrisse' },
              { number: '4-6', label: 'Wochen Bearbeitungszeit' },
              { number: '100%', label: 'Erfolgsquote' },
              { number: '24h', label: 'Antragseinreichung' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Genehmigungsservices</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Von der Beratung bis zur fertigen Genehmigung - alles aus einer Hand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bauantragstellung',
                description: 'Komplette Antragsstellung beim Bauamt Bielefeld inklusive aller Unterlagen und Formulare.'
              },
              {
                title: 'Statikprüfung',
                description: 'Erstellung und Prüfung aller statischen Nachweise für sichere Abbrucharbeiten.'
              },
              {
                title: 'Nachbarschaftsrecht',
                description: 'Klärung aller nachbarschaftsrechtlichen Fragen und Einholung notwendiger Zustimmungen.'
              },
              {
                title: 'Schadstoffgutachten',
                description: 'Organisation von Asbest- und Schadstoffgutachten als Grundlage für die Genehmigung.'
              },
              {
                title: 'Entsorgungsnachweis',
                description: 'Erstellung vollständiger Entsorgungskonzepte mit allen erforderlichen Nachweisen.'
              },
              {
                title: 'Express-Service',
                description: 'Beschleunigte Bearbeitung bei dringenden Abrissprojekten mit persönlicher Betreuung.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">So läuft's ab</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              In 4 einfachen Schritten zur Abbruchgenehmigung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Erstberatung', desc: 'Kostenlose Prüfung Ihrer Unterlagen' },
              { step: '02', title: 'Dokumentation', desc: 'Zusammenstellung aller Dokumente' },
              { step: '03', title: 'Einreichung', desc: 'Persönliche Abgabe beim Bauamt' },
              { step: '04', title: 'Genehmigung', desc: 'Begleitung bis zur Freigabe' }
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
                Als Abrissunternehmen in Bielefeld wissen wir genau, wie kompliziert das mit den Genehmigungen
                sein kann. Neulich kam ne Kundin zu uns - wollte ihre alte Garage abreißen. "Kein Problem",
                dachte sie, "ist ja nur ne kleine Garage". Pustekuchen! Ohne Abbruchgenehmigung läuft in
                Bielefeld gar nix, und das aus gutem Grund. Wir haben ihr dann geholfen, und nach 5 Wochen
                war alles durch.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Bauantragstellung
              </h2>
              <p className="mb-6">
                Die Bauantragstellung fürs Abreißen is nich ohne. Das Bauamt Bielefeld will alles genau wissen:
                Was wird abgerissen, wie groß, wie alt, was für Material, Asbest drin oder nicht? Wir machen
                das jeden Tag und kennen die ganzen Formulare auswendig. Der Antrag auf Abbruchgenehmigung
                muss perfekt sein, sonst schicken die das direkt wieder zurück. Einmal hatten wir nen Fall,
                da fehlte nur eine Unterschrift vom Nachbarn - 3 Wochen Verzögerung!
              </p>
              <p className="mb-6">
                Die Jungs vom Bauamt am Niederwall sind eigentlich ganz in Ordnung, wenn man weiß wie man mit
                denen umgeht. Herr Schmidt von der Bauaufsicht kennt uns seit Jahren - der weiß, dass unsere
                Anträge immer vollständig sind. Das spart Zeit und Nerven. Wir reichen alles persönlich ein,
                nicht per Post. So können wir direkt nachfragen wenn was unklar is.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Statikprüfung
              </h2>
              <p className="mb-6">
                Bei der Statikprüfung wirds ernst. Besonders bei Reihenhäusern oder wenn Gebäude aneinander
                gebaut sind. In der Bielefelder Altstadt steht ja alles Wand an Wand - da muss man höllisch
                aufpassen. Unser Statiker prüft erstmal, ob die Nachbargebäude stehen bleiben wenn wir abreißen.
                Klingt logisch, aber da steckt viel Arbeit drin.
              </p>
              <p className="mb-6">
                Letztes Jahr hatten wir nen kniffligen Fall in Schildesche - drei Reihenhäuser, das mittlere
                sollte weg. Der Statiker hat erstmal geschluckt! Die Häuser stützten sich gegenseitig, das war
                wie Jenga spielen. Am Ende mussten wir temporäre Stützkonstruktionen einbauen, bevor überhaupt
                was abgerissen werden konnte. Sowas muss alles in den Antrag rein, mit Zeichnungen und Berechnungen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Nachbarschaftsrecht
              </h2>
              <p className="mb-6">
                Das Nachbarschaftsrecht is in Bielefeld ne heikle Sache. Die Leute sind hier eigen - "mein Grundstück,
                meine Regeln" hört man oft. Aber beim Abriss müssen die Nachbarn zustimmen, besonders wenn deren
                Grundstück betreten werden muss oder Lärm und Staub zu erwarten sind. Wir sprechen immer persönlich
                mit allen Nachbarn, bevor wir was einreichen.
              </p>
              <p className="mb-6">
                In Brackwede hatten wir mal nen Nachbarn, der wollte partout nicht unterschreiben. Stellte sich
                raus, der hatte Angst um seinen Kirschbaum an der Grenze. Wir haben ihm dann garantiert, dass
                der Baum geschützt wird - mit Brettern drumrum und allem. Danach war er einverstanden. Manchmal
                gehts um solche Kleinigkeiten, aber ohne die Unterschrift läuft nix.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Schadstoffgutachten
              </h2>
              <p className="mb-6">
                Das Schadstoffgutachten is Pflicht bei allem was vor 1993 gebaut wurde. Asbest war bis dahin
                überall drin - in Dächern, Fassaden, sogar in Blumenkästen! In Bielefeld haben wir viele alte
                Häuser aus den 60ern und 70ern, da is fast immer was drin. Wir arbeiten mit zertifizierten
                Gutachtern zusammen, die kommen, nehmen Proben und schicken die ins Labor.
              </p>
              <p className="mb-6">
                Die Stadt Bielefeld nimmt das sehr ernst - zurecht! Asbest is kein Spaß. Wenn das Gutachten
                positiv is (also Asbest gefunden wurde), muss ne spezielle Sanierungsfirma ran. Das macht den
                Abriss teurer, aber es geht um Gesundheit. Wir beraten unsere Kunden ehrlich - manchmal lohnt
                sich ne Sanierung mehr als Abriss. Aber das entscheidet am Ende der Kunde.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Entsorgungsnachweis
              </h2>
              <p className="mb-6">
                Der Entsorgungsnachweis wird oft unterschätzt. Das Bauamt will genau wissen, wo der ganze Schutt
                hinkommt. Einfach auf die Deponie karren geht nicht - alles muss sortiert und dokumentiert werden.
                Wir haben Verträge mit allen großen Entsorgern in Bielefeld und Umgebung. Die Deponie in Brake
                nimmt Bauschutt, Metall geht zum Schrotthandel in Oldentrup, und Sondermüll muss speziell entsorgt werden.
              </p>
              <p className="mb-6">
                Das Entsorgungskonzept muss wasserdicht sein. Wieviel Tonnen fallen an, welche Materialien, wohin
                damit? Das Umweltamt prüft das genau. Einmal hatten wir nen Kunden, der wollte den Schutt selbst
                wegfahren um Geld zu sparen. Das ging natürlich schief - keine ordentlichen Wiegescheine, keine
                Nachweise. Der Abriss wurde gestoppt und es gab ne saftige Strafe. Mit uns passiert sowas nicht.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Express-Service
              </h2>
              <p className="mb-6">
                Manchmal muss es schnell gehen - Einsturzgefahr, Brandschaden oder einfach Termindruck beim
                Neubau. Unser Express-Service bringt die Genehmigung in Rekordzeit durch. Wir kennen die
                Ansprechpartner beim Bauamt persönlich und wissen, wie man Dringlichkeit vermittelt ohne zu
                nerven. Letzte Woche hatten wir so nen Fall - altes Haus in Heepen, Dach vom Sturm beschädigt,
                Einsturzgefahr. Normalerweise dauert die Genehmigung 4-6 Wochen, wir hatten sie in 5 Tagen!
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum wir die Richtigen für Ihre Abbruchgenehmigung sind
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre Erfahrung mit dem Bauamt Bielefeld haben uns gelehrt, worauf es ankommt.
                  Wir kennen jeden Sachbearbeiter, jede Vorschrift und jeden Trick um Verzögerungen
                  zu vermeiden. Ihre Genehmigung ist bei uns in den besten Händen.
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Persönliche Kontakte zum Bauamt</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 100% Erfolgsquote bei Erstanträgen</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Express-Bearbeitung möglich</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Komplettservice inklusive aller Gutachten</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Keine versteckten Kosten</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Genehmigungen in allen Stadtteilen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Wir kennen die speziellen Anforderungen jedes Bielefelder Stadtteils
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
              Häufige Fragen zur Abbruchgenehmigung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wie lange dauert die Genehmigung?',
                a: 'Normalerweise 4-6 Wochen. Mit unserem Express-Service gehts auch in 1-2 Wochen, wenns dringend is.'
              },
              {
                q: 'Was kostet die Abbruchgenehmigung?',
                a: 'Die Gebühren beim Bauamt liegen zwischen 200-800€, je nach Größe. Unsere Beratung kostet ab 500€ komplett.'
              },
              {
                q: 'Brauche ich immer eine Genehmigung?',
                a: 'In Bielefeld ja, fast immer. Nur ganz kleine Nebengebäude unter 30 Kubikmeter sind manchmal genehmigungsfrei.'
              },
              {
                q: 'Was passiert ohne Genehmigung?',
                a: 'Das kann teuer werden! Bußgelder bis 50.000€ sind möglich, und der Abriss muss sofort gestoppt werden.'
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
              Abbruchgenehmigung in Bielefeld? Wir regeln das!
            </h2>
            <p className="text-sky-100/80 mb-8">
              25 Jahre Erfahrung ✓ Persönliche Kontakte ✓ 100% Erfolgsquote ✓ Express möglich
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