'use client';

import React, { useState } from 'react';
import SimpleContactForm from '../components/SimpleContactForm';

export default function GefahrenstoffEntsorgungBielefeld() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-red-950 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent leading-tight">
            Gefahrenstoff Entsorgung Bielefeld – Ihr Experte für sichere Schadstoffentsorgung
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Letzte Woche ham wir ne alte Fabrik in Heepen komplett von Asbest befreit. 2.400 m² in 12 Tagen, alles nach TRGS 519. Gefahrenstoff-Entsorgung in Bielefeld is nich nur n Job für uns – wir schützen die Gesundheit von Menschen und machen Gebäude wieder sicher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+491748083023"
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              <span className="relative z-10">☎ 0174 808 3023</span>
            </a>
            <a
              href="#kontakt"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg text-white border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Kostenlose Erstberatung
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '320+', label: 'Schadstoffsanierungen' },
              { number: '100%', label: 'TRGS 519 konform' },
              { number: '24h', label: 'Notdienst aktiv' },
              { number: '15+', label: 'Jahre Expertise' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-red-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
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
              Was ist Gefahrenstoff-Entsorgung und warum ist sie so wichtig?
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Als wir neulich die alte Schule in Schildesche saniert haben, hat der Hausmeister uns gefragt: "Wieso kostet das soviel mehr als normaler Abbruch?" Die Antwort is einfach: <strong className="text-white">Gefahrenstoffe sind keine normale Baustoffe</strong>. Da gehts um Gesundheit und Leben. In Bielefeld gibts hunderte Gebäude aus den 60er und 70er Jahren – und fast alle haben irgendwelche Schadstoffe drin.
              </p>
              <p>
                Asbest, KMF, PCB, PAK – das sind keine Fremdwörter für uns, sondern unser täglich Brot. Wir sind <strong className="text-red-400">nach TRGS 519 zertifiziert</strong> und dürfen alle Arten von Gefahrenstoffen fachgerecht entfernen. Viele Firmen können das nich – wir schon. Und zwar seit über 15 Jahren.
              </p>
              <p>
                Die meisten Leute denken bei Gefahrenstoffen nur an Asbest. Aber es gibt noch viel mehr: künstliche Mineralfasern in Dämmungen, PCB in Fugenmassen, bleihaltige Farben, quecksilberhaltige Schalter. Alles hochgiftig, alles muss raus bevor saniert werden kann. Und alles muss nach strengsten Vorschriften entsorgt werden.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Asbestsanierung Bielefeld – Die häufigste Gefahr in alten Gebäuden
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Jede zweite Anfrage die wir kriegen dreht sich um Asbest. Kein Wunder – bis 1993 wurde das Zeug überall verbaut. Dachplatten, Fassaden, Fußbodenkleber, sogar in Putzen und Spachtelmassen. Die alte Eternit-Fassade? Asbest. Der graue PVC-Boden im Keller? Meistens asbesthaltig. Die Isolation an den Rohren? Zu 90% Asbest.
              </p>
              <p>
                Das tückische an Asbest: Man siehts nich, man riechts nich, man schmeckts nich. Aber wenn man die Fasern einatmet, können die nach 20-30 Jahren Krebs auslösen. Deswegen gibts in Deutschland so strenge Vorschriften. Und deswegen darfs nur Fachfirmen wie uns das entfernen.
              </p>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20 my-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">Typische Asbest-Verstecke in Bielefeld:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Eternit-Dachplatten und Wellplatten</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Fassadenplatten an Altbauten</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Floor-Flex Bodenbeläge (PVC)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Rohrisolierungen in Kellern</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Nachtspeicheröfen (Heizplatten)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-2">⚠</span>
                    <span>Leichtbauwände und Brandschutz</span>
                  </div>
                </div>
              </div>
              <p>
                Unser Prozess bei Asbest: Erst kommt die Probenahme. Wir nehmen Material mit, lassens im Labor untersuchen. Dann erstellen wir nen Sanierungsplan, melden das bei der Gewerbeaufsicht an, bauen Schleusen und Unterdruckanlagen auf. Erst dann gehts los mit der eigentlichen Sanierung. Am Ende kommt ne Freimessung – erst wenn die sagt "alles sauber", sind wir fertig.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              KMF-Sanierung – Künstliche Mineralfasern richtig entsorgen
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Nach Asbest kommt bei uns KMF am häufigsten vor. Künstliche Mineralfasern – das sind Glaswolle, Steinwolle, Mineralwolle. Wurde massenhaft als Dämmung verbaut, besonders in den 80ern und 90ern. Das Problem: Alte KMF-Produkte (vor 2000) sind genauso krebserregend wie Asbest. Nur weiss das kaum jemand.
              </p>
              <p>
                Wir ham letztens ne komplette Dachsanierung in Sennestadt gemacht. Unterm Dach: 30cm alte Glaswolle, alles voll mit Staub und Dreck. Der Eigentümer wollte das selber rausholen – "is doch nur Dämmung". Ham wir ihm dringend abgeraten. Alte KMF muss genauso wie Asbest behandelt werden: Vollschutz, Absaugung, spezielle Entsorgung.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">Wo findet man KMF?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Dachdämmung in Altbauten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Fassadendämmung hinter Verkleidungen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Rohrisolierungen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span>Schalldämmung in Zwischendecken</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">Unser KMF-Entsorgungsservice:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Identifikation nach TRGS 521</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Staubarme Demontage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Verpackung in Big Bags</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Zertifizierte Entsorgung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              PCB-Sanierung in Bielefeld – Unsichtbare Gefahr in Gebäuden
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                PCB – Polychlorierte Biphenyle. Klingt kompliziert, is aber einfach zu erklären: Ein hochgiftiger Weichmacher der bis in die 80er Jahre in Fugenmassen, Farben und Dichtungen verwendet wurde. Besonders in öffentlichen Gebäuden wie Schulen, Rathäusern und Verwaltungsgebäuden findet man das Zeug noch überall.
              </p>
              <p>
                Letztens ham wir ne alte Schule am Siegfriedplatz saniert. PCB in allen Fugen zwischen den Betonplatten. Das Problem bei PCB: Es dünstet aus. Die Leute atmens jahrelang ein, merkens nich, aber es lagert sich im Körper ab. Krebserregend, erbgutschädigend, das volle Programm.
              </p>
              <p>
                Bei PCB-Sanierung muss man vorsichtig sein. Man kanns nich einfach rauskratzen – dann verteilt mans nur. Wir arbeiten mit Spezialwerkzeugen und Absauganlagen. Jede Fuge wird einzeln bearbeitet, das Material kommt direkt in spezielle Behälter. Und hinterher muss gemessen werden obs wirklich alles weg is.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schadstoffsanierung bei Bränden und Wasserschäden
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Viele denken bei Gefahrenstoffen nur an Asbest und Co. Aber es gibt noch andere Fälle wo wir gebraucht werden: Nach Bränden und Wasserschäden. Wenn ein Gebäude brennt, entstehen hochgiftige Verbrennungsprodukte. Ruß, PAK, Dioxine – alles lagert sich ab. Auf Wänden, in Ritzen, überall.
              </p>
              <p>
                Letztes Jahr ham wir ne Lagerhalle in Brackwede nach nem Brand saniert. Sah von außen noch gut aus, aber drin war alles schwarz. Der Besitzer dachte er kann einfach streichen – Fehler. Wir mussten erst alles professionell reinigen, dann spezielle Beschichtungen auftragen. Sonst wär das Gebäude unbenutzbar geblieben.
              </p>
              <p>
                Bei Wasserschäden iss vor allem Schimmel das Problem. Schwarzer Schimmel produziert Mykotoxine – auch nich grad gesund. Wir entfernen dann nich nur den sichtbaren Schimmel, sondern auch das befallene Material. Oft muss der komplette Estrich raus, manchmal sogar tragende Balken.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unser Ablauf bei Gefahrenstoff-Entsorgung in Bielefeld
            </h2>
            <div className="space-y-6">
              {[
                {
                  number: '1',
                  title: 'Erstbegehung und Schadstoffidentifikation',
                  description: 'Wir kommen zu Ihnen, schauen uns alles genau an und nehmen Proben. Die gehen ins Labor – nach 3-5 Tagen wissen wir genau was drin is. Asbestfasern, KMF, PCB, PAK, Schwermetalle – wir testen auf alles.'
                },
                {
                  number: '2',
                  title: 'Sanierungsplan und Kostenvoranschlag',
                  description: 'Wenn klar is was entsorgt werden muss, erstellen wir nen detaillierten Plan. Wie lange dauerts? Was kostets? Welche Sicherheitsmaßnahmen brauchen wir? Alles schriftlich, alles transparent. Festpreis, keine versteckten Kosten.'
                },
                {
                  number: '3',
                  title: 'Behördliche Anmeldung und Genehmigungen',
                  description: 'Asbest- und PCB-Sanierungen müssen bei der Gewerbeaufsicht angemeldet werden. Kümmern wir uns drum. Sie müssen sich um nix kümmern. Wir haben alle Zertifikate und Genehmigungen die man braucht.'
                },
                {
                  number: '4',
                  title: 'Absperrung und Aufbau Sicherheitstechnik',
                  description: 'Bevor wir loslegen, wird die Baustelle abgesperrt. Bei Asbest bauen wir Schleusen auf, Unterdruckanlagen, Luftfilter. Bei anderen Schadstoffen entsprechend angepasst. Sicherheit geht vor – für uns und für alle anderen.'
                },
                {
                  number: '5',
                  title: 'Fachgerechte Sanierung nach TRGS-Vorschriften',
                  description: 'Dann gehts los. Unsere Leute tragen Vollschutzanzüge, Atemschutz, das volle Programm. Alles wird vorsichtig entfernt, direkt verpackt, nix fliegt rum. Wir arbeiten mit Spezialwerkzeugen die Staubentwicklung minimieren.'
                },
                {
                  number: '6',
                  title: 'Zertifizierte Entsorgung und Dokumentation',
                  description: 'Das entsorgte Material geht zu speziellen Deponien. Nicht aufn normalen Bauschutt! Wir bekommen Entsorgungsnachweise die Sie aufbewahren müssen. Wichtig bei Verkauf oder für Versicherungen. Am Ende gibts ne Freimessung die bestätigt dass alles sauber is.'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-red-500/50">
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
              Gefahrenstoff-Entsorgung in allen Bielefelder Stadtteilen
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Wir sind in ganz Bielefeld unterwegs. Von Schildesche bis Sennestadt, von Heepen bis Brackwede. Jeder Stadtteil hat seine eigenen Probleme – in der Altstadt alte Fachwerkhäuser mit bleihaltigen Farben, in Sennestadt die Nachkriegsbauten voller Asbest, in den Industriegebieten PCB und Schwermetalle. Wir kennen die Stadt und ihre Gebäude.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4">Bielefeld Mitte</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Altstadt (Fachwerk, Bleifarben)</li>
                  <li>• Kesselbrink (Nachkriegsbauten)</li>
                  <li>• Siegfriedplatz (60er Jahre Beton)</li>
                  <li>• Stadtwerke-Gebäude (PCB)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4">Bielefeld Nord/Ost</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Schildesche (Schulen, Eternit)</li>
                  <li>• Heepen (Industrie, Schwermetalle)</li>
                  <li>• Oldentrup (Fabrikhallen)</li>
                  <li>• Brake (Gewerbegebiete)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-red-400 mb-4">Bielefeld Süd</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Sennestadt (Asbest-Hochburg)</li>
                  <li>• Brackwede (Industriebrachen)</li>
                  <li>• Quelle (Verwaltungsgebäude)</li>
                  <li>• Gadderbaum (Villen, Altbauten)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was kostet Gefahrenstoff-Entsorgung in Bielefeld?
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Die Frage die jeder stellt. Und die ehrliche Antwort: Kommt drauf an. Wieviel Quadratmeter? Welcher Schadstoff? Wie leicht erreichbar? Gibts andere Gewerke die gleichzeitig arbeiten? Aber damit Sie ne grobe Vorstellung haben, hier paar Beispiele aus Bielefeld:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">Asbest-Dach (100 m²)</h3>
                  <div className="text-3xl font-bold text-white mb-2">8.000 - 12.000 €</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✓</span>
                      <span>Demontage Eternitplatten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✓</span>
                      <span>Verpackung und Transport</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✓</span>
                      <span>Zertifizierte Entsorgung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✓</span>
                      <span>Alle Nachweise und Freimessung</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-3">KMF-Dachboden (150 m²)</h3>
                  <div className="text-3xl font-bold text-white mb-2">4.500 - 7.000 €</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Alte Mineralwolle entfernen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Staubdichte Verpackung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Fachgerechte Entsorgung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2">✓</span>
                      <span>Besenreine Übergabe</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/20 mt-6">
                <p className="text-white font-semibold mb-2">💡 Preistipp:</p>
                <p>
                  Wenn Sie mehrere Sachen gleichzeitig machen lassen (z.B. Asbest-Dach + KMF-Dämmung), können wir oft Kombi-Preise machen. Die Anfahrt und Aufbau der Sicherheitstechnik fällt ja dann nur einmal an. Kann durchaus 20-30% sparen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notdienst für Gefahrenstoffe – Wenn es schnell gehen muss
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Manchmal gehts nich um geplante Sanierung, sondern um Notfälle. Sturm reißt asbesthaltige Platten runter. Bei Umbauarbeiten wird versehentlich Asbest freigelegt. Brand setzt Schadstoffe frei. In solchen Fällen müssen wir sofort kommen.
              </p>
              <p>
                Unser Notdienst is 24/7 erreichbar. Innerhalb von 2 Stunden sind wir in Bielefeld vor Ort. Wir sichern die Gefahrenstelle ab, verhindern weitere Ausbreitung und leiten die Sofortsanierung ein. Die Kosten übernimmt meistens die Versicherung – wir rechnen auch direkt mit denen ab wenn gewünscht.
              </p>
              <p>
                Letzten Winter ham wir nachts um 3 Uhr nen Anruf bekommen. Rohrbruch in nem Bürogebäude in der Innenstadt, Wasser läuft in den Keller wo alte Asbestplatten lagern. Wir waren um 4 Uhr da, ham alles abgesperrt, die nassen Platten gesichert verpackt. Um 8 Uhr morgens konnte der Betrieb weiterlaufen. So muss das laufen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Häufig gestellte Fragen zur Gefahrenstoff-Entsorgung
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Kann ich Asbest selber entfernen wenn ich Schutzkleidung trage?',
                answer: 'Nein, absolut nicht! Asbestarbeiten dürfen nur von zertifizierten Fachfirmen durchgeführt werden. Das steht in der TRGS 519. Wenn Sie das selber machen, riskieren Sie nich nur Ihre Gesundheit, sondern machen sich auch strafbar. Können bis zu 10.000 Euro Bußgeld sein.'
              },
              {
                question: 'Wie erkenne ich ob mein Gebäude Asbest enthält?',
                answer: 'Mit bloßem Auge geht das nich sicher. Verdächtig sind: Eternit-Platten auf dem Dach (grau, gewellt), alte PVC-Böden (besonders wenn quadratisch und grau), Rohrisolierungen im Keller. Wir kommen vorbei, nehmen Proben und lassens testen. Kostet ca. 300-500 Euro und Sie wissens genau.'
              },
              {
                question: 'Muss ich bei Gefahrenstoffen aus dem Haus ausziehen?',
                answer: 'Kommt drauf an. Bei kleinen Sanierungen (z.B. nur ein Raum) reichts oft wenn der Bereich abgeschlossen wird. Bei größeren Asbest-Sanierungen sollten Sie schon raus – wegen der Gerüche und weil wir mit Unterdruckanlagen arbeiten. Dauert ja auch nur paar Tage.'
              },
              {
                question: 'Was passiert wenn bei meiner Renovierung unvermutet Asbest gefunden wird?',
                answer: 'Sofort Arbeiten stoppen! Bereich absperren, nix mehr anfassen. Uns anrufen. Wir kommen schnellstmöglich, sichern alles ab und übernehmen. Kostet zwar extra, aber besser als wenn die Fasern durchs ganze Haus verteilt werden.'
              },
              {
                question: 'Übernimmt die Versicherung die Kosten für Schadstoffsanierung?',
                answer: 'Wenn die Schadstoffe durch nen versicherten Schaden freigelegt wurden (Brand, Sturm, Leitungswasser), ja. Bei geplanter Sanierung normalerweise nich. Wir können aber direkt mit der Versicherung abrechnen, das macht die Sache einfacher.'
              },
              {
                question: 'Wie lange dauert eine Asbest-Sanierung?',
                answer: 'Ein Einfamilienhaus-Dach (ca. 100m²) schaffen wir in 2-3 Tagen. Komplette Gebäudeentkernung mit Asbest kann 2-3 Wochen dauern. Kommt immer drauf an wieviel drin is und wie gut erreichbar. Nach Erstbesichtigung können wir Ihnen nen genauen Zeitplan geben.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 text-left"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-red-400 flex-shrink-0">
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
          <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-red-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gefahrenstoffe im Gebäude? Handeln Sie jetzt!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kostenlose Erstberatung und Schadstoff-Analyse. Wir sind in 24h bei Ihnen in Bielefeld.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491748083023"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              >
                ☎ Notfall-Hotline
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
            Warum RückbauPRO für Ihre Gefahrenstoff-Entsorgung?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📜', title: 'TRGS 519 zertifiziert', description: 'Alle Qualifikationen' },
              { icon: '🔬', title: 'Eigenes Labor', description: 'Schnelle Analysen' },
              { icon: '⚡', title: '24/7 Notdienst', description: 'Immer erreichbar' },
              { icon: '🛡️', title: 'Vollversichert', description: '5 Mio. € Deckung' },
              { icon: '🏆', title: '320+ Sanierungen', description: 'Viel Erfahrung' },
              { icon: '💰', title: 'Festpreisgarantie', description: 'Keine Überraschungen' },
              { icon: '📋', title: 'Alle Nachweise', description: 'Komplett dokumentiert' },
              { icon: '♻️', title: 'Zertifizierte Entsorgung', description: 'Alles legal' }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-red-500/30 transition-all duration-300 text-center">
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
                <div className="text-4xl mb-2">⚠️</div>
                <div className="text-white font-semibold text-sm">TRGS 519</div>
                <div className="text-gray-400 text-xs">Asbest-Zertifikat</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📋</div>
                <div className="text-white font-semibold text-sm">TRGS 521</div>
                <div className="text-gray-400 text-xs">KMF-Zertifikat</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <div className="text-white font-semibold text-sm">Vollversichert</div>
                <div className="text-gray-400 text-xs">5 Mio. € Deckung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">♻️</div>
                <div className="text-white font-semibold text-sm">Entsorgungsfachbetrieb</div>
                <div className="text-gray-400 text-xs">zertifiziert</div>
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
