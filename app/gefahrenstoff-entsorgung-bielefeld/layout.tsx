import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gefahrenstoff Entsorgung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Gefahrenstoff Entsorgung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['gefahrenstoff entsorgung bielefeld', 'gefahrenstoff entsorgung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/gefahrenstoff-entsorgung-bielefeld',
  },
  openGraph: {
    title: 'Gefahrenstoff Entsorgung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Gefahrenstoff Entsorgung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/gefahrenstoff-entsorgung-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
