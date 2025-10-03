import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kmf Entfernung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Kmf Entfernung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['kmf entfernung bielefeld', 'kmf entfernung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/kmf-entfernung-bielefeld',
  },
  openGraph: {
    title: 'Kmf Entfernung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Kmf Entfernung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/kmf-entfernung-bielefeld',
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
