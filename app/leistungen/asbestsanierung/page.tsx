import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
// import ProcessFlow from '../../components/ProcessFlow';
import SimpleContactForm from '../../components/SimpleContactForm';
import ServiceHeroSection from '../../components/ServiceHeroSection';
import { ScrollAnimation } from '../../components/ScrollAnimations';

export default function AsbestsanierungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <ServiceHeroSection
        badge="Zertifizierte Spezialisten"
        title="ASBEST-SANIERUNG"
        description="Sichere Asbestentfernung von zertifizierten Experten. Modernste Technik, lückenlose Dokumentation und 100% normgerecht nach TRGS 519."
        image="/images/asbest-team-hero.png"
        imageAlt="Professionelle Asbestsanierung Team bei der Arbeit"
      />
      

      {/* Features Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Unsere Leistungen im Detail</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "shield", title: "TRGS 519 Zertifiziert", description: "Höchste Sicherheitsstandards" },
              { icon: "eye", title: "Luftmessungen", description: "Kontinuierliche Überwachung" },
              { icon: "trash", title: "Fachgerechte Entsorgung", description: "Umweltgerechte Beseitigung" },
              { icon: "file-text", title: "Dokumentation", description: "Lückenlose Nachweise" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                <Icon name={feature.icon} size={32} className="text-cerulean mx-auto mb-4" />
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Modern Glassmorphism Design */}
      <section className="py-12 px-6 bg-gradient-to-b from-black/30 via-gray-800/50 to-oxford-blue/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-cerulean rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-indigo-dye rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              DER SANIERUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Jeder Schritt wird nach höchsten Sicherheitsstandards und TRGS 519 durchgeführt
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="flex justify-center px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
            {[
              { 
                title: "ARBEITSPLATZ VORBEREITUNG",
                description: "SCHUTZZONE EINRICHTEN",
                details: "Aufbau der Dekontaminationsschleuse. Installation von Unterdrucksystemen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "ASBESTMATERIAL ENTFERNUNG",
                description: "FACHGERECHTER ABBAU",
                details: "Nasse Entfernung mit Vollschutzanzügen. Befeuchtung verhindert Faserfreisetzung.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )
              },
              { 
                title: "OBERFLÄCHENREINIGUNG",
                description: "DEKONTAMINATION DURCHFÜHRUNG",
                details: "Nassreinigung mit HEPA-gefilterten Saugern. Versiegelung behandelter Bereiche.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-9 0h10M5 21l1-10h12l1 10H5z" />
                  </svg>
                )
              },
              { 
                title: "FREIMESSUNG & ABSCHLUSS",
                description: "QUALITÄTSKONTROLLE DURCHFÜHRUNG",
                details: "Luftmessungen durch akkreditierte Messstellen. Übergabe mit vollständiger Dokumentation.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 hover:bg-white/10 hover:border-cerulean/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cerulean/20">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cerulean/0 via-cerulean/5 to-cerulean/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Step Header */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 border border-cerulean/30 flex items-center justify-center group-hover:from-cerulean group-hover:to-indigo-dye group-hover:border-cerulean group-hover:shadow-lg group-hover:shadow-cerulean/40 transition-all duration-500">
                          <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1 w-full text-cutoff-fix">
                        <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-cerulean transition-colors duration-300 tracking-wide">
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
        </div>
      </section>

      {/* Schulungen & Zertifikate Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-oxford-blue to-gray-800">
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
      {/* <ProcessFlow /> */}
      
      {/* Contact Form Section - Full Width */}
      <ScrollAnimation animation="slideUp" duration={1000}>
        <section id="contact-form" className="bg-oxford-blue section-divider">
          <SimpleContactForm purpose="quote" />
        </section>
      </ScrollAnimation>

      <FooterWithMarquee />
    </main>
  );
}