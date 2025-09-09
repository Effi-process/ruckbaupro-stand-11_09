import FloatingMenuButton from '../components/FloatingMenuButton';
import LogoComponent from '../components/LogoComponent';

export default function AGB() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        {/* Logo fixed in top-left corner */}
        <div className="fixed top-4 left-4 z-40">
          <div className="bg-gradient-to-br from-cerulean to-indigo-dye p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-3">
              <LogoComponent width={150} height={60} />
            </div>
          </div>
        </div>

        {/* Floating Menu Container */}
        <div className="absolute top-4 right-4 z-50">
          <FloatingMenuButton />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center pt-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
                AGB
              </h1>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
              Allgemeine Geschäftsbedingungen der RückbauPRO
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 bg-gradient-to-b from-oxford-blue to-gray-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-8">Allgemeine Geschäftsbedingungen</h2>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-[#2C4F5E] mb-3">§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der 
                Asbest Sanierung GmbH und ihren Auftraggebern über Schadstoffsanierungsleistungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C4F5E] mb-3">§ 2 Vertragsschluss</h2>
              <p>
                Unsere Angebote sind freibleibend. Ein Vertrag kommt erst durch unsere schriftliche 
                Auftragsbestätigung oder durch Beginn der Ausführung zustande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C4F5E] mb-3">§ 3 Leistungsumfang</h2>
              <p>
                Der Umfang der von uns zu erbringenden Leistungen ergibt sich aus der 
                Auftragsbestätigung. Änderungen bedürfen der Schriftform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C4F5E] mb-3">§ 4 Preise und Zahlung</h2>
              <p>
                Es gelten die in der Auftragsbestätigung genannten Preise zuzüglich der 
                gesetzlichen Mehrwertsteuer. Zahlungen sind innerhalb von 14 Tagen nach 
                Rechnungsstellung fällig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C4F5E] mb-3">§ 5 Haftung</h2>
              <p>
                Wir haften nach den gesetzlichen Bestimmungen. Die Haftung für leichte 
                Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten 
                verletzt werden.
              </p>
            </section>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                Stand: Januar 2024
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}