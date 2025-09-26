'use client';

import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function AGB() {
  return (
    <>
      <main className="overflow-hidden relative bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white min-h-screen">
        {/* Floating Logo and Menu */}
        <FloatingElements />

        <div className="px-[5vw] pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-xl text-white/80">Professionelle Schadstoffsanierung - Faire Konditionen</p>
              
              <div className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/90 font-semibold">Transparente Geschäftsbedingungen</span>
              </div>
            </div>
          
            <div className="space-y-8">
              {/* Geltungsbereich */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  § 1 Geltungsbereich
                </h2>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <p className="text-white/80 leading-relaxed mb-4">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über <strong className="text-white">Schadstoffsanierung, 
                    Rückbau- und Abbrucharbeiten</strong> zwischen der <strong className="text-cerulean">Wertvoll Dienstleistungen GmbH</strong> 
                    (handelnd als "RückbauPRO") und ihren Auftraggebern.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Geltung für:</h4>
                      <ul className="space-y-1 text-white/70 text-sm">
                        <li>• Asbestsanierung nach TRGS 519</li>
                        <li>• KMF-Sanierung</li>
                        <li>• Schimmelsanierung</li>
                        <li>• Betonarbeiten und Entkernung</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Ausschluss:</h4>
                      <ul className="space-y-1 text-white/70 text-sm">
                        <li>• Abweichende Kundenbedingungen</li>
                        <li>• Mündliche Nebenabreden</li>
                        <li>• Änderungen ohne Schriftform</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vertragsschluss */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  § 2 Vertragsschluss und Angebot
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="font-bold text-white mb-4">Kostenlose Leistungen</h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Erstberatung und Besichtigung</li>
                      <li>• Detaillierte Kostenschätzung</li>
                      <li>• Angebotserstellung</li>
                      <li>• Beratung zu Fördermöglichkeiten</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-6">
                    <h3 className="font-bold text-white mb-4">Angebot & Vertrag</h3>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>• Angebote 30 Tage gültig</li>
                      <li>• Festpreisgarantie nach Besichtigung</li>
                      <li>• Vertrag durch Auftragsbestätigung</li>
                      <li>• Keine versteckten Kosten</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Preise und Zahlung */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  § 3 Preise und Zahlung
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white mb-2">Festpreise</h4>
                    <p className="text-white/70 text-sm">Alle Preise zzgl. 19% MwSt. - Keine Nachforderungen</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white mb-2">Zahlungsziel</h4>
                    <p className="text-white/70 text-sm">14 Tage netto - Finanzierung möglich</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white mb-2">Mehrkosten</h4>
                    <p className="text-white/70 text-sm">Nur nach vorheriger Absprache und Genehmigung</p>
                  </div>
                </div>
              </section>

              {/* Sicherheit und Qualität */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  § 4 Sicherheit und Qualitätsstandards
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        TRGS 519 Konformität
                      </h4>
                      <p className="text-white/80 text-sm">Alle Schadstoffarbeiten erfolgen ausschließlich nach den neuesten Technischen Regeln für Gefahrstoffe</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Qualifiziertes Personal
                      </h4>
                      <p className="text-white/80 text-sm">Nur zertifizierte Sachkundige nach Anlage 3 TRGS 519 führen Asbestarbeiten durch</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Moderne Ausrüstung
                      </h4>
                      <p className="text-white/80 text-sm">Neueste Absaugtechnik, Unterdruckhaltung und Schutzausrüstung</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Lückenlose Dokumentation
                      </h4>
                      <p className="text-white/80 text-sm">Vollständige Arbeits-, Mess- und Entsorgungsdokumentation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Arbeitsschutz
                      </h4>
                      <p className="text-white/80 text-sm">Unbefugten ist der Zutritt zu Arbeitsbereichen strengstens untersagt</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Umweltschutz
                      </h4>
                      <p className="text-white/80 text-sm">Fachgerechte Entsorgung über zugelassene Entsorgungsanlagen</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Haftung und Versicherung */}
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                § 5 Haftung und Versicherung
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-4">
                    Versicherungsschutz
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white font-semibold">Berufshaftpflicht</p>
                      <p className="text-cerulean text-xl font-bold">10.000.000 EUR</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Betriebshaftpflicht</p>
                      <p className="text-cerulean text-xl font-bold">5.000.000 EUR</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-4">
                    Gewährleistung
                  </h3>
                  <div className="space-y-2 text-white/80 text-sm">
                    <p>• <strong>Sanierungsarbeiten:</strong> 24 Monate</p>
                    <p>• <strong>Freimessung:</strong> Garantiert unter Grenzwert</p>
                    <p>• <strong>Dokumentation:</strong> Rechtssichere Nachweise</p>
                    <p>• <strong>Nachbesserung:</strong> Kostenfrei bei Mängeln</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Termine und Fristen */}
            <div className="grid md:grid-cols-2 gap-6">
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-4 flex items-center gap-2">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  § 6 Termine
                </h2>
                <div className="space-y-3 text-white/80">
                  <p>• <strong className="text-white">Terminbindung:</strong> Vereinbarte Termine sind verbindlich</p>
                  <p>• <strong className="text-white">Änderungen:</strong> Bis 48h vorher kostenfrei möglich</p>
                  <p>• <strong className="text-white">Witterung:</strong> Außenarbeiten wetterabhängig</p>
                  <p>• <strong className="text-white">Notdienst:</strong> 24/7 verfügbar (gegen Aufpreis)</p>
                </div>
              </section>

              <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-4 flex items-center gap-2">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  § 7 Rechtliches
                </h2>
                <div className="space-y-3 text-white/80">
                  <p>• <strong className="text-white">Gerichtsstand:</strong> Bielefeld</p>
                  <p>• <strong className="text-white">Anwendbares Recht:</strong> Deutsches Recht</p>
                  <p>• <strong className="text-white">Salvatorische Klausel:</strong> Bei Unwirksamkeit einzelner Bestimmungen</p>
                  <p>• <strong className="text-white">Schriftform:</strong> Änderungen nur schriftlich wirksam</p>
                </div>
              </section>
            </div>

            {/* Besondere Bestimmungen */}
            <section className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-cerulean mb-6 flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                § 8 Besondere Bestimmungen für Schadstoffsanierung
              </h2>
              <div className="bg-white/5 rounded-lg p-6 border border-white/20">
                <h3 className="font-bold text-white mb-4">Wichtige Sicherheitsbestimmungen</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• <strong>Zutrittsverbot</strong> für Unbefugte während der Arbeiten</li>
                    <li>• <strong>Meldepflichten</strong> bei bestimmten Schadstoffarten</li>
                    <li>• <strong>Baustellen-Sicherung</strong> nach BaustellV</li>
                    <li>• <strong>Luftmessungen</strong> vor, während und nach den Arbeiten</li>
                  </ul>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• <strong>Entsorgungsnachweise</strong> gemäß KrWG</li>
                    <li>• <strong>Arbeitsplan</strong> nach TRGS 519</li>
                    <li>• <strong>Behördliche Kontrollen</strong> jederzeit möglich</li>
                    <li>• <strong>Abschlusskontrolle</strong> und Freigabemessung</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="mt-12 p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/20 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Kontakt für rechtliche Fragen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/80 text-sm mb-1">Geschäftsbedingungen</p>
                  <a href="mailto:recht@rueckbaupro.de" className="text-cerulean hover:underline font-semibold">recht@rueckbaupro.de</a>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Allgemeine Anfragen</p>
                  <a href="mailto:info@rueckbaupro.de" className="text-cerulean hover:underline font-semibold">info@rueckbaupro.de</a>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">
                <strong>Stand:</strong> Januar 2024 • <strong>Version:</strong> 2.1 • <strong>RückbauPRO Deutschland</strong>
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