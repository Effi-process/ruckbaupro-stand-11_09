import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Räumung & Rodung Bielefeld',
  serviceSlug: 'raeumung-rodung-bielefeld',
  description: 'Professionelle Räumung und Rodung in Bielefeld. Grundstücke, Baustellen, Gärten räumen und roden. Baumfällung, Strauchentfernung, Entsorgung inklusive.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Räumung & Rodung Bielefeld - Grundstücke & Baustellen | Baumfällung | RückbauPRO',
  description: 'Räumung & Rodung Bielefeld ✓ Grundstücke & Baustellen ✓ Baumfällung ✓ Strauchentfernung ✓ Entsorgung inklusive ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/raeumung-rodung-bielefeld',
  },
  openGraph: {
    title: 'Räumung & Rodung Bielefeld - Grundstücke & Baustellen | RückbauPRO',
    description: 'Professionelle Räumung und Rodung in Bielefeld. Entsorgung inklusive.',
    url: 'https://www.rueckbaupro.de/raeumung-rodung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Räumung & Rodung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Räumung & Rodung Bielefeld - Grundstücke & Baustellen',
    description: 'Professionelle Räumung und Rodung in Bielefeld. Kostenlose Beratung.',
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
