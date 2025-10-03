import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trgs 519 Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Trgs 519 in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['trgs 519 bielefeld', 'trgs 519  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/trgs-519-bielefeld',
  },
  openGraph: {
    title: 'Trgs 519 Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Trgs 519 in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/trgs-519-bielefeld',
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
