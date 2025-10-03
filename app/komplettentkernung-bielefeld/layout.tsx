import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Komplettentkernung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Komplettentkernung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['komplettentkernung bielefeld', 'komplettentkernung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettentkernung-bielefeld',
  },
  openGraph: {
    title: 'Komplettentkernung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Komplettentkernung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/komplettentkernung-bielefeld',
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
