import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abbruchgenehmigung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Abbruchgenehmigung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['abbruchgenehmigung bielefeld', 'abbruchgenehmigung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/abbruchgenehmigung-bielefeld',
  },
  openGraph: {
    title: 'Abbruchgenehmigung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Abbruchgenehmigung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/abbruchgenehmigung-bielefeld',
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
