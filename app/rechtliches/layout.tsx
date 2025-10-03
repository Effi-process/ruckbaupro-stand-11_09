import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.rueckbaupro.de/rechtliches',
  },
  openGraph: {
    url: 'https://www.rueckbaupro.de/rechtliches',
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
