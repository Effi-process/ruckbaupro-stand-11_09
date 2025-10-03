import SchimmelpilzsanierungBielefeld from '../components/SchimmelpilzsanierungBielefeld';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';

export const metadata = {
  title: 'Schimmelpilzsanierung Bielefeld - Gesund wohnen | RückbauPRO',
  description: 'Professionelle Schimmelpilzsanierung in Bielefeld. ✓ 24/7 Notdienst ✓ Zertifizierte Sanierung ✓ Dauerhafte Beseitigung. Jetzt anrufen: 0174 8083023',
  keywords: 'Schimmelpilzsanierung Bielefeld, Schimmelentfernung Bielefeld, Schimmelsanierung Bielefeld, Sanitärdienstleistungsunternehmen Bielefeld, Schimmelpilzuntersuchungsdienst Bielefeld, Wasserschadensanierungsservice Bielefeld, Bauunternehmen Bielefeld, Gebäudereinigungsdienst Bielefeld',
  openGraph: {
    title: 'Schimmelpilzsanierung Bielefeld - Gesund wohnen | RückbauPRO',
    description: 'Ihr Spezialist für Schimmelpilzsanierung in Bielefeld. 24/7 Notdienst - Gesund wohnen ohne Schimmel.',
    url: 'https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld'
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

export default function SchimmelpilzsanierungBielefeldPage() {
  return (
    <main className="relative">
      <GlassHeader />
      <SchimmelpilzsanierungBielefeld />
      <FooterWithMarquee />
    </main>
  );
}
