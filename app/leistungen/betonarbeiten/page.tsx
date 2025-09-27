import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
import ProcessFlow from '../../components/ProcessFlow';
import SimpleContactForm from '../../components/SimpleContactForm';

export default function BetonarbeitenPage() {
  return (
    <main className="min-h-screen">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/demolition-action.png"
            alt="Professionelle Betonarbeiten Team bei der Arbeit"
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
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Präzise Betonbearbeitung</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                BETONARBEITEN
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed">
                Spezialisiert auf Betonschneiden, Bohren und Abbruch von Betonkonstruktionen mit Diamanttechnik.
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
      <section className="py-16 px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unsere Leistungen im Detail</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "scissors", title: "Betonschneiden", description: "Präzise Schnitte mit Diamanttrennscheiben" },
              { icon: "circle", title: "Kernbohrungen", description: "Millimetergenaue Bohrungen in Stahlbeton" },
              { icon: "saw", title: "Betonsägen", description: "Saubere Trennschnitte ohne Erschütterungen" },
              { icon: "trash", title: "Betonabbruch", description: "Kontrollierter Abbruch von Betonstrukturen" }
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Diamanttechnik</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              BETONBEARBEITUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Präzise Betonbearbeitung mit modernster Diamanttechnik für millimetergenaue Ergebnisse
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="flex justify-center px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
            {[
              { 
                title: "STATISCHE ANALYSE", 
                description: "KONSTRUKTIONSPRÜFUNG",
                details: "Detaillierte Bewertung der Betonstruktur und statischen Gegebenheiten durch Bauingenieure. Ermittlung der Bewehrungslage mit Bewehrungsscanner und Festlegung der optimalen Schnitt- oder Bohrpositionen unter Berücksichtigung der Statik.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              { 
                title: "DIAMANTWERKZEUG VORBEREITUNG", 
                description: "PRÄZISIONSAUSRÜSTUNG EINRICHTEN",
                details: "Auswahl und Vorbereitung der passenden Diamantwerkzeuge je nach Betonhärte und Bewehrungsgrad. Kalibrierung der Schneid- und Bohrmaschinen für millimetergenaue Arbeiten. Wasserkühlung und Entstaubungsanlagen werden angeschlossen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                title: "PRÄZISIONSSCHNITTE", 
                description: "DIAMANTBEARBEITUNG DURCHFÜHRUNG",
                details: "Durchführung millimetergenauer Schnitte und Bohrungen mit Diamantsägen und Kernbohrgeräten. Wassergespülte Arbeitsweise verhindert Überhitzung und Staubentwicklung. Kontinuierliche Kontrolle der Schnittqualität und Maßhaltigkeit.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-3m-12 0h3m6-3L9.5 5.5 5 10l4.5 4.5L15 10z" />
                  </svg>
                )
              },
              { 
                title: "NACHBEARBEITUNG & REINIGUNG", 
                description: "OBERFLÄCHENFINISH",
                details: "Glätten und Nachbearbeitung aller Schnittflächen für perfekte Oberflächen. Entfernung von Bohrmehl und Schlämmen durch Industriesauger. Kontrolle der Maßhaltigkeit und Oberflächenqualität. Schutz der bearbeiteten Flächen vor Witterungseinflüssen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        </div>
      </section>



      {/* Process Flow Section */}
      <ProcessFlow />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleContactForm purpose="quote" />
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}