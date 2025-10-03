import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rueckbau Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Rueckbau in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['rueckbau bielefeld', 'rueckbau  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/rueckbau-bielefeld',
  },
  openGraph: {
    title: 'Rueckbau Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Rueckbau in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/rueckbau-bielefeld',
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
