import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Behördengänge Bielefeld',
  serviceSlug: 'behoerdengaenge-bielefeld',
  description: 'Professionelle Unterstützung bei allen Behördengängen für Abbruch und Sanierung in Bielefeld. Anträge, Genehmigungen, Meldungen. Erfahrene Experten für schnelle Bearbeitung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Behördengänge Bielefeld - Anträge & Genehmigungen | Abbruch & Sanierung | RückbauPRO',
  description: 'Behördengänge Bielefeld ✓ Alle Anträge & Genehmigungen ✓ Abbruch & Sanierung ✓ Erfahrene Experten ✓ Schnelle Bearbeitung ✓ Kostenlose Beratung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld',
  },
  openGraph: {
    title: 'Behördengänge Bielefeld - Anträge & Genehmigungen | RückbauPRO',
    description: 'Professionelle Unterstützung bei allen Behördengängen für Abbruch und Sanierung in Bielefeld.',
    url: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Behördengänge Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Behördengänge Bielefeld - Anträge & Genehmigungen',
    description: 'Professionelle Unterstützung bei allen Behördengängen. Kostenlose Beratung.',
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
