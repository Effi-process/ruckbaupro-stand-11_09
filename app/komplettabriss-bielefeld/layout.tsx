import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Komplettabriss Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Komplettabriss in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['komplettabriss bielefeld', 'komplettabriss  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettabriss-bielefeld',
  },
  openGraph: {
    title: 'Komplettabriss Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Komplettabriss in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/komplettabriss-bielefeld',
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
