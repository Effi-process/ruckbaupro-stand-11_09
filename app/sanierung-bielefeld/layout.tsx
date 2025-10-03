import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sanierung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Sanierung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['sanierung bielefeld', 'sanierung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/sanierung-bielefeld',
  },
  openGraph: {
    title: 'Sanierung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Sanierung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/sanierung-bielefeld',
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
