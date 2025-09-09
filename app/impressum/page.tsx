'use client';

import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingMenuButton from '../components/FloatingMenuButton';
import LogoComponent from '../components/LogoComponent';

export default function Impressum() {
  return (
    <>
      <main className="overflow-hidden relative bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white min-h-screen">
        {/* Logo fixed in top-left corner */}
        <div className="fixed top-4 left-4 z-40">
          <div className="bg-gradient-to-br from-cerulean to-indigo-dye p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-3">
              <LogoComponent width={150} height={60} />
            </div>
          </div>
        </div>

        {/* Floating Menu Container */}
        <div className="fixed top-4 right-4 z-50">
          <FloatingMenuButton />
        </div>

        <div className="px-[5vw] py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
                Impressum
              </h1>
            </div>
          
            <div className="space-y-12 text-white/90">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                <p>
                  Wertvoll Dienstleistungen GmbH<br />
                  handelnd unter dem Namen &bdquo;RückbauPRO&ldquo;<br />
                  Waldbadstraße 9–13<br />
                  33803 Steinhagen
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Vertreten durch</h2>
                <p>
                  Geschäftsführer: Michael Michailowski<br />
                  Geschäftsführer: Markus Knaub<br />
                  Geschäftsführer: Sergej Schulz
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                <p>
                  Telefon: 0800 0060970<br />
                  E-Mail: info@abriss-schmiede.de
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Registereintrag</h2>
                <p>
                  Eintragung im Handelsregister<br />
                  Registergericht: Amtsgericht Bielefeld<br />
                  Registernummer: HRB 45873
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
                <p>
                  Steuernummer: 305/5883/3310
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>
                  Berufsbezeichnung: Asbestsanierungsfachbetrieb<br />
                  Zuständige Kammer: Handwerkskammer Ostwestfalen-Lippe zu Bielefeld<br />
                  Verliehen durch: Deutschland<br />
                  Es gelten folgende berufsrechtliche Regelungen: TRGS 519
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Angaben zur Berufshaftpflichtversicherung</h2>
                <p>
                  Name und Sitz des Versicherers:<br />
                  Allianz Versicherungs-AG<br />
                  Königinstraße 28<br />
                  80802 München<br />
                  <br />
                  Geltungsraum der Versicherung: Deutschland<br />
                  Versicherungssumme: 10.000.000 EUR
                </p>
              </section>

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