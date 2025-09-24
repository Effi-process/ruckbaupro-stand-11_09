'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import MultiStepWizard from '../components/MultiStepWizard';

export default function BetonabbruchBielefeld() {
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
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Spezialist für Betonabbruch
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Betonabbruch Bielefeld - Präzision trifft Power
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Gestern haben wir wieder mal gezeigt, was möglich ist - die alte Betonbrücke am
              Ostwestfalendamm, 40 Zentimeter dicker Stahlbeton, in nur zwei Tagen komplett zerlegt.
              Wenn Sie in Bielefeld Betonabbruch brauchen, dann wissen Sie jetzt, wer die richtigen
              Maschinen und das Know-how hat.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'Jahre Erfahrung' },
              { number: '500+', label: 'Betonabbruch-Projekte' },
              { number: '80cm', label: 'Max. Schnitttiefe' },
              { number: '24/7', label: 'Notdienst' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Betonabbruch-Leistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Modernste Technik und erfahrene Spezialisten für jeden Betonabbruch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Betonschneiden',
                description: 'Millimetergenauer Schnitt mit Diamantsägen bis 80cm Dicke für Durchbrüche und Öffnungen.'
              },
              {
                title: 'Kernbohrung',
                description: 'Saubere Bohrungen von 10-100cm Durchmesser für Leitungen und Lüftungsschächte.'
              },
              {
                title: 'Betonsägen',
                description: 'Wandsägen und Bodenschnitte für nachträgliche Fenster und Türöffnungen.'
              },
              {
                title: 'Seilsägen',
                description: 'Für unbegrenzt dicke Betonteile - ideal für Brücken und Fundamente.'
              },
              {
                title: 'Betonbrechen',
                description: 'Hydraulische Betonbrecher für massive Fundamente und Bodenplatten.'
              },
              {
                title: 'Fugenschneiden',
                description: 'Präzise Dehnungsfugen und Scheinfugen zur Rissvermeidung.'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-8 h-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:border-sky-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="h-2 bg-gradient-to-r from-sky-400/50 to-sky-600/50 rounded-full mb-6 group-hover:from-sky-300/70 group-hover:to-sky-500/70 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Betonabbruch-Prozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Sicher, sauber und termingerecht - so arbeiten wir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analyse', desc: 'Prüfung der Betonstärke und Bewehrung' },
              { step: '02', title: 'Planung', desc: 'Auswahl der optimalen Abbruchmethode' },
              { step: '03', title: 'Sicherung', desc: 'Absperrung und Staubschutzmaßnahmen' },
              { step: '04', title: 'Durchführung', desc: 'Präziser Abbruch und Entsorgung' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 h-full hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/60 text-2xl">
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
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-8 md:p-12 hover:shadow-2xl hover:shadow-sky-400/10 transition-all duration-300">

            <div className="prose prose-lg max-w-none text-white/90">
              <p className="text-lg leading-relaxed mb-8">
                Als Abrissunternehmen in Bielefeld haben wir schon einiges an Beton klein gemacht -
                vom Einfamilienhaus-Fundament in Heepen bis zur kompletten Industriehalle bei Dr. Oetker.
                Betonabbruch ist unser täglich Brot und wir wissen genau, worauf es ankommt. Jeder
                Beton ist anders, jedes Gebäude hat seine eigenen Herausforderungen. In der Bielefelder
                Altstadt müssen wir leise arbeiten, in Brackwede können wir mit schwerem Gerät ran.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Betonschneiden
              </h2>
              <p className="mb-6">
                Beim Betonschneiden in Bielefeld kommt es auf Millimeter an. Letzte Woche waren wir
                im Uni-Hauptgebäude und mussten eine neue Türöffnung durch 30 Zentimeter Stahlbeton
                schneiden - während der Vorlesungsbetrieb lief! Mit unseren Diamantsägen geht das
                fast staubfrei und relativ leise. Die Studenten haben kaum was gemerkt, nur das
                leichte Surren der Säge war zu hören.
              </p>
              <p className="mb-6">
                Wir schneiden Beton bis zu einer Dicke von 80 Zentimetern - das schaffen nicht viele
                in Bielefeld. Ob für neue Fensteröffnungen, Treppen oder Durchbrüche für Leitungen -
                unsere Schnitte sind präzise und sauber. Besonders in den alten Bunkern aus dem 2.
                Weltkrieg, die es überall in Bielefeld noch gibt, ist das wichtig. Der Beton dort ist
                härter als alles, was heute gebaut wird. Aber wir kriegen auch den klein.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Betonsägen
              </h2>
              <p className="mb-6">
                Unsere Betonsägen sind das Beste, was der Markt hergibt. Von der handlichen Motorsäge
                für kleine Arbeiten bis zur riesigen Wandsäge für dicke Betonwände. Letzte Woche haben
                wir in Jöllenbeck ein komplettes Parkdeck zersägt - 2000 Quadratmeter Betonfläche in
                handliche Stücke zerlegt. Die Anwohner haben Augen gemacht, als wir mit dem 5-Tonnen-
                Sägeblatt angerückt sind!
              </p>
              <p className="mb-6">
                Das Betonsägen in Bielefeld hat seine Tücken. Die alten Industriegebäude an der
                Eckendorfer Straße zum Beispiel - da weiss man nie, was einen erwartet. Manchmal
                sind da Stahlträger im Beton versteckt, die auf keinem Plan verzeichnet sind. Oder
                alte Leitungen, die längst vergessen wurden. Mit unserer Erfahrung und modernen
                Ortungsgeräten finden wir alles, bevor die Säge Schaden nimmt.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Kernbohrung
              </h2>
              <p className="mb-6">
                Kernbohrungen machen wir fast jeden Tag irgendwo in Bielefeld. Ob für neue Abwasserrohre,
                Lüftungsschächte oder Kabeldurchführungen - wir bohren Löcher von 10 bis 100 Zentimeter
                Durchmesser durch jeden Beton. Neulich im Klinikum Bielefeld mussten wir 50 Kernbohrungen
                für die neue Klimaanlage machen - alles während laufendem Betrieb, versteht sich.
              </p>
              <p className="mb-6">
                Das Schöne an Kernbohrungen ist: Es gibt keinen Dreck. Der Bohrkern kommt sauber raus
                und kann sogar noch verwendet werden. Ein Künstler aus dem Künstlerhaus in der Wertherstraße
                hat mal unsere Bohrkerne für eine Installation genommen. "Bielefelder Beton-Geschichte"
                hat er das Ding genannt. Jeder Bohrkern erzählt ja wirklich eine Geschichte - vom
                Material, vom Alter des Gebäudes, von der Zeit, als es gebaut wurde.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Abbrucharbeiten
              </h2>
              <p className="mb-6">
                Abbrucharbeiten in Bielefeld sind unser Kerngeschäft. Von der kleinen Garage in
                Schildesche bis zum kompletten Fabrikgebäude in Oldentrup - wir reißen alles ab,
                was weg muss. Der Betonabbruch ist dabei oft der schwierigste Teil. Moderne Gebäude
                haben oft Spannbeton, der beim Abbruch gefährlich werden kann. Die Spannung im Beton
                muss kontrolliert abgebaut werden, sonst fliegts einem um die Ohren.
              </p>
              <p className="mb-6">
                Letzten Monat haben wir das alte Hallenbad in Brackwede abgerissen. 3000 Kubikmeter
                Beton mussten weg. Mit unseren Abbruchbaggern und Hydraulikhämmern haben wir das in
                einer Woche geschafft. Der Lärm war enorm, aber die Anwohner waren froh, dass das
                alte Schandfleck endlich verschwindet. Jetzt entsteht dort ein schöner Park - auch
                sowas gehört zum Betonabbruch in Bielefeld dazu.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Wandsägen
              </h2>
              <p className="mb-6">
                Mit unseren Wandsägen schneiden wir durch Betonwände wie durch Butter - na ja, fast.
                Die diamantbesetzten Sägeblätter fressen sich durch den härtesten Beton. Besonders
                praktisch ist das bei nachträglichen Fenster- oder Türöffnungen. In den vielen
                50er-Jahre-Bauten in Bielefeld ist das oft gefragt. Die Leute wollen mehr Licht,
                größere Fenster, offenere Räume.
              </p>
              <p className="mb-6">
                Das Wandsägen erfordert viel Erfahrung. Man muss genau wissen, welche Wände tragend
                sind und welche nicht. In Bielefeld gibt's viele Plattenbauten aus den 70ern, besonders
                in Baumheide. Da ist fast jede Wand tragend - da kann man nicht einfach drauflos sägen.
                Wir arbeiten eng mit Statikern zusammen und sichern alles ab, bevor der erste Schnitt
                gemacht wird. Sicherheit geht vor, besonders beim Betonabbruch.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Seilsägen
              </h2>
              <p className="mb-6">
                Die Seilsäge ist unser Geheimwaffe für die richtig dicken Brocken. Mit einem
                Diamantseil, das sich durch den Beton frisst, können wir praktisch unbegrenzt dicke
                Betonteile durchtrennen. Am Johannisberg haben wir mal einen alten Bunker zerlegt -
                2 Meter dicke Wände! Mit normalen Sägen wär das unmöglich gewesen, aber die Seilsäge
                hat das geschafft.
              </p>
              <p className="mb-6">
                Seilsägen in Bielefeld ist besonders bei Brückenabbrüchen gefragt. Die vielen
                Autobahnbrücken der A2 und A33 müssen regelmäßig saniert oder ersetzt werden. Mit
                der Seilsäge schneiden wir ganze Brückensegmente raus - sauber und präzise. Das
                spart Zeit und Geld, weil der Verkehr nur kurz gesperrt werden muss. Die Bielefelder
                Pendler danken es uns!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Fugenschneiden
              </h2>
              <p className="mb-6">
                Fugenschneiden ist Präzisionsarbeit. Dehnungsfugen, Scheinfugen, Pressfugen - jede
                hat ihre Funktion und muss exakt geschnitten werden. In Bielefeld sehen wir oft
                Probleme mit fehlenden oder falschen Fugen. Der Beton reisst dann unkontrolliert,
                besonders nach den kalten Wintern hier. Wir schneiden nachträglich Fugen ein und
                verhindern so größere Schäden.
              </p>
              <p className="mb-6">
                Auf dem Kesselbrink haben wir letztes Jahr komplett neue Fugen in den Betonboden
                geschnitten. Der alte Beton war gerissen und uneben. Mit unseren Fugenschneidern
                haben wir ein sauberes Fugenmuster reingeschnitten, das jetzt Bewegungen im Beton
                ausgleicht. Die Marktleute sind begeistert - keine Stolperfallen mehr, und es sieht
                auch noch gut aus!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Betonbrechen
              </h2>
              <p className="mb-6">
                Beim Betonbrechen gehts zur Sache! Mit hydraulischen Betonbrechern zerkleinern wir
                massive Betonblöcke in handliche Stücke. Das ist laut, das ist staubig, aber manchmal
                gehts nicht anders. Besonders bei Fundamenten oder dicken Bodenplatten ist das oft
                die einzige Lösung. Der alte Güterbahnhof in Brackwede - da haben wir wochenlang
                Beton gebrochen. Fundamente von alten Lagerhallen, meterdicke Betonplatten von den
                Verladerampen.
              </p>
              <p className="mb-6">
                Das Betonbrechen in Bielefeld muss oft unter schwierigen Bedingungen stattfinden.
                Enge Innenhöfe in der Altstadt, direkt neben bewohnten Gebäuden, oder in der Nähe
                von empfindlichen Maschinen in Fabriken. Wir haben spezielle schallgedämpfte Brecher
                und arbeiten mit Wassernebel gegen den Staub. So kriegen wir auch in der dichtesten
                Bebauung den Beton klein, ohne dass sich die halbe Nachbarschaft beschwert.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Rückbau
              </h2>
              <p className="mb-6">
                Rückbau ist mehr als nur Abriss - es ist kontrollierte Demontage. In Bielefeld haben
                wir viele denkmalgeschützte Gebäude, wo nicht einfach die Abrissbirne geschwungen
                werden kann. Der alte Ringlockschuppen zum Beispiel - da musste jeder Stein einzeln
                nummeriert und vorsichtig ausgebaut werden. Der Beton drumherum wurde millimetergenau
                weggeschnitten, ohne die historische Substanz zu beschädigen.
              </p>
              <p className="mb-6">
                Beim Rückbau von Betongebäuden in Bielefeld achten wir besonders auf die Wiederverwertung.
                Der Beton wird nicht einfach auf die Deponie gekarrt, sondern aufbereitet und recycelt.
                Aus altem Beton wird Recycling-Schotter für neue Straßen. So haben wir schon tonnenweise
                Beton vom alten Stadtwerke-Gebäude in den Neubau der B61 eingebaut. Nachhaltigkeit ist
                uns wichtig - auch beim Betonabbruch.
              </p>

              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Ihr Partner für Betonabbruch in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 20 Jahren Erfahrung im Betonabbruch kennen wir jeden Trick und jede
                  Herausforderung. Von der kleinen Kernbohrung bis zum kompletten Gebäudeabbruch -
                  wir haben das richtige Equipment und das Know-how.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ Modernste Diamanttechnik</li>
                  <li>✓ Staubfreie Arbeitsweise</li>
                  <li>✓ Erschütterungsarme Verfahren</li>
                  <li>✓ 90% Recyclingquote</li>
                  <li>✓ Alle Zertifikate vorhanden</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Betonabbruch in Ihrer Nähe</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Schnell vor Ort in ganz Bielefeld und Umgebung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld Altstadt',
              'Brackwede',
              'Schildesche',
              'Jöllenbeck',
              'Heepen',
              'Stieghorst',
              'Sennestadt',
              'Baumheide',
              'Eckendorfer Straße'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/20 to-sky-900/10 backdrop-blur-xl border border-sky-400/30 rounded-xl p-4 hover:bg-gradient-to-br hover:from-slate-700/30 hover:to-sky-800/20 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300">
                <span className="text-white/90">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
              Häufige Fragen zum Betonabbruch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wie laut ist Betonschneiden?',
                a: 'Mit unseren modernen Diamantsägen arbeiten wir relativ leise. Ideal für Arbeiten in bewohnten Gebäuden.'
              },
              {
                q: 'Entsteht viel Staub beim Betonabbruch?',
                a: 'Nein, wir arbeiten mit Wasserkühlung und Staubabsaugung. So bleibt alles sauber.'
              },
              {
                q: 'Wie dick kann Beton geschnitten werden?',
                a: 'Mit unseren Sägen schneiden wir bis 80cm dicken Beton. Mit der Seilsäge sind sogar 2 Meter möglich.'
              },
              {
                q: 'Was kostet eine Kernbohrung?',
                a: 'Je nach Durchmesser und Tiefe zwischen 50-300€ pro Bohrung. Mengenrabatt möglich.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
              Betonabbruch in Bielefeld - Jetzt anfragen!
            </h2>
            <p className="text-white/80 mb-8">
              20 Jahre Erfahrung ✓ Modernste Technik ✓ Faire Preise ✓ Schnelle Ausführung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49 174 8083023"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-500 hover:to-sky-600 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/30 transition-all duration-300"
              >
                📞 +49 174 8083023
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 text-white font-bold rounded-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300"
              >
                Kostenloses Angebot →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}