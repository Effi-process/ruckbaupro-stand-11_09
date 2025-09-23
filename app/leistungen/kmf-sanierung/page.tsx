import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
import ProcessFlow from '../../components/ProcessFlow';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const MultiStepWizard = dynamic(() => import('../../components/MultiStepWizard'), {
  ssr: false,
  loading: () => <div className="bg-off-white rounded-3xl shadow-2xl p-12 text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cerulean mx-auto mb-4"></div>
    <p className="text-indigo-dye">Lade Anfrage-Formular...</p>
  </div>
});

export default function KmfSanierungPage() {
  return (
    <main className="min-h-screen">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/kmf-sanierung-hero.png"
            alt="Professionelle KMF-Sanierung Team bei der Arbeit"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content positioned on the left side */}
        <div className="relative z-10 flex items-center h-full px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Zertifizierte Sanierung</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                KMF-SANIERUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Zertifizierte Sanierung von künstlichen Mineralfasern. Fachgerechter Abbau und Entsorgung nach TRGS 521.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/kontakt" 
                  className="bg-cerulean text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-dye transition-all transform hover:scale-105"
                >
                  KOSTENLOSE BERATUNG
                </Link>
                <Link 
                  href="/leistungen" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
                >
                  ALLE LEISTUNGEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unsere Leistungen im Detail</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "certificate", title: "TRGS 521 zertifiziert", description: "Alle Arbeiten nach aktuellen Vorschriften" },
              { icon: "shield", title: "Vollschutz-Ausrüstung", description: "Maximaler Schutz für Arbeiter und Bewohner" },
              { icon: "zap", title: "Staubfreie Arbeitsweise", description: "Moderne Techniken für saubere Arbeiten" },
              { icon: "file-text", title: "Entsorgungsnachweis inklusive", description: "Vollständige Dokumentation der Entsorgung" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <Icon name={feature.icon} size={48} className="text-cerulean mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Modern Glassmorphism Design */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/30 via-gray-800/50 to-oxford-blue/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-cerulean rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-indigo-dye rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
              <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">KMF Sanierung TRGS 521</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              KMF-SANIERUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Fachgerechte Entfernung künstlicher Mineralfasern nach TRGS 521 mit Vollschutzausrüstung
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "MATERIALIDENTIFIKATION", 
                description: "KMF-ART BESTIMMEN",
                details: "Genaue Identifikation der Mineralfaser-Art durch Laboranalyse. Bestimmung der Gefährdungsklasse und Festlegung der erforderlichen Schutzmaßnahmen nach TRGS 521. Bewertung der Fasergeometrie und Biopersistenz der Materialien.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                )
              },
              { 
                title: "SCHUTZAUSRÜSTUNG ANLEGEN", 
                description: "VOLLSCHUTZ EINRICHTEN",
                details: "Anlegen der kompletten Vollschutzausrüstung mit Atemschutzgerät, Schutzanzug und Handschuhen. Einrichtung von Absauganlagen direkt an der Bearbeitungsstelle. Kontinuierliche Überwachung der Schutzausrüstung während der Arbeiten.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "STAUBFREIER ABBAU", 
                description: "NASSABBAU DURCHFÜHRUNG",
                details: "Kontrollierte Demontage der KMF-Materialien durch Nassabbau-Verfahren zur Minimierung der Staubentwicklung. Verwendung von Handwerkzeugen und direkter Absaugung an der Entstehungsstelle. Kontinuierliche Befeuchtung aller Arbeitsbereiche.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              { 
                title: "LUFTKONTROLLE & ENTSORGUNG", 
                description: "QUALITÄTSSICHERUNG",
                details: "Kontinuierliche Luftüberwachung während der Arbeiten mit Partikelmessgeräten. Fachgerechte Verpackung und Kennzeichnung der KMF-Abfälle für die Entsorgung. Abschlussreinigung mit HEPA-gefilterten Saugern und Dokumentation der Arbeiten.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-cerulean/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cerulean/20">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cerulean/0 via-cerulean/5 to-cerulean/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Step Header */}
                    <div className="flex items-start gap-6 mb-6">
                      {/* Step Icon */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 border border-cerulean/30 flex items-center justify-center group-hover:from-cerulean group-hover:to-indigo-dye group-hover:border-cerulean group-hover:shadow-lg group-hover:shadow-cerulean/40 transition-all duration-500">
                          <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cerulean transition-colors duration-300 tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-cerulean/90 font-bold text-sm tracking-wider mb-3">
                          {step.description}
                        </p>
                        <p className="text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cerulean/0 via-cerulean/50 to-cerulean/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Schulungen & Zertifikate Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-oxford-blue to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-cerulean/20 backdrop-blur-lg rounded-full mb-4">
                <Icon name="award" size={16} className="text-cerulean mr-2" />
                <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
                  Schulungen & Qualifikationen
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                KMF-FACHKUNDE NACH TRGS 521
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Unsere Mitarbeiter verfügen über alle erforderlichen Qualifikationen für den sicheren Umgang mit künstlichen Mineralfasern
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Schulungsinhalte */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="book" size={24} className="text-cerulean mr-3" />
                  Schulungsinhalte TRGS 521
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Fachkunde für Arbeiten an KMF vermittelt nach TRGS 521, oft kombiniert mit Asbestschulungen</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Schulungsdauer: ca. 5 Stunden intensives Training</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Theoretische Grundlagen zu Fasergeometrie und Gesundheitsgefahren</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Praktische Übungen zur Schutzausrüstung und Arbeitstechniken</span>
                  </li>
                </ul>
              </div>

              {/* Zertifikate & Nachweise */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="shield" size={24} className="text-cerulean mr-3" />
                  Zertifikate & Nachweise
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Urkunde als Nachweis der Fachkunde nach erfolgreicher Teilnahme</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regelmäßige Auffrischungsschulungen alle 2 Jahre</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zusätzliche Qualifikationen für Arbeiten mit erhöhtem Gefährdungspotenzial</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Dokumentation aller Schulungen im Qualitätsmanagementsystem</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-cerulean/10 border border-cerulean/30 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Icon name="info" size={24} className="text-cerulean mr-3" />
                <h4 className="text-xl font-bold text-white">Wichtiger Hinweis</h4>
              </div>
              <p className="text-white/80">
                Alle unsere Mitarbeiter werden regelmäßig nach den neuesten Vorschriften geschult. Die Kombination aus
                KMF- und Asbestschulungen ermöglicht uns die sichere Sanierung aller mineralischen Faserstoffe.
                Wir garantieren die Einhaltung aller gesetzlichen Vorgaben und Sicherheitsstandards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <ProcessFlow />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MultiStepWizard purpose="quote" />
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}