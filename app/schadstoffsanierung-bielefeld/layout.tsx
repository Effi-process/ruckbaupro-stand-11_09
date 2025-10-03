import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Schadstoffsanierung Bielefeld',
  serviceSlug: 'schadstoffsanierung-bielefeld',
  description: 'TRGS zertifizierte Schadstoffsanierung in Bielefeld. Asbest, PCB, KMF, Schimmel entfernen. Vollständige Sanierung, Entsorgung, Freimessung, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Schadstoffsanierung Bielefeld - TRGS Zertifiziert | Asbest, PCB, KMF, Schimmel | RückbauPRO',
  description: 'Schadstoffsanierung Bielefeld ✓ TRGS zertifiziert ✓ Asbest, PCB, KMF, Schimmel ✓ Vollständige Sanierung ✓ Freimessung ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schadstoffsanierung-bielefeld',
  },
  openGraph: {
    title: 'Schadstoffsanierung Bielefeld - TRGS Zertifiziert | RückbauPRO',
    description: 'TRGS zertifizierte Schadstoffsanierung in Bielefeld. Vollständige Sanierung, Freimessung.',
    url: 'https://www.rueckbaupro.de/schadstoffsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Schadstoffsanierung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schadstoffsanierung Bielefeld - TRGS Zertifiziert',
    description: 'TRGS zertifizierte Schadstoffsanierung in Bielefeld. Kostenlose Beratung.',
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
