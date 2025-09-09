'use client'
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

interface GoogleMapProps {
  address: string;
  city: string;
  plz?: string;
  lat?: number;
  lng?: number;
  height?: string;
}

export default function GoogleMap({ address, city, plz, lat, lng, height = '500px' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('googleMapsConsent');
    if (consent === 'true') {
      setShowConsent(false);
      loadMap();
    }
  }, []);

  const loadMap = () => {
    // In a real implementation, you would load the Google Maps API here
    // For now, we'll just show that the map is loaded
    setMapLoaded(true);
    localStorage.setItem('googleMapsConsent', 'true');
  };

  const handleConsent = () => {
    setShowConsent(false);
    loadMap();
  };

  if (showConsent) {
    return (
      <div 
        className="bg-gradient-to-br from-[#E8F0F7] to-[#D4E2ED] rounded-3xl relative overflow-hidden shadow-xl"
        style={{ height }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="map-pin" size={40} color="white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Standort auf Karte anzeigen?
            </h3>
            
            <p className="text-gray-600 mb-6">
              Möchten Sie Google Maps laden, um unseren Standort in {city} anzuzeigen? 
              Dabei werden Daten an Google übertragen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleConsent}
                className="px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Karte laden
              </button>
              
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(address + ', ' + city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#0066CC] transition-all duration-300"
              >
                In Google Maps öffnen
              </a>
            </div>
            
            <p className="text-xs text-gray-500 mt-6">
              Weitere Informationen finden Sie in unserer 
              <a href="/datenschutz" className="text-[#0066CC] hover:underline ml-1">
                Datenschutzerklärung
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-gradient-to-br from-[#E8F0F7] to-[#D4E2ED] rounded-3xl relative overflow-hidden shadow-xl"
      style={{ height }}
      ref={mapRef}
    >
      {mapLoaded ? (
        // In a real implementation, the Google Map would be rendered here
        <div className="absolute inset-0">
          {/* Map iframe or Google Maps JavaScript API */}
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address + ', ' + city)}&zoom=15`}
            className="rounded-3xl"
          />
          
          {/* Map Controls Overlay */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address + ', ' + city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              <Icon name="navigation" size={16} className="text-[#0066CC]" />
              <span className="text-sm font-semibold text-gray-700">Route</span>
            </a>
            
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(address + ', ' + city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300"
              title="In Google Maps öffnen"
            >
              <Icon name="external-link" size={16} className="text-[#0066CC]" />
            </a>
          </div>
          
          {/* Location Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="map-pin" size={24} color="white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Asbestsanierung {city}</h4>
                <p className="text-sm text-gray-600 mt-1">{address}{plz ? `, ${plz} ` : ', '}{city}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC] mx-auto mb-4"></div>
            <p className="text-[#0066CC]/60 font-semibold">Karte wird geladen...</p>
          </div>
        </div>
      )}
    </div>
  );
}