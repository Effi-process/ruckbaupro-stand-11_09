import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Asbestmaterialentfernung Bielefeld',
  serviceSlug: 'asbestmaterialentfernung-bielefeld',
  description: 'TRGS 519 zertifizierte Asbestmaterialentfernung in Bielefeld. Fachgerechte Demontage und Entsorgung asbesthaltiger Materialien. Alle Stadtteile, schnelle Terminvergabe, sichere Durchführung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Asbestmaterialentfernung Bielefeld - TRGS 519 Zertifiziert | Sichere Entsorgung | RückbauPRO',
  description: 'Asbestmaterialentfernung Bielefeld ✓ TRGS 519 zertifiziert ✓ Fachgerechte Demontage ✓ Alle Stadtteile ✓ Sichere Entsorgung ✓ 24h Notdienst ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/asbestmaterialentfernung-bielefeld',
  },
  openGraph: {
    title: 'Asbestmaterialentfernung Bielefeld - TRGS 519 Zertifiziert | RückbauPRO',
    description: 'TRGS 519 zertifizierte Asbestmaterialentfernung in Bielefeld. Fachgerechte Demontage und sichere Entsorgung.',
    url: 'https://www.rueckbaupro.de/asbestmaterialentfernung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Asbestmaterialentfernung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asbestmaterialentfernung Bielefeld - TRGS 519 Zertifiziert',
    description: 'TRGS 519 zertifizierte Asbestmaterialentfernung in Bielefeld. Kostenlose Beratung.',
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
