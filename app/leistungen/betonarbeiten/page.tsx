import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FloatingElements from '../../components/FloatingElements';

export default function BetonarbeitenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
      {/* Transparent Header */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Präzise Betonbearbeitung</span>
              <h1 className="text-5xl md:text-6xl font-black text-white mt-4 mb-6">
                Betonarbeiten
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Spezialisiert auf Betonschneiden, Bohren und Abbruch von Betonkonstruktionen mit Diamanttechnik.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/kontakt" 
                  className="bg-cerulean text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-dye transition-colors"
                >
                  Kostenlose Beratung
                </Link>
                <Link 
                  href="/leistungen" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Alle Leistungen
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/demolition-action.png"
                alt="Professionelle Betonarbeiten"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
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
      <section className="py-16 px-6 bg-black/20">
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
      <section className="py-20 px-6">
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
    </main>
  );
}