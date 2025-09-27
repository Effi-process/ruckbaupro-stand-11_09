import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
// import ProcessFlow from '../../components/ProcessFlow';
import SimpleContactForm from '../../components/SimpleContactForm';
import { ScrollAnimation } from '../../components/ScrollAnimations';

export default function SchimmelsanierungPage() {
  return (
    <main className="min-h-screen">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Full-Width Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/schimmelsanierung-hero.png"
            alt="Professionelle Schimmelsanierung Team bei der Arbeit"
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
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Gesunde Raumluft</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                SCHIMMELSANIERUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Wir befreien Ihr Zuhause von gesundheitsschädlichem Schimmel. Für ein gesundes Wohnklima und Ihre Sicherheit - professionell und nachhaltig.
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
              { icon: "shield", title: "Gesundheitsschutz garantiert", description: "Sichere Entfernung aller Schimmelsporen" },
              { icon: "search", title: "Ursachenbekämpfung inklusive", description: "Behebung der Schimmelursachen" },
              { icon: "check", title: "Nachhaltige Schimmelentfernung", description: "Dauerhaft schimmelfreie Räume" },
              { icon: "users", title: "Präventionsberatung", description: "Tipps zur Schimmelvermeidung" }
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
              SCHIMMELSANIERUNGSPROZESS
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Professionelle Schimmelentfernung für dauerhaft gesunde Raumluft und nachhaltigen Schutz
            </p>
          </div>

          {/* Process Steps - Card Layout */}
          <div className="flex justify-center px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
            {[
              { 
                title: "BEFALLSANALYSE & URSACHENFINDUNG",
                description: "SCHADENSBEWERTUNG DURCHFÜHRUNG",
                details: "Untersuchung mit Feuchtigkeitsmessungen. Identifikation der Schimmelart durch Laboranalyse.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                )
              },
              { 
                title: "KONTAMINATIONSSCHUTZ",
                description: "SPORENVERBREITUNG VERHINDERN",
                details: "Aufbau von Schutzzonen mit Unterdruckhaltung. Installation von HEPA-Luftreinigern.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "MECHANISCHE ENTFERNUNG",
                description: "SCHIMMELBESEITIGUNG AUSFÜHRUNG",
                details: "Entfernung aller befallenen Materialien. Verwendung spezieller Schimmelentferner.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )
              },
              { 
                title: "DESINFEKTION & PRÄVENTION",
                description: "DAUERHAFTER SCHUTZ",
                details: "Behandlung mit Desinfektionsmitteln. Behebung der Feuchtigkeitsursache.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                SCHIMMEL-FACHKUNDE & SCHULUNGEN
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Unsere Experten verfügen über spezialisierte Qualifikationen für den professionellen Umgang mit Schimmelbefall
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Schulungsinhalte */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="book" size={24} className="text-cerulean mr-3" />
                  Schulungsinhalte Schimmelsanierung
                </h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Schulungen zu Schimmel behandeln die Themen Erkennung, Bewertung, Sanierung und Vorbeugung von Schimmelbefall</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Einige Seminare vermitteln auch Kenntnisse über weitere Gebäudeschadstoffe wie PAK, PCB, PCP und Holzschutzmittel</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Praktische Übungen zu Messverfahren und Probenentnahme</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sanierungsstrategien und Präventionsmaßnahmen</span>
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
                    <span>Zertifizierte Schimmelpilzsachverständige nach anerkannten Standards</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regelmäßige Fortbildungen zur aktuellen Technik und Rechtslage</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="certificate" size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Qualifikationen für gesundheitsgefährdende Schimmelpilzarten</span>
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
                Alle unsere Mitarbeiter werden kontinuierlich nach den neuesten wissenschaftlichen Erkenntnissen geschult.
                Die umfassende Ausbildung in Schimmelerkennung und -sanierung sowie Kenntnisse über weitere Gebäudeschadstoffe
                ermöglichen uns eine ganzheitliche Bewertung und sichere Sanierung. Wir garantieren fachgerechte Durchführung
                nach aktuellen Richtlinien und Standards.
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