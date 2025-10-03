import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selektiver Abbruch Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Selektiver Abbruch in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['selektiver abbruch bielefeld', 'selektiver abbruch  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/selektiver-abbruch-bielefeld',
  },
  openGraph: {
    title: 'Selektiver Abbruch Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Selektiver Abbruch in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/selektiver-abbruch-bielefeld',
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
