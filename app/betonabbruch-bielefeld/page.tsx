'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import MultiStepWizard from '../components/MultiStepWizard';

export default function BetonabbruchBielefeld() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-oxford-blue">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Betonabbruch Bielefeld - Präzision trifft Power
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Gestern haben wir wieder mal gezeigt, was möglich ist - die alte Betonbrücke am
              Ostwestfalendamm, 40 Zentimeter dicker Stahlbeton, in nur zwei Tagen komplett zerlegt.
              Wenn Sie in Bielefeld Betonabbruch brauchen, dann wissen Sie jetzt, wer die richtigen
              Maschinen und das Know-how hat.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">

            <div className="prose prose-lg max-w-none text-white/90">
              <p className="text-lg leading-relaxed mb-8">
                Als Abrissunternehmen in Bielefeld haben wir schon einiges an Beton klein gemacht -
                vom Einfamilienhaus-Fundament in Heepen bis zur kompletten Industriehalle bei Dr. Oetker.
                Betonabbruch ist unser täglich Brot und wir wissen genau, worauf es ankommt. Jeder
                Beton ist anders, jedes Gebäude hat seine eigenen Herausforderungen. In der Bielefelder
                Altstadt müssen wir leise arbeiten, in Brackwede können wir mit schwerem Gerät ran.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Betonschneiden
              </h2>
              <p className="mb-6">
                Beim Betonschneiden in Bielefeld kommt es auf Millimeter an. Letzte Woche waren wir
                im Uni-Hauptgebäude und mussten eine neue Türöffnung durch 30 Zentimeter Stahlbeton
                schneiden - während der Vorlesungsbetrieb lief! Mit unseren Diamantsägen geht das
                fast staubfrei und relativ leise. Die Studenten haben kaum was gemerkt, nur das
                leichte Surren der Säge war zu hören.
              </p>
              <p className="mb-6">
                Wir schneiden Beton bis zu einer Dicke von 80 Zentimetern - das schaffen nicht viele
                in Bielefeld. Ob für neue Fensteröffnungen, Treppen oder Durchbrüche für Leitungen -
                unsere Schnitte sind präzise und sauber. Besonders in den alten Bunkern aus dem 2.
                Weltkrieg, die es überall in Bielefeld noch gibt, ist das wichtig. Der Beton dort ist
                härter als alles, was heute gebaut wird. Aber wir kriegen auch den klein.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Betonsägen
              </h2>
              <p className="mb-6">
                Unsere Betonsägen sind das Beste, was der Markt hergibt. Von der handlichen Motorsäge
                für kleine Arbeiten bis zur riesigen Wandsäge für dicke Betonwände. Letzte Woche haben
                wir in Jöllenbeck ein komplettes Parkdeck zersägt - 2000 Quadratmeter Betonfläche in
                handliche Stücke zerlegt. Die Anwohner haben Augen gemacht, als wir mit dem 5-Tonnen-
                Sägeblatt angerückt sind!
              </p>
              <p className="mb-6">
                Das Betonsägen in Bielefeld hat seine Tücken. Die alten Industriegebäude an der
                Eckendorfer Straße zum Beispiel - da weiss man nie, was einen erwartet. Manchmal
                sind da Stahlträger im Beton versteckt, die auf keinem Plan verzeichnet sind. Oder
                alte Leitungen, die längst vergessen wurden. Mit unserer Erfahrung und modernen
                Ortungsgeräten finden wir alles, bevor die Säge Schaden nimmt.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Kernbohrung
              </h2>
              <p className="mb-6">
                Kernbohrungen machen wir fast jeden Tag irgendwo in Bielefeld. Ob für neue Abwasserrohre,
                Lüftungsschächte oder Kabeldurchführungen - wir bohren Löcher von 10 bis 100 Zentimeter
                Durchmesser durch jeden Beton. Neulich im Klinikum Bielefeld mussten wir 50 Kernbohrungen
                für die neue Klimaanlage machen - alles während laufendem Betrieb, versteht sich.
              </p>
              <p className="mb-6">
                Das Schöne an Kernbohrungen ist: Es gibt keinen Dreck. Der Bohrkern kommt sauber raus
                und kann sogar noch verwendet werden. Ein Künstler aus dem Künstlerhaus in der Wertherstraße
                hat mal unsere Bohrkerne für eine Installation genommen. "Bielefelder Beton-Geschichte"
                hat er das Ding genannt. Jeder Bohrkern erzählt ja wirklich eine Geschichte - vom
                Material, vom Alter des Gebäudes, von der Zeit, als es gebaut wurde.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Abbrucharbeiten
              </h2>
              <p className="mb-6">
                Abbrucharbeiten in Bielefeld sind unser Kerngeschäft. Von der kleinen Garage in
                Schildesche bis zum kompletten Fabrikgebäude in Oldentrup - wir reißen alles ab,
                was weg muss. Der Betonabbruch ist dabei oft der schwierigste Teil. Moderne Gebäude
                haben oft Spannbeton, der beim Abbruch gefährlich werden kann. Die Spannung im Beton
                muss kontrolliert abgebaut werden, sonst fliegts einem um die Ohren.
              </p>
              <p className="mb-6">
                Letzten Monat haben wir das alte Hallenbad in Brackwede abgerissen. 3000 Kubikmeter
                Beton mussten weg. Mit unseren Abbruchbaggern und Hydraulikhämmern haben wir das in
                einer Woche geschafft. Der Lärm war enorm, aber die Anwohner waren froh, dass das
                alte Schandfleck endlich verschwindet. Jetzt entsteht dort ein schöner Park - auch
                sowas gehört zum Betonabbruch in Bielefeld dazu.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Wandsägen
              </h2>
              <p className="mb-6">
                Mit unseren Wandsägen schneiden wir durch Betonwände wie durch Butter - na ja, fast.
                Die diamantbesetzten Sägeblätter fressen sich durch den härtesten Beton. Besonders
                praktisch ist das bei nachträglichen Fenster- oder Türöffnungen. In den vielen
                50er-Jahre-Bauten in Bielefeld ist das oft gefragt. Die Leute wollen mehr Licht,
                größere Fenster, offenere Räume.
              </p>
              <p className="mb-6">
                Das Wandsägen erfordert viel Erfahrung. Man muss genau wissen, welche Wände tragend
                sind und welche nicht. In Bielefeld gibt's viele Plattenbauten aus den 70ern, besonders
                in Baumheide. Da ist fast jede Wand tragend - da kann man nicht einfach drauflos sägen.
                Wir arbeiten eng mit Statikern zusammen und sichern alles ab, bevor der erste Schnitt
                gemacht wird. Sicherheit geht vor, besonders beim Betonabbruch.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Seilsägen
              </h2>
              <p className="mb-6">
                Die Seilsäge ist unser Geheimwaffe für die richtig dicken Brocken. Mit einem
                Diamantseil, das sich durch den Beton frisst, können wir praktisch unbegrenzt dicke
                Betonteile durchtrennen. Am Johannisberg haben wir mal einen alten Bunker zerlegt -
                2 Meter dicke Wände! Mit normalen Sägen wär das unmöglich gewesen, aber die Seilsäge
                hat das geschafft.
              </p>
              <p className="mb-6">
                Seilsägen in Bielefeld ist besonders bei Brückenabbrüchen gefragt. Die vielen
                Autobahnbrücken der A2 und A33 müssen regelmäßig saniert oder ersetzt werden. Mit
                der Seilsäge schneiden wir ganze Brückensegmente raus - sauber und präzise. Das
                spart Zeit und Geld, weil der Verkehr nur kurz gesperrt werden muss. Die Bielefelder
                Pendler danken es uns!
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Fugenschneiden
              </h2>
              <p className="mb-6">
                Fugenschneiden ist Präzisionsarbeit. Dehnungsfugen, Scheinfugen, Pressfugen - jede
                hat ihre Funktion und muss exakt geschnitten werden. In Bielefeld sehen wir oft
                Probleme mit fehlenden oder falschen Fugen. Der Beton reisst dann unkontrolliert,
                besonders nach den kalten Wintern hier. Wir schneiden nachträglich Fugen ein und
                verhindern so größere Schäden.
              </p>
              <p className="mb-6">
                Auf dem Kesselbrink haben wir letztes Jahr komplett neue Fugen in den Betonboden
                geschnitten. Der alte Beton war gerissen und uneben. Mit unseren Fugenschneidern
                haben wir ein sauberes Fugenmuster reingeschnitten, das jetzt Bewegungen im Beton
                ausgleicht. Die Marktleute sind begeistert - keine Stolperfallen mehr, und es sieht
                auch noch gut aus!
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Betonbrechen
              </h2>
              <p className="mb-6">
                Beim Betonbrechen gehts zur Sache! Mit hydraulischen Betonbrechern zerkleinern wir
                massive Betonblöcke in handliche Stücke. Das ist laut, das ist staubig, aber manchmal
                gehts nicht anders. Besonders bei Fundamenten oder dicken Bodenplatten ist das oft
                die einzige Lösung. Der alte Güterbahnhof in Brackwede - da haben wir wochenlang
                Beton gebrochen. Fundamente von alten Lagerhallen, meterdicke Betonplatten von den
                Verladerampen.
              </p>
              <p className="mb-6">
                Das Betonbrechen in Bielefeld muss oft unter schwierigen Bedingungen stattfinden.
                Enge Innenhöfe in der Altstadt, direkt neben bewohnten Gebäuden, oder in der Nähe
                von empfindlichen Maschinen in Fabriken. Wir haben spezielle schallgedämpfte Brecher
                und arbeiten mit Wassernebel gegen den Staub. So kriegen wir auch in der dichtesten
                Bebauung den Beton klein, ohne dass sich die halbe Nachbarschaft beschwert.
              </p>

              <h2 className="text-3xl font-bold text-white mb-6 mt-12">
                Rückbau
              </h2>
              <p className="mb-6">
                Rückbau ist mehr als nur Abriss - es ist kontrollierte Demontage. In Bielefeld haben
                wir viele denkmalgeschützte Gebäude, wo nicht einfach die Abrissbirne geschwungen
                werden kann. Der alte Ringlockschuppen zum Beispiel - da musste jeder Stein einzeln
                nummeriert und vorsichtig ausgebaut werden. Der Beton drumherum wurde millimetergenau
                weggeschnitten, ohne die historische Substanz zu beschädigen.
              </p>
              <p className="mb-6">
                Beim Rückbau von Betongebäuden in Bielefeld achten wir besonders auf die Wiederverwertung.
                Der Beton wird nicht einfach auf die Deponie gekarrt, sondern aufbereitet und recycelt.
                Aus altem Beton wird Recycling-Schotter für neue Straßen. So haben wir schon tonnenweise
                Beton vom alten Stadtwerke-Gebäude in den Neubau der B61 eingebaut. Nachhaltigkeit ist
                uns wichtig - auch beim Betonabbruch.
              </p>

              <div className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ihr Partner für Betonabbruch in Bielefeld
                </h3>
                <p className="text-white/90 mb-4">
                  Mit über 20 Jahren Erfahrung im Betonabbruch kennen wir jeden Trick und jede
                  Herausforderung. Von der kleinen Kernbohrung bis zum kompletten Gebäudeabbruch -
                  wir haben das richtige Equipment und das Know-how. Unsere Mannschaft ist geschult,
                  zertifiziert und arbeitet nach allen Sicherheitsvorschriften.
                </p>
                <p className="text-white/90 mb-4">
                  In Bielefeld und Umgebung sind wir bekannt für schnelle, saubere Arbeit zu fairen
                  Preisen. Ob Privatmann oder Großunternehmen - wir behandeln jeden Auftrag mit der
                  gleichen Sorgfalt und Professionalität. Und wenn's mal richtig eilig ist, sind wir
                  auch am Wochenende für Sie da.
                </p>
                <p className="text-white/90">
                  Rufen Sie uns an und lassen Sie sich beraten. Wir kommen vorbei, schauen uns die
                  Sache an und machen Ihnen ein unverbindliches Angebot. Betonabbruch in Bielefeld -
                  das ist unser Ding!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-400/20 to-blue-400/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Betonabbruch in Bielefeld - Jetzt anfragen!
            </h2>
            <p className="text-white/80 mb-8">
              Kostenlose Besichtigung und Beratung für Ihr Betonabbruch-Projekt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:08000060970"
                className="inline-block px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-sky-400/30 transition-all duration-300"
              >
                📞 0800 0060970
              </a>
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Online-Anfrage →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterWithMarquee />
    </main>
  );
}