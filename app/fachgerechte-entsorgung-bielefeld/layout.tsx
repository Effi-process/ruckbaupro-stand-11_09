import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Fachgerechte Entsorgung Bielefeld',
  serviceSlug: 'fachgerechte-entsorgung-bielefeld',
  description: 'Fachgerechte Entsorgung aller Abfallarten in Bielefeld. Bauschutt, Sondermüll, Gefahrstoffe. Zertifizierte Entsorgungsnachweise, alle Stadtteile, schnelle Abwicklung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Fachgerechte Entsorgung Bielefeld - Bauschutt & Gefahrstoffe | Zertifiziert | RückbauPRO',
  description: 'Fachgerechte Entsorgung Bielefeld ✓ Bauschutt & Sondermüll ✓ Gefahrstoffe ✓ Zertifizierte Nachweise ✓ Alle Stadtteile ✓ Schnelle Abwicklung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/fachgerechte-entsorgung-bielefeld',
  },
  openGraph: {
    title: 'Fachgerechte Entsorgung Bielefeld - Bauschutt & Gefahrstoffe | RückbauPRO',
    description: 'Fachgerechte Entsorgung aller Abfallarten in Bielefeld. Zertifizierte Entsorgungsnachweise.',
    url: 'https://www.rueckbaupro.de/fachgerechte-entsorgung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Fachgerechte Entsorgung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fachgerechte Entsorgung Bielefeld - Bauschutt & Gefahrstoffe',
    description: 'Fachgerechte Entsorgung in Bielefeld. Kostenlose Beratung.',
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
