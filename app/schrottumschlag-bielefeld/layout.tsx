import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Schrottumschlag Bielefeld',
  serviceSlug: 'schrottumschlag-bielefeld',
  description: 'Professioneller Schrottumschlag in Bielefeld. Metallschrott sortieren, verladen, entsorgen. Für Abbruch und Demontage, faire Preise, schnelle Abwicklung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Schrottumschlag Bielefeld - Metallschrott Sortieren & Entsorgen | Faire Preise | RückbauPRO',
  description: 'Schrottumschlag Bielefeld ✓ Metallschrott sortieren & entsorgen ✓ Für Abbruch & Demontage ✓ Faire Preise ✓ Schnelle Abwicklung ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schrottumschlag-bielefeld',
  },
  openGraph: {
    title: 'Schrottumschlag Bielefeld - Metallschrott Sortieren & Entsorgen | RückbauPRO',
    description: 'Professioneller Schrottumschlag in Bielefeld. Faire Preise, schnelle Abwicklung.',
    url: 'https://www.rueckbaupro.de/schrottumschlag-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Schrottumschlag Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schrottumschlag Bielefeld - Metallschrott Sortieren & Entsorgen',
    description: 'Professioneller Schrottumschlag in Bielefeld. Kostenlose Beratung.',
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
