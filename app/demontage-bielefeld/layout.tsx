import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Demontage Bielefeld',
  serviceSlug: 'demontage-bielefeld',
  description: 'Professionelle Demontagearbeiten in Bielefeld. Fachgerechte Demontage von Anlagen, Maschinen, Stahlkonstruktionen. Sorgfältig, zerstörungsfrei, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Demontage Bielefeld - Anlagen & Maschinen | Fachgerecht & Sorgfältig | RückbauPRO',
  description: 'Demontage Bielefeld ✓ Anlagen & Maschinen ✓ Stahlkonstruktionen ✓ Zerstörungsfrei ✓ Alle Stadtteile ✓ Erfahrene Experten ✓ Kostenlose Beratung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/demontage-bielefeld',
  },
  openGraph: {
    title: 'Demontage Bielefeld - Anlagen & Maschinen | RückbauPRO',
    description: 'Professionelle Demontagearbeiten in Bielefeld. Fachgerechte Demontage von Anlagen, Maschinen, Stahlkonstruktionen.',
    url: 'https://www.rueckbaupro.de/demontage-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Demontage Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demontage Bielefeld - Anlagen & Maschinen',
    description: 'Professionelle Demontagearbeiten in Bielefeld. Kostenlose Beratung.',
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
