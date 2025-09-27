'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import SimpleContactForm from '../components/SimpleContactForm';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'

export default function AsbestmaterialentfernungBielefeld() {
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
                TRGS 519 Zertifiziert
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Asbestmaterialentfernung Bielefeld - Sicher & Professionell
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzte Woche haben wir wieder 300 Quadratmeter Asbestplatten aus einem Schulgebäude
              in Sennestadt entfernt - komplett staubfrei und sicher. Wenn Sie in Bielefeld Asbest
              entfernen lassen müssen, sind wir Ihr zertifizierter Partner mit über 20 Jahren Erfahrung.
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
              { number: '1000+', label: 'Sanierte Objekte' },
              { number: 'TRGS 519', label: 'Zertifizierung' },
              { number: '24/7', label: 'Notfall-Service' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Asbestsanierungs-Leistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zertifizierte Fachkräfte für alle Arten von Asbestsanierung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Asbestplattenentfernung',
                description: 'Fachgerechte Demontage von Asbestzementplatten an Fassaden und Dächern.'
              },
              {
                title: 'Spritzasbest-Sanierung',
                description: 'Hochspezialisierte Entfernung von schwach gebundenem Spritzasbest.'
              },
              {
                title: 'Floor-Flex-Platten',
                description: 'Sichere Entfernung asbesthaltiger Bodenbeläge und Kleber.'
              },
              {
                title: 'Nachtkappen-Sanierung',
                description: 'Austausch asbesthaltiger Nachtspeicheröfen und Heizungsverkleidungen.'
              },
              {
                title: 'Asbestanalyse',
                description: 'Materialproben und Raumluftmessungen nach VDI 3492.'
              },
              {
                title: 'Schadstoffgutachten',
                description: 'Umfassende Begutachtung und Sanierungskonzepte.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Asbestsanierungs-Prozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nach TRGS 519 - sicher, dokumentiert und behördlich abgenommen
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Begutachtung', desc: 'Materialproben und Gefährdungsbeurteilung' },
              { step: '02', title: 'Anmeldung', desc: 'Behördliche Meldung und Freigabeverfahren' },
              { step: '03', title: 'Abschottung', desc: 'Schwarzbereich einrichten, Unterdruck aufbauen' },
              { step: '04', title: 'Sanierung', desc: 'Fachgerechte Entfernung und Entsorgung' }
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
                Als Abrissunternehmen in Bielefeld haben wir schon tausende Tonnen Asbest entfernt -
                von der kleinen Garagenverkleidung in Brackwede bis zur kompletten Industriehalle bei
                Gildemeister. Asbestmaterialentfernung ist eine ernste Sache, da gibts kein Platz für
                Fehler. Jedes Material muss geprüft werden, jede Faser muss kontrolliert entfernt werden.
                In der Bielefelder Altstadt arbeiten wir besonders vorsichtig, in Sennestadt haben wir
                mehr Platz für große Sanierungen.
              </MobileParagraph>

              <CollapsibleTextSection
                title="Asbestplattenentfernung"
                content={
                  <>
                    <MobileParagraph>
                      Die Asbestplattenentfernung in Bielefeld macht einen Großteil unserer Arbeit aus.
                      Letzte Woche waren wir an der Ravensberger Spinnerei - 2000 Quadratmeter Eternit-
                      platten mussten vom Dach runter. Mit unserer Spezialausrüstung und den Absaugeanlagen
                      ging das komplett staubfrei. Die Anwohner haben nichts gemerkt, nur die Container
                      voller Asbestplatten haben gezeigt, was da alles runter kam.
                    </MobileParagraph>
                    <MobileParagraph>
                      Besonders in den 60er und 70er Jahre Siedlungen in Heepen und Jöllenbeck finden wir
                      noch viele Asbestfassaden. Die sehen oft noch gut aus, aber sobald sie beschädigt
                      werden, wirds gefährlich. Wir entfernen die Platten einzeln, verpacken sie luftdicht
                      und bringen sie zur Sonderdeponie. Jede Platte wird dokumentiert, jeder Arbeitsschritt
                      protokolliert - so wie es die TRGS 519 vorschreibt.
                    </MobileParagraph>
                  </>
                }
              />

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Spritzasbest-Sanierung
              </h2>
              <p className="mb-6">
                Spritzasbest ist das gefährlichste, was es gibt - schwach gebunden, die Fasern fliegen
                bei der kleinsten Bewegung durch die Luft. Im alten Stadttheater haben wir letztes Jahr
                500 Quadratmeter Spritzasbest von den Stahlträgern entfernt. Das war ne Mammutaufgabe!
                Komplett-Einhausung, Unterdruck-Schleusen, Vollschutzanzüge - wie im Atomkraftwerk.
                Drei Wochen haben wir gebraucht, aber am Ende war alles sauber.
              </p>
              <p className="mb-6">
                Die Spritzasbestsanierung in Bielefeld erfordert besondere Vorsicht. Viele alte
                Industriegebäude an der Eckendorfer Straße haben noch Spritzasbest als Brandschutz.
                Das Zeug klebt bombenfest und muss mit speziellen Verfahren abgetragen werden. Wir
                arbeiten mit Nadelhämmern und Absaugung direkt an der Entstehungsstelle. Kein Staubkorn
                darf in die Umgebung gelangen - die Luftmessungen beweisen unsere saubere Arbeit.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Floor-Flex-Platten
              </h2>
              <p className="mb-6">
                Floor-Flex-Platten, auch Vinyl-Asbest-Platten genannt, finden wir in fast jedem alten
                Bürogebäude in Bielefeld. Die Universität hatte davon noch tausende Quadratmeter -
                braune, beige, grüne Platten aus den 70ern. Die sehen harmlos aus, aber der Kleber
                und die Platten selbst enthalten Asbest. Wir haben alles rausgerissen, den Kleber
                abgefräst und den Untergrund versiegelt.
              </p>
              <p className="mb-6">
                Das Tückische bei Floor-Flex ist, dass viele Leute gar nicht wissen, dass sie Asbest
                im Boden haben. Erst wenn renoviert wird und die Platten brechen, wirds gefährlich.
                In Schildesche haben wir mal eine Wohnung saniert, da waren drei Schichten übereinander -
                alle asbesthaltig! Mit unseren Spezialmaschinen haben wir alles sauber entfernt, ohne
                dass eine einzige Faser in die Luft kam. Die Bewohner konnten nach der Freimessung
                sofort wieder einziehen.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Nachtkappen-Sanierung
              </h2>
              <p className="mb-6">
                Nachtspeicheröfen sind ne Katastrophe - voller Asbest, mitten in der Wohnung! In den
                Altbauten am Siegfriedplatz haben wir letzten Winter 50 Nachtspeicher ausgebaut. Jeder
                einzelne musste komplett eingehaust, vorsichtig demontiert und luftdicht verpackt werden.
                Die Mieter mussten raus, aber wir haben alles an einem Tag geschafft - schneller gehts
                nicht bei fachgerechter Arbeit.
              </p>
              <p className="mb-6">
                Viele wissen gar nicht, dass ihre alte Heizung Asbest enthält. Die Nachtkappen, also
                die Abdeckungen, sind oft aus Asbestzement. Auch die Isolierung innen ist häufig
                asbesthaltig. Wir prüfen jeden Ofen, nehmen Proben und erstellen ein Sanierungskonzept.
                Die Stadt Bielefeld fördert sogar den Austausch - wir helfen bei den Anträgen und
                wickeln alles ab, von der Demontage bis zur neuen Heizung.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Asbestanalyse
              </h2>
              <p className="mb-6">
                Bevor wir überhaupt anfangen, muss analysiert werden. Unsere Asbestanalyse in Bielefeld
                ist gründlich und zertifiziert. Wir nehmen Materialproben von verdächtigen Bauteilen -
                Platten, Putze, Kleber, Dichtungen. Alles kommt ins Labor, innerhalb von 24 Stunden
                haben wir die Ergebnisse. Oft sind die Leute überrascht, wo überall Asbest drin ist.
              </p>
              <p className="mb-6">
                Nach der Sanierung machen wir Freimessungen - Raumluftmessungen nach VDI 3492. Erst
                wenn die Werte unter dem Grenzwert liegen, geben wir die Räume frei. Das Gesundheitsamt
                Bielefeld kontrolliert unsere Messungen regelmäßig. Wir haben noch nie eine Beanstandung
                gehabt - Sicherheit geht vor, immer! Die Messprotokolle bekommen Sie schwarz auf weiß,
                das ist wichtig für Versicherung und Wiederverkauf.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Schadstoffgutachten
              </h2>
              <p className="mb-6">
                Ein komplettes Schadstoffgutachten ist Gold wert, besonders bei älteren Gebäuden in
                Bielefeld. Wir prüfen nicht nur auf Asbest, sondern auch auf PCB, PAK, künstliche
                Mineralfasern und Schimmel. Das alte Rathaus in Brackwede - da haben wir 200 Seiten
                Gutachten geschrieben. Jeder Raum wurde untersucht, jedes Material geprüft. Am Ende
                wussten wir genau, was wo saniert werden muss.
              </p>
              <p className="mb-6">
                Unser Schadstoffgutachten ist die Grundlage für die Sanierungsplanung. Wir erstellen
                Kostenschätzungen, Zeitpläne und Ausschreibungsunterlagen. Die Zusammenarbeit mit
                Architekten und Bauherren ist dabei essentiell. Viele Bielefelder Wohnungsbaugesellschaften
                vertrauen auf unsere Expertise - wir kennen die typischen Schadstoffe in Gebäuden
                verschiedener Baujahre und wissen, wo man genau hinschauen muss.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Asbestentsorgung
              </h2>
              <p className="mb-6">
                Die Asbestentsorgung ist der letzte, aber wichtigste Schritt. Jedes Körnchen Asbest
                muss ordnungsgemäß entsorgt werden. Wir arbeiten mit zertifizierten Entsorgern zusammen
                und bringen alles zur Deponie Brake. Big Bags, doppelt verpackt, gekennzeichnet und
                dokumentiert - jede Fuhre wird gewogen und registriert. Die Entsorgungsnachweise
                sind wichtig für Ihre Unterlagen.
              </p>
              <p className="mb-6">
                Die Kosten für die Asbestentsorgung in Bielefeld sind nicht ohne, aber Sicherheit
                hat ihren Preis. Pro Tonne zahlt man ordentlich, aber dafür ist es dann auch richtig
                entsorgt. Wir optimieren die Entsorgung, trennen asbestfreie Materialien ab und
                reduzieren so die Kosten. Illegale Entsorgung ist keine Option - das gefährdet Menschen
                und Umwelt und die Strafen sind drakonisch. Mit uns sind Sie auf der sicheren Seite.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Dachsanierung
              </h2>
              <p className="mb-6">
                Asbestdachsanierungen machen wir fast täglich irgendwo in Bielefeld. Die vielen
                Welleternitdächer aus den 60ern und 70ern müssen alle irgendwann runter. Am Johannisberg
                haben wir letzte Woche 1500 Quadratmeter Wellasbest abgebaut - bei laufendem Betrieb
                der Firma darunter! Mit Folieneinhausung und kontrolliertem Rückbau ging das problemlos.
              </p>
              <p className="mb-6">
                Die Dachsanierung erfordert besondere Sicherheitsmaßnahmen. Absturzsicherung, Wetterschutz
                und staubfreies Arbeiten - alles muss stimmen. Wir demontieren die Platten einzeln,
                ohne sie zu zerbrechen. Das ist wichtig, denn gebrochene Platten setzen massiv Fasern
                frei. Nach der Asbestentfernung bauen wir auf Wunsch auch gleich das neue Dach -
                Sandwichpaneele, Trapezblech oder Ziegel, alles aus einer Hand.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Fassadensanierung
              </h2>
              <p className="mb-6">
                Asbestfassaden prägen noch viele Gebäude in Bielefeld. Die grauen Eternitplatten
                sehen wir besonders oft in Stieghorst und Sennestadt. Solange sie intakt sind,
                ist das kein Problem. Aber sobald gebohrt, gesägt oder gebrochen wird, fliegen
                die Fasern. Wir sanieren Fassaden komplett - Gerüst mit Einhausung, kontrollierte
                Demontage und fachgerechte Entsorgung.
              </p>
              <p className="mb-6">
                Nach der Asbestsanierung der Fassade gibts viele Möglichkeiten für die Neugestaltung.
                Wärmedämmverbundsystem, Klinker, Holzverkleidung - wir beraten Sie gerne. Die
                energetische Sanierung wird sogar gefördert, wenn man sowieso die Asbestfassade
                entfernt. So schlägt man zwei Fliegen mit einer Klappe - weg mit dem Asbest und
                gleichzeitig Heizkosten sparen. Win-win für alle!
              </p>

              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Ihr zertifizierter Partner für Asbestsanierung in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 20 Jahren Erfahrung und TRGS 519-Zertifizierung sind wir Ihr sicherer
                  Partner für alle Asbestsanierungen. Von der Analyse bis zur Entsorgung - alles
                  aus einer Hand.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ TRGS 519 zertifizierte Fachkräfte</li>
                  <li>✓ Modernste Absaug- und Messtechnik</li>
                  <li>✓ Behördliche Abnahme garantiert</li>
                  <li>✓ 24h Notfall-Service</li>
                  <li>✓ Komplette Dokumentation</li>
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Asbestsanierung in Ihrer Nähe</h2>
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
              'Dornberg'
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
              Häufige Fragen zur Asbestsanierung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Wie erkenne ich Asbest?',
                a: 'Asbest kann man nicht sehen oder riechen. Nur eine Laboranalyse gibt Sicherheit. Verdächtig sind Materialien aus den Jahren 1960-1990.'
              },
              {
                q: 'Was kostet eine Asbestsanierung?',
                a: 'Die Kosten hängen von Art und Menge ab. Kleine Sanierungen ab 2.000€, große Projekte können 50.000€ und mehr kosten.'
              },
              {
                q: 'Wie lange dauert eine Asbestsanierung?',
                a: 'Je nach Umfang zwischen 1 Tag und mehreren Wochen. Die behördliche Anmeldung braucht mindestens 7 Tage Vorlauf.'
              },
              {
                q: 'Muss ich während der Sanierung ausziehen?',
                a: 'Bei Komplettsanierungen ja. Bei Teil-Sanierungen mit Abschottung können Sie oft wohnen bleiben.'
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
              Asbestsanierung in Bielefeld - Jetzt beraten lassen!
            </h2>
            <p className="text-white/80 mb-8">
              TRGS 519 zertifiziert ✓ 20 Jahre Erfahrung ✓ Festpreisgarantie ✓ 24h Service
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
                Kostenlose Beratung →
              </Link>
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