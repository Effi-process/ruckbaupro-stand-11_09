import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glaswolle Entsorgung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Glaswolle Entsorgung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['glaswolle entsorgung bielefeld', 'glaswolle entsorgung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/glaswolle-entsorgung-bielefeld',
  },
  openGraph: {
    title: 'Glaswolle Entsorgung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Glaswolle Entsorgung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/glaswolle-entsorgung-bielefeld',
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
