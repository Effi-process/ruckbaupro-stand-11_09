'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import ContactSection from '../components/ContactSection';
import MobileCollapsibleContent, { CollapsibleTextSection, MobileFAQSection } from '../components/MobileCollapsibleContent';
import MobileOptimizedContent, { MobileParagraph, MobileHeading, MobileSection } from '../components/MobileOptimizedContent';
import RelatedServicesBielefeld from '../components/RelatedServicesBielefeld';

export default function GlaswolleEntsorgungBielefeldClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-sky-950 relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-br from-slate-800/40 to-amber-900/20 backdrop-blur-xl rounded-full mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-sm font-bold text-white/90 uppercase tracking-wider">
                TRGS 521 Zertifizierter Fachbetrieb
              </span>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Glaswolle Entsorgung Bielefeld
            </h1>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Vorletzten Monat haben wir bei nem Dachausbau in Brackwede 15 Kubikmeter alte Glaswolle rausgeholt -
              der Hausbesitzer wusste garnich dass das Zeug seit 1996 als krebserregend gilt wenn mans falsch anpackt.
              Als TRGS 521 zertifizierter Fachbetrieb sorgen wir für sichere KMF-Entsorgung.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '800+', label: 'KMF-Entsorgungen' },
              { number: '24h', label: 'Notdienst' },
              { number: '100%', label: 'TRGS 521 konform' },
              { number: '15+', label: 'Jahre Erfahrung' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-amber-900/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-amber-800/30 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20 transition-all duration-300">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <MobileOptimizedContent>
                <MobileSection>
                  <MobileHeading level={2}>Glaswolle Entsorgung in Bielefeld - Warum das so wichtig is</MobileHeading>
                  <MobileParagraph>
                    Letzte Woche stand ich wieder in nem Dachboden in Schildesche. Der Eigentümer wollte ausbauen,
                    meinte zu mir: "Ach die alte Glaswolle, die pack ich einfach in nen Müllsack und bring die zum
                    Wertstoffhof." Musste ich erstmal erklären warum das ne richtig schlechte Idee is. Glaswolle,
                    oder wie wir Profis sagen KMF (künstliche Mineralfasern), is seit 2000 als potentiell krebserregend
                    eingestuft wenn die Fasern eingeatmet werden. Vorallem die alte Glaswolle die vor 1996 verbaut wurde.
                  </MobileParagraph>
                  <MobileParagraph>
                    In Bielefeld stehen noch tausende Häuser mit alter Glaswolle-Dämmung drin. Besonders in den
                    Wohnsiedlungen die in den 70ern und 80ern hochgezogen wurden - Sennestadt, Teile von Heepen,
                    viele Einfamilienhäuser in Jöllenbeck. Wenn Sie sowas anfassen wollen brauchts nen Fachbetrieb
                    der nach TRGS 521 arbeitet. Das sind wir.
                  </MobileParagraph>
                </MobileSection>

                <CollapsibleTextSection
                  title="Was is Glaswolle überhaupt und warum is die gefährlich?"
                  content={
                    <>
                      <MobileParagraph>
                        Glaswolle is ne Dämmung aus feinen Glasfasern - wurde massenhaft verbaut weil billig und gut
                        dämmt. Problem: Die Fasern sind so dünn dass die bis tief in die Lunge kommen können wenn man
                        die einatmet. Vorallem alte Glaswolle die vor 1996 hergestellt wurde hat Fasern die als
                        "möglicherweise krebserzeugend" gelten. Deshalb muss die fachgerecht entsorgt werden, nicht
                        einfach in nen Müllsack und aufn Wertstoffhof!
                      </MobileParagraph>
                      <MobileParagraph>
                        Neuere Glaswolle (ab 2000) hat nen sogenannten "Biosolubilität" - heisst die Fasern lösen
                        sich in der Lunge auf. Is trotzdem nervig und juckt wie Hölle, aber nicht so gefährlich.
                        Problem: Kaum einer weiss genau wann seine Dämmung verbaut wurde. Deshalb behandeln wir jede
                        Glaswolle als wärs die alte, gefährliche Variante. Sicher is sicher.
                      </MobileParagraph>
                      <MobileParagraph>
                        In Bielefeld haben wir schon die wildesten Sachen gesehen. Letztens in Quelle: Da hatte einer
                        die Glaswolle einfach lose aufm Dachboden rumliegen, keine Folie drüber, nix. Jedes mal wenn
                        jemand aufs Dach is wurden Fasern aufgewirbelt und sind durchs ganze Haus. Familie hatte
                        ständig Husten und juckende Haut. Erst als wir das professionell entsorgt haben gings besser.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="KMF Entsorgung Bielefeld - So machts ein Profi"
                  content={
                    <>
                      <MobileParagraph>
                        KMF steht für "Künstliche Mineralfasern" - dazu gehört Glaswolle, Steinwolle und Schlackenwolle.
                        Alles Dämmstoffe die ähnlich entsorgt werden müssen. Wir arbeiten nach TRGS 521, das is die
                        technische Regel die vorschreibt wies gemacht werden muss. Klingt trocken, is aber wichtig
                        weil da genau drinsteht wie man sich und andere schützt.
                      </MobileParagraph>
                      <MobileParagraph>
                        Erstmal: Vollschutz! Unsere Jungs tragen Einweganzüge, Handschuhe und FFP3-Masken. Nich so
                        nen billigen Mundschutz ausm Baumarkt, sondern richtige Atemschutzmasken die feine Fasern
                        filtern. Dann wird der Bereich abgeschottet damit keine Fasern ins restliche Haus kommen.
                        Bei größeren Sachen bauen wir sogar Schleusen auf wie bei Asbestsanierungen.
                      </MobileParagraph>
                      <MobileParagraph>
                        Die Glaswolle wird vorsichtig abgebaut - nich reissen oder zerbröseln, sonst fliegen
                        Millionen Fasern durch die Luft! Alles kommt direkt in spezielle Big Bags die dicht sind,
                        werden zugebunden und kommen dann zu ner zugelassenen Deponie. In Bielefeld fahren wir meist
                        nach Herford oder Paderborn, da sind die nächsten Deponien die KMF annehmen. Normale
                        Wertstoffhöfe nehmen das Zeug nicht!
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Glaswolle entsorgen Bielefeld - Typische Einsatzorte"
                  content={
                    <>
                      <MobileParagraph>
                        Wo finden wir in Bielefeld am meisten alte Glaswolle? Hauptsächlich in Dachböden! Die
                        Zwischensparrendämmung in Einfamilienhäusern aus den 70ern und 80ern is fast immer Glaswolle.
                        Wenn Sie in Brackwede, Jöllenbeck oder Schildesche wohnen und Ihr Haus is aus der Zeit -
                        können Sie davon ausgehen dass da oben Glaswolle liegt.
                      </MobileParagraph>
                      <MobileParagraph>
                        Zweiter Klassiker: Rohrleitungsdämmung im Keller. Grade in Mehrfamilienhäusern wurden die
                        Heizungsrohre oft mit Glaswolle ummantelt. Problem: Die is meist nich verkapselt, sondern
                        liegt frei. Jedes Mal wenns im Keller zugig is fliegen Fasern rum. Haben wir oft in der
                        Bielefelder Altstadt und in Sennestadt bei den Plattenbauten.
                      </MobileParagraph>
                      <MobileParagraph>
                        Dann noch: Holzständerwände in Gewerbegebäuden. Viele Büros und Praxen haben Trennwände die
                        mit Glaswolle gedämmt sind. Wenn die umgebaut werden sollen muss die raus. Und zuletzt:
                        Flachdächer! Einige Flachdächer, vorallem von Gewerbebauten entlang der A2 oder in Brake,
                        haben Glaswolle als Dämmung. Wenn die saniert werden brauchts nen Fachbetrieb.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Steinwolle Entsorgung Bielefeld - Der kleine Unterschied"
                  content={
                    <>
                      <MobileParagraph>
                        Steinwolle is der Cousin von Glaswolle - wird aus geschmolzenem Gestein gemacht statt aus
                        Glas. Is etwas schwerer und hat bessere Brandschutzeigenschaften. Deshalb findet man
                        Steinwolle oft in gewerblichen Gebäuden wo Brandschutz wichtig is. Zum Beispiel rund um
                        Stahlträger, in Brandschutztüren oder als Fassadendämmung bei Hochhäusern.
                      </MobileParagraph>
                      <MobileParagraph>
                        Für uns macht das keinen großen Unterschied - Steinwolle wird genau wie Glaswolle entsorgt.
                        Gleiche Schutzausrüstung, gleiches Verfahren, gleiche Deponien. Nur erkennen muss mans:
                        Steinwolle is meist grau oder braun, Glaswolle eher gelb. Und Steinwolle krümelt mehr,
                        Glaswolle is fluffiger.
                      </MobileParagraph>
                      <MobileParagraph>
                        Hatten letztens in nem alten Industriegebäude in Brackwede ne Mischung aus beidem. Manche
                        Wände mit Glaswolle, andere mit Steinwolle. Kein Problem für uns - kommt alles in die gleichen
                        Big Bags und wird fachgerecht entsorgt. Wichtig is nur dass wir vorher wissen was uns
                        erwartet, damit wir genug Material und die richtige Ausrüstung mitbringen.
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Mineralwolle entsorgen Bielefeld - Alte vs Neue Dämmung"
                  content={
                    <>
                      <MobileParagraph>
                        "Mineralwolle" is der Oberbegriff für Glas- und Steinwolle zusammen. Wichtig zu wissen: Es
                        gibt alte und neue Mineralwolle, und die unterscheiden sich erheblich! Alte Mineralwolle
                        (vor 1996) hat lange, dünne Fasern die sich nich in der Lunge auflösen. Neue Mineralwolle
                        (ab 2000) hat dickere, kürzere Fasern die biologisch löslich sind - heisst die lösen sich
                        in der Lunge auf bevor sie Schaden anrichten können.
                      </MobileParagraph>
                      <MobileParagraph>
                        Problem: Kaum einer weiss genau was er hat! Deshalb gehen wir im Zweifelsfall immer vom
                        schlimmsten Fall aus. In Bielefeld haben wir überwiegend mit alter Mineralwolle zu tun -
                        die meisten Häuser hier sind ja aus den 70ern und 80ern. Ausnahme: Neubauten und frisch
                        sanierte Gebäude, da is meist neue Mineralwolle drin. Die darf dann auch auf normale
                        Bauschuttdeponien, braucht aber trotzdem noch Schutzausrüstung beim Ausbau.
                      </MobileParagraph>
                      <MobileParagraph>
                        Wenn Sie nicht sicher sind welche Mineralwolle Sie haben: Einfach uns anrufen! Wir können
                        oft schon am Telefon sagen obs alte oder neue Dämmung is, basierend auf Baujahr und Aussehen.
                        Und wenn nich - kommen wir vorbei, schauen uns das an und sagen Ihnen kostenlos was Sache is.
                        Keine versteckte Kosten, keine bösen Überraschungen!
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Dämmwolle Entsorgung - Was kostet das?"
                  content={
                    <>
                      <MobileParagraph>
                        Die Frage aller Fragen! Pauschal gehts schwer zu sagen weil jedes Projekt anders is. Aber
                        grobe Richtwerte: Kleine Mengen (bis 5 Kubikmeter, zum Beispiel Dachboden von nem
                        Einfamilienhaus) kosten meist zwischen 800 und 1.500 Euro inklusive Entsorgung. Größere
                        Mengen werden billiger pro Kubikmeter - ab 20 Kubikmetern sinds oft nur noch 100-150 Euro
                        pro Kubikmeter.
                      </MobileParagraph>
                      <MobileParagraph>
                        Was treibt den Preis? Zugänglichkeit! Wenn wir die Glaswolle easy vom Dachboden holen können,
                        gehts schnell und günstig. Wenn wir über enge Treppen, durch bewohnte Räume oder mit ner
                        Hebebühne aufs Dach müssen, wirds teurer. Auch wichtig: Wie fest is die Dämmung verbaut?
                        Lose Matten sind schnell raus, verklebte oder verpresste Dämmung dauert länger.
                      </MobileParagraph>
                      <MobileParagraph>
                        Entsorgungskosten kommen noch dazu - aktuell etwa 200-300 Euro pro Tonne KMF-Abfall. Klingt
                        viel, aber Glaswolle wiegt zum Glück nicht viel. 10 Kubikmeter sind oft nur 1-2 Tonnen.
                        Unterm Strich: Rechnen Sie für nen normalen Dachboden mit 1.000 bis 2.000 Euro. Dafür haben
                        Sie die Gewissheit dass alles fachgerecht und sicher gemacht wird!
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="KMF Sanierung Bielefeld - Der komplette Ablauf"
                  content={
                    <>
                      <MobileParagraph>
                        Wie läuft so ne KMF-Sanierung ab? Erstmal rufen Sie uns an oder schreiben ne Mail. Wir machen
                        nen Termin für ne kostenlose Besichtigung. Einer von unseren Jungs kommt vorbei, schaut sich
                        an was Sache is, misst aus wieviel Dämmung raus muss und macht Fotos. Dann kriegen Sie binnen
                        2-3 Tagen nen schriftliches Angebot. Festpreis, keine versteckten Kosten!
                      </MobileParagraph>
                      <MobileParagraph>
                        Wenn Sie zusagen planen wir den Termin. Bei kleineren Sachen gehts oft schon innerhalb von
                        1-2 Wochen, größere Projekte brauchen etwas Vorlauf weil wir da mehrere Leute einplanen müssen.
                        Am Tag selbst kommen wir mit allem was wir brauchen: Schutzausrüstung, Absauggeräte, Big Bags,
                        Folien zur Abschottung. Dann gehts los!
                      </MobileParagraph>
                      <MobileParagraph>
                        Dauer? Kommt drauf an. Nen normalen Dachboden schaffen wir meist an einem Tag. Größere
                        Gebäude oder schwer zugängliche Bereiche können auch mal 3-4 Tage dauern. Aber: Wir arbeiten
                        sauber und zügig. Am Ende wird alles gründlich gereinigt - mit Industriestaubsauger der auch
                        feine Fasern rausholt. Sie kriegen die Entsorgungsnachweise von der Deponie und alles is
                        ready für den nächsten Schritt, egal ob das ne neue Dämmung, ein Ausbau oder ne Sanierung is!
                      </MobileParagraph>
                    </>
                  }
                />

                <CollapsibleTextSection
                  title="Warum RückbauPRO für Ihre Glaswolle-Entsorgung in Bielefeld?"
                  content={
                    <>
                      <MobileParagraph>
                        Klar könnten Sie auch versuchen die Glaswolle selbst rauszureissen. Aber: Wollen Sie das
                        wirklich? Das Zeug juckt wie Sau, die Fasern kommen überall hin, und wenn Sie nich richtig
                        geschützt sind atmens ein. Wir machen das täglich, haben die Erfahrung und die richtige
                        Ausrüstung. Außerdem: Wenn Sie die Glaswolle falsch entsorgen drohen Bußgelder!
                      </MobileParagraph>
                      <MobileParagraph>
                        Was uns ausmacht? Erstens: Wir sind TRGS 521 zertifiziert. Das bedeutet wir dürfen das
                        offiziell machen und unsere Leute sind geschult. Zweitens: Lokales Wissen. Wir kennen jeden
                        Stadtteil in Bielefeld, wissen wo welche Dämmungen verbaut wurden und welche Besonderheiten
                        es gibt. Drittens: Festpreise! Sie wissen vorher genau was es kostet, keine Nachkalkulationen.
                      </MobileParagraph>
                      <MobileParagraph>
                        Und viertens: Wir sind schnell und flexibel. Rufen Sie uns Montag an, können wir oft schon
                        Mittwoch oder Donnerstag bei Ihnen sein. Keine monatelangen Wartezeiten wie bei manchen
                        anderen Firmen. Plus: Wenn wir sowieso für Sie arbeiten (zum Beispiel bei ner Sanierung oder
                        Entkernung), können wir die Glaswolle gleich mit entsorgen - spart Zeit und Geld!
                      </MobileParagraph>
                    </>
                  }
                />
              </MobileOptimizedContent>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-slate-800/60 to-amber-900/40 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-4">
                    Sofort-Kontakt
                  </h3>
                  <div className="space-y-4">
                    <a href="tel:+4952199998480" className="flex items-center space-x-3 text-white/80 hover:text-amber-300 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>0521 9999 8480</span>
                    </a>
                    <Link href="/kontakt" className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center px-6 py-3 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all font-bold">
                      Kostenlose Beratung
                    </Link>
                  </div>
                </div>

                {/* Service Info */}
                <div className="bg-gradient-to-br from-slate-800/60 to-amber-900/40 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-4">
                    Unsere KMF-Services
                  </h3>
                  <div className="space-y-3 text-white/70 text-sm">
                    {[
                      'Glaswolle-Entsorgung',
                      'Steinwolle-Entsorgung',
                      'Mineralfaser-Sanierung',
                      'Dämmwolle-Ausbau',
                      'TRGS 521 konform',
                      'Komplette Entsorgung'
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-gradient-to-br from-slate-800/60 to-amber-900/40 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-4">
                    Einsatzgebiete
                  </h3>
                  <div className="space-y-2 text-white/70 text-sm">
                    {[
                      'Bielefeld-Mitte',
                      'Brackwede',
                      'Schildesche',
                      'Gadderbaum',
                      'Sennestadt',
                      'Heepen',
                      'Stieghorst',
                      'Jöllenbeck',
                      'Dornberg',
                      'Quelle',
                      'Ummeln',
                      'Oldentrup'
                    ].map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/50 to-amber-950/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-6">
              Häufige Fragen
            </h2>
          </div>

          <MobileFAQSection
            title="Häufige Fragen zur Glaswolle-Entsorgung"
            faqs={[
              {
                question: "Kann ich Glaswolle selbst entsorgen?",
                answer: "Technisch ja, aber wir raten stark davon ab! Alte Glaswolle kann krebserregende Fasern enthalten. Ohne richtige Schutzausrüstung (FFP3-Maske, Einweganzug) atmen Sie die ein. Außerdem nehmen normale Wertstoffhöfe keine KMF an - Sie bräuchten ne Genehmigung und müssten zur Sondermülldeponie fahren. Kostet am Ende mehr Zeit und Geld als wenn Sie uns direkt beauftragen."
              },
              {
                question: "Wie erkenne ich ob meine Dämmung Glaswolle ist?",
                answer: "Glaswolle ist meistens gelb bis goldfarben, fluffig und faserig. Wenn Sie mit der Hand drüber gehen juckts wie verrückt - das sind die Fasern die sich in die Haut bohren. Steinwolle ist eher grau oder braun. Wenn Sie unsicher sind: Schicken Sie uns einfach nen Foto per WhatsApp, wir können das meist sofort identifizieren!"
              },
              {
                question: "Was kostet Glaswolle-Entsorgung in Bielefeld?",
                answer: "Für nen normalen Dachboden (ca. 80-100 m²) liegen die Kosten meist zwischen 1.000 und 2.000 Euro komplett mit Ausbau und Entsorgung. Kommt drauf an wie viel Glaswolle drin is und wie gut man rankommt. Wir machen kostenlose Besichtigungen und geben Ihnen dann nen Festpreis - keine versteckten Kosten!"
              },
              {
                question: "Wie lange dauert die Entsorgung?",
                answer: "Nen Standard-Dachboden schaffen wir meist an einem Tag. Größere Gebäude oder komplizierte Situationen können 2-4 Tage dauern. Wir arbeiten aber zügig und sauber - am Ende is alles weg und gründlich gereinigt. Meistens können wir schon innerhalb von 1-2 Wochen nach Ihrer Anfrage bei Ihnen sein."
              },
              {
                question: "Muss ich während der Entsorgung ausziehen?",
                answer: "Bei Dachböden normalerweise nicht - wir schotten den Bereich ab damit keine Fasern ins Haus kommen. Sie können drinbleiben, sollten aber nich im Arbeitsbereich rumhängen. Bei Arbeiten in bewohnten Räumen empfehlen wir manchmal für 1-2 Tage woanders zu schlafen, grade wenn kleine Kinder im Haus sind. Kommt aber immer auf die Situation an."
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-800/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-white mb-6">
            Jetzt kostenlose Beratung zur Glaswolle-Entsorgung
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Schnelle Terminvergabe in ganz Bielefeld - Meist noch diese Woche möglich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all font-bold text-lg shadow-lg shadow-amber-500/30">
              Kostenlose Beratung
            </Link>
            <a href="tel:+4952199998480" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg">
              0521 9999 8480
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection
        title="Kostenloses Angebot für Glaswolle Entsorgung Bielefeld"
        subtitle="TRGS 521 konforme KMF-Entsorgung - sicher und professionell"
      />

      {/* Footer */}
      /* Related Services - Internal Linking for SEO */

      <RelatedServicesBielefeld currentSlug="glaswolle-entsorgung-bielefeld" category="sanierung" maxServices={6} />


      <FooterWithMarquee />
    </main>
  );
}
