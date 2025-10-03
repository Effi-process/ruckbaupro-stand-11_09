import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landschaftsbau Vorbereitung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Landschaftsbau Vorbereitung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['landschaftsbau vorbereitung bielefeld', 'landschaftsbau vorbereitung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/landschaftsbau-vorbereitung-bielefeld',
  },
  openGraph: {
    title: 'Landschaftsbau Vorbereitung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Landschaftsbau Vorbereitung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/landschaftsbau-vorbereitung-bielefeld',
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
