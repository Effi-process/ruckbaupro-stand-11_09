import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innenabbruch Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Innenabbruch in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['innenabbruch bielefeld', 'innenabbruch  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/innenabbruch-bielefeld',
  },
  openGraph: {
    title: 'Innenabbruch Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Innenabbruch in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/innenabbruch-bielefeld',
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
