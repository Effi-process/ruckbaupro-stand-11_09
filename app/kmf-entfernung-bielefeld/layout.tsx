import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'KMF-Entfernung Bielefeld',
  serviceSlug: 'kmf-entfernung-bielefeld',
  description: 'TRGS 521 zertifizierte KMF-Entfernung in Bielefeld. Künstliche Mineralfasern sicher entfernen. Glaswolle, Steinwolle, alle Stadtteile. Vollständige Entsorgungsnachweise.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'KMF-Entfernung Bielefeld - TRGS 521 Zertifiziert | Glaswolle & Steinwolle | RückbauPRO',
  description: 'KMF-Entfernung Bielefeld ✓ TRGS 521 zertifiziert ✓ Glaswolle & Steinwolle ✓ Sichere Entfernung ✓ Entsorgungsnachweise ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/kmf-entfernung-bielefeld',
  },
  openGraph: {
    title: 'KMF-Entfernung Bielefeld - TRGS 521 Zertifiziert | RückbauPRO',
    description: 'TRGS 521 zertifizierte KMF-Entfernung in Bielefeld. Glaswolle, Steinwolle sicher entfernen.',
    url: 'https://www.rueckbaupro.de/kmf-entfernung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO KMF-Entfernung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMF-Entfernung Bielefeld - TRGS 521 Zertifiziert',
    description: 'TRGS 521 zertifizierte KMF-Entfernung in Bielefeld. Kostenlose Beratung.',
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
