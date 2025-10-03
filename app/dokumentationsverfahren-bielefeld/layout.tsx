import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dokumentationsverfahren Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Dokumentationsverfahren in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['dokumentationsverfahren bielefeld', 'dokumentationsverfahren  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/dokumentationsverfahren-bielefeld',
  },
  openGraph: {
    title: 'Dokumentationsverfahren Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Dokumentationsverfahren in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/dokumentationsverfahren-bielefeld',
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
