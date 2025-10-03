import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gebaeudeabbruch Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Gebaeudeabbruch in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['gebaeudeabbruch bielefeld', 'gebaeudeabbruch  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/gebaeudeabbruch-bielefeld',
  },
  openGraph: {
    title: 'Gebaeudeabbruch Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Gebaeudeabbruch in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/gebaeudeabbruch-bielefeld',
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
