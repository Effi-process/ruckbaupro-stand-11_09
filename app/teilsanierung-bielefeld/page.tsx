import TeilsanierungBielefeld from '../components/TeilsanierungBielefeld';
import GlassHeader from '../components/GlassHeader';
import FooterWithMarquee from '../components/FooterWithMarquee';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export const metadata = {
  title: 'Teilsanierung Bielefeld - Gezielte Modernisierung | RückbauPRO',
  description: 'Professionelle Teilsanierung in Bielefeld. ✓ Dachsanierung ✓ Fassadensanierung ✓ Kellersanierung ✓ Nur sanieren was nötig ist. Jetzt anrufen: 0174 8083023',
  keywords: 'Teilsanierung Bielefeld, Dachsanierung Bielefeld, Fassadensanierung Bielefeld, Kellersanierung Bielefeld, Bauunternehmen Bielefeld, Abrissunternehmen Bielefeld, Schadstoffuntersuchungsdienst Bielefeld, Betonbauunternehmen Bielefeld, Entsorgungsunternehmen Bielefeld',
  openGraph: {
    title: 'Teilsanierung Bielefeld - Gezielte Modernisierung | RückbauPRO',
    description: 'Ihr Spezialist für Teilsanierung in Bielefeld. Gezielt modernisieren statt komplett sanieren - sparen Sie Zeit und Geld.',
    url: 'https://www.rueckbaupro.de/teilsanierung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/teilsanierung-bielefeld'
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

export default function TeilsanierungBielefeldPage() {
  return (
    <main className="relative">
      <GlassHeader />
      <TeilsanierungBielefeld />
      <RelatedServicesBielefeld currentSlug="teilsanierung-bielefeld" category="sanierung" maxServices={6} />
      <FooterWithMarquee />
    </main>
  );
}
