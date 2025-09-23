'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Icon from './Icon';

interface SocialProofSystemProps {
  variant?: 'full' | 'compact' | 'minimal';
  showLiveUpdates?: boolean;
  maxDisplayItems?: number;
}

interface ReviewData {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: Date;
  platform: 'google' | 'trustpilot' | 'proven-expert';
  projectType?: string;
  verified: boolean;
  location?: string;
}

interface TestimonialData {
  id: string;
  clientName: string;
  clientTitle?: string;
  company?: string;
  testimonial: string;
  videoUrl?: string;
  photoUrl?: string;
  projectDetails: {
    type: string;
    location: string;
    duration: string;
    value: number;
  };
  rating: number;
  date: Date;
  isVideo: boolean;
  isFeatured: boolean;
}

interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    timeReduction?: number;
    costSavings?: number;
    efficiencyGain?: number;
    safetyImprovement?: number;
  };
  images: string[];
  timeline: string;
  isFeatured: boolean;
}

interface GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  projectType: string;
  location: string;
  description: string;
  duration: string;
  challenges: string[];
  results: string[];
  date: Date;
}

interface SuccessStoryData {
  id: string;
  headline: string;
  summary: string;
  clientQuote: string;
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  images: string[];
  videoUrl?: string;
  category: 'residential' | 'commercial' | 'industrial' | 'emergency';
  featured: boolean;
}

