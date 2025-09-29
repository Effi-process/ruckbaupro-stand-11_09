'use client';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';
import AdvancedCalculator from '../components/AdvancedCalculator';

export default function Preise() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-6 md:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wide leading-tight">
              KOSTENRECHNER
            </h1>
            <div className="flex justify-center mt-3 md:mt-4">
              <div className="w-20 md:w-32 h-1 bg-cerulean rounded-full"></div>
            </div>
            <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 mt-4 md:mt-6 px-4">
              Erhalten Sie eine präzise Kostenschätzung für Ihr Sanierungsprojekt mit unserem intelligenten Service-Rechner
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-white/70 mt-4 md:mt-6 px-4">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Service-abhängige Fragen</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Detaillierte Aufschlüsselung</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Sofortige Berechnung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-6 md:py-12 px-4 md:px-6">
        <AdvancedCalculator />
      </section>

      {/* Info Section */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-oxford-blue to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-gradient-to-br from-white/95 to-gray-50/95 rounded-xl shadow-2xl p-4 md:p-6 border border-gray-200 hover:shadow-cerulean/20 transition-shadow">
              <Icon name="document" size={36} className="text-cerulean mb-3 md:mb-4 mx-auto md:mx-0" />
              <h3 className="font-bold text-base md:text-lg mb-2 text-oxford-blue text-center md:text-left">Transparente Preise</h3>
              <p className="text-gray-600 text-xs md:text-base text-center md:text-left">
                Alle Preise verstehen sich als Richtwerte. Nach einer Vor-Ort-Besichtigung
                erhalten Sie ein verbindliches Angebot.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/95 to-gray-50/95 rounded-xl shadow-2xl p-4 md:p-6 border border-gray-200 hover:shadow-cerulean/20 transition-shadow">
              <Icon name="shield" size={36} className="text-cerulean mb-3 md:mb-4 mx-auto md:mx-0" />
              <h3 className="font-bold text-base md:text-lg mb-2 text-oxford-blue text-center md:text-left">Festpreisgarantie</h3>
              <p className="text-gray-600 text-xs md:text-base text-center md:text-left">
                Nach Auftragserteilung garantieren wir Ihnen einen Festpreis ohne
                versteckte Kosten oder Nachforderungen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/95 to-gray-50/95 rounded-xl shadow-2xl p-4 md:p-6 border border-gray-200 hover:shadow-cerulean/20 transition-shadow">
              <Icon name="euro" size={36} className="text-cerulean mb-3 md:mb-4 mx-auto md:mx-0" />
              <h3 className="font-bold text-base md:text-lg mb-2 text-oxford-blue text-center md:text-left">Förderungen möglich</h3>
              <p className="text-gray-600 text-xs md:text-base text-center md:text-left">
                In vielen Fällen sind Förderungen durch KfW oder regionale Programme möglich.
                Wir beraten Sie gerne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}