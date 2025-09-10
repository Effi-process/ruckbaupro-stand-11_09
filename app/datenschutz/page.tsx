'use client';

import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function Datenschutz() {
  return (
    <>
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      <main className="overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white min-h-screen">
        <div className="px-[5vw] pt-32 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
              <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
                Datenschutzerklärung
              </h1>
            </div>
            
            <div className="space-y-12 text-white/90">
            <section>
              <h2 className="text-2xl font-bold text-white mb-3">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Datenerfassung auf dieser Website</h3>
              <p className="mb-2">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="mb-2">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst 
                werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. 
                um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, 
                Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-2">
                Asbest Sanierung GmbH<br />
                Dr. Michael Schmidt<br />
                Musterstraße 123<br />
                10115 Berlin<br />
                <br />
                Telefon: +49 (0) 800 2723781<br />
                E-Mail: info@asbestsanierung.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und 
                richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer 
                einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller 
                daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres 
                Anliegens bei uns gespeichert und verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">6. Analyse-Tools und Werbung</h2>
              <p>
                Diese Website nutzt keine Analyse-Tools oder Werbedienste von Drittanbietern.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">7. Newsletter</h2>
              <p>
                Derzeit bieten wir keinen Newsletter-Service an.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-3">8. Plugins und Tools</h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">YouTube ohne erweitertes Tracking</h3>
              <p>
                Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die 
                Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>

              <h3 className="text-xl font-semibold mt-4 mb-2 text-white/80">Google Maps</h3>
              <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited 
                („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
            </section>

            <div className="mt-8 p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/20">
              <p className="text-sm text-white/60">
                Stand: Januar 2024
              </p>
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
      </div>
    </main>
    
    <FooterWithMarquee />
    </>
  );
}