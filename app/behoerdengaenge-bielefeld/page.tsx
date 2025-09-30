import type { Metadata } from 'next';
import BehoerdengaengeBielefeldClient from './BehoerdengaengeBielefeldClient';

export const metadata: Metadata = {
  title: 'Behördengänge Bielefeld - Abbruchgenehmigung & Bauanträge | RückbauPRO',
  description: 'Behördengänge Bielefeld: ✓ Abbruchgenehmigung ✓ Bauanträge ✓ Komplette behördliche Abwicklung ✓ Jetzt anrufen: 0521 9999 8480',
  keywords: 'Behördengänge Bielefeld, Abbruchgenehmigung Bielefeld, Bauanträge Bielefeld, Bauamt Bielefeld, Genehmigungen',
  openGraph: {
    title: 'Behördengänge Bielefeld - Wir übernehmen den Papierkram',
    description: 'Abbruchgenehmigungen, Bauanträge & behördliche Abwicklung in Bielefeld - alles aus einer Hand.',
    url: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld',
    siteName: 'RückbauPRO',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rueckbaupro.de/behoerdengaenge-bielefeld'
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BehoerdengaengeBielefeld() {
  return <BehoerdengaengeBielefeldClient />;
}
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-24 md:pb-32 flex content-center items-center justify-center min-h-[60vh] md:min-h-[75vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">
                  Behördengänge Bielefeld
                </h1>
                <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-300 px-4">
                  Abbruchgenehmigungen, Bauanträge & behördliche Abwicklung - Wir kümmern uns um den Papierkram
                </p>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <a
                    href="tel:+4952199998480"
                    className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center justify-center text-sm md:text-base"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    0521 9999 8480
                  </a>
                  <a
                    href="#kontakt"
                    className="bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center text-sm md:text-base"
                  >
                    Kostenloses Angebot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12 md:pb-20 bg-gray-900 -mt-24">
        <div className="container mx-auto px-4">
          {/* Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:pt-12 pt-6 mb-12 md:mb-16">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Komplettservice</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Von Antragstellung bis Genehmigung - alles aus einer Hand
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-green-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Schnelle Bearbeitung</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Erfahrung mit dem Bielefelder Bauamt spart Zeit
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="text-xl md:text-2xl font-bold text-white">Rechtssicherheit</h6>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Alle Vorschriften werden eingehalten
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-wrap items-center mt-8 md:mt-12">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto space-y-6">
              {/* Introduction */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-semibold text-white">
                  Behördengänge Bielefeld - Wenn der Papierkram zur Qual wird
                </h2>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Letzte Woche kam ein Kunde zu uns, völlig frustriert. Der wollte sein altes Gartenhaus abreissen,
                    hat beim Bauamt angerufen und nach drei Wochen immer noch keine klare Antwort bekommen ob er ne
                    Genehmigung braucht oder nicht. Sowas erleben wir ständig! In Bielefeld sind die Behörden zwar
                    meistens kooperativ, aber wenn man nicht weiss wie der Hase läuft, kann aus nem simplen Abbruch
                    schnell ein monatelanges Genehmigungs-Drama werden.
                  </p>
                  <p>
                    Genau deswegen übernehmen wir die kompletten Behördengänge für unsere Kunden. Wir kennen die
                    Leute im Bielefelder Bauamt persönlich, wissen welche Formulare wann eingereicht werden müssen
                    und was die hören wollen. Abbruchgenehmigung, Bauanzeige, Nachbarberichtigung, Denkmalschutz,
                    Entsorgungsnachweise - das ist unser täglich Brot. Sie müssen sich um nix kümmern, wir regeln
                    den ganzen Papierkram!
                  </p>
                </div>
              </div>

              {/* Abbruchgenehmigung */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Abbruchgenehmigung Bielefeld - Wann braucht man die?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Die erste Frage die uns jeder stellt: "Brauche ich überhaupt ne Genehmigung?" Die Antwort ist
                    leider: Kommt drauf an! In Nordrhein-Westfalen und speziell in Bielefeld gibts da klare Regeln,
                    aber die sind nich jedem bekannt.
                  </p>
                  <p>
                    Grundsätzlich gilt: Alles was über 10 Kubikmeter umbauten Raum hat, braucht ne Genehmigung.
                    Klingt kompliziert, ist es auch erstmal. Aber grob gesagt: Ne kleine Gartenlaube ohne Fundament
                    geht meistens ohne Genehmigung. Alles andere - Wohnhäuser, Garagen, Schuppen mit Fundament,
                    Gewerbegebäude - braucht auf jeden Fall ne Abbruchgenehmigung.
                  </p>
                  <p>
                    Besonderheiten in Bielefeld:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>In der Altstadt und bei denkmalgeschützten Gebäuden ist's nochmal komplizierter</li>
                    <li>Bei Gebäuden mit Asbest oder anderen Schadstoffen müssen extra Nachweise erbracht werden</li>
                    <li>Wenn Nachbarn direkt angrenzen, braucht's oft ne Nachbarberichtigung</li>
                    <li>Bei Gebäuden an öffentlichen Strassen muss die Verkehrssicherung geklärt werden</li>
                    <li>In manchen Stadtteilen gibts Bebauungspläne mit besonderen Auflagen</li>
                  </ul>
                  <p>
                    Wir checken das für Sie kostenlos im Vorfeld. Meistens reicht uns ein Foto und die Adresse,
                    dann können wir schon sagen ob Sie ne Genehmigung brauchen oder nicht. Und wenn ja, kümmern
                    wir uns drum!
                  </p>
                </div>
              </div>

              {/* Application Process */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  So läuft der Genehmigungsprozess in Bielefeld
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Viele Kunden denken: "Ach, ich füll einfach nen Antrag aus und gut is." Wenn's nur so einfach
                    wär! Der Genehmigungsprozess hat mehrere Schritte und an jeder Stelle kann man Fehler machen,
                    die das Ganze verzögern. Hier wie's richtig geht:
                  </p>
                  <p className="font-semibold text-white">1. Bauvorlagen erstellen</p>
                  <p>
                    Zuerst braucht's die richtigen Unterlagen: Lageplan, Grundrisse, Fotos vom Gebäude, Baubeschreibung.
                    Bei größeren Abbrüchen auch nen Entsorgungsplan und ne Statikprüfung. Das Bauamt will genau wissen
                    was abgerissen wird und wie. Wir haben die Vorlagen alle parat und füllen die für Sie aus.
                  </p>
                  <p className="font-semibold text-white">2. Nachbarberichtigung einholen</p>
                  <p>
                    Wenn Nachbarn direkt angrenzen, müssen die informiert werden und unterschreiben dass sie einverstanden
                    sind. Klingt einfach, wird aber oft zum Problem wenn Nachbarn bocken. Wir kennen die Tricks wie man
                    das diplomatisch löst. Meistens reicht ein persönliches Gespräch und die Zusicherung dass alles
                    sauber und sicher abläuft.
                  </p>
                  <p className="font-semibold text-white">3. Antrag beim Bauamt einreichen</p>
                  <p>
                    Der Antrag geht ans Bauamt der Stadt Bielefeld, Abteilung Bauaufsicht. Die sitzen am Niederwall.
                    Wir reichen alles persönlich ein, dann geht's schneller als per Post. Wichtig: Vollständig muss
                    der Antrag sein, sonst schicken die den zurück und man verliert Wochen!
                  </p>
                  <p className="font-semibold text-white">4. Prüfung durch verschiedene Ämter</p>
                  <p>
                    Jetzt wird's interessant: Das Bauamt prüft nicht alleine. Je nach Gebäude müssen auch Umweltamt,
                    Denkmalschutz, Feuerwehr und manchmal sogar die Naturschutzbehörde zustimmen. Bei uns in Bielefeld
                    dauert das normalerweise 4-6 Wochen. Wir haben aber gute Kontakte und können manchmal nachfragen
                    und beschleunigen.
                  </p>
                  <p className="font-semibold text-white">5. Genehmigung oder Auflagen</p>
                  <p>
                    Im besten Fall kommt ne Genehmigung. Manchmal aber auch Auflagen: "Abbruch nur zwischen 8 und 18 Uhr",
                    "Staubschutzwände müssen aufgestellt werden", sowas. Wir setzen die Auflagen dann um. In seltenen
                    Fällen gibt's auch mal ne Ablehnung - dann müssen wir nachbessern und nochmal ran.
                  </p>
                  <p className="font-semibold text-white">6. Beginn der Arbeiten</p>
                  <p>
                    Wenn die Genehmigung da ist, müssen wir die Baustelleneinrichtung beim Ordnungsamt anmelden. Grade
                    wenn Container auf öffentlichem Grund stehen sollen oder die Strasse teilweise gesperrt werden muss.
                    Auch das machen wir für Sie!
                  </p>
                </div>
              </div>

              {/* Required Documents */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Welche Unterlagen braucht man?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Das Bauamt in Bielefeld will ne ganze Menge Papiere sehen. Hier die komplette Liste, damit Sie
                    wissen was auf Sie zukommt (aber keine Sorge, wir besorgen das meiste davon für Sie):
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Bauantragsformular:</strong> Gibt's beim Bauamt oder online, muss ausgefüllt und unterschrieben werden</li>
                    <li><strong>Lageplan:</strong> Zeigt wo das Gebäude auf dem Grundstück steht, Maßstab 1:500 oder 1:1000</li>
                    <li><strong>Grundrisse und Ansichten:</strong> Vom Bestandsgebäude, damit das Bauamt sieht was abgerissen wird</li>
                    <li><strong>Bauzeichnungen:</strong> Falls vorhanden, sonst müssen wir die nachmessen und erstellen</li>
                    <li><strong>Statische Berechnung:</strong> Bei großen Gebäuden, damit beim Abbruch nix einstürzt</li>
                    <li><strong>Abbruchkonzept:</strong> Beschreibung wie abgerissen wird, in welcher Reihenfolge</li>
                    <li><strong>Entsorgungsnachweis:</strong> Wo kommt der Bauschutt hin, wie werden Schadstoffe entsorgt</li>
                    <li><strong>Schadstoffgutachten:</strong> Bei Gebäuden vor 1993 meistens Pflicht wegen Asbest</li>
                    <li><strong>Nachbarbescheinigungen:</strong> Unterschriften der angrenzenden Nachbarn</li>
                    <li><strong>Flurkarte:</strong> Vom Katasteramt, zeigt die Grundstücksgrenzen</li>
                    <li><strong>Grundbuchauszug:</strong> Beweis dass Sie Eigentümer sind</li>
                  </ul>
                  <p>
                    Klingt nach viel Arbeit? Ist es auch! Aber wir haben das schon hunderte Male gemacht und wissen
                    genau was das Bielefelder Bauamt sehen will. Die meisten Unterlagen besorgen wir selbst, Sie
                    müssen nur den Grundbuchauszug holen (oder uns ne Vollmacht geben, dann machen wir auch das).
                  </p>
                </div>
              </div>

              {/* Costs and Duration */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Was kostet eine Abbruchgenehmigung und wie lange dauert das?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Die zwei wichtigsten Fragen! Fangen wir mit den Kosten an:
                  </p>
                  <p className="font-semibold text-white">Amtliche Gebühren:</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Abbruchgenehmigung beim Bauamt Bielefeld: ca. 200-800 Euro (je nach Größe des Gebäudes)</li>
                    <li>Baustelleneinrichtungsgenehmigung: ca. 50-200 Euro</li>
                    <li>Flurkarte vom Katasteramt: ca. 20-40 Euro</li>
                    <li>Grundbuchauszug: ca. 10-20 Euro</li>
                  </ul>
                  <p className="font-semibold text-white">Unsere Dienstleistung:</p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Komplette Antragsstellung und Behördengang: 800-1.500 Euro (Festpreis!)</li>
                    <li>Schadstoffgutachten (falls nötig): 500-2.000 Euro</li>
                    <li>Vermessung und Planzeichnungen (falls Unterlagen fehlen): 500-1.200 Euro</li>
                  </ul>
                  <p>
                    Unterm Strich müssen Sie mit 1.500-4.000 Euro rechnen für die komplette Genehmigung. Das hört
                    sich erstmal nach viel an, aber bedenken Sie: Ohne Genehmigung drohen Bußgelder bis 50.000 Euro!
                    Und die Zeit die Sie sparen ist auch was wert.
                  </p>
                  <p className="font-semibold text-white">Dauer:</p>
                  <p>
                    In Bielefeld geht's normalerweise relativ flott:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li>Unterlagen zusammenstellen: 1-2 Wochen</li>
                    <li>Bearbeitung beim Bauamt: 4-8 Wochen</li>
                    <li>Bei denkmalgeschützten Gebäuden: 8-12 Wochen</li>
                    <li>Express-Bearbeitung (gegen Aufpreis möglich): 2-3 Wochen</li>
                  </ul>
                  <p>
                    Wir können den Prozess durch unsere guten Kontakte oft beschleunigen. Manchmal hilft ein
                    Anruf beim zuständigen Sachbearbeiter und schwupps geht's schneller. Aber verlassen sollte
                    man sich drauf nicht - lieber frühzeitig anfangen!
                  </p>
                </div>
              </div>

              {/* Special Cases */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Sonderfälle und Stolpersteine
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    In Bielefeld gibt's ein paar Besonderheiten, die Sie kennen sollten:
                  </p>
                  <p className="font-semibold text-white">Denkmalschutz</p>
                  <p>
                    Die Bielefelder Altstadt, Teile von Schildesche und viele alte Bauernhöfe in Jöllenbeck stehen
                    unter Denkmalschutz. Da wird's kompliziert! Dann muss erstmal die Denkmalbehörde zustimmen, und
                    die sind oft sehr kritisch. Manchmal darf man nur Teile abreissen, manchmal gar nix. Wir haben
                    aber auch schon schwierige Fälle durchbekommen durch gute Argumentation und alternative Konzepte.
                  </p>
                  <p className="font-semibold text-white">Asbest und Schadstoffe</p>
                  <p>
                    Bei Gebäuden die vor 1993 gebaut wurden ist Asbest sehr wahrscheinlich. Dann braucht's ein
                    Schadstoffgutachten und ne spezielle Entsorgungsfirma (also uns!). Das Bauamt will genau wissen
                    wie die Schadstoffe entfernt werden. Wir erstellen das Gutachten, machen die Sanierung und
                    liefern die Nachweise. Alles aus einer Hand.
                  </p>
                  <p className="font-semibold text-white">Nachbarschaftsprobleme</p>
                  <p>
                    Manchmal gibt's Nachbarn die grundsätzlich gegen alles sind. Die unterschreiben die Nachbarbescheinigung
                    nicht aus Prinzip. In solchen Fällen kann man einen "öffentlich-rechtlichen Antrag" stellen - dann
                    entscheidet das Bauamt auch ohne Zustimmung des Nachbarn. Dauert aber länger und kostet mehr. Wir
                    versuchen immer erstmal die freundliche Schiene.
                  </p>
                  <p className="font-semibold text-white">Gebäude an öffentlichen Strassen</p>
                  <p>
                    Wenn Ihr Gebäude direkt an ner Hauptstrasse steht (zum Beispiel an der Detmolder Strasse oder
                    am Ostwestfalendamm), wird's aufwendiger. Dann müssen Verkehrssicherung, Absperrungen und manchmal
                    sogar Ampelschaltungen geklärt werden. Das kostet extra und muss mit dem Ordnungsamt und der
                    Strassenbaubehörde abgestimmt werden.
                  </p>
                  <p className="font-semibold text-white">Teilabbrüche</p>
                  <p>
                    Sie wollen nicht das ganze Gebäude abreissen, sondern nur nen Anbau oder ne Garage? Auch das
                    braucht oft ne Genehmigung, vorallem wenn's an der Grundstücksgrenze steht. Manchmal ist ein
                    Teilabbruch sogar komplizierter als ein Komplettabbruch, weil man die Standsicherheit des
                    Restgebäudes nachweisen muss.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Warum RückbauPRO für Ihre Behördengänge?
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Klar, Sie könnten theoretisch auch selbst zum Bauamt gehen. Aber mal ehrlich: Wollen Sie das?
                    Hier sind die Vorteile wenn Sie uns beauftragen:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Zeitersparnis:</strong> Während wir die Genehmigung holen, können Sie sich um wichtigere Dinge kümmern</li>
                    <li><strong>Keine Fehler:</strong> Wir wissen genau welche Unterlagen das Bauamt will und füllen alles korrekt aus</li>
                    <li><strong>Persönliche Kontakte:</strong> Wir kennen die Sachbearbeiter beim Bauamt persönlich und wissen wie man sie überzeugt</li>
                    <li><strong>Festpreis:</strong> Sie wissen vorher genau was es kostet, keine bösen Überraschungen</li>
                    <li><strong>Komplettservice:</strong> Von der ersten Beratung bis zur fertigen Genehmigung - alles aus einer Hand</li>
                    <li><strong>Schnellere Bearbeitung:</strong> Durch unsere Erfahrung können wir oft Wartezeiten verkürzen</li>
                    <li><strong>Rechtssicherheit:</strong> Sie haben die Gewissheit dass alles korrekt und rechtskonform läuft</li>
                  </ul>
                  <p>
                    Und das Beste: Wenn wir sowieso den Abbruch machen, übernehmen wir die Behördengänge oft zu nem
                    reduzierten Preis. Das lohnt sich doppelt - Sie sparen Zeit, Geld und Nerven!
                  </p>
                </div>
              </div>

              {/* Local Knowledge */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Besonderheiten in Bielefelder Stadtteilen
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Bielefeld ist nicht gleich Bielefeld - jeder Stadtteil hat seine Eigenheiten wenn's um
                    Genehmigungen geht:
                  </p>
                  <p className="font-semibold text-white">Altstadt und Innenstadt</p>
                  <p>
                    Hier ist fast alles denkmalgeschützt oder steht in nem Ensemble. Abbrüche sind selten genehmigt,
                    oft nur Sanierungen erlaubt. Wenn doch abgerissen werden darf, sind die Auflagen streng: Staubschutz,
                    Lärmschutz, begrenzte Arbeitszeiten. Und die Nachbarn sind meistens sehr kritisch und achten drauf
                    dass alles regelkonform läuft.
                  </p>
                  <p className="font-semibold text-white">Sennestadt</p>
                  <p>
                    Die Plattenbauten aus den 60ern und 70ern - viele davon werden jetzt saniert oder abgerissen.
                    Hier geht's meistens schneller mit den Genehmigungen, weil die Stadt die Erneuerung des Stadtteils
                    fördert. Aber Achtung: Viele Gebäude haben Asbest und PCB, da braucht's Schadstoffgutachten!
                  </p>
                  <p className="font-semibold text-white">Schildesche und Brackwede</p>
                  <p>
                    Typische Wohngebiete mit ner Mischung aus Alt- und Neubauten. Hier läuft's normalerweise unkompliziert,
                    solange die Nachbarn mitspielen. Die Bebauungspläne sind meistens nicht so streng, Abbrüche werden
                    oft genehmigt wenn danach was Neues gebaut wird.
                  </p>
                  <p className="font-semibold text-white">Jöllenbeck und Dornberg</p>
                  <p>
                    Ländliche Stadtteile mit vielen alten Bauernhöfen und Fachwerkhäusern. Hier wird's oft kompliziert
                    wegen Denkmalschutz. Ausserdem müssen manchmal Natur- und Landschaftsschutz beachtet werden. Dafür
                    sind die Nachbarn meistens entspannter und die Grundstücke grösser.
                  </p>
                  <p className="font-semibold text-white">Gewerbegebiete</p>
                  <p>
                    In den Gewerbegebieten an der A2 oder in Brake geht's meistens zügig. Die Genehmigungen für
                    Industrieabbrüche werden schneller bearbeitet, weil das Bauamt da mehr Routine hat. Aber dafür
                    sind die Umweltauflagen oft strenger - Bodenschutz, Grundwasserschutz, sowas.
                  </p>
                </div>
              </div>

              {/* Tips */}
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h3 className="text-xl md:text-3xl mb-3 md:mb-4 font-semibold text-white">
                  Tipps für schnellere Genehmigungen
                </h3>
                <div className="text-sm md:text-base leading-relaxed space-y-3 md:space-y-4 text-gray-300">
                  <p>
                    Aus unserer Erfahrung mit hunderten Genehmigungen in Bielefeld haben wir ein paar Insider-Tipps
                    für Sie:
                  </p>
                  <ul className="list-disc pl-5 md:pl-6 space-y-2">
                    <li><strong>Früh anfangen:</strong> Nicht erst die Genehmigung beantragen wenn's pressiert. Plant 2-3 Monate Vorlauf ein</li>
                    <li><strong>Vollständige Unterlagen:</strong> Lieber einmal mehr nachfragen beim Bauamt was sie brauchen, als zweimal hinrennen</li>
                    <li><strong>Nachbarn vorher informieren:</strong> Nicht erst wenn's um die Unterschrift geht, sondern frühzeitig das Gespräch suchen</li>
                    <li><strong>Professionelle Pläne:</strong> Gekrakel auf Karopapier mögen die nicht - ordentliche CAD-Zeichnungen sind Pflicht</li>
                    <li><strong>Bauvorbescheid nutzen:</strong> Bei unsicheren Fällen erstmal nen Bauvorbescheid beantragen - klärt grundsätzliche Fragen</li>
                    <li><strong>Persönlich vorbeigehen:</strong> Anträge per Post dauern ewig. Persönliche Abgabe geht schneller und man kann direkt Fragen klären</li>
                    <li><strong>Richtige Ansprechpartner:</strong> Nicht in der Zentrale anrufen, sondern direkt beim zuständigen Sachbearbeiter</li>
                    <li><strong>Höflich bleiben:</strong> Die Leute im Bauamt haben viel zu tun. Freundlichkeit und Geduld zahlen sich aus</li>
                  </ul>
                  <p>
                    Aber der beste Tipp: Lassen Sie uns das machen! Wir kennen alle Tricks und Kniffe, haben die
                    Kontakte und wissen wie man Genehmigungen schnell durchkriegt. Während wir uns um den Papierkram
                    kümmern, können Sie sich entspannt zurücklehnen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-10/12 px-4 ml-auto mr-auto">
              <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 font-semibold text-white text-center">
                Häufige Fragen zu Behördengängen
              </h2>

              <div className="space-y-4 md:space-y-6">
                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann ich die Genehmigung auch selbst beantragen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Klar, das dürfen Sie. Aber: Sie brauchen die richtigen Unterlagen, müssen die Formulare korrekt
                    ausfüllen und wissen wo Sie was hinschicken müssen. Viele machen dabei Fehler und dann dauert's
                    noch länger. Wir haben das schon hunderte Male gemacht und wissen genau wie's geht. Ausserdem
                    haben wir persönliche Kontakte beim Bauamt die helfen können.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was passiert wenn ich ohne Genehmigung abreisse?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Das ist Schwarzbau und kann richtig teuer werden! Das Bauamt kann Bußgelder bis 50.000 Euro
                    verhängen und Sie zwingen alles wieder aufzubauen (ja, wirklich!). Ausserdem haften Sie wenn
                    was passiert - Versicherungen zahlen bei illegalen Abbrüchen nicht. Also: Nie ohne Genehmigung
                    anfangen, auch wenn's nur ne kleine Garage ist!
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Wie lange ist die Genehmigung gültig?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    In NRW sind Abbruchgenehmigungen normalerweise 3 Jahre gültig. Danach verfallen sie und Sie
                    müssen neu beantragen. Wichtig: Sie müssen innerhalb der Gültigkeitsdauer anfangen, nicht
                    fertig sein! Wenn Sie also 2 Jahre und 11 Monate warten und dann anfangen, ist alles okay.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Brauche ich auch ne Genehmigung für Innenarbeiten?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Kommt drauf an! Wenn Sie nur tapezieren oder Fliesen legen - nein. Wenn Sie tragende Wände
                    rausreissen oder die Statik verändern - ja! Bei Entkernung von Wohnungen braucht's manchmal
                    auch Genehmigungen, vorallem in Mehrfamilienhäusern. Wir checken das für Sie kostenlos im
                    Vorfeld und sagen Ihnen ob's genehmigungspflichtig ist.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Was ist wenn mein Nachbar nicht unterschreibt?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Dann wird's schwieriger, aber nicht unmöglich. Man kann beim Bauamt nen "öffentlich-rechtlichen
                    Antrag" stellen - dann wird ohne Zustimmung des Nachbarn entschieden. Dauert aber länger und
                    kostet mehr. Wir versuchen erstmal das Gespräch mit dem Nachbarn zu suchen - meistens lässt
                    sich da was regeln wenn man vernünftig redet.
                  </p>
                </div>

                <div className="backdrop-blur-md bg-gray-800/90 p-4 md:p-6 rounded-xl border border-white/50">
                  <h3 className="text-base md:text-xl font-semibold text-white mb-2">
                    Kann man Genehmigungen beschleunigen?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300">
                    Offiziell gibt's in Bielefeld keine Express-Genehmigungen. Inoffiziell können wir durch unsere
                    Kontakte manchmal nachfragen und den Prozess beschleunigen. Bei dringenden Fällen (zum Beispiel
                    wenn das Gebäude einsturzgefährdet ist) geht's auch schneller. Aber verlassen sollte man sich
                    drauf nicht - besser früh genug anfangen mit dem Antrag!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="pb-12 md:pb-16 relative block bg-gray-900">
        <div className="container mx-auto px-4 pt-12 md:pt-16">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-8/12 px-4">
              <div className="backdrop-blur-md bg-gray-800/90 rounded-xl p-6 md:p-8 border border-white/50">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Behördengänge in ganz Bielefeld & Ostwestfalen-Lippe
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 text-gray-300">
                  Wir übernehmen Genehmigungen in allen Bielefelder Stadtteilen:
                </p>
                <div className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                  Sennestadt, Stieghorst, Brackwede, Mitte, Schildesche, Jöllenbeck,
                  Heepen, Senne, Quelle, Ummeln, Dornberg, Gadderbaum, Hoberge-Uerentrup,
                  Brake, Brönninghausen, Vilsendorf, Oldentrup, Sieker, Hillegossen,
                  Altenhagen, Milse und Windwehe.
                </div>
                <p className="text-sm md:text-base leading-relaxed text-gray-300">
                  Auch in Gütersloh, Herford, Paderborn, Bad Salzuflen, Detmold,
                  Lemgo und weiteren Städten in OWL kümmern wir uns um Ihre Genehmigungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt">
        <SimpleContactForm />
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </div>
  );
}
