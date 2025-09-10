import Link from 'next/link';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function B2B() {
  const vorteile = [
    {
      icon: 'clock',
      title: 'Schnelle Abwicklung',
      description: 'Bevorzugte Terminvergabe und Express-Service für Geschäftskunden'
    },
    {
      icon: 'document',
      title: 'Rahmenverträge',
      description: 'Individuelle Konditionen für regelmäßige Aufträge'
    },
    {
      icon: 'team',
      title: 'Dedizierter Ansprechpartner',
      description: 'Persönlicher Projektmanager für Ihre Projekte'
    },
    {
      icon: 'certificate',
      title: 'Compliance-Garantie',
      description: 'Alle gesetzlichen Vorgaben werden eingehalten'
    },
    {
      icon: 'euro',
      title: 'Transparente Abrechnung',
      description: 'Detaillierte Leistungsnachweise und flexible Zahlungsziele'
    },
    {
      icon: 'shield',
      title: 'Versicherungsschutz',
      description: 'Umfassender Versicherungsschutz bis 10 Mio. Euro'
    }
  ];

  const branchen = [
    'Bauunternehmen',
    'Immobilienverwaltungen',
    'Wohnungsbaugesellschaften',
    'Industrieunternehmen',
    'Öffentliche Auftraggeber',
    'Architekturbüros',
    'Facility Management',
    'Projektentwickler'
  ];

  const referenzen = [
    {
      projekt: 'Industriehalle Frankfurt',
      umfang: '5.000 m² Asbestdach',
      dauer: '3 Wochen'
    },
    {
      projekt: 'Wohnanlage Berlin',
      umfang: '12 Gebäude, Fassadensanierung',
      dauer: '2 Monate'
    },
    {
      projekt: 'Bürokomplex München',
      umfang: 'Komplettsanierung inkl. PCB',
      dauer: '6 Wochen'
    },
    {
      projekt: 'Schulgebäude Hamburg',
      umfang: 'Asbestsanierung in den Ferien',
      dauer: '4 Wochen'
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
              B2B Partnerschaften
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Maßgeschneiderte Lösungen für Unternehmen, Bauträger und öffentliche Auftraggeber
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
              Ihr verlässlicher Partner für Großprojekte
            </h2>
            <p className="text-lg text-gray-600">
              Als zertifizierter Fachbetrieb sind wir auf die Zusammenarbeit mit 
              Unternehmen spezialisiert. Wir verstehen die besonderen Anforderungen 
              von Geschäftskunden und bieten maßgeschneiderte Lösungen für Projekte 
              jeder Größenordnung.
            </p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Ihre Vorteile als Geschäftskunde
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

      {/* Branchen Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                Branchen die uns vertrauen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wir arbeiten erfolgreich mit Unternehmen aus verschiedensten 
                Branchen zusammen und kennen die spezifischen Anforderungen 
                jedes Sektors.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {branchen.map((branche, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-[#0066CC] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{branche}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Präqualifikation & Zertifikate
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="certificate" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>TRGS 519 Sachkundenachweis</span>
                </li>
                <li className="flex items-start">
                  <Icon name="certificate" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>DIN ISO 9001:2015 zertifiziert</span>
                </li>
                <li className="flex items-start">
                  <Icon name="certificate" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Präqualifiziert für öffentliche Aufträge</span>
                </li>
                <li className="flex items-start">
                  <Icon name="certificate" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>BG BAU Mitglied</span>
                </li>
                <li className="flex items-start">
                  <Icon name="certificate" size={20} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Entsorgungsfachbetrieb</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Referenzen Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Aktuelle Referenzprojekte
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {referenzen.map((referenz, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-lg mb-3">{referenz.projekt}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Umfang:</span> {referenz.umfang}
                  </div>
                  <div>
                    <span className="font-semibold">Dauer:</span> {referenz.dauer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-gray-600">
            Gerne senden wir Ihnen detaillierte Referenzen auf Anfrage zu.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
            Spezielle B2B-Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="document" size={40} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Ausschreibungsbegleitung</h3>
              <p className="text-gray-600">
                Unterstützung bei der Erstellung von Leistungsverzeichnissen 
                und Ausschreibungsunterlagen
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="clock" size={40} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Projektmanagement</h3>
              <p className="text-gray-600">
                Komplette Projektabwicklung inkl. Koordination mit anderen 
                Gewerken und Behörden
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="team" size={40} color="white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Schulungen</h3>
              <p className="text-gray-600">
                Mitarbeiterschulungen zum Umgang mit Asbest und anderen 
                Schadstoffen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Werden Sie unser B2B-Partner
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Profitieren Sie von unserer Expertise und maßgeschneiderten 
            Lösungen für Ihr Unternehmen. Lassen Sie uns über Ihre 
            Anforderungen sprechen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Beratungstermin vereinbaren
            </Link>
            <a
              href="tel:+4908002723781"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066CC] font-bold py-4 px-8 rounded-lg text-lg transition-all inline-flex items-center justify-center"
            >
              <Icon name="telefon" size={24} className="mr-2" />
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}