import Image from 'next/image';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function AsbestsanierungPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cerulean font-semibold text-sm uppercase tracking-wider">Spezialisierte Sanierung</span>
              <h1 className="text-5xl md:text-6xl font-black text-white mt-4 mb-6">
                Asbest-Sanierung
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professionelle und sichere Entfernung von Asbest nach TRGS 519. Zertifizierte Fachkräfte garantieren höchste Sicherheitsstandards für Ihre Gesundheit und Sicherheit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/kontakt" 
                  className="bg-cerulean text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-dye transition-colors"
                >
                  Kostenlose Beratung
                </Link>
                <Link 
                  href="/leistungen" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Alle Leistungen
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/asbestos-professional.png"
                alt="Professionelle Asbestsanierung"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unsere Leistungen im Detail</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "certificate", title: "TRGS 519 zertifiziert", description: "Alle Arbeiten nach aktuellen Vorschriften" },
              { icon: "shield", title: "Luftmessungen inklusive", description: "Kontinuierliche Überwachung der Luftqualität" },
              { icon: "truck", title: "Fachgerechte Entsorgung", description: "Sichere Entsorgung über zugelassene Deponien" },
              { icon: "document", title: "Komplette Dokumentation", description: "Vollständige Dokumentation aller Arbeitsschritte" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <Icon name={feature.icon} size={48} className="text-cerulean mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Unser Prozess</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Erstbegehung & Analyse", description: "Kostenlose Begehung vor Ort und Analyse der Asbestbelastung" },
              { step: "2", title: "Angebotserstellung", description: "Detailliertes Angebot mit transparenten Kosten" },
              { step: "3", title: "Fachgerechte Sanierung", description: "Durchführung nach TRGS 519 mit zertifizierten Fachkräften" },
              { step: "4", title: "Abnahme & Dokumentation", description: "Offizielle Abnahme und vollständige Dokumentation" }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Benötigen Sie professionelle Asbestsanierung?</h2>
          <p className="text-xl text-white/80 mb-8">
            Kontaktieren Sie uns für eine kostenlose Erstberatung und ein unverbindliches Angebot.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center gap-2 bg-cerulean text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-dye transition-colors"
          >
            <Icon name="phone" size={20} />
            Jetzt kostenlos beraten lassen
          </Link>
        </div>
      </section>
    </main>
  );
}