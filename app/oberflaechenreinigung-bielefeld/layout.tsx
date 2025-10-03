import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Oberflächenreinigung Bielefeld',
  serviceSlug: 'oberflaechenreinigung-bielefeld',
  description: 'Professionelle Oberflächenreinigung nach Abbruch und Sanierung in Bielefeld. Fassaden, Böden, Baustellen. Hochdruckreinigung, gründlich, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Oberflächenreinigung Bielefeld - Fassaden & Böden | Hochdruckreinigung | RückbauPRO',
  description: 'Oberflächenreinigung Bielefeld ✓ Nach Abbruch & Sanierung ✓ Fassaden & Böden ✓ Hochdruckreinigung ✓ Baustellen ✓ Gründlich ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/oberflaechenreinigung-bielefeld',
  },
  openGraph: {
    title: 'Oberflächenreinigung Bielefeld - Fassaden & Böden | RückbauPRO',
    description: 'Professionelle Oberflächenreinigung nach Abbruch und Sanierung in Bielefeld.',
    url: 'https://www.rueckbaupro.de/oberflaechenreinigung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Oberflächenreinigung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oberflächenreinigung Bielefeld - Fassaden & Böden',
    description: 'Professionelle Oberflächenreinigung in Bielefeld. Kostenlose Beratung.',
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
