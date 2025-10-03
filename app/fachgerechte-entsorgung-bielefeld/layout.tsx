import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fachgerechte Entsorgung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Fachgerechte Entsorgung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['fachgerechte entsorgung bielefeld', 'fachgerechte entsorgung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/fachgerechte-entsorgung-bielefeld',
  },
  openGraph: {
    title: 'Fachgerechte Entsorgung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Fachgerechte Entsorgung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/fachgerechte-entsorgung-bielefeld',
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
