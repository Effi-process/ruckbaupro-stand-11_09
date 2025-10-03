import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Industrieabbruch Bielefeld',
  serviceSlug: 'industrieabbruch-bielefeld',
  description: 'Professioneller Industrieabbruch in Bielefeld. Fabriken, Produktionshallen, Industrieanlagen. Komplettabbruch mit Anlagendemontage, Entsorgung, alle Genehmigungen.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Industrieabbruch Bielefeld - Fabriken & Hallen | Anlagendemontage | RückbauPRO',
  description: 'Industrieabbruch Bielefeld ✓ Fabriken & Produktionshallen ✓ Anlagendemontage ✓ Komplettabbruch ✓ Entsorgung inklusive ✓ Alle Genehmigungen ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/industrieabbruch-bielefeld',
  },
  openGraph: {
    title: 'Industrieabbruch Bielefeld - Fabriken & Hallen | RückbauPRO',
    description: 'Professioneller Industrieabbruch in Bielefeld. Komplettabbruch mit Anlagendemontage.',
    url: 'https://www.rueckbaupro.de/industrieabbruch-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Industrieabbruch Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrieabbruch Bielefeld - Fabriken & Hallen',
    description: 'Professioneller Industrieabbruch in Bielefeld. Kostenlose Beratung.',
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
