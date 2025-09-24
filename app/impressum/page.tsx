'use client';

import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function Impressum() {
  return (
    <>
      <main className="overflow-hidden relative bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white min-h-screen">
        {/* Floating Logo and Menu */}
        <FloatingElements />

        <div className="px-[5vw] pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
                Impressum
              </h1>
            </div>
          
            <div className="space-y-12 text-white/90">
              <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0h6" />
                  </svg>
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-white">RückbauPRO Deutschland</p>
                  <p className="text-white/80">Eine Marke der Wertvoll Dienstleistungen GmbH</p>
                  <p className="text-white/70">
                    Waldbadstraße 9–13<br />
                    33803 Steinhagen<br />
                    Deutschland
                  </p>
                </div>
              </section>

              <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Geschäftsführung
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-semibold text-white">Michael Michailowski</p>
                    <p className="text-white/60 text-sm">Geschäftsführer</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-white">Markus Knaub</p>
                    <p className="text-white/60 text-sm">Geschäftsführer</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-white">Sergej Schulz</p>
                    <p className="text-white/60 text-sm">Geschäftsführer</p>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-cerulean mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Kontakt
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/80 text-sm mb-1">24/7 Hotline</p>
                    <p className="text-xl font-bold text-white">+49 174 8083023</p>
                    <p className="text-white/60 text-sm">Kostenlos aus dem deutschen Festnetz</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">E-Mail</p>
                    <a href="mailto:info@rueckbaupro.de" className="text-xl font-bold text-cerulean hover:underline">info@rueckbaupro.de</a>
                    <p className="text-white/60 text-sm">Antwort binnen 24 Stunden</p>
                  </div>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-6">
                <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h2 className="text-xl font-bold text-cerulean mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Registereintrag
                  </h2>
                  <div className="space-y-2 text-white/80">
                    <p><span className="font-semibold text-white">Registergericht:</span> Amtsgericht Bielefeld</p>
                    <p><span className="font-semibold text-white">Registernummer:</span> HRB 45873</p>
                    <p><span className="font-semibold text-white">Steuernummer:</span> 305/5883/3310</p>
                  </div>
                </section>

                <section className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h2 className="text-xl font-bold text-cerulean mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Zertifizierungen
                  </h2>
                  <div className="space-y-2 text-white/80">
                    <p><span className="font-semibold text-white">Fachbetrieb nach:</span> TRGS 519</p>
                    <p><span className="font-semibold text-white">Kammer:</span> HWK Ostwestfalen-Lippe</p>
                    <p><span className="font-semibold text-white">Berechtigung:</span> Asbestsanierung</p>
                  </div>
                </section>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  Michael Michailowski<br />
                  Wertvoll Dienstleistungen GmbH<br />
                  Waldbadstraße 9–13<br />
                  33803 Steinhagen
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cerulean hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>
          
            <section className="pt-8 border-t border-white/20">
              <div className="text-center">
                <button 
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                >
                  Zurück zur Startseite
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
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