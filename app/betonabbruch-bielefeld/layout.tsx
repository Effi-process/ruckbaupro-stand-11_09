import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Betonabbruch Bielefeld',
  serviceSlug: 'betonabbruch-bielefeld',
  description: 'Professioneller Betonabbruch in Bielefeld mit modernster Technik. Präzise Betondemontage für Fundamente, Wände, Decken. Staubarm, erschütterungsarm, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Betonabbruch Bielefeld - Präzise & Staubarm | Moderne Technik | RückbauPRO',
  description: 'Betonabbruch Bielefeld ✓ Moderne Technik ✓ Staubarm & erschütterungsarm ✓ Fundamente, Wände, Decken ✓ Alle Stadtteile ✓ Schnelle Durchführung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/betonabbruch-bielefeld',
  },
  openGraph: {
    title: 'Betonabbruch Bielefeld - Präzise & Staubarm | RückbauPRO',
    description: 'Professioneller Betonabbruch in Bielefeld mit modernster Technik. Staubarm, erschütterungsarm.',
    url: 'https://www.rueckbaupro.de/betonabbruch-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Betonabbruch Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Betonabbruch Bielefeld - Präzise & Staubarm',
    description: 'Professioneller Betonabbruch in Bielefeld. Kostenlose Beratung.',
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