export default function SocialProofSystem({ 
  variant = 'full', 
  showLiveUpdates = true,
  maxDisplayItems = 6 
}: SocialProofSystemProps) {
  const [activeTab, setActiveTab] = useState('reviews');
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialData | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [liveReviewCount, setLiveReviewCount] = useState(2847);
  const [recentActivity, setRecentActivity] = useState<string[]>([]);

  // Mock-Daten - in der Realität würden diese von einer API kommen
  const reviews: ReviewData[] = [
    {
      id: 'r1',
      author: 'Michael Weber',
      rating: 5,
      text: 'Professionelle Asbestsanierung unseres Daches. Team war pünktlich, sauber und sehr kompetent. Alle Sicherheitsmaßnahmen wurden eingehalten.',
      date: new Date('2024-07-15'),
      platform: 'google',
      projectType: 'Dachsanierung',
      verified: true,
      location: 'Bielefeld'
    },
    {
      id: 'r2',
      author: 'Sandra Müller',
      rating: 5,
      text: 'Notfall-Sanierung nach Wasserschaden. Schnelle Reaktion, faire Preise und erstklassige Arbeit. Kann ich nur weiterempfehlen!',
      date: new Date('2024-07-10'),
      platform: 'trustpilot',
      projectType: 'Notfallsanierung',
      verified: true,
      location: 'Gütersloh'
    },
    {
      id: 'r3',
      author: 'Thomas Schmidt',
      rating: 5,
      text: 'Fassadensanierung unseres Bürogebäudes verlief reibungslos. Minimale Betriebsstörungen, termintreue Ausführung.',
      date: new Date('2024-07-08'),
      platform: 'proven-expert',
      projectType: 'Fassadensanierung',
      verified: true,
      location: 'Paderborn'
    }
  ];

  const testimonials: TestimonialData[] = [
    {
      id: 't1',
      clientName: 'Dr. Anna Hoffmann',
      clientTitle: 'Geschäftsführerin',
      company: 'Hoffmann Immobilien GmbH',
      testimonial: 'Die Zusammenarbeit war außergewöhnlich professionell. Das Team hat nicht nur technisch einwandfreie Arbeit geleistet, sondern auch alle Termine eingehalten und dabei höchste Sicherheitsstandards befolgt.',
      videoUrl: '/videos/testimonial-hoffmann.mp4',
      photoUrl: '/images/testimonials/hoffmann.jpg',
      projectDetails: {
        type: 'Komplexe Bürogebäude-Sanierung',
        location: 'Bielefeld Zentrum',
        duration: '6 Wochen',
        value: 180000
      },
      rating: 5,
      date: new Date('2024-06-20'),
      isVideo: true,
      isFeatured: true
    },
    {
      id: 't2',
      clientName: 'Markus Bauer',
      clientTitle: 'Hausbesitzer',
      testimonial: 'Nach der Entdeckung von Asbest in unserem Altbau waren wir sehr besorgt. Das Team hat uns umfassend beraten und die Sanierung perfekt durchgeführt. Wir fühlen uns jetzt wieder sicher in unserem Zuhause.',
      photoUrl: '/images/testimonials/bauer.jpg',
      projectDetails: {
        type: 'Wohnhaussanierung',
        location: 'Detmold',
        duration: '3 Wochen',
        value: 45000
      },
      rating: 5,
      date: new Date('2024-06-15'),
      isVideo: false,
      isFeatured: true
    }
  ];

  const caseStudies: CaseStudyData[] = [
    {
      id: 'cs1',
      title: 'Industrielle Großsanierung unter laufendem Betrieb',
      client: 'Maschinenbau AG',
      challenge: 'Asbestsanierung einer 5.000 m² Produktionshalle ohne Betriebsunterbrechung',
      solution: 'Phasenweise Sanierung mit speziellen Schutzkammern und Nachtarbeiten',
      results: [
        'Null Betriebsstörungen',
        '100% Schadstofffreiheit erreicht',
        'Projekt 2 Wochen vor Plan abgeschlossen',
        'Kosteneinsparung von 15% durch effiziente Planung'
      ],
      metrics: {
        timeReduction: 14,
        costSavings: 15,
        efficiencyGain: 30,
        safetyImprovement: 100
      },
      images: ['/images/case-studies/industrial-1.jpg', '/images/case-studies/industrial-2.jpg'],
      timeline: '8 Wochen',
      isFeatured: true
    }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      beforeImage: '/images/gallery/before-roof-1.jpg',
      afterImage: '/images/gallery/after-roof-1.jpg',
      projectType: 'Dachsanierung',
      location: 'Bielefeld',
      description: 'Komplette Asbestdach-Sanierung mit Neubedachung',
      duration: '2 Wochen',
      challenges: ['Schwer zugängliche Dachbereiche', 'Wetterschutz erforderlich'],
      results: ['100% asbestfrei', 'Moderne Dämmung', 'Energieeffizienz +40%'],
      date: new Date('2024-06-01')
    },
    {
      id: 'g2',
      beforeImage: '/images/gallery/before-facade-1.jpg',
      afterImage: '/images/gallery/after-facade-1.jpg',
      projectType: 'Fassadensanierung',
      location: 'Gütersloh',
      description: 'Asbest-Fassadenplatten Entfernung und Neubeschichtung',
      duration: '3 Wochen',
      challenges: ['Denkmalschutz beachten', 'Minimale Störung für Anwohner'],
      results: ['Originaloptik erhalten', 'Moderne Dämmung', 'Wertsteigerung +25%'],
      date: new Date('2024-05-15')
    }
  ];

  const successStories: SuccessStoryData[] = [
    {
      id: 'ss1',
      headline: 'Vom Notfall zur Traumimmobilie',
      summary: 'Familie rettet geerbtes Haus durch professionelle Asbestsanierung',
      clientQuote: 'Ohne dieses Team hätten wir das Haus verkaufen müssen. Jetzt ist es unser Traum-Zuhause.',
      metrics: [
        { label: 'Wertsteigerung', value: '+60%', icon: 'trending-up' },
        { label: 'Sanierungszeit', value: '4 Wochen', icon: 'clock' },
        { label: 'Kostenersparnis', value: '20%', icon: 'euro' },
        { label: 'Sicherheit', value: '100%', icon: 'shield-check' }
      ],
      images: ['/images/success/family-home-1.jpg'],
      category: 'residential',
      featured: true
    }
  ];

  // Live-Updates simulieren
  useEffect(() => {
    if (showLiveUpdates) {
      const interval = setInterval(() => {
        setLiveReviewCount(prev => prev + Math.floor(Math.random() * 3));
        
        const activities = [
          'Neue 5-Sterne Bewertung erhalten',
          'Projekt in Bielefeld erfolgreich abgeschlossen',
          'Video-Testimonial veröffentlicht',
          'Industriekunde empfiehlt uns weiter'
        ];
        
        setRecentActivity(prev => {
          const newActivity = activities[Math.floor(Math.random() * activities.length)];
          return [newActivity, ...prev.slice(0, 2)];
        });
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [showLiveUpdates]);

  const ReviewAggregator = () => (
    <div className="bg-off-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Kundenbewertungen</h3>
        {showLiveUpdates && (
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{liveReviewCount} Bewertungen</span>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {[
          { platform: 'Google', rating: 4.9, count: 1247, color: 'bg-blue-500' },
          { platform: 'Trustpilot', rating: 4.8, count: 892, color: 'bg-green-500' },
          { platform: 'ProvenExpert', rating: 4.9, count: 708, color: 'bg-orange-500' }
        ].map((platform, index) => (
          <div key={index} className="text-center bg-gray-50 rounded-xl p-4">
            <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
              <Icon name="star" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{platform.rating}</div>
            <div className="text-sm text-gray-600">{platform.count} Bewertungen</div>
            <div className="text-xs text-gray-500">{platform.platform}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {reviews.slice(0, maxDisplayItems).map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{review.author}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="star" 
                          size={16} 
                          className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {review.platform} • {review.location}
                    </span>
                  </div>
                </div>
              </div>
              {review.verified && (
                <div className="flex items-center gap-1 text-green-600">
                  <Icon name="check-circle" size={16} />
                  <span className="text-xs">Verifiziert</span>
                </div>
              )}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 overflow-hidden">{review.text}</p>
            {review.projectType && (
              <div className="mt-2 inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                {review.projectType}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const VideoTestimonialPlayer = () => (
    <div className="bg-off-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Video-Testimonials</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.filter(t => t.isFeatured).map((testimonial) => (
          <div key={testimonial.id} className="group cursor-pointer" onClick={() => setSelectedTestimonial(testimonial)}>
            <div className="relative rounded-xl overflow-hidden mb-4">
              {testimonial.isVideo ? (
                <div className="aspect-video bg-gray-900 relative">
                  <Image
                    src={testimonial.photoUrl || '/images/video-placeholder.jpg'}
                    alt={`Testimonial von ${testimonial.clientName}`}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-off-white/90 rounded-full flex items-center justify-center group-hover:bg-off-white transition-colors">
                      <Icon name="play" size={24} className="text-blue-600 ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <Icon name="quote" size={48} className="text-blue-300" />
                </div>
              )}
            </div>
            
            <div className="flex items-start gap-3">
              {testimonial.photoUrl && (
                <Image
                  src={testimonial.photoUrl}
                  alt={testimonial.clientName}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{testimonial.clientName}</div>
                {testimonial.company && (
                  <div className="text-sm text-gray-600">{testimonial.clientTitle}, {testimonial.company}</div>
                )}
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">{testimonial.testimonial}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="star" 
                      size={14} 
                      className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CaseStudyPresenter = () => (
    <div className="bg-off-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Erfolgsgeschichten</h3>
      
      {caseStudies.filter(cs => cs.isFeatured).map((caseStudy) => (
        <div key={caseStudy.id} className="border border-gray-200 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{caseStudy.title}</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Herausforderung</div>
                  <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">Lösung</div>
                  <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Ergebnisse</div>
                  <ul className="space-y-1">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <Icon name="check" size={16} className="text-green-600 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(caseStudy.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">{value}%</div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-sm font-semibold text-blue-900">Projekt-Timeline</div>
                <div className="text-lg font-bold text-blue-700">{caseStudy.timeline}</div>
                <div className="text-xs text-blue-600">Kunde: {caseStudy.client}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const BeforeAfterGallery = () => (
    <div className="bg-off-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Vorher-Nachher Galerie</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentGalleryIndex(Math.max(0, currentGalleryIndex - 1))}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            disabled={currentGalleryIndex === 0}
          >
            <Icon name="chevron-left" size={16} />
          </button>
          <button 
            onClick={() => setCurrentGalleryIndex(Math.min(galleryItems.length - 1, currentGalleryIndex + 1))}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            disabled={currentGalleryIndex === galleryItems.length - 1}
          >
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
      </div>

      {galleryItems[currentGalleryIndex] && (
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-center mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Vorher
              </span>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <Image
                src={galleryItems[currentGalleryIndex].beforeImage}
                alt="Vorher"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="text-center mb-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Nachher
              </span>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <Image
                src={galleryItems[currentGalleryIndex].afterImage}
                alt="Nachher"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">
            {galleryItems[currentGalleryIndex]?.projectType}
          </h4>
          <span className="text-sm text-gray-600">
            {galleryItems[currentGalleryIndex]?.location}
          </span>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {galleryItems[currentGalleryIndex]?.description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">Herausforderungen</div>
            <ul className="space-y-1">
              {galleryItems[currentGalleryIndex]?.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <Icon name="alert-triangle" size={14} className="text-orange-500 mt-0.5" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">Ergebnisse</div>
            <ul className="space-y-1">
              {galleryItems[currentGalleryIndex]?.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <Icon name="check" size={14} className="text-green-500 mt-0.5" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const SuccessStoryRotator = () => (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
      {successStories.filter(s => s.featured).map((story) => (
        <div key={story.id}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2 line-clamp-2 overflow-hidden">{story.headline}</h3>
            <p className="text-blue-100 text-lg line-clamp-3 overflow-hidden">{story.summary}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {story.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={metric.icon} size={28} color="white" />
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-blue-100 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <blockquote className="text-center text-xl italic bg-white/10 rounded-xl p-6">
            "{story.clientQuote}"
          </blockquote>
        </div>
      ))}
    </div>
  );

  // Live Activity Feed
  const LiveActivityFeed = () => (
    showLiveUpdates && (
      <div className="bg-off-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-900">Live-Aktivitäten</span>
        </div>
        <div className="space-y-2">
          {recentActivity.slice(0, 3).map((activity, index) => (
            <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
              <Icon name="activity" size={14} className="text-blue-500" />
              {activity}
            </div>
          ))}
        </div>
      </div>
    )
  );

  if (variant === 'minimal') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 (2.8k Bewertungen)</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="text-sm font-medium text-gray-700">5.000+ Projekte</div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="space-y-6">
        <LiveActivityFeed />
        <ReviewAggregator />
        <BeforeAfterGallery />
      </div>
    );
  }

  // Full variant
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Was unsere Kunden sagen
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Echte Erfahrungen, messbare Ergebnisse und nachweisbare Erfolge
        </p>
      </div>

      <LiveActivityFeed />

      <div className="flex justify-center">
        <div className="bg-off-white rounded-full p-1 shadow-lg">
          {['reviews', 'testimonials', 'cases', 'gallery', 'stories'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'reviews' && 'Bewertungen'}
              {tab === 'testimonials' && 'Testimonials'}
              {tab === 'cases' && 'Fallstudien'}
              {tab === 'gallery' && 'Galerie'}
              {tab === 'stories' && 'Erfolge'}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'reviews' && <ReviewAggregator />}
      {activeTab === 'testimonials' && <VideoTestimonialPlayer />}
      {activeTab === 'cases' && <CaseStudyPresenter />}
      {activeTab === 'gallery' && <BeforeAfterGallery />}
      {activeTab === 'stories' && <SuccessStoryRotator />}

      {/* Video Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-off-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Testimonial: {selectedTestimonial.clientName}</h3>
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <Icon name="x" size={16} />
                </button>
              </div>
              
              {selectedTestimonial.isVideo && selectedTestimonial.videoUrl && (
                <video
                  src={selectedTestimonial.videoUrl}
                  controls
                  className="w-full aspect-video rounded-xl mb-4"
                  poster={selectedTestimonial.photoUrl}
                />
              )}
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{selectedTestimonial.testimonial}</p>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Projekt-Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Typ:</span> {selectedTestimonial.projectDetails.type}
                    </div>
                    <div>
                      <span className="text-gray-600">Ort:</span> {selectedTestimonial.projectDetails.location}
                    </div>
                    <div>
                      <span className="text-gray-600">Dauer:</span> {selectedTestimonial.projectDetails.duration}
                    </div>
                    <div>
                      <span className="text-gray-600">Wert:</span> {selectedTestimonial.projectDetails.value.toLocaleString('de-DE')} €
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}