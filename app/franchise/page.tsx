import Link from 'next/link';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function Franchise() {
  const vorteile = [
    {
      icon: 'shield',
      title: 'Bewährtes Geschäftsmodell',
      description: 'Profitieren Sie von 20 Jahren Erfahrung und erprobten Prozessen'
    },
    {
      icon: 'certificate',
      title: 'Zertifizierungen inklusive',
      description: 'Wir unterstützen Sie bei allen notwendigen Qualifikationen'
    },
    {
      icon: 'team',
      title: 'Umfassende Schulung',
      description: 'Intensive Ausbildung für Sie und Ihre Mitarbeiter'
    },
    {
      icon: 'document',
      title: 'Marketing-Unterstützung',
      description: 'Professionelles Marketing und Lead-Generierung'
    },
    {
      icon: 'euro',
      title: 'Attraktive Konditionen',
      description: 'Faire Gebühren und transparente Kostenstruktur'
    },
    {
      icon: 'clock',
      title: 'Schneller Start',
      description: 'In 3 Monaten startklar für Ihr eigenes Geschäft'
    }
  ];

  const leistungen = [
    'Exklusives Gebietsrecht',
    'Komplette Geschäftsausstattung',
    'TRGS 519 Schulung und Zertifizierung',
    'Professionelle Website und Online-Marketing',
    'Zentrale Auftragsannahme',
    'Technischer Support und Beratung',
    'Gemeinsamer Einkauf zu Vorzugskonditionen',
    'Regelmäßige Weiterbildungen',
    'Qualitätsmanagement-System',
    'Versicherungspaket'
  ];

  const schritte = [
    {
      phase: 'Kennenlernen',
      dauer: '1-2 Wochen',
      beschreibung: 'Erstgespräch, Unternehmensvorstellung, Standortanalyse'
    },
    {
      phase: 'Vertragsabschluss',
      dauer: '2-4 Wochen',
      beschreibung: 'Vertragsverhandlung, Finanzierung, Gründung'
    },
    {
      phase: 'Ausbildung',
      dauer: '4-6 Wochen',
      beschreibung: 'Intensivschulung, Zertifizierungen, Praxistraining'
    },
    {
      phase: 'Marktstart',
      dauer: 'Ab Woche 12',
      beschreibung: 'Eröffnung, Marketing-Kampagne, erste Aufträge'
    }
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
              Franchise-Partner werden
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Starten Sie Ihr eigenes Asbestsanierungs-Unternehmen mit starkem Partner
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
              Werden Sie Teil unseres Erfolgs
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Nachfrage nach professioneller Asbestsanierung wächst stetig. 
              Millionen von Gebäuden in Deutschland enthalten noch Asbest - 
              eine Chance für Ihr erfolgreiches Unternehmertum.
            </p>
            <p className="text-lg text-gray-600">
              Mit unserem erprobten Franchise-System starten Sie mit minimiertem 
              Risiko in einen zukunftssicheren Markt.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Ihre Vorteile als Franchise-Partner
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vorteile.map((vorteil, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-14 h-14 bg-[#0066CC] rounded-lg flex items-center justify-center mb-4">
                  <Icon name={vorteil.icon} size={28} color="white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{vorteil.title}</h3>
                <p className="text-gray-600">{vorteil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                Unser Leistungspaket
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir bieten Ihnen ein Rundum-sorglos-Paket für Ihren 
                erfolgreichen Start in die Selbstständigkeit.
              </p>
              
              <ul className="space-y-3">
                {leistungen.map((leistung, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-[#0066CC] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{leistung}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Investment & Konditionen
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">ab 45.000 €</p>
                  <p className="text-white/80">Einmalige Franchise-Gebühr</p>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <p className="text-2xl font-bold">8%</p>
                  <p className="text-white/80">Laufende Franchise-Gebühr</p>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <p className="text-2xl font-bold">2%</p>
                  <p className="text-white/80">Marketing-Gebühr</p>
                </div>
              </div>
              
              <Link
                href="/kontakt"
                className="mt-6 w-full bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
              >
                Infomaterial anfordern
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Ihr Weg zum eigenen Unternehmen
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {schritte.map((schritt, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-xl text-[#2C4F5E]">{schritt.phase}</h3>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                        {schritt.dauer}
                      </span>
                    </div>
                    <p className="text-gray-600">{schritt.beschreibung}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anforderungen Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Das bringen Sie mit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="euro" size={40} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Kapital</h3>
              <p className="text-gray-600">
                Eigenkapital ab 45.000 € plus Betriebsmittel für die Startphase
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="team" size={40} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Unternehmergeist</h3>
              <p className="text-gray-600">
                Führungserfahrung und der Wille zum Erfolg
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="shield" size={40} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Verantwortung</h3>
              <p className="text-gray-600">
                Qualitäts- und Sicherheitsbewusstsein im Umgang mit Schadstoffen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <svg className="w-12 h-12 text-[#0066CC] mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-700 mb-6">
              "Der Einstieg als Franchise-Partner war die beste Entscheidung. 
              Die Unterstützung ist hervorragend, und der Markt bietet enormes Potenzial. 
              Nach nur 6 Monaten hatte ich bereits 3 Mitarbeiter."
            </p>
            <div>
              <p className="font-bold text-[#2C4F5E]">Michael Bauer</p>
              <p className="text-gray-600">Franchise-Partner seit 2021, Region Stuttgart</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Starten Sie jetzt Ihre Zukunft
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Vereinbaren Sie ein unverbindliches Erstgespräch und lernen Sie 
            unser Franchise-System kennen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Jetzt bewerben
            </Link>
            <a
              href="/downloads/franchise-broschuere.pdf"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066CC] font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Franchise-Broschüre
            </a>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}