'use client';

import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function Datenschutz() {
  return (
    <>
      <main className="overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white min-h-screen">
        {/* Floating Logo and Menu */}
        <FloatingElements />
        
        <div className="px-[5vw] pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
                Datenschutzerklärung
              </h1>
              <p className="text-xl text-white/80">Transparenter Umgang mit Ihren persönlichen Daten</p>
            </div>
            
            <div className="space-y-8">
              {/* Quick Overview */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Datenschutz auf einen Blick
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Was wir sammeln
                    </h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Name und Kontaktdaten</li>
                      <li>• Projektinformationen</li>
                      <li>• Terminwünsche</li>
                      <li>• Nachrichtenverlauf</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Warum wir es nutzen
                    </h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Angebotserstellung</li>
                      <li>• Terminavereinbarung</li>
                      <li>• Projektabwicklung</li>
                      <li>• Kundensupport</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Ihre Rechte
                    </h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Auskunftsrecht</li>
                      <li>• Löschung möglich</li>
                      <li>• Datenportabilität</li>
                      <li>• Widerspruchsrecht</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/30">
                  <p className="text-white font-semibold text-center">
                    Ihre Daten sind sicher • SSL-Verschlüsselung • Keine Weitergabe an Dritte • DSGVO-konform
                  </p>
                </div>
              </section>

              {/* Detailed Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h2 className="text-xl font-bold text-cerulean mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Kontaktformulare
                  </h2>
                  <div className="space-y-3 text-white/80 text-sm">
                    <p>Wenn Sie unsere Kontaktformulare nutzen, speichern wir:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Ihre Kontaktdaten</li>
                      <li>• Projektbeschreibung</li>
                      <li>• Gewählte Services</li>
                      <li>• Zeitstempel der Anfrage</li>
                    </ul>
                    <p className="text-cerulean font-semibold">Löschung auf Wunsch jederzeit möglich</p>
                  </div>
                </section>

                <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h2 className="text-xl font-bold text-cerulean mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Telefonkontakt
                  </h2>
                  <div className="space-y-3 text-white/80 text-sm">
                    <p>Bei Anrufen speichern wir:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Ihre Telefonnummer</li>
                      <li>• Datum und Uhrzeit</li>
                      <li>• Gesprächsnotizen</li>
                      <li>• Vereinbarte Termine</li>
                    </ul>
                    <p className="text-cerulean font-semibold">Nur für Projektabwicklung verwendet</p>
                  </div>
                </section>

                <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h2 className="text-xl font-bold text-cerulean mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    Website-Nutzung
                  </h2>
                  <div className="space-y-3 text-white/80 text-sm">
                    <p>Automatisch erfasste Daten:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• IP-Adresse (anonymisiert)</li>
                      <li>• Browsertyp und -version</li>
                      <li>• Besuchte Seiten</li>
                      <li>• Verweildauer</li>
                    </ul>
                    <p className="text-cerulean font-semibold">Keine Tracking-Cookies verwendet</p>
                  </div>
                </section>

                <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h2 className="text-xl font-bold text-cerulean mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Datensicherheit
                  </h2>
                  <div className="space-y-3 text-white/80 text-sm">
                    <p>Unsere Sicherheitsmaßnahmen:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• SSL-Verschlüsselung (256-bit)</li>
                      <li>• Sichere Server in Deutschland</li>
                      <li>• Regelmäßige Backups</li>
                      <li>• Zugriffsbeschränkungen</li>
                    </ul>
                    <p className="text-cerulean font-semibold">ISO 27001 zertifiziert</p>
                  </div>
                </section>
              </div>

              {/* Verantwortliche Stelle */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
                  </svg>
                  Verantwortliche Stelle
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-white mb-3">Datenschutzbeauftragter</h3>
                    <div className="space-y-1 text-white/80">
                      <p className="font-semibold text-white">RückbauPRO Deutschland</p>
                      <p>Wertvoll Dienstleistungen GmbH</p>
                      <p>Waldbadstraße 9–13</p>
                      <p>33803 Steinhagen</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-3">Kontakt für Datenschutzfragen</h3>
                    <div className="space-y-2">
                      <p className="text-white/80">
                        <span className="font-semibold text-white">E-Mail:</span> 
                        <a href="mailto:datenschutz@rueckbaupro.de" className="text-cerulean hover:underline ml-2">datenschutz@rueckbaupro.de</a>
                      </p>
                      <p className="text-white/80">
                        <span className="font-semibold text-white">Telefon:</span> 
                        <span className="ml-2">+49 174 8083023</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ihre Rechte */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Ihre Datenschutz-Rechte
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Auskunftsrecht (Art. 15 DSGVO)</h4>
                      <p className="text-white/80 text-sm">Erfahren Sie, welche Daten wir über Sie gespeichert haben</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Berichtigung (Art. 16 DSGVO)</h4>
                      <p className="text-white/80 text-sm">Korrektur unrichtiger persönlicher Daten</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Löschung (Art. 17 DSGVO)</h4>
                      <p className="text-white/80 text-sm">Löschung Ihrer Daten unter bestimmten Voraussetzungen</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Einschränkung (Art. 18 DSGVO)</h4>
                      <p className="text-white/80 text-sm">Einschränkung der Verarbeitung Ihrer Daten</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Datenübertragung (Art. 20 DSGVO)</h4>
                      <p className="text-white/80 text-sm">Erhalt Ihrer Daten in strukturiertem Format</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Widerspruch (Art. 21 DSGVO)</h4>
                      <p className="text-white/80 text-sm">Widerspruch gegen die Datenverarbeitung</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Hosting und Technik */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Hosting und Server
                </h2>
                <div className="space-y-3 text-white/80">
                  <p>• <strong>Serverstandort:</strong> Deutschland (DSGVO-konform)</p>
                  <p>• <strong>Hosting-Partner:</strong> Zertifizierte deutsche Anbieter</p>
                  <p>• <strong>Datentransfer:</strong> Keine Übertragung in Drittländer</p>
                  <p>• <strong>Speicherdauer:</strong> Projektdaten 3 Jahre, Kontaktdaten bis Widerruf</p>
                </div>
              </section>

              <div className="mt-12 p-6 bg-white/5 backdrop-blur-md rounded-lg border border-white/20 text-center">
                <p className="text-white/80 mb-3">
                  <strong>Stand:</strong> Januar 2024 • <strong>Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-DE')}
                </p>
                <p className="text-white/60 text-sm">
                  Bei Fragen zum Datenschutz kontaktieren Sie uns unter 
                  <a href="mailto:datenschutz@rueckbaupro.de" className="text-cerulean hover:underline ml-1">datenschutz@rueckbaupro.de</a>
                </p>
              </div>
            </div>
            
            <section className="pt-8 border-t border-white/20">
              <div className="text-center">
                <button 
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Zurück zur Startseite
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <FooterWithMarquee />
    </>
  );
}