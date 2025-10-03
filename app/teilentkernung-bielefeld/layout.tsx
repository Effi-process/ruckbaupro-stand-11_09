import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teilentkernung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Teilentkernung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['teilentkernung bielefeld', 'teilentkernung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/teilentkernung-bielefeld',
  },
  openGraph: {
    title: 'Teilentkernung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Teilentkernung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/teilentkernung-bielefeld',
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
