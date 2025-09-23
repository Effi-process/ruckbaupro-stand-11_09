import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/app/components/Icon';
import FloatingElements from '@/app/components/FloatingElements';
import FooterWithMarquee from '@/app/components/FooterWithMarquee';
import dynamic from 'next/dynamic';

const MultiStepWizard = dynamic(() => import('../components/MultiStepWizard'), {
  ssr: false,
  loading: () => <div className="bg-white/5 rounded-3xl shadow-2xl p-12 text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cerulean mx-auto mb-4"></div>
    <p className="text-white/70">Lade Anfrage-Formular...</p>
  </div>
});

export const metadata: Metadata = {
  title: 'Allgemeine Schadstoffschulungen - Umfassende Fortbildung | RückbauPRO',
  description: 'Schadstoffschulungen für Asbest, KMF, PAK, PCB, PCP & Schimmel ✓ Zertifizierte Seminare ✓ TRGS-konform ✓ Praxisorientiert. Jetzt informieren!',
  keywords: 'Schadstoffschulung, Asbestschulung, KMF Schulung, PAK Schulung, PCB Schulung, Schimmelschulung, TRGS 519, TRGS 521',
  openGraph: {
    title: 'Allgemeine Schadstoffschulungen - RückbauPRO',
    description: 'Umfassende Schulungen zu allen Gebäudeschadstoffen. Zertifizierte Seminare für sicheres Arbeiten.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/schadstoffschulungen',
  },
};

