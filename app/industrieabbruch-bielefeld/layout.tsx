import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrieabbruch Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Industrieabbruch in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['industrieabbruch bielefeld', 'industrieabbruch  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/industrieabbruch-bielefeld',
  },
  openGraph: {
    title: 'Industrieabbruch Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Industrieabbruch in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/industrieabbruch-bielefeld',
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
