import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asbestentfernung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Asbestentfernung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['asbestentfernung bielefeld', 'asbestentfernung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/asbestentfernung-bielefeld',
  },
  openGraph: {
    title: 'Asbestentfernung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Asbestentfernung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/asbestentfernung-bielefeld',
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
