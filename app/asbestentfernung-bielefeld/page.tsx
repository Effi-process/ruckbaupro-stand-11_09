'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';
import ContactSection from '../components/ContactSection';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'
import MobileHeader from '../components/MobileHeader';

export default function AsbestentfernungBielefeld() {
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
      <MobileHeader />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                TRGS 519 Zertifizierter Fachbetrieb
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Asbestentfernung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Letzten Winter haben wir allein in Brackwede über 30 Asbestdächer saniert -
              viele Hausbesitzer wussten garnicht, dass ihr Welleternit asbesthaltig war.
              Als TRGS 519 zertifizierter Fachbetrieb sorgen wir für sichere Asbestentfernung.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1.500+', label: 'Sanierte Objekte' },
              { number: '24h', label: 'Notdienst' },
              { number: '100%', label: 'Zertifiziert' },
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

      {/* Service Showcase Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Asbestentfernungs-Leistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professionelle Asbestsanierung nach höchsten Sicherheitsstandards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Asbestdachsanierung',
                description: 'Professionelle Entfernung von Welleternit und asbesthaltigen Dacheindeckungen.'
              },
              {
                title: 'Asbestfassadensanierung',
                description: 'Sichere Demontage asbesthaltiger Fassadenverkleidungen und Eternitplatten.'
              },
              {
                title: 'Asbestbodenentfernung',
                description: 'Entfernung von Floor-Flex-Platten und asbesthaltigen Klebern.'
              },
              {
                title: 'Rohrisolierung entfernen',
                description: 'Sanierung asbesthaltiger Rohrleitungsisolierungen in Heizungskellern.'
              },
              {
                title: 'Asbestanalyse & Gutachten',
                description: 'Schnelle Materialproben und Laboranalyse binnen 24 Stunden.'
              },
              {
                title: 'Notfall-Asbestsanierung',
                description: '24/7 Notdienst bei Asbestfunden oder Beschädigungen.'
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Ablauf</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Von der Analyse bis zur Entsorgung - alles aus einer Hand
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Materialprobe', desc: 'Kostenlose Erstberatung & Analyse' },
              { step: '2', title: 'Genehmigung', desc: 'Behördenanmeldung übernehmen wir' },
              { step: '3', title: 'Schutzmaßnahmen', desc: 'Abschottung & Sicherheitsvorkehrungen' },
              { step: '4', title: 'Entfernung', desc: 'Fachgerechte Asbestdemontage' },
              { step: '5', title: 'Freimessung', desc: 'Entsorgung & Dokumentation' }
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
                  <MobileHeading level={2}>Professionelle Asbestentfernung in Bielefeld</MobileHeading>
                  <MobileParagraph className="">
                    In Bielefeld stehen noch tausende Gebäude mit Asbest, besonders in den Industriegebieten
                    und älteren Wohnvierteln. Als TRGS 519 zertifizierter Fachbetrieb sorgen wir für sichere
                    und gesetzeskonforme Asbestentfernung in ganz Ostwestfalen-Lippe.
                  </MobileParagraph>
                </MobileSection>

                <CollapsibleTextSection
                  title="Asbestdachsanierung Bielefeld"
                  content={
                    <>
                      <MobileParagraph className="">
                        Die meisten Eternitdächer in Bielefeld wurden zwischen 1960 und 1990 verbaut - fast alle
                        enthalten Asbest. Besonders betroffen sind die Stadtteile Heepen, Schildesche und Sennestadt.
                        Wir entfernen Ihre alte Asbesteindeckung professionel und montieren auf Wunsch direkt eine
                        neue Eindeckung.
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Unsere Spezialisten kennen die lokalen Bauvorschriften und arbeiten eng mit dem Bauamt
                        Bielefeld zusammen. Die Entsorgung erfolgt über die zugelassene Deponie in Bielefeld-Herford.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Asbestfassadensanierung"
                  content={
                    <>
                      <MobileParagraph className="">
                        Viele Gewerbegebäude entlang der Eckendorfer Straße und im Industriegebiet Oldentrup haben
                        noch asbesthaltige Fassadenverkleidungen. Diese Eternitplatten müssen bei Sanierungen oder
                        Abriss fachgerecht entfernt werden.
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Wir errichten staubdichte Einhausungen und nutzen spezielle Absauganlagen, damit keine
                        Fasern in die Umgebung gelangen. Nach der Demontage können wir moderne, energieeffiziente
                        Fassadensysteme montieren.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Asbestbodenbeläge entfernen"
                  content={
                    <>
                      <MobileParagraph className="">
                        Floor-Flex-Platten und Cushion-Vinyl-Beläge finden sich noch in vielen Bielefelder Altbauten,
                        besonders rund um den Siegfriedplatz und die Altstadt. Der schwarze Kleber unter diesen Böden
                        enthält oft bis zu 50% Asbest!
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Wir entfernen diese Beläge staubfrei mit Spezialmaschinen und entsorgen sie ordnungsgemäß.
                        Viele Kunden sind überrascht, wenn wir in ihrem 70er-Jahre Haus in Quelle oder Ummeln
                        asbesthaltige Böden finden.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Asbesthaltige Rohrisolierungen"
                  content={
                    <>
                      <MobileParagraph className="">
                        In den Kellern vieler Mehrfamilienhäuser in Bielefeld-Mitte und am Kesselbrink finden sich
                        noch alte Heizungsrohre mit asbesthaltiger Isolierung. Diese sogenannte "Spritzasbest" ist
                        besonders gefährlich, weil sie schwach gebunden ist und leicht Fasern freisetzt.
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Wir sanieren diese Bereiche unter höchsten Sicherheitsvorkehrungen mit Vollschutzanzügen
                        und Atemschutz. Nach der Sanierung installieren wir moderne, energiesparende Isolierungen.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Asbestentsorgung und Dokumentation"
                  content={
                    <>
                      <MobileParagraph className="">
                        Die fachgerechte Entsorgung ist genauso wichtig wie die sichere Demontage. Wir arbeiten
                        mit der Deponie Bielefeld-Herford und haben alle erforderlichen Transportgenehmigungen.
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Jede Entsorgung wird lückenlos dokumentiert - Sie erhalten Entsorgungsnachweise,
                        Wiegescheine und Freimessungsprotokolle. Diese Dokumente sind wichtig für den
                        Wiederverkauf Ihrer Immobilie oder bei Vermietung.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Notfall-Asbestsanierung in Bielefeld"
                  content={
                    <>
                      <MobileParagraph className="">
                        Manchmal wird Asbest erst während laufender Bauarbeiten entdeckt - dann muss es schnell
                        gehen. Unser 24-Stunden-Notdienst ist immer erreichbar.
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Wir waren schon bei Wasserschäden in Jöllenbeck, wo die Deckenplatten asbesthaltig waren,
                        oder bei Bränden in Stieghorst, wo asbesthaltige Materialien beschädigt wurden. In solchen
                        Fällen sichern wir sofort den Bereich ab und beginnen mit der Sanierung.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Kosten und Förderungen"
                  content={
                    <>
                      <MobileParagraph className="">
                        Die Stadt Bielefeld und das Land NRW bieten verschiedene Förderprogramme für energetische
                        Sanierungen, die oft mit Asbestentfernungen kombiniert werden können.
                      </MobileParagraph>
                      <MobileParagraph className="">
                        Eine typische Dachsanierung mit 150m² Welleternit kostet zwischen 8.000 und 12.000 Euro
                        inklusive Entsorgung. Bei gleichzeitiger Dämmung können Sie bis zu 20% Förderung erhalten.
                        Kleinere Projekte beginnen schon ab 500 Euro.
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
                    Sofort-Kontakt
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

                {/* Service Areas */}
                <div className="bg-gradient-to-br from-slate-800/60 to-sky-900/40 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                    Einsatzgebiete
                  </h3>
                  <div className="space-y-2 text-white/70 text-sm">
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
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{area}</span>
                      </div>
                    ))}
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
              Häufige Fragen
            </h2>
          </div>

          <MobileFAQSection
            title="Häufige Fragen zur Asbestentfernung"
            faqs={[
              {
                question: "Wie erkenn ich Asbest in meinem Haus?",
                answer: "Asbest wurde vor allem in Häusern vor 1993 verbaut - besonders häufig in den alten Industrievierteln von Brackwede und Heepen. Typische Asbestmaterialen sind wellige Eternitdächer, alte Fassadenplatten, Vinylbodenbeläge mit schwarzem Kleber und alte Rohrisolierungen."
              },
              {
                question: "Was kostet eine Asbestsanierung?",
                answer: "Die Kosten hängen von vielen Faktoren ab - Art des Materials, Menge, Zugänglichkeit. Eine kleine Asbestsanierung wie die Entfernung von 50m² Welleternit kostet ab 2.500€. Größere Projekte wie komplette Dachsanierungen beginnen bei 8.000€."
              },
              {
                question: "Wie lange dauert eine Asbestentfernung?",
                answer: "Kleinere Projekte wie Bodenbeläge können wir meist innerhalb von 1-2 Tagen erledigen. Größere Sanierungen wie komplette Dächer dauern 3-7 Tage. Die genaue Dauer hängt von der Größe und dem Asbesttyp ab."
              },
              {
                question: "Brauche ich eine Genehmigung?",
                answer: "Ja, in Bielefeld müssen alle Asbestarbeiten beim Amt für Umwelt angemeldet werden. Wir übernehmen die komplette Anmeldung für Sie inklusive aller erforderlichen Dokumente und Nachweise."
              },
              {
                question: "Muss ich während der Sanierung ausziehen?",
                answer: "Bei Außenarbeiten wie Dach- oder Fassadensanierungen können Sie meist wohnen bleiben. Bei Innenraumarbeiten empfehlen wir für die Dauer der Arbeiten alternative Unterkünfte."
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-sky-800/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
            Jetzt kostenlose Asbestanalyse anfragen
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schnelle Terminvergabe in ganz Bielefeld - Meist noch diese Woche möglich!
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

      {/* Contact Form Section */}
      <ContactSection
        title="Kostenloses Angebot für Asbestentfernung Bielefeld"
        subtitle="Sicherer Asbest-Rückbau nach TRGS 519 - professionell und zuverlässig"
      />

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}