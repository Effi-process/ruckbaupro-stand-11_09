'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function KMFEntfernungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-orange-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-orange-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                TRGS 521 Zertifizierter Fachbetrieb
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              KMF-Entfernung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzte Woche hatten wir drei Notfälle in Brackwede - Hausbesitzer fanden beim
              Dachausbau alte Glaswolle aus den 70ern. Die alten Mineralfasern sind hochgefährlich
              und müssen raus. Wir machen das seit über 10 Jahren - sicher, schnell und sauber.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1200+', label: 'KMF-Sanierungen' },
              { number: '24h', label: 'Notdienst' },
              { number: 'TRGS 521', label: 'Zertifiziert' },
              { number: '100%', label: 'Staubfrei' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-orange-900/20 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-orange-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-2">{stat.number}</div>
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
            <div className="mb-12 p-8 bg-gradient-to-br from-slate-800/40 to-orange-900/20 backdrop-blur-xl rounded-2xl">
              <p className="text-white/90 text-lg leading-relaxed">
                Als wir letzte Woche das alte Schulgebäude in Jöllenbeck saniert haben, kam die
                Schulleiterin zu uns und fragte: "Is das wirklich so gefährlich?" Ja is es. KMF
                (Künstliche Mineralfasern) aus der Zeit vor 2000 sind krebserregend. Die Fasern
                sind so klein, die kommen tief in die Lunge rein und bleiben da drin. Deshalb
                machen wir KMF-Entfernung nur mit Vollschutz, Absauganlagen und allem Drum und Dran.
              </p>
            </div>

            {/* Was ist KMF Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                Was ist KMF und wo kommt es vor?
              </h2>
              <p className="text-white/80 mb-6">
                KMF steht für Künstliche Mineralfasern - das is Glaswolle, Steinwolle und Schlackenwolle.
                In Bielefeld wurde das Zeug bis Ende der 90er überall verbaut. Jedes zweite Haus aus
                dieser Zeit hat KMF im Dach, in den Wänden oder im Keller. Besonders die Siedlungen
                in Sennestadt, die Reihenhäuser in Heepen und die Einfamilienhäuser in Schildesche
                sind voll davon.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">Typische Fundorte:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Dachböden und Dachschrägen (Glaswolle zwischen den Sparren)</li>
                    <li>• Kellerdecken (Steinwolle-Platten von unten)</li>
                    <li>• Fassaden (WDVS mit alter Steinwolle)</li>
                    <li>• Trennwände (Dämmung zwischen Wohnungen)</li>
                    <li>• Rohrleitungen (alte Dämmschläuche)</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl border border-red-500/30">
                  <h3 className="text-xl font-bold text-red-300 mb-3">Gesundheitsgefahr:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Fasern kleiner 3 Mikrometer = krebserregend</li>
                    <li>• Eindringen tief in die Lunge</li>
                    <li>• Können nicht mehr abgebaut werden</li>
                    <li>• Erhöhtes Krebsrisiko nach Jahren</li>
                    <li>• Besonders gefährlich für Kinder!</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* TRGS 521 Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                TRGS 521 - Der Sicherheitsstandard
              </h2>
              <p className="text-white/80 mb-6">
                TRGS 521 is die technische Regel für Gefahrstoffe bei KMF-Arbeiten. Wir sind nach
                TRGS 521 zertifiziert - das heisst unsere Jungs haben alle die Schulung gemacht und
                wissen genau wies geht. Viele "Handwerker" machen KMF-Arbeiten ohne Zertifikat - das
                is illegal und extrem gefährlich für alle Beteiligten.
              </p>
              <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/10 rounded-xl border border-orange-500/30">
                <p className="text-orange-200 font-semibold mb-2">Was TRGS 521 vorschreibt:</p>
                <ul className="text-white/80 space-y-2">
                  <li>• Vollständige Schutzausrüstung (Anzug, Atemschutz, Handschuhe)</li>
                  <li>• Staubfreie Entfernung mit Absauganlagen (Klasse H)</li>
                  <li>• Abschottung des Arbeitsbereichs mit Unterdruckhaltung</li>
                  <li>• Fachgerechte Verpackung in Big-Bags oder Folie</li>
                  <li>• Dokumentierte Entsorgung als gefährlicher Abfall</li>
                </ul>
              </div>
            </div>

            {/* Erkennungsmerkmale Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                Woran erkenne ich alte KMF?
              </h2>
              <p className="text-white/80 mb-6">
                Die Frage kriegen wir ständig. Alte KMF erkennt man an paar Merkmalen. Erstens:
                Baujahr. Wenn das Haus zwischen 1970 und 2000 gebaut oder gedämmt wurde, is mit
                hoher Wahrscheinlichkeit alte KMF drin. Zweitens: Aussehen. Die alten Glaswollen
                sind meist gelb oder rosa, die Steinwollen eher grau oder braun. Und drittens:
                Die Fasern stauben wie verrückt! Wenn Sie nur dran kommen und der Staub fliegt -
                Finger weg und Profis rufen!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { title: 'Vor 1995', desc: 'Höchste Gefahr - garantiert alte KMF mit krebserregenden Fasern' },
                  { title: '1995-2000', desc: 'Mittleres Risiko - kann neue oder alte KMF sein, besser prüfen lassen' },
                  { title: 'Nach 2000', desc: 'Neue KMF mit RAL-Gütezeichen - trotzdem Schutz beim Handling!' }
                ].map((period, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-800/40 to-orange-900/20 rounded-lg border border-orange-400/20">
                    <h4 className="text-orange-300 font-bold mb-2">{period.title}</h4>
                    <p className="text-white/70 text-sm">{period.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ablauf der Entfernung Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                So läuft die KMF-Entfernung ab
              </h2>
              <p className="text-white/80 mb-6">
                KMF-Sanierung is kein normaler Handwerkerjob. Das läuft nach nem strikten Ablauf
                den wir bei jedem Projekt gleich machen. Safety first - das ziehen wir durch egal
                obs länger dauert oder nich.
              </p>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Besichtigung & Analyse', desc: 'Wir kommen vorbei und schauen uns die Lage an. Wo is die KMF? Wieviel Quadratmeter? Wie alt? Welche Zugänglichkeit? Nach 30 Minuten wissen wir Bescheid und können Ihnen ein Angebot machen.' },
                  { step: '2', title: 'Arbeitsplan nach TRGS 521', desc: 'Für jedes Projekt erstellen wir nen Arbeitsplan. Abschottung, Schutzmaßnahmen, Entsorgung - alles wird vorher festgelegt. Bei größeren Objekten melden wirs auch bei der Berufsgenossenschaft an.' },
                  { step: '3', title: 'Abschottung des Arbeitsbereichs', desc: 'Bevor wir loslegen wird alles abgeschottet. Staubschutzwände aus Folie, Unterdruckhaltung mit HEPA-Filtern. Keine Faser kommt raus aus dem Arbeitsbereich - garantiert!' },
                  { step: '4', title: 'Staubfreie Demontage', desc: 'Jetzt gehts los. Unsere Jungs arbeiten im Vollschutz mit Atemmaske FFP3. Die KMF wird vorsichtig abgenommen und direkt eingesprüht mit nem Bindemittel. Dann sofort in Big-Bags oder doppelte Folie. Kein Staub, keine Gefahr.' },
                  { step: '5', title: 'Feinreinigung & Freimessung', desc: 'Nach der Demontage wird alles abgesaugt mit HEPA-Filtern. Jede Ecke, jeder Balken. Dann machen wir ne Sichtkontrolle - erst wenn alles sauber is, gibts die Freigabe. Bei kritischen Objekten lassen wir auch Raumluft messen.' },
                  { step: '6', title: 'Entsorgung & Dokumentation', desc: 'Die Big-Bags gehen zur zugelassenen Deponie. Alles dokumentiert mit Entsorgungsnachweisen. Sie kriegen von uns ne komplette Mappe: Arbeitsplan, Fotos vorher-nachher, Entsorgungsnachweise. Alles sauber dokumentiert für Versicherung oder Verkauf.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-300 mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typische Projekte Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                Typische KMF-Projekte in Bielefeld
              </h2>
              <p className="text-white/80 mb-6">
                In über 10 Jahren haben wir alles gesehen was mit KMF zu tun hat. Hier die häufigsten
                Fälle die wir in Bielefeld haben:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">Dachsanierung:</h3>
                  <p className="text-white/80 mb-3">
                    Der Klassiker! Familie will den Dachboden ausbauen, zwischen den Sparren liegt
                    alte gelbe Glaswolle. Wir entfernen die alte KMF, dann können die neuen Handwerker
                    mit moderner Dämmung weitermachen. Dauert meist 2-3 Tage je nach Größe.
                  </p>
                  <p className="text-orange-200 text-sm">Preis: 35-55 Euro/m² inkl. Entsorgung</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">Kellerdecke:</h3>
                  <p className="text-white/80 mb-3">
                    Von unten an der Kellerdecke hängen alte Steinwollplatten. Die bröckeln ab und
                    stauben. Wir nehmen die runter, saugen alles ab und entsorgen fachgerecht.
                    Arbeiten von unten is praktisch - kein Gerüst, keine Absperrung.
                  </p>
                  <p className="text-orange-200 text-sm">Preis: 25-40 Euro/m² inkl. Entsorgung</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">Fassadendämmung:</h3>
                  <p className="text-white/80 mb-3">
                    Bei alten WDVS-Fassaden is oft Steinwolle aus den 80ern drin. Wenn die Fassade
                    neu gemacht wird, muss die alte Dämmung runter. Wir arbeiten mit Gerüst und
                    Absperrung - keiner kriegt was vom Staub mit.
                  </p>
                  <p className="text-orange-200 text-sm">Preis: 45-70 Euro/m² inkl. Entsorgung</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">Trennwände:</h3>
                  <p className="text-white/80 mb-3">
                    In Mehrfamilienhäusern wurden die Wände zwischen Wohnungen oft mit KMF gedämmt.
                    Bei Umbau oder Sanierung muss das raus. Kompliziert wegen der engen Arbeitsbereiche,
                    aber machbar mit der richtigen Technik.
                  </p>
                  <p className="text-orange-200 text-sm">Preis: Nach Aufwand, meist Pauschalpreis</p>
                </div>
              </div>
            </div>

            {/* Kosten Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                Was kostet KMF-Entfernung in Bielefeld?
              </h2>
              <p className="text-white/80 mb-6">
                Die Preise schwanken je nach Aufwand. Als Faustregel: 30-60 Euro pro Quadratmeter
                für Standardfälle. Bei schwer zugänglichen Bereichen oder hoher Kontamination wirds
                teurer. Dafür kriegen Sie aber auch komplette Sicherheit - von der Demontage bis
                zur Entsorgung alles aus einer Hand.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-xl">
                  <h3 className="text-xl font-bold text-green-300 mb-3">Im Preis enthalten:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Komplette Schutzausrüstung und Sicherheitstechnik</li>
                    <li>• Abschottung mit Staubschutzwänden</li>
                    <li>• Staubfreie Demontage mit HEPA-Absaugung</li>
                    <li>• Verpackung in Big-Bags</li>
                    <li>• Entsorgung als gefährlicher Abfall</li>
                    <li>• Alle Entsorgungsnachweise</li>
                    <li>• Foto-Dokumentation</li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/10 rounded-xl border border-orange-500/30">
                  <h3 className="text-xl font-bold text-orange-300 mb-3">Preisfaktoren:</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Menge der KMF (Quadratmeter)</li>
                    <li>• Zugänglichkeit (Dach, Keller, Fassade)</li>
                    <li>• Kontaminationsgrad (stark staubend?)</li>
                    <li>• Zusätzliche Abschottungen nötig?</li>
                    <li>• Gerüst oder Hebebühne erforderlich?</li>
                    <li>• Dringlichkeit (Notdienst kostet Zuschlag)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stadtteile Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                KMF-Entfernung in allen Bielefelder Stadtteilen
              </h2>
              <p className="text-white/80 mb-6">
                Von Sennestadt bis Jöllenbeck, von Brackwede bis Heepen - wir sind überall in
                Bielefeld unterwegs. Jeder Stadtteil hat seine typischen Gebäude und damit auch
                seine typischen KMF-Probleme. Die Reihenhäuser in Schildesche haben oft KMF in
                der Kellerdecke, die Einfamilienhäuser in Gadderbaum im Dach, die Siedlungen in
                Sennestadt in den Fassaden.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Mitte', 'Brackwede', 'Schildesche', 'Gadderbaum', 'Heepen', 'Jöllenbeck', 'Sennestadt', 'Stieghorst', 'Senne', 'Quelle', 'Dornberg', 'Ummeln'].map((district) => (
                  <div key={district} className="text-center p-3 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-lg">
                    <p className="text-orange-300 font-semibold">{district}</p>
                    <p className="text-white/60 text-sm">Aktiv im Einsatz</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                Häufige Fragen zur KMF-Entfernung
              </h2>
              <div className="space-y-4">
                {[
                  { q: 'Kann ich KMF selbst entfernen?', a: 'Nein, bitte nich! Erstens is es gesetzlich vorgeschrieben dass nur zertifizierte Fachfirmen mit TRGS 521 KMF entfernen dürfen. Zweitens is es extrem gefährlich - die Fasern kriegen Sie ohne Profi-Ausrüstung gar nicht staubfrei raus. Und drittens: Die Entsorgung als gefährlicher Abfall braucht Nachweise die Sie als Privatperson nicht bekommen.' },
                  { q: 'Wie erkenne ich ob meine KMF gefährlich is?', a: 'Alle KMF die vor 1995 eingebaut wurden sind mit Sicherheit gefährlich. Zwischen 1995 und 2000 könnte es neue KMF mit RAL-Gütezeichen sein - aber auch alte gefährliche. Am besten wir kommen vorbei und schauen uns das an. Bei Zweifeln können wir auch ne Probe ins Labor schicken.' },
                  { q: 'Muss ich während der Arbeiten ausziehen?', a: 'Bei Dachdämmung normalerweise nich, da is ja eh keiner drin. Bei Kellerdecke auch nich wenn wir gut abschotten. Kritisch wirds bei Wänden zwischen Wohnräumen - da empfehlen wir oft auszuziehen für die paar Tage. Besser sicher als sorry!' },
                  { q: 'Was passiert wenn KMF im Haus bleibt?', a: 'Solange die KMF unberührt bleibt und nicht staubt, passiert erstmal nix. Aber irgendwann müssen Sie dran - spätestens bei Umbau, Verkauf oder Sanierung. Und je älter die KMF wird, desto mehr bröckelt sie und staubt. Viele Hausbesitzer lassen die KMF präventiv entfernen beim Dachausbau oder Kellerumbau - dann is das Thema durch.' },
                  { q: 'Zahlt die Versicherung die KMF-Entfernung?', a: 'Bei nem Brandschaden oder Wasserschaden oft ja - dann gilt die KMF-Belastung als Folgeschaden. Bei normaler Sanierung leider nich, das is Eigentümersache. Aber: Wenn Sie verkaufen wollen bringt ne KMF-freie Immobilie deutlich mehr Geld. Das rechnet sich!' }
                ].map((faq, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/30 to-orange-900/10 rounded-xl">
                    <h3 className="text-lg font-bold text-orange-300 mb-2">{faq.q}</h3>
                    <p className="text-white/80">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mb-16 p-8 bg-gradient-to-br from-orange-900/30 to-red-900/20 rounded-2xl border border-orange-500/30">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white mb-6">
                Jetzt KMF-Entfernung anfragen
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Sie haben alte Mineralfasern im Haus und wollen die loswerden? Rufen Sie uns an
                oder schreiben Sie uns. Besichtigung ist kostenlos, Angebot kommt innerhalb 48
                Stunden. Bei Notfällen sind wir auch am Wochenende da. TRGS 521 zertifiziert,
                versichert, erfahren - Ihr Partner für sichere KMF-Entfernung in Bielefeld.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+491748083023"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all"
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
                RückbauPRO - TRGS 521 zertifiziert für sichere KMF-Entfernung in Bielefeld
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-300">1200+</p>
                  <p className="text-white/60 text-sm">KMF-Projekte</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-300">10+</p>
                  <p className="text-white/60 text-sm">Jahre Erfahrung</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-300">100%</p>
                  <p className="text-white/60 text-sm">Sicherheit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      /* Related Services - Internal Linking for SEO */

      <RelatedServicesBielefeld currentSlug="kmf-entfernung-bielefeld" category="sanierung" maxServices={6} />

 />

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}
