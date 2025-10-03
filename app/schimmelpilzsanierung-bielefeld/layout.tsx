import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Schimmelpilzsanierung Bielefeld',
  serviceSlug: 'schimmelpilzsanierung-bielefeld',
  description: 'Professionelle Schimmelpilzsanierung in Bielefeld. Schimmel entfernen, Ursachen beheben, nachhaltige Sanierung. Alle Räume, alle Stadtteile, schnelle Hilfe.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Schimmelpilzsanierung Bielefeld - Schimmel Entfernen | Ursachen Beheben | RückbauPRO',
  description: 'Schimmelpilzsanierung Bielefeld ✓ Schimmel entfernen ✓ Ursachen beheben ✓ Nachhaltige Sanierung ✓ Alle Räume ✓ Schnelle Hilfe ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld',
  },
  openGraph: {
    title: 'Schimmelpilzsanierung Bielefeld - Schimmel Entfernen | RückbauPRO',
    description: 'Professionelle Schimmelpilzsanierung in Bielefeld. Nachhaltige Sanierung.',
    url: 'https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Schimmelpilzsanierung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schimmelpilzsanierung Bielefeld - Schimmel Entfernen',
    description: 'Professionelle Schimmelpilzsanierung in Bielefeld. Kostenlose Beratung.',
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
