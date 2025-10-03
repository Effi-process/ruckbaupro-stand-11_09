import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Komplettentkernung Bielefeld',
  serviceSlug: 'komplettentkernung-bielefeld',
  description: 'Professionelle Komplettentkernung in Bielefeld. Vollständige Gebäudeentkernung für Sanierung. Alle Etagen, inklusive Entsorgung, schnelle Durchführung, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Komplettentkernung Bielefeld - Vollständige Entkernung | Inkl. Entsorgung | RückbauPRO',
  description: 'Komplettentkernung Bielefeld ✓ Vollständige Gebäudeentkernung ✓ Alle Etagen ✓ Entsorgung inklusive ✓ Schnelle Durchführung ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettentkernung-bielefeld',
  },
  openGraph: {
    title: 'Komplettentkernung Bielefeld - Vollständige Entkernung | RückbauPRO',
    description: 'Professionelle Komplettentkernung in Bielefeld. Inklusive Entsorgung.',
    url: 'https://www.rueckbaupro.de/komplettentkernung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Komplettentkernung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Komplettentkernung Bielefeld - Vollständige Entkernung',
    description: 'Professionelle Komplettentkernung in Bielefeld. Kostenlose Beratung.',
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
