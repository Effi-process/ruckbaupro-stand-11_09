'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function RaeumungRodungBielefeld() {
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
                Professionelle Räumung & Rodung
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              Räumung und Rodung Bielefeld - Alles muss raus, schnell und gründlich
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Gestern kam der Anruf vom Insolvenzverwalter - 5.000 Quadratmeter Gewerbefläche in Oldentrup
              mussten bis Monatsende geräumt werden. "Schaffen wir!", haben wir gesagt. Mit 20 Mann und
              15 Containern war nach vier Tagen alles leer. <strong>Räumung und Rodung in Bielefeld</strong>
              machen wir seit 25 Jahren - von der Wohnungsräumung bis zur kompletten Fabrikauflösung. Wenn's
              schnell gehen muss und nichts liegen bleiben darf, sind wir die Richtigen!
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10.000+', label: 'Räumungen' },
              { number: '48h', label: 'Expressräumung' },
              { number: '100%', label: 'Besenrein' },
              { number: '365', label: 'Tage verfügbar' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Unsere Räumungs- und Rodungsleistungen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Von der Entrümpelung bis zur Grundstücksrodung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Wohnungsräumung',
                description: 'Komplette Räumung von Wohnungen und Häusern inklusive Entsorgung.'
              },
              {
                title: 'Gewerberäumung',
                description: 'Professionelle Räumung von Büros, Läden und Gewerbeflächen.'
              },
              {
                title: 'Messieräumung',
                description: 'Sensible und diskrete Räumung bei Vermüllung und Verwahrlosung.'
              },
              {
                title: 'Grundstücksrodung',
                description: 'Entfernung von Bewuchs, Bäumen und Sträuchern für Bauprojekte.'
              },
              {
                title: 'Kellerräumung',
                description: 'Entrümpelung von Kellern, Dachböden und Garagen.'
              },
              {
                title: 'Industrieräumung',
                description: 'Komplettauflösung von Fabriken und Industrieanlagen.'
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
              Schnell, sauber und zuverlässig zum leeren Objekt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Besichtigung', desc: 'Kostenlose Vor-Ort-Bewertung' },
              { step: '02', title: 'Angebot', desc: 'Transparenter Festpreis' },
              { step: '03', title: 'Räumung', desc: 'Schnelle Durchführung' },
              { step: '04', title: 'Übergabe', desc: 'Besenreine Endreinigung' }
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
                Letzte Woche standen wir vor nem dreistöckigen Mietshaus in Sennestadt. Der Eigentümer
                war verzweifelt: "Die letzten Mieter sind abgehauen, haben alles stehen lassen!" Drei
                Wohnungen voller Müll, der Keller zugestellt, der Garten verwildert. Für uns kein Problem!
                Mit unserem Team war das Haus in zwei Tagen komplett leer und der Garten wieder vorzeigbar.
                <strong> Räumung und Rodung in Bielefeld</strong> heißt für uns: Wir machen aus Chaos wieder
                Ordnung, egal wie schlimm es aussieht!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Wohnungsräumung
              </h2>
              <p className="mb-6">
                Wohnungsräumungen sind unser täglich Brot. Manchmal sinds Nachlässe, wo die Erben nicht
                wissen wohin mit dem ganzen Zeug. Manchmal Zwangsräumungen, wo der Gerichtsvollzieher
                schon wartet. Oder einfach Leute die umziehen und nicht alles mitnehmen wollen. Egal was -
                wir räumen alles raus, sortieren was noch brauchbar is und entsorgen den Rest fachgerecht.
              </p>
              <p className="mb-6">
                Neulich in Brackwede, da war ne 4-Zimmer-Wohnung vom Opa. 50 Jahre hatte der da gewohnt,
                alles voll bis unters Dach! Alte Möbel, tausende Bücher, der komplette Keller voller
                Werkzeug. Die Familie war überfordert. Wir haben alles sortiert - die wertvollen Sachen
                für die Erben beiseite, Bücher zum Antiquariat, Werkzeug zum Flohmarkt. Am Ende waren
                alle zufrieden und die Wohnung war besenrein für den Verkauf.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Gewerberäumung
              </h2>
              <p className="mb-6">
                Gewerberäumungen sind immer Zeitdruck. Der Mietvertrag läuft aus, der neue Mieter steht
                schon vor der Tür, und dazwischen müssen wir ran. Letzte Woche wars ein Callcenter am
                Kesselbrink - 800 Quadratmeter, 50 Arbeitsplätze, alles musste raus. Computer, Möbel,
                kilometerweise Kabel, die komplette Küche. In drei Tagen!
              </p>
              <p className="mb-6">
                Mit System gehts: Erst die Technik - Computer und Server vorsichtig verpacken, die kann
                man oft noch verkaufen. Dann die Möbel - Schreibtische, Stühle, Schränke. Vieles geht
                an soziale Einrichtungen, die freuen sich über gut erhaltene Büromöbel. Der Rest wird
                zerlegt und recycelt. Nach drei Tagen war alles weg, die Räume besenrein. Der Vermieter
                war begeistert - keine Verzögerung, keine Probleme mit dem neuen Mieter.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Messieräumung
              </h2>
              <p className="mb-6">
                Messieräumungen sind die härtesten Einsätze. Da gehts nicht nur um Müll wegräumen, da
                brauchst du Fingerspitzengefühl. Die Menschen schämen sich oft, wollen keine Hilfe annehmen.
                Wir arbeiten diskret, ohne Aufsehen. Keine großen LKWs vor der Tür, keine neugierigen Blicke
                der Nachbarn.
              </p>
              <p className="mb-6">
                Vor zwei Monaten hatten wir so einen Fall in Heepen. Die Sozialarbeiterin hatte uns gerufen,
                die Wohnung war seit Jahren nicht mehr richtig bewohnbar. Müll bis zur Decke, verschimmelte
                Lebensmittel, der Gestank war unbeschreiblich. Mit Schutzanzügen und Atemmasken sind wir
                ran. Drei Tage harte Arbeit, 12 Container Müll. Aber am Ende war die Wohnung wieder bewohnbar.
                Der Mieter konnte nach der Therapie zurückkommen - ein Neuanfang. Sowas macht einen stolz!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Grundstücksrodung
              </h2>
              <p className="mb-6">
                Grundstücksrodung is mehr als nur Bäume fällen. Wenn ein Grundstück bebaut werden soll,
                muss alles weg - Bäume, Sträucher, Hecken, alte Zäune, manchmal sogar alte Fundamente
                die keiner mehr kennt. Neulich in Jöllenbeck, 2.000 Quadratmeter verwildertes Grundstück.
                20 Jahre hatte sich keiner drum gekümmert, ein richtiger Dschungel!
              </p>
              <p className="mb-6">
                Mit schwerem Gerät sind wir angerückt. Erst die großen Bäume - zwei Eichen, 80 Jahre alt,
                die mussten mit Seilwinde und Kran gefällt werden. Dann das Unterholz mit dem Forstmulcher.
                Die Wurzeln mit dem Bagger raus, sonst wachsen die wieder. Am Schluss alles eingeebnet und
                planiert. Nach einer Woche war aus dem Urwald ein baureifes Grundstück geworden. Der Bauträger
                konnte direkt mit den Fundamenten anfangen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kellerräumung
              </h2>
              <p className="mb-6">
                Kellerräumungen unterschätzt man leicht. "Ist ja nur der Keller", denken viele. Aber wenn
                du dann vor 50 Jahren Familiengeschichte stehst, wirds kompliziert. Alte Kohlen, Konserven
                aus den 70ern, Farbreste, Chemikalien - alles muss fachgerecht entsorgt werden. Und die
                Treppen! Alles muss hoch geschleppt werden, oft durch enge Treppenhäuser.
              </p>
              <p className="mb-6">
                In nem Mehrfamilienhaus in Schildesche mussten wir letztens 12 Kellerabteile räumen. Die
                Hausverwaltung wollte Platz für Fahrradstellplätze schaffen. Jedes Abteil ne andere Geschichte -
                alte Weihnachtsdeko, kaputte Waschmaschinen, Berge von alten Zeitungen. Zwei Mann, drei Tage,
                40 Kubikmeter Müll. Aber jetzt haben die Mieter endlich vernünftige Fahrradstellplätze. Manchmal
                muss man halt Platz für Neues schaffen!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Industrieräumung
              </h2>
              <p className="mb-6">
                Industrieräumungen sind die Königsklasse. Da reden wir nicht von ein paar Möbeln, sondern
                von ganzen Fabrikhallen voller Maschinen, Material und Müll. Letzten Monat wars ne alte
                Druckerei in Oldentrup. 5.000 Quadratmeter, drei Hallen voll. Druckmaschinen, Papierberge,
                Farbreste, Chemikalien - alles musste raus.
              </p>
              <p className="mb-6">
                Sowas plant man wie ne Militäroperation. Erst die verwertbaren Maschinen - manche sind
                noch was wert, gehen nach Osteuropa oder Afrika. Dann die Rohstoffe - Metall, Papier,
                Kunststoff, alles wird getrennt und recycelt. Die Chemikalien und Farbreste müssen als
                Sondermüll entsorgt werden, mit allen Papieren und Nachweisen. Nach zwei Wochen waren
                die Hallen leer, bereit für den neuen Eigentümer. 500 Tonnen Material hatten wir bewegt -
                davon 80% recycelt!
              </p>

              <div className="bg-gradient-to-r from-sky-900/30 to-slate-800/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Warum RückbauPRO für Ihre Räumung und Rodung?
                </h3>
                <p className="text-white/90 mb-4">
                  25 Jahre Erfahrung mit über 10.000 Räumungen in ganz OWL. Von der kleinen
                  Kellerräumung bis zur kompletten Fabrikauflösung - wir machen alles leer,
                  schnell und gründlich. Diskret, zuverlässig und immer zum Festpreis!
                </p>
                <ul className="text-sky-100/80 space-y-2">
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ 48-Stunden-Express-Service</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Diskrete Messieräumungen</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Kostenlose Wertanrechnung</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Besenreine Übergabe garantiert</li>
                  <li className="hover:text-sky-200 transition-colors duration-300">✓ Alle Entsorgungsnachweise inklusive</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-white mb-6">Räumung in allen Stadtteilen</h2>
            <p className="text-xl text-sky-100/80 max-w-3xl mx-auto">
              Schnell vor Ort in ganz Bielefeld und Umgebung
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
              Häufige Fragen zu Räumung und Rodung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet eine Räumung?',
                a: 'Das hängt von der Größe ab. Ne normale 3-Zimmer-Wohnung kostet zwischen 800 und 1.500 Euro. Bei verwertbaren Sachen ziehen wir das vom Preis ab. Kostenlose Besichtigung!'
              },
              {
                q: 'Wie schnell könnt ihr räumen?',
                a: 'Im Notfall innerhalb von 48 Stunden! Normal planen wir 3-5 Tage im Voraus. Bei großen Objekten wie Fabriken brauchen wir 1-2 Wochen Vorlauf.'
              },
              {
                q: 'Was macht ihr mit den Sachen?',
                a: 'Verwertbares wird verkauft oder gespendet, der Erlös wird angerechnet. Müll wird fachgerecht entsorgt und recycelt. Alle Entsorgungsnachweise gibts dazu.'
              },
              {
                q: 'Macht ihr auch Messieräumungen?',
                a: 'Ja, diskret und professionell. Unsere Leute sind geschult im Umgang mit solchen Situationen. Wir arbeiten respektvoll und ohne Vorurteile.'
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
              Räumung und Rodung in Bielefeld? Wir machen das!
            </h2>
            <p className="text-sky-100/80 mb-8">
              Express-Service ✓ Festpreis ✓ Besenrein ✓ Diskret & zuverlässig
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