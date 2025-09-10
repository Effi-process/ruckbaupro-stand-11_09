'use client'
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function Karriere() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const stellenangebote = [
    {
      id: 1,
      titel: 'Asbestsanierer (m/w/d)',
      standort: 'Berlin / Deutschlandweit',
      art: 'Vollzeit',
      beschreibung: 'Wir suchen erfahrene Asbestsanierer mit TRGS 519 Sachkundenachweis für spannende Projekte.',
      anforderungen: [
        'TRGS 519 Sachkundenachweis (kann nachgeholt werden)',
        'Körperliche Fitness und Belastbarkeit',
        'Teamfähigkeit und Zuverlässigkeit',
        'Führerschein Klasse B von Vorteil',
        'Reisebereitschaft'
      ],
      leistungen: [
        'Übertarifliche Bezahlung',
        'Gefahrenzulage',
        'Moderne Schutzausrüstung',
        'Fortbildungsmöglichkeiten',
        'Firmenfahrzeug'
      ]
    },
    {
      id: 2,
      titel: 'Bauleiter Schadstoffsanierung (m/w/d)',
      standort: 'Berlin',
      art: 'Vollzeit',
      beschreibung: 'Für die Leitung unserer Sanierungsprojekte suchen wir einen erfahrenen Bauleiter.',
      anforderungen: [
        'Abgeschlossenes Studium Bauingenieurwesen oder vergleichbar',
        'Mehrjährige Erfahrung in der Schadstoffsanierung',
        'TRGS 519 und VDI 3492 Kenntnisse',
        'Führungserfahrung',
        'Sehr gute Deutschkenntnisse'
      ],
      leistungen: [
        'Attraktives Gehalt plus Prämien',
        'Dienstwagen auch zur privaten Nutzung',
        'Flexible Arbeitszeiten',
        'Homeoffice-Möglichkeit',
        'Betriebliche Altersvorsorge'
      ]
    },
    {
      id: 3,
      titel: 'Schadstoffgutachter (m/w/d)',
      standort: 'Berlin / Hamburg',
      art: 'Vollzeit',
      beschreibung: 'Verstärken Sie unser Team als Experte für Schadstoffanalysen und Gutachten.',
      anforderungen: [
        'Studium Chemie, Umwelttechnik oder vergleichbar',
        'Erfahrung in der Probenahme nach VDI 3492',
        'Kenntnisse in Gebäudeschadstoffen',
        'Analytisches Denkvermögen',
        'Selbstständige Arbeitsweise'
      ],
      leistungen: [
        'Interessante und abwechslungsreiche Projekte',
        'Modernste Analysetechnik',
        'Weiterbildung zum Sachverständigen',
        'Flexible Arbeitszeiten',
        'Mobiles Arbeiten möglich'
      ]
    },
    {
      id: 4,
      titel: 'Auszubildende zum Asbestsanierer (m/w/d)',
      standort: 'Berlin',
      art: 'Ausbildung',
      beschreibung: 'Starte deine Karriere in einem zukunftssicheren Beruf mit besten Übernahmechancen.',
      anforderungen: [
        'Mindestens Hauptschulabschluss',
        'Handwerkliches Geschick',
        'Körperliche Fitness',
        'Verantwortungsbewusstsein',
        'Mindestalter 18 Jahre'
      ],
      leistungen: [
        'Überdurchschnittliche Ausbildungsvergütung',
        'Übernahmegarantie bei guten Leistungen',
        'Kostenlose Arbeitskleidung und PSA',
        'Prämien bei guten Berufsschulnoten',
        'Aufstiegschancen'
      ]
    }
  ];

  const benefits = [
    {
      icon: 'euro',
      title: 'Attraktive Vergütung',
      description: 'Übertarifliche Bezahlung plus Gefahrenzulagen'
    },
    {
      icon: 'shield',
      title: 'Sicherheit',
      description: 'Modernste Schutzausrüstung und regelmäßige Schulungen'
    },
    {
      icon: 'award',
      title: 'Weiterbildung',
      description: 'Fortbildungen und Aufstiegsmöglichkeiten'
    },
    {
      icon: 'team',
      title: 'Teamgeist',
      description: 'Kollegiales Arbeitsumfeld und flache Hierarchien'
    },
    {
      icon: 'clock',
      title: 'Work-Life-Balance',
      description: 'Flexible Arbeitszeiten und Überstundenausgleich'
    },
    {
      icon: 'certificate',
      title: 'Zukunftssicher',
      description: 'Krisensicherer Job in wachsender Branche'
    }
  ];

  return (
    <main className="relative">
      {/* Transparent Header */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center pt-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
                KARRIERE
              </h1>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Schadstoffsanierung
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Arbeiten mit Sinn und Perspektive
            </h2>
            <p className="text-lg text-gray-300">
              Bei uns arbeiten Sie nicht nur für ein Gehalt, sondern für die Sicherheit 
              und Gesundheit von Menschen. Als führendes Unternehmen in der Schadstoffsanierung 
              bieten wir Ihnen einen sicheren Arbeitsplatz mit hervorragenden Entwicklungsmöglichkeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Was wir Ihnen bieten
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0066CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} color="white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Aktuelle Stellenangebote
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Job List */}
            <div className="space-y-4">
              {stellenangebote.map((stelle) => (
                <div
                  key={stelle.id}
                  onClick={() => setSelectedJob(stelle.id)}
                  className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all ${
                    selectedJob === stelle.id ? 'ring-2 ring-[#0066CC]' : 'hover:shadow-xl'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-[#2C4F5E]">{stelle.titel}</h3>
                    <span className="bg-[#0066CC] text-white px-3 py-1 rounded-full text-sm">
                      {stelle.art}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {stelle.standort}
                  </div>
                  <p className="mt-3 text-gray-600">{stelle.beschreibung}</p>
                </div>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:sticky lg:top-24">
              {selectedJob ? (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  {stellenangebote.filter(s => s.id === selectedJob).map(stelle => (
                    <div key={stelle.id}>
                      <h3 className="font-bold text-2xl text-[#2C4F5E] mb-4">
                        {stelle.titel}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-lg mb-3">Ihre Aufgaben:</h4>
                        <p className="text-gray-600">{stelle.beschreibung}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-lg mb-3">Das bringen Sie mit:</h4>
                        <ul className="space-y-2">
                          {stelle.anforderungen.map((anf, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-[#0066CC] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{anf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-bold text-lg mb-3">Unsere Leistungen:</h4>
                        <ul className="space-y-2">
                          {stelle.leistungen.map((leistung, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-[#0066CC] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600">{leistung}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/kontakt"
                        className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                      >
                        Jetzt bewerben
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Icon name="document" size={64} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">
                    Wählen Sie eine Stelle aus, um Details zu sehen
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ihr Weg zu uns
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
              
              {[
                { step: '1', title: 'Bewerbung', desc: 'Online oder per E-Mail' },
                { step: '2', title: 'Erstgespräch', desc: 'Telefonisches Kennenlernen' },
                { step: '3', title: 'Vorstellungsgespräch', desc: 'Persönliches Treffen' },
                { step: '4', title: 'Probearbeit', desc: 'Optional: Ein Tag im Team' },
                { step: '5', title: 'Vertragsangebot', desc: 'Welcome to the team!' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div className="font-bold text-lg text-[#0066CC]">{item.title}</div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Starten Sie Ihre Karriere bei uns
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Auch wenn keine passende Stelle ausgeschrieben ist, freuen wir uns 
            über Ihre Initiativbewerbung. Wachsen Sie mit uns!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Initiativbewerbung senden
            </Link>
            <a
              href="mailto:karriere@asbestsanierung.de"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066CC] font-bold py-4 px-8 rounded-lg text-lg transition-all"
            >
              karriere@asbestsanierung.de
            </a>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}