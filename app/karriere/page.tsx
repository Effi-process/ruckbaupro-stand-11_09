'use client';

import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';
import KarriereContactForm from '../components/KarriereContactForm';
import MobileHeader from '../components/MobileHeader';

export default function Karriere() {
  const benefits = [
    {
      title: 'Attraktive Vergütung',
      description: 'Übertarifliche Bezahlung plus Gefahrenzulagen und Prämien'
    },
    {
      title: 'Moderne Ausrüstung',
      description: 'Neueste Schutzausrüstung und modernste Technik'
    },
    {
      title: 'Weiterbildung',
      description: 'Regelmäßige Schulungen und Aufstiegsmöglichkeiten'
    },
    {
      title: 'Teamgeist',
      description: 'Kollegiales Arbeitsumfeld und flache Hierarchien'
    },
    {
      title: 'Work-Life-Balance',
      description: 'Flexible Arbeitszeiten und Überstundenausgleich'
    },
    {
      title: 'Zukunftssicher',
      description: 'Krisensicherer Job in wachsender Branche'
    }
  ];

  return (
    <main className="relative">
      <GlassHeader />
      <MobileHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
              KARRIERE
            </h1>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-cerulean rounded-full"></div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Schadstoffsanierung
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Arbeiten mit Sinn und Perspektive
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Bei uns arbeiten Sie nicht nur für ein Gehalt, sondern für die Sicherheit
              und Gesundheit von Menschen. Als führendes Unternehmen in der Schadstoffsanierung
              bieten wir Ihnen einen sicheren Arbeitsplatz mit hervorragenden Entwicklungsmöglichkeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Was wir Ihnen bieten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-3 text-cerulean">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stellenangebote Info Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Offene Stellen
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Wir suchen motivierte Fachkräfte und Quereinsteiger in verschiedenen Bereichen:
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-cerulean">Asbestsanierer (m/w/d)</h3>
                <p className="text-white/80 text-sm">Mit oder ohne TRGS 519 Sachkundenachweis</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-cerulean">Bauleiter Sanierung (m/w/d)</h3>
                <p className="text-white/80 text-sm">Für die Leitung unserer Sanierungsprojekte</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-cerulean">Schadstoffgutachter (m/w/d)</h3>
                <p className="text-white/80 text-sm">Experte für Schadstoffanalysen und Gutachten</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-2 text-cerulean">Auszubildende</h3>
                <p className="text-white/80 text-sm">Starte deine Karriere in einem zukunftssicheren Beruf</p>
              </div>
            </div>

            <p className="text-white/80 text-lg">
              Auch wenn keine passende Stelle dabei ist: Wir freuen uns über Ihre Initiativbewerbung!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue">
        <KarriereContactForm />
      </section>

      <FooterWithMarquee />
    </main>
  );
}
