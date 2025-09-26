import Image from 'next/image';
import Icon from '../components/Icon';
import Link from 'next/link';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function Nachhaltigkeit() {
  const umweltziele = [
    {
      icon: 'recycling',
      title: '95% Recyclingquote',
      description: 'Maximale Wiederverwertung der entsorgten Materialien'
    },
    {
      icon: 'document',
      title: 'CO₂-Reduktion',
      description: 'Kurze Transportwege und effiziente Logistik'
    },
    {
      icon: 'shield',
      title: 'Umweltschutz',
      description: 'Verhinderung von Schadstoffausbreitung in die Umwelt'
    },
    {
      icon: 'certificate',
      title: 'Zertifizierte Entsorgung',
      description: 'Nur zugelassene Entsorgungsanlagen und -verfahren'
    }
  ];

  const massnahmen = [
    {
      bereich: 'Entsorgung',
      aktionen: [
        'Sortenreine Trennung aller Materialien',
        'Zusammenarbeit mit zertifizierten Entsorgern',
        'Dokumentation aller Entsorgungswege',
        'Bevorzugung von Recycling vor Deponierung'
      ]
    },
    {
      bereich: 'Transport',
      aktionen: [
        'Optimierte Routenplanung',
        'Moderne Euro-6-Fahrzeugflotte',
        'Sammeltouren zur Reduzierung von Fahrten',
        'Regionale Entsorgungspartner'
      ]
    },
    {
      bereich: 'Arbeitsschutz',
      aktionen: [
        'Wiederverwendbare Schutzausrüstung',
        'Energieeffiziente Unterdruckhaltung',
        'Wassersparende Dekontamination',
        'Digitale Dokumentation statt Papier'
      ]
    },
    {
      bereich: 'Büro & Verwaltung',
      aktionen: [
        '100% Ökostrom',
        'Papierloses Büro',
        'E-Mobilität für Dienstwagen',
        'Nachhaltige Büromaterialien'
      ]
    }
  ];

  const zahlen = [
    { wert: '2.500t', label: 'Asbest fachgerecht entsorgt' },
    { wert: '95%', label: 'Recyclingquote' },
    { wert: '30%', label: 'CO₂ eingespart durch Logistik' },
    { wert: '100%', label: 'Ökostrom im Betrieb' }
  ];

  return (
    <main className="relative">
      {/* Transparent Header */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nachhaltigkeit & Umweltschutz
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Verantwortungsvolle Schadstoffsanierung für eine saubere Zukunft
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
              Unser Beitrag zum Umweltschutz
            </h2>
            <p className="text-lg text-gray-600">
              Als Schadstoffsanierer tragen wir eine besondere Verantwortung für Mensch und Umwelt. 
              Wir entfernen nicht nur gefährliche Stoffe aus Gebäuden, sondern sorgen auch dafür, 
              dass diese umweltgerecht entsorgt und bestmöglich recycelt werden.
            </p>
          </div>
        </div>
      </section>

      {/* Umweltziele Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Unsere Umweltziele
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {umweltziele.map((ziel, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={ziel.icon} size={40} color="white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{ziel.title}</h3>
                <p className="text-gray-600">{ziel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maßnahmen Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Konkrete Maßnahmen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {massnahmen.map((bereich, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-xl text-[#2C4F5E] mb-4">
                  {bereich.bereich}
                </h3>
                <ul className="space-y-2">
                  {bereich.aktionen.map((aktion, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{aktion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kreislaufwirtschaft Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                Kreislaufwirtschaft in der Praxis
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Wir verstehen Abfall als Ressource. Durch innovative Trenn- und 
                Aufbereitungsverfahren können viele der von uns entsorgten Materialien 
                wieder in den Wirtschaftskreislauf zurückgeführt werden.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sortenreine Trennung</h4>
                    <p className="text-gray-600">Bereits auf der Baustelle trennen wir Materialien sortenrein</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Aufbereitung</h4>
                    <p className="text-gray-600">Materialien werden für die Wiederverwertung vorbereitet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Recycling</h4>
                    <p className="text-gray-600">Rückführung in den Rohstoffkreislauf</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Unsere Bilanz 2023</h3>
              <div className="grid grid-cols-2 gap-6">
                {zahlen.map((zahl, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold">{zahl.wert}</div>
                    <div className="text-green-100">{zahl.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zertifikate Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Umweltzertifikate & Standards
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Icon name="certificate" size={64} className="mx-auto mb-4 text-green-500" />
              <h3 className="font-bold text-xl mb-2">ISO 14001</h3>
              <p className="text-gray-600">
                Zertifiziertes Umweltmanagementsystem
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Icon name="certificate" size={64} className="mx-auto mb-4 text-green-500" />
              <h3 className="font-bold text-xl mb-2">Entsorgungsfachbetrieb</h3>
              <p className="text-gray-600">
                Zertifiziert nach § 56 KrWG
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Icon name="certificate" size={64} className="mx-auto mb-4 text-green-500" />
              <h3 className="font-bold text-xl mb-2">EMAS</h3>
              <p className="text-gray-600">
                Eco-Management and Audit Scheme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-4">
            Gemeinsam für die Umwelt
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wir arbeiten mit führenden Umweltorganisationen und Entsorgungspartnern zusammen
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 font-semibold">Partner für nachhaltige Entsorgung</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 font-semibold">Mitglied im Umweltnetzwerk</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600 font-semibold">Klimaneutralität bis 2030</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Nachhaltige Sanierung für Ihr Projekt
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lassen Sie uns gemeinsam Verantwortung übernehmen. Wir beraten Sie 
            gerne zu umweltschonenden Sanierungslösungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Beratung anfordern
            </Link>
            <a
              href="/downloads/umweltbericht.pdf"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Umweltbericht 2023
            </a>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}