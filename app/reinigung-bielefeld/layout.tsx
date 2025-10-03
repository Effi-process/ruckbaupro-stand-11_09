import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Reinigung Bielefeld',
  serviceSlug: 'reinigung-bielefeld',
  description: 'Professionelle Reinigung nach Abbruch und Sanierung in Bielefeld. Bauendreinigung, Grundreinigung, Bauschutt entfernen. Für Baustellen, Gewerbe, Privat.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Reinigung Bielefeld - Bauendreinigung & Grundreinigung | Nach Abbruch & Sanierung | RückbauPRO',
  description: 'Reinigung Bielefeld ✓ Bauendreinigung & Grundreinigung ✓ Nach Abbruch & Sanierung ✓ Bauschutt entfernen ✓ Für Baustellen & Gewerbe ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/reinigung-bielefeld',
  },
  openGraph: {
    title: 'Reinigung Bielefeld - Bauendreinigung & Grundreinigung | RückbauPRO',
    description: 'Professionelle Reinigung nach Abbruch und Sanierung in Bielefeld.',
    url: 'https://www.rueckbaupro.de/reinigung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Reinigung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinigung Bielefeld - Bauendreinigung & Grundreinigung',
    description: 'Professionelle Reinigung in Bielefeld. Kostenlose Beratung.',
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
