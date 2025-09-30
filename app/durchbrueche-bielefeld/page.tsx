'use client';

import React, { useState } from 'react';
import SimpleContactForm from '../components/SimpleContactForm';

export default function DurchbruecheBielefeld() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-950 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Durchbrüche Bielefeld – Professionelle Wand- und Deckendurchbrüche
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Vorige Woche ham wir bei nem Altbau in der Altstadt ne tragende Wand durchbrochen – 2,5m breit für ne offene Küche. Durchbrüche in Bielefeld sind unsere Spezialität, egal ob Beton, Mauerwerk oder Stahlbeton. Wir machen das sauber, schnell und vor allem statisch sicher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491748083023"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            >
              <span className="relative z-10">☎ 0174 808 3023</span>
            </a>
            <a
              href="#kontakt"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '580+', label: 'Durchbrüche realisiert' },
              { number: '100%', label: 'Statisch geprüft' },
              { number: '48h', label: 'Schnellstart möglich' },
              { number: '15+', label: 'Jahre Erfahrung' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was sind Durchbrüche und wann braucht man die?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Letzten Monat kam ne Familie zu uns in Schildesche. Wollten aus zwei kleinen Zimmern ein großes Wohnzimmer machen. Problem: Da stand ne <strong className="text-white">tragende Wand</strong> dazwischen. Genau für sowas sind wir da. <strong className="text-indigo-400">Durchbrüche in Bielefeld</strong> – das machen wir den ganzen Tag. Ob Wand durchbrechen für ne offene Küche, Deckendurchbruch für ne neue Treppe, oder Durchgang schaffen im Keller.
              </p>
              <p>
                Das wichtigste bei Durchbrüchen: Man kann nich einfach loslegen mit nem Vorschlaghammer. Wenn die Wand tragend is – und das sind die meisten in Altbauten – dann brauchts nen Statiker, ne Genehmigung und vor allem nen ordentlichen Stahlträger als Sturz. Sonst kommt einem das Haus übern Kopf zusammen. Klingt dramatisch, is aber so.
              </p>
              <p>
                In Bielefeld haben wir mit allem zu tun: Alte Fachwerkhäuser in der Altstadt, Nachkriegsbauten in Sennestadt mit dicken Betonwänden, moderne Bürogebäude am Kesselbrink. Jedes Gebäude is anders, jeder Durchbruch brauch ne eigene Planung. Aber nach über 580 Durchbrüchen wissen wir mittlerweile ganz gut was geht und was nich.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Wanddurchbrüche Bielefeld – Von Mauerwerk bis Stahlbeton
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Die häufigste Anfrage die wir kriegen: "Wir wollen ne Wand raus, geht das?" Die Antwort is meistens: Ja geht, aber kommt drauf an. Tragende Wand oder nich? Aus welchem Material? Wieviel Platz is überm Durchbruch? All das muss geklärt werden bevor wir anfangen.
              </p>
              <p>
                In Bielefeld ham wir hauptsächlich mit drei Wandtypen zu tun: Alte Ziegelwände (meistens 24cm oder 36cm dick), Kalksandsteinwände aus den 60ern und 70ern, und Stahlbetonwände in neueren Gebäuden. Jedes Material brauch ne andere Technik beim Durchbruch.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Ziegelwände</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Altbauten vor 1960</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Meist tragend</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Stahlträger nötig</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Staubt stark</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Kalksandstein</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>60er-80er Jahre</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Sehr hart</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Präzise Schnitte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Wenig Staub</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Stahlbeton</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Neubauten ab 1990</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Immer tragend</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Diamantsäge nötig</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Aufwendig</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Bei tragenden Wänden – und das is in Bielefeld gefühlt jede zweite Wand – müssen wir nen Stahlträger einbauen. Der fängt die Last ab die vorher die Wand getragen hat. Meistens is das so ein HEB- oder IPE-Träger, je nachdem wieviel Last drauf kommt. Das berechnet der Statiker, wir bauen das dann ein.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Deckendurchbrüche für Treppen und Gauben
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Deckendurchbrüche sind nochmal ne Nummer komplizierter als Wanddurchbrüche. Warum? Weil Decken immer tragend sind. Immer. Da kann man nich sagen "ach die trägt nich". Wenn man da nen Loch reinschneidet, muss das rundherum verstärkt werden. Sonst hängts durch oder schlimmer – bricht durch.
              </p>
              <p>
                Letztens ham wir bei nem Haus in Gadderbaum nen Deckendurchbruch für ne neue Treppe gemacht. Alte Holzbalkendecke, über 100 Jahre alt. Da muss man aufpassen dass man die Balken nich beschädigt. Wir ham mit ner Kettensäge gearbeitet, ganz vorsichtig. Hinterher Stahlträger drumrum, neue Balken eingehängt. Sowas dauert seine Zeit, aber wenn mans richtig macht hälts nochmal 100 Jahre.
              </p>
              <p>
                Bei Betondecken gehts mit Diamantsägen. Das is zwar schneller, aber auch lauter. Und nasser – weil wir mit Wasser kühlen müssen. In Mehrfamilienhäusern machen wir das deswegen meistens am Wochenende, wenn weniger Leute da sind. Oder wir bauen Schallschutz auf. Kommt drauf an was der Kunde will.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Türdurchbrüche und Fenstervergrößerungen
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Nich jeder Durchbruch is gleich riesig. Manchmal gehts nur um ne neue Tür. Aus nem Fenster ne Terrassentür machen. Oder ne normale Tür breiter machen für nen Rollstuhl. Auch das sind Durchbrüche, auch da müssen wir auf Statik achten.
              </p>
              <p>
                Bei Türdurchbrüchen in tragenden Wänden brauchts nen Sturz – also nen Träger überm Durchbruch. Früher hat man da Betonfertigstürze genommen, heute meistens Stahlträger. Die sind leichter einzubauen und tragen mehr. Wichtig is dass der Sturz mindestens 15cm auf jeder Seite aufliegt, sonst kann der wegrutschen.
              </p>
              <p>
                Fenstervergrößerungen sind in Bielefeld grad voll im Trend. Jeder will mehr Licht, größere Fenster, Bodentiefe Verglasung. Machen wir ständig, besonders in Sennestadt wo die alten Plattenbauten saniert werden. Da schneiden wir dann die Brüstung raus, verstärken das mit Stahl, fertig is die Terrassentür.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Betonschneiden und Betonsägen mit Diamanttechnik
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Wenn Beton im Spiel is, kommts auf die richtige Technik an. Mit nem Vorschlaghammer kommt man da nich weit. Wir arbeiten mit Diamantwerkzeugen – Sägen, Bohrungen, Fräsen. Das geht sauber, präzise und relativ leise. Naja, leise für Bauarbeiten halt.
              </p>
              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-6 border border-indigo-500/20 my-6">
                <h3 className="text-xl font-bold text-indigo-400 mb-3">Unsere Betonschneid-Techniken:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Wandsägen</h4>
                    <p className="text-sm">Für vertikale Schnitte in Wänden bis 60cm Dicke. Die Säge fährt auf ner Schiene, schneidet millimetergenau.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Seilsägen</h4>
                    <p className="text-sm">Für dicke Wände über 60cm oder schwer erreichbare Stellen. Das Seil schneidet sich durch alles durch.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Kernbohrungen</h4>
                    <p className="text-sm">Für runde Durchbrüche, z.B. für Rohre oder Lüftungen. Von 20mm bis 120cm Durchmesser.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Bodensägen</h4>
                    <p className="text-sm">Für Schnitte in Betonböden und Fundamenten. Bis 40cm Tiefe in einem Durchgang.</p>
                  </div>
                </div>
              </div>
              <p>
                Das gute an Diamanttechnik: Es entsteht kaum Staub (wir arbeiten mit Wasser) und die Schnitte sind so sauber dass man die hinterher nur noch verputzen muss. Kein Nacharbeiten, kein Flicken. Das spart Zeit und Geld.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ablauf bei Durchbrüchen – So läufts bei uns
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Erstberatung vor Ort',
                  description: 'Wir kommen vorbei, schauen uns die Wand an, messen alles aus. Klopfen auch mal gegen die Wand – hört sich komisch an, aber so merkt man ob die hohl is oder massiv. Machen paar Fotos, besprechen was Sie sich vorstellen.'
                },
                {
                  number: '2',
                  title: 'Statik-Prüfung und Berechnung',
                  description: 'Wenn die Wand tragend sein könnte (und das is meistens der Fall), holen wir nen Statiker dazu. Der schaut sich die Baupläne an, berechnet die Lasten, sagt uns welcher Träger rein muss. Das dauert ca. 1 Woche.'
                },
                {
                  number: '3',
                  title: 'Genehmigung einholen',
                  description: 'Bei tragenden Wänden brauchts ne Genehmigung vom Bauamt. Kümmern wir uns drum. In Bielefeld gehts meistens relativ flott, 2-3 Wochen. Bei denkmalgeschützten Gebäuden kann das länger dauern.'
                },
                {
                  number: '4',
                  title: 'Material besorgen und Baustelle vorbereiten',
                  description: 'Stahlträger bestellen, Werkzeug bereitstellen, Staubschutzwände aufbauen. Wenn nötig Möbel wegräumen oder Stützen einziehen. Sicherheit geht vor.'
                },
                {
                  number: '5',
                  title: 'Durchbruch herstellen',
                  description: 'Jetzt gehts los. Wir schneiden erst die Öffnung für den Stahlträger, setzen den ein, mauern den ein. Dann kommt der eigentliche Durchbruch. Bei ner normalen Wand dauert das 1-2 Tage. Bei Beton kann das auch ne Woche sein.'
                },
                {
                  number: '6',
                  title: 'Abschlussarbeiten und Abnahme',
                  description: 'Stahlträger verputzen, Kanten sauber machen, Bauschutt wegräumen. Am Ende kommt der Statiker nochmal vorbei und prüft ob alles passt. Dann kriegen Sie die Abnahme schriftlich.'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-indigo-500/50">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Durchbrüche in allen Bielefelder Stadtteilen
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Egal wo in Bielefeld Sie wohnen – wir sind innerhalb von ner halben Stunde bei Ihnen. Jeder Stadtteil hat so seine Eigenheiten. In der Altstadt gibts viele denkmalgeschützte Häuser wo man extra vorsichtig sein muss. In Sennestadt dominieren die Plattenbauten mit ihren dicken Betonwänden. Und in Gadderbaum stehen die alten Villen mit ihren massiven Ziegelwänden. Wir kennen die Stadt und ihre Gebäude.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Bielefeld Mitte</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Altstadt (Denkmalschutz)</li>
                  <li>• Kesselbrink (Bürogebäude)</li>
                  <li>• Jahnplatz (Geschäftshäuser)</li>
                  <li>• Siegfriedplatz (Altbauten)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Bielefeld Nord</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Schildesche (Reihenhäuser)</li>
                  <li>• Oldentrup (Industrie)</li>
                  <li>• Heepen (60er Jahre Bauten)</li>
                  <li>• Brake (Wohnsiedlungen)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Bielefeld Süd</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Sennestadt (Plattenbauten)</li>
                  <li>• Brackwede (Mischbebauung)</li>
                  <li>• Gadderbaum (Villen)</li>
                  <li>• Bethel (Institutionen)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was kostet ein Durchbruch in Bielefeld?
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Die Preisfrage. Und wie immer: Kommt drauf an. Tragende Wand oder nich? Welches Material? Wie groß soll der Durchbruch sein? Aber damit Sie ne Orientierung haben, hier paar echte Beispiele aus Bielefeld:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Türdurchbruch (1m breit)</h3>
                  <div className="text-3xl font-bold text-white mb-2">1.200 - 2.500 €</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">✓</span>
                      <span>Inkl. Sturz und Mauerwerk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">✓</span>
                      <span>Statiker-Freigabe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">✓</span>
                      <span>Verputzen der Laibungen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">✓</span>
                      <span>Schuttentsorgung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl p-6 border border-indigo-500/20">
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Wanddurchbruch (3m breit)</h3>
                  <div className="text-3xl font-bold text-white mb-2">4.500 - 8.000 €</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Inkl. Stahlträger HEB 160</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Statische Berechnung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Bauantrag und Genehmigung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Komplette Fertigstellung</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/20 mt-6">
                <p className="text-white font-semibold mb-2">💡 Spartipp:</p>
                <p>
                  Wenn Sie mehrere Durchbrüche machen lassen wollen, lohnt sichs das auf einmal zu machen. Die Anfahrt, Baustelleneinrichtung und der Statiker fallen dann nur einmal an. Kann gut 20-30% sparen gegenüber einzelnen Aufträgen.
                </p>
              </div>
              <p>
                Wichtig zu wissen: Bei den Preisen is alles drin – Statiker, Material, Arbeit, Entsorgung. Keine versteckten Kosten. Manche Firmen rechnen das alles einzeln ab, bei uns kriegen Sie nen Festpreis. Was im Angebot steht, das kostets auch.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Häufige Fehler bei Durchbrüchen (und wie man sie vermeidet)
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Nach 15 Jahren und über 580 Durchbrüchen haben wir schon alles gesehen. Auch viele Fälle wo vorher ne andere Firma dran war und Mist gebaut hat. Hier die häufigsten Fehler die man vermeiden sollte:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">❌ Ohne Statiker durchbrechen</h3>
                  <p className="text-sm">
                    Der Klassiker. "Ach die Wand trägt bestimmt nich". Denkste! Wenn man Glück hat passiert nix. Wenn man Pech hat bekommts Risse im ganzen Haus. Im schlimmsten Fall kommt die Decke runter. Lass immer erst nen Statiker draufschauen.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">❌ Zu kleiner Stahlträger</h3>
                  <p className="text-sm">
                    Manche denken sie können Geld sparen indem sie nen kleineren Träger nehmen. Schlechte Idee. Der Träger muss die Last tragen können, sonst biegt der sich durch. Und durchgebogene Träger kann man hinterher nur noch ersetzen – teurer als gleich den richtigen zu nehmen.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">❌ Leitungen nicht beachten</h3>
                  <p className="text-sm">
                    In jeder Wand können Stromleitungen, Wasserleitungen, Heizungsrohre sein. Vor dem Durchbruch muss man die finden und umlegen. Sonst gibts nen Wasserrohrbruch oder Kurzschluss. Wir scannen jede Wand vorher mit Ortungsgerät.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">❌ Keine Genehmigung einholen</h3>
                  <p className="text-sm">
                    Viele denken "is ja nur ne Wand, brauch ich keine Genehmigung". Falsch. Tragende Wände immer anmelden! Wenn das Bauamt das später rausfindet (und die finden das immer raus), kann man den Durchbruch zurückbauen müssen. Kostet dann doppelt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Häufig gestellte Fragen zu Durchbrüchen
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Kann ich einen Durchbruch selber machen?',
                answer: 'Theoretisch ja, praktisch nein. Bei nicht-tragenden Wänden (wie Rigipswänden) könnte mans selber machen. Aber bei tragenden Wänden brauchts Statiker, Genehmigung und Fachkenntnisse. Außerdem is das körperlich anstrengend und staubt wie verrückt. Lass das lieber Profis machen.'
              },
              {
                question: 'Wie lange dauert ein Wanddurchbruch?',
                answer: 'Kommt auf die Größe an. Nen kleinen Türdurchbruch schaffen wir an nem Tag. Nen großen Wanddurchbruch mit Stahlträger braucht 2-3 Tage. Dazu kommt noch die Vorbereitungszeit (Statik, Genehmigung) – das sind nochmal 2-4 Wochen. Aber die eigentliche Bauzeit is kurz.'
              },
              {
                question: 'Muss ich während der Arbeiten ausziehen?',
                answer: 'Normalerweise nich. Wir können die meisten Durchbrüche machen während Sie wohnen bleiben. Wirds halt laut und staubig für 1-2 Tage. Wir bauen Staubschutzwände auf und saugen ständig ab. Aber klar, wenns geht issen Tag woanders zu sein angenehmer.'
              },
              {
                question: 'Was ist wenn hinter der Wand Leitungen sind?',
                answer: 'Das checken wir vorher mit Ortungsgerät. Stromleitungen, Wasserleitungen, alles. Wenn da was is, legen wir das um bevor wir durchbrechen. Die Kosten dafür sind im Angebot mit drin. Überraschungen gibts bei uns keine.'
              },
              {
                question: 'Brauche ich wirklich einen Statiker?',
                answer: 'Bei tragenden Wänden auf jeden Fall! Das is nich optional, sondern Pflicht. Der Statiker berechnet welcher Träger rein muss und bescheinigt dass alles sicher is. Ohne diese Bescheinigung gibts auch keine Baugenehmigung. Und ohne Genehmigung droht Ärger mit dem Bauamt.'
              },
              {
                question: 'Kann jede Wand durchbrochen werden?',
                answer: 'Fast jede, aber nich alle. Manche Wände sind so wichtig für die Statik dass man die nich durchbrechen kann. Oder es wär so aufwendig dass es sich nich lohnt. Das sehen wir aber bei der Erstbesichtigung. Meistens findet man ne Lösung, manchmal muss man aber auch sagen: geht nich.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-indigo-400 flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                  {openFaq === index && (
                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für Ihren Durchbruch in Bielefeld?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kostenlose Beratung vor Ort, Statik-Check inklusive. Wir sind in 24h bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491748083023"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              >
                ☎ Jetzt anrufen
              </a>
              <a
                href="#kontakt"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Beratung anfordern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Warum RückbauPRO für Ihre Durchbrüche?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📐', title: 'Eigener Statiker', description: 'Im Team' },
              { icon: '💰', title: 'Festpreisgarantie', description: 'Keine Nachträge' },
              { icon: '⚡', title: '580+ Durchbrüche', description: 'Viel Erfahrung' },
              { icon: '🛡️', title: 'Vollversichert', description: '5 Mio. € Deckung' },
              { icon: '🏆', title: '15+ Jahre', description: 'In Bielefeld aktiv' },
              { icon: '✂️', title: 'Diamanttechnik', description: 'Sauber & präzise' },
              { icon: '📋', title: 'Alle Genehmigungen', description: 'Wir übernehmen das' },
              { icon: '🧹', title: 'Alles inklusive', description: 'Auch Entsorgung' }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-indigo-500/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📐</div>
                <div className="text-white font-semibold text-sm">Geprüfte Statiker</div>
                <div className="text-gray-400 text-xs">VPI zertifiziert</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✂️</div>
                <div className="text-white font-semibold text-sm">Diamanttechnik</div>
                <div className="text-gray-400 text-xs">Modernste Geräte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <div className="text-white font-semibold text-sm">Vollversichert</div>
                <div className="text-gray-400 text-xs">5 Mio. € Deckung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-white font-semibold text-sm">580+ Projekte</div>
                <div className="text-gray-400 text-xs">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="relative z-10">
        <SimpleContactForm />
      </section>

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
