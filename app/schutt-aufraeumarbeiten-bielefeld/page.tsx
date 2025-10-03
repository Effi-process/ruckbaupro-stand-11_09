'use client';
import React, { useEffect, useState } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function SchuttAufraeumarbeitenBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-sky-800/10 to-slate-900/50" />
      </div>
      <div className="relative z-10">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl rounded-full mb-6 border border-sky-400/20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              <span className="text-sm font-bold text-sky-200 uppercase tracking-wider animate-pulse">
                Professionelle Schutt-Aufräumarbeiten
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Schutt-Aufräumarbeiten Bielefeld - Wenn der Dreck weg muss
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Vorgestern wars mal wieder soweit - Baustelle in Sennestadt, überall Schutt und keiner
              weiß wohin damit. Der Polier ruft panisch an: "Morgen kommt die Bauabnahme, aber hier
              siehts aus wie Sau!" Kein Problem für uns! Mit drei LKW und zehn Mann waren wir in vier
              Stunden da. <strong>Schutt-Aufräumarbeiten in Bielefeld</strong> machen wir jeden Tag -
              schnell, gründlich und immer zum Festpreis. Wenn bei Ihnen der Schutt bis zum Himmel
              liegt, räumen wir auf!
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100.000m³', label: 'Schutt pro Jahr' },
              { number: '24h', label: 'Notdienst' },
              { number: '50+', label: 'Container' },
              { number: '99%', label: 'Recyclingquote' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Schutt-Services</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Von der Baustelle bis zur Deponie - alles aus einer Hand
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bauschuttentsorgung',
                description: 'Professionelle Entsorgung von Beton, Ziegel und mineralischem Bauschutt.'
              },
              {
                title: 'Containerservice',
                description: 'Container in allen Größen mit schneller Lieferung und Abholung.'
              },
              {
                title: 'Baustellenräumung',
                description: 'Komplette Räumung und Reinigung von Baustellen.'
              },
              {
                title: 'Erdaushub',
                description: 'Abfuhr und Entsorgung von Erdaushub und Bodenmaterial.'
              },
              {
                title: 'Mischabfallentsorgung',
                description: 'Trennung und fachgerechte Entsorgung gemischter Bauabfälle.'
              },
              {
                title: 'Notfallräumung',
                description: '24-Stunden-Service für dringende Aufräumarbeiten.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Schnell zum sauberen Grundstück</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Von der Anfrage bis zur besenreinen Übergabe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Anruf', desc: 'Schnelle Aufnahme' },
              { step: '02', title: 'Besichtigung', desc: 'Mengenermittlung vor Ort' },
              { step: '03', title: 'Räumung', desc: 'Professionelle Durchführung' },
              { step: '04', title: 'Reinigung', desc: 'Besenreine Übergabe' }
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
                Montag früh, 6 Uhr - das Telefon klingelt. Der Bauleiter vom Neubaugebiet in Heepen
                is dran: "Wir haben ein Problem! Übers Wochenende haben die Subunternehmer allen
                Schutt einfach liegen lassen. In zwei Stunden kommt der Bauherr zur Besichtigung!"
                Sowas kennen wir. Mit fünf Mann und drei Containern waren wir in 45 Minuten da.
                <strong> Schutt-Aufräumarbeiten in Bielefeld</strong> heißt für uns: Wir sind da,
                wenns brennt. Nach drei Stunden war die Baustelle picobello - der Bauherr hat nix gemerkt!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Bauschuttentsorgung
              </h2>
              <p className="mb-6">
                Bauschuttentsorgung is unser Hauptgeschäft. Jeden Tag fahren unsere LKW durch Bielefeld
                und holen tonnenweise Schutt ab. Beton, Ziegel, Fliesen, Estrich - alles was beim Bauen
                und Abreißen anfällt. Das Wichtige dabei: Trennen! Reiner Bauschutt kostet nur nen
                Bruchteil von Mischabfall. Deswegen sortieren wir direkt auf der Baustelle.
              </p>
              <p className="mb-6">
                Letzte Woche bei der Sanierung vom alten Finanzamt - da waren 200 Tonnen Bauschutt
                angefallen. Die Baufirma wollte erst alles als Mischabfall entsorgen - hätte 15.000 Euro
                gekostet! Wir haben sortiert: 150 Tonnen reiner Bauschutt für 3.000 Euro, 30 Tonnen
                Holz fürs Biomassekraftwerk, 20 Tonnen Metall haben sogar noch Geld gebracht. Am Ende
                nur 5.000 Euro statt 15.000 - der Bauleiter war happy!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Containerservice
              </h2>
              <p className="mb-6">
                Container stellen wir überall in Bielefeld - meist noch am selben Tag! Von 5 Kubik für
                die kleine Badsanierung bis 40 Kubik für große Abbruchprojekte. Die meisten nehmen 10er
                oder 15er Container, die passen gut auf normale Stellplätze. Wichtig: Immer ne
                Stellgenehmigung beantragen wenn der Container auf öffentlichem Grund steht!
              </p>
              <p className="mb-6">
                Bei der Kernsanierung in der Altstadt letztens - da musste der Container auf die Straße.
                Stellgenehmigung vom Ordnungsamt, Halteverbotszone einrichten, Warnbaken aufstellen.
                Wir machen das alles für unsere Kunden! Kostet zwar 150 Euro extra, aber dafür gibts
                keinen Ärger. Der Container stand zwei Wochen, wurde dreimal getauscht. Alles lief
                reibungslos - so muss das sein!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Baustellenräumung
              </h2>
              <p className="mb-6">
                Baustellenräumung machen wir komplett - vom groben Schutt bis zur Feinreinigung. Viele
                Baufirmen unterschätzen, wieviel Dreck bei nem Bauprojekt anfällt. Verpackungsmaterial,
                Paletten, Folien, Styropor, Kabelreste - das sammelt sich! Und am Ende muss alles weg,
                sonst gibts Ärger bei der Abnahme.
              </p>
              <p className="mb-6">
                Beim Neubau der Sparkassenfiliale in Brackwede wars extrem. Die Handwerker hatten
                wochenlang gearbeitet, jeder hat seinen Müll liegen lassen. Zwei Tage vor Eröffnung
                sah's aus wie nach nem Bombenangriff! Wir sind mit 15 Mann angerückt: sortieren,
                aufladen, wegfahren, saubermachen. 18 Container Müll in zwei Tagen! Die Filiale
                konnte pünktlich eröffnen - der Filialleiter hat uns Blumen geschickt.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Erdaushub
              </h2>
              <p className="mb-6">
                Erdaushub is so ne Sache - sieht nach nix aus, aber die Mengen! Bei nem normalen
                Einfamilienhaus-Keller kommen schnell 500 Kubikmeter zusammen. Das sind 20 LKW-Ladungen!
                Und wohin damit? Nicht jede Deponie nimmt Erdaushub, und die Preise schwanken stark.
                Wir haben Verträge mit allen Deponien in der Region und finden immer die günstigste Lösung.
              </p>
              <p className="mb-6">
                Bei der Tiefgarage am Kesselbrink letzten Sommer - 8.000 Kubikmeter Erdaushub! Der
                Bauträger wollte das erst auf die Deponie fahren lassen - 200.000 Euro hätte das
                gekostet. Wir haben nen Abnehmer gefunden: Ein Landwirt in Gütersloh brauchte Erde
                für die Geländemodellierung. Der hat sogar noch was bezahlt! Statt 200.000 Euro
                Kosten gabs 30.000 Euro Erlös. Manchmal muss man nur die richtigen Leute kennen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Mischabfallentsorgung
              </h2>
              <p className="mb-6">
                Mischabfall is der teuerste Posten bei der Entsorgung. Da is alles drin durcheinander -
                Holz, Metall, Kunststoff, Gips, Dämmung. Das muss auf der Deponie von Hand sortiert
                werden, deswegen die hohen Preise. Aber manchmal lässt sichs nicht vermeiden, besonders
                bei Sanierungen wo alles kreuz und quer liegt.
              </p>
              <p className="mb-6">
                Die Komplettsanierung vom alten Krankenhaus in Bethel - da war soviel verschiedenes
                Material, das hätte Wochen gedauert alles zu sortieren. Abgehängte Decken mit Metallträgern
                und Mineralwolle, PVC-Böden auf Estrich geklebt, Rigipswände mit Elektrokabeln drin.
                Da haben wir gesagt: Mischabfall, aber dafür schnell! 50 Container in einer Woche.
                Hat zwar 40.000 Euro gekostet, aber die Zeit wars wert. Der Neubau konnte pünktlich starten.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Notfallräumung
              </h2>
              <p className="mb-6">
                Notfallräumungen sind unser Spezialgebiet - 24/7 erreichbar! Wasserrohrbruch und der
                ganze Schutt muss sofort raus? Sturmschaden und das Dach liegt auf der Straße?
                Baustellenunfall und alles muss schnell aufgeräumt werden? Wir sind da! Mit unserer
                Notfallnummer erreichen Sie immer jemanden, auch nachts und am Wochenende.
              </p>
              <p className="mb-6">
                Letzten Winter, Silvesterabend, 22 Uhr - Anruf von der Feuerwehr. Ein Carport in
                Schildesche war unter der Schneelast zusammengebrochen, blockierte die Hauptstraße.
                Wir sind sofort los, mit Kran und Container. Um Mitternacht war die Straße wieder
                frei! Die Feuerwehr war beeindruckt, die Anwohner konnten Silvester feiern. Sowas
                vergisst keiner - deswegen rufen die immer wieder uns an wenn's brennt.
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihre Schutt-Aufräumarbeiten?
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre Erfahrung, modernste Technik und ein Team das anpackt. Wir räumen
                  auf wo andere kapitulieren - schnell, sauber und zu fairen Preisen. Von der
                  kleinen Renovierung bis zur Großbaustelle!
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 24-Stunden-Notdienst</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Festpreisgarantie</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Container in allen Größen</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 99% Recyclingquote</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Entsorgungsnachweise inklusive</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Schuttentsorgung in ganz Bielefeld</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Container und Abholung in allen Stadtteilen
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
              Häufige Fragen zu Schutt-Aufräumarbeiten
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet die Schuttentsorgung?',
                a: 'Reiner Bauschutt kostet 20-30 Euro pro Tonne. Mischabfall 150-200 Euro. Container gibts ab 150 Euro plus Entsorgung. Festpreis nach Besichtigung!'
              },
              {
                q: 'Wie schnell könnt ihr Container stellen?',
                a: 'Normal innerhalb von 24 Stunden. Bei Notfällen auch sofort! Abholung meist am nächsten Werktag nach Anruf.'
              },
              {
                q: 'Brauche ich eine Stellgenehmigung?',
                a: 'Auf Privatgrund nicht. Auf öffentlichen Straßen ja - kostet 100-200 Euro. Wir kümmern uns drum wenn gewünscht!'
              },
              {
                q: 'Was darf nicht in den Bauschutt?',
                a: 'Kein Holz, Kunststoff, Gips oder Dämmmaterial! Das macht aus Bauschutt teuren Mischabfall. Asbest und Sondermüll brauchen spezielle Entsorgung.'
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
              Schutt-Aufräumarbeiten in Bielefeld? Wir packens an!
            </h2>
            <p className="text-sky-100/80 mb-8">
              24h-Service ✓ Festpreise ✓ Container ✓ Saubere Arbeit
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
                Container bestellen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Background Image */}
      <section className="relative">
        /* Related Services - Internal Linking for SEO */

        <RelatedServicesBielefeld currentSlug="schutt-aufraeumarbeiten-bielefeld" category="entsorgung" maxServices={6} />

 purpose="quote" />
      </section>

      {/* Footer */}
      <FooterWithMarquee />
      </div>
    </main>
  );
}
