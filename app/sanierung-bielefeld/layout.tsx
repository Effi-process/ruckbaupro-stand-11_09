import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Sanierung Bielefeld',
  serviceSlug: 'sanierung-bielefeld',
  description: 'Professionelle Gebäudesanierung in Bielefeld. Komplett-, Teilsanierung, Schadstoffsanierung. Alle Gewerke, erfahrene Experten, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Sanierung Bielefeld - Komplett & Teil | Schadstoffsanierung | Alle Gewerke | RückbauPRO',
  description: 'Sanierung Bielefeld ✓ Komplett- & Teilsanierung ✓ Schadstoffsanierung ✓ Alle Gewerke ✓ Erfahrene Experten ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/sanierung-bielefeld',
  },
  openGraph: {
    title: 'Sanierung Bielefeld - Komplett & Teil | RückbauPRO',
    description: 'Professionelle Gebäudesanierung in Bielefeld. Alle Gewerke aus einer Hand.',
    url: 'https://www.rueckbaupro.de/sanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Sanierung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanierung Bielefeld - Komplett & Teil',
    description: 'Professionelle Gebäudesanierung in Bielefeld. Kostenlose Beratung.',
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
