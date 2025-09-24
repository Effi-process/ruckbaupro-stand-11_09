export interface LocalBusinessSchemaProps {
  city?: string;
  postalCode?: string;
  streetAddress?: string;
  priceRange?: string;
}

export default function SchemaMarkup({ 
  city = "Steinhagen",
  postalCode = "33803",
  streetAddress = "Waldbadstraße 9–13",
  priceRange = "35€-120€/m²"
}: LocalBusinessSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://abriss-schmiede.de",
    "name": "Wertvoll Dienstleistungen GmbH - Professionelle Asbestsanierung",
    "image": "https://asbestsanierung.de/images/logo.png",
    "url": "https://abriss-schmiede.de",
    "telephone": "+49+49 174 8083023",
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": city,
      "postalCode": postalCode,
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city === "Steinhagen" ? 52.0167 : 52.0167,
      "longitude": city === "Steinhagen" ? 8.4000 : 8.4000
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/asbestsanierung",
      "https://www.instagram.com/asbestsanierung",
      "https://www.linkedin.com/company/asbestsanierung"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "387"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Thomas Müller"
        },
        "datePublished": "2024-01-15",
        "reviewBody": "Sehr professionelle Asbestsanierung. Alle Sicherheitsvorschriften wurden eingehalten. Schnell und sauber!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Lisa Wagner"
        },
        "datePublished": "2024-01-10",
        "reviewBody": "Kompetente Beratung und zuverlässige Durchführung. Die Freimessung war einwandfrei. Sehr empfehlenswert!"
      }
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Nordrhein-Westfalen"
      },
      {
        "@type": "State",
        "name": "Niedersachsen"
      },
      {
        "@type": "State",
        "name": "Nordrhein-Westfalen"
      },
      {
        "@type": "State",
        "name": "Bayern"
      },
      {
        "@type": "State",
        "name": "Hamburg"
      },
      {
        "@type": "State",
        "name": "Sachsen"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Schadstoffsanierungsleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Asbestsanierung",
            "description": "Fachgerechte Entfernung von Asbest nach TRGS 519"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Schadstoffanalyse",
            "description": "Professionelle Analyse und Bewertung von Schadstoffen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KMF-Sanierung",
            "description": "Entfernung künstlicher Mineralfasern"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PCB-Sanierung",
            "description": "Beseitigung PCB-haltiger Baustoffe"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}