'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';

export default function TeilentkernungBielefeld() {
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
      <section className="relative pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Selektive Gebäudeentkernung mit Präzision
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Teilentkernung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzte Woche in nem Bürokomplex am Jahnplatz - nur das 3. OG sollte entkernt werden,
              die anderen Etagen blieben in Betrieb. Sowas is knifflig, aber genau unser Ding.
              Bei Teilentkernung Bielefeld räumen wir gezielt nur die Bereiche, die Sie brauchen.
              Der Rest bleibt unberührt.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '750+', label: 'Teilentkernungen' },
              { number: '0', label: 'Betriebsunterbrechungen' },
              { number: '24/7', label: 'Lärmarm möglich' },
              { number: '100%', label: 'Staubfrei' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Opening Story */}
            <div className="mb-12 p-8 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-2xl">
              <p className="text-white/90 text-lg leading-relaxed">
                Vorgestern kam n Anruf von ner Hausverwaltung in Schildesche: "Wir modernisieren
                nur die obersten zwei Etagen, unten wohnen noch Mieter. Geht das?" Klar geht das!
                Teilentkernung Bielefeld heißt: Wir arbeiten chirurgisch genau. Staubschutzwände,
                Lärmschutz, alles so dass die anderen Mieter kaum was mitkriegen. Das is unsere
                Spezialität seit über 10 Jahren.
              </p>
            </div>

            {/* Teilentkernung von Bürogebäuden */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Teilentkernung von Bürogebäuden
              </h2>
              <p className="text-white/80 mb-6">
                In Bielefeld gibts viele Bürogebäude wo nur einzelne Etagen modernisiert werden.
                Besonders am Niederwall und in der Altstadt - da bleiben oft Kanzleien oder Praxen
                im Betrieb während obendrüber entkernt wird. Wir haben das System perfektioniert:
                Abschottung, kontrollierte Staubabsaugung, Arbeiten außerhalb der Geschäftszeiten.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-sky-300 mb-3">Typische Szenarien:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Einzelne Etagen bei laufendem Betrieb</li>
                    <li>• Nur Sanitärbereiche erneuern</li>
                    <li>• Serverräume während IT läuft</li>
                    <li>• Einzelne Bürotrakte umbauen</li>
                    <li>• Empfangsbereiche modernisieren</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-sky-300 mb-3">Unsere Schutzmaßnahmen:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Staubdichte Folienwände</li>
                    <li>• Unterdruckhaltung im Arbeitsbereich</li>
                    <li>• Schallschutzmatten</li>
                    <li>• Separate Baustellenzugänge</li>
                    <li>• Tägliche Reinigung der Verkehrswege</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Teilentkernung in Wohngebäuden */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Teilentkernung in Wohngebäuden
              </h2>
              <p className="text-white/80 mb-6">
                Grad letzte Woche in Brackwede - Altbau mit 6 Parteien, nur zwei Wohnungen im
                2. OG sollten entkernt werden. Die Nachbarn drunter und drüber wollten bleiben.
                Kein Problem! Mit unseren Spezialmatten dämpfen wir den Lärm so gut, dass man
                unten kaum was hört. Und Staub? Gibts bei uns nich - alles wird direkt abgesaugt.
              </p>
              <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/10 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 font-semibold mb-2">Wichtig für Bewohner:</p>
                <p className="text-white/80">
                  Wir arbeiten nach Absprache - früh morgens, spät abends oder am Wochenende.
                  Je nachdem wanns am wenigsten stört. Bei älteren Mietern oder Familien mit
                  Kleinkindern passen wir uns an. Das kostet vielleicht bisschen mehr, aber
                  der Hausfrieden is wichtiger als paar Euro.
                </p>
              </div>
            </div>

            {/* Selektiver Rückbau einzelner Bereiche */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Selektiver Rückbau einzelner Bereiche
              </h2>
              <p className="text-white/80 mb-6">
                Manchmal solls nur die Küche sein. Oder nur die Bäder. Oder nur die alten
                Heizkörper und Rohre. Bei Teilentkernung in Bielefeld machen wir genau das
                was Sie brauchen - nicht mehr und nicht weniger. Jeder Quadratmeter der
                stehenbleibt spart Geld und Zeit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { title: 'Küchen & Bäder', desc: 'Nur Nasszellen entkernen, Rest bleibt' },
                  { title: 'Haustechnik', desc: 'Alte Leitungen raus, Struktur bleibt' },
                  { title: 'Trennwände', desc: 'Neue Raumaufteilung ohne Komplettsanierung' }
                ].map((service, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 rounded-lg">
                    <h4 className="text-sky-300 font-bold mb-2">{service.title}</h4>
                    <p className="text-white/70 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Arbeiten bei laufendem Betrieb */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Arbeiten bei laufendem Betrieb
              </h2>
              <p className="text-white/80 mb-6">
                Das Schwierigste an Teilentkernung? Der laufende Betrieb drumrum! Wir haben
                schon in Krankenhäusern gearbeitet, in Schulen, in Seniorenheimen. Überall wo
                man nich einfach alle rausschmeißen kann. Da brauchts Erfahrung und die richtigen
                Techniken.
              </p>
              <div className="space-y-4">
                {[
                  { place: 'Arztpraxen', method: 'Nachtarbeit und Wochenenden, Staubschutz Klasse H' },
                  { place: 'Hotels', method: 'Etagenweise, Gäste umquartieren, Lärmschutz maximal' },
                  { place: 'Einzelhandel', method: 'Nach Ladenschluss, vor Öffnung fertig' },
                  { place: 'Schulen', method: 'Nur in Ferien, Sicherheit höchste Priorität' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-800/30 to-sky-900/10 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mt-2"></div>
                    </div>
                    <div>
                      <h4 className="text-sky-300 font-bold">{item.place}</h4>
                      <p className="text-white/70 text-sm">{item.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statik und Sicherheit */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Statik und Sicherheit bei Teilentkernung
              </h2>
              <p className="text-white/80 mb-6">
                Bei Teilentkernung is die Statik noch wichtiger als bei Komplettentkernung.
                Jede Wand die wir rausnehmen wird vorher vom Statiker geprüft. Besonders in
                den Altbauten in der Bielefelder Altstadt - da trägt manchmal ne Wand wo mans
                nich denkt. Safety first, immer!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-red-900/20 to-orange-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-red-300 mb-3">Vor jedem Projekt:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Statische Prüfung aller Wände</li>
                    <li>• Abstützkonzept wenn nötig</li>
                    <li>• Schwingungsmessungen</li>
                    <li>• Rissmonitoring bei Nachbarwänden</li>
                    <li>• Dokumentation für Versicherung</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-green-300 mb-3">Während der Arbeit:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Tägliche Sicherheitschecks</li>
                    <li>• Erschütterungsarme Techniken</li>
                    <li>• Sofortiger Stopp bei Problemen</li>
                    <li>• Ständige Kommunikation mit Bewohnern</li>
                    <li>• Notfallplan liegt immer bereit</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lärmschutz und Staubschutz */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Lärmschutz und Staubschutz
              </h2>
              <p className="text-white/80 mb-6">
                "Wie laut wirds denn?" - die Frage höre ich täglich. Ehrliche Antwort: Leise
                wirds nie beim Entkernen. Aber wir machens so leise wie möglich. Mit Diamantsägen
                statt Presslufthammer, mit Handarbeit statt Maschine wenns sein muss. Kostet mehr,
                aber die Nachbarn danken es.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Schallschutzwände', 'Vibrationsdämpfer', 'Lärmschutzmatten', 'Zeitfenster-Planung', 'Handarbeit wo möglich', 'Modernste Geräte'].map((method) => (
                  <span key={method} className="px-4 py-2 bg-gradient-to-r from-blue-800/30 to-sky-800/20 rounded-full text-blue-200 text-sm">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Lokale Projekte und Referenzen */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Teilentkernung in Bielefelder Stadtteilen
              </h2>
              <p className="text-white/80 mb-6">
                Von Jöllenbeck bis Sennestadt - wir kennen jeden Winkel in Bielefeld. Die engen
                Gassen in der Altstadt brauchen andere Lösungen als die großen Bürokomplexe in
                Heepen. Nach 15 Jahren Teilentkernung in Bielefeld wissen wir genau, was wo geht
                und was nich.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { area: 'Altstadt', special: 'Denkmalschutz beachten' },
                  { area: 'Brackwede', special: 'Viele Altbauten, sensible Statik' },
                  { area: 'Mitte', special: 'Lärmschutz für Geschäfte' },
                  { area: 'Schildesche', special: 'Enge Bebauung, wenig Platz' },
                  { area: 'Heepen', special: 'Moderne Bürogebäude' },
                  { area: 'Sennestadt', special: 'Plattenbauten, spezielle Technik' }
                ].map((item) => (
                  <div key={item.area} className="p-4 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-lg">
                    <p className="text-sky-300 font-bold">{item.area}</p>
                    <p className="text-white/60 text-sm mt-1">{item.special}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ablauf einer Teilentkernung */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                So läuft Ihre Teilentkernung ab
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Bestandsaufnahme', desc: 'Wir schauen genau: Was soll raus, was bleibt? Wo sind die kritischen Punkte? Wer is noch im Haus? Alles wird dokumentiert.' },
                  { step: '2', title: 'Schutzkonzept', desc: 'Bevor wir anfangen, bauen wir den kompletten Schutz auf. Staubwände, Lärmschutz, Wegeführung. Erst wenn alles safe is, gehts los.' },
                  { step: '3', title: 'Etappenweise Entkernung', desc: 'Wir arbeiten Bereich für Bereich. Jeden Tag räumen wir auf, damit die anderen Nutzer möglichst wenig gestört werden.' },
                  { step: '4', title: 'Qualitätskontrolle', desc: 'Nach jedem Abschnitt prüfen wir: Statik ok? Nachbarn zufrieden? Alles sauber? Erst dann gehts weiter.' },
                  { step: '5', title: 'Übergabe', desc: 'Am Ende gibts ne gemeinsame Begehung. Alle Schäden dokumentiert, alle Nachweise übergeben. Alles transparent.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sky-300 mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kosten und Zeitplanung */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Kosten für Teilentkernung in Bielefeld
              </h2>
              <p className="text-white/80 mb-6">
                Teilentkernung is oft teurer pro Quadratmeter als Komplettentkernung. Warum?
                Mehr Aufwand für Schutzmaßnahmen, langsameres Arbeiten, mehr Personal für
                Sicherheit. Aber unterm Strich sparste trotzdem, weil ja nur Teile gemacht werden.
                Als Richtwert: 40-70 Euro pro m² je nach Schwierigkeit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-green-300 mb-3">Kostenfaktoren:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Umfang der Schutzmaßnahmen</li>
                    <li>• Arbeitszeiten (nachts teurer)</li>
                    <li>• Komplexität der Abgrenzung</li>
                    <li>• Statische Sicherungen</li>
                    <li>• Anzahl der Etappen</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-300 mb-3">Zeitplanung:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Einzelne Räume: 2-3 Tage</li>
                    <li>• Ganze Etage: 1-2 Wochen</li>
                    <li>• Mit Betrieb: +30% Zeitaufschlag</li>
                    <li>• Wochenendarbeit möglich</li>
                    <li>• Nachtschichten nach Absprache</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Häufige Fragen zur Teilentkernung
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Können wir während der Teilentkernung im Gebäude bleiben?', a: 'Ja, genau dafür is Teilentkernung da! Mit unseren Schutzmaßnahmen können Sie oder Ihre Mieter meist normal weiterarbeiten oder wohnen. Nur direkt neben dem Arbeitsbereich wirds bisschen lauter.' },
                  { q: 'Wie verhindern Sie Staubbelastung?', a: 'Professionelle Staubschutzwände mit Unterdruck, HEPA-Filter, tägliche Reinigung. Der Staub bleibt da wo er entsteht. Haben sogar schon neben Serverräumen gearbeitet - null Probleme.' },
                  { q: 'Was wenn tragende Wände betroffen sind?', a: 'Dann wirds aufwändiger aber machbar. Temporäre Abstützungen, Stahlträger einziehen, alles möglich. Kostet mehr und dauert länger, aber sicher is es immer.' },
                  { q: 'Wie lange dauert sowas normalerweise?', a: 'Kommt drauf an. Ne einzelne Wohnung schaffen wir in 3-5 Tagen. Ne ganze Etage mit 500m² braucht 2-3 Wochen. Mit laufendem Betrieb dauerts etwa 30% länger.' }
                ].map((faq, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                    <h3 className="text-lg font-bold text-sky-300 mb-2">{faq.q}</h3>
                    <p className="text-white/80">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-16 p-8 bg-gradient-to-br from-sky-900/30 to-blue-900/20 rounded-2xl border border-sky-500/30">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Jetzt Teilentkernung anfragen
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Sie müssen nicht das ganze Gebäude entkernen? Nur einzelne Bereiche modernisieren?
                Perfekt - das is genau unser Ding. Rufen Sie an oder schreiben Sie uns. Wir schauen
                uns das an und machen Ihnen ein faires Angebot. Teilentkernung in Bielefeld -
                präzise, sauber und mit Rücksicht auf alle Beteiligten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+491748083023"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all"
                >
                  📞 Jetzt anrufen: 0174 8083023
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  ✉️ Kostenloses Angebot anfordern
                </Link>
              </div>
            </div>

            {/* Trust Section */}
            <div className="text-center py-12">
              <p className="text-white/60 text-sm mb-4">
                RückbauPRO - Ihr Spezialist für präzise Teilentkernung in Bielefeld und OWL
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">750+</p>
                  <p className="text-white/60 text-sm">Teilentkernungen</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">0</p>
                  <p className="text-white/60 text-sm">Beschwerden</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">100%</p>
                  <p className="text-white/60 text-sm">Staubfrei</p>
                </div>
              </div>
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
    </main>
  );
}