import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Abbruchgenehmigung Bielefeld',
  serviceSlug: 'abbruchgenehmigung-bielefeld',
  description: 'Professionelle Unterstützung bei Abbruchgenehmigungen in Bielefeld. Komplette Beantragung, Behördenkontakt, schnelle Bearbeitung. Erfahrene Experten für alle Genehmigungsverfahren.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Abbruchgenehmigung Bielefeld - Behördengänge & Anträge | Schnelle Bearbeitung | RückbauPRO',
  description: 'Abbruchgenehmigung Bielefeld ✓ Alle Behördengänge ✓ Komplette Antragsbearbeitung ✓ Alle Stadtteile ✓ Erfahrene Experten ✓ Kostenlose Erstberatung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/abbruchgenehmigung-bielefeld',
  },
  openGraph: {
    title: 'Abbruchgenehmigung Bielefeld - Behördengänge & Anträge | RückbauPRO',
    description: 'Professionelle Unterstützung bei Abbruchgenehmigungen in Bielefeld. Komplette Antragsbearbeitung, alle Behördengänge.',
    url: 'https://www.rueckbaupro.de/abbruchgenehmigung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Abbruchgenehmigung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abbruchgenehmigung Bielefeld - Behördengänge & Anträge',
    description: 'Professionelle Unterstützung bei Abbruchgenehmigungen in Bielefeld. Kostenlose Erstberatung.',
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
