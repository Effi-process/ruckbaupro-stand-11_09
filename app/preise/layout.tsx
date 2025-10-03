import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preise & Kosten - RückbauPRO | Kostenloser Kostenvoranschlag',
  description: 'Transparente Preise für Rückbau & Abbruch. ✓ Kostenloser Kostenvoranschlag ✓ Faire Preise ✓ Keine versteckten Kosten. Jetzt Preis berechnen!',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/preise',
  },
};

export default function PreiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
