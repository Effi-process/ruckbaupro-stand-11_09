import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aufraeumarbeiten Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Aufraeumarbeiten in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['aufraeumarbeiten bielefeld', 'aufraeumarbeiten  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/aufraeumarbeiten-bielefeld',
  },
  openGraph: {
    title: 'Aufraeumarbeiten Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Aufraeumarbeiten in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/aufraeumarbeiten-bielefeld',
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
