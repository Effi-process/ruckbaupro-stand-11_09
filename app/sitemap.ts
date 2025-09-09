import { MetadataRoute } from 'next'
import { CITIES_DATA } from './lib/cities-data'
import { SEO_CONSTANTS } from './lib/metadata-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONSTANTS.BASE_URL;
  const currentDate = new Date();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/standorte`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bielefeld`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zertifikate`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/karriere`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/asbest-info`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ];

  // City pages - high priority for local SEO
  const cityPages = CITIES_DATA.map((city) => ({
    url: `${baseUrl}/standorte/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: city.distanceFromBielefeld <= 50 ? 0.9 : 0.8, // Higher priority for closer cities
  }));

  // Bielefeld service pages
  const bielefeldServicePages = [
    'asbest-dach',
    'asbest-daemmung', 
    'asbest-entsorgen',
    'asbest-erkennen',
    'asbest-fassade',
    'asbest-gesundheit',
    'asbest-kleber',
    'asbest-recht',
    'asbest-test',
    'asbestplatten',
  ].map((service) => ({
    url: `${baseUrl}/bielefeld/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/impressum`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [
    ...mainPages,
    ...cityPages,
    ...bielefeldServicePages,
    ...legalPages,
  ];
}