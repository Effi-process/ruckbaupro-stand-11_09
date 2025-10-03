import KomplettsanierungBielefeld from '../components/KomplettsanierungBielefeld';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';

export const metadata = {
  title: 'Komplettsanierung Bielefeld - Rundum-Erneuerung | RückbauPRO',
  description: 'Professionelle Komplettsanierung in Bielefeld. ✓ Entkernung ✓ Rohbau ✓ Ausbau ✓ Alles aus einer Hand ✓ 15+ Jahre Erfahrung. Jetzt anrufen: 0174 8083023',
  keywords: 'Komplettsanierung Bielefeld, Gebäudesanierung Bielefeld, Kernsanierung Bielefeld, Abrissunternehmen Bielefeld, Bauunternehmen Bielefeld, Gebäudeinstandhaltungsdienst Bielefeld, Erdbauunternehmen Bielefeld, Entsorgungsunternehmen Bielefeld',
  openGraph: {
    title: 'Komplettsanierung Bielefeld - Rundum-Erneuerung | RückbauPRO',
    description: 'Ihr Spezialist für Komplettsanierung in Bielefeld. Von der Entkernung bis zur Schlüsselübergabe - alles aus einer Hand.',
    url: 'https://www.rueckbaupro.de/komplettsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettsanierung-bielefeld'
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

export default function KomplettsanierungBielefeldPage() {
  return (
    <main className="relative">
      <GlassHeader />
      <KomplettsanierungBielefeld />
      <FooterWithMarquee />
    </main>
  );
}
