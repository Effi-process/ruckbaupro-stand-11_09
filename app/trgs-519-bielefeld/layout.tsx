import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'TRGS 519 Bielefeld',
  serviceSlug: 'trgs-519-bielefeld',
  description: 'TRGS 519 zertifizierte Asbestarbeiten in Bielefeld. Asbestentfernung, Asbestsanierung nach TRGS 519. Alle Stadtteile, schnelle Terminvergabe, vollständige Dokumentation.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'TRGS 519 Bielefeld - Zertifizierte Asbestarbeiten | Entfernung & Sanierung | RückbauPRO',
  description: 'TRGS 519 Bielefeld ✓ Zertifizierte Asbestarbeiten ✓ Asbestentfernung & Sanierung ✓ Vollständige Dokumentation ✓ Schnelle Terminvergabe ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/trgs-519-bielefeld',
  },
  openGraph: {
    title: 'TRGS 519 Bielefeld - Zertifizierte Asbestarbeiten | RückbauPRO',
    description: 'TRGS 519 zertifizierte Asbestarbeiten in Bielefeld. Vollständige Dokumentation.',
    url: 'https://www.rueckbaupro.de/trgs-519-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO TRGS 519 Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRGS 519 Bielefeld - Zertifizierte Asbestarbeiten',
    description: 'TRGS 519 zertifizierte Asbestarbeiten in Bielefeld. Kostenlose Beratung.',
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
