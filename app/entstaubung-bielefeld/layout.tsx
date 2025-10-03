import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Entstaubung Bielefeld',
  serviceSlug: 'entstaubung-bielefeld',
  description: 'Professionelle Entstaubung nach Abbruch und Sanierung in Bielefeld. Industriesauger, Staubfilteranlagen, gründliche Reinigung für Baustellen und Gewerbe.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Entstaubung Bielefeld - Baustellen & Gewerbe | Industriesauger | Gründlich | RückbauPRO',
  description: 'Entstaubung Bielefeld ✓ Nach Abbruch & Sanierung ✓ Industriesauger ✓ Staubfilteranlagen ✓ Baustellen & Gewerbe ✓ Gründliche Reinigung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/entstaubung-bielefeld',
  },
  openGraph: {
    title: 'Entstaubung Bielefeld - Baustellen & Gewerbe | RückbauPRO',
    description: 'Professionelle Entstaubung nach Abbruch und Sanierung in Bielefeld. Industriesauger, gründlich.',
    url: 'https://www.rueckbaupro.de/entstaubung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Entstaubung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entstaubung Bielefeld - Baustellen & Gewerbe',
    description: 'Professionelle Entstaubung in Bielefeld. Kostenlose Beratung.',
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
