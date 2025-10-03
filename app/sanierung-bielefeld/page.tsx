import SanierungBielefeld from '../components/SanierungBielefeld';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';

export const metadata = {
  title: 'Sanierung Bielefeld - Professionelle Gebäudesanierung | RückbauPRO',
  description: 'Gebäudesanierung Bielefeld: ✓ Komplett- & Kernsanierung ✓ Schadstoffsanierung ✓ 15+ Jahre Erfahrung ✓ Jetzt anrufen: 0174 8083023',
  keywords: 'Sanierung Bielefeld, Gebäudesanierung Bielefeld, Kernsanierung Bielefeld, Komplettsanierung Bielefeld, Altbausanierung Bielefeld, Abrissunternehmen Bielefeld, Bauunternehmen Bielefeld, Schadstoffsanierung Bielefeld, Gebäudesanierungsservice Bielefeld, Recyclingunternehmen Bielefeld',
  openGraph: {
    title: 'Sanierung Bielefeld - Professionelle Gebäudesanierung | RückbauPRO',
    description: 'Ihr Meisterbetrieb für Gebäudesanierung in Bielefeld. Von Kernsanierung bis Schadstoffsanierung - alles aus einer Hand.',
    url: 'https://www.rueckbaupro.de/sanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/sanierung-bielefeld'
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

export default function SanierungBielefeldPage() {
  return (
    <main className="relative">
      <GlassHeader />
      <SanierungBielefeld />
      <FooterWithMarquee />
    </main>
  );
}
