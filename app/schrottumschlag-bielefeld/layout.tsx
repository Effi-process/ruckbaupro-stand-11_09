import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schrottumschlag Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Schrottumschlag in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['schrottumschlag bielefeld', 'schrottumschlag  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schrottumschlag-bielefeld',
  },
  openGraph: {
    title: 'Schrottumschlag Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Schrottumschlag in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/schrottumschlag-bielefeld',
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
