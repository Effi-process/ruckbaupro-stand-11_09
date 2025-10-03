import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Asbestentfernung Bielefeld',
  serviceSlug: 'asbestentfernung-bielefeld',
  description: 'Professionelle TRGS 519 zertifizierte Asbestentfernung in Bielefeld und Umgebung. Fachgerechte Asbestsanierung für Dächer, Fassaden und Innenräume. Schnelle Terminvergabe, faire Festpreise, kostenlose Erstberatung.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€-€€€'
};

export const metadata: Metadata = {
  title: 'Asbestentfernung Bielefeld - TRGS 519 Zertifiziert | Ab 45€/m² | RückbauPRO',
  description: 'Asbestentfernung Bielefeld ✓ TRGS 519 zertifiziert ✓ Alle Stadtteile: Brackwede, Senne, Heepen ✓ Festpreise ab 45€/m² ✓ 24h Notdienst ✓ Kostenlose Beratung ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/asbestentfernung-bielefeld',
  },
  openGraph: {
    title: 'Asbestentfernung Bielefeld - TRGS 519 Zertifiziert | RückbauPRO',
    description: 'Professionelle Asbestsanierung in Bielefeld und allen Stadtteilen. TRGS 519 zertifiziert, schnelle Terminvergabe, Festpreise ab 45€/m².',
    url: 'https://www.rueckbaupro.de/asbestentfernung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Asbestentfernung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asbestentfernung Bielefeld - TRGS 519 Zertifiziert',
    description: 'Professionelle Asbestsanierung in Bielefeld. Festpreise ab 45€/m². Kostenlose Beratung.',
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
