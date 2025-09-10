import Icon from '../components/Icon';
import Link from 'next/link';
import FloatingElements from '../components/FloatingElements';

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

  const strafen = [
    {
      vergehen: 'Arbeiten ohne Sachkundenachweis',
      strafe: 'Bis zu 50.000 € Bußgeld',
      zusatz: 'Strafverfahren bei Personenschäden'
    },
    {
      vergehen: 'Fehlende Anzeige bei Behörde',
      strafe: 'Bis zu 25.000 € Bußgeld',
      zusatz: 'Stilllegung der Baustelle'
    },
    {
      vergehen: 'Unsachgemäße Entsorgung',
      strafe: 'Bis zu 100.000 € Strafe',
      zusatz: 'Freiheitsstrafe bis 5 Jahre möglich'
    },
    {
      vergehen: 'Gefährdung von Personen',
      strafe: 'Strafverfahren',
      zusatz: 'Persönliche Haftung der Verantwortlichen'
    }
  ];

  return (
    <main>
      {/* Floating Logo and Menu */}
      <FloatingElements />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gesetzliche Vorschriften
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Alle relevanten Gesetze und Verordnungen für die Asbestsanierung
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
              Rechtssicherheit durch Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Die Asbestsanierung unterliegt strengen gesetzlichen Vorgaben. 
              Als zertifizierter Fachbetrieb kennen wir alle relevanten Vorschriften 
              und garantieren deren Einhaltung. So schützen wir Sie vor rechtlichen 
              Konsequenzen und Haftungsrisiken.
            </p>
          </div>
        </div>
      </section>

      {/* Vorschriften Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Die wichtigsten Vorschriften im Überblick
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vorschriften.map((vorschrift, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#2C4F5E]">{vorschrift.titel}</h3>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                    {vorschrift.kategorie}
                  </span>
                </div>
                
                <p className="text-sm text-gray-500 mb-3">{vorschrift.vollname}</p>
                <p className="text-gray-600 mb-4">{vorschrift.beschreibung}</p>
                
                <ul className="space-y-2">
                  {vorschrift.inhalte.map((inhalt, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{inhalt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Gesetzeskonforme Sanierung - Der Ablauf
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {ablauf.map((phase, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-xl text-[#2C4F5E] mb-2">{phase.schritt}</h3>
                  <p className="text-gray-600 mb-3">{phase.beschreibung}</p>
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Gesetzliche Pflichten:</p>
                    <ul className="space-y-1">
                      {phase.pflichten.map((pflicht, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#0066CC] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
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
      </section>

      {/* Strafen Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-4">
            Konsequenzen bei Verstößen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Die unsachgemäße Durchführung von Asbestarbeiten kann schwerwiegende 
            rechtliche und finanzielle Folgen haben:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strafen.map((strafe, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <h3 className="font-bold text-lg text-red-700 mb-2">{strafe.vergehen}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-2">{strafe.strafe}</p>
                <p className="text-sm text-gray-600">{strafe.zusatz}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Icon name="warning" size={48} className="mx-auto mb-4 text-red-600" />
              <h3 className="font-bold text-xl mb-3">Wichtiger Hinweis</h3>
              <p className="text-gray-700">
                Beauftragen Sie ausschließlich zertifizierte Fachbetriebe! 
                Als Auftraggeber haften Sie mit, wenn Sie wissentlich einen 
                nicht qualifizierten Betrieb beauftragen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Gesetzestexte und Merkblätter
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/downloads/TRGS-519.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">TRGS 519 Volltext</p>
                  <p className="text-sm text-gray-500">PDF, 3.2 MB</p>
                </div>
              </a>
              
              <a href="/downloads/GefStoffV-Auszug.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">GefStoffV - Relevante Paragraphen</p>
                  <p className="text-sm text-gray-500">PDF, 1.5 MB</p>
                </div>
              </a>
              
              <a href="/downloads/Merkblatt-Auftraggeber.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">Merkblatt für Auftraggeber</p>
                  <p className="text-sm text-gray-500">PDF, 800 KB</p>
                </div>
              </a>
              
              <a href="/downloads/Checkliste-Sanierung.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">Checkliste Asbestsanierung</p>
                  <p className="text-sm text-gray-500">PDF, 500 KB</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rechtssicher sanieren mit Experten
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Wir übernehmen die volle Verantwortung für die gesetzeskonforme 
            Durchführung Ihrer Asbestsanierung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Beratungsgespräch vereinbaren
            </Link>
            <Link
              href="/zertifikate"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066CC] font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Unsere Qualifikationen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}