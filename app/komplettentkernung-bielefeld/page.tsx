'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';

export default function KomplettentkernungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Professionelle Gebäudeentkernung seit 2009
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Komplettentkernung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Gestern ham wir das alte Sparkassengebäude am Kesselbrink fertig gemacht -
              4.200 m² in nur einer Woche komplett entkernt. Bei Komplettentkernung Bielefeld
              räumen wir alles raus bis auf die tragenden Wände. Sauber, schnell und zum Festpreis.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1.200+', label: 'Komplettentkernungen' },
              { number: '72h', label: 'Express möglich' },
              { number: '98%', label: 'Recycling' },
              { number: '0', label: 'Unfälle' }
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
                Vorletzte Woche ruft uns der Projektleiter von nem großen Immobilienentwickler
                an: "Jungs, wir haben ein ehemaliges Verwaltungsgebäude in Sennestadt gekauft.
                5 Etagen, 3.800 Quadratmeter, alles muss raus bis Montag!" Kein Problem, haben
                wir gesagt. Mit drei Teams gleichzeitig ran, systematisch von oben nach unten.
                Freitag Nachmittag warn wir fertig - zwei Tage früher als geplant. Das is
                Komplettentkernung Bielefeld - schnell, sauber und zuverlässig.
              </p>
            </div>

            {/* Komplettentkernung von Bürogebäuden */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Komplettentkernung von Bürogebäuden
              </h2>
              <p className="text-white/80 mb-6">
                Die meisten Bürogebäude in Bielefeld - egal ob am Jahnplatz, in der Altstadt
                oder draußen in Heepen - die sind voll mit Trennwänden, abgehängten Decken
                und kilometerlangen Kabelkanälen. Wir machen alles raus, wirklich alles. Nur
                die Betonwände und Stahlträger bleiben stehn. Nach unserer Komplettentkernung
                haben Sie ne leere Hülle, bereit für was ganz Neues.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-sky-300 mb-3">Was alles rauskommt:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Sämtliche Trennwände und Glaswände</li>
                    <li>• Komplette Elektroinstallation inkl. Serverräume</li>
                    <li>• Heizung, Lüftung, Klimaanlagen</li>
                    <li>• Alle Bodenbeläge und Unterböden</li>
                    <li>• Abgehängte Decken und Deckensysteme</li>
                    <li>• Sanitäreinrichtungen komplett</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-sky-300 mb-3">Unser Ablauf:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Tag 1-2: Demontage aller losen Teile</li>
                    <li>• Tag 3-4: Rückbau der Installationen</li>
                    <li>• Tag 5-6: Entfernung der Trennwände</li>
                    <li>• Tag 7: Bodenbeläge und Unterböden</li>
                    <li>• Tag 8: Endreinigung und Übergabe</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Komplettentkernung von Industriegebäuden */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Komplettentkernung von Industriegebäuden
              </h2>
              <p className="text-white/80 mb-6">
                Industriehallen in Bielefeld - besonders die alten in Brackwede oder Oldentrup -
                da steckt oft mehr drin als man denkt. Alte Maschinen, Öltanks, Druckluftsysteme,
                schwere Kranbahnen... Wir haben schon über 200 Industriegebäude in OWL entkernt.
                Mit schwerem Gerät und erfahrenen Leuten. Auch wenns mal richtig dreckig wird -
                wir packen das.
              </p>
              <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/10 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 font-semibold mb-2">Achtung bei Altlasten:</p>
                <p className="text-white/80">
                  In alten Industriegebäuden gibts oft Überraschungen - Asbest in den Rohrleitungen,
                  PCB in den Fugen, Öl im Boden. Wir prüfen vorher alles genau und haben die
                  nötigen Zertifikate für Schadstoffsanierung. TRGS 519, TRGS 521, alles dabei.
                  Keine bösen Überraschungen, keine Nachträge.
                </p>
              </div>
            </div>

            {/* Komplettentkernung von Wohngebäuden */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Komplettentkernung von Wohngebäuden
              </h2>
              <p className="text-white/80 mb-6">
                Letzte Woche in Schildesche - ein Mehrfamilienhaus aus den 50ern, sollte
                kernsaniert werden. 12 Wohnungen, alle noch mit Original-Ausstattung. Alte
                Öfen, marode Elektrik, Bleirohre... alles musste raus. Bei Wohngebäuden muss
                man vorsichtig sein - oft is die Bausubstanz schlechter als gedacht. Aber wir
                wissen worauf wir achten müssen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { title: 'Küchen & Bäder', desc: 'Komplette Demontage aller Einbauten' },
                  { title: 'Alte Heizungen', desc: 'Öltanks, Nachtspeicher, alte Kessel raus' },
                  { title: 'Böden & Wände', desc: 'Alle nicht-tragenden Elemente entfernt' }
                ].map((service, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 rounded-lg">
                    <h4 className="text-sky-300 font-bold mb-2">{service.title}</h4>
                    <p className="text-white/70 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schadstoffsanierung bei Komplettentkernung */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Schadstoffsanierung bei Komplettentkernung
              </h2>
              <p className="text-white/80 mb-6">
                In fast jedem Gebäude in Bielefeld, das vor 1990 gebaut wurde, finden wir
                Schadstoffe. Asbest in Bodenbelägen, KMF in der Dämmung, PAK in alten
                Klebern... Das gehört bei ner Komplettentkernung dazu. Wir sind zertifiziert
                für alle Schadstoffe und machen das gleich mit. Ein Auftrag, ein Preis, keine
                Verzögerungen durch verschiedene Firmen.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Asbestsanierung', 'KMF-Entsorgung', 'PCB-Sanierung', 'PAK-Entfernung', 'Bleisanierung', 'Schimmelsanierung'].map((material) => (
                  <span key={material} className="px-4 py-2 bg-gradient-to-r from-red-800/30 to-orange-800/20 rounded-full text-orange-200 text-sm">
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Entsorgung und Recycling */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Entsorgung und Recycling bei Komplettentkernung
              </h2>
              <p className="text-white/80 mb-6">
                Bei der letzten Komplettentkernung am Niederwall - 25 Container voll. Aber
                fast alles davon wird recycelt. Metall zum Schrotthändler (bringt sogar noch
                Geld), Holz in die Verwertung, Bauschutt wird aufbereitet. Nur etwa 5% landet
                wirklich auf der Deponie. Das spart Kosten und is gut für die Umwelt. Alle
                Entsorgungsnachweise gibts digital - alles sauber dokumentiert fürs Finanzamt.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { material: 'Metall', rate: '100%', value: 'Erlös' },
                  { material: 'Holz', rate: '95%', value: 'Verwertung' },
                  { material: 'Bauschutt', rate: '90%', value: 'Recycling' },
                  { material: 'Restmüll', rate: '5%', value: 'Deponie' }
                ].map((item) => (
                  <div key={item.material} className="text-center p-3 bg-gradient-to-br from-green-800/20 to-emerald-800/10 rounded-lg">
                    <p className="text-green-300 font-semibold">{item.material}</p>
                    <p className="text-white text-2xl font-bold">{item.rate}</p>
                    <p className="text-white/60 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Zeitplanung und Logistik */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Zeitplanung und Logistik
              </h2>
              <p className="text-white/80 mb-6">
                "Wie lange dauert denn sowas?" - die Frage kriegen wir täglich. Als Richtwert:
                Ein normales Bürogebäude mit 1000m² schaffen wir in 5-7 Tagen. Größere Objekte
                mit mehreren Teams parallel. Wir haben schon 10.000m² in zwei Wochen geschafft.
                Alles ne Frage der Organisation. Container rechtzeitig bestellen, genug Leute
                einplanen, Maschinen bereithalten - dann läufts.
              </p>
              <div className="space-y-4">
                {[
                  { size: 'Bis 500m²', time: '3-4 Tage', team: '4-6 Mann' },
                  { size: '500-1500m²', time: '5-8 Tage', team: '6-10 Mann' },
                  { size: '1500-3000m²', time: '8-12 Tage', team: '10-15 Mann' },
                  { size: 'Über 3000m²', time: '2-4 Wochen', team: 'Mehrere Teams' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/30 to-sky-900/10 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sky-300 font-bold">{item.size}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/80">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.team}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lokale Expertise */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Komplettentkernung in allen Stadtteilen Bielefelds
              </h2>
              <p className="text-white/80 mb-6">
                Ob Altbau in der Altstadt oder Plattenbau in Sennestadt - jeder Stadtteil hat
                seine Eigenheiten. Die schmalen Gassen am Klosterplatz brauchen kleine Container,
                in Jöllenbeck gibts oft Probleme mit der Zufahrt, in Brackwede müssen wir auf
                die S-Bahn achten. Nach 15 Jahren kennen wir jeden Winkel in Bielefeld. Wir
                wissen wo man parken kann, wann Ruhezeiten sind und welches Ordnungsamt pingelig is.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Mitte', 'Brackwede', 'Schildesche', 'Gadderbaum', 'Heepen', 'Jöllenbeck', 'Senne', 'Stieghorst', 'Dornberg'].map((district) => (
                  <div key={district} className="p-4 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-lg">
                    <p className="text-sky-300 font-bold">{district}</p>
                    <p className="text-white/60 text-sm mt-1">Regelmäßige Projekte</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kosten und Preise */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Was kostet eine Komplettentkernung in Bielefeld?
              </h2>
              <p className="text-white/80 mb-6">
                Die ehrliche Antwort: Kommt drauf an. Aber damit können Sie nich viel anfangen,
                ich weiß. Also als grobe Hausnummer: Bei nem normalen Bürogebäude ohne Schadstoffe
                liegen wir meist zwischen 30 und 50 Euro pro Quadratmeter. Mit Asbest wirds teurer,
                bei einfachen Lagerhallen günstiger. Wir machen aber immer Festpreise - keine
                bösen Überraschungen hinterher.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-green-300 mb-3">Preisfaktoren:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Gebäudegröße und Etagen</li>
                    <li>• Art der Bausubstanz</li>
                    <li>• Schadstoffbelastung</li>
                    <li>• Zugänglichkeit/Lage</li>
                    <li>• Zeitdruck (Express kostet mehr)</li>
                    <li>• Entsorgungsaufwand</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-300 mb-3">Sparpotenzial:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Metallerlöse werden verrechnet</li>
                    <li>• Eigenleistung bei Vorbereitung</li>
                    <li>• Flexible Terminplanung</li>
                    <li>• Sammelauftrag mit Nachbarn</li>
                    <li>• Wertstoffe vorher aussortieren</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ablauf Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Der Ablauf Ihrer Komplettentkernung
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Kostenlose Besichtigung', desc: 'Wir kommen vorbei, schauen uns alles an. Prüfen auf Schadstoffe, messen aus, checken die Statik. Dauert meist 1-2 Stunden, kostet nix.' },
                  { step: '2', title: 'Festpreisangebot', desc: 'Binnen 24 Stunden kriegn Sie unser Angebot. Alles drin - Arbeitszeit, Container, Entsorgung, Endreinigung. Keine versteckten Kosten.' },
                  { step: '3', title: 'Vorbereitung', desc: 'Genehmigungen einholen, Container ordern, Verkehrssicherung planen. Machen wir alles, Sie unterschreiben nur.' },
                  { step: '4', title: 'Durchführung', desc: 'Systematische Entkernung nach Plan. Täglich Fotos per WhatsApp. Bei Problemen sofort Bescheid. Alles transparent.' },
                  { step: '5', title: 'Abnahme & Übergabe', desc: 'Gemeinsame Begehung, Übergabe aller Dokumente. Entsorgungsnachweise, Fotodoku, alles digital. Fertig!' }
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

            {/* Referenzen Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Aktuelle Komplettentkernung-Projekte in Bielefeld
              </h2>
              <p className="text-white/80 mb-6">
                Wir dürfen nich alle Projekte zeigen (manche Kunden wollen das nicht), aber
                hier ein paar aktuelle Beispiele aus den letzten Monaten. Alles hier in
                Bielefeld und Umgebung. Fotos und Referenzen auf Anfrage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { project: 'Ehemaliges Finanzamt Bielefeld-Mitte', size: '4.500m²', time: '12 Tage' },
                  { project: 'Bürokomplex Niederwall', size: '2.800m²', time: '8 Tage' },
                  { project: 'Alte Textilfabrik Brackwede', size: '6.200m²', time: '3 Wochen' },
                  { project: 'Wohnblock Sennestadt (60er Jahre)', size: '3.200m²', time: '10 Tage' }
                ].map((ref, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-lg">
                    <h4 className="text-sky-300 font-bold mb-2">{ref.project}</h4>
                    <div className="flex justify-between text-white/60 text-sm">
                      <span>Größe: {ref.size}</span>
                      <span>Dauer: {ref.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Häufige Fragen zur Komplettentkernung
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Was bleibt bei einer Komplettentkernung stehen?', a: 'Nur die tragenden Wände und Decken bleiben. Alles andere kommt raus - Trennwände, Böden, Installationen, Dämmung, einfach alles. Sie kriegen ne nackte Betonhülle zurück.' },
                  { q: 'Kann man während der Entkernung im Gebäude bleiben?', a: 'Bei ner Komplettentkernung? Nee, auf keinen Fall. Das is zu gefährlich und zu laut. Das ganze Gebäude muss leer sein. Bei Teilentkernungen gehts manchmal, aber Komplettentkernung heißt: alle raus.' },
                  { q: 'Wie loud ist das denn?', a: 'Ehrlich? Richtig laut. Presslufthämmer, Flex, Bagger... das macht Krach. Wir halten uns an die Ruhezeiten, aber tagsüber wirds laut. Die Nachbarn warnen wir vorher, das gehört zum Service.' },
                  { q: 'Was passiert mit wertvollen Materialien?', a: 'Kupfer, Messing, Edelstahl - das wird alles separat gesammelt und verwertet. Den Erlös rechnen wir gegen die Entsorgungskosten. Bei viel Metall kann das ordentlich was ausmachen.' }
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
                Jetzt Komplettentkernung anfragen
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Sie haben ein Gebäude das komplett entkernt werden muss? Rufen Sie an oder
                schreiben Sie uns. Wir kommen zur kostenlosen Besichtigung und machen Ihnen
                ein faires Festpreisangebot. Meist können wir schon nächste Woche anfangen.
                15 Jahre Erfahrung, über 1000 zufriedene Kunden - wir wissen was wir tun.
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
                RückbauPRO - Ihr Spezialist für Komplettentkernung in Bielefeld und ganz OWL
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">1.200+</p>
                  <p className="text-white/60 text-sm">Entkernungen</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">15</p>
                  <p className="text-white/60 text-sm">Jahre Erfahrung</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">98%</p>
                  <p className="text-white/60 text-sm">Recycling</p>
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
