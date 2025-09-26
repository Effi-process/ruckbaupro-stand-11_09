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

export default function AsbestsanierungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/asbest-team-hero.png"
            alt="Professionelle Asbestsanierung Team bei der Arbeit"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content positioned on the left side */}
        <div className="relative z-10 flex items-center h-full px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Zertifizierte Spezialisten</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                ASBEST-SANIERUNG
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
                Sichere Asbestentfernung von zertifizierten Experten. Modernste Technik, lückenlose Dokumentation und 100% normgerecht nach TRGS 519.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/kontakt" 
                  className="bg-cerulean text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-indigo-dye transition-all transform hover:scale-105 min-h-[44px] text-center"
                >
                  KOSTENLOSE BERATUNG
                </Link>
                <Link 
                  href="/leistungen" 
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 min-h-[44px] text-center"
                >
                  ALLE LEISTUNGEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transition section - creates smooth flow into content */}
      <section className="relative -mt-20 z-20">
        <div className="bg-gradient-to-b from-transparent via-gray-800/80 to-gray-800 h-40"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unsere Leistungen im Detail</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "shield", title: "TRGS 519 Zertifiziert", description: "Höchste Sicherheitsstandards" },
              { icon: "eye", title: "Luftmessungen", description: "Kontinuierliche Überwachung" },
              { icon: "trash", title: "Fachgerechte Entsorgung", description: "Umweltgerechte Beseitigung" },
              { icon: "file-text", title: "Dokumentation", description: "Lückenlose Nachweise" }
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Zertifizierter Prozess</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              DER SANIERUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Jeder Schritt wird nach höchsten Sicherheitsstandards und TRGS 519 durchgeführt
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                title: "ARBEITSPLATZ VORBEREITUNG", 
                description: "SCHUTZZONE EINRICHTEN",
                details: "Aufbau der Dekontaminationsschleuse mit Schwarzbereich, Graubereich und Weißbereich. Installation von Luftreinigungsgeräten und Unterdrucksystemen zur Vermeidung von Faserleckagen während der gesamten Sanierung.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "ASBESTMATERIAL ENTFERNUNG", 
                description: "FACHGERECHTER ABBAU",
                details: "Nasse Entfernung der asbesthaltigen Materialien mit speziellen Werkzeugen und Entstaubungsgeräten. Arbeiter tragen Vollschutzanzüge mit Atemschutzgeräten. Kontinuierliche Befeuchtung verhindert Faserfreisetzung in die Raumluft.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )
              },
              { 
                title: "OBERFLÄCHENREINIGUNG", 
                description: "DEKONTAMINATION DURCHFÜHRUNG",
                details: "Gründliche Nassreinigung aller Oberflächen mit HEPA-gefilterten Industriesaugern. Dreifache Reinigung mit speziellen Reinigungsmitteln bis zur vollständigen Entfernung aller Asbestrückstände. Versiegelung behandelter Bereiche.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0h10M5 21l1-10h12l1 10H5z" />
                  </svg>
                )
              },
              { 
                title: "FREIMESSUNG & ABSCHLUSS", 
                description: "QUALITÄTSKONTROLLE DURCHFÜHRUNG",
                details: "Luftmessungen durch akkreditierte Messstellen zur Bestätigung der erfolgreichen Sanierung. Rückbau der Schutzeinrichtungen nach negativem Messergebnis. Übergabe mit vollständiger Dokumentation und Entsorgungsnachweisen.",
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
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 border border-cerulean/30 flex items-center justify-center group-hover:from-cerulean group-hover:to-indigo-dye group-hover:border-cerulean group-hover:shadow-lg group-hover:shadow-cerulean/40 transition-all duration-500">
                          <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1 w-full text-cutoff-fix">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 group-hover:text-cerulean transition-colors duration-300 tracking-wide">
                          {step.title}
                        </h3>
                        <p className="text-cerulean/90 font-bold text-xs sm:text-sm tracking-wider mb-3">
                          {step.description}
                        </p>
                        <p className="text-white/70 group-hover:text-white/90 leading-relaxed text-sm sm:text-base transition-colors duration-300">
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
                ASBEST-SACHKUNDE NACH TRGS 519
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Unsere Experten verfügen über alle erforderlichen Qualifikationen für den sicheren Umgang mit Asbest
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Schulungsinhalte */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="book" size={24} className="text-cerulean mr-3" />
                  Schulungsinhalte TRGS 519
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sachkunde für Arbeiten mit Asbest nach TRGS 519 vermittelt</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Verschiedene Sachkundestufen: ASI-Arbeiten für einfache Tätigkeiten</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Erweiterte Sachkunde für Abbruch-, Sanierungs- und Instandhaltungsarbeiten</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Spezialschulungen für Tätigkeiten mit höherem Gefährdungspotenzial</span>
                  </li>
                </ul>
              </div>

              {/* Zertifizierungen */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="shield" size={24} className="text-cerulean mr-3" />
                  Zertifizierungen & Standards
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Eintägige Seminare mit Pflichtschulung gemäß §11a GefStoffV</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Schulungen nach neuestem TRGS 517 Standard</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Versicherungsvalides Zertifikat vom Umweltinstitut Offenbach</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regelmäßige Fortbildungen und Auffrischungsschulungen</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Zusätzliche Informationen */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-cerulean/10 border border-cerulean/30 rounded-xl p-4 text-center">
                <Icon name="clock" size={32} className="text-cerulean mx-auto mb-2" />
                <h4 className="font-bold text-white mb-1">Schulungsdauer</h4>
                <p className="text-white/70 text-sm">1-3 Tage je nach Sachkundestufe</p>
              </div>
              <div className="bg-cerulean/10 border border-cerulean/30 rounded-xl p-4 text-center">
                <Icon name="users" size={32} className="text-cerulean mx-auto mb-2" />
                <h4 className="font-bold text-white mb-1">Praxisübungen</h4>
                <p className="text-white/70 text-sm">Praktische Übungen mit Schutzausrüstung</p>
              </div>
              <div className="bg-cerulean/10 border border-cerulean/30 rounded-xl p-4 text-center">
                <Icon name="shield-check" size={32} className="text-cerulean mx-auto mb-2" />
                <h4 className="font-bold text-white mb-1">Arbeitsschutz</h4>
                <p className="text-white/70 text-sm">Vollständige Einhaltung aller Sicherheitsvorschriften</p>
              </div>
            </div>

            {/* Wichtiger Hinweis */}
            <div className="mt-8 bg-orange/10 border border-orange/30 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Icon name="alert" size={24} className="text-orange mr-3" />
                <h4 className="text-xl font-bold text-white">Gesetzliche Anforderungen</h4>
              </div>
              <p className="text-white/80">
                Die Sachkunde nach TRGS 519 ist gesetzlich vorgeschrieben für alle Arbeiten mit asbesthaltigen Materialien.
                Unsere Mitarbeiter werden kontinuierlich geschult und verfügen über alle notwendigen Zertifikate.
                Dies garantiert nicht nur die Sicherheit während der Arbeiten, sondern auch die rechtliche Absicherung
                für unsere Auftraggeber.
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