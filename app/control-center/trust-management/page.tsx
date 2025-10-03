'use client';
import { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Icon from '../../components/Icon';
import FooterWithMarquee from '../../components/FooterWithMarquee';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
  verified: boolean;
}

interface Metric {
  label: string;
  value: number | string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export default function TrustManagement() {
  const [activeTab, setActiveTab] = useState('overview');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setReviews([
        {
          id: '1',
          name: 'Thomas Müller',
          rating: 5,
          text: 'Absolut professionelle Arbeit! Das Team war pünktlich und sauber.',
          date: '2025-01-15',
          status: 'pending',
          verified: false
        },
        {
          id: '2',
          name: 'Sarah Weber',
          rating: 5,
          text: 'Schnelle und zuverlässige Abwicklung. Faire Preise!',
          date: '2025-01-14',
          status: 'approved',
          verified: true
        },
        {
          id: '3',
          name: 'Michael Schmidt',
          rating: 4,
          text: 'Gute Arbeit, kleine Verzögerung aber gut kommuniziert.',
          date: '2025-01-13',
          status: 'approved',
          verified: true
        }
      ]);

      setMetrics([
        { label: 'Trust Score', value: 97, change: 2, trend: 'up' },
        { label: 'Bewertungen diese Woche', value: 23, change: 5, trend: 'up' },
        { label: 'Durchschnittsbewertung', value: '4.9', change: 0.1, trend: 'up' },
        { label: 'Conversion Rate', value: '34%', change: 3, trend: 'up' },
        { label: 'Antwortzeit', value: '1.2h', change: -0.3, trend: 'up' },
        { label: 'Zertifikate aktiv', value: 12, change: 0, trend: 'neutral' }
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const handleReviewAction = (reviewId: string, action: 'approve' | 'reject') => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, status: action === 'approve' ? 'approved' : 'rejected', verified: action === 'approve' }
        : review
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cerulean"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Logo and Menu */}
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/control-center" className="text-gray-600 hover:text-gray-900">
                <Icon name="arrow-left" size={24} />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Trust Management Center</h1>
                <p className="text-sm text-gray-500">Verwalten Sie Bewertungen, Zertifikate und Vertrauensindikatoren</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-cerulean text-white rounded-lg hover:bg-indigo-dye transition-colors">
                <Icon name="download" size={16} className="inline mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <div className="space-y-1">
              {[
                { id: 'overview', label: 'Übersicht', icon: 'dashboard' },
                { id: 'reviews', label: 'Bewertungen', icon: 'star' },
                { id: 'certificates', label: 'Zertifikate', icon: 'award' },
                { id: 'social-proof', label: 'Social Proof', icon: 'users' },
                { id: 'retention', label: 'Kundenbindung', icon: 'heart' },
                { id: 'analytics', label: 'Analytics', icon: 'bar-chart' },
                { id: 'settings', label: 'Einstellungen', icon: 'settings' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-cerulean text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</p>
                    <div className={`flex items-center gap-1 text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      <Icon name={metric.trend === 'up' ? 'arrow-up' : metric.trend === 'down' ? 'arrow-down' : 'minus'} size={16} />
                      <span>{Math.abs(metric.change)}{typeof metric.value === 'string' && metric.value.includes('%') ? '%' : ''}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Score Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Trust Score Entwicklung</h2>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[85, 88, 87, 90, 92, 91, 94, 93, 95, 96, 95, 97].map((value, index) => (
                    <div key={index} className="flex-1 bg-gradient-to-t from-cerulean to-cerulean/60 rounded-t-lg relative group hover:from-indigo-dye hover:to-indigo-dye/60 transition-all" 
                         style={{ height: `${(value / 100) * 100}%` }}>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {value}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mär</span>
                  <span>Apr</span>
                  <span>Mai</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Okt</span>
                  <span>Nov</span>
                  <span>Dez</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Letzte Aktivitäten</h3>
                  <div className="space-y-3">
                    {[
                      { icon: 'star', text: 'Neue 5-Sterne Bewertung von Thomas M.', time: 'vor 2 Stunden', color: 'text-yellow-500' },
                      { icon: 'award', text: 'ISO 9001 Zertifikat erneuert', time: 'vor 5 Stunden', color: 'text-green-500' },
                      { icon: 'users', text: '15 neue Newsletter-Anmeldungen', time: 'vor 1 Tag', color: 'text-blue-500' },
                      { icon: 'check-circle', text: 'Projekt #2847 erfolgreich abgeschlossen', time: 'vor 2 Tagen', color: 'text-green-500' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name={activity.icon} size={20} className={activity.color} />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.text}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Aktive Kampagnen</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Google Reviews Push', status: 'active', progress: 67, color: 'bg-green-500' },
                      { name: 'Loyalty Program Launch', status: 'active', progress: 45, color: 'bg-blue-500' },
                      { name: 'Trust Badge Update', status: 'pending', progress: 20, color: 'bg-yellow-500' },
                      { name: 'Customer Retention Email', status: 'active', progress: 89, color: 'bg-purple-500' }
                    ].map((campaign, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-900">{campaign.name}</span>
                          <span className="text-xs text-gray-500">{campaign.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`h-full ${campaign.color} rounded-full transition-all`} 
                               style={{ width: `${campaign.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Bewertungsverwaltung</h2>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                      Alle ({reviews.length})
                    </button>
                    <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200">
                      Ausstehend ({reviews.filter(r => r.status === 'pending').length})
                    </button>
                    <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                      Genehmigt ({reviews.filter(r => r.status === 'approved').length})
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map(review => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold text-gray-900">{review.name}</span>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Icon key={i} name="star" size={16} 
                                      className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                              ))}
                            </div>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                Verifiziert
                              </span>
                            )}
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              review.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              review.status === 'approved' ? 'bg-green-100 text-green-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {review.status === 'pending' ? 'Ausstehend' :
                               review.status === 'approved' ? 'Genehmigt' : 'Abgelehnt'}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">{review.text}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        {review.status === 'pending' && (
                          <div className="flex gap-2">
                            <button onClick={() => handleReviewAction(review.id, 'approve')}
                                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
                              Genehmigen
                            </button>
                            <button onClick={() => handleReviewAction(review.id, 'reject')}
                                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                              Ablehnen
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Zertifikatsverwaltung</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'ISO 9001:2015', issuer: 'TÜV Rheinland', expires: '2027-01-15', status: 'active' },
                    { name: 'TRGS 519', issuer: 'BGR', expires: '2026-06-30', status: 'active' },
                    { name: 'Entsorgungsfachbetrieb', issuer: 'IHK Berlin', expires: '2025-12-31', status: 'warning' },
                    { name: 'SCC** Zertifikat', issuer: 'DEKRA', expires: '2026-03-15', status: 'active' }
                  ].map((cert, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <Icon name="award" size={32} className="text-cerulean" />
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          cert.status === 'active' ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {cert.status === 'active' ? 'Aktiv' : 'Bald ablaufend'}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">Gültig bis: {cert.expires}</p>
                      <button className="mt-3 text-cerulean text-sm font-medium hover:text-indigo-dye">
                        Zertifikat erneuern →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {!['overview', 'reviews', 'certificates'].includes(activeTab) && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="text-center">
                <Icon name="construction" size={48} className="text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}
                </h2>
                <p className="text-gray-600">
                  Diese Funktion wird in Kürze verfügbar sein.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <FooterWithMarquee />
    </div>
  );
}
