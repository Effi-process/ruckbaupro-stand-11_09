import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hochbau Abriss Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Hochbau Abriss in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['hochbau abriss bielefeld', 'hochbau abriss  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/hochbau-abriss-bielefeld',
  },
  openGraph: {
    title: 'Hochbau Abriss Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Hochbau Abriss in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/hochbau-abriss-bielefeld',
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
