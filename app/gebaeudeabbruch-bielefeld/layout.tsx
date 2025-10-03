import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Gebäudeabbruch Bielefeld',
  serviceSlug: 'gebaeudeabbruch-bielefeld',
  description: 'Professioneller Gebäudeabbruch in Bielefeld. Wohn-, Gewerbe- und Industriegebäude. Komplettabbruch mit Entsorgung, alle Genehmigungen, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Gebäudeabbruch Bielefeld - Wohn & Gewerbe | Komplett mit Entsorgung | RückbauPRO',
  description: 'Gebäudeabbruch Bielefeld ✓ Wohn-, Gewerbe-, Industriegebäude ✓ Komplettabbruch ✓ Entsorgung inklusive ✓ Alle Genehmigungen ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/gebaeudeabbruch-bielefeld',
  },
  openGraph: {
    title: 'Gebäudeabbruch Bielefeld - Wohn & Gewerbe | RückbauPRO',
    description: 'Professioneller Gebäudeabbruch in Bielefeld. Komplettabbruch mit Entsorgung.',
    url: 'https://www.rueckbaupro.de/gebaeudeabbruch-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Gebäudeabbruch Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gebäudeabbruch Bielefeld - Wohn & Gewerbe',
    description: 'Professioneller Gebäudeabbruch in Bielefeld. Kostenlose Beratung.',
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
