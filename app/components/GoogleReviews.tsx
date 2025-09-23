'use client'
import { useState } from 'react';
import Icon from './Icon';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  location: string;
  verified: boolean;
}

interface GoogleReviewsProps {
  stadtKey: string;
  stadtName: string;
  averageRating?: number;
  totalReviews?: number;
}

export default function GoogleReviews({ stadtKey, stadtName, averageRating = 4.9, totalReviews = 127 }: GoogleReviewsProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Simulierte Bewertungen - in der Realität würde dies von der Google Places API kommen
  const reviews: Review[] = [
    {
      id: '1',
      author: 'Michael S.',
      rating: 5,
      date: 'Vor 2 Wochen',
      text: 'Sehr professionelle Asbestsanierung! Das Team war pünktlich, hat sauber gearbeitet und alle Sicherheitsvorschriften eingehalten. Die Luftmessungen nach der Sanierung waren einwandfrei.',
      location: stadtName,
      verified: true
    },
    {
      id: '2',
      author: 'Sandra K.',
      rating: 5,
      date: 'Vor 1 Monat',
      text: 'Notfallsanierung am Wochenende - innerhalb von 2 Stunden war das Team vor Ort. Sehr kompetent und zuverlässig. Kann ich nur weiterempfehlen!',
      location: stadtName,
      verified: true
    },
    {
      id: '3',
      author: 'Thomas B.',
      rating: 4,
      date: 'Vor 1 Monat',
      text: 'Gute Arbeit bei der Dachsanierung. Faire Preise und transparente Kommunikation. Kleiner Abzug nur wegen der Terminverschiebung.',
      location: stadtName,
      verified: true
    },
    {
      id: '4',
      author: 'Julia M.',
      rating: 5,
      date: 'Vor 2 Monaten',
      text: 'Asbestanalyse und anschließende Sanierung perfekt durchgeführt. Alle Mitarbeiter waren freundlich und haben jeden Schritt erklärt.',
      location: stadtName,
      verified: true
    },
    {
      id: '5',
      author: 'Frank W.',
      rating: 5,
      date: 'Vor 3 Monaten',
      text: 'KMF-Sanierung in unserem Bürogebäude. Alles lief reibungslos, keine Betriebsunterbrechung. Top Service!',
      location: stadtName,
      verified: true
    }
  ];

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === parseInt(selectedFilter));

  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Kundenstimmen</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
            Bewertungen aus {stadtName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das sagen unsere Kunden über unsere Asbestsanierung in {stadtName}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-5xl font-black text-[#0066CC] mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="star" 
                      size={24} 
                      className={i < Math.floor(averageRating) ? 'text-yellow-500' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Basierend auf {totalReviews} Bewertungen</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3 mb-6">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSelectedFilter(rating.toString())}
                    className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                      selectedFilter === rating.toString() 
                        ? 'bg-[#0066CC]/10 border-2 border-[#0066CC]' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium w-8">{rating}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#0066CC] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(ratingCounts[rating as keyof typeof ratingCounts] / reviews.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{ratingCounts[rating as keyof typeof ratingCounts]}</span>
                  </button>
                ))}
              </div>

              {/* Filter Reset */}
              {selectedFilter !== 'all' && (
                <button
                  onClick={() => setSelectedFilter('all')}
                  className="w-full py-2 text-[#0066CC] font-semibold hover:bg-[#0066CC]/10 rounded-lg transition-all duration-300"
                >
                  Alle Bewertungen anzeigen
                </button>
              )}

              {/* Google Badge */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center gap-2">
                  <Icon name="google" size={20} className="text-gray-600" />
                  <span className="text-sm text-gray-600">Google Bewertungen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-gray-900">{review.author}</h4>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                          <Icon name="check" size={12} />
                          Verifiziert
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="star" 
                            size={16} 
                            className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'} 
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>{review.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon name="map-pin" size={14} />
                        {review.location}
                      </span>
                    </div>
                  </div>
                  <Icon name="google" size={20} className="text-gray-400" />
                </div>
                
                <p className="text-gray-700 leading-relaxed line-clamp-4 overflow-hidden">{review.text}</p>
              </div>
            ))}

            {/* Load More */}
            <div className="text-center pt-6">
              <a
                href={`https://www.google.com/maps/search/Asbestsanierung+${stadtName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0066CC] text-[#0066CC] font-semibold rounded-full hover:bg-[#0066CC] hover:text-white transition-all duration-300"
              >
                Alle Bewertungen auf Google ansehen
                <Icon name="external-link" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Zufriedene Kunden in {stadtName}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Werden Sie Teil unserer erfolgreichen Projekte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${stadtKey === 'berlin' ? '030-NOTFALL1' : 
                       stadtKey === 'hamburg' ? '040-NOTFALL3' : 
                       stadtKey === 'koeln' ? '0221-NOTFALL5' : 
                       '089-NOTFALL8'}`}
              className="px-8 py-4 bg-white text-[#0066CC] font-bold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Jetzt anrufen
            </a>
            <a
              href="/kontakt"
              className="px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-[#0066CC] transition-all duration-300"
            >
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}