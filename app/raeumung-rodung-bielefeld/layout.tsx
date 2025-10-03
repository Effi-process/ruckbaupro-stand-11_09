import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Raeumung Rodung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Raeumung Rodung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['raeumung rodung bielefeld', 'raeumung rodung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/raeumung-rodung-bielefeld',
  },
  openGraph: {
    title: 'Raeumung Rodung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Raeumung Rodung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/raeumung-rodung-bielefeld',
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
