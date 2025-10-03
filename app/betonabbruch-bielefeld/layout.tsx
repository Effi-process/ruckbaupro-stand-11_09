import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Betonabbruch Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Betonabbruch in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['betonabbruch bielefeld', 'betonabbruch  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/betonabbruch-bielefeld',
  },
  openGraph: {
    title: 'Betonabbruch Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Betonabbruch in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/betonabbruch-bielefeld',
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
