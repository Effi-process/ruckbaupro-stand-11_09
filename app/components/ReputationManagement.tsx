'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface ReputationManagementProps {
  variant?: 'full' | 'compact' | 'minimal';
  showLiveUpdates?: boolean;
  enableInteractivity?: boolean;
}

interface GoogleReviewsData {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: { stars: number; count: number; percentage: number }[];
  recentReviews: {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: Date;
    response?: string;
    responseDate?: Date;
    projectType?: string;
  }[];
  monthlyTrend: { month: string; rating: number; count: number }[];
}

interface TrustScoreData {
  overall: number;
  breakdown: {
    certifications: number;
    insurance: number;
    experience: number;
    customerSatisfaction: number;
    safetyRecord: number;
    transparency: number;
  };
  trend: { date: Date; score: number }[];
  lastUpdated: Date;
  rank: {
    local: number;
    regional: number;
    national: number;
  };
}

interface IndustryAward {
  id: string;
  name: string;
  organization: string;
  year: number;
  category: string;
  description: string;
  logoUrl: string;
  certificateUrl?: string;
  isRecent: boolean;
  priority: number;
  significance: 'local' | 'regional' | 'national' | 'international';
}

interface MediaMention {
  id: string;
  outlet: string;
  title: string;
  date: Date;
  type: 'article' | 'interview' | 'feature' | 'press-release' | 'tv' | 'radio';
  url: string;
  excerpt: string;
  logoUrl: string;
  isFeatured: boolean;
  sentiment: 'positive' | 'neutral' | 'negative';
  reach: number;
}

interface PartnerLogo {
  id: string;
  name: string;
  logoUrl: string;
  relationship: 'supplier' | 'certification' | 'insurance' | 'technology' | 'association';
  since: Date;
  description: string;
  websiteUrl?: string;
  priority: number;
  tier: 'premium' | 'standard' | 'basic';
}

