import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reinigung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Reinigung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['reinigung bielefeld', 'reinigung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/reinigung-bielefeld',
  },
  openGraph: {
    title: 'Reinigung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Reinigung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/reinigung-bielefeld',
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
