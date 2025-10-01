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

  // Bielefeld SEO service pages - all existing pages
  const bielefeldServicePages = [
    'asbestentfernung-bielefeld',
    'asbestmaterialentfernung-bielefeld',
    'entkernung-bielefeld',
    'rueckbau-bielefeld',
    'komplettentkernung-bielefeld',
    'teilentkernung-bielefeld',
    'sanierung-bielefeld',
    'komplettsanierung-bielefeld',
    'teilsanierung-bielefeld',
    'schimmelpilzsanierung-bielefeld',
    'schadstoffsanierung-bielefeld',
    'kmf-entfernung-bielefeld',
    'glaswolle-entsorgung-bielefeld',
    'betonabbruch-bielefeld',
    'durchbrueche-bielefeld',
    'gebaeudeabbruch-bielefeld',
    'hochbau-abriss-bielefeld',
    'industrieabbruch-bielefeld',
    'innenabbruch-bielefeld',
    'komplettabriss-bielefeld',
    'selektiver-abbruch-bielefeld',
    'demontage-bielefeld',
    'aufraeumarbeiten-bielefeld',
    'schutt-aufraeumarbeiten-bielefeld',
    'raeumung-rodung-bielefeld',
    'landschaftsbau-vorbereitung-bielefeld',
    'schrottumschlag-bielefeld',
    'fachgerechte-entsorgung-bielefeld',
    'gefahrenstoff-entsorgung-bielefeld',
    'pcb-sanierung-bielefeld',
    'oberflaechenreinigung-bielefeld',
    'entstaubung-bielefeld',
    'reinigung-bielefeld',
    'freimessung-bielefeld',
    'abbruchgenehmigung-bielefeld',
    'behoerdengaenge-bielefeld',
    'dokumentationsverfahren-bielefeld',
    'schadstoffanmeldung-bielefeld',
    'trgs-519-bielefeld',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
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