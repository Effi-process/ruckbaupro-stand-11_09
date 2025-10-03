import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Dokumentationsverfahren Bielefeld',
  serviceSlug: 'dokumentationsverfahren-bielefeld',
  description: 'Professionelle Dokumentation für Abbruch- und Sanierungsprojekte in Bielefeld. Vollständige Projektdokumentation, Fotodokumentation, Beweissicherung nach DIN-Normen.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Dokumentationsverfahren Bielefeld - DIN-konform | Beweissicherung | RückbauPRO',
  description: 'Dokumentationsverfahren Bielefeld ✓ DIN-konform ✓ Foto & Video ✓ Beweissicherung ✓ Vollständige Projektdokumentation ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/dokumentationsverfahren-bielefeld',
  },
  openGraph: {
    title: 'Dokumentationsverfahren Bielefeld - DIN-konform | RückbauPRO',
    description: 'Professionelle Dokumentation für Abbruch- und Sanierungsprojekte in Bielefeld. DIN-konform, vollständig.',
    url: 'https://www.rueckbaupro.de/dokumentationsverfahren-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Dokumentationsverfahren Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dokumentationsverfahren Bielefeld - DIN-konform',
    description: 'Professionelle Projektdokumentation in Bielefeld. Kostenlose Beratung.',
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
