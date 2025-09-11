'use client';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';
import AdvancedCalculator from '../components/AdvancedCalculator';

export default function Preise() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
              KOSTENRECHNER
            </h1>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-cerulean rounded-full"></div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Erhalten Sie eine präzise Kostenschätzung für Ihr Sanierungsprojekt mit unserem intelligenten Service-Rechner
            </p>
            
            <div className="flex justify-center gap-4 text-sm text-white/70 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Service-abhängige Fragen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Detaillierte Aufschlüsselung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Sofortige Berechnung</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-6">
        <AdvancedCalculator />
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <Icon name="document" size={48} className="text-cerulean mb-4" />
              <h3 className="font-bold text-lg mb-2 text-oxford-blue">Transparente Preise</h3>
              <p className="text-gray-600">
                Alle Preise verstehen sich als Richtwerte. Nach einer Vor-Ort-Besichtigung 
                erhalten Sie ein verbindliches Angebot.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <Icon name="shield" size={48} className="text-cerulean mb-4" />
              <h3 className="font-bold text-lg mb-2 text-oxford-blue">Festpreisgarantie</h3>
              <p className="text-gray-600">
                Nach Auftragserteilung garantieren wir Ihnen einen Festpreis ohne 
                versteckte Kosten oder Nachforderungen.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <Icon name="euro" size={48} className="text-cerulean mb-4" />
              <h3 className="font-bold text-lg mb-2 text-oxford-blue">Förderungen möglich</h3>
              <p className="text-gray-600">
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