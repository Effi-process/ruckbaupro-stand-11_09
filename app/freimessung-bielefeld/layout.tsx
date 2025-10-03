import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Freimessung Bielefeld',
  serviceSlug: 'freimessung-bielefeld',
  description: 'Professionelle Freimessung nach Schadstoffsanierung in Bielefeld. TRGS 519 konform, akkreditierte Messstellen, alle Schadstoffe. Schnelle Zertifikate für Abnahme.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Freimessung Bielefeld - TRGS 519 | Akkreditiert | Schnelle Zertifikate | RückbauPRO',
  description: 'Freimessung Bielefeld ✓ TRGS 519 konform ✓ Akkreditierte Messstellen ✓ Alle Schadstoffe ✓ Schnelle Zertifikate ✓ Für Abnahme ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/freimessung-bielefeld',
  },
  openGraph: {
    title: 'Freimessung Bielefeld - TRGS 519 | Akkreditiert | RückbauPRO',
    description: 'Professionelle Freimessung nach Schadstoffsanierung in Bielefeld. TRGS 519 konform.',
    url: 'https://www.rueckbaupro.de/freimessung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Freimessung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freimessung Bielefeld - TRGS 519 | Akkreditiert',
    description: 'Professionelle Freimessung in Bielefeld. Kostenlose Beratung.',
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
