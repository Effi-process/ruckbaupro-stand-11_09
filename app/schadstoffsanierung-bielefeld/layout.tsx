import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schadstoffsanierung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Schadstoffsanierung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['schadstoffsanierung bielefeld', 'schadstoffsanierung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schadstoffsanierung-bielefeld',
  },
  openGraph: {
    title: 'Schadstoffsanierung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Schadstoffsanierung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/schadstoffsanierung-bielefeld',
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
