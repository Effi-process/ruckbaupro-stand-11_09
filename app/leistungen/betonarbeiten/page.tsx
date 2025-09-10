import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';
import FooterWithMarquee from '../../components/FooterWithMarquee';
import { Suspense, lazy } from 'react';

const MultiStepWizard = lazy(() => import('../../components/MultiStepWizard'));

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
            <div className="max-w-2xl">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Präzise Betonbearbeitung</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mt-6 mb-8 leading-tight">
                BETONARBEITEN
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Spezialisiert auf Betonschneiden, Bohren und Abbruch von Betonkonstruktionen mit Diamanttechnik.
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
              { icon: "cut", title: "Betonschneiden", description: "Präzise Schnitte mit Diamanttrennscheiben" },
              { icon: "drill", title: "Kernbohrungen", description: "Millimetergenaue Bohrungen in Stahlbeton" },
              { icon: "saw", title: "Betonsägen", description: "Saubere Trennschnitte ohne Erschütterungen" },
              { icon: "demolish", title: "Betonabbruch", description: "Kontrollierter Abbruch von Betonstrukturen" }
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
      <section className="py-16 px-6 bg-oxford-blue">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unser Prozess</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Statische Bewertung", description: "Prüfung der Konstruktion und Ermittlung der Machbarkeit" },
              { step: "2", title: "Arbeitsplanung & Vorbereitung", description: "Detaillierte Planung und Vorbereitung der Arbeitsschritte" },
              { step: "3", title: "Präzise Durchführung", description: "Fachgerechte Ausführung mit Diamanttechnik" },
              { step: "4", title: "Reinigung & Nachbearbeitung", description: "Säuberung der Arbeitsflächen und Nachbearbeitung" }
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
      <section className="py-20 px-6 bg-oxford-blue">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Benötigen Sie professionelle Betonarbeiten?</h2>
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

      {/* Contact Form Section */}
      <section className="py-16 bg-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="bg-off-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cerulean mx-auto mb-4"></div>
              <p className="text-indigo-dye">Lade Anfrage-Formular...</p>
            </div>
          }>
            <MultiStepWizard 
              purpose="quote"
            />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}