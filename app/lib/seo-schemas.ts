// SEO Schema.org structured data for Bielefeld service pages

export interface ServicePageSchema {
  serviceName: string;
  serviceSlug: string;
  description: string;
  areaServed: string[];
  priceRange?: string;
}

export function generateLocalBusinessSchema(service: ServicePageSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.rueckbaupro.de/${service.serviceSlug}#business`,
    name: `RückbauPRO - ${service.serviceName}`,
    description: service.description,
    url: `https://www.rueckbaupro.de/${service.serviceSlug}`,
    telephone: '+49-174-8083023',
    priceRange: service.priceRange || '€€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bielefeld',
      addressRegion: 'NRW',
      postalCode: '33602',
      addressCountry: 'DE',
      streetAddress: 'Servicegebiet Bielefeld und Umgebung'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.0302285,
      longitude: 8.5324708
    },
    areaServed: service.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://www.facebook.com/rueckbaupro',
      'https://www.instagram.com/rueckbaupro'
    ]
  };
}

export function generateServiceSchema(service: ServicePageSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.rueckbaupro.de/${service.serviceSlug}#service`,
    serviceType: service.serviceName,
    name: service.serviceName,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'RückbauPRO GmbH',
      telephone: '+49-174-8083023',
      url: 'https://www.rueckbaupro.de'
    },
    areaServed: service.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://www.rueckbaupro.de/${service.serviceSlug}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+49-174-8083023',
        contactType: 'customer service',
        areaServed: 'DE',
        availableLanguage: ['German']
      }
    }
  };
}

export function generateBreadcrumbSchema(serviceName: string, serviceSlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: 'https://www.rueckbaupro.de'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leistungen Bielefeld',
        item: 'https://www.rueckbaupro.de/standorte/bielefeld'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: serviceName,
        item: `https://www.rueckbaupro.de/${serviceSlug}`
      }
    ]
  };
}

// Bielefeld districts and postal codes for local SEO
export const BIELEFELD_DISTRICTS = [
  { name: 'Mitte', postalCodes: ['33602', '33604', '33607', '33609'] },
  { name: 'Brackwede', postalCodes: ['33647', '33649'] },
  { name: 'Senne', postalCodes: ['33659'] },
  { name: 'Heepen', postalCodes: ['33719'] },
  { name: 'Stieghorst', postalCodes: ['33605', '33615'] },
  { name: 'Sennestadt', postalCodes: ['33689'] },
  { name: 'Jöllenbeck', postalCodes: ['33739'] },
  { name: 'Schildesche', postalCodes: ['33611', '33613'] },
  { name: 'Gadderbaum', postalCodes: ['33617'] },
  { name: 'Dornberg', postalCodes: ['33619'] }
];

export const NEARBY_CITIES = [
  'Gütersloh', 'Paderborn', 'Herford', 'Detmold', 'Minden',
  'Bad Salzuflen', 'Lemgo', 'Werther', 'Halle', 'Steinhagen'
];
