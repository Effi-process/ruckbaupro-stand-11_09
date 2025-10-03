import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Freimessung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Freimessung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['freimessung bielefeld', 'freimessung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/freimessung-bielefeld',
  },
  openGraph: {
    title: 'Freimessung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Freimessung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/freimessung-bielefeld',
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
