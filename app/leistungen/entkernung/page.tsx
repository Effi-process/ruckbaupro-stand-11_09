import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
// import ProcessFlow from '../../components/ProcessFlow';
import SimpleContactForm from '../../components/SimpleContactForm';
import { ScrollAnimation } from '../../components/ScrollAnimations';

export default function EntkernungPage() {
  return (
    <main className="min-h-screen">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/entkernung-team-hero.png"
            alt="Professionelles Entkernung-Team bei der Arbeit"
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
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Professionelle Entkernung</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                ENTKERNUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Komplette Entkernung von Gebäuden für Sanierung oder Abriss. Sauber, schnell und zuverlässig mit modernster Technik.
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
              { icon: "home", title: "Komplettentkernung", description: "Vollständige Entfernung aller Inneneinrichtungen" },
              { icon: "target", title: "Teilentkernung möglich", description: "Selektive Entfernung nach Ihren Anforderungen" },
              { icon: "shield", title: "Schadstoffsanierung", description: "Fachgerechte Entfernung belasteter Materialien" },
              { icon: "trash", title: "Recycling & Entsorgung", description: "Umweltgerechte Verwertung und Entsorgung" }
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
              DER ENTKERNUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Systematischer Rückbau aller Inneneinrichtungen mit modernster Technik und Schadstoffprüfung
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="flex justify-center px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
            {[
              { 
                title: "SCHADSTOFFPRÜFUNG",
                description: "MATERIALANALYSE DURCHFÜHRUNG",
                details: "Überprüfung aller Materialien auf Asbest, KMF und andere Schadstoffe vor Beginn der Arbeiten.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "SELEKTIVE DEMONTAGE",
                description: "SYSTEMATISCHER RÜCKBAU",
                details: "Fachgerechte Demontage von Einbauten und Installationen. Schutz tragender Strukturen.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-3m-12 0h3m6-3L9.5 5.5 5 10l4.5 4.5L15 10z" />
                  </svg>
                )
              },
              { 
                title: "ENTSTAUBUNG & REINIGUNG",
                description: "STAUBFREIE ARBEITSWEISE",
                details: "Kontinuierliche Staubabsaugung während aller Arbeiten. HEPA-Filtration für saubere Raumluft.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: "SORTIERUNG & ENTSORGUNG",
                description: "FACHGERECHTE VERWERTUNG",
                details: "Sortenreine Trennung aller Materialien. Recyclingfähige Stoffe dem Wertstoffkreislauf zugeführt.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
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

      {/* Contact Form Section - Full Width */}
      <ScrollAnimation animation="slideUp" duration={1000}>
        <section id="contact-form" className="section-divider">
          <SimpleContactForm />
        </section>
      </ScrollAnimation>

      <FooterWithMarquee />
    </main>
  );
}