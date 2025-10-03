import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Gefahrenstoff-Entsorgung Bielefeld',
  serviceSlug: 'gefahrenstoff-entsorgung-bielefeld',
  description: 'Zertifizierte Gefahrstoffentsorgung in Bielefeld. Asbest, PCB, KMF, Schimmelpilze. TRGS 519 konform, vollständige Dokumentation, sichere Abwicklung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Gefahrenstoff-Entsorgung Bielefeld - TRGS 519 | Asbest, PCB, KMF | Zertifiziert | RückbauPRO',
  description: 'Gefahrstoffentsorgung Bielefeld ✓ TRGS 519 zertifiziert ✓ Asbest, PCB, KMF ✓ Vollständige Dokumentation ✓ Sichere Abwicklung ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/gefahrenstoff-entsorgung-bielefeld',
  },
  openGraph: {
    title: 'Gefahrenstoff-Entsorgung Bielefeld - TRGS 519 | RückbauPRO',
    description: 'Zertifizierte Gefahrstoffentsorgung in Bielefeld. Asbest, PCB, KMF. TRGS 519 konform.',
    url: 'https://www.rueckbaupro.de/gefahrenstoff-entsorgung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Gefahrenstoff-Entsorgung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gefahrenstoff-Entsorgung Bielefeld - TRGS 519',
    description: 'Zertifizierte Gefahrstoffentsorgung in Bielefeld. Kostenlose Beratung.',
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
