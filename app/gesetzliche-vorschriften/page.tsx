import Link from 'next/link';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/SimpleContactForm';
import { ScrollAnimation } from '../components/ScrollAnimations';

export default function GesetzlicheVorschriften() {
  const vorschriften = [
    {
      titel: 'TRGS 519',
      vollname: 'Technische Regeln für Gefahrstoffe - Asbest',
      kategorie: 'Arbeitsschutz',
      beschreibung: 'Zentrale Vorschrift für alle Arbeiten mit Asbest',
      inhalte: [
        'Ermittlung und Beurteilung der Gefährdung',
        'Schutzmaßnahmen bei ASI-Arbeiten',
        'Anforderungen an Fachbetriebe',
        'Arbeitsverfahren und Schutzausrüstung',
        'Sachkundenachweis und Fortbildung'
      ]
    },
    {
      titel: 'GefStoffV',
      vollname: 'Gefahrstoffverordnung',
      kategorie: 'Arbeitsschutz',
      beschreibung: 'Umgang mit gefährlichen Stoffen am Arbeitsplatz',
      inhalte: [
        'Verbot der Herstellung und Verwendung von Asbest',
        'Ausnahmen für Abbruch- und Sanierungsarbeiten',
        'Informations- und Dokumentationspflichten',
        'Gefährdungsbeurteilung',
        'Schutzmaßnahmen und Grenzwerte'
      ]
    },
    {
      titel: 'BaustellV',
      vollname: 'Baustellenverordnung',
      kategorie: 'Baurecht',
      beschreibung: 'Sicherheit und Gesundheitsschutz auf Baustellen',
      inhalte: [
        'Koordination bei Asbestsanierungen',
        'Sicherheits- und Gesundheitsschutzplan',
        'Vorankündigung bei der Behörde',
        'Unterlage für spätere Arbeiten',
        'Koordinator-Bestellung'
      ]
    },
    {
      titel: 'KrWG',
      vollname: 'Kreislaufwirtschaftsgesetz',
      kategorie: 'Umweltrecht',
      beschreibung: 'Entsorgung von asbesthaltigen Abfällen',
      inhalte: [
        'Nachweisverfahren für gefährliche Abfälle',
        'Andienungspflicht für Sonderabfälle',
        'Transportgenehmigungen',
        'Entsorgungsfachbetrieb-Verordnung',
        'Dokumentationspflichten'
      ]
    },
    {
      titel: 'REACH',
      vollname: 'EU-Chemikalienverordnung',
      kategorie: 'EU-Recht',
      beschreibung: 'Europaweites Asbestverbot',
      inhalte: [
        'Herstellungs- und Verwendungsverbot',
        'Ausnahmen für Entsorgung',
        'Informationspflichten in der Lieferkette',
        'Zulassungspflicht für Ausnahmen',
        'Meldepflichten'
      ]
    }
  ];

  const ablauf = [
    {
      schritt: 'Gefährdungsbeurteilung',
      beschreibung: 'Ermittlung von Art und Umfang der Asbestbelastung',
      pflichten: ['Probenahme nach VDI 3492', 'Laboranalyse', 'Dokumentation']
    },
    {
      schritt: 'Anzeige bei Behörde',
      beschreibung: 'Mindestens 7 Tage vor Arbeitsbeginn',
      pflichten: ['Arbeitsplan einreichen', 'Sachkundenachweis', 'Entsorgungskonzept']
    },
    {
      schritt: 'Durchführung',
      beschreibung: 'Sanierung nach TRGS 519',
      pflichten: ['Schwarzbereich einrichten', 'PSA tragen', 'Messungen durchführen']
    },
    {
      schritt: 'Entsorgung',
      beschreibung: 'Fachgerechte Beseitigung',
      pflichten: ['ADR-Transport', 'Begleitscheine', 'Deponieeingang']
    },
    {
      schritt: 'Freimessung',
      beschreibung: 'Erfolgskontrolle nach Sanierung',
      pflichten: ['Luftmessung', 'Freigabe', 'Abschlussdokumentation']
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-oxford-blue via-gray-800 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-lg rounded-full px-8 py-3 mb-8">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-sky-400 uppercase tracking-wider">
                Rechtssicherheit garantiert
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Gesetzliche
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                Vorschriften
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Alle relevanten Gesetze und Verordnungen für die Asbestsanierung
              - vollständig, aktuell und rechtssicher
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-2">
                Rechtssicherheit durch Expertise
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-400 mx-auto mb-8"></div>

              <p className="text-xl text-gray-200 leading-relaxed">
                Die Asbestsanierung unterliegt strengen gesetzlichen Vorgaben.
                Als zertifizierter Fachbetrieb kennen wir alle relevanten Vorschriften
                und garantieren deren Einhaltung. So schützen wir Sie vor rechtlichen
                Konsequenzen und Haftungsrisiken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vorschriften Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Die wichtigsten Vorschriften im Überblick
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vorschriften.map((vorschrift, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full hover:border-sky-400/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{vorschrift.titel}</h3>
                    <span className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 px-4 py-2 rounded-full text-sm font-semibold text-sky-400">
                      {vorschrift.kategorie}
                    </span>
                  </div>

                  <p className="text-sm text-sky-300 mb-4">{vorschrift.vollname}</p>
                  <p className="text-gray-300 mb-6">{vorschrift.beschreibung}</p>

                  <ul className="space-y-3">
                    {vorschrift.inhalte.map((inhalt, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-300">{inhalt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-400/10 to-blue-400/10 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Gesetzeskonforme Sanierung - Der Ablauf
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {ablauf.map((phase, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur rounded-2xl p-8 border border-white/20">
                    <h3 className="font-bold text-2xl text-white mb-3">{phase.schritt}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{phase.beschreibung}</p>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <p className="text-sm font-bold text-sky-400 mb-4 uppercase tracking-wide">
                        Gesetzliche Pflichten:
                      </p>
                      <ul className="space-y-2">
                        {phase.pflichten.map((pflicht, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {pflicht}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <ScrollAnimation animation="slideUp" duration={1000}>
        <section id="contact-form" className="bg-oxford-blue section-divider">
          <SimpleContactForm purpose="quote" />
        </section>
      </ScrollAnimation>

      {/* Downloads Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Gesetzestexte und Merkblätter
          </h2>

          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'TRGS 519 Volltext', size: 'PDF, 3.2 MB', accent: 'from-sky-400 to-blue-400' },
                { title: 'GefStoffV - Relevante Paragraphen', size: 'PDF, 1.5 MB', accent: 'from-blue-400 to-indigo-400' },
                { title: 'Merkblatt für Auftraggeber', size: 'PDF, 800 KB', accent: 'from-indigo-400 to-purple-400' },
                { title: 'Checkliste Asbestsanierung', size: 'PDF, 500 KB', accent: 'from-purple-400 to-pink-400' }
              ].map((doc, index) => (
                <a key={index} href="#" className="group relative overflow-hidden bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-sky-400/30 transition-all duration-300 hover:scale-105">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${doc.accent}`}></div>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${doc.accent} rounded-xl flex items-center justify-center text-white font-bold`}>
                      PDF
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-sky-400 transition-colors">
                        {doc.title}
                      </p>
                      <p className="text-sm text-gray-400">{doc.size}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl rounded-3xl p-16 text-center overflow-hidden border border-sky-400/30">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-400/10 animate-pulse"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Rechtssicher sanieren mit Experten
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Wir übernehmen die volle Verantwortung für die gesetzeskonforme
                Durchführung Ihrer Asbestsanierung.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-sky-400 to-blue-400 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-sky-400/30 transition-all duration-300 hover:scale-105"
                >
                  Beratungsgespräch vereinbaren
                </Link>
                <Link
                  href="/schadstoffschulungen"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Unsere Qualifikationen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}