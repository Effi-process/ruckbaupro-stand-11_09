import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Durchbrüche Bielefeld',
  serviceSlug: 'durchbrueche-bielefeld',
  description: 'Professionelle Wanddurchbrüche und Deckendurchbrüche in Bielefeld. Präzise Kernbohrungen, staubarm, für Türen, Fenster, Leitungen. Alle Materialien: Beton, Mauerwerk, Stahlbeton.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Durchbrüche Bielefeld - Wand & Decke | Präzise Kernbohrung | Staubarm | RückbauPRO',
  description: 'Durchbrüche Bielefeld ✓ Wand & Decke ✓ Präzise Kernbohrungen ✓ Staubarm ✓ Türen, Fenster, Leitungen ✓ Beton & Mauerwerk ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/durchbrueche-bielefeld',
  },
  openGraph: {
    title: 'Durchbrüche Bielefeld - Wand & Decke | RückbauPRO',
    description: 'Professionelle Wanddurchbrüche und Deckendurchbrüche in Bielefeld. Präzise, staubarm.',
    url: 'https://www.rueckbaupro.de/durchbrueche-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Durchbrüche Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durchbrüche Bielefeld - Wand & Decke',
    description: 'Professionelle Durchbrüche in Bielefeld. Kostenlose Beratung.',
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
