import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schadstoffanmeldung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Schadstoffanmeldung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['schadstoffanmeldung bielefeld', 'schadstoffanmeldung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schadstoffanmeldung-bielefeld',
  },
  openGraph: {
    title: 'Schadstoffanmeldung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Schadstoffanmeldung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/schadstoffanmeldung-bielefeld',
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
