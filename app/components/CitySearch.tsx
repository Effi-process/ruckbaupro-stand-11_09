'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Icon from './Icon';

interface City {
  id: string;
  name: string;
  region: string;
  featured?: boolean;
}

export default function CitySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const cities: City[] = [
    { id: 'bielefeld', name: 'Bielefeld', region: 'Ostwestfalen-Lippe', featured: true }
  ];

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCitySelect = useCallback((cityId: string) => {
    // Navigiere zur Stadt-Seite
    router.push(`/standorte/${cityId}`);
    setSearchQuery('');
    setIsOpen(false);
  }, [router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredCities.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredCities.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && filteredCities[highlightedIndex]) {
            handleCitySelect(filteredCities[highlightedIndex].id);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredCities, handleCitySelect]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="In welcher Stadt benötigen Sie Asbestsanierung?"
          className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all duration-300 text-lg"
        />
        <Icon name="map-pin" size={24} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/60" />
        
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsOpen(false);
            }}
            className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          >
            <Icon name="x" size={20} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (searchQuery || filteredCities.length > 0) && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
          {filteredCities.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <Icon name="search" size={32} className="mx-auto mb-2 text-gray-300" />
              <p>Keine Stadt gefunden</p>
              <p className="text-sm mt-2">Versuchen Sie eine andere Schreibweise</p>
            </div>
          ) : (
            <>
              {/* Featured Cities */}
              {!searchQuery && (
                <div className="p-4 border-b border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Beliebte Städte
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.filter(c => c.featured).map((city) => (
                      <button
                        key={city.id}
                        onClick={() => handleCitySelect(city.id)}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <Icon name="star" size={16} className="text-yellow-500" />
                        <span className="font-medium text-gray-900">{city.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* All Cities */}
              <div className="p-2">
                {filteredCities.map((city, index) => (
                  <button
                    key={city.id}
                    onClick={() => handleCitySelect(city.id)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      highlightedIndex === index
                        ? 'bg-[#0066CC] text-white'
                        : 'hover:bg-gray-50 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon 
                        name="map-pin" 
                        size={20} 
                        className={highlightedIndex === index ? 'text-white' : 'text-[#0066CC]'} 
                      />
                      <div className="text-left">
                        <p className="font-semibold">{city.name}</p>
                        <p className={`text-sm ${
                          highlightedIndex === index ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {city.region}
                        </p>
                      </div>
                    </div>
                    <Icon 
                      name="arrow" 
                      size={16} 
                      className={highlightedIndex === index ? 'text-white' : 'text-gray-400'} 
                    />
                  </button>
                ))}
              </div>

              {/* View All Link */}
              <div className="p-4 border-t border-gray-100">
                <button
                  onClick={() => router.push('/standorte')}
                  className="w-full text-center text-[#0066CC] font-semibold hover:text-[#0052A3] transition-colors"
                >
                  Alle Standorte anzeigen
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}