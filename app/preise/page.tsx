'use client'
import { useState } from 'react';
import Icon from '../components/Icon';
import Link from 'next/link';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function Preise() {
  const [calculator, setCalculator] = useState({
    sanierungsart: '',
    flaeche: 0,
    schwierigkeit: 'normal',
    zusatzleistungen: {
      analyse: false,
      freimessung: false,
      dokumentation: false,
      express: false
    }
  });

  const preise: Record<string, { base: number; name: string }> = {
    asbestdach: { base: 35, name: 'Asbestdachsanierung' },
    asbestfassade: { base: 45, name: 'Asbestfassadensanierung' },
    asbestboden: { base: 55, name: 'Asbestbodensanierung' },
    spritzasbest: { base: 85, name: 'Spritzasbestsanierung' },
    kmf: { base: 25, name: 'KMF-Sanierung' },
    pcb: { base: 65, name: 'PCB-Sanierung' }
  };

  const schwierigkeitsFaktoren: Record<string, number> = {
    einfach: 0.8,
    normal: 1.0,
    schwer: 1.3,
    sehrschwer: 1.6
  };

  const zusatzPreise: Record<string, number> = {
    analyse: 500,
    freimessung: 800,
    dokumentation: 300,
    express: 0.25 // 25% Aufschlag
  };

  const berechnePreis = () => {
    if (!calculator.sanierungsart || calculator.flaeche === 0) return 0;

    let preis = preise[calculator.sanierungsart].base * calculator.flaeche;
    preis *= schwierigkeitsFaktoren[calculator.schwierigkeit];

    // Zusatzleistungen
    if (calculator.zusatzleistungen.analyse) preis += zusatzPreise.analyse;
    if (calculator.zusatzleistungen.freimessung) preis += zusatzPreise.freimessung;
    if (calculator.zusatzleistungen.dokumentation) preis += zusatzPreise.dokumentation;
    if (calculator.zusatzleistungen.express) preis *= (1 + zusatzPreise.express);

    return Math.round(preis);
  };

  return (
    <main className="relative">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
                PREISE
              </h1>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Kalkulieren Sie die Kosten für Ihre Sanierung transparent und unverbindlich
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#2C4F5E] mb-6">
                  Kostenrechner
                </h2>

                {/* Sanierungsart */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Art der Sanierung
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries(preise).map(([key, value]) => (
                      <label
                        key={key}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          calculator.sanierungsart === key
                            ? 'border-[#0066CC] bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="sanierungsart"
                          value={key}
                          checked={calculator.sanierungsart === key}
                          onChange={(e) => setCalculator({...calculator, sanierungsart: e.target.value})}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-semibold">{value.name}</div>
                          <div className="text-sm text-gray-600">ab {value.base} €/m²</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fläche */}
                <div className="mb-6">
                  <label htmlFor="flaeche" className="block text-sm font-medium text-gray-700 mb-2">
                    Zu sanierende Fläche (m²)
                  </label>
                  <input
                    type="number"
                    id="flaeche"
                    min="0"
                    value={calculator.flaeche}
                    onChange={(e) => setCalculator({...calculator, flaeche: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                    placeholder="z.B. 150"
                  />
                </div>

                {/* Schwierigkeitsgrad */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Schwierigkeitsgrad
                  </label>
                  <select
                    value={calculator.schwierigkeit}
                    onChange={(e) => setCalculator({...calculator, schwierigkeit: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  >
                    <option value="einfach">Einfach (gut zugänglich, ebenerdig) -20%</option>
                    <option value="normal">Normal (Standard-Bedingungen)</option>
                    <option value="schwer">Schwer (schwer zugänglich, Höhenarbeit) +30%</option>
                    <option value="sehrschwer">Sehr schwer (extreme Bedingungen) +60%</option>
                  </select>
                </div>

                {/* Zusatzleistungen */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Zusatzleistungen
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calculator.zusatzleistungen.analyse}
                        onChange={(e) => setCalculator({
                          ...calculator,
                          zusatzleistungen: {...calculator.zusatzleistungen, analyse: e.target.checked}
                        })}
                        className="mr-3"
                      />
                      <span>Schadstoffanalyse (+500 €)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calculator.zusatzleistungen.freimessung}
                        onChange={(e) => setCalculator({
                          ...calculator,
                          zusatzleistungen: {...calculator.zusatzleistungen, freimessung: e.target.checked}
                        })}
                        className="mr-3"
                      />
                      <span>Freimessung & Luftmessung (+800 €)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calculator.zusatzleistungen.dokumentation}
                        onChange={(e) => setCalculator({
                          ...calculator,
                          zusatzleistungen: {...calculator.zusatzleistungen, dokumentation: e.target.checked}
                        })}
                        className="mr-3"
                      />
                      <span>Erweiterte Dokumentation (+300 €)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={calculator.zusatzleistungen.express}
                        onChange={(e) => setCalculator({
                          ...calculator,
                          zusatzleistungen: {...calculator.zusatzleistungen, express: e.target.checked}
                        })}
                        className="mr-3"
                      />
                      <span>Express-Service 24-48h (+25%)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div>
              <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl shadow-lg p-8 text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Geschätzte Kosten</h3>
                
                <div className="text-5xl font-bold mb-2">
                  {berechnePreis().toLocaleString('de-DE')} €
                </div>
                <p className="text-sm opacity-80 mb-6">
                  zzgl. 19% MwSt.
                </p>

                {calculator.sanierungsart && calculator.flaeche > 0 && (
                  <div className="space-y-2 text-sm border-t border-white/20 pt-4 mb-6">
                    <div className="flex justify-between">
                      <span>Grundpreis:</span>
                      <span>{(preise[calculator.sanierungsart].base * calculator.flaeche).toLocaleString('de-DE')} €</span>
                    </div>
                    {calculator.schwierigkeit !== 'normal' && (
                      <div className="flex justify-between">
                        <span>Schwierigkeitszuschlag:</span>
                        <span>{schwierigkeitsFaktoren[calculator.schwierigkeit] > 1 ? '+' : ''}{Math.round((schwierigkeitsFaktoren[calculator.schwierigkeit] - 1) * 100)}%</span>
                      </div>
                    )}
                    {Object.entries(calculator.zusatzleistungen).map(([key, value]) => 
                      value && (
                        <div key={key} className="flex justify-between">
                          <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                          <span>
                            {key === 'express' ? '+25%' : `+${zusatzPreise[key]} €`}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}

                <Link
                  href="/kontakt"
                  className="w-full bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  Angebot anfordern
                </Link>

                <p className="text-xs mt-4 opacity-80">
                  * Dies ist eine unverbindliche Kostenschätzung. Die tatsächlichen Kosten können 
                  je nach örtlichen Gegebenheiten variieren.
                </p>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Icon name="document" size={48} className="text-[#0066CC] mb-4" />
              <h3 className="font-bold text-lg mb-2">Transparente Preise</h3>
              <p className="text-gray-600">
                Alle Preise verstehen sich als Richtwerte. Nach einer Vor-Ort-Besichtigung 
                erhalten Sie ein verbindliches Angebot.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Icon name="shield" size={48} className="text-[#0066CC] mb-4" />
              <h3 className="font-bold text-lg mb-2">Festpreisgarantie</h3>
              <p className="text-gray-600">
                Nach Auftragserteilung garantieren wir Ihnen einen Festpreis ohne 
                versteckte Kosten oder Nachforderungen.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Icon name="euro" size={48} className="text-[#0066CC] mb-4" />
              <h3 className="font-bold text-lg mb-2">Förderungen möglich</h3>
              <p className="text-gray-600">
                In vielen Fällen sind Förderungen durch KfW oder regionale Programme möglich. 
                Wir beraten Sie gerne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Preisübersicht nach Sanierungsart
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-[#2C4F5E] text-white">
                  <th className="px-6 py-4 text-left">Sanierungsart</th>
                  <th className="px-6 py-4 text-center">Preis pro m²</th>
                  <th className="px-6 py-4 text-center">Mindestfläche</th>
                  <th className="px-6 py-4 text-center">Dauer pro 100m²</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">Asbestdachsanierung</td>
                  <td className="px-6 py-4 text-center">35-55 €</td>
                  <td className="px-6 py-4 text-center">50 m²</td>
                  <td className="px-6 py-4 text-center">2-3 Tage</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">Asbestfassadensanierung</td>
                  <td className="px-6 py-4 text-center">45-70 €</td>
                  <td className="px-6 py-4 text-center">30 m²</td>
                  <td className="px-6 py-4 text-center">3-4 Tage</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Asbestbodensanierung</td>
                  <td className="px-6 py-4 text-center">55-85 €</td>
                  <td className="px-6 py-4 text-center">20 m²</td>
                  <td className="px-6 py-4 text-center">2-3 Tage</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">Spritzasbestsanierung</td>
                  <td className="px-6 py-4 text-center">85-120 €</td>
                  <td className="px-6 py-4 text-center">10 m²</td>
                  <td className="px-6 py-4 text-center">4-5 Tage</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">KMF-Sanierung</td>
                  <td className="px-6 py-4 text-center">25-40 €</td>
                  <td className="px-6 py-4 text-center">50 m²</td>
                  <td className="px-6 py-4 text-center">1-2 Tage</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">PCB-Sanierung</td>
                  <td className="px-6 py-4 text-center">65-95 €</td>
                  <td className="px-6 py-4 text-center">20 m²</td>
                  <td className="px-6 py-4 text-center">3-4 Tage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}