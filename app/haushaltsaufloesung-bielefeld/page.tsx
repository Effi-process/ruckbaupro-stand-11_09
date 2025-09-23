'use client';

import Link from 'next/link';
import Icon from '@/app/components/Icon';
import FloatingElements from '@/app/components/FloatingElements';
import FooterWithMarquee from '@/app/components/FooterWithMarquee';

export default function HaushaltsaufloesungBielefeld() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-oxford-blue via-gray-800 to-oxford-blue">
      {/* Floating Logo and Menu */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-cerulean/20 backdrop-blur-lg rounded-full mb-4">
                <Icon name="home" size={16} className="text-cerulean mr-2" />
                <span className="text-sm font-semibold text-cerulean uppercase tracking-wider">
                  Professionelle Haushaltsauflösung
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Haushaltsauflösung Bielefeld - Komplettservice aus einer Hand
              </h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Unsere <strong>Haushaltsauflösung in Bielefeld</strong> umfasst die komplette Räumung Ihrer Immobilie.
                Ob in Bielefeld-Mitte, Schildesche oder Brackwede - wir sind in 15 Minuten vor Ort. Besonders häufig
                werden wir für Haushaltsauflösungen in den Seniorenwohngebieten Gadderbaum und Dornberg gebucht. Von
                der ersten Besichtigung bis zur besenreinen Übergabe an Vermieter oder Makler übernehmen wir alles.
                Auch schwierige Objekte in den Altbaugebieten rund um den Siegfriedplatz oder die engen Gassen der
                Altstadt sind für unser erfahrenes Team kein Problem.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-cerulean">1000+</div>
                <div className="text-sm text-white/70">Haushalte aufgelöst</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400">15min</div>
                <div className="text-sm text-white/70">Reaktionszeit</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange">20-30%</div>
                <div className="text-sm text-white/70">Ersparnis durch Wertanrechnung</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-white/70">Notdienst</div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="users" size={28} className="text-cerulean mr-3" />
                Wohnungsauflösung
              </h2>

              <p className="text-white/80 mb-6">
                Letzte Woche haben wir eine 3-Zimmer-Wohnung am Kesselbrink komplett geräumt - in nur einem Tag.
                Die Tochter wohnte in Hamburg und konnte sich nicht kümmern. Sowas erleben wir oft bei der
                <strong> Wohnungsauflösung in Bielefeld</strong>. Wir sortieren alles: Was noch gut ist, wird
                gespendet oder verkauft, der Rest fachgerecht entsorgt. Die BGW Bielefeld kennt uns gut - wir
                wissen genau, was die für die Wohnungsübergabe brauchen.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="home" size={28} className="text-cerulean mr-3" />
                Entrümpelung
              </h2>

              <p className="text-white/80 mb-6">
                Manchmal sammelt sich über die Jahre einfach zu viel an. Keller, Dachboden, Garage - alles voll.
                Bei der <strong>Entrümpelung in Bielefeld</strong> räumen wir gründlich auf. Grade in den alten
                Häusern in Heepen oder Jöllenbeck finden wir oft wahre Schätze zwischen dem ganzen Krempel.
                Alte Möbel aus Eiche, Vintage-Spielzeug, sogar mal ne Münzsammlung. Sowas rechnen wir natürlich
                an - das senkt Ihre Kosten erheblich.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="clock" size={28} className="text-cerulean mr-3" />
                Seniorenumzüge
              </h2>

              <p className="text-white/80 mb-6">
                Der Umzug ins Seniorenheim ist emotional schwer genug. Wir machen den Rest so einfach wie möglich.
                Erst helfen wir beim Aussuchen, was mit ins neue Zuhause soll. Den Rest lösen wir sauber auf.
                Mit dem Johannesstift und dem Haus am Nordpark arbeiten wir schon lange zusammen. Die empfehlen
                uns oft weiter, weil wir sensibel und respektvoll mit den Sachen umgehen. Familienfotos und
                Erinnerungsstücke behandeln wir besonders sorgfältig.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="file-text" size={28} className="text-cerulean mr-3" />
                Nachlassauflösung
              </h2>

              <p className="text-white/80 mb-6">
                Im Trauerfall ist an vieles zu denken. Die <strong>Nachlassauflösung in Bielefeld</strong>
                nehmen wir Ihnen komplett ab. Wir arbeiten diskret und zuverlässig, sortieren wichtige Dokumente
                aus und kümmern uns um die komplette Räumung. Mit mehreren Bielefelder Bestattern haben wir
                Partnerschaften - die wissen, dass sie sich auf uns verlassen können. Auch mit dem Nachlassgericht
                Bielefeld kennen wir uns aus, falls es um Erbschaftssachen geht.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="truck" size={28} className="text-cerulean mr-3" />
                Kellerräumung
              </h2>

              <p className="text-white/80 mb-6">
                Die Keller in Bielefeld sind oft feucht und vollgestopft. Besonders in der Altstadt und in
                Schildesche haben viele Häuser noch diese alten Gewölbekeller. Da sammelt sich über Jahrzehnte
                alles mögliche an. Wir räumen systematisch aus, checken auf Schimmel oder andere Probleme und
                hinterlassen alles besenrein. Die Hausverwaltungen in Bielefeld schätzen unsere gründliche
                Arbeit - oft bekommen wir direkt den nächsten Auftrag.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="alert-circle" size={28} className="text-cerulean mr-3" />
                Messie-Wohnung
              </h2>

              <p className="text-white/80 mb-6">
                Das ist ein sensibles Thema, wir wissen das. Bei <strong>Messie-Wohnungen in Bielefeld</strong>
                gehen wir besonders behutsam vor. Keine Vorwürfe, keine Kommentare - wir räumen einfach auf.
                Mit Schutzausrüstung und Desinfektionsmitteln sorgen wir für Hygiene und Sicherheit. Das
                Gesundheitsamt Bielefeld kennt unsere Arbeit und empfiehlt uns regelmäßig weiter. Nach unserer
                Räumung ist die Wohnung wieder bewohnbar und sicher.
              </p>

              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Icon name="briefcase" size={28} className="text-cerulean mr-3" />
                Geschäftsauflösung
              </h2>

              <p className="text-white/80 mb-6">
                Nicht nur Privathaushalte - wir machen auch <strong>Geschäftsauflösungen in Bielefeld</strong>.
                Büros, Läden, Praxen, kleine Werkstätten. Als die alte Buchhandlung am Jahnplatz zugemacht hat,
                haben wir alles ausgeräumt. Regale, Theken, tausende Bücher - in drei Tagen war alles weg.
                Die Büromöbel gehen oft an Startups weiter, die sich über günstige Ausstattung freuen. Win-win
                für alle Beteiligten.
              </p>

              {/* Wertanrechnung Section */}
              <div className="bg-cerulean/10 rounded-2xl p-6 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Wertanrechnung - Ihr Vorteil
                </h3>
                <p className="text-white/80 mb-4">
                  Wertanrechnung möglich - wir kaufen brauchbare Möbel und reduzieren dadurch Ihre Kosten.
                  Durchschnittlich sparen unsere Kunden in Bielefeld durch Wertanrechnung 20-30% der Gesamtkosten.
                  Wir arbeiten eng mit lokalen Immobilienmaklern und Hausverwaltungen wie der BGW Bielefeld
                  zusammen und kennen die speziellen Anforderungen für Übergaben.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Was wir ankaufen:</h4>
                    <ul className="text-white/70 space-y-1">
                      <li>• Massivholzmöbel (Eiche, Buche, Kirsche)</li>
                      <li>• Designermöbel & Antiquitäten</li>
                      <li>• Elektrogeräte (max. 5 Jahre alt)</li>
                      <li>• Sammlungen (Münzen, Briefmarken, etc.)</li>
                      <li>• Werkzeuge & Gartengeräte</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Ihre Vorteile:</h4>
                    <ul className="text-white/70 space-y-1">
                      <li>• Direkte Verrechnung mit Räumungskosten</li>
                      <li>• Faire Preise nach aktuellem Marktwert</li>
                      <li>• Keine versteckten Gebühren</li>
                      <li>• Transparente Abrechnung</li>
                      <li>• Sofortige Wertermittlung vor Ort</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Local Area Info */}
              <div className="bg-indigo-dye/10 rounded-2xl p-6 my-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Unsere Einsatzgebiete in Bielefeld
                </h3>
                <p className="text-white/80 mb-4">
                  Wir sind in ganz Bielefeld und Umgebung für Sie da. Besonders oft arbeiten wir in:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Zentrum & Stadtteile:</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• Bielefeld-Mitte & Altstadt</li>
                      <li>• Schildesche & Gadderbaum</li>
                      <li>• Brackwede & Quelle</li>
                      <li>• Dornberg & Babenhausen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Außenbezirke:</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• Heepen & Oldentrup</li>
                      <li>• Jöllenbeck & Theesen</li>
                      <li>• Sennestadt & Senne</li>
                      <li>• Stieghorst & Hillegossen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerulean mb-2">Partner vor Ort:</h4>
                    <ul className="text-white/70 space-y-1 text-sm">
                      <li>• BGW Bielefeld</li>
                      <li>• Vonovia Bielefeld</li>
                      <li>• Sahle Wohnen</li>
                      <li>• Lokale Makler & Verwalter</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="my-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Häufige Fragen zur Haushaltsauflösung in Bielefeld
                </h2>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Was kostet eine Haushaltsauflösung in Bielefeld?
                    </h3>
                    <p className="text-white/70">
                      Das kommt auf die Größe an. Eine 2-Zimmer-Wohnung kostet meist zwischen 800 und 1.500 Euro.
                      Bei Wertanrechnung wirds oft deutlich günstiger. Wir machen immer erst ne kostenlose
                      Besichtigung und dann ein Festpreisangebot. Keine versteckten Kosten, versprochen.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Wie schnell können Sie räumen?
                    </h3>
                    <p className="text-white/70">
                      Im Notfall auch sofort. Normal brauchen wir 1-3 Tage Vorlauf. Eine normale Wohnung räumen
                      wir an einem Tag, größere Häuser in 2-3 Tagen. Wenn's eilig ist, bringen wir mehr Leute
                      mit. Wir wissen, dass oft Kündigungsfristen eingehalten werden müssen.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Was passiert mit den Sachen?
                    </h3>
                    <p className="text-white/70">
                      Wir sortieren alles: Brauchbares wird gespendet (Caritas, Bethel), Wertvolles verkauft
                      und angerechnet, Müll fachgerecht entsorgt. Persönliche Sachen und Dokumente händigen
                      wir Ihnen aus. Nichts landet einfach auf'm Müll, wenn's noch jemand brauchen kann.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-2">
                      Muss ich dabei sein?
                    </h3>
                    <p className="text-white/70">
                      Nein, müssen Sie nicht. Nach der Erstbesichtigung können Sie uns den Schlüssel geben
                      und wir machen alles. Viele Kunden wohnen weit weg oder wollen aus emotionalen Gründen
                      nicht dabei sein. Wir dokumentieren alles mit Fotos und halten Sie auf dem Laufenden.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl p-8 mt-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Jetzt Haushaltsauflösung in Bielefeld beauftragen
                </h2>
                <p className="text-white/80 mb-6">
                  Egal ob Wohnung, Haus oder Geschäft - wir räumen schnell, sauber und zu fairen Preisen.
                  Rufen Sie uns an für eine kostenlose Besichtigung. Wir kommen vorbei, schauen uns alles
                  an und machen Ihnen ein Festpreisangebot. Seit über 25 Jahren sind wir in Bielefeld der
                  vertrauenswürdige Partner für Haushaltsauflösungen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="tel:+491748083023"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-cerulean/30 transition-all"
                  >
                    <Icon name="phone" size={20} className="mr-3" />
                    24/7 Notdienst: 0174 8083023
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                  >
                    <Icon name="mail" size={20} className="mr-3" />
                    Kostenlose Besichtigung
                  </Link>
                </div>
              </div>

              {/* Local SEO Content */}
              <div className="mt-12 text-white/70 text-sm">
                <p className="mb-4">
                  Als etabliertes Unternehmen für <strong>Haushaltsauflösungen in Bielefeld</strong> kennen
                  wir jeden Winkel der Stadt. Von den engen Gassen der Altstadt bis zu den Neubaugebieten
                  in Sennestadt - wir sind überall schnell vor Ort. Unsere Kunden schätzen besonders unsere
                  Zuverlässigkeit und transparente Preisgestaltung.
                </p>
                <p className="mb-4">
                  Die Zusammenarbeit mit lokalen Partnern wie dem Umweltbetrieb Bielefeld, verschiedenen
                  Hausverwaltungen und sozialen Einrichtungen ermöglicht es uns, Ihnen einen Rundum-Service
                  zu bieten. Ob Sperrmüllentsorgung, Schrottabholung oder die fachgerechte Entsorgung von
                  Elektrogeräten - wir kümmern uns um alles.
                </p>
                <p>
                  Vertrauen Sie auf unsere langjährige Erfahrung in Bielefeld. Wir kennen die lokalen
                  Gegebenheiten, arbeiten mit allen großen Wohnungsbaugesellschaften zusammen und sorgen
                  dafür, dass Ihre Immobilie termingerecht und besenrein übergeben werden kann.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithMarquee />
    </main>
  );
}