import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Selektiver Abbruch Bielefeld',
  serviceSlug: 'selektiver-abbruch-bielefeld',
  description: 'Professioneller selektiver Abbruch in Bielefeld. Sortenreine Trennung, Wiederverwertung, umweltschonend. Für Umbau und Teilabbruch, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Selektiver Abbruch Bielefeld - Sortenreine Trennung | Umweltschonend | RückbauPRO',
  description: 'Selektiver Abbruch Bielefeld ✓ Sortenreine Trennung ✓ Wiederverwertung ✓ Umweltschonend ✓ Für Umbau & Teilabbruch ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/selektiver-abbruch-bielefeld',
  },
  openGraph: {
    title: 'Selektiver Abbruch Bielefeld - Sortenreine Trennung | RückbauPRO',
    description: 'Professioneller selektiver Abbruch in Bielefeld. Sortenreine Trennung, umweltschonend.',
    url: 'https://www.rueckbaupro.de/selektiver-abbruch-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Selektiver Abbruch Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selektiver Abbruch Bielefeld - Sortenreine Trennung',
    description: 'Professioneller selektiver Abbruch in Bielefeld. Kostenlose Beratung.',
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
