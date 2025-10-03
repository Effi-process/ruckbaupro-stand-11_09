import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oberflaechenreinigung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Oberflaechenreinigung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['oberflaechenreinigung bielefeld', 'oberflaechenreinigung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/oberflaechenreinigung-bielefeld',
  },
  openGraph: {
    title: 'Oberflaechenreinigung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Oberflaechenreinigung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/oberflaechenreinigung-bielefeld',
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
