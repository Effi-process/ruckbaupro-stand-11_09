'use client';
import { useState } from 'react';
import Icon from './Icon';

interface EnterprisePackage {
  id: string;
  name: string;
  minVolume: number;
  maxVolume: number;
  pricePerM2: number;
  features: string[];
  savings: number;
  priority: string;
  dedicatedTeam: boolean;
}

export default function EnterprisePortal() {
  const [selectedPackage, setSelectedPackage] = useState<string>('platinum');
  
  const packages: EnterprisePackage[] = [
    {
      id: 'gold',
      name: 'Enterprise Gold',
      minVolume: 10000,
      maxVolume: 50000,
      pricePerM2: 32,
      features: [
        'Dedizierter Projektmanager',
        'Monatliche Sammelabrechnung',
        '24/7 Priority Support',
        'Garantierte Reaktionszeit: 12h',
        'Quartalsweise Strategieberatung'
      ],
      savings: 25,
      priority: 'HOCH',
      dedicatedTeam: false
    },
    {
      id: 'platinum',
      name: 'Enterprise Platinum',
      minVolume: 50000,
      maxVolume: 200000,
      pricePerM2: 28,
      features: [
        'Dediziertes 10-köpfiges Team',
        'Sofort-Abrechnung möglich',
        'Exklusiver C-Level Support',
        'Garantierte Reaktionszeit: 2h',
        'Monatliche Strategieberatung',
        'Kostenlose Schulungen',
        'Compliance-Dokumentation'
      ],
      savings: 35,
      priority: 'HÖCHSTE',
      dedicatedTeam: true
    },
    {
      id: 'titanium',
      name: 'Enterprise Titanium',
      minVolume: 200000,
      maxVolume: -1,
      pricePerM2: 24,
      features: [
        'Exklusives 25-köpfiges Team',
        'White-Label-Service möglich',
        'Board-Level Account Management',
        'Garantierte Reaktionszeit: 30min',
        'Wöchentliche Strategieberatung',
        'Unlimited Schulungen & Zertifizierungen',
        'Vollständige Compliance-Suite',
        'Custom SLA-Vereinbarungen',
        'Internationale Expansion Support'
      ],
      savings: 45,
      priority: 'VIP',
      dedicatedTeam: true
    }
  ];

  const governmentBenefits = [
    {
      icon: 'shield',
      title: 'Behörden-Zertifizierung',
      description: 'Alle erforderlichen Zulassungen für öffentliche Aufträge'
    },
    {
      icon: 'file-text',
      title: 'Rahmenverträge',
      description: 'Vordefinierte Konditionen für schnelle Beauftragung'
    },
    {
      icon: 'clock',
      title: 'Notfall-Bereitschaft',
      description: '24/7/365 Rufbereitschaft für kritische Infrastruktur'
    },
    {
      icon: 'users',
      title: 'Skalierbare Teams',
      description: 'Bis zu 500 Mitarbeiter gleichzeitig mobilisierbar'
    }
  ];

  const calculateSavings = (pkg: EnterprisePackage, volume: number) => {
    const standardPrice = volume * 45; // Standard €45/m²
    const enterprisePrice = volume * pkg.pricePerM2;
    return standardPrice - enterprisePrice;
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-8 shadow-2xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 text-sm font-bold px-4 py-2 rounded-full mb-4">
          <Icon name="building" size={16} />
          ENTERPRISE & GOVERNMENT
        </div>
        <h2 className="text-4xl font-black text-white mb-4">
          Großprojekte & Rahmenverträge
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Maßgeschneiderte Lösungen für Unternehmen, Behörden und Großprojekte ab 10.000m²
        </p>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg.id)}
            className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
              selectedPackage === pkg.id
                ? 'bg-gradient-to-br from-gold-500/20 to-gold-600/20 border-2 border-gold-500'
                : 'bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            {/* Priority Badge */}
            <div className={`absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-bold ${
              pkg.id === 'titanium' ? 'bg-purple-600 text-white' :
              pkg.id === 'platinum' ? 'bg-gold-600 text-black' :
              'bg-gray-600 text-white'
            }`}>
              {pkg.priority} PRIORITÄT
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
            
            {/* Volume Range */}
            <div className="text-gray-400 mb-4">
              {pkg.minVolume.toLocaleString('de-DE')}
              {pkg.maxVolume > 0 ? ` - ${pkg.maxVolume.toLocaleString('de-DE')}` : '+'} m²/Jahr
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-black text-white">
                €{pkg.pricePerM2}
                <span className="text-lg text-gray-400">/m²</span>
              </div>
              <div className="text-green-400 text-sm font-medium">
                Ersparnis: {pkg.savings}%
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {pkg.features.slice(0, 5).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <Icon name="check" size={16} className="text-green-400 mt-0.5" />
                  {feature}
                </li>
              ))}
              {pkg.features.length > 5 && (
                <li className="text-sm text-gold-400 font-medium">
                  +{pkg.features.length - 5} weitere Vorteile
                </li>
              )}
            </ul>

            {/* Dedicated Team Badge */}
            {pkg.dedicatedTeam && (
              <div className="bg-purple-600/20 text-purple-400 text-sm font-medium px-3 py-1 rounded-lg text-center">
                Exklusives Team
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Savings Calculator */}
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">
          Ihre Ersparnis berechnen
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-end">
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Geschätztes Jahresvolumen (m²)
            </label>
            <input
              type="number"
              defaultValue="75000"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Gewähltes Paket
            </label>
            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white">
              {packages.find(p => p.id === selectedPackage)?.name}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-1">Jährliche Ersparnis</div>
            <div className="text-4xl font-black text-green-400">
              €{calculateSavings(
                packages.find(p => p.id === selectedPackage)!,
                75000
              ).toLocaleString('de-DE')}
            </div>
          </div>
        </div>
      </div>

      {/* Government Section */}
      <div className="bg-blue-950/30 rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Öffentliche Auftraggeber & Behörden
          </h3>
          <p className="text-gray-400">
            Zertifizierter Partner für Bund, Länder und Kommunen
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {governmentBenefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 inline-flex mb-4">
                <Icon name={benefit.icon as any} size={24} className="text-blue-400" />
              </div>
              <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-500 transition-all">
            Rahmenvertrag anfragen
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-700 rounded-2xl p-8 text-center">
        <h3 className="text-3xl font-black text-black mb-4">
          Werden Sie Enterprise-Kunde
        </h3>
        <p className="text-black/80 mb-6 max-w-2xl mx-auto">
          Profitieren Sie von exklusiven Konditionen, dediziertem Support und maßgeschneiderten Lösungen für Ihr Unternehmen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-gold-400 font-bold py-4 px-8 rounded-xl hover:bg-gray-900 transition-all">
            Enterprise-Beratung anfordern
          </button>
          <button className="bg-white/20 text-black font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all">
            Mustervertrag downloaden
          </button>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="check" size={16} className="text-green-800" />
            <span className="text-black/70">ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" size={16} className="text-green-800" />
            <span className="text-black/70">TRGS 519</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="check" size={16} className="text-green-800" />
            <span className="text-black/70">VOB/B konform</span>
          </div>
        </div>
      </div>
    </div>
  );
}