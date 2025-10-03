import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demontage Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Demontage in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['demontage bielefeld', 'demontage  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/demontage-bielefeld',
  },
  openGraph: {
    title: 'Demontage Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Demontage in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/demontage-bielefeld',
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
