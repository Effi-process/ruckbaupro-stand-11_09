'use client';
import { useState, useEffect } from 'react';
import MasterTrustBuilder from '../components/MasterTrustBuilder';
import SocialProofSystem from '../components/SocialProofSystem';
import ReputationManagement from '../components/ReputationManagement';
import RetentionSystem from '../components/RetentionSystem';
import TrustBadges from '../components/TrustBadges';
import Icon from '../components/Icon';

export default function TrustDemo() {
  const [activeDemo, setActiveDemo] = useState('all');
  const [layout, setLayout] = useState<'full-page' | 'section' | 'sidebar' | 'widget'>('full-page');
  const [showNotifications, setShowNotifications] = useState(true);

  const demos = [
    { id: 'all', name: 'Alle Features', icon: 'layers' },
    { id: 'master', name: 'Master Trust Builder', icon: 'shield' },
    { id: 'social', name: 'Social Proof', icon: 'users' },
    { id: 'reputation', name: 'Reputation', icon: 'star' },
    { id: 'retention', name: 'Kundenbindung', icon: 'heart' },
    { id: 'badges', name: 'Trust Badges', icon: 'award' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Trust System Demo</h1>
              <p className="text-sm text-gray-500">Erleben Sie alle Vertrauensbildenden Features in Aktion</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Layout:</span>
                <select
                  value={layout}
                  onChange={(e) => setLayout(e.target.value as any)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="full-page">Full Page</option>
                  <option value="section">Section</option>
                  <option value="sidebar">Sidebar</option>
                  <option value="widget">Widget</option>
                </select>
              </div>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  showNotifications
                    ? 'bg-cerulean text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                <Icon name="bell" size={16} className="inline mr-2" />
                Notifications {showNotifications ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Navigation */}
      <nav className="bg-white border-b">
        <div className="container-custom">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {demos.map(demo => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeDemo === demo.id
                    ? 'bg-cerulean text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon name={demo.icon} size={20} />
                {demo.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div className="container-custom py-8">
        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-cerulean">97</p>
              <p className="text-sm text-gray-600">Trust Score</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">4.9★</p>
              <p className="text-sm text-gray-600">Bewertung</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">2,847</p>
              <p className="text-sm text-gray-600">Kunden</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">24/7</p>
              <p className="text-sm text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* Demo Components */}
        <div className="space-y-8">
          {(activeDemo === 'all' || activeDemo === 'master') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Master Trust Builder</h2>
              <MasterTrustBuilder preset="MAXIMUM_TRUST" layout={layout} />
            </div>
          )}

          {(activeDemo === 'all' || activeDemo === 'social') && showNotifications && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Social Proof System</h2>
              <SocialProofSystem variant="full" showLiveUpdates={true} />
            </div>
          )}

          {(activeDemo === 'all' || activeDemo === 'reputation') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Reputation Management</h2>
              <ReputationManagement variant="full" showLiveUpdates={true} />
            </div>
          )}

          {(activeDemo === 'all' || activeDemo === 'retention') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Retention System</h2>
              <RetentionSystem />
            </div>
          )}

          {(activeDemo === 'all' || activeDemo === 'badges') && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Trust Badges</h2>
              <TrustBadges />
            </div>
          )}
        </div>

        {/* Configuration Panel */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Live-Konfiguration</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Performance Metriken</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ladezeit</span>
                  <span className="font-medium text-green-600">0.8s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Conversion Impact</span>
                  <span className="font-medium text-green-600">+34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">User Engagement</span>
                  <span className="font-medium text-green-600">+67%</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Aktive Features</h4>
              <div className="space-y-2">
                {[
                  'Live-Bewertungen',
                  'Trust Score Animation',
                  'Social Proof Popups',
                  'Loyalty Program',
                  'Certificate Display'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-gradient-to-r from-cerulean to-indigo-dye rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Über das Trust System</h3>
          <p className="mb-4 opacity-90">
            Unser innovatives Trust System kombiniert modernste Technologien zur Vertrauensbildung mit 
            psychologischen Prinzipien, um die Conversion-Rate nachweislich zu steigern.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="font-semibold mb-1">Social Proof</p>
              <p className="opacity-80">Echte Kundenbewertungen in Echtzeit</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="font-semibold mb-1">Trust Indicators</p>
              <p className="opacity-80">Zertifikate & Sicherheitssiegel</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="font-semibold mb-1">Retention</p>
              <p className="opacity-80">Kundenbindung & Loyalty Program</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}