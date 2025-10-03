import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Aufräumarbeiten Bielefeld',
  serviceSlug: 'aufraeumarbeiten-bielefeld',
  description: 'Professionelle Aufräumarbeiten nach Abbruch, Sanierung oder Entrümpelung in Bielefeld. Schnelle Durchführung, fachgerechte Entsorgung, alle Stadtteile. Für Baustellen, Gewerbe und Privatkunden.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Aufräumarbeiten Bielefeld - Baustellen & Abbruch | Schnell & Gründlich | RückbauPRO',
  description: 'Aufräumarbeiten Bielefeld ✓ Nach Abbruch & Sanierung ✓ Baustellen-Service ✓ Alle Stadtteile ✓ Schnelle Durchführung ✓ Fachgerechte Entsorgung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/aufraeumarbeiten-bielefeld',
  },
  openGraph: {
    title: 'Aufräumarbeiten Bielefeld - Baustellen & Abbruch | RückbauPRO',
    description: 'Professionelle Aufräumarbeiten nach Abbruch und Sanierung in Bielefeld. Schnelle Durchführung, fachgerechte Entsorgung.',
    url: 'https://www.rueckbaupro.de/aufraeumarbeiten-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Aufräumarbeiten Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aufräumarbeiten Bielefeld - Baustellen & Abbruch',
    description: 'Professionelle Aufräumarbeiten in Bielefeld. Kostenlose Beratung.',
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
