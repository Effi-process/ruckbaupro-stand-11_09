import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schimmelpilzsanierung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Schimmelpilzsanierung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['schimmelpilzsanierung bielefeld', 'schimmelpilzsanierung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld',
  },
  openGraph: {
    title: 'Schimmelpilzsanierung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Schimmelpilzsanierung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/schimmelpilzsanierung-bielefeld',
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
