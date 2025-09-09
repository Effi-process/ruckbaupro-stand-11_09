/**
 * Metadata Utilities for Billion-Euro SEO Optimization
 * Perfect metadata generation for maximum search visibility
 */

import { Metadata } from 'next';
import { CityData } from './cities-data';

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: object;
}

// SEO Constants for consistency
export const SEO_CONSTANTS = {
  SITE_NAME: 'RückbauPRO - Professioneller Rückbau & Abbruch',
  BASE_URL: 'https://www.rueckbaupro.de',
  COMPANY_NAME: 'RückbauPRO GmbH',
  PHONE_MAIN: '+49-800-RUECKBAU',
  EMAIL: 'info@rueckbaupro.de',
  GOOGLE_VERIFICATION: 'your-google-verification-code',
  DEFAULT_KEYWORDS: [
    'Rückbau',
    'Abbruch',
    'Entkernung',
    'Schadstoffsanierung',
    'Gebäudeabbruch',
    'Rückbauarbeiten',
    'Abbrucharbeiten',
    'Demontage',
    'Entsorgung'
  ],
} as const;

// Generate perfect city metadata
export function generateCityMetadata(city: CityData, path: string): Metadata {
  const title = `Rückbau & Abbruch ${city.name} - Professionell & Zertifiziert | 24h Service`;
  const description = `Professioneller Rückbau & Abbruch in ${city.name}, ${city.state}. ✓ Zertifiziert ✓ 24h Service ✓ Kostenlose Beratung ✓ Festpreise. Über 500 erfolgreiche Projekte. Jetzt anrufen: ${city.emergencyNumber}`;
  const canonicalUrl = `${SEO_CONSTANTS.BASE_URL}${path}`;
  
  return {
    metadataBase: new URL(SEO_CONSTANTS.BASE_URL),
    title,
    description,
    keywords: city.seoKeywords.join(', '),
    authors: [{ name: SEO_CONSTANTS.COMPANY_NAME }],
    creator: SEO_CONSTANTS.COMPANY_NAME,
    publisher: SEO_CONSTANTS.COMPANY_NAME,
    
    // Open Graph
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'de_DE',
      url: canonicalUrl,
      siteName: SEO_CONSTANTS.SITE_NAME,
      images: [
        {
          url: `/images/standorte/${city.slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Asbestsanierung ${city.name} - TRGS 519 zertifiziert`,
          type: 'image/jpeg',
        },
      ],
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/standorte/${city.slug}-twitter.jpg`],
      creator: '@AsbestSanierung',
      site: '@AsbestSanierung',
    },
    
    // Technical SEO
    alternates: {
      canonical: canonicalUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: SEO_CONSTANTS.GOOGLE_VERIFICATION,
    },
    
    // Geo metadata
    other: {
      'geo.region': city.state,
      'geo.placename': city.name,
      'geo.position': `${city.coordinates.lat};${city.coordinates.lng}`,
      'ICBM': `${city.coordinates.lat}, ${city.coordinates.lng}`,
      'distribution': 'global',
      'rating': 'general',
      'revisit-after': '7 days',
    },
    
    // Schema.org integration
    category: 'Business',
  };
}

// Generate service page metadata
export function generateServiceMetadata(
  service: string,
  city?: CityData,
  customData?: Partial<PageMetadata>
): Metadata {
  const locationStr = city ? ` in ${city.name}` : '';
  const title = customData?.title || `${service}${locationStr} - TRGS 519 Zertifiziert | Premium Service`;
  const description = customData?.description || `Professionelle ${service}${locationStr}. ✓ TRGS 519 zertifiziert ✓ 24h Notdienst ✓ Kostenlose Beratung ✓ Festpreise. Jetzt anrufen!`;
  const canonicalUrl = customData?.canonicalUrl || `${SEO_CONSTANTS.BASE_URL}/${service.toLowerCase().replace(/\s+/g, '-')}`;
  
  return {
    title,
    description,
    keywords: [
      service,
      ...(city?.seoKeywords || []),
      ...SEO_CONSTANTS.DEFAULT_KEYWORDS,
    ].join(', '),
    authors: [{ name: SEO_CONSTANTS.COMPANY_NAME }],
    
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'de_DE',
      url: canonicalUrl,
      siteName: SEO_CONSTANTS.SITE_NAME,
      images: [
        {
          url: customData?.ogImage || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [customData?.twitterImage || '/images/twitter-default.jpg'],
    },
    
    alternates: {
      canonical: canonicalUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: SEO_CONSTANTS.GOOGLE_VERIFICATION,
    },
  };
}

// Generate homepage metadata
export function generateHomepageMetadata(): Metadata {
  const title = 'RückbauPRO - Professioneller Rückbau & Abbruch | Bundesweit';
  const description = 'Professioneller Rückbau & Abbruch vom zertifizierten Fachbetrieb. ✓ Entkernung ✓ Gebäudeabbruch ✓ Demontage ✓ Schadstoffsanierung ✓ Entsorgung. 24h-Service ☎ Kostenlose Beratung!';
  
  return {
    metadataBase: new URL(SEO_CONSTANTS.BASE_URL),
    title,
    description,
    keywords: SEO_CONSTANTS.DEFAULT_KEYWORDS.join(', '),
    authors: [{ name: SEO_CONSTANTS.COMPANY_NAME }],
    
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'de_DE',
      url: SEO_CONSTANTS.BASE_URL,
      siteName: SEO_CONSTANTS.SITE_NAME,
      images: [
        {
          url: '/images/og-homepage.jpg',
          width: 1200,
          height: 630,
          alt: 'Professionelle Asbestsanierung - TRGS 519 Zertifiziert',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/twitter-homepage.jpg'],
    },
    
    alternates: {
      canonical: SEO_CONSTANTS.BASE_URL,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: SEO_CONSTANTS.GOOGLE_VERIFICATION,
    },
  };
}

// Generate FAQ schema for any page
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
}

// Generate service schema
export function generateServiceSchema(
  serviceName: string,
  city?: CityData,
  additionalInfo?: {
    price?: string;
    duration?: string;
    availability?: string;
  }
) {
  const locationStr = city ? ` in ${city.name}` : '';
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName}${locationStr}`,
    "description": `Professionelle ${serviceName}${locationStr} vom TRGS 519 zertifizierten Fachbetrieb.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": SEO_CONSTANTS.COMPANY_NAME,
      "telephone": city?.emergencyNumber || SEO_CONSTANTS.PHONE_MAIN,
      "email": SEO_CONSTANTS.EMAIL,
      "url": SEO_CONSTANTS.BASE_URL,
      ...(city && {
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
        }
      })
    },
    "serviceType": serviceName,
    "areaServed": city ? {
      "@type": "City",
      "name": city.name
    } : {
      "@type": "Country",
      "name": "Deutschland"
    },
    ...(additionalInfo && {
      ...(additionalInfo.price && { "priceRange": additionalInfo.price }),
      ...(additionalInfo.duration && { "duration": additionalInfo.duration }),
      ...(additionalInfo.availability && { "hoursAvailable": additionalInfo.availability })
    })
  };
}

// Generate organization schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONSTANTS.COMPANY_NAME,
    "url": SEO_CONSTANTS.BASE_URL,
    "logo": `${SEO_CONSTANTS.BASE_URL}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SEO_CONSTANTS.PHONE_MAIN,
      "contactType": "customer service",
      "availableLanguage": "German",
      "areaServed": "DE"
    },
    "sameAs": [
      "https://www.facebook.com/asbestsanierung",
      "https://www.instagram.com/asbestsanierung", 
      "https://www.linkedin.com/company/asbestsanierung"
    ]
  };
}

