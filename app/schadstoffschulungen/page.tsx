import type { Metadata } from 'next';
import Link from 'next/link';
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 mt-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-10 lg:p-16 shadow-2xl">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-lg rounded-full px-8 py-3 mb-8">
                <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold text-sky-400 uppercase tracking-wider">
                  Zertifizierte Fortbildung
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                ALLGEMEINE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                  SCHADSTOFFSCHULUNGEN
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                Umfassende Schulungen zu allen Gebäudeschadstoffen - von Asbest über KMF bis zu Schimmel.
                Unsere zertifizierten Seminare vermitteln fundiertes Wissen für den sicheren Umgang mit
                Gefahrstoffen im Bau- und Sanierungsbereich.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {/* Seminarübersicht */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/20 overflow-hidden group hover:border-sky-400/30 transition-all duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-transparent rounded-full blur-3xl"></div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Seminarübersicht
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mb-8"></div>

                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                  Unsere Seminare bieten eine umfassende Einführung in die Thematik der Gebäudeschadstoffe
                  und vermitteln praxisnahes Wissen für den sicheren Umgang.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Grundlagen zu allen relevanten Schadstoffen im Gebäudebestand</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Erkennung und Bewertung verschiedener Gefahrstoffe</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Praktische Übungen zur Probenahme und Messung</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Rechtliche Grundlagen und Arbeitsschutzvorschriften</span>
                  </li>
                </ul>
              </div>

              {/* Zielgruppe */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/20 overflow-hidden group hover:border-sky-400/30 transition-all duration-500">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Zielgruppe
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mb-8"></div>

                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                  Unsere Schulungen richten sich an alle, die im Bau- und Sanierungsbereich
                  mit Schadstoffen in Kontakt kommen können.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Bauleiter und Projektverantwortliche</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Handwerker und Sanierungsfachkräfte</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Gebäudemanager und Facility Manager</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="inline-block w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Sicherheitsbeauftragte und Arbeitsschutzexperten</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Schadstoff-Übersicht */}
            <div className="bg-gradient-to-r from-sky-400/10 to-blue-400/10 backdrop-blur-lg rounded-3xl p-12 mb-16 border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                Behandelte Schadstoffe im Detail
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Asbest",
                    description: "Erkennung, Bewertung und fachgerechter Umgang mit asbesthaltigen Materialien",
                    color: "from-red-500/20 to-red-600/20",
                    borderColor: "border-red-500/30"
                  },
                  {
                    title: "KMF",
                    description: "Künstliche Mineralfasern - Identifikation und sichere Handhabung",
                    color: "from-yellow-500/20 to-yellow-600/20",
                    borderColor: "border-yellow-500/30"
                  },
                  {
                    title: "PAK",
                    description: "Polyzyklische aromatische Kohlenwasserstoffe in Teer und Bitumen",
                    color: "from-purple-500/20 to-purple-600/20",
                    borderColor: "border-purple-500/30"
                  },
                  {
                    title: "PCB",
                    description: "Polychlorierte Biphenyle in Fugenmassen und Kondensatoren",
                    color: "from-blue-500/20 to-blue-600/20",
                    borderColor: "border-blue-500/30"
                  },
                  {
                    title: "PCP",
                    description: "Pentachlorphenol und andere Holzschutzmittel",
                    color: "from-green-500/20 to-green-600/20",
                    borderColor: "border-green-500/30"
                  },
                  {
                    title: "Schimmel",
                    description: "Schimmelpilze - Erkennung, Bewertung und Sanierung",
                    color: "from-teal-500/20 to-teal-600/20",
                    borderColor: "border-teal-500/30"
                  }
                ].map((item, index) => (
                  <div key={index} className={`relative bg-gradient-to-br ${item.color} backdrop-blur rounded-2xl p-8 border ${item.borderColor} hover:scale-105 transition-all duration-300 overflow-hidden group`}>
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schulungsinhalte Detail */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-3xl p-10 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Theoretische Grundlagen
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mb-8"></div>

                <ul className="space-y-4">
                  <li className="text-gray-200 pl-6 border-l-2 border-sky-400/30">
                    Vorkommen und Eigenschaften der Schadstoffe
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-sky-400/30">
                    Gesundheitsgefahren und Risikobewertung
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-sky-400/30">
                    Rechtliche Grundlagen und Vorschriften
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-sky-400/30">
                    Probenahme und Analytik
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-sky-400/30">
                    Dokumentation und Nachweisführung
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-3xl p-10 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Praktische Anwendung
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mb-8"></div>

                <ul className="space-y-4">
                  <li className="text-gray-200 pl-6 border-l-2 border-blue-400/30">
                    Erkundung und Bewertung vor Ort
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-blue-400/30">
                    Schutzmaßnahmen und Arbeitsverfahren
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-blue-400/30">
                    Sanierungskonzepte und -strategien
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-blue-400/30">
                    Entsorgung und Verwertung
                  </li>
                  <li className="text-gray-200 pl-6 border-l-2 border-blue-400/30">
                    Qualitätssicherung und Freimessung
                  </li>
                </ul>
              </div>
            </div>

            {/* Zertifizierung */}
            <div className="relative bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-lg border border-sky-400/30 rounded-3xl p-12 mb-16 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-400"></div>

              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Zertifizierung & Anerkennung
                </h2>
                <p className="text-gray-200 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                  Nach erfolgreicher Teilnahme erhalten Sie ein anerkanntes Zertifikat, das Ihre
                  Qualifikation im Umgang mit Gebäudeschadstoffen dokumentiert.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-bold text-white text-xl mb-2">Anerkanntes Zertifikat</h4>
                    <p className="text-gray-300">Bundesweit gültige Qualifikation</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-bold text-white text-xl mb-2">Regelmäßige Updates</h4>
                    <p className="text-gray-300">Aktuelle Vorschriften & Standards</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-bold text-white text-xl mb-2">Praxisorientiert</h4>
                    <p className="text-gray-300">Direkt anwendbares Wissen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seminarformate */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                Unsere Seminarformate
              </h2>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-3xl p-8 border border-white/20 hover:border-sky-400/50 transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <h3 className="text-2xl font-bold text-white mb-4">Tagesseminar</h3>
                  <p className="text-gray-200 mb-6">
                    Kompakte Einführung in alle relevanten Schadstoffe an einem Tag.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      8 Stunden intensiv
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Max. 15 Teilnehmer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Zertifikat inklusive
                    </li>
                  </ul>
                </div>

                <div className="relative bg-gradient-to-br from-sky-400/20 to-blue-400/10 backdrop-blur rounded-3xl p-8 border border-sky-400/30 hover:border-sky-400/50 transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-400"></div>
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-sky-400 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">
                    BELIEBT
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Intensivkurs</h3>
                  <p className="text-gray-200 mb-6">
                    Umfassende Schulung über 2-3 Tage mit vertieften Praxisübungen.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      16-24 Stunden
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Max. 12 Teilnehmer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Erweiterte Zertifizierung
                    </li>
                  </ul>
                </div>

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-3xl p-8 border border-white/20 hover:border-sky-400/50 transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <h3 className="text-2xl font-bold text-white mb-4">Inhouse-Schulung</h3>
                  <p className="text-gray-200 mb-6">
                    Maßgeschneiderte Schulung direkt in Ihrem Unternehmen.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Flexible Dauer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Unbegrenzte Teilnehmer
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-sky-400">•</span>
                      Firmenzertifikate
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-lg rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-400/10 animate-pulse"></div>

              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Jetzt für Schadstoffschulung anmelden
                </h2>
                <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Investieren Sie in die Sicherheit und Kompetenz Ihrer Mitarbeiter.
                  Unsere zertifizierten Schulungen bieten fundiertes Wissen für den
                  professionellen Umgang mit Gebäudeschadstoffen.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="tel:+491748083023"
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sky-400 to-blue-400 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-sky-400/30 transition-all duration-300 hover:scale-105"
                  >
                    Beratung: 0174 8083023
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    Schulungsanfrage stellen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleContactForm purpose="quote" />
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}