import Image from 'next/image';
import Icon from '../components/Icon';
import Link from 'next/link';
import FloatingElements from '../components/FloatingElements';

export default function Zertifikate() {
  const zertifikate = [
    {
      titel: 'TRGS 519',
      untertitel: 'Technische Regeln für Gefahrstoffe',
      beschreibung: 'Sachkundenachweis für Asbestabbruch-, -sanierungs- und -instandhaltungsarbeiten',
      details: [
        'Berechtigung zur Durchführung von ASI-Arbeiten',
        'Regelmäßige Fortbildungen alle 6 Jahre',
        'Alle Mitarbeiter vollständig qualifiziert',
        'Anerkennung durch die Berufsgenossenschaft'
      ],
      icon: 'certificate'
    },
    {
      titel: 'ISO 9001:2015',
      untertitel: 'Qualitätsmanagementsystem',
      beschreibung: 'Zertifiziertes QM-System für höchste Qualitätsstandards',
      details: [
        'Kontinuierliche Prozessverbesserung',
        'Dokumentierte Arbeitsabläufe',
        'Regelmäßige interne und externe Audits',
        'Kundenorientierte Qualitätspolitik'
      ],
      icon: 'shield'
    },
    {
      titel: 'ISO 14001',
      untertitel: 'Umweltmanagementsystem',
      beschreibung: 'Nachhaltiger Umweltschutz in allen Unternehmensbereichen',
      details: [
        'Minimierung der Umweltauswirkungen',
        'Nachhaltige Entsorgungskonzepte',
        'Ressourcenschonung',
        'Umweltrechtliche Compliance'
      ],
      icon: 'leaf'
    },
    {
      titel: 'VDI 3492',
      untertitel: 'Messen von Innenraumluftverunreinigungen',
      beschreibung: 'Qualifikation zur fachgerechten Probenahme',
      details: [
        'Akkreditierte Probenahme',
        'Zusammenarbeit mit zertifizierten Laboren',
        'Normgerechte Messverfahren',
        'Aussagekräftige Gutachten'
      ],
      icon: 'document'
    },
    {
      titel: 'SCC**',
      untertitel: 'Sicherheits-Zertifikat-Kontraktoren',
      beschreibung: 'Arbeitsschutz-Managementsystem für Kontraktoren',
      details: [
        'Höchste Sicherheitsstandards',
        'Unfallprävention',
        'Geschulte Sicherheitsbeauftragte',
        'Regelmäßige Sicherheitsunterweisungen'
      ],
      icon: 'shield'
    },
    {
      titel: 'Entsorgungsfachbetrieb',
      untertitel: 'Nach § 56 KrWG',
      beschreibung: 'Zertifizierung als Entsorgungsfachbetrieb',
      details: [
        'Fachgerechte Abfallentsorgung',
        'Lückenlose Dokumentation',
        'Zusammenarbeit mit zugelassenen Deponien',
        'Elektronisches Abfallnachweisverfahren'
      ],
      icon: 'recycling'
    }
  ];

  const mitgliedschaften = [
    'BG BAU - Berufsgenossenschaft der Bauwirtschaft',
    'VDSI - Verband für Sicherheit, Gesundheit und Umweltschutz',
    'BDE - Bundesverband der Deutschen Entsorgungs-, Wasser- und Rohstoffwirtschaft',
    'DGFM - Deutsche Gesellschaft für Materialkreisläufe und Rohstofftechnik',
    'IHK - Industrie- und Handelskammer',
    'Handwerkskammer'
  ];

  return (
    <main className="relative">
      {/* Transparent Header */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unsere Zertifikate & Qualifikationen
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Höchste Standards durch anerkannte Zertifizierungen und kontinuierliche Weiterbildung
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
              Qualität durch Qualifikation
            </h2>
            <p className="text-lg text-gray-600">
              Als verantwortungsbewusstes Unternehmen in der Schadstoffsanierung 
              legen wir größten Wert auf Qualifikation und Zertifizierung. Unsere 
              Zertifikate garantieren Ihnen höchste Sicherheit und Qualität bei 
              allen Sanierungsarbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Zertifikate Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Unsere Zertifizierungen im Detail
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zertifikate.map((zert, index) => (
              <div key={index} className="bg-off-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="w-16 h-16 bg-[#0066CC] rounded-lg flex items-center justify-center mb-4">
                  <Icon name={zert.icon} size={32} color="white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#2C4F5E] mb-1">{zert.titel}</h3>
                <p className="text-sm text-gray-500 mb-3">{zert.untertitel}</p>
                <p className="text-gray-600 mb-4">{zert.beschreibung}</p>
                
                <ul className="space-y-2">
                  {zert.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#0066CC] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-[#0066CC] hover:text-[#0052A3] font-semibold flex items-center">
                  Zertifikat ansehen
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitgliedschaften Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Mitgliedschaften & Verbände
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mitgliedschaften.map((mitglied, index) => (
              <div key={index} className="bg-off-white rounded-lg shadow p-6 text-center">
                <Icon name="award" size={32} className="mx-auto mb-3 text-[#0066CC]" />
                <p className="font-semibold text-gray-700">{mitglied}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualitätspolitik Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
              Unsere Qualitätspolitik
            </h2>
            
            <div className="bg-off-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Kontinuierliche Verbesserung</h3>
                    <p className="text-gray-600">
                      Wir optimieren unsere Prozesse kontinuierlich und investieren in 
                      modernste Technik und Weiterbildung unserer Mitarbeiter.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Kundenzufriedenheit</h3>
                    <p className="text-gray-600">
                      Die Zufriedenheit unserer Kunden steht im Mittelpunkt. Wir garantieren 
                      termingerechte, saubere und normgerechte Ausführung.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sicherheit & Umweltschutz</h3>
                    <p className="text-gray-600">
                      Höchste Sicherheitsstandards für Mitarbeiter und Kunden sowie 
                      nachhaltige, umweltschonende Entsorgungskonzepte.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Transparenz & Dokumentation</h3>
                    <p className="text-gray-600">
                      Lückenlose Dokumentation aller Arbeitsschritte und transparente 
                      Kommunikation mit unseren Auftraggebern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Zertifikate zum Download
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-center">
              Hier können Sie unsere aktuellen Zertifikate als PDF herunterladen:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/downloads/TRGS-519-Zertifikat.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">TRGS 519 Zertifikat</p>
                  <p className="text-sm text-gray-500">PDF, 2.3 MB</p>
                </div>
              </a>
              
              <a href="/downloads/ISO-9001-Zertifikat.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">ISO 9001:2015 Zertifikat</p>
                  <p className="text-sm text-gray-500">PDF, 1.8 MB</p>
                </div>
              </a>
              
              <a href="/downloads/ISO-14001-Zertifikat.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">ISO 14001 Zertifikat</p>
                  <p className="text-sm text-gray-500">PDF, 1.5 MB</p>
                </div>
              </a>
              
              <a href="/downloads/Alle-Zertifikate.pdf" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="document" size={24} className="mr-3 text-[#0066CC]" />
                <div>
                  <p className="font-semibold">Alle Zertifikate</p>
                  <p className="text-sm text-gray-500">PDF, 8.5 MB</p>
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
            Qualität, der Sie vertrauen können
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Überzeugen Sie sich selbst von unseren Qualifikationen. 
            Wir beraten Sie gerne persönlich.
          </p>
          <Link
            href="/kontakt"
            className="bg-off-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all inline-block"
          >
            Beratungstermin vereinbaren
          </Link>
        </div>
      </section>
    </main>
  );
}