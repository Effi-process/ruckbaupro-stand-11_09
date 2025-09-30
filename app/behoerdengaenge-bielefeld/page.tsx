import type { Metadata } from 'next';
import BehoerdengaengeBielefeldClient from './BehoerdengaengeBielefeldClient';

export const metadata: Metadata = {
  title: 'Behördengänge Bielefeld - Abbruchgenehmigung & Bauanträge | RückbauPRO',
  description: 'Behördengänge Bielefeld: ✓ Abbruchgenehmigung ✓ Bauanträge ✓ Komplette behördliche Abwicklung ✓ Jetzt anrufen: 0521 9999 8480',
  keywords: 'Behördengänge Bielefeld, Abbruchgenehmigung Bielefeld, Bauanträge Bielefeld, Bauamt Bielefeld, Genehmigungen',
  openGraph: {
    title: 'Behördengänge Bielefeld - Wir übernehmen den Papierkram',
    description: 'Abbruchgenehmigungen, Bauanträge & behördliche Abwicklung in Bielefeld - alles aus einer Hand.',
    url: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld'
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BehoerdengaengeBielefeld() {
  return <BehoerdengaengeBielefeldClient />;
}
