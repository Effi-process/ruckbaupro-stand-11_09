'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/MultiStepWizard';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'

export default function OberflaechenreinigungBielefeld() {
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
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Professionelle Reinigung
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Oberflächenreinigung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Gestern haben wir die komplette Fassade vom Sparkassen-Hochhaus am Jahnplatz gereinigt -
              3000 Quadratmeter in nur zwei Tagen, strahlend sauber! Wenn Ihre Oberflächen in Bielefeld
              professionelle Reinigung brauchen, dann sind wir die Experten mit der richtigen Technik.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Jahre Erfahrung' },
              { number: '5000+', label: 'Gereinigte Flächen' },
              { number: '100%', label: 'Umweltfreundlich' },
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Reinigungsleistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professionelle Oberflächenreinigung für jeden Bedarf
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fassadenreinigung',
                description: 'Schonende Reinigung von Naturstein, Klinker, Putz und Glasfassaden.'
              },
              {
                title: 'Graffitientfernung',
                description: 'Rückstandslose Entfernung von Graffiti und Schmierereien ohne Beschädigung.'
              },
              {
                title: 'Hochdruckreinigung',
                description: 'Kraftvolle Reinigung von Böden, Wänden und Industrieanlagen.'
              },
              {
                title: 'Sandstrahlen',
                description: 'Professionelles Strahlen zur Oberflächenbehandlung und Rostentfernung.'
              },
              {
                title: 'Trockeneisstrahlen',
                description: 'Rückstandsfreie Reinigung empfindlicher Oberflächen mit CO2-Pellets.'
              },
              {
                title: 'Industriereinigung',
                description: 'Spezialreinigung von Maschinen, Anlagen und Produktionshallen.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Reinigungsprozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Systematisch, gründlich und materialschonend
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analyse', desc: 'Materialprüfung und Verschmutzungsgrad bestimmen' },
              { step: '02', title: 'Vorbereitung', desc: 'Abdeckung und Schutz angrenzender Bereiche' },
              { step: '03', title: 'Reinigung', desc: 'Fachgerechte Durchführung mit passender Technik' },
              { step: '04', title: 'Nachbehandlung', desc: 'Versiegelung und Schutz der gereinigten Flächen' }
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
      <MobileOptimizedContent>
        <MobileSection padding="large" className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-6 lg:p-8 xl:p-12 hover:shadow-2xl hover:shadow-sky-400/10 transition-all duration-300">

            <div className="prose prose-lg max-w-none text-white/90">
              <MobileParagraph className="mb-6 lg:mb-8">
                Wir sind schon seit Jahren das Reinigungsunternehmen, dem Bielefeld vertraut. Vom
                Rathaus bis zur Sparrenburg, vom Loom bis zur Universität - wir haben schon alles
                sauber gemacht. Oberflächenreinigung ist mehr als nur Putzen - es ist Wissenschaft
                und Handwerk zugleich. Jedes Material braucht seine eigene Behandlung, jeder Dreck
                seine spezielle Technik. In der Altstadt arbeiten wir besonders schonend, in den
                Industriegebieten können wir mit voller Power ran.
              </MobileParagraph>

              <CollapsibleTextSection
                title="Fassadenreinigung"
                content={
                  <>
                    <MobileParagraph>
                      Die Fassadenreinigung in Bielefeld is ne echte Herausforderung. Die ganzen alten
                      Sandsteinfassaden in der Altstadt sind empfindlich wie rohe Eier. Letzte Woche
                      haben wir das Crüwell-Haus gereinigt - 100 Jahre alter Sandstein, schwarz vom
                      Ruß und Dreck. Mit niedrigem Druck und speziellen Reinigungsmitteln haben wir
                      den Stein wieder hell bekommen, ohne die Oberfläche zu beschädigen.
                    </MobileParagraph>
                    <MobileParagraph>
                      Bei modernen Glasfassaden wie am Loom oder den neuen Bürogebäuden an der
                      Detmolder Straße gehts ganz anders zu. Da arbeiten wir mit entmineralisiertem
                      Wasser und Teleskopstangen. Kein Tropfen, keine Streifen - die Fenster glänzen
                      wie neu. Die Mieter freuen sich immer, wenn sie wieder klare Sicht haben. Manche
                      sagen, sie hätten vergessen, wie schön der Blick auf den Teutoburger Wald ist!
                    </MobileParagraph>
                  </>
                }
              />

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Graffitientfernung
              </h2>
              <p className="mb-6">
                Graffiti ist ein großes Problem in Bielefeld, besonders in der Innenstadt und an
                der Bahnunterführung. Jeden Montag kriegen wir Anrufe von verzweifelten Hausbesitzern -
                übers Wochenende wurde wieder gesprüht. Wir kommen schnell und entfernen die Schmierereien
                professionell. Je frischer das Graffiti, desto einfacher gehts weg. Bei der Sparkasse
                am Kesselbrink waren wir innerhalb von zwei Stunden da und haben alles entfernt.
              </p>
              <p className="mb-6">
                Die Graffitientfernung erfordert Fingerspitzengefühl. Verschiedene Farben brauchen
                verschiedene Lösungsmittel, und der Untergrund darf nicht beschädigt werden. Auf
                Klinker gehts anders als auf Putz, auf Metall anders als auf Holz. Wir haben für
                jeden Fall das richtige Mittel. Nach der Entfernung tragen wir oft noch einen
                Graffitischutz auf - dann lässt sich das nächste Graffiti viel leichter entfernen.
                Viele Bielefelder Schulen und öffentliche Gebäude haben diesen Schutz von uns.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Hochdruckreinigung
              </h2>
              <p className="mb-6">
                Mit unseren Hochdruckreinigern machen wir jeden Dreck weg - bis zu 500 bar Druck,
                heißes Wasser bis 150 Grad. Die Parkplätze vom Real in Sennestadt haben wir letztens
                komplett gereinigt - 10.000 Quadratmeter voller Ölflecken, Kaugummis und eingetretener
                Dreck. Nach unserer Behandlung sah der Platz aus wie neu verlegt. Die Kunden trauten
                ihren Augen nicht!
              </p>
              <p className="mb-6">
                Hochdruckreinigung in Bielefeld machen wir überall - Gehwege, Einfahrten, Terrassen,
                Industrieböden. Besonders nach dem Winter, wenn das Streusalz seine Spuren hinterlassen
                hat, sind wir gefragt. Die ganzen Pflastersteine werden grau und fleckig, Moose und
                Algen setzen sich fest. Mit unserem Heißwasser-Hochdruckreiniger kriegen wir alles
                wieder sauber. Keine Chemie nötig - nur Wasser, Druck und Know-how!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Sandstrahlen
              </h2>
              <p className="mb-6">
                Sandstrahlen ist die härteste Methode der Oberflächenreinigung. Wir nutzen das für
                hartnäckige Verschmutzungen, Rost oder alte Beschichtungen. Bei Gildemeister haben
                wir mal eine komplette Werkshalle sandgestrahlt - alle Stahlträger waren voller Rost
                und alter Farbe. Mit unserem mobilen Sandstrahlgerät haben wir alles blank gemacht.
                Danach konnte neu beschichtet werden, und die Halle sieht aus wie neu gebaut.
              </p>
              <p className="mb-6">
                Beim Sandstrahlen in Bielefeld müssen wir besonders auf den Umweltschutz achten. Das
                Strahlgut muss aufgefangen und entsorgt werden, der Staub darf nicht in die Umgebung
                gelangen. Wir arbeiten mit geschlossenen Systemen und Absaugung. Je nach Material
                verwenden wir verschiedene Strahlmittel - Quarzsand, Glasperlen, Nussschalen oder
                Trockeneis. Für empfindliche Oberflächen nehmen wir weiche Strahlmittel, für harte
                Verschmutzungen entsprechend härtere.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Trockeneisstrahlen
              </h2>
              <p className="mb-6">
                Trockeneisstrahlen ist die sauberste Art der Oberflächenreinigung - keine Rückstände,
                keine Feuchtigkeit, keine Chemie. Mit CO2-Pellets bei minus 78 Grad reinigen wir
                empfindlichste Oberflächen. Im Stadttheater haben wir die historischen Stuckdecken
                mit Trockeneis gereinigt. Der jahrhundertealte Schmutz löste sich wie von selbst,
                ohne dass der empfindliche Stuck beschädigt wurde.
              </p>
              <p className="mb-6">
                Die Technik ist perfekt für Elektronik, Maschinen und Lebensmittelbetriebe. Bei
                Dr. Oetker reinigen wir regelmäßig die Produktionsanlagen mit Trockeneis. Kein
                Wasser, keine Chemie - die Maschinen können sofort wieder laufen. Das CO2 sublimiert,
                geht also direkt vom festen in den gasförmigen Zustand über. Zurück bleibt nur der
                abgelöste Schmutz, der einfach aufgekehrt werden kann. Genial und umweltfreundlich!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Industriereinigung
              </h2>
              <p className="mb-6">
                Industriereinigung in Bielefeld ist unser Spezialgebiet. Von Schüco bis Böllhoff,
                von Goldbeck bis zur Brauerei - wir reinigen alle Industrieanlagen. Produktionshallen,
                Maschinen, Förderanlagen, Tanks - alles muss regelmäßig gereinigt werden. Stillstandzeiten
                kosten Geld, deshalb arbeiten wir schnell und effizient. Oft nachts oder am Wochenende,
                wenn die Produktion ruht.
              </p>
              <p className="mb-6">
                Jede Industrie hat ihre eigenen Anforderungen. In der Lebensmittelindustrie muss
                hygienisch sauber sein, in der Metallindustrie gehts um Öl und Späne, in der Chemie
                um gefährliche Rückstände. Wir haben für alles die richtige Ausrüstung und das
                geschulte Personal. Arbeitssicherheit steht dabei an erster Stelle - Schutzausrüstung,
                Sicherheitsunterweisungen und alle nötigen Zertifikate sind selbstverständlich.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Dachrinnenreinigung
              </h2>
              <p className="mb-6">
                Verstopfte Dachrinnen sind in Bielefeld ein Dauerthema. Die vielen Bäume in der
                Stadt - schön anzusehen, aber im Herbst verstopfen die Blätter alle Rinnen. Wenn
                dann der erste Starkregen kommt, läuft das Wasser über und beschädigt die Fassade.
                Wir reinigen Dachrinnen professionell und schnell. Mit unseren Teleskopstangen und
                Sauggeräten kommen wir überall ran, ohne aufs Dach zu müssen.
              </p>
              <p className="mb-6">
                Nach der Reinigung prüfen wir auch gleich den Zustand der Rinnen. Oft finden wir
                Risse oder lose Verbindungen, die repariert werden müssen. Auf Wunsch installieren
                wir auch Laubschutzgitter - dann bleibt die Rinne länger sauber. Viele Hausverwalter
                in Bielefeld haben einen Wartungsvertrag mit uns. Zweimal im Jahr kommen wir automatisch
                und reinigen alle Dachrinnen. So gibts keine bösen Überraschungen mehr.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Parkplatzreinigung
              </h2>
              <p className="mb-6">
                Parkplätze in Bielefeld sehen nach einem Winter oft übel aus - Streusalz, Ölflecken,
                Reifenabrieb. Die großen Parkplätze am Hauptbahnhof oder beim OWL-Forum reinigen
                wir regelmäßig. Mit unseren Kehrmaschinen und Hochdruckreinigern machen wir alles
                wieder sauber. Besonders hartnäckige Ölflecken behandeln wir mit speziellen Ölentfernern.
                Die ziehen tief ein und lösen selbst altes, eingebranntes Öl.
              </p>
              <p className="mb-6">
                Für Tiefgaragen haben wir spezielle Geräte mit Absaugung - der Dreck wird nicht
                nur weggewaschen, sondern direkt aufgesaugt. So bleibt kein Schlamm in den Ecken
                liegen. Die Markierungen frischen wir auf Wunsch auch gleich auf. Eine saubere
                Tiefgarage macht einen guten Eindruck bei Kunden und Mietern. Viele Bielefelder
                Immobilienverwalter lassen ihre Garagen deshalb regelmäßig von uns reinigen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Spielplatzreinigung
              </h2>
              <p className="mb-6">
                Spielplätze müssen besonders sauber sein - schließlich spielen dort unsere Kinder.
                Die Stadt Bielefeld beauftragt uns regelmäßig mit der Reinigung öffentlicher Spielplätze.
                Sandkästen müssen von Verunreinigungen befreit, Spielgeräte von Moos und Algen gereinigt
                werden. Wir verwenden nur kindersichere, biologisch abbaubare Reinigungsmittel.
              </p>
              <p className="mb-6">
                Ein besonderes Problem sind Graffiti auf Spielgeräten. Die müssen schnell weg, aber
                die Mittel dürfen nicht giftig sein. Wir haben spezielle, ungiftige Graffitientferner,
                die trotzdem effektiv sind. Nach der Reinigung desinfizieren wir auf Wunsch auch
                die Spielgeräte - besonders wichtig in Zeiten von Corona. Die Eltern in Bielefeld
                schätzen unsere gründliche Arbeit, und die Kinder freuen sich über saubere Spielplätze.
              </p>

              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Ihr Partner für Oberflächenreinigung in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 15 Jahren Erfahrung sind wir Ihr zuverlässiger Partner für alle
                  Reinigungsaufgaben. Von der Fassade bis zum Industrieboden - wir machen alles
                  sauber, professionell und umweltfreundlich.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ Modernste Reinigungstechnik</li>
                  <li>✓ Umweltfreundliche Verfahren</li>
                  <li>✓ Geschultes Fachpersonal</li>
                  <li>✓ 24/7 Notdienst verfügbar</li>
                  <li>✓ Faire Festpreise</li>
                </ul>
              </div>
            </div>
          </div>
        </MobileSection>
      </MobileOptimizedContent>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Oberflächenreinigung in Ihrer Nähe</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Schnell vor Ort in ganz Bielefeld und Umgebung
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
              'Sieker'
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
              Häufige Fragen zur Oberflächenreinigung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wie oft sollte eine Fassade gereinigt werden?',
                a: 'Je nach Verschmutzung alle 3-5 Jahre. In stark befahrenen Bereichen öfter, in ruhigen Wohngebieten seltener.'
              },
              {
                q: 'Beschädigt Hochdruckreinigung meine Oberflächen?',
                a: 'Bei fachgerechter Anwendung nicht. Wir passen Druck und Temperatur an das Material an.'
              },
              {
                q: 'Was kostet eine professionelle Reinigung?',
                a: 'Das hängt von Fläche und Verschmutzungsgrad ab. Kleine Fassaden ab 500€, große Projekte individuell.'
              },
              {
                q: 'Arbeiten Sie auch am Wochenende?',
                a: 'Ja, besonders für Gewerbeobjekte arbeiten wir auch nachts und am Wochenende.'
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
              Oberflächenreinigung in Bielefeld - Jetzt anfragen!
            </h2>
            <p className="text-white/80 mb-8">
              15 Jahre Erfahrung ✓ Umweltfreundlich ✓ Faire Preise ✓ Schneller Service
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
