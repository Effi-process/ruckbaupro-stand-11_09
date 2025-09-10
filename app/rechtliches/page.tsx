'use client';

import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';

export default function RechtlichesPage() {
  return (
    <main className="overflow-hidden">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Impressum & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerulean to-indigo-dye">Datenschutz</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Rechtliche Informationen zu RückbauPRO - transparent und verständlich.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white">
        {/* Navigation */}
        <section className="py-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#impressum" className="px-6 py-3 bg-cerulean text-white rounded-full font-semibold hover:bg-indigo-dye transition-colors">
                Impressum
              </a>
              <a href="#datenschutz" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </section>

        {/* Impressum Section */}
        <section id="impressum" className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-oxford-blue mb-8">Impressum</h2>
            
            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Angaben gemäß § 5 TMG</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="font-semibold text-lg mb-2">RückbauPRO GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>33602 Bielefeld</p>
                  <p className="mt-4">
                    <strong>Telefon:</strong> +49 174 8083023<br />
                    <strong>E-Mail:</strong> info@rueckbaupro.de<br />
                    <strong>Website:</strong> www.rueckbaupro.de
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Vertreten durch</h3>
                <p>Geschäftsführer: Max Mustermann</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Registereintrag</h3>
                <p>
                  Eintragung im Handelsregister<br />
                  Registergericht: Amtsgericht Bielefeld<br />
                  Registernummer: HRB 12345
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Umsatzsteuer-ID</h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE123456789
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Aufsichtsbehörde</h3>
                <p>
                  Gewerbeaufsichtsamt Bielefeld<br />
                  Muster-Behördenstraße 45<br />
                  33602 Bielefeld
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Berufshaftpflichtversicherung</h3>
                <p>
                  <strong>Versicherer:</strong> Muster-Versicherung AG<br />
                  <strong>Geltungsraum:</strong> Deutschland<br />
                  <strong>Versicherungssumme:</strong> 10.000.000 EUR
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>
                  Max Mustermann<br />
                  RückbauPRO GmbH<br />
                  Musterstraße 123<br />
                  33602 Bielefeld
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">EU-Streitschlichtung</h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cerulean hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a><br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Haftung für Inhalte</h3>
                <p className="mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
                  werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Haftung für Links</h3>
                <p className="mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">Urheberrecht</h3>
                <p className="mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                  beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
                  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden 
                  von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Datenschutz Section */}
        <section id="datenschutz" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-black text-oxford-blue mb-8">Datenschutzerklärung</h2>
            
            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">1. Datenschutz auf einen Blick</h3>
                <h4 className="text-lg font-semibold mb-3">Allgemeine Hinweise</h4>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Datenerfassung auf dieser Website</h4>
                <p className="mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Impressum dieser Website entnehmen.
                </p>
                <p className="mb-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                  Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer 
                  Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                </p>
                <p>
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">2. Hosting</h3>
                <p className="mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <h4 className="text-lg font-semibold mb-3">Externes Hosting</h4>
                <p className="mb-4">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und 
                  sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                <p>
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                  bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                  effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <h4 className="text-lg font-semibold mb-3">Datenschutz</h4>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
                  dieser Datenschutzerklärung.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Hinweis zur verantwortlichen Stelle</h4>
                <p className="mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p>
                    RückbauPRO GmbH<br />
                    Musterstraße 123<br />
                    33602 Bielefeld<br />
                    Deutschland
                  </p>
                  <p className="mt-2">
                    Telefon: +49 174 8083023<br />
                    E-Mail: info@rueckbaupro.de
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">4. Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-semibold mb-3">Kontaktformular</h4>
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
                  In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung 
                  (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">5. Ihre Rechte</h3>
                <p className="mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung Ihrer Daten</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
                  <li>Recht auf Widerruf einer erteilten Einwilligung</li>
                </ul>
                <p>
                  Zur Ausübung dieser Rechte können Sie sich jederzeit an uns wenden. 
                  Die Kontaktdaten finden Sie im Impressum.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-oxford-blue mb-4">6. SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                  Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. 
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf 
                  „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                  nicht von Dritten mitgelesen werden.
                </p>
              </div>

              <div className="bg-cerulean/10 rounded-lg p-6 border border-cerulean/20">
                <h3 className="text-lg font-bold text-oxford-blue mb-3">Fragen zum Datenschutz?</h3>
                <p className="mb-4">
                  Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten kontaktieren Sie uns gerne:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:info@rueckbaupro.de" className="inline-flex items-center gap-2 px-4 py-2 bg-cerulean text-white rounded-lg hover:bg-indigo-dye transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    E-Mail senden
                  </a>
                  <a href="tel:+4917480830230" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-cerulean text-cerulean rounded-lg hover:bg-cerulean hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Anrufen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <FooterWithMarquee />
    </main>
  );
}