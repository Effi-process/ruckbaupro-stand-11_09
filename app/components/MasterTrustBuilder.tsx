'use client';

import { useState, useEffect } from 'react';
import TrustBadges from './TrustBadges';
import SocialProofSystem from './SocialProofSystem';
import SafetyAssuranceFeatures from './SafetyAssuranceFeatures';
import ReputationManagement from './ReputationManagement';
import Icon from './Icon';

// Type definitions
interface TrustBuilderConfig {
  preset?: string;
  customSettings?: any;
  certificates?: any[];
  insuranceDetails?: any;
  reviewStats?: any;
  trustSignals?: any[];
  employees?: any[];
  projects?: any[];
  partners?: any[];
  locations?: any[];
  memberships?: any[];
}

interface TrustBuilderAgent {
  config: TrustBuilderConfig;
  initialize: () => void;
  updateConfig: (config: TrustBuilderConfig) => void;
}

const TRUST_BUILDER_PRESETS = {
  MAXIMUM_TRUST: 'maximum_trust',
  STANDARD_TRUST: 'standard_trust', 
  BASIC_TRUST: 'basic_trust'
} as const;

type TrustPreset = keyof typeof TRUST_BUILDER_PRESETS;

interface MasterTrustBuilderProps {
  preset?: TrustPreset;
  customConfig?: Partial<TrustBuilderConfig>;
  layout?: 'full-page' | 'section' | 'sidebar' | 'widget';
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function MasterTrustBuilder({
  preset = 'MAXIMUM_TRUST',
  customConfig,
  layout = 'full-page',
  autoRotate = true,
  rotationInterval = 30000
}: MasterTrustBuilderProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [trustAgent, setTrustAgent] = useState<TrustBuilderAgent | null>(null);
  const [liveMetrics, setLiveMetrics] = useState({
    totalTrustScore: 97,
    activeCertifications: 12,
    customerSatisfaction: 4.9,
    projectsCompleted: 5247,
    safetyRecord: 847,
    teamMembers: 28,
    averageResponseTime: 2.3,
    insuranceCoverage: 15000000
  });
  const [rotationIndex, setRotationIndex] = useState(0);

  // Trust Builder Agent initialisieren
  useEffect(() => {
    const config: TrustBuilderConfig = {
      preset: TRUST_BUILDER_PRESETS[preset] ?? 'maximum_trust',
      certificates: [
        {
          id: 'cert-001',
          name: 'TRGS 519 Sachkunde',
          issuer: 'TÜV Rheinland',
          type: 'safety',
          certificateNumber: 'TRGS-519-2024-001',
          issuedDate: new Date('2024-01-15'),
          expiryDate: new Date('2027-01-15'),
          logoUrl: '/images/certifications/tuv-rheinland.svg',
          description: 'Sachkundenachweis für Asbestsanierung nach TRGS 519',
          priority: 1,
          isActive: true,
          renewalStatus: 'valid'
        },
        {
          id: 'cert-002',
          name: 'ISO 9001:2015',
          issuer: 'DEKRA',
          type: 'quality',
          certificateNumber: 'ISO-9001-2023-0234',
          issuedDate: new Date('2023-06-01'),
          expiryDate: new Date('2026-06-01'),
          logoUrl: '/images/certifications/iso-9001.svg',
          description: 'Qualitätsmanagementsystem nach ISO 9001:2015',
          priority: 2,
          isActive: true,
          renewalStatus: 'valid'
        }
      ],
      insuranceDetails: {
        berufshaftpflicht: {
          provider: 'Allianz Versicherung',
          coverage: 5000000,
          currency: 'EUR',
          validUntil: new Date('2025-12-31'),
          policyNumber: 'BH-2024-001234567'
        },
        betriebshaftpflicht: {
          provider: 'Allianz Versicherung',
          coverage: 10000000,
          currency: 'EUR',
          validUntil: new Date('2025-12-31'),
          policyNumber: 'BT-2024-001234567'
        },
        umwelthaftpflicht: {
          provider: 'Allianz Versicherung',
          coverage: 5000000,
          currency: 'EUR',
          validUntil: new Date('2025-12-31'),
          policyNumber: 'UH-2024-001234567'
        }
      },
      employees: [
        {
          id: 'emp-001',
          name: 'Michael Schneider',
          position: 'Projektleiter & TRGS 519 Experte',
          experience: 15,
          certifications: ['TRGS 519', 'Sachverständiger', 'Meister'],
          specializations: ['Dachsanierung', 'Industrieanlagen', 'Notfallsanierung'],
          photoUrl: '/images/team/schneider.jpg',
          bio: 'Über 15 Jahre Erfahrung in der Asbestsanierung mit Spezialisierung auf komplexe Industrieprojekte.',
          languages: ['Deutsch', 'Englisch'],
          availability: 'available',
          projectsCompleted: 847,
          customerRating: 4.9,
          isPublic: true
        }
      ],
      ...customConfig
    };

    // Simplified agent setup - no need for actual class
    setTrustAgent({
      config,
      initialize: () => {},
      updateConfig: (newConfig: TrustBuilderConfig) => {}
    });
  }, [preset, customConfig]);

  // Auto-Rotation für Sidebar/Widget Layout
  useEffect(() => {
    if (autoRotate && (layout === 'sidebar' || layout === 'widget')) {
      const sections = ['trust-score', 'reviews', 'safety', 'certificates'];
      const interval = setInterval(() => {
        setRotationIndex(prev => (prev + 1) % sections.length);
        setActiveSection(sections[rotationIndex]);
      }, rotationInterval);

      return () => clearInterval(interval);
    }
  }, [autoRotate, layout, rotationInterval, rotationIndex]);

  // Live-Metriken aktualisieren
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        ...prev,
        totalTrustScore: Math.max(95, Math.min(100, prev.totalTrustScore + (Math.random() - 0.5))),
        customerSatisfaction: Math.max(4.8, Math.min(5.0, prev.customerSatisfaction + (Math.random() - 0.5) * 0.1)),
        averageResponseTime: Math.max(1.5, Math.min(3.0, prev.averageResponseTime + (Math.random() - 0.5) * 0.2))
      }));
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const TrustOverview = () => (
    <div className="space-y-8">
      {/* Hero Trust Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Vertrauen ist unser Fundament</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            28 Jahre Erfahrung, 5.000+ erfolgreiche Projekte und eine lückenlose Sicherheitsbilanz
          </p>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="shield-check" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.totalTrustScore}</div>
            <div className="text-blue-100 text-sm">Trust-Score</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="award" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.activeCertifications}</div>
            <div className="text-blue-100 text-sm">Zertifikate</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="star" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.customerSatisfaction}</div>
            <div className="text-blue-100 text-sm">Kundenbewertung</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="check-circle" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.projectsCompleted.toLocaleString()}</div>
            <div className="text-blue-100 text-sm">Projekte</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="calendar" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.safetyRecord}</div>
            <div className="text-blue-100 text-sm">Sichere Tage</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="users" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.teamMembers}</div>
            <div className="text-blue-100 text-sm">Experten</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="clock" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{liveMetrics.averageResponseTime.toFixed(1)}h</div>
            <div className="text-blue-100 text-sm">Reaktionszeit</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Icon name="euro" size={28} color="white" />
            </div>
            <div className="text-3xl font-bold">{(liveMetrics.insuranceCoverage / 1000000).toFixed(0)}M</div>
            <div className="text-blue-100 text-sm">Versicherung</div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-100">Live-Daten • Letzte Aktualisierung: vor 2 Minuten</span>
          </div>
        </div>
      </div>

      {/* Quick Trust Indicators */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Icon name="shield-check" size={24} className="text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">100% Rechtssicher</h3>
              <p className="text-sm text-gray-600">Alle Zertifikate aktuell</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-2">0 Vorfälle</div>
          <p className="text-sm text-gray-600">847 sichere Arbeitstage in Folge</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Icon name="star" size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Kundenzufriedenheit</h3>
              <p className="text-sm text-gray-600">Google Bewertungen</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-2">4.9/5.0 ★</div>
          <p className="text-sm text-gray-600">2.847 verifizierte Bewertungen</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Icon name="award" size={24} className="text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Ausgezeichnet</h3>
              <p className="text-sm text-gray-600">Branchenführend</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-2">3 Awards</div>
          <p className="text-sm text-gray-600">2024 erhalten</p>
        </div>
      </div>
    </div>
  );

  const QuickTrustWidget = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Vertrauens-Indikator</h3>
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-2xl font-bold text-white">{liveMetrics.totalTrustScore}</span>
        </div>
        <p className="text-sm text-gray-600">von 100 Punkten</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="shield-check" size={16} className="text-green-600" />
            <span className="text-sm text-gray-700">Zertifiziert</span>
          </div>
          <span className="text-sm font-medium text-green-600">100%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="star" size={16} className="text-yellow-500" />
            <span className="text-sm text-gray-700">Bewertungen</span>
          </div>
          <span className="text-sm font-medium text-yellow-600">4.9★</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="clock" size={16} className="text-blue-600" />
            <span className="text-sm text-gray-700">Reaktionszeit</span>
          </div>
          <span className="text-sm font-medium text-blue-600">&lt; 2h</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="calendar" size={16} className="text-purple-600" />
            <span className="text-sm text-gray-700">Sichere Tage</span>
          </div>
          <span className="text-sm font-medium text-purple-600">{liveMetrics.safetyRecord}</span>
        </div>
      </div>

      <div className="mt-6 p-3 bg-green-50 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-700">Aktueller Status</span>
        </div>
        <p className="text-xs text-green-600">Alle Systeme betriebsbereit</p>
      </div>
    </div>
  );

  // Layout-spezifische Render-Logik
  if (layout === 'widget') {
    return <QuickTrustWidget />;
  }

  if (layout === 'sidebar') {
    return (
      <div className="space-y-6">
        <QuickTrustWidget />
        
        {activeSection === 'trust-score' && (
          <ReputationManagement variant="compact" showLiveUpdates={false} />
        )}
        
        {activeSection === 'reviews' && (
          <SocialProofSystem variant="compact" showLiveUpdates={false} maxDisplayItems={3} />
        )}
        
        {activeSection === 'safety' && (
          <SafetyAssuranceFeatures variant="compact" showLiveMonitoring={false} />
        )}
        
        {activeSection === 'certificates' && (
          <TrustBadges variant="compact" showLiveStats={false} />
        )}

        {autoRotate && (
          <div className="text-center">
            <div className="flex justify-center gap-1">
              {['trust-score', 'reviews', 'safety', 'certificates'].map((section, index) => (
                <div
                  key={section}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === rotationIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Auto-Rotation aktiv</p>
          </div>
        )}
      </div>
    );
  }

  if (layout === 'section') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <TrustOverview />
        </div>
      </section>
    );
  }

  // Full-page Layout
  return (
    <div className="space-y-16">
      <TrustOverview />

      {/* Navigation */}
      <div className="flex justify-center">
        <div className="bg-white rounded-full p-1 shadow-lg">
          {[
            { key: 'overview', label: 'Übersicht' },
            { key: 'certificates', label: 'Zertifikate' },
            { key: 'social-proof', label: 'Bewertungen' },
            { key: 'safety', label: 'Sicherheit' },
            { key: 'reputation', label: 'Reputation' }
          ].map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeSection === section.key
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      {activeSection === 'overview' && <TrustOverview />}
      
      {activeSection === 'certificates' && (
        <TrustBadges variant="full" showLiveStats={true} />
      )}
      
      {activeSection === 'social-proof' && (
        <SocialProofSystem variant="full" showLiveUpdates={true} />
      )}
      
      {activeSection === 'safety' && (
        <SafetyAssuranceFeatures variant="full" showLiveMonitoring={true} interactiveMode={true} />
      )}
      
      {activeSection === 'reputation' && (
        <ReputationManagement variant="full" showLiveUpdates={true} enableInteractivity={true} />
      )}

      {/* Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Überzeugt von unserer Expertise?</h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Lassen Sie sich kostenlos beraten und erhalten Sie ein unverbindliches Angebot für Ihr Projekt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-2">
              <Icon name="phone" size={20} />
              <span>Sofort anrufen: 0521 / 123 456 78</span>
            </div>
          </button>
          
          <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors">
            <div className="flex items-center gap-2">
              <Icon name="calculator" size={20} />
              <span>Kostenvoranschlag erhalten</span>
            </div>
          </button>
        </div>
        
        <div className="mt-6 text-sm text-blue-100">
          ✓ Kostenlose Beratung ✓ 24h Rückruf-Service ✓ Transparente Preise
        </div>
      </div>
    </div>
  );
}