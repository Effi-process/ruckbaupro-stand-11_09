import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
// import ProcessFlow from '../../components/ProcessFlow';
import SimpleContactForm from '../../components/SimpleContactForm';

export default function BeratungPlanungPage() {
  return (
    <main className="min-h-screen">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/beratung-planung-hero.png"
            alt="Professionelle Beratung und Planung Team bei der Arbeit"
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
            <div className="max-w-2xl pt-32 md:pt-0">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Kompetente Beratung</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                BERATUNG & PLANUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Professionelle Beratung und detaillierte Projektplanung. Von der ersten Begehung bis zur finalen Umsetzung.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/kontakt"
                  className="bg-cerulean text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-indigo-dye transition-all transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                >
                  KOSTENLOSE BERATUNG
                </Link>
                <Link
                  href="/leistungen"
                  className="border-2 border-white text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                >
                  ALLE LEISTUNGEN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Unsere Leistungen im Detail</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "users", title: "Kostenlose Erstberatung", description: "Unverbindliche Beratung vor Ort" },
              { icon: "document", title: "Detaillierte Projektplanung", description: "Umfassende Planung aller Projektphasen" },
              { icon: "certificate", title: "Behördliche Genehmigungen", description: "Unterstützung bei allen Genehmigungsverfahren" },
              { icon: "shield", title: "Festpreisgarantie", description: "Transparente Kosten ohne versteckte Gebühren" }
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
              BERATUNGS- & PLANUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Umfassende Projektentwicklung von der ersten Idee bis zur detaillierten Umsetzungsplanung
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="flex justify-center px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
            {[
              { 
                title: "BESTANDSAUFNAHME & VERMESSUNG",
                description: "OBJEKTANALYSE DURCHFÜHRUNG",
                details: "Vermessung mit 3D-Laserscannung und Bausubstanzanalyse. Bewertung der Statik.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              { 
                title: "PROJEKT- & AUSFÜHRUNGSPLANUNG",
                description: "DETAILPLANUNG ERSTELLEN",
                details: "Entwicklung von Ausführungsplänen mit CAD und 3D-Modellierung. Zeitplanung.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              { 
                title: "GENEHMIGUNGSVERFAHREN",
                description: "BEHÖRDLICHE ABWICKLUNG",
                details: "Einreichung aller Genehmigungsunterlagen. Koordination mit Behörden.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "UMSETZUNGSÜBERWACHUNG",
                description: "QUALITÄTSKONTROLLE",
                details: "Kontinuierliche Qualitätskontrolle vor Ort. Dokumentation des Baufortschritts.",
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
                    <div className="flex items-start gap-4 mb-4">
                      {/* Step Icon */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 border border-cerulean/30 flex items-center justify-center group-hover:from-cerulean group-hover:to-indigo-dye group-hover:border-cerulean group-hover:shadow-lg group-hover:shadow-cerulean/40 transition-all duration-500">
                          <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-white mb-2 group-hover:text-cerulean transition-colors duration-300 tracking-wide">
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
        </div>
      </section>



      {/* Process Flow Section */}
      {/* <ProcessFlow /> */}
      
      {/* Contact Form Section */}
      <section className="py-10 bg-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleContactForm purpose="quote" />
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}