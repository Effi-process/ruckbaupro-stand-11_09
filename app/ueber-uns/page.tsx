import Image from 'next/image';
import Link from 'next/link';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function UeberUns() {
  const milestones = [
    { year: '2024', event: 'Gründung der RückbauPRO als innovatives Unternehmen' },
    { year: '2024', event: 'Modernste Ausrüstung und Technik beschafft' },
    { year: '2024', event: 'Team aus erfahrenen Fachkräften zusammengestellt' },
    { year: '2024', event: 'Alle erforderlichen Zertifizierungen erhalten' },
    { year: '2024', event: 'Vollversicherung und Qualitätsmanagement etabliert' },
    { year: '2025', event: 'Bereit für Ihre Projekte - starten Sie mit uns durch!' }
  ];

  const values = [
    {
      icon: 'shield',
      title: 'Sicherheit',
      description: 'Höchste Sicherheitsstandards für Mitarbeiter und Kunden'
    },
    {
      icon: 'certificate',
      title: 'Qualität',
      description: 'Zertifizierte Verfahren und kontinuierliche Weiterbildung'
    },
    {
      icon: 'leaf',
      title: 'Umweltschutz',
      description: 'Nachhaltige Entsorgung und Ressourcenschonung'
    },
    {
      icon: 'team',
      title: 'Vertrauen',
      description: 'Transparente Kommunikation und faire Preise'
    }
  ];

  const team = [
    {
      name: 'Gründer 1',
      position: 'Technische Leitung',
      qualification: 'TRGS 519 zertifiziert • Experte für komplexe Sanierungsprojekte und Qualitätssicherung'
    },
    {
      name: 'Gründer 2', 
      position: 'Projektmanagement',
      qualification: 'Spezialist für Projektplanung • Koordination und termingerechte Ausführung aller Arbeiten'
    },
    {
      name: 'Gründer 3',
      position: 'Kundenbetreuung',
      qualification: 'Verantwortlich für Beratung • Persönliche Betreuung und transparente Kommunikation'
    }
  ];

  return (
    <main className="relative">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
                ÜBER UNS
              </h1>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Ihr neuer, hochmotivierter Partner für professionellen Rückbau und Schadstoffsanierung in Deutschland.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Das motivierte RückbauPRO Dreier-Gespann
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                Unser Gründerteam besteht aus drei hochmotivierten Experten, die 
                gemeinsam RückbauPRO ins Leben gerufen haben. Mit unterschiedlichen 
                Spezialisierungen und jahrelanger Erfahrung im Rückbau- und 
                Sanierungsbereich bilden sie das perfekte Team für Ihre Projekte.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Jeder der drei Gründer bringt seine eigene Expertise mit: Von der 
                technischen Projektleitung über die Qualitätssicherung bis hin zur 
                Kundenbetreuung. Gemeinsam haben sie alle erforderlichen TRGS 519 
                Zertifizierungen erworben und modernste Ausrüstung angeschafft.
              </p>
              <p className="text-lg text-gray-300">
                Diese einzigartige Kombination aus Motivation, Fachwissen und 
                Teamgeist macht RückbauPRO zu Ihrem idealen Partner. Das Dreier-Gespann 
                steht für Zuverlässigkeit, Qualität und persönliche Betreuung auf 
                höchstem Niveau.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-photo.jpeg"
                alt="Das motivierte RückbauPRO Dreier-Gespann"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Unsere Werte
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={40} color="white" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Unser Weg zu Ihrem neuen Partner
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-[#0066CC] font-bold text-xl mb-2">{milestone.year}</div>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0066CC] rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Das motivierte Dreier-Gespann im Detail
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Drei Experten, eine Vision: Professioneller Rückbau und Schadstoffsanierung auf höchstem Niveau
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-[#0066CC] font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-600">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Zertifizierungen & Mitgliedschaften
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Icon name="certificate" size={64} className="mx-auto mb-4 text-[#0066CC]" />
                <h3 className="font-bold text-xl mb-2">TRGS 519</h3>
                <p className="text-gray-600">
                  Sachkunde für Asbestabbruch-, -sanierungs- und -instandhaltungsarbeiten
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Icon name="shield" size={64} className="mx-auto mb-4 text-[#0066CC]" />
                <h3 className="font-bold text-xl mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600">
                  Zertifiziertes Qualitätsmanagementsystem
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Icon name="award" size={64} className="mx-auto mb-4 text-[#0066CC]" />
                <h3 className="font-bold text-xl mb-2">BG BAU</h3>
                <p className="text-gray-600">
                  Mitglied der Berufsgenossenschaft der Bauwirtschaft
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Lassen Sie uns gemeinsam Ihr Projekt besprechen. 
            Wir beraten Sie gerne unverbindlich und kompetent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/zertifikate"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066CC] font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              Zertifikate ansehen
            </Link>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}