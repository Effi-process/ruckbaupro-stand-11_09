import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Behoerdengaenge Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Behoerdengaenge in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['behoerdengaenge bielefeld', 'behoerdengaenge  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld',
  },
  openGraph: {
    title: 'Behoerdengaenge Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Behoerdengaenge in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld',
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
