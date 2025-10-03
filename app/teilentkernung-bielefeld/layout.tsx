import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Teilentkernung Bielefeld',
  serviceSlug: 'teilentkernung-bielefeld',
  description: 'Professionelle Teilentkernung in Bielefeld. Einzelne Räume oder Etagen entkernen. Für Umbau und Modernisierung, schnell, gründlich, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Teilentkernung Bielefeld - Einzelne Räume & Etagen | Für Umbau & Modernisierung | RückbauPRO',
  description: 'Teilentkernung Bielefeld ✓ Einzelne Räume & Etagen ✓ Für Umbau & Modernisierung ✓ Schnell & gründlich ✓ Entsorgung inklusive ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/teilentkernung-bielefeld',
  },
  openGraph: {
    title: 'Teilentkernung Bielefeld - Einzelne Räume & Etagen | RückbauPRO',
    description: 'Professionelle Teilentkernung in Bielefeld. Für Umbau und Modernisierung.',
    url: 'https://www.rueckbaupro.de/teilentkernung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Teilentkernung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teilentkernung Bielefeld - Einzelne Räume & Etagen',
    description: 'Professionelle Teilentkernung in Bielefeld. Kostenlose Beratung.',
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
