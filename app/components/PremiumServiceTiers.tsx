'use client';
import { useState } from 'react';
import Icon from './Icon';
import Link from 'next/link';

interface ServiceTier {
  id: string;
  name: string;
  badge: string;
  price: string;
  originalPrice?: string;
  features: string[];
  premium: string[];
  cta: string;
  popular?: boolean;
  luxury?: boolean;
  color: string;
  responseTime: string;
  guarantee: string;
}

export default function PremiumServiceTiers() {
  const [selectedTier, setSelectedTier] = useState('premium');

  const tiers: ServiceTier[] = [
    {
      id: 'standard',
      name: 'Standard Sanierung',
      badge: 'BEWÄHRT',
      price: 'ab 35€/m²',
      features: [
        'Fachgerechte Asbestentfernung',
        'TRGS 519 konform',
        'Standarddokumentation',
        'Entsorgung inklusive',
        '2 Jahre Garantie'
      ],
      premium: [],
      cta: 'Standard wählen',
      color: 'from-gray-400 to-gray-500',
      responseTime: '48-72 Stunden',
      guarantee: '2 Jahre'
    },
    {
      id: 'premium',
      name: 'Premium Sanierung',
      badge: 'BELIEBT',
      price: 'ab 55€/m²',
      originalPrice: 'ab 75€/m²',
      popular: true,
      features: [
        'Premium Asbestentfernung',
        'Erweiterte Sicherheitsmaßnahmen',
        'Luftqualitätsmessung',
        'Umfassende Dokumentation',
        '5 Jahre Premium-Garantie',
        'Schnellere Durchführung'
      ],
      premium: [
        'Persönlicher Projektmanager',
        'Foto-Dokumentation',
        'Abschlusszertifikat'
      ],
      cta: 'Premium wählen',
      color: 'from-[#0066CC] to-[#0052A3]',
      responseTime: '24 Stunden',
      guarantee: '5 Jahre'
    },
    {
      id: 'vip',
      name: 'VIP Express Service',
      badge: 'EXKLUSIV',
      price: 'ab 95€/m²',
      originalPrice: 'ab 120€/m²',
      luxury: true,
      features: [
        'VIP Express-Sanierung',
        'Höchste Sicherheitsstandards',
        'Kontinuierliche Überwachung',
        'Vollständige Projektbetreuung',
        '10 Jahre VIP-Garantie',
        'Same-Day Service möglich'
      ],
      premium: [
        'Dedicated VIP-Team',
        '24/7 Hotline',
        'Concierge-Service',
        'Luxus-Ersatzmaterialien',
        'White-Glove-Service',
        'Kostenlose Nachbesserungen'
      ],
      cta: 'VIP Service buchen',
      color: 'from-purple-600 to-pink-600',
      responseTime: '2-6 Stunden',
      guarantee: '10 Jahre'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Service-Level</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
            Wählen Sie Ihr Premium-Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von Standard bis VIP - wir haben für jeden Anspruch die passende Lösung
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`
                relative rounded-3xl border-2 transition-all duration-300 hover:scale-105
                ${tier.popular || tier.luxury 
                  ? 'border-transparent bg-gradient-to-br p-0.5' 
                  : 'border-gray-200 bg-white'}
                ${tier.popular ? 'shadow-2xl shadow-blue-500/20' : ''}
                ${tier.luxury ? 'shadow-2xl shadow-purple-500/20' : ''}
                ${selectedTier === tier.id ? 'ring-4 ring-blue-200' : ''}
              `}
              style={tier.popular || tier.luxury ? {
                backgroundImage: tier.color.includes('from-') && tier.color.includes('to-') 
                  ? `linear-gradient(135deg, ${tier.color.split(' ').find(c => c.includes('from-'))?.replace('from-', '') || '#0066CC'} 0%, ${tier.color.split(' ').find(c => c.includes('to-'))?.replace('to-', '') || '#0052A3'} 100%)`
                  : `linear-gradient(135deg, #0066CC 0%, #0052A3 100%)`
              } : {}}
            >
              {/* Badge */}
              {(tier.popular || tier.luxury) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`bg-gradient-to-r ${tier.color} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className={`
                h-full rounded-3xl p-8
                ${tier.popular || tier.luxury ? 'bg-white m-0.5' : ''}
              `}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  
                  <div className="mb-4">
                    {tier.originalPrice && (
                      <p className="text-lg text-gray-400 line-through">{tier.originalPrice}</p>
                    )}
                    <p className="text-4xl font-black text-gray-900">{tier.price}</p>
                    <p className="text-sm text-gray-600">zzgl. MwSt.</p>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="clock" size={16} className="text-[#0066CC]" />
                      <span>{tier.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="shield" size={16} className="text-green-500" />
                      <span>{tier.guarantee}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="check" size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {tier.premium.length > 0 && (
                    <>
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <p className="text-sm font-semibold text-[#0066CC] mb-3">
                          PREMIUM INKLUSIV:
                        </p>
                      </div>
                      {tier.premium.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Icon name="star" size={16} className="text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <button
                  onClick={() => setSelectedTier(tier.id)}
                  className={`
                    w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300
                    ${tier.luxury 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105'
                      : tier.popular
                      ? 'bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {tier.cta}
                </button>

                {tier.luxury && (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      Exklusiv für anspruchsvolle Kunden
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-6">
            <h3 className="text-2xl font-bold text-center">Detaillierter Service-Vergleich</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Leistung</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Standard</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">VIP Express</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Reaktionszeit', standard: '48-72h', premium: '24h', vip: '2-6h' },
                  { feature: 'Projektmanager', standard: '❌', premium: '✅', vip: '✅ Dedicated' },
                  { feature: 'Luftqualitätsmessung', standard: '❌', premium: '✅', vip: '✅ Kontinuierlich' },
                  { feature: 'Garantiezeit', standard: '2 Jahre', premium: '5 Jahre', vip: '10 Jahre' },
                  { feature: '24/7 Hotline', standard: '❌', premium: '❌', vip: '✅' },
                  { feature: 'Concierge Service', standard: '❌', premium: '❌', vip: '✅' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{row.standard}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{row.premium}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">{row.vip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Persönliche Beratung anfordern
            <Icon name="arrow-right" size={20} />
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Kostenlose Beratung • Festpreisgarantie • Keine versteckten Kosten
          </p>
        </div>
      </div>
    </section>
  );
}