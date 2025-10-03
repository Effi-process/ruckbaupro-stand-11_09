import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teilsanierung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Teilsanierung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['teilsanierung bielefeld', 'teilsanierung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/teilsanierung-bielefeld',
  },
  openGraph: {
    title: 'Teilsanierung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Teilsanierung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/teilsanierung-bielefeld',
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