// Utility to combine multiple schemas
export function combineSchemas(...schemas: object[]) {
  return schemas.length === 1 ? schemas[0] : schemas;
}

// Generate rich snippet optimized title
export function generateRichTitle(
  baseTitle: string, 
  modifiers: {
    location?: string;
    certification?: boolean;
    emergency?: boolean;
    pricing?: boolean;
  } = {}
): string {
  let title = baseTitle;
  
  if (modifiers.location) {
    title += ` ${modifiers.location}`;
  }
  
  const badges: string[] = [];
  if (modifiers.certification) badges.push('TRGS 519 Zertifiziert');
  if (modifiers.emergency) badges.push('24h Notdienst');
  if (modifiers.pricing) badges.push('Festpreise');
  
  if (badges.length > 0) {
    title += ` - ${badges.join(' | ')}`;
  }
  
  return title;
}

// Generate compelling meta description
export function generateMetaDescription(
  service: string,
  location?: string,
  features: string[] = [],
  cta: string = 'Jetzt anrufen!'
): string {
  const locationStr = location ? ` in ${location}` : '';
  let description = `Professionelle ${service}${locationStr}.`;
  
  if (features.length > 0) {
    description += ` ${features.map(f => `✓ ${f}`).join(' ')}`;
  }
  
  description += ` ${cta}`;
  
  // Ensure description is within optimal length (150-160 characters)
  if (description.length > 160) {
    const words = description.split(' ');
    while (description.length > 157) {
      words.pop();
      description = words.join(' ') + '...';
    }
  }
  
  return description;
}

const MetadataUtils = {
  generateCityMetadata,
  generateServiceMetadata,
  generateHomepageMetadata,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateOrganizationSchema,
  combineSchemas,
  generateRichTitle,
  generateMetaDescription,
  SEO_CONSTANTS,
};

export default MetadataUtils;