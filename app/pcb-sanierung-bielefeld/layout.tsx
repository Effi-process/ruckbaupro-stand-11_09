import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pcb Sanierung Bielefeld - Professionell & Zertifiziert | RückbauPRO',
  description: 'Professionelle Pcb Sanierung in Bielefeld. ✓ Zertifiziert ✓ Schnell ✓ Fair ✓ Kostenlose Beratung. Jetzt anrufen: 0521 9999 8480',
  keywords: ['pcb sanierung bielefeld', 'pcb sanierung  Bielefeld', 'Rückbau Bielefeld', 'Abbruch Bielefeld'],
  alternates: {
    canonical: 'https://www.rueckbaupro.de/pcb-sanierung-bielefeld',
  },
  openGraph: {
    title: 'Pcb Sanierung Bielefeld - Professionell & Zertifiziert',
    description: 'Professionelle Pcb Sanierung in Bielefeld. Zertifiziert, schnell und fair.',
    url: 'https://www.rueckbaupro.de/pcb-sanierung-bielefeld',
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
