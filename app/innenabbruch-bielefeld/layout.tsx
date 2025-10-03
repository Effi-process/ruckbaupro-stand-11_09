import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Innenabbruch Bielefeld',
  serviceSlug: 'innenabbruch-bielefeld',
  description: 'Professioneller Innenabbruch in Bielefeld. Wände, Decken, Böden entfernen. Für Sanierung und Umbau, staubarm, alle Stadtteile. Entsorgung inklusive.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Innenabbruch Bielefeld - Wände, Decken, Böden | Staubarm | Für Sanierung & Umbau | RückbauPRO',
  description: 'Innenabbruch Bielefeld ✓ Wände, Decken, Böden ✓ Staubarm ✓ Sanierung & Umbau ✓ Entsorgung inklusive ✓ Alle Stadtteile ✓ Schnelle Durchführung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/innenabbruch-bielefeld',
  },
  openGraph: {
    title: 'Innenabbruch Bielefeld - Wände, Decken, Böden | RückbauPRO',
    description: 'Professioneller Innenabbruch in Bielefeld. Staubarm, für Sanierung und Umbau.',
    url: 'https://www.rueckbaupro.de/innenabbruch-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Innenabbruch Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innenabbruch Bielefeld - Wände, Decken, Böden',
    description: 'Professioneller Innenabbruch in Bielefeld. Kostenlose Beratung.',
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
