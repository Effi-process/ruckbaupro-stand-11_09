import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schutt Aufraeumarbeiten Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Schutt Aufraeumarbeiten in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['schutt aufraeumarbeiten bielefeld', 'schutt aufraeumarbeiten  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schutt-aufraeumarbeiten-bielefeld',
  },
  openGraph: {
    title: 'Schutt Aufraeumarbeiten Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Schutt Aufraeumarbeiten in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/schutt-aufraeumarbeiten-bielefeld',
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
