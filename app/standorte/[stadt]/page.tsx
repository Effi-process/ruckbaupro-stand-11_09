import { Metadata } from 'next';
import StadtDetail from './StadtDetail';
import { CITIES_DATA, getCityBySlug, generateCitySchema, getAllCitySlugs } from '../../lib/cities-data';

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    stadt: slug,
  }));
}

export async function generateMetadata({ params }: { params: { stadt: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.stadt);
  
  if (!city) {
    return {
      title: 'Standort nicht gefunden - RückbauPRO',
      description: 'Der gewünschte Standort wurde nicht gefunden. Kontaktieren Sie uns für Informationen zu Ihrem Standort.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `Rückbau & Abbruch ${city.name} - Zertifiziert | 24h Notdienst`;
  const description = `Professioneller Rückbau in ${city.name}. ✓ Zertifiziert ✓ 24h Notdienst ✓ Kostenlose Beratung. Jetzt anrufen: ${city.emergencyNumber}`;

  return {
    title,
    description,
    keywords: city.seoKeywords.join(', '),
    authors: [{ name: 'RückbauPRO GmbH' }],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'de_DE',
      url: `https://www.rueckbaupro.de/standorte/${params.stadt}`,
      siteName: 'RückbauPRO',
      images: [
        {
          url: `/images/standorte/${params.stadt}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Rückbau & Abbruch ${city.name} - Zertifiziert`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/standorte/${params.stadt}-twitter.jpg`],
    },
    alternates: {
      canonical: `https://www.rueckbaupro.de/standorte/${params.stadt}`,
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
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'geo.region': city.state,
      'geo.placename': city.name,
      'geo.position': `${city.coordinates.lat};${city.coordinates.lng}`,
      'ICBM': `${city.coordinates.lat}, ${city.coordinates.lng}`,
    },
  };
}

export default function StadtPage({ params }: { params: { stadt: string } }) {
  const city = getCityBySlug(params.stadt);
  
  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Standort nicht gefunden</h1>
          <p className="text-lg text-gray-600 mb-8">
            Der gewünschte Standort wurde nicht gefunden.
          </p>
          <a 
            href="/kontakt" 
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    );
  }

  // Generate structured data for the city
  const structuredData = generateCitySchema(city);

  return (
    <>
      {/* Floating Logo and Menu */}
      
      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* FAQ Structured Data for City */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `Was kostet ein Rückbau in ${city.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Die Kosten für einen Rückbau in ${city.name} hängen von verschiedenen Faktoren ab. Wir bieten kostenlose Vor-Ort-Termine und erstellen Ihnen gerne einen unverbindlichen Kostenvoranschlag.`
                }
              },
              {
                "@type": "Question", 
                "name": `Wie schnell können Sie in ${city.name} vor Ort sein?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Unser Notdienst ist 24/7 verfügbar. In ${city.name} sind wir in der Regel innerhalb von 2 Stunden vor Ort. Bei Notfällen noch schneller.`
                }
              },
              {
                "@type": "Question",
                "name": `Sind Sie für Rückbauarbeiten in ${city.name} zertifiziert?`,
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": `Ja, wir sind vollständig zertifiziert und verfügen über alle notwendigen Genehmigungen für Rückbau- und Abbrucharbeiten in ${city.name} und ganz ${city.state}.`
                }
              },
              {
                "@type": "Question",
                "name": `Welche Stadtteile in ${city.name} bedienen Sie?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Wir bedienen alle Stadtteile in ${city.name}: ${city.serviceAreas.slice(0, 5).join(', ')} und weitere Gebiete.`
                }
              }
            ]
          })
        }}
      />

      <StadtDetail city={city} />
    </>
  );
}
