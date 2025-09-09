'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';

interface LocationDominanceProps {
  currentCity?: string;
  showAllDistricts?: boolean;
}

interface District {
  name: string;
  slug: string;
  responseTime: string;
  recentProjects: number;
  phone: string;
  coordinates: [number, number];
}

export default function LocationDominance({ 
  currentCity = 'bielefeld',
  showAllDistricts = false 
}: LocationDominanceProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [nearbyProjects, setNearbyProjects] = useState(12);
  const [currentTime, setCurrentTime] = useState(new Date());

  const bielefeldDistricts: District[] = [
    { name: 'Bielefeld-Mitte', slug: 'mitte', responseTime: '15 Min', recentProjects: 8, phone: '0521-1234567', coordinates: [52.0302, 8.5325] },
    { name: 'Altstadt', slug: 'altstadt', responseTime: '12 Min', recentProjects: 5, phone: '0521-1234567', coordinates: [52.0215, 8.5355] },
    { name: 'Innenstadt', slug: 'innenstadt', responseTime: '10 Min', recentProjects: 12, phone: '0521-1234567', coordinates: [52.0202, 8.5325] },
    { name: 'Babenhausen', slug: 'babenhausen', responseTime: '25 Min', recentProjects: 3, phone: '0521-1234568', coordinates: [52.0890, 8.5102] },
    { name: 'Gadderbaum', slug: 'gadderbaum', responseTime: '18 Min', recentProjects: 6, phone: '0521-1234569', coordinates: [52.0408, 8.5789] },
    { name: 'Senne', slug: 'senne', responseTime: '35 Min', recentProjects: 3, phone: '0521-1234570', coordinates: [51.9889, 8.5823] },
    { name: 'Brackwede', slug: 'brackwede', responseTime: '24 Min', recentProjects: 9, phone: '0521-1234571', coordinates: [52.0145, 8.4756] },
    { name: 'Heepen', slug: 'heepen', responseTime: '23 Min', recentProjects: 7, phone: '0521-1234572', coordinates: [52.0567, 8.6234] },
    { name: 'Sennestadt', slug: 'sennestadt', responseTime: '38 Min', recentProjects: 6, phone: '0521-1234573', coordinates: [51.9567, 8.6234] },
    { name: 'Jöllenbeck', slug: 'joellenbeck', responseTime: '35 Min', recentProjects: 8, phone: '0521-1234574', coordinates: [52.0890, 8.4234] },
    { name: 'Schildesche', slug: 'schildesche', responseTime: '19 Min', recentProjects: 5, phone: '0521-1234570', coordinates: [52.0156, 8.5289] },
    { name: 'Quelle', slug: 'quelle', responseTime: '21 Min', recentProjects: 6, phone: '0521-1234571', coordinates: [52.0234, 8.4889] }
  ];

  const owlCities = [
    { name: 'Gütersloh', slug: 'guetersloh', distance: '25 km', responseTime: '35 Min', projects: 45 },
    { name: 'Paderborn', slug: 'paderborn', distance: '35 km', responseTime: '45 Min', projects: 38 },
    { name: 'Herford', slug: 'herford', distance: '20 km', responseTime: '30 Min', projects: 32 },
    { name: 'Minden', slug: 'minden', distance: '40 km', responseTime: '50 Min', projects: 28 },
    { name: 'Detmold', slug: 'detmold', distance: '30 km', responseTime: '40 Min', projects: 25 },
    { name: 'Bad Oeynhausen', slug: 'bad-oeynhausen', distance: '35 km', responseTime: '45 Min', projects: 22 },
    { name: 'Lemgo', slug: 'lemgo', distance: '28 km', responseTime: '38 Min', projects: 18 },
    { name: 'Lage', slug: 'lage', distance: '15 km', responseTime: '25 Min', projects: 15 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNearbyProjects(prev => prev + Math.floor(Math.random() * 2));
      setCurrentTime(new Date());
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  const displayDistricts = showAllDistricts ? bielefeldDistricts : bielefeldDistricts.slice(0, 8);
  const cityName = currentCity === 'bielefeld' ? 'Bielefeld' : currentCity;

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Lokale Präsenz</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
            Asbestsanierung in jedem Stadtteil von {cityName}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mit {bielefeldDistricts.length}+ Servicebereichen sind wir immer in Ihrer Nähe. 
            Schnelle Anfahrt, lokale Expertise, faire Preise.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-900">LIVE STATUS</span>
              </div>
              <p className="text-sm text-gray-600">
                {currentTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{nearbyProjects}</div>
              <p className="text-sm text-gray-600">Aktive Projekte heute</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">30 Min</div>
              <p className="text-sm text-gray-600">Ø Anfahrtszeit</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <p className="text-sm text-gray-600">Notfall-Service</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {displayDistricts.map((district, index) => (
            <div 
              key={district.slug}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer group ${
                selectedDistrict === district.slug ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => setSelectedDistrict(selectedDistrict === district.slug ? null : district.slug)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {district.name}
                  </h3>
                  <p className="text-sm text-gray-600">Anfahrt: {district.responseTime}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-600">{district.recentProjects}</div>
                  <div className="text-xs text-gray-500">Projekte</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Link 
                  href={`/bielefeld/${district.slug}`}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  Details
                  <Icon name="arrow-right" size={12} />
                </Link>
                <a 
                  href={`tel:${district.phone}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  Anrufen
                </a>
              </div>
            </div>
          ))}
        </div>

        {!showAllDistricts && (
          <div className="text-center mb-12">
            <Link 
              href="/bielefeld/stadtteile"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Alle {bielefeldDistricts.length} Stadtteile anzeigen
            </Link>
          </div>
        )}

        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Auch in ganz OWL für Sie da
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von unserem Hauptstandort Bielefeld erreichen wir alle Städte in Ostwestfalen-Lippe 
              mit kurzen Anfahrtszeiten und bewährter Qualität.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {owlCities.map((city, index) => (
              <div key={city.slug} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{city.name}</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {city.distance}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Anfahrt:</span>
                    <span className="font-medium">{city.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projekte:</span>
                    <span className="font-medium">{city.projects}+ erfolgreich</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <Link 
                    href={`/standorte/${city.slug}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
                  >
                    Service in {city.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Notfall in einem anderen Stadtteil?</h3>
          <p className="text-lg mb-6 opacity-90">
            Wir sind 24/7 für ganz Bielefeld und OWL erreichbar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:08000060970"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <Icon name="phone" size={20} />
              0800 0060970
            </a>
            <a 
              href="https://wa.me/4917612345678"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <Icon name="message-circle" size={20} />
              WhatsApp Notfall
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}