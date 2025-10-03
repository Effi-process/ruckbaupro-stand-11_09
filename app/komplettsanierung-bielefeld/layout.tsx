import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Komplettsanierung Bielefeld',
  serviceSlug: 'komplettsanierung-bielefeld',
  description: 'Professionelle Komplettsanierung in Bielefeld. Vollständige Gebäudesanierung von Entkernung bis Neubau. Schadstoffsanierung, Modernisierung, alle Gewerke aus einer Hand.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Komplettsanierung Bielefeld - Alle Gewerke | Von Entkernung bis Neubau | RückbauPRO',
  description: 'Komplettsanierung Bielefeld ✓ Vollständige Gebäudesanierung ✓ Schadstoffsanierung ✓ Modernisierung ✓ Alle Gewerke ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettsanierung-bielefeld',
  },
  openGraph: {
    title: 'Komplettsanierung Bielefeld - Alle Gewerke | RückbauPRO',
    description: 'Professionelle Komplettsanierung in Bielefeld. Alle Gewerke aus einer Hand.',
    url: 'https://www.rueckbaupro.de/komplettsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Komplettsanierung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Komplettsanierung Bielefeld - Alle Gewerke',
    description: 'Professionelle Komplettsanierung in Bielefeld. Kostenlose Beratung.',
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
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema(serviceData);
  const serviceSchema = generateServiceSchema(serviceData);
  const breadcrumbSchema = generateBreadcrumbSchema(serviceData.serviceName, serviceData.serviceSlug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
