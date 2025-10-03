import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Glaswolle-Entsorgung Bielefeld',
  serviceSlug: 'glaswolle-entsorgung-bielefeld',
  description: 'Fachgerechte Glaswolle-Entsorgung in Bielefeld. KMF-Entsorgung nach TRGS 521, sichere Demontage, vollständige Entsorgungsnachweise, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Glaswolle-Entsorgung Bielefeld - TRGS 521 | KMF | Fachgerecht & Sicher | RückbauPRO',
  description: 'Glaswolle-Entsorgung Bielefeld ✓ TRGS 521 ✓ KMF-Entsorgung ✓ Sichere Demontage ✓ Entsorgungsnachweise ✓ Alle Stadtteile ✓ Schnelle Abwicklung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/glaswolle-entsorgung-bielefeld',
  },
  openGraph: {
    title: 'Glaswolle-Entsorgung Bielefeld - TRGS 521 | KMF | RückbauPRO',
    description: 'Fachgerechte Glaswolle-Entsorgung in Bielefeld. KMF-Entsorgung nach TRGS 521.',
    url: 'https://www.rueckbaupro.de/glaswolle-entsorgung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Glaswolle-Entsorgung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glaswolle-Entsorgung Bielefeld - TRGS 521 | KMF',
    description: 'Fachgerechte Glaswolle-Entsorgung in Bielefeld. Kostenlose Beratung.',
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
