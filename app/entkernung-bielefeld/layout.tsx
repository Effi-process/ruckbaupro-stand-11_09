import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entkernung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Entkernung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['entkernung bielefeld', 'entkernung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/entkernung-bielefeld',
  },
  openGraph: {
    title: 'Entkernung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Entkernung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/entkernung-bielefeld',
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
