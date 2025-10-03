import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Komplettabriss Bielefeld',
  serviceSlug: 'komplettabriss-bielefeld',
  description: 'Komplettabriss von Gebäuden in Bielefeld. Vollständiger Abbruch inklusive Fundament und Keller. Mit Entsorgung, allen Genehmigungen, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Komplettabriss Bielefeld - Inkl. Fundament & Keller | Mit Entsorgung | RückbauPRO',
  description: 'Komplettabriss Bielefeld ✓ Vollständiger Abbruch ✓ Inkl. Fundament & Keller ✓ Entsorgung inklusive ✓ Alle Genehmigungen ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettabriss-bielefeld',
  },
  openGraph: {
    title: 'Komplettabriss Bielefeld - Inkl. Fundament & Keller | RückbauPRO',
    description: 'Komplettabriss von Gebäuden in Bielefeld. Vollständiger Abbruch mit Entsorgung.',
    url: 'https://www.rueckbaupro.de/komplettabriss-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Komplettabriss Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Komplettabriss Bielefeld - Inkl. Fundament & Keller',
    description: 'Komplettabriss von Gebäuden in Bielefeld. Kostenlose Beratung.',
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