export default function SchadstoffschulungenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-oxford-blue via-gray-800 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-cerulean/20 backdrop-blur-lg rounded-full mb-6">
                <Icon name="award" size={16} className="text-cerulean mr-2" />
                <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
                  Zertifizierte Fortbildung
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                ALLGEMEINE SCHADSTOFFSCHULUNGEN
              </h1>

              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Umfassende Schulungen zu allen Gebäudeschadstoffen - von Asbest über KMF bis zu Schimmel.
                Unsere zertifizierten Seminare vermitteln fundiertes Wissen für den sicheren Umgang mit
                Gefahrstoffen im Bau- und Sanierungsbereich.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Überblick */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Icon name="book-open" size={28} className="text-cerulean mr-3" />
                  Seminarübersicht
                </h2>
                <p className="text-white/80 mb-6">
                  Unsere Seminare bieten eine umfassende Einführung in die Thematik der Gebäudeschadstoffe
                  und vermitteln praxisnahes Wissen für den sicheren Umgang.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="check-circle" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Grundlagen zu allen relevanten Schadstoffen im Gebäudebestand</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check-circle" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Erkennung und Bewertung verschiedener Gefahrstoffe</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check-circle" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Praktische Übungen zur Probenahme und Messung</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check-circle" size={20} className="text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Rechtliche Grundlagen und Arbeitsschutzvorschriften</span>
                  </li>
                </ul>
              </div>

              {/* Zielgruppe */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Icon name="users" size={28} className="text-cerulean mr-3" />
                  Zielgruppe
                </h2>
                <p className="text-white/80 mb-6">
                  Unsere Schulungen richten sich an alle, die im Bau- und Sanierungsbereich
                  mit Schadstoffen in Kontakt kommen können.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <Icon name="user" size={20} className="text-cerulean mr-3 mt-0.5 flex-shrink-0" />
                    <span>Bauleiter und Projektverantwortliche</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="user" size={20} className="text-cerulean mr-3 mt-0.5 flex-shrink-0" />
                    <span>Handwerker und Sanierungsfachkräfte</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="user" size={20} className="text-cerulean mr-3 mt-0.5 flex-shrink-0" />
                    <span>Gebäudemanager und Facility Manager</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="user" size={20} className="text-cerulean mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sicherheitsbeauftragte und Arbeitsschutzexperten</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Schadstoff-Übersicht */}
            <div className="bg-gradient-to-r from-cerulean/10 to-indigo-dye/10 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Behandelte Schadstoffe im Detail
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Asbest",
                    icon: "alert-triangle",
                    description: "Erkennung, Bewertung und fachgerechter Umgang mit asbesthaltigen Materialien",
                    color: "text-red-400"
                  },
                  {
                    title: "KMF",
                    icon: "layers",
                    description: "Künstliche Mineralfasern - Identifikation und sichere Handhabung",
                    color: "text-yellow-400"
                  },
                  {
                    title: "PAK",
                    icon: "droplet",
                    description: "Polyzyklische aromatische Kohlenwasserstoffe in Teer und Bitumen",
                    color: "text-purple-400"
                  },
                  {
                    title: "PCB",
                    icon: "zap",
                    description: "Polychlorierte Biphenyle in Fugenmassen und Kondensatoren",
                    color: "text-blue-400"
                  },
                  {
                    title: "PCP",
                    icon: "shield",
                    description: "Pentachlorphenol und andere Holzschutzmittel",
                    color: "text-green-400"
                  },
                  {
                    title: "Schimmel",
                    icon: "cloud",
                    description: "Schimmelpilze - Erkennung, Bewertung und Sanierung",
                    color: "text-teal-400"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-cerulean/50 transition-all">
                    <Icon name={item.icon} size={32} className={`${item.color} mb-3`} />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schulungsinhalte Detail */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="clipboard" size={24} className="text-cerulean mr-3" />
                  Theoretische Grundlagen
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Vorkommen und Eigenschaften der Schadstoffe</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Gesundheitsgefahren und Risikobewertung</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Rechtliche Grundlagen und Vorschriften</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Probenahme und Analytik</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Dokumentation und Nachweisführung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Icon name="tool" size={24} className="text-cerulean mr-3" />
                  Praktische Anwendung
                </h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Erkundung und Bewertung vor Ort</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Schutzmaßnahmen und Arbeitsverfahren</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Sanierungskonzepte und -strategien</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Entsorgung und Verwertung</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="chevron-right" size={16} className="text-cerulean mr-2 mt-1 flex-shrink-0" />
                    <span>Qualitätssicherung und Freimessung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Zertifizierung */}
            <div className="bg-cerulean/10 border border-cerulean/30 rounded-2xl p-8 mb-12">
              <div className="text-center">
                <Icon name="award" size={48} className="text-cerulean mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Zertifizierung & Anerkennung
                </h2>
                <p className="text-white/80 mb-6 max-w-3xl mx-auto">
                  Nach erfolgreicher Teilnahme erhalten Sie ein anerkanntes Zertifikat, das Ihre
                  Qualifikation im Umgang mit Gebäudeschadstoffen dokumentiert.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/5 backdrop-blur rounded-xl p-4">
                    <Icon name="check-circle" size={32} className="text-green-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-1">Anerkanntes Zertifikat</h4>
                    <p className="text-white/70 text-sm">Bundesweit gültige Qualifikation</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur rounded-xl p-4">
                    <Icon name="refresh" size={32} className="text-blue-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-1">Regelmäßige Updates</h4>
                    <p className="text-white/70 text-sm">Aktuelle Vorschriften & Standards</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur rounded-xl p-4">
                    <Icon name="star" size={32} className="text-yellow-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white mb-1">Praxisorientiert</h4>
                    <p className="text-white/70 text-sm">Direkt anwendbares Wissen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seminarformate */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Unsere Seminarformate
              </h2>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl p-6 border border-white/20 hover:border-cerulean/50 transition-all">
                  <div className="flex items-center mb-4">
                    <Icon name="calendar" size={24} className="text-cerulean mr-3" />
                    <h3 className="text-xl font-bold text-white">Tagesseminar</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Kompakte Einführung in alle relevanten Schadstoffe an einem Tag.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center">
                      <Icon name="clock" size={14} className="mr-2" />
                      8 Stunden intensiv
                    </li>
                    <li className="flex items-center">
                      <Icon name="users" size={14} className="mr-2" />
                      Max. 15 Teilnehmer
                    </li>
                    <li className="flex items-center">
                      <Icon name="certificate" size={14} className="mr-2" />
                      Zertifikat inklusive
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cerulean/20 to-cerulean/10 backdrop-blur rounded-2xl p-6 border border-cerulean/30 hover:border-cerulean/50 transition-all">
                  <div className="flex items-center mb-4">
                    <Icon name="star" size={24} className="text-cerulean mr-3" />
                    <h3 className="text-xl font-bold text-white">Intensivkurs</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Umfassende Schulung über 2-3 Tage mit vertieften Praxisübungen.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center">
                      <Icon name="clock" size={14} className="mr-2" />
                      16-24 Stunden
                    </li>
                    <li className="flex items-center">
                      <Icon name="users" size={14} className="mr-2" />
                      Max. 12 Teilnehmer
                    </li>
                    <li className="flex items-center">
                      <Icon name="certificate" size={14} className="mr-2" />
                      Erweiterte Zertifizierung
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl p-6 border border-white/20 hover:border-cerulean/50 transition-all">
                  <div className="flex items-center mb-4">
                    <Icon name="building" size={24} className="text-cerulean mr-3" />
                    <h3 className="text-xl font-bold text-white">Inhouse-Schulung</h3>
                  </div>
                  <p className="text-white/70 mb-4">
                    Maßgeschneiderte Schulung direkt in Ihrem Unternehmen.
                  </p>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li className="flex items-center">
                      <Icon name="clock" size={14} className="mr-2" />
                      Flexible Dauer
                    </li>
                    <li className="flex items-center">
                      <Icon name="users" size={14} className="mr-2" />
                      Unbegrenzte Teilnehmer
                    </li>
                    <li className="flex items-center">
                      <Icon name="certificate" size={14} className="mr-2" />
                      Firmenzertifikate
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Jetzt für Schadstoffschulung anmelden
              </h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Investieren Sie in die Sicherheit und Kompetenz Ihrer Mitarbeiter.
                Unsere zertifizierten Schulungen bieten fundiertes Wissen für den
                professionellen Umgang mit Gebäudeschadstoffen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+491748083023"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cerulean/30 transition-all"
                >
                  <Icon name="phone" size={20} className="mr-3" />
                  Beratung: 0174 8083023
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  <Icon name="mail" size={20} className="mr-3" />
                  Schulungsanfrage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MultiStepWizard purpose="quote" />
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}