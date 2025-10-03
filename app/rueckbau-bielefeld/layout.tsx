import { Metadata } from 'next';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '../lib/seo-schemas';

const serviceData = {
  serviceName: 'Rückbau Bielefeld',
  serviceSlug: 'rueckbau-bielefeld',
  description: 'Professioneller Rückbau in Bielefeld. Selektiver Rückbau, sortenreine Trennung, Wiederverwertung. Umweltschonend, nachhaltig, alle Stadtteile.',
  areaServed: ['Bielefeld', 'Brackwede', 'Senne', 'Heepen', 'Sennestadt', 'Gütersloh', 'Paderborn'],
  priceRange: '€€€'
};

export const metadata: Metadata = {
  title: 'Rückbau Bielefeld - Selektiv & Nachhaltig | Sortenreine Trennung | RückbauPRO',
  description: 'Rückbau Bielefeld ✓ Selektiver Rückbau ✓ Sortenreine Trennung ✓ Wiederverwertung ✓ Umweltschonend ✓ Nachhaltig ✓ Alle Stadtteile ☎ 0174 8083023',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/rueckbau-bielefeld',
  },
  openGraph: {
    title: 'Rückbau Bielefeld - Selektiv & Nachhaltig | RückbauPRO',
    description: 'Professioneller Rückbau in Bielefeld. Selektiv, sortenreine Trennung, nachhaltig.',
    url: 'https://www.rueckbaupro.de/rueckbau-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.rueckbaupro.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RückbauPRO Rückbau Bielefeld'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rückbau Bielefeld - Selektiv & Nachhaltig',
    description: 'Professioneller Rückbau in Bielefeld. Kostenlose Beratung.',
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
