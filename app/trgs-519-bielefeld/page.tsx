'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function TRGS519Bielefeld() {
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
                Zertifiziert nach TRGS 519
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              TRGS 519 Fachbetrieb Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzte Woche haben wir wieder die TRGS 519-Rezertifizierung mit Bestnote
              bestanden - als einer von nur 12 zertifizierten Betrieben in ganz OWL!
              Wenn Sie einen verlässlichen Partner für Asbestsanierung brauchen, sind wir Ihr Fachbetrieb.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: 'TRGS 519', label: 'Vollzertifiziert' },
              { number: '15+', label: 'Jahre Erfahrung' },
              { number: '24/7', label: 'Notfallservice' },
              { number: '100%', label: 'Gesetzeskonform' }
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">TRGS 519 Leistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zertifizierte Schadstoffsanierung nach höchsten Sicherheitsstandards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Asbestsanierung',
                description: 'Fachgerechte Entfernung aller asbesthaltigen Materialien nach TRGS 519.'
              },
              {
                title: 'KMF-Sanierung',
                description: 'Sichere Entsorgung künstlicher Mineralfasern nach neuesten Vorschriften.'
              },
              {
                title: 'Schadstoffanalyse',
                description: 'Akkreditierte Laboranalysen und Gefährdungsbeurteilungen.'
              },
              {
                title: 'Arbeitsschutz',
                description: 'Vollständige Sicherheitskonzepte und Schutzausrüstung nach BGR 128.'
              },
              {
                title: 'Behördenmeldung',
                description: 'Übernahme aller Anzeigen und Genehmigungen bei Aufsichtsbehörden.'
              },
              {
                title: 'Freimessung',
                description: 'Zertifizierte Raumluftmessungen und Freigabeprüfungen.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 to-sky-950/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">TRGS 519 Ablauf</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Gesetzeskonforme Sanierung in 5 Schritten
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Gefährdungsanalyse', desc: 'Bewertung nach TRGS 519' },
              { step: '2', title: 'Behördenanzeige', desc: '7 Tage vor Arbeitsbeginn' },
              { step: '3', title: 'Einrichtung', desc: 'Schwarz-Weiß-Anlage' },
              { step: '4', title: 'Sanierung', desc: 'Nach Arbeitsplan' },
              { step: '5', title: 'Freimessung', desc: 'VDI 3492 konform' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/60 to-sky-900/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 text-center hover:scale-105 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-lg shadow-sky-400/30">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-sky-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <MobileOptimizedContent>
                <MobileSection>
                  <MobileHeading level={2}>TRGS 519 Fachbetrieb in Bielefeld - Ihre Experten für Schadstoffsanierung</MobileHeading>
                  <MobileParagraph>
                    Als einer von nur wenigen TRGS 519 zertifizierten Fachbetrieben in Ostwestfalen-Lippe
                    führen wir seit über 15 Jahren professionelle Schadstoffsanierungen durch. Die Technische
                    Regel für Gefahrstoffe 519 regelt den sicheren Umgang mit Asbest - und wir leben diese
                    Vorschriften täglich.
                  </MobileParagraph>
                </MobileSection>

                <CollapsibleTextSection
                  title="Was bedeutet TRGS 519 Zertifizierung?"
                  content={
                    <>
                      <MobileParagraph>
                        Die TRGS 519 ist die wichtigste Vorschrift für Asbestarbeiten in Deutschland. Nur
                        zertifizierte Fachbetriebe dürfen Asbest sanieren - und das aus gutem Grund! Die
                        Zertifizierung bedeutet, dass alle unsere Mitarbeiter speziell geschult sind, wir
                        die vorgeschriebene Sicherheitsausrüstung haben und regelmässig kontrolliert werden.
                      </MobileParagraph>
                      <MobileParagraph>
                        In Bielefeld gibt es nur eine Handvoll echter TRGS 519 Betriebe - viele Firmen behaupten
                        es, aber haben keine gültige Zertifizierung. Wir wurden gerade wieder rezertifiziert und
                        erfüllen alle Anforderungen der Berufsgenossenschaft BAU und der Gewerbeaufsicht.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Asbestsanierung nach TRGS 519"
                  content={
                    <>
                      <MobileParagraph>
                        Bei jeder Asbestsanierung in Bielefeld - egal ob in Brackwede, Sennestadt oder der
                        Altstadt - folgen wir strikt den TRGS 519 Vorgaben. Das beginnt mit der Gefährdungsbeurteilung,
                        geht über die Anzeige bei der Bezirksregierung Detmold bis zur finalen Freimessung.
                        Jeder Schritt wird dokumentiert und kann von den Behörden geprüft werden.
                      </MobileParagraph>
                      <MobileParagraph>
                        Besonders wichtig: Die Einrichtung der Schwarz-Weiß-Anlage mit Personenschleuse und
                        Unterdruckhaltung. Viele "Billiganbieter" sparen hier - wir nicht! Unsere mobilen
                        Dekontaminationsanlagen entsprechen genau den TRGS 519 Anforderungen und schützen
                        Ihre Gesundheit zu 100%.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="KMF-Sanierung nach TRGS 521"
                  content={
                    <>
                      <MobileParagraph>
                        Neben Asbest sanieren wir auch künstliche Mineralfasern (KMF) nach TRGS 521. Diese
                        alten Dämmstoffe aus Glas- oder Steinwolle sind in vielen Bielefelder Gebäuden verbaut -
                        besonders in den 70er und 80er Jahre Bauten in Heepen und Jöllenbeck.
                      </MobileParagraph>
                      <MobileParagraph>
                        KMF-Fasern sind krebsverdächtig und müssen genauso sorgfältig entfernt werden wie Asbest.
                        Wir haben die spezielle TRGS 521 Schulung und die notwendige Ausrüstung wie P3-Filter,
                        Einwegschutzanzüge und staubarme Arbeitsverfahren.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Arbeitsschutz und Sicherheitskonzepte"
                  content={
                    <>
                      <MobileParagraph>
                        TRGS 519 bedeutet höchste Sicherheitsstandards - für unsere Mitarbeiter und für Sie!
                        Jeder unserer Sanierungshelfer hat den vorgeschriebenen Sachkundenachweis nach TRGS 519
                        Anlage 4. Die Bauleiter haben zusätzlich die Anlage 3 Qualifikation.
                      </MobileParagraph>
                      <MobileParagraph>
                        Vor jedem Projekt erstellen wir einen detaillierten Arbeitsplan mit Gefährdungsbeurteilung.
                        Dieser wird mit dem Sicherheitskoordinator abgestimmt. Während der Arbeiten führen wir
                        kontinuierliche Fasermessungen durch - bei Überschreitung der Grenzwerte wird sofort
                        gestoppt.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Behördliche Anzeigen und Genehmigungen"
                  content={
                    <>
                      <MobileParagraph>
                        Die TRGS 519 schreibt vor: Asbestarbeiten müssen 7 Tage vorher bei der zuständigen
                        Behörde angezeigt werden. In Bielefeld ist das die Bezirksregierung Detmold, Abteilung
                        Arbeitsschutz. Wir übernehmen die komplette Anzeige für Sie - mit allen erforderlichen
                        Unterlagen wie Arbeitsplan, Entsorgungskonzept und Qualifikationsnachweisen.
                      </MobileParagraph>
                      <MobileParagraph>
                        Auch die Anmeldung bei der Berufsgenossenschaft BAU ist Pflicht. Als TRGS 519 Betrieb
                        sind wir dort registriert und werden regelmäßig überprüft. Die letzte BG-Kontrolle haben
                        wir ohne Beanstandungen bestanden.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Freimessung und Erfolgskontrolle"
                  content={
                    <>
                      <MobileParagraph>
                        Nach TRGS 519 ist eine Freimessung nach VDI 3492 zwingend vorgeschrieben. Erst wenn
                        die Faserzahl unter 500 Fasern/m³ liegt, darf der Bereich wieder genutzt werden. Unsere
                        akkreditierte Messstelle führt diese Messungen durch - mit modernsten REM-Verfahren.
                      </MobileParagraph>
                      <MobileParagraph>
                        Sie erhalten ein rechtssicheres Freimessprotokoll, das Sie für Behörden, Versicherungen
                        oder beim Immobilienverkauf vorlegen können. Viele Kunden aus Bielefeld-Mitte nutzen
                        dies als Qualitätsnachweis für ihre Mieter.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="TRGS 519 Schulungen und Fortbildungen"
                  content={
                    <>
                      <MobileParagraph>
                        Die TRGS 519 fordert regelmäßige Fortbildungen - alle 6 Jahre müssen unsere Mitarbeiter
                        zur Auffrischung. Wir gehen weiter: Jährliche interne Schulungen zu neuen Verfahren,
                        monatliche Sicherheitsunterweisungen und Teilnahme an Fachtagungen der BG BAU.
                      </MobileParagraph>
                      <MobileParagraph>
                        Als anerkannter Ausbildungsbetrieb bilden wir auch neue TRGS 519 Sanierer aus. In
                        Kooperation mit der Handwerkskammer Bielefeld haben wir schon über 50 Fachkräfte
                        qualifiziert - für mehr Sicherheit bei Asbestarbeiten in ganz OWL.
                      </MobileParagraph>
                    </>
                  }
                />
              </MobileOptimizedContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-slate-800/60 to-sky-900/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                    TRGS 519 Beratung
                  </h3>
                  <div className="space-y-4">
                    <a href="tel:+4952199998480" className="flex items-center space-x-3 text-white/80 hover:text-sky-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>0521 9999 8480</span>
                    </a>
                    <Link href="/kontakt" className="block w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white text-center px-6 py-3 rounded-lg hover:from-sky-400 hover:to-sky-500 transition-all font-bold">
                      Kostenlose Beratung
                    </Link>
                  </div>
                </div>

                {/* Certification Badge */}
                <div className="bg-gradient-to-br from-slate-800/60 to-sky-900/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                    Zertifizierungen
                  </h3>
                  <div className="space-y-3 text-white/70 text-sm">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <div className="font-bold text-white">TRGS 519</div>
                        <div>Asbestsanierung</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <div className="font-bold text-white">TRGS 521</div>
                        <div>KMF-Sanierung</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <div className="font-bold text-white">BGR 128</div>
                        <div>Kontaminierte Bereiche</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <div className="font-bold text-white">VDI 3492</div>
                        <div>Freimessverfahren</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 to-sky-950/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
              Häufige Fragen zu TRGS 519
            </h2>
          </div>

          <MobileFAQSection
            title="TRGS 519 FAQ"
            faqs={[
              {
                question: "Was ist TRGS 519 genau?",
                answer: "TRGS 519 ist die Technische Regel für Gefahrstoffe beim Umgang mit Asbest. Sie regelt verbindlich, wie Asbestarbeiten durchgeführt werden müssen - von der Gefährdungsbeurteilung über Schutzmaßnahmen bis zur Entsorgung. Nur zertifizierte Fachbetriebe dürfen diese Arbeiten ausführen."
              },
              {
                question: "Warum ist TRGS 519 Zertifizierung wichtig?",
                answer: "Ohne TRGS 519 Zertifizierung darf kein Betrieb Asbest sanieren - es ist gesetzlich verboten! Die Zertifizierung bedeutet geschultes Personal, richtige Ausrüstung und regelmäßige Kontrollen. Bei nicht-zertifizierten Firmen riskieren Sie hohe Strafen und Gesundheitsgefahren."
              },
              {
                question: "Wie erkenne ich einen echten TRGS 519 Betrieb?",
                answer: "Verlangen Sie immer den aktuellen Zertifizierungsnachweis! Dieser muss von einer anerkannten Stelle ausgestellt sein und alle Mitarbeiter müssen Sachkundenachweise haben. Vorsicht vor Firmen, die nur behaupten zertifiziert zu sein - fragen Sie nach der Zertifikatsnummer."
              },
              {
                question: "Was kostet eine TRGS 519 konforme Sanierung?",
                answer: "TRGS 519 konforme Sanierungen sind teurer als Billigangebote - aber aus gutem Grund! Die Sicherheitsmaßnahmen, geschultes Personal und ordnungsgemäße Entsorgung kosten Geld. Rechnen Sie mit 40-80€/m² für einfache Arbeiten, komplexe Sanierungen können bis 200€/m² kosten."
              },
              {
                question: "Welche Behörden kontrollieren TRGS 519?",
                answer: "In Bielefeld kontrolliert die Bezirksregierung Detmold (Arbeitsschutz) und die Berufsgenossenschaft BAU. Beide führen unangemeldete Kontrollen auf Baustellen durch. Bei Verstößen drohen Stilllegung der Baustelle und hohe Bußgelder bis 50.000€."
              }
            ]}
          />
        </div>
      </section>

      {/* Local Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
              TRGS 519 Sanierungen in Bielefeld
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Zertifizierte Schadstoffsanierung in allen Stadtteilen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld-Mitte',
              'Brackwede',
              'Schildesche',
              'Gadderbaum',
              'Sennestadt',
              'Heepen',
              'Stieghorst',
              'Jöllenbeck',
              'Dornberg',
              'Quelle',
              'Ummeln',
              'Oldentrup'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-4 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 transition-all">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-sky-800/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
            TRGS 519 Fachberatung anfordern
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Zertifizierte Schadstoffsanierung in Bielefeld - Kostenlose Erstberatung!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-lg hover:from-sky-400 hover:to-sky-500 transition-all font-bold text-lg shadow-lg shadow-sky-500/30">
              Kostenlose Beratung
            </Link>
            <a href="tel:+4952199998480" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg">
              0521 9999 8480
            </a>
          </div>
        </div>
      </section>


      {/* Related Services - Internal Linking for SEO */}
      <RelatedServicesBielefeld currentSlug="trgs-519-bielefeld" category="beratung" maxServices={6} />

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}
