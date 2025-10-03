import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Komplettsanierung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Komplettsanierung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['komplettsanierung bielefeld', 'komplettsanierung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/komplettsanierung-bielefeld',
  },
  openGraph: {
    title: 'Komplettsanierung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Komplettsanierung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/komplettsanierung-bielefeld',
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
