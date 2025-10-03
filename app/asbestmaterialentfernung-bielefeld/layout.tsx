import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asbestmaterialentfernung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Asbestmaterialentfernung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['asbestmaterialentfernung bielefeld', 'asbestmaterialentfernung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/asbestmaterialentfernung-bielefeld',
  },
  openGraph: {
    title: 'Asbestmaterialentfernung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Asbestmaterialentfernung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/asbestmaterialentfernung-bielefeld',
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
