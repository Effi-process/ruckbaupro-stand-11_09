/**
 * German Cities Database for SEO-Optimized Local Pages
 * Bielefeld Only - Professional Demolition Services
 */

export interface CityData {
  name: string;
  slug: string;
  state: string;
  population: number;
  postalCodes: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromBielefeld: number; // in km
  seoKeywords: string[];
  localFeatures: string[];
  emergencyNumber: string;
  serviceAreas: string[];
}

export const CITIES_DATA: CityData[] = [
  {
    name: "Bielefeld",
    slug: "bielefeld",
    state: "Nordrhein-Westfalen",
    population: 334755,
    postalCodes: ["33602", "33604", "33605", "33607", "33609", "33611", "33613", "33615", "33617", "33619"],
    coordinates: { lat: 52.0302, lng: 8.5325 },
    distanceFromBielefeld: 0,
    seoKeywords: ["Rückbau Bielefeld", "Abbruch Bielefeld", "Entkernung Bielefeld", "Entsorgung Bielefeld"],
    localFeatures: ["Teutoburger Wald", "Sparrenburg", "Universität Bielefeld", "Senne"],
    emergencyNumber: "+49 174 8083023",
    serviceAreas: ["Innenstadt", "Senne", "Heepen", "Stieghorst", "Brackwede", "Gadderbaum", "Sennestadt", "Jöllenbeck", "Dornberg", "Mitte"]
  },
  {
    name: "Gütersloh",
    slug: "guetersloh",
    state: "Nordrhein-Westfalen",
    population: 100861,
    postalCodes: ["33330"],
    coordinates: { lat: 51.9067, lng: 8.3858 },
    distanceFromBielefeld: 18,
    seoKeywords: ["Rückbau Gütersloh", "Abbruch Gütersloh", "Entkernung Gütersloh", "Entsorgung Gütersloh"],
    localFeatures: ["Stadtpark", "Dalkeauen", "Miele", "Bertelsmann"],
    emergencyNumber: "+49 174 8083023",
    serviceAreas: ["Innenstadt"]
  },
  {
    name: "Paderborn",
    slug: "paderborn",
    state: "Nordrhein-Westfalen",
    population: 153231,
    postalCodes: ["33098"],
    coordinates: { lat: 51.7189, lng: 8.7575 },
    distanceFromBielefeld: 45,
    seoKeywords: ["Rückbau Paderborn", "Abbruch Paderborn", "Entkernung Paderborn", "Entsorgung Paderborn"],
    localFeatures: ["Paderquellen", "Dom", "Heinz Nixdorf MuseumsForum", "Universität"],
    emergencyNumber: "+49 174 8083023",
    serviceAreas: ["Innenstadt"]
  },
  {
    name: "Osnabrück",
    slug: "osnabrueck",
    state: "Niedersachsen",
    population: 165251,
    postalCodes: ["49074"],
    coordinates: { lat: 52.2799, lng: 8.0472 },
    distanceFromBielefeld: 50,
    seoKeywords: ["Rückbau Osnabrück", "Abbruch Osnabrück", "Entkernung Osnabrück", "Entsorgung Osnabrück"],
    localFeatures: ["Friedensstadt", "Teutoburger Wald", "Zoo Osnabrück", "Universität"],
    emergencyNumber: "+49 174 8083023",
    serviceAreas: ["Innenstadt"]
  }
];

// Helper functions for city data
export const getCityBySlug = (slug: string): CityData | undefined => {
  return CITIES_DATA.find(city => city.slug === slug);
};

export const getCitiesByState = (state: string): CityData[] => {
  return CITIES_DATA.filter(city => city.state === state);
};

export const getCitiesWithinDistance = (maxDistance: number): CityData[] => {
  return CITIES_DATA.filter(city => city.distanceFromBielefeld <= maxDistance);
};

export const getAllCitySlugs = (): string[] => {
  return CITIES_DATA.map(city => city.slug);
};

export const getCityKeywords = (cityName: string): string[] => {
  const city = CITIES_DATA.find(c => c.name === cityName);
  return city ? city.seoKeywords : [];
};

export const generateCitySchema = (city: CityData) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Rückbau ${city.name} - Premium Entkernung`,
    "description": `Professionelle Rückbau in ${city.name}. TRGS 519 zertifiziert. ✓ Kostenlose Beratung ✓ Festpreise ✓ 24h Service. Jetzt anrufen!`,
    "url": `https://www.asbestsanierung-premium.de/standorte/${city.slug}`,
    "telephone": city.emergencyNumber,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "DE",
      "postalCode": city.postalCodes[0]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat.toString(),
      "longitude": city.coordinates.lng.toString()
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat.toString(),
        "longitude": city.coordinates.lng.toString()
      },
      "geoRadius": "50000"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Rückbau Services ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rückbau",
            "description": `Fachgerechte Asbestentfernung in ${city.name} nach TRGS 519`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asbesttest",
            "description": `Professionelle Asbestanalyse in ${city.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entkernung",
            "description": `Komplette Entkernung in ${city.name}`
          }
        }
      ]
    },
    "areaServed": city.serviceAreas.map(area => ({
      "@type": "Place",
      "name": `${area}, ${city.name}`
    }))
  };
};
