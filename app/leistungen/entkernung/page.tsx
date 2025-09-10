import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import MenuFooter from '../../components/MenuFooter';

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
            <div className="max-w-2xl">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Professionelle Entkernung</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                ENTKERNUNG
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Komplette Entkernung von Gebäuden für Sanierung oder Abriss. Sauber, schnell und zuverlässig mit modernster Technik.
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
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "home", title: "Komplettentkernung", description: "Vollständige Entfernung aller Inneneinrichtungen" },
              { icon: "tool", title: "Teilentkernung möglich", description: "Selektive Entfernung nach Ihren Anforderungen" },
              { icon: "shield", title: "Schadstoffsanierung", description: "Fachgerechte Entfernung belasteter Materialien" },
              { icon: "recycle", title: "Recycling & Entsorgung", description: "Umweltgerechte Verwertung und Entsorgung" }
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

      {/* Process Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unser Prozess</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Bestandsaufnahme & Planung", description: "Detaillierte Analyse und Planung der Entkernungsarbeiten" },
              { step: "2", title: "Schutzmaßnahmen", description: "Absicherung und Schutz der zu erhaltenden Bauteile" },
              { step: "3", title: "Fachgerechte Entkernung", description: "Systematische Demontage mit modernster Technik" },
              { step: "4", title: "Entsorgung & Übergabe", description: "Umweltgerechte Entsorgung und saubere Übergabe" }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Benötigen Sie professionelle Entkernung?</h2>
          <p className="text-xl text-white/80 mb-8">
            Kontaktieren Sie uns für eine kostenlose Erstberatung und ein unverbindliches Angebot.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-cerulean text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-dye transition-colors"
          >
            <Icon name="phone" size={20} />
            Jetzt kostenlos beraten lassen
          </Link>
        </div>
      </section>

      <MenuFooter />
    </main>
  );
}