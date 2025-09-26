'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function IndustrieabbruchBielefeld() {
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
                Professioneller Industrieabbruch
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Industrieabbruch Bielefeld - Große Projekte sicher gemeistert
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Letzte Woche haben wir die alte Textilfabrik in Brackwede plattgemacht - 12.000 Quadratmeter in nur
              drei Wochen! Wer sagt, <strong>Industrieabbruch in Bielefeld</strong> wär kompliziert, hat noch nie mit
              uns gearbeitet. Nach 25 Jahren kennen wir jeden Trick: von der Asbestsanierung bis zur tonnenschweren
              Maschinendemontage. Egal ob Fabrikhalle, Kraftwerk oder Lagerkomplex - wir kriegen alles klein, sauber
              und termingerecht.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '250+', label: 'Industrieprojekte' },
              { number: '500t', label: 'Größte Einzelmaschine' },
              { number: '100%', label: 'Recyclingquote' },
              { number: '24/7', label: 'Verfügbarkeit' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Industrieabbruch-Services</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Speziallösungen für komplexe Industrieprojekte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fabrikabbruch',
                description: 'Komplettabbruch von Produktionshallen und Fabrikgebäuden inklusive Fundamententfernung.'
              },
              {
                title: 'Maschinendemontage',
                description: 'Fachgerechte Demontage und Entsorgung von Industrieanlagen und Produktionsmaschinen.'
              },
              {
                title: 'Kraftwerksrückbau',
                description: 'Spezialisierter Rückbau von Kraftwerksanlagen mit höchsten Sicherheitsstandards.'
              },
              {
                title: 'Tanklagerabbruch',
                description: 'Sichere Demontage von Tanklagern und chemischen Anlagen mit Schadstoffsanierung.'
              },
              {
                title: 'Hallenentkernung',
                description: 'Selektive Entkernung von Industriehallen bei Erhalt der Gebäudehülle.'
              },
              {
                title: 'Betonsägen & Bohren',
                description: 'Präzise Betonschnitte für kontrollierte Teilabbrüche in laufenden Betrieben.'
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
              Strukturiert und sicher zum erfolgreichen Projektabschluss
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Bestandsaufnahme', desc: 'Detaillierte Analyse vor Ort' },
              { step: '02', title: 'Konzepterstellung', desc: 'Maßgeschneiderter Abbruchplan' },
              { step: '03', title: 'Durchführung', desc: 'Professionelle Umsetzung' },
              { step: '04', title: 'Dokumentation', desc: 'Lückenlose Nachweise' }
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
                Gestern Morgen um 6 klingelte das Telefon - Notfall in Sennestadt. Die alte Druckerei musste
                raus, und zwar schnell! Der neue Eigentümer wollte schon nächsten Monat mit dem Neubau anfangen.
                "Kein Problem", haben wir gesagt. Mit unseren Großgeräten und 15 Mann waren wir in drei Stunden
                vor Ort. Sowas is <strong>Industrieabbruch in Bielefeld</strong> - schnell, professionell und
                ohne Überraschungen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Fabrikabbruch
              </h2>
              <p className="mb-6">
                Fabrikabbruch is unser täglich Brot. Die ganzen alten Textilfabriken in Bielefeld - wir haben
                schon mindestens 20 davon plattgemacht. Das Schwierige dabei? Die Dinger sind oft viel stabiler
                gebaut als man denkt. Stahlbeton aus den 50ern, der hält ewig! Letzte Woche in der Ravensberger
                Spinnerei, da haben wir mit dem 50-Tonnen-Bagger angefangen - der erste Schlag, und der Beton
                hat nur gelacht. Da mussten die schweren Geschütze ran: Abbruchzange mit 120 Tonnen Beißkraft.
              </p>
              <p className="mb-6">
                Bei jedem Fabrikabbruch gibts Überraschungen. Alte Öltanks im Boden, von denen keiner mehr wusste.
                Asbestplatten hinter der Wandverkleidung. Oder wie neulich in Heepen - da war noch ne komplette
                Druckmaschine einbetoniert im Keller! 40 Tonnen schwer, keiner wusste mehr davon. Aber das macht
                nix, wir haben für alles das richtige Werkzeug. Plasmaschneidbrenner, Seilsägen, hydraulische
                Scheren - damit kriegen wir alles klein.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Maschinendemontage
              </h2>
              <p className="mb-6">
                Maschinendemontage is wie Operation am offenen Herzen - nur in groß und dreckig. Letztens bei
                Gildemeister, die wollten ihre alte Transferstraße raus haben. 200 Meter lang, 500 Tonnen schwer,
                und alles voller Öl und Späne. Erstmal mussten wir das Ding entölen - 8.000 Liter Hydrauliköl
                und Kühlschmiermittel! Alles fachgerecht abgesaugt und entsorgt, sonst gibts richtig Ärger vom
                Umweltamt.
              </p>
              <p className="mb-6">
                Die Zerlegung selbst is dann Millimeterarbeit. Manche Teile kann man noch verkaufen - die
                Chinesen kaufen gerne gebrauchte deutsche Maschinen. Also vorsichtig zerlegen, dokumentieren,
                verpacken. Andere Teile sind nur noch Schrott - ab in den Container und zur Schmelze. Bei der
                Gildemeister-Anlage haben wir drei Wochen gebraucht, aber am Ende war die Halle leer und der
                Kunde zufrieden. 80% der Maschine konnten wir sogar noch verwerten!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kraftwerksrückbau
              </h2>
              <p className="mb-6">
                Kraftwerksrückbau is die Königsklasse vom Industrieabbruch. Das alte Heizkraftwerk in Bielefeld-Mitte,
                das haben wir vor zwei Jahren zurückgebaut. 80 Meter hoher Schornstein, dicke Kesselanlagen,
                kilometerweise Rohrleitungen. Sowas macht man nicht mal eben. Erstmal monatelange Planung mit
                Statikern, Umweltgutachtern und Sicherheitsexperten. Der Schornstein allein - 3.000 Tonnen Beton
                und Ziegel. Den sprengen geht nicht mitten in der Stadt, also Stück für Stück von oben.
              </p>
              <p className="mb-6">
                Das Verrückteste war die Turbinenhalle. Die alte Dampfturbine von Siemens, Baujahr 1962, die
                wog allein 120 Tonnen. Die musste raus, aber die Halle hatte nur ein 10-Tonnen-Kran. Also haben
                wir einen 500-Tonnen-Mobilkran kommen lassen, Dach aufgeschnitten und das Monster rausgehoben.
                Der Verkehr musste gesperrt werden, die Anwohner waren alle am gucken. Sowas vergisst man nicht!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Tanklagerabbruch
              </h2>
              <p className="mb-6">
                Tanklager sind immer heikel - da war mal was drin, und keiner weiß mehr genau was. Bei der alten
                Tankstelle an der Herforder Straße, da standen noch fünf unterirdische Tanks. Benzin, Diesel,
                Heizöl - alles durcheinander. Erstmal musste ein Gutachter ran, Bodenproben nehmen. Klar,
                kontaminiert bis zum geht nicht mehr. Also erst sanieren, dann abbrechen. Die Tanks mussten
                ausgepumpt, gereinigt und entgast werden. Eine falsche Bewegung und es knallt!
              </p>
              <p className="mb-6">
                Wir arbeiten da nur mit zertifizierten Fachfirmen zusammen. Die kommen mit Spezialsaugwagen,
                Ex-geschützten Pumpen und Gasmeßgeräten. Erst wenn die ihr OK geben, fangen wir mit dem Abbruch
                an. Die Tanks werden dann aufgeschnitten und als Sondermüll entsorgt. Der kontaminierte Boden
                muss auch raus - manchmal bis 5 Meter tief. Am Ende kommt sauberer Boden rein und alles wird
                dokumentiert. Das Umweltamt prüft das genau!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Hallenentkernung
              </h2>
              <p className="mb-6">
                Hallenentkernung is was für Spezialisten. Die Hülle bleibt stehen, aber innen muss alles raus.
                Neulich bei ThyssenKrupp in Brackwede - die wollten ihre alte Montagehalle modernisieren.
                Stahlkonstruktion von 1965, noch top in Schuss, aber innen total veraltet. Alte Kranbahnen,
                Zwischendecken, Büroeinbauten - alles musste raus. Aber vorsichtig! Ein falscher Schnitt und
                die Statik is im Eimer.
              </p>
              <p className="mb-6">
                Wir haben erstmal alles vermessen und mit dem Statiker einen Plan gemacht. Was is tragend, was
                kann weg? Dann systematisch von oben nach unten. Die alten Asbestplatten in der Decke waren
                die größte Überraschung - 2.000 Quadratmeter! Da kam die Sanierungsfirma, alles abgeschottet,
                Unterdruck, Schutzanzüge. Drei Wochen nur für den Asbest. Danach konnten wir mit schwerem Gerät
                ran. Am Ende war die Halle leer wie ne Kathedrale - bereit für den Neuaufbau.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Betonsägen & Bohren
              </h2>
              <p className="mb-6">
                Betonsägen und Bohren klingt einfach, is aber hohe Kunst. Wenn in ner laufenden Fabrik ne neue
                Maschine rein soll, können wir nicht mit dem Abbruchbagger anrücken. Da muss millimetergenau
                gearbeitet werden. Letzte Woche bei Schüco - neue Produktionslinie, aber die Tür war zu klein.
                Also: Wanddurchbruch, 6 Meter breit, 4 Meter hoch, 80 Zentimeter dicker Stahlbeton. Mit unserer
                Seilsäge haben wir das in einem Tag geschafft, sauber und ohne Erschütterungen.
              </p>
              <p className="mb-6">
                Das Geheimnis is die richtige Technik. Diamantseilsägen für große Schnitte, Wandsägen für präzise
                Arbeiten, Kernbohrungen für Durchführungen. Alles wassergekühlt, damit kein Staub entsteht. Bei
                Schüco lief die Produktion nebenan weiter - die haben nix gemerkt! Der ausgesägte Block wurde
                dann mit dem Kran rausgehoben - 45 Tonnen am Stück. Sowas macht nicht jeder, aber wir haben
                das Equipment und die Erfahrung dafür.
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihren Industrieabbruch?
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre Erfahrung mit Großprojekten in ganz OWL. Wir haben die Maschinen,
                  das Know-how und die richtigen Leute für jeden Industrieabbruch. Von der
                  kleinen Werkshalle bis zum kompletten Fabrikgelände.
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Modernster Maschinenpark bis 120 Tonnen</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Zertifizierte Schadstoffsanierung</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 24/7 Notfallservice</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Komplette Entsorgungsdokumentation</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Festpreisgarantie bei Großprojekten</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Industriegebiete Bielefeld</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Wir kennen jedes Industriegebiet und jeden Gewerbehof
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Industriegebiet Ost',
              'Gewerbepark Oldentrup',
              'Brackwede Süd',
              'Sennestadt Industrie',
              'Jöllenbeck Nord',
              'Heepen Gewerbegebiet',
              'Altenhagen Industriepark',
              'Quelle Gewerbegebiet',
              'Sieker Industriegebiet'
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
              Häufige Fragen zum Industrieabbruch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet ein Industrieabbruch?',
                a: 'Das hängt von der Größe ab. Ne kleine Halle gibts ab 50.000€, große Fabriken können Millionen kosten. Wir machen immer ne kostenlose Besichtigung und ein Festpreisangebot.'
              },
              {
                q: 'Wie lange dauert so ein Projekt?',
                a: 'Von 2 Wochen bis 6 Monate, je nach Größe. Ne normale Fabrikhalle is in 4-6 Wochen weg, inklusive Entsorgung und Dokumentation.'
              },
              {
                q: 'Was ist mit Schadstoffen?',
                a: 'Wir haben alle Zertifikate für Asbestsanierung und Schadstoffentsorgung. Erstmal Gutachten, dann fachgerechte Sanierung, alles dokumentiert.'
              },
              {
                q: 'Können Maschinen verkauft werden?',
                a: 'Klar! Wir haben Kontakte zu Maschinenhändlern weltweit. Oft lässt sich noch gutes Geld mit alten Anlagen machen. Das rechnen wir direkt gegen.'
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
              Industrieabbruch in Bielefeld? Wir packen's an!
            </h2>
            <p className="text-sky-100/80 mb-8">
              Große Maschinen ✓ Erfahrene Profis ✓ Festpreise ✓ Termingarantie
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