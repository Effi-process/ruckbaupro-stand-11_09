import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'PCB-Sanierung Bielefeld',
  serviceSlug: 'pcb-sanierung-bielefeld',
  description: 'TRGS 524 zertifizierte PCB-Sanierung in Bielefeld. Polychlorierte Biphenyle sicher sanieren. Fugenmassen, Anstriche, vollständige Dokumentation, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'PCB-Sanierung Bielefeld - TRGS 524 Zertifiziert | Fugenmassen & Anstriche | RückbauPRO',
  description: 'PCB-Sanierung Bielefeld ✓ TRGS 524 zertifiziert ✓ Fugenmassen & Anstriche ✓ Sichere Sanierung ✓ Vollständige Dokumentation ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/pcb-sanierung-bielefeld',
  },
  openGraph: {
    title: 'PCB-Sanierung Bielefeld - TRGS 524 Zertifiziert | RückbauPRO',
    description: 'TRGS 524 zertifizierte PCB-Sanierung in Bielefeld. Fugenmassen, Anstriche sicher sanieren.',
    url: 'https://www.rueckbaupro.de/pcb-sanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO PCB-Sanierung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PCB-Sanierung Bielefeld - TRGS 524 Zertifiziert',
    description: 'TRGS 524 zertifizierte PCB-Sanierung in Bielefeld. Kostenlose Beratung.',
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
