import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Schutt-Aufräumarbeiten Bielefeld',
  serviceSlug: 'schutt-aufraeumarbeiten-bielefeld',
  description: 'Professionelle Schutt-Aufräumarbeiten in Bielefeld. Bauschutt entfernen, Container-Service, schnelle Entsorgung. Für Baustellen, Abbruch, Sanierung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Schutt-Aufräumarbeiten Bielefeld - Bauschutt Entfernen | Container-Service | RückbauPRO',
  description: 'Schutt-Aufräumarbeiten Bielefeld ✓ Bauschutt entfernen ✓ Container-Service ✓ Schnelle Entsorgung ✓ Für Baustellen & Abbruch ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schutt-aufraeumarbeiten-bielefeld',
  },
  openGraph: {
    title: 'Schutt-Aufräumarbeiten Bielefeld - Bauschutt Entfernen | RückbauPRO',
    description: 'Professionelle Schutt-Aufräumarbeiten in Bielefeld. Container-Service, schnelle Entsorgung.',
    url: 'https://www.rueckbaupro.de/schutt-aufraeumarbeiten-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Schutt-Aufräumarbeiten Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schutt-Aufräumarbeiten Bielefeld - Bauschutt Entfernen',
    description: 'Professionelle Schutt-Aufräumarbeiten in Bielefeld. Kostenlose Beratung.',
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
