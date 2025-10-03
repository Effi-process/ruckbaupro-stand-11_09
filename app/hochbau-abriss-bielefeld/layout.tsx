import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Hochbau-Abriss Bielefeld',
  serviceSlug: 'hochbau-abriss-bielefeld',
  description: 'Professioneller Hochbau-Abriss in Bielefeld. Mehrgeschossige Gebäude, Hochhäuser, komplexe Bauwerke. Sichere Durchführung, modernste Technik, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Hochbau-Abriss Bielefeld - Mehrgeschossig & Komplex | Sichere Durchführung | RückbauPRO',
  description: 'Hochbau-Abriss Bielefeld ✓ Mehrgeschossige Gebäude ✓ Hochhäuser ✓ Modernste Technik ✓ Sichere Durchführung ✓ Alle Stadtteile ✓ Erfahrene Experten ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/hochbau-abriss-bielefeld',
  },
  openGraph: {
    title: 'Hochbau-Abriss Bielefeld - Mehrgeschossig & Komplex | RückbauPRO',
    description: 'Professioneller Hochbau-Abriss in Bielefeld. Sichere Durchführung, modernste Technik.',
    url: 'https://www.rueckbaupro.de/hochbau-abriss-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Hochbau-Abriss Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hochbau-Abriss Bielefeld - Mehrgeschossig & Komplex',
    description: 'Professioneller Hochbau-Abriss in Bielefeld. Kostenlose Beratung.',
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
