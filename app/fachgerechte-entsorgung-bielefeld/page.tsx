'use client';
import React, { useState, useEffect } from 'react';
import GlassHeader from '../components/GlassHeader';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import SimpleContactForm from '../components/MultiStepWizard';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent'
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent'

export default function FachgerechteEntsorgungBielefeld() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      <GlassHeader />
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Zertifizierter Entsorgungsfachbetrieb
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Fachgerechte Entsorgung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Gestern haben wir wieder 50 Container vom Abriss der alten Druckerei an der
              Eckendorfer Straße entsorgt - sortenrein getrennt, 85% recycelt! Wenn Sie in
              Bielefeld eine fachgerechte Entsorgung brauchen, sind wir Ihr zertifizierter Partner.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '95%', label: 'Recyclingquote' },
              { number: '50+', label: 'Containerdienst' },
              { number: '24h', label: 'Express-Service' },
              { number: 'EfbV', label: 'Zertifiziert' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unsere Entsorgungsleistungen</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professionelle Entsorgung aller Abfallarten
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bauschuttentsorgung',
                description: 'Sortenreine Trennung und Recycling von Beton, Ziegel und Bauschutt.'
              },
              {
                title: 'Asbestentsorgung',
                description: 'Sichere Entsorgung nach TRGS 519 mit lückenloser Dokumentation.'
              },
              {
                title: 'Mischabfall',
                description: 'Fachgerechte Sortierung und Verwertung gemischter Baustellenabfälle.'
              },
              {
                title: 'Holzentsorgung',
                description: 'Kategorisierung und Recycling von behandeltem und unbehandeltem Holz.'
              },
              {
                title: 'Metallschrott',
                description: 'Sortenreine Trennung und lukrative Schrottverwertung.'
              },
              {
                title: 'Sondermüll',
                description: 'Zertifizierte Entsorgung gefährlicher Abfälle nach AVV.'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-8 h-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:border-sky-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="h-2 bg-gradient-to-r from-sky-400/50 to-sky-600/50 rounded-full mb-6 group-hover:from-sky-300/70 group-hover:to-sky-500/70 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Unser Entsorgungsprozess</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Umweltgerecht, dokumentiert und zertifiziert
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Beratung', desc: 'Analyse der Abfallarten und Mengen' },
              { step: '02', title: 'Bereitstellung', desc: 'Container in passender Größe liefern' },
              { step: '03', title: 'Sortierung', desc: 'Trennung nach Wertstoffen vor Ort' },
              { step: '04', title: 'Verwertung', desc: 'Recycling oder fachgerechte Entsorgung' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 h-full hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/60 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <MobileOptimizedContent>
        <MobileSection padding="large" className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-6 lg:p-8 xl:p-12 hover:shadow-2xl hover:shadow-sky-400/10 transition-all duration-300">

            <div className="prose prose-lg max-w-none text-white/90">
              <MobileParagraph className="mb-6 lg:mb-8">
                Wir sind der Entsorgungspartner, dem Bielefeld vertraut. Vom kleinen Handwerker
                bis zum großen Bauunternehmen - alle wissen, dass wir jeden Müll fachgerecht
                entsorgen. Fachgerechte Entsorgung ist mehr als nur wegfahren - es geht um
                Umweltschutz, Recycling und gesetzliche Vorschriften. Jeder Abfall hat seinen
                Weg, jedes Material seine Bestimmung. In der Altstadt arbeiten wir mit kleinen
                Containern, auf den großen Baustellen haben wir 40-Kubikmeter-Abroller.
              </MobileParagraph>

              <CollapsibleTextSection
                title="Bauschuttentsorgung"
                content={
                  <>
                    <MobileParagraph>
                      Die Bauschuttentsorgung in Bielefeld läuft bei uns wie am Schnürchen. Letzte
                      Woche haben wir den kompletten Abriss vom alten Finanzamt entsorgt - 2000 Tonnen
                      Bauschutt, sortenrein getrennt! Beton kommt zum Brecher und wird zu Recycling-
                      Schotter, Ziegel werden gemahlen und als Tennisplatzbelag verwendet. Nur was
                      wirklich nicht mehr geht, landet auf der Deponie.
                    </MobileParagraph>
                    <MobileParagraph>
                      Das Wichtige bei Bauschutt ist die saubere Trennung. Gips darf nicht zum Beton,
                      Holz nicht zum Ziegel. Auf der Baustelle stellen wir verschiedene Container auf,
                      jeder für eine Sorte. Die Jungs vom Abbruch wissen Bescheid und sortieren direkt.
                      So sparen alle Geld - sortenreiner Bauschutt kostet nur ein Bruchteil von Misch-
                      abfall. Bei der Sparkassen-Renovierung haben wir so 30% Entsorgungskosten gespart!
                    </MobileParagraph>
                  </>
                }
              />

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Asbestentsorgung
              </h2>
              <p className="mb-6">
                Asbestentsorgung ist die Königsdisziplin der fachgerechten Entsorgung. Da gibts
                keine Kompromisse! Jedes Fitzelchen Asbest muss in Big Bags, doppelt verpackt,
                luftdicht verschweißt. Die Entsorgung läuft über die Sonderdeponie Brake - nur
                dort darf Asbest hin. Pro Tonne kostet das richtig Geld, aber Sicherheit hat
                ihren Preis. Illegale Entsorgung kann den Betrieb ruinieren!
              </p>
              <p className="mb-6">
                Die Dokumentation bei Asbest ist penibel. Jeder Big Bag bekommt eine Nummer,
                jede Fuhre einen Begleitschein. Das elektronische Nachweisverfahren eANV
                dokumentiert alles lückenlos. Von der Baustelle bis zur Deponie wird jeder
                Schritt protokolliert. Die Behörden in Bielefeld kontrollieren regelmäßig -
                wir hatten noch nie Probleme, weil bei uns alles stimmt. Die Entsorgungsnachweise
                sind wichtig für die Bauherren, ohne die gibts keine Abnahme!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Mischabfall
              </h2>
              <p className="mb-6">
                Mischabfall ist der Klassiker auf jeder Baustelle - alles durcheinander, keiner
                hats sortiert. Kostet extra, aber manchmal gehts nicht anders. Bei Entrümpelungen
                oder kleinen Renovierungen lohnt sich die Trennung oft nicht. Wir nehmen den
                Mischabfall mit und sortieren in unserer Anlage. Mit modernen Siebanlagen und
                Magnetabscheidern trennen wir Metall, Holz, Kunststoff und Mineralik.
              </p>
              <p className="mb-6">
                In Bielefeld haben wir einen guten Deal mit der Sortieranlage - je mehr wir
                bringen, desto bessere Preise kriegen wir. Das geben wir an unsere Kunden weiter.
                Trotzdem: Wenn möglich, sollte man auf der Baustelle trennen. Bei der Sanierung
                der alten Post haben wir den Bauherren überzeugt, getrennte Container zu nehmen.
                Hat 5000 Euro gespart! Die Handwerker mussten sich erst dran gewöhnen, aber nach
                ner Woche lief das wie geschmiert.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Holzentsorgung
              </h2>
              <p className="mb-6">
                Holz ist nicht gleich Holz - das lernt man schnell in der Entsorgung. Unbehandeltes
                Holz der Kategorie A1 kann direkt ins Biomassekraftwerk. Beschichtetes Holz A2
                und A3 wird zu Spanplatten. Aber imprägniertes Holz A4 - Bahnschwellen, druckimprägnierte
                Zäune - das ist Sondermüll! Bei der alten Gärtnerei in Heepen haben wir tonnenweise
                A4-Holz gefunden. Die alten Gewächshauspfosten waren alle mit Holzschutzmittel
                getränkt.
              </p>
              <p className="mb-6">
                Die Holzentsorgung in Bielefeld läuft hauptsächlich über die Holzwerke in
                Gütersloh. Die nehmen A1 bis A3 und machen daraus neue Produkte. Kreislaufwirtschaft
                at its best! Nur das belastete A4-Holz muss verbrannt werden, in speziellen
                Anlagen mit Rauchgasreinigung. Wir beraten unsere Kunden, welches Holz wie
                entsorgt werden muss. Bei Abrissen von alten Häusern findet man oft Überraschungen -
                asbesthaltige Brandschutzplatten hinter Holzverkleidungen zum Beispiel.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Metallschrott
              </h2>
              <p className="mb-6">
                Metallschrott ist Gold wert - wortwörtlich! Die Schrottpreise schwanken, aber
                es gibt immer gutes Geld dafür. Kupfer, Messing, Edelstahl - alles hat seinen
                Preis. Bei der Demontage der alten Druckerei haben wir 20 Tonnen Stahl und 2
                Tonnen Kupferkabel rausgeholt. Das hat die Abrisskosten deutlich reduziert!
                Wichtig ist die sortenreine Trennung - Eisen, Buntmetall, Edelstahl, alles
                getrennt.
              </p>
              <p className="mb-6">
                In Bielefeld arbeiten wir mit mehreren Schrotthändlern zusammen. Je nach
                Tagespreis fahren wir zum besten Abnehmer. Die großen Mengen von Industrieabrissen
                verkaufen wir direkt ans Stahlwerk. Kleinmengen sammeln wir und bringen sie
                gebündelt weg. Für unsere Kunden holen wir das Maximum raus - der Schrotterlös
                wird direkt von der Rechnung abgezogen. Bei manchen Projekten verdienen die
                Kunden sogar Geld mit ihrem Schrott!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Sondermüll
              </h2>
              <p className="mb-6">
                Sondermüll ist kein Spaß - gefährliche Abfälle müssen absolut korrekt entsorgt
                werden. Alte Farben, Lösemittel, Öle, PCB-haltige Kondensatoren - alles hochgiftig!
                Bei der Sanierung der alten Chemiefabrik in Brackwede haben wir 50 verschiedene
                Gefahrstoffe entsorgt. Jeder mit eigenem Entsorgungsweg, eigener Dokumentation.
                Das war ein Papierkrieg, aber am Ende war alles sauber entsorgt.
              </p>
              <p className="mb-6">
                Die Sondermüllentsorgung läuft über zertifizierte Entsorger. Wir sind als
                Entsorgungsfachbetrieb berechtigt, gefährliche Abfälle anzunehmen und weiter-
                zuleiten. Die Nachweise laufen elektronisch über eANV - jeder Transport wird
                dokumentiert. Das Umweltamt Bielefeld kontrolliert regelmäßig unsere Bücher.
                Alles muss stimmen, von der Annahme bis zur finalen Entsorgung. Ein Fehler
                kann die Zulassung kosten!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Containerdienst
              </h2>
              <p className="mb-6">
                Unser Containerdienst in Bielefeld ist immer in Bewegung. 50 Container haben
                wir im Umlauf, von 3 Kubik Minicontainer bis 40 Kubik Abrollcontainer. Jeden
                Tag fahren unsere LKW durch ganz Bielefeld, stellen Container auf, holen volle
                ab. Die Logistik muss stimmen - niemand will auf seinen Container warten!
                Mit GPS-Tracking wissen wir immer, wo welcher Container steht.
              </p>
              <p className="mb-6">
                Container aufstellen in Bielefeld ist nicht immer einfach. In der Altstadt
                sind die Gassen eng, da passt nur der kleine Absetzcontainer. Auf öffentlichen
                Straßen braucht man eine Stellgenehmigung vom Amt - das organisieren wir.
                Wichtig sind auch Unterlegplatten, damit der Asphalt nicht beschädigt wird.
                Bei Großprojekten stellen wir mehrere Container für verschiedene Abfallarten -
                das spart richtig Geld bei der Entsorgung!
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Grünschnitt
              </h2>
              <p className="mb-6">
                Grünschnittentsorgung ist saisonal - im Frühjahr und Herbst gehts rund! Die
                Bielefelder schneiden ihre Hecken, fällen Bäume, machen die Gärten winterfest.
                Wir fahren dann non-stop Grünschnitt zur Kompostieranlage. Äste, Laub, Rasen-
                schnitt - alles wird zu wertvollem Kompost. Den kann man später wieder kaufen,
                der Kreislauf schließt sich.
              </p>
              <p className="mb-6">
                Bei großen Rodungen häckseln wir direkt vor Ort. Unser mobiler Häcksler macht
                aus dicken Ästen feines Mulchmaterial. Das spart Transportkosten und das Material
                kann oft direkt im Garten bleiben. Im Botanischen Garten Bielefeld machen wir
                das regelmäßig - die verwenden den Mulch für ihre Beete. Nachhaltig und praktisch!
                Nur krankes oder schädlingsbefallenes Material muss komplett weg.
              </p>

              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-8 mt-12">
                Elektronikschrott
              </h2>
              <p className="mb-6">
                Elektronikschrott ist wertvoll und gefährlich zugleich. In alten Computern
                stecken Gold, Silber, seltene Erden - aber auch Blei, Quecksilber und andere
                Giftstoffe. Die fachgerechte Entsorgung ist Pflicht! Bei der Räumung des
                alten Nixdorf-Gebäudes haben wir tonnenweise Elektronik entsorgt. Alte Computer,
                Bildschirme, Drucker - alles aus den 80ern und 90ern. Ein Schatz für Recycling-
                firmen!
              </p>
              <p className="mb-6">
                Elektronikschrott bringen wir zu zertifizierten Verwertungsbetrieben. Die
                zerlegen alles fachgerecht, trennen die Wertstoffe von den Schadstoffen.
                Platinen werden eingeschmolzen, Metalle zurückgewonnen. Die Daten auf Festplatten
                werden sicher gelöscht - Datenschutz ist wichtig! Viele Bielefelder Firmen
                beauftragen uns mit der Entsorgung ihrer IT. Wir garantieren die sichere
                Vernichtung aller Daten und die umweltgerechte Verwertung.
              </p>

              <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-8 mt-12 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
                  Ihr zertifizierter Entsorgungspartner in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Als zertifizierter Entsorgungsfachbetrieb garantieren wir fachgerechte,
                  umweltschonende und gesetzeskonforme Entsorgung aller Abfallarten.
                  Von der Beratung bis zum Entsorgungsnachweis - alles aus einer Hand.
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>✓ Entsorgungsfachbetrieb nach EfbV</li>
                  <li>✓ 95% Recyclingquote</li>
                  <li>✓ 50+ Container im Dauereinsatz</li>
                  <li>✓ Elektronisches Nachweisverfahren</li>
                  <li>✓ 24h Express-Service</li>
                </ul>
              </div>
            </div>
          </div>
        </MobileSection>
      </MobileOptimizedContent>

      {/* Local Area Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">Entsorgung in Ihrer Nähe</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Container-Service in ganz Bielefeld und Umgebung
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bielefeld Mitte',
              'Brackwede',
              'Schildesche',
              'Jöllenbeck',
              'Heepen',
              'Stieghorst',
              'Sennestadt',
              'Oldentrup',
              'Milse'
            ].map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/20 to-sky-900/10 backdrop-blur-xl border border-sky-400/30 rounded-xl p-4 hover:bg-gradient-to-br hover:from-slate-700/30 hover:to-sky-800/20 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300">
                <span className="text-white/90">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
              Häufige Fragen zur Entsorgung
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Was kostet ein Container?',
                a: 'Je nach Größe und Abfallart zwischen 150-800€. Bauschutt ist günstiger als Mischabfall. Genaue Preise nach Anfrage.'
              },
              {
                q: 'Wie schnell kommt der Container?',
                a: 'Normalerweise innerhalb von 24-48 Stunden. Express-Lieferung am selben Tag möglich.'
              },
              {
                q: 'Brauche ich eine Stellgenehmigung?',
                a: 'Auf Privatgrund nicht. Auf öffentlichen Straßen ja - wir kümmern uns darum.'
              },
              {
                q: 'Was darf nicht in den Container?',
                a: 'Gefährliche Abfälle wie Asbest, Chemikalien oder Batterien nur nach Absprache in Spezialcontainer.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-3">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 rounded-3xl p-12 text-center hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
              Fachgerechte Entsorgung in Bielefeld - Jetzt Container bestellen!
            </h2>
            <p className="text-white/80 mb-8">
              Zertifiziert ✓ 95% Recycling ✓ Faire Preise ✓ Express-Service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49 174 8083023"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-600 to-sky-700 backdrop-blur-xl text-white font-bold rounded-full hover:from-sky-500 hover:to-sky-600 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/30 transition-all duration-300"
              >
                📞 +49 174 8083023
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-br from-slate-800/40 to-sky-900/20 backdrop-blur-xl border border-sky-400/30 text-white font-bold rounded-full hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-sky-800/30 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/20 transition-all duration-300"
              >
                Container anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}
