import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entstaubung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Entstaubung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['entstaubung bielefeld', 'entstaubung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/entstaubung-bielefeld',
  },
  openGraph: {
    title: 'Entstaubung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Entstaubung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/entstaubung-bielefeld',
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
