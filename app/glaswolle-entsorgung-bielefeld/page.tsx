import type { Metadata } from 'next';
import GlaswolleEntsorgungBielefeldClient from './GlaswolleEntsorgungBielefeldClient';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export const metadata: Metadata = {
  title: 'Glaswolle Entsorgung Bielefeld - KMF fachgerecht entsorgen | RückbauPRO',
  description: 'Glaswolle Entsorgung Bielefeld: ✓ KMF-zertifiziert ✓ Sichere Mineralwolle-Entsorgung ✓ TRGS 521 konform ✓ Jetzt anrufen: 0521 9999 8480',
  keywords: 'Glaswolle Entsorgung Bielefeld, KMF Entsorgung Bielefeld, Mineralwolle entsorgen Bielefeld, Dämmwolle Entsorgung, Steinwolle Entsorgung Bielefeld',
  openGraph: {
    title: 'Glaswolle Entsorgung Bielefeld - KMF fachgerecht entsorgen',
    description: 'Professionelle Glaswolle & KMF Entsorgung in Bielefeld nach TRGS 521 - sicher und zertifiziert.',
    url: 'https://www.rueckbaupro.de/glaswolle-entsorgung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/glaswolle-entsorgung-bielefeld'
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GlaswolleEntsorgungBielefeld() {
  return <GlaswolleEntsorgungBielefeldClient />;
}
