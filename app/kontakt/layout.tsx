import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - RückbauPRO | Kostenlose Beratung',
  description: 'Kontaktieren Sie RückbauPRO für professionellen Rückbau & Abbruch. ✓ 24h Notdienst ✓ Kostenlose Beratung ✓ Schnelle Reaktionszeit.',
  alternates: {
    canonical: 'https://www.rueckbaupro.de/kontakt',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