export default function ReputationManagement({ 
  variant = 'full', 
  showLiveUpdates = true,
  enableInteractivity = true 
}: ReputationManagementProps) {
  const [activeView, setActiveView] = useState('trust-score');
  const [selectedAward, setSelectedAward] = useState<IndustryAward | null>(null);
  const [liveReviewCount, setLiveReviewCount] = useState(2847);
  const [trustScoreHistory, setTrustScoreHistory] = useState<number[]>([]);

  // Mock-Daten für Google Reviews
  const googleReviews: GoogleReviewsData = {
    averageRating: 4.9,
    totalReviews: 2847,
    ratingDistribution: [
      { stars: 5, count: 2564, percentage: 90.1 },
      { stars: 4, count: 228, percentage: 8.0 },
      { stars: 3, count: 34, percentage: 1.2 },
      { stars: 2, count: 14, percentage: 0.5 },
      { stars: 1, count: 7, percentage: 0.2 }
    ],
    recentReviews: [
      {
        id: 'gr-001',
        author: 'Familie Müller',
        rating: 5,
        text: 'Außergewöhnlich professionelle Asbestsanierung unseres Daches. Das Team war pünktlich, gründlich und hat alle Sicherheitsmaßnahmen penibel eingehalten. Die Baustelle wurde täglich sauber hinterlassen.',
        date: new Date('2024-07-20'),
        response: 'Vielen Dank für Ihr Vertrauen und das positive Feedback! Es freut uns sehr, dass Sie mit unserer Arbeit zufrieden sind.',
        responseDate: new Date('2024-07-21'),
        projectType: 'Dachsanierung'
      },
      {
        id: 'gr-002',
        author: 'Thomas Schmidt',
        rating: 5,
        text: 'Notfall-Sanierung nach Wasserschaden. Binnen 2 Stunden vor Ort, kompetente Beratung und sofortige Hilfe. Faire Preise und perfekte Ausführung.',
        date: new Date('2024-07-18'),
        response: 'Wir sind immer da, wenn Sie uns brauchen. Vielen Dank für die Weiterempfehlung!',
        responseDate: new Date('2024-07-18'),
        projectType: 'Notfallsanierung'
      }
    ],
    monthlyTrend: [
      { month: 'Jan', rating: 4.8, count: 187 },
      { month: 'Feb', rating: 4.8, count: 201 },
      { month: 'Mär', rating: 4.9, count: 234 },
      { month: 'Apr', rating: 4.9, count: 278 },
      { month: 'Mai', rating: 4.9, count: 312 },
      { month: 'Jun', rating: 4.9, count: 289 }
    ]
  };

  // Mock-Daten für Trust Score
  const trustScore: TrustScoreData = {
    overall: 97,
    breakdown: {
      certifications: 100,
      insurance: 98,
      experience: 95,
      customerSatisfaction: 99,
      safetyRecord: 100,
      transparency: 94
    },
    trend: Array.from({ length: 12 }, (_, i) => ({
      date: new Date(2024, i, 1),
      score: 90 + Math.random() * 10
    })),
    lastUpdated: new Date(),
    rank: {
      local: 1,
      regional: 1,
      national: 3
    }
  };

  // Mock-Daten für Industry Awards
  const industryAwards: IndustryAward[] = [
    {
      id: 'award-001',
      name: 'Umweltschutz-Preis NRW 2024',
      organization: 'Ministerium für Umwelt NRW',
      year: 2024,
      category: 'Beste Schadstoffsanierung',
      description: 'Auszeichnung für innovative und umweltschonende Asbestsanierungsverfahren',
      logoUrl: '/images/awards/nrw-umwelt.png',
      certificateUrl: '/documents/umweltpreis-2024.pdf',
      isRecent: true,
      priority: 1,
      significance: 'regional'
    },
    {
      id: 'award-002',
      name: 'Handwerk Award 2023',
      organization: 'Handwerkskammer OWL',
      year: 2023,
      category: 'Innovation des Jahres',
      description: 'Würdigung für die Entwicklung sichererer Arbeitsmethoden in der Asbestsanierung',
      logoUrl: '/images/awards/handwerk-owl.png',
      certificateUrl: '/documents/handwerk-award-2023.pdf',
      isRecent: true,
      priority: 2,
      significance: 'regional'
    },
    {
      id: 'award-003',
      name: 'TÜV Süd Quality Award',
      organization: 'TÜV Süd',
      year: 2023,
      category: 'Qualitätsmanagement',
      description: 'Auszeichnung für herausragende Qualitätsstandards und Kundenzufriedenheit',
      logoUrl: '/images/awards/tuv-sued.png',
      isRecent: false,
      priority: 3,
      significance: 'national'
    }
  ];

  // Mock-Daten für Media Mentions
  const mediaMentions: MediaMention[] = [
    {
      id: 'media-001',
      outlet: 'WDR Lokalzeit OWL',
      title: 'Innovative Asbestsanierung schützt Umwelt und Gesundheit',
      date: new Date('2024-06-15'),
      type: 'tv',
      url: 'https://www1.wdr.de/mediathek/video-asbestsanierung-bielefeld-100.html',
      excerpt: 'Ein Bielefelder Unternehmen revolutioniert die Asbestsanierung mit umweltschonenden Verfahren...',
      logoUrl: '/images/media/wdr.png',
      isFeatured: true,
      sentiment: 'positive',
      reach: 150000
    },
    {
      id: 'media-002',
      outlet: 'Neue Westfälische',
      title: 'Sicherheit bei Asbestsanierung hat oberste Priorität',
      date: new Date('2024-05-20'),
      type: 'article',
      url: 'https://www.nw.de/lokalnachrichten/bielefeld/asbestsanierung',
      excerpt: 'Bielefelder Spezialisten setzen neue Maßstäbe in der sicheren Entfernung von Asbestmaterialien...',
      logoUrl: '/images/media/nw.png',
      isFeatured: true,
      sentiment: 'positive',
      reach: 75000
    },
    {
      id: 'media-003',
      outlet: 'Radio Bielefeld',
      title: 'Experteninterview: Asbest richtig erkennen und sanieren',
      date: new Date('2024-04-10'),
      type: 'radio',
      url: 'https://www.radiobielefeld.de/nachrichten/asbest-interview',
      excerpt: 'Im Gespräch mit unserem Experten erfahren Sie, wie Sie Asbest erkennen und was zu tun ist...',
      logoUrl: '/images/media/radio-bielefeld.png',
      isFeatured: false,
      sentiment: 'positive',
      reach: 45000
    }
  ];

  // Mock-Daten für Partner Logos
  const partnerLogos: PartnerLogo[] = [
    {
      id: 'partner-001',
      name: 'TÜV Rheinland',
      logoUrl: '/images/partners/tuv-rheinland.png',
      relationship: 'certification',
      since: new Date('2018-01-01'),
      description: 'Zertifizierungspartner für Qualitäts- und Sicherheitsstandards',
      websiteUrl: 'https://www.tuv.com',
      priority: 1,
      tier: 'premium'
    },
    {
      id: 'partner-002',
      name: 'DEKRA',
      logoUrl: '/images/partners/dekra.png',
      relationship: 'certification',
      since: new Date('2019-03-01'),
      description: 'Partner für Arbeitsschutz und Sicherheitsprüfungen',
      websiteUrl: 'https://www.dekra.de',
      priority: 2,
      tier: 'premium'
    },
    {
      id: 'partner-003',
      name: 'Allianz Versicherung',
      logoUrl: '/images/partners/allianz.png',
      relationship: 'insurance',
      since: new Date('2015-01-01'),
      description: 'Versicherungspartner für umfassenden Schutz',
      websiteUrl: 'https://www.allianz.de',
      priority: 3,
      tier: 'premium'
    },
    {
      id: 'partner-004',
      name: 'BG BAU',
      logoUrl: '/images/partners/bg-bau.png',
      relationship: 'association',
      since: new Date('2012-01-01'),
      description: 'Berufsgenossenschaft der Bauwirtschaft',
      websiteUrl: 'https://www.bgbau.de',
      priority: 4,
      tier: 'standard'
    },
    {
      id: 'partner-005',
      name: 'Kärcher Professional',
      logoUrl: '/images/partners/kaercher.png',
      relationship: 'supplier',
      since: new Date('2016-01-01'),
      description: 'Premium-Ausrüstung für professionelle Reinigung',
      websiteUrl: 'https://www.kaercher.com',
      priority: 5,
      tier: 'standard'
    },
    {
      id: 'partner-006',
      name: 'Dräger Safety',
      logoUrl: '/images/partners/draeger.png',
      relationship: 'supplier',
      since: new Date('2017-01-01'),
      description: 'Spezialist für Atemschutz und Sicherheitstechnik',
      websiteUrl: 'https://www.draeger.com',
      priority: 6,
      tier: 'standard'
    }
  ];

  // Live-Updates simulieren
  useEffect(() => {
    if (showLiveUpdates) {
      const interval = setInterval(() => {
        setLiveReviewCount(prev => prev + Math.floor(Math.random() * 2));
        setTrustScoreHistory(prev => [...prev.slice(-11), trustScore.overall + Math.random() * 2 - 1]);
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [showLiveUpdates, trustScore.overall]);

  const GoogleReviewsWidget = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <Icon name="star" size={24} color="white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Google Bewertungen</h3>
            {showLiveUpdates && (
              <div className="flex items-center gap-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">{liveReviewCount} Bewertungen</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-4xl font-bold text-gray-900">{googleReviews.averageRating}</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Icon 
                  key={i} 
                  name="star" 
                  size={24} 
                  className={i < Math.floor(googleReviews.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">{googleReviews.totalReviews} Bewertungen</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Bewertungsverteilung</h4>
          <div className="space-y-2">
            {googleReviews.ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm text-gray-600">{rating.stars}</span>
                  <Icon name="star" size={14} className="text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full" 
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12 text-right">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Aktuelle Bewertungen</h4>
          <div className="space-y-4">
            {googleReviews.recentReviews.slice(0, 2).map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium text-gray-900">{review.author}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="star" 
                            size={12} 
                            className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {review.date.toLocaleDateString('de-DE')}
                      </span>
                    </div>
                  </div>
                  {review.projectType && (
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                      {review.projectType}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">{review.text}</p>
                
                {review.response && (
                  <div className="bg-gray-50 rounded-lg p-3 mt-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="reply" size={14} className="text-blue-600" />
                      <span className="text-xs font-medium text-gray-700">Antwort vom Unternehmen</span>
                    </div>
                    <p className="text-sm text-gray-600">{review.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TrustScoreCalculator = () => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2">Vertrauens-Score</h3>
        <p className="text-blue-100">Transparent berechnete Vertrauenswürdigkeit</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
            <div className="text-4xl font-bold">{trustScore.overall}</div>
            <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-white border-l-transparent"
              style={{ 
                transform: `rotate(${(trustScore.overall / 100) * 360}deg)`,
                transition: 'transform 1s ease-in-out'
              }}
            ></div>
          </div>
          <div className="text-blue-100">von 100 Punkten</div>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          {Object.entries(trustScore.breakdown).map(([key, value]) => (
            <div key={key}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 capitalize">
                  {key === 'certifications' ? 'Zertifizierungen' :
                   key === 'insurance' ? 'Versicherungsschutz' :
                   key === 'experience' ? 'Erfahrung' :
                   key === 'customerSatisfaction' ? 'Kundenzufriedenheit' :
                   key === 'safetyRecord' ? 'Sicherheitsbilanz' :
                   'Transparenz'}
                </span>
                <span className="text-white font-bold">{value}%</span>
              </div>
              <div className="bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/10 rounded-xl p-4">
          <div>
            <div className="text-2xl font-bold">#{trustScore.rank.local}</div>
            <div className="text-xs text-blue-100">Lokal (Bielefeld)</div>
          </div>
          <div>
            <div className="text-2xl font-bold">#{trustScore.rank.regional}</div>
            <div className="text-xs text-blue-100">Regional (OWL)</div>
          </div>
          <div>
            <div className="text-2xl font-bold">#{trustScore.rank.national}</div>
            <div className="text-xs text-blue-100">National</div>
          </div>
        </div>
        
        <p className="text-xs text-blue-100 mt-4">
          Letzte Aktualisierung: {trustScore.lastUpdated.toLocaleDateString('de-DE')}
        </p>
      </div>
    </div>
  );

  const IndustryAwardDisplay = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Auszeichnungen & Preise</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {industryAwards.map((award) => (
          <div 
            key={award.id} 
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => enableInteractivity && setSelectedAward(award)}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="award" size={32} color="white" />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900">{award.name}</h4>
                <p className="text-sm text-gray-600">{award.organization}</p>
                
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                    {award.year}
                  </span>
                  {award.isRecent && (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Neu
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-700 line-clamp-2">{award.description}</p>
                
                <div className="text-xs text-gray-500 capitalize">{award.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MediaMentionShowcase = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Medienberichte</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {mediaMentions.filter(m => m.isFeatured).map((mention) => (
          <div key={mention.id} className="border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                <Icon 
                  name={
                    mention.type === 'tv' ? 'tv' :
                    mention.type === 'radio' ? 'radio' :
                    'newspaper'
                  } 
                  size={24} 
                  className="text-gray-600" 
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-bold text-gray-900">{mention.outlet}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    mention.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {mention.type.toUpperCase()}
                  </span>
                </div>
                
                <h5 className="font-semibold text-gray-800 mb-2">{mention.title}</h5>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{mention.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    {mention.date.toLocaleDateString('de-DE')} • {mention.reach.toLocaleString()} Reichweite
                  </div>
                  
                  <a 
                    href={mention.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Artikel lesen
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Alle Medienberichte anzeigen
        </button>
      </div>
    </div>
  );

  const PartnerLogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const premiumPartners = partnerLogos.filter(p => p.tier === 'premium');
    const standardPartners = partnerLogos.filter(p => p.tier === 'standard');

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Partner</h3>
        
        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Premium-Partner</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {premiumPartners.map((partner) => (
                <div key={partner.id} className="text-center group">
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-100 transition-colors">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon name="shield-check" size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{partner.relationship}</div>
                  <div className="text-xs text-gray-400">
                    seit {partner.since.getFullYear()}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Weitere Partner</h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {standardPartners.map((partner) => (
                <div key={partner.id} className="text-center group">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-gray-100 transition-colors">
                    <Icon name="users" size={20} className="text-gray-600" />
                  </div>
                  <div className="text-xs font-medium text-gray-700">{partner.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{partnerLogos.length}</div>
              <div className="text-xs text-gray-600">Partner</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {partnerLogos.filter(p => p.tier === 'premium').length}
              </div>
              <div className="text-xs text-gray-600">Premium</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {new Date().getFullYear() - Math.min(...partnerLogos.map(p => p.since.getFullYear()))}
              </div>
              <div className="text-xs text-gray-600">Jahre</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-xs text-gray-600">Zufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center gap-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="star" size={16} className="text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium">4.9/5 Google</span>
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="text-sm font-medium text-gray-700">Vertrauens-Score: 97/100</div>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="flex items-center gap-2">
          <Icon name="award" size={16} className="text-yellow-500" />
          <span className="text-sm font-medium">3 Auszeichnungen 2024</span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="space-y-6">
        <TrustScoreCalculator />
        <GoogleReviewsWidget />
      </div>
    );
  }

  // Full variant
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Vertrauen durch Leistung
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Messbare Reputation, nachweisbare Erfolge und die Anerkennung unserer Kunden und Partner
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-white rounded-full p-1 shadow-lg">
          {['trust-score', 'reviews', 'awards', 'media', 'partners'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveView(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeView === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'trust-score' && 'Trust-Score'}
              {tab === 'reviews' && 'Bewertungen'}
              {tab === 'awards' && 'Auszeichnungen'}
              {tab === 'media' && 'Medien'}
              {tab === 'partners' && 'Partner'}
            </button>
          ))}
        </div>
      </div>

      {activeView === 'trust-score' && <TrustScoreCalculator />}
      {activeView === 'reviews' && <GoogleReviewsWidget />}
      {activeView === 'awards' && <IndustryAwardDisplay />}
      {activeView === 'media' && <MediaMentionShowcase />}
      {activeView === 'partners' && <PartnerLogoCarousel />}

      {/* Award Details Modal */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{selectedAward.name}</h3>
                <button
                  onClick={() => setSelectedAward(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <Icon name="x" size={16} />
                </button>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="award" size={64} color="white" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">{selectedAward.organization}</h4>
                  <p className="text-gray-600">{selectedAward.category} • {selectedAward.year}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedAward.significance === 'international' ? 'bg-purple-100 text-purple-700' :
                    selectedAward.significance === 'national' ? 'bg-blue-100 text-blue-700' :
                    selectedAward.significance === 'regional' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {selectedAward.significance === 'international' ? 'International' :
                     selectedAward.significance === 'national' ? 'National' :
                     selectedAward.significance === 'regional' ? 'Regional' :
                     'Lokal'}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Beschreibung</h5>
                  <p className="text-gray-700">{selectedAward.description}</p>
                </div>
                
                {selectedAward.certificateUrl && (
                  <div className="text-center pt-4 border-t border-gray-200">
                    <a
                      href={selectedAward.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Icon name="download" size={16} />
                      Urkunde herunterladen
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}