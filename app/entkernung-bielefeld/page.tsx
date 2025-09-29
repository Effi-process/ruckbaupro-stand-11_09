'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import ContactSection from '../components/ContactSection';

export default function EntkernungBielefeld() {
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
                Professionelle Gebäudeentkernung
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Entkernung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzte Woche haben wir das alte Stadtwerke-Gebäude in Brackwede komplett entkernt -
              3.500 m² in nur 8 Tagen. Bei der Entkernung in Bielefeld gehts nich nur um Abriss,
              sondern um präzise Vorbereitung für Neues. Wir machen das seit 15 Jahren.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '850+', label: 'Entkernte Objekte' },
              { number: '48h', label: 'Schnellstart möglich' },
              { number: '100%', label: 'Recyclingquote' },
              { number: '15+', label: 'Jahre Erfahrung' }
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
                Als wir letzten Monat das ehemalige Kaufhaus am Jahnplatz entkernt haben,
                kam der Bauleiter zu uns und meinte: "Jungs, ich hab noch nie gesehen dass
                jemand so sauber arbeitet." Das hören wir öfter. Bei Entkernung Bielefeld
                gehts nich nur darum, alles rauszureißen - es geht um systematische, saubere
                Arbeit die den nächsten Gewerken perfekte Bedingungen schafft.
              </p>
            </div>

            {/* Komplettentkernung Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Komplettentkernung für Gewerbeimmobilien
              </h2>
              <p className="text-white/80 mb-6">
                Bei großen Objekten in Bielefeld - egal ob Bürogebäude in der Altstadt oder
                Produktionshallen in Heepen - da brauchts Erfahrung. Wir haben schon über
                200 Gewerbeimmobilien in OWL entkernt. Vom Dachgeschoss bis zum Keller,
                alles raus außer die tragenden Wände.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-sky-300 mb-3">Was wir rausreißen:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Alle nicht-tragenden Wände und Trennwände</li>
                    <li>• Komplette Haustechnik (Elektro, Sanitär, Heizung)</li>
                    <li>• Bodenbeläge, Deckenverkleidungen, Dämmung</li>
                    <li>• Fenster, Türen und sämtliche Einbauten</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-sky-300 mb-3">Typische Projekte:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Bürogebäude vor Kernsanierung</li>
                    <li>• Hotels und Gastronomie vor Umbau</li>
                    <li>• Industriehallen für neue Nutzung</li>
                    <li>• Wohngebäude vor Modernisierung</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Teilentkernung Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Teilentkernung und Selektiver Rückbau
              </h2>
              <p className="text-white/80 mb-6">
                Manchmal muss nich alles raus. Letzte Woche in Sennestadt - da sollten nur
                zwei Etagen entkernt werden, der Rest blieb in Betrieb. Sowas is knifflig,
                aber machbar wenn man weiß wies geht. Staubschutzwände, Lärmschutz, alles
                so dass die anderen Mieter nix mitkriegen.
              </p>
              <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/10 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 font-semibold mb-2">Wichtig bei Teilentkernung:</p>
                <p className="text-white/80">
                  Der Statiker muss vorher draufschauen! Wir arbeiten eng mit Tragwerksplanern
                  zusammen. Jede Wand die raus soll wird geprüft. Safety first - das is bei
                  uns kein Spruch sondern Realität. In 15 Jahren hatten wir null Unfälle bei
                  Entkernungen.
                </p>
              </div>
            </div>

            {/* Schadstoffsanierung Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Schadstoffsanierung bei Entkernung
              </h2>
              <p className="text-white/80 mb-6">
                In alten Gebäuden in Bielefeld - besonders die aus den 60ern und 70ern -
                da is oft Asbest drin. Oder KMF, PCB, PAK... die ganze Palette. Wir sind
                TRGS 519 zertifiziert und machen die Schadstoffsanierung gleich mit. Ein
                Ansprechpartner für alles, das spart Zeit und Nerven.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { title: 'Asbestentsorgung', desc: 'Fachgerechte Demontage und Entsorgung' },
                  { title: 'KMF-Sanierung', desc: 'Sichere Entfernung alter Mineralwolle' },
                  { title: 'PCB-Sanierung', desc: 'Fugensanierung und Entsorgung' }
                ].map((service, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 rounded-lg">
                    <h4 className="text-sky-300 font-bold mb-2">{service.title}</h4>
                    <p className="text-white/70 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Entsorgung Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Professionelle Entsorgung und Recycling
              </h2>
              <p className="text-white/80 mb-6">
                Bei der letzten Entkernung am Kesselbrink - 12 Tonnen Metall, 8 Tonnen Holz,
                15 Tonnen Bauschutt. Alles getrennt, alles dokumentiert. Wir recyceln über
                95% von dem was wir rausholen. Das is gut fürs Budget und gut für die Umwelt.
                Die Entsorgungsnachweise gibts digital, alles sauber dokumentiert.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Metallschrott', 'Altholz A1-A4', 'Bauschutt', 'Gipskarton', 'Dämmwolle', 'Kabel', 'Mischabfall'].map((material) => (
                  <span key={material} className="px-4 py-2 bg-gradient-to-r from-green-800/30 to-emerald-800/20 rounded-full text-green-200 text-sm">
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Local Knowledge Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Entkernung in allen Stadtteilen Bielefelds
              </h2>
              <p className="text-white/80 mb-6">
                Von Brackwede bis Jöllenbeck, von Senne bis Heepen - wir kennen jeden Stadtteil.
                Die Altbauten in der Altstadt brauchen andere Techniken als die Plattenbauten
                in Sennestadt. Oder die Industriegebäude in Oldentrup. Jedes Viertel hat seine
                Eigenheiten, und wir kennen sie alle.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Mitte', 'Brackwede', 'Schildesche', 'Gadderbaum', 'Heepen', 'Jöllenbeck', 'Senne', 'Stieghorst'].map((district) => (
                  <div key={district} className="text-center p-3 bg-gradient-to-br from-slate-800/30 to-sky-900/10 rounded-lg">
                    <p className="text-sky-300 font-semibold">{district}</p>
                    <p className="text-white/60 text-sm">Regelmäßig aktiv</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ablauf Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                So läuft Ihre Entkernung ab
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Besichtigung', desc: 'Wir kommen vorbei, schauen uns alles an. Kostenlos und unverbindlich. Dauert meist ne Stunde, dann wissen wir Bescheid.' },
                  { step: '2', title: 'Angebot', desc: 'Binnen 48 Stunden kriegn Sie ein Festpreisangebot. Keine versteckten Kosten, alles transparent aufgeschlüsselt.' },
                  { step: '3', title: 'Vorbereitung', desc: 'Schadstoffprüfung, Statik-Check, Genehmigungen - wir kümmern uns um alles. Sie müssen sich um nix kümmern.' },
                  { step: '4', title: 'Durchführung', desc: 'Systematische Entkernung von oben nach unten. Sauber, schnell, professionell. Mit täglichen Updates für Sie.' },
                  { step: '5', title: 'Übergabe', desc: 'Besenreine Übergabe, alle Entsorgungsnachweise, Fotodokumentation. Alles ready für den nächsten Schritt.' }
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

            {/* Kosten Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Was kostet Entkernung in Bielefeld?
              </h2>
              <p className="text-white/80 mb-6">
                Die Frage kriegen wir täglich. Pauschal kann mans nich sagen - kommt auf
                zu viele Faktoren an. Aber als Richtwert: Bei nem normalen Bürogebäude
                liegen wir meist zwischen 25 und 45 Euro pro Quadratmeter. Mit Schadstoffen
                wirds teurer, ohne gehts günstiger.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-green-300 mb-3">Kostenfaktoren:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Größe und Komplexität des Objekts</li>
                    <li>• Schadstoffbelastung (Asbest, KMF etc.)</li>
                    <li>• Zugänglichkeit und Lage</li>
                    <li>• Entsorgungsaufwand</li>
                    <li>• Zeitdruck (Expressaufträge kosten mehr)</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-sky-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-300 mb-3">Spartipps:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Frühzeitig planen (keine Expresszuschläge)</li>
                    <li>• Wertstoffe vorher aussortieren</li>
                    <li>• Mehrere Etagen gleichzeitig</li>
                    <li>• Flexible Terminplanung</li>
                    <li>• Kombi mit anderen Gewerken</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
                Häufige Fragen zur Entkernung
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Wie lange dauert eine Entkernung?', a: 'Kommt auf die Größe an. Ne normale Wohnung schaffen wir in 2-3 Tagen, ein Bürogebäude mit 1000m² braucht meist 1-2 Wochen. Wir arbeiten aber auch mit mehreren Teams parallel wenns schnell gehen muss.' },
                  { q: 'Brauche ich eine Genehmigung?', a: 'Meistens ja. Aber keine Sorge - wir kümmern uns drum. Bauantrag, Lärmschutz, Verkehrssicherung - alles inklusive. Sie unterschreiben nur, den Rest machen wir.' },
                  { q: 'Was passiert mit dem ganzen Schutt?', a: 'Alles wird getrennt und recycelt. Metall zum Schrotthändler, Holz zur Verwertung, Bauschutt wird aufbereitet. Über 95% landen nicht auf der Deponie sondern werden wiederverwertet.' },
                  { q: 'Kann man während der Entkernung im Gebäude bleiben?', a: 'Bei Teilentkernungen gehts oft. Wir bauen Staubschutzwände, arbeiten leise und zu abgesprochenen Zeiten. Viele Kunden arbeiten weiter während wir ne Etage drüber entkernen.' }
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
                Jetzt Entkernung anfragen
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Egal ob Komplettentkernung oder nur einzelne Bereiche - wir machen Ihnen
                ein faires Angebot. Rufen Sie an oder schreiben Sie uns. Besichtigung ist
                kostenlos und unverbindlich. Meist können wir schon nächste Woche anfangen.
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
                  ✉️ Kostenloses Angebot
                </Link>
              </div>
            </div>

            {/* Trust Section */}
            <div className="text-center py-12">
              <p className="text-white/60 text-sm mb-4">
                RückbauPRO - Ihr Partner für professionelle Entkernung in Bielefeld und ganz OWL
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">850+</p>
                  <p className="text-white/60 text-sm">Projekte</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">15+</p>
                  <p className="text-white/60 text-sm">Jahre</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sky-300">100%</p>
                  <p className="text-white/60 text-sm">Zufrieden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection
        title="Kostenloses Angebot für Entkernung Bielefeld"
        subtitle="Professionelle Gebäude-Entkernung in ganz Bielefeld - schnell und zuverlässig"
      />

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}