import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema} from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Schadstoffanmeldung Bielefeld',
  serviceSlug: 'schadstoffanmeldung-bielefeld',
  description: 'Professionelle Schadstoffanmeldung bei Behörden in Bielefeld. Anträge, Meldungen, vollständige Dokumentation. Für Asbest, PCB, KMF, alle Schadstoffe.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Schadstoffanmeldung Bielefeld - Behördenanträge | Asbest, PCB, KMF | RückbauPRO',
  description: 'Schadstoffanmeldung Bielefeld ✓ Behördenanträge ✓ Meldungen ✓ Vollständige Dokumentation ✓ Asbest, PCB, KMF ✓ Alle Schadstoffe ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schadstoffanmeldung-bielefeld',
  },
  openGraph: {
    title: 'Schadstoffanmeldung Bielefeld - Behördenanträge | RückbauPRO',
    description: 'Professionelle Schadstoffanmeldung bei Behörden in Bielefeld.',
    url: 'https://www.rueckbaupro.de/schadstoffanmeldung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Schadstoffanmeldung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schadstoffanmeldung Bielefeld - Behördenanträge',
    description: 'Professionelle Schadstoffanmeldung in Bielefeld. Kostenlose Beratung.',
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
