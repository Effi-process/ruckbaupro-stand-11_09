import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Teilsanierung Bielefeld',
  serviceSlug: 'teilsanierung-bielefeld',
  description: 'Professionelle Teilsanierung in Bielefeld. Einzelne Räume, Etagen oder Bereiche sanieren. Schadstoffsanierung, Modernisierung, alle Gewerke, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€'
};

export const metadata: Metadata = {
  title: 'Teilsanierung Bielefeld - Einzelne Räume & Bereiche | Schadstoff & Modernisierung | RückbauPRO',
  description: 'Teilsanierung Bielefeld ✓ Einzelne Räume & Bereiche ✓ Schadstoffsanierung ✓ Modernisierung ✓ Alle Gewerke ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/teilsanierung-bielefeld',
  },
  openGraph: {
    title: 'Teilsanierung Bielefeld - Einzelne Räume & Bereiche | RückbauPRO',
    description: 'Professionelle Teilsanierung in Bielefeld. Schadstoffsanierung, Modernisierung.',
    url: 'https://www.rueckbaupro.de/teilsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Teilsanierung Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teilsanierung Bielefeld - Einzelne Räume & Bereiche',
    description: 'Professionelle Teilsanierung in Bielefeld. Kostenlose Beratung.',
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
