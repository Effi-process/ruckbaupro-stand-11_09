import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Durchbrueche Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Durchbrueche in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['durchbrueche bielefeld', 'durchbrueche  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/durchbrueche-bielefeld',
  },
  openGraph: {
    title: 'Durchbrueche Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Durchbrueche in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/durchbrueche-bielefeld',
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
