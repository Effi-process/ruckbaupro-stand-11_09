'use client';
import Link from 'next/link';

interface RelatedService {
  name: string;
  slug: string;
  description: string;
}

const ALL_BIELEFELD_SERVICES: RelatedService[] = [
  { name: 'Asbestentfernung', slug: 'asbestentfernung-bielefeld', description: 'TRGS 519 zertifizierte Asbestsanierung' },
  { name: 'Asbestmaterialentfernung', slug: 'asbestmaterialentfernung-bielefeld', description: 'Fachgerechte Entsorgung von Asbestmaterial' },
  { name: 'Rückbau', slug: 'rueckbau-bielefeld', description: 'Professioneller Gebäuderückbau' },
  { name: 'Entkernung', slug: 'entkernung-bielefeld', description: 'Komplette Gebäudeentkernung' },
  { name: 'Komplettentkernung', slug: 'komplettentkernung-bielefeld', description: 'Vollständige Entkernung von Immobilien' },
  { name: 'Teilentkernung', slug: 'teilentkernung-bielefeld', description: 'Selektive Entkernungsarbeiten' },
  { name: 'Gebäudeabbruch', slug: 'gebaeudeabbruch-bielefeld', description: 'Kompletter Gebäudeabriss' },
  { name: 'Industrieabbruch', slug: 'industrieabbruch-bielefeld', description: 'Abbruch von Industrieanlagen' },
  { name: 'Innenabbruch', slug: 'innenabbruch-bielefeld', description: 'Innenraum-Abbrucharbeiten' },
  { name: 'Komplettabriss', slug: 'komplettabriss-bielefeld', description: 'Vollständiger Gebäudeabriss' },
  { name: 'Selektiver Abbruch', slug: 'selektiver-abbruch-bielefeld', description: 'Gezielter Teilabbruch' },
  { name: 'Betonabbruch', slug: 'betonabbruch-bielefeld', description: 'Abbruch von Betonkonstruktionen' },
  { name: 'Hochbau Abriss', slug: 'hochbau-abriss-bielefeld', description: 'Abriss von Hochbauten' },
  { name: 'Sanierung', slug: 'sanierung-bielefeld', description: 'Gebäudesanierung' },
  { name: 'Komplettsanierung', slug: 'komplettsanierung-bielefeld', description: 'Vollständige Gebäudesanierung' },
  { name: 'Teilsanierung', slug: 'teilsanierung-bielefeld', description: 'Teilweise Sanierungsarbeiten' },
  { name: 'Schadstoffsanierung', slug: 'schadstoffsanierung-bielefeld', description: 'Sanierung schadstoffbelasteter Gebäude' },
  { name: 'Schimmelpilzsanierung', slug: 'schimmelpilzsanierung-bielefeld', description: 'Professionelle Schimmelbekämpfung' },
  { name: 'PCB Sanierung', slug: 'pcb-sanierung-bielefeld', description: 'PCB-Dekontamination' },
  { name: 'KMF Entfernung', slug: 'kmf-entfernung-bielefeld', description: 'Künstliche Mineralfaser-Entfernung' },
  { name: 'Glaswolle Entsorgung', slug: 'glaswolle-entsorgung-bielefeld', description: 'Fachgerechte Glaswollentsorgung' },
  { name: 'Demontage', slug: 'demontage-bielefeld', description: 'Professionelle Demontagearbeiten' },
  { name: 'Aufräumarbeiten', slug: 'aufraeumarbeiten-bielefeld', description: 'Baustellenaufräumung' },
  { name: 'Schutt-Aufräumarbeiten', slug: 'schutt-aufraeumarbeiten-bielefeld', description: 'Schuttbeseitigung' },
  { name: 'Räumung & Rodung', slug: 'raeumung-rodung-bielefeld', description: 'Grundstücksräumung' },
  { name: 'Landschaftsbau-Vorbereitung', slug: 'landschaftsbau-vorbereitung-bielefeld', description: 'Vorbereitung für Landschaftsbau' },
  { name: 'Schrottumschlag', slug: 'schrottumschlag-bielefeld', description: 'Schrottentsorgung und Recycling' },
  { name: 'Fachgerechte Entsorgung', slug: 'fachgerechte-entsorgung-bielefeld', description: 'Professionelle Abfallentsorgung' },
  { name: 'Gefahrenstoff-Entsorgung', slug: 'gefahrenstoff-entsorgung-bielefeld', description: 'Entsorgung gefährlicher Stoffe' },
  { name: 'Reinigung', slug: 'reinigung-bielefeld', description: 'Baustellenreinigung' },
  { name: 'Oberflächenreinigung', slug: 'oberflaechenreinigung-bielefeld', description: 'Professionelle Oberflächenreinigung' },
  { name: 'Entstaubung', slug: 'entstaubung-bielefeld', description: 'Industrielle Entstaubung' },
  { name: 'Freimessung', slug: 'freimessung-bielefeld', description: 'Schadstoff-Freimessung' },
  { name: 'Durchbrüche', slug: 'durchbrueche-bielefeld', description: 'Wand- und Deckendurchbrüche' },
  { name: 'Abbruchgenehmigung', slug: 'abbruchgenehmigung-bielefeld', description: 'Genehmigungsservice für Abbruch' },
  { name: 'Behördengänge', slug: 'behoerdengaenge-bielefeld', description: 'Unterstützung bei Behördengängen' },
  { name: 'Dokumentationsverfahren', slug: 'dokumentationsverfahren-bielefeld', description: 'Baubegleitende Dokumentation' },
  { name: 'Schadstoffanmeldung', slug: 'schadstoffanmeldung-bielefeld', description: 'Anmeldung von Schadstoffen' },
  { name: 'TRGS 519', slug: 'trgs-519-bielefeld', description: 'TRGS 519 konforme Arbeiten' },
];

interface RelatedServicesBielefeldProps {
  currentSlug: string;
  category?: 'abbruch' | 'sanierung' | 'entkernung' | 'entsorgung' | 'beratung' | 'all';
  maxServices?: number;
}

export default function RelatedServicesBielefeld({
  currentSlug,
  category = 'all',
  maxServices = 6
}: RelatedServicesBielefeldProps) {

  // Filter out current page
  let services = ALL_BIELEFELD_SERVICES.filter(s => s.slug !== currentSlug);

  // Filter by category if specified
  if (category !== 'all') {
    const categoryKeywords: { [key: string]: string[] } = {
      'abbruch': ['abbruch', 'abriss', 'demontage'],
      'sanierung': ['sanierung', 'schimmel', 'pcb', 'schadstoff'],
      'entkernung': ['entkernung'],
      'entsorgung': ['entsorgung', 'schutt', 'schrot', 'räumung', 'rodung'],
      'beratung': ['genehmigung', 'behörde', 'dokumentation', 'anmeldung', 'trgs']
    };

    const keywords = categoryKeywords[category] || [];
    services = services.filter(s =>
      keywords.some(kw => s.slug.toLowerCase().includes(kw))
    );
  }

  // Randomly select services for variety (but consistently for SSR)
  const selectedServices = services.slice(0, maxServices);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-800/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Weitere Leistungen in Bielefeld
        </h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
          Entdecken Sie unser komplettes Leistungsspektrum für Bielefeld und Umgebung
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {selectedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-white/70 text-sm mb-3">
                {service.description}
              </p>
              <span className="text-sky-400 text-sm font-semibold flex items-center gap-2">
                Mehr erfahren
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/standorte/bielefeld"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-sky-500/50"
          >
            Alle Leistungen in Bielefeld ansehen
          </Link>
        </div>

        {/* Stadtteile für lokale SEO */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            Wir sind in allen Bielefelder Stadtteilen für Sie da:
            <span className="text-white/80"> Brackwede, Senne, Heepen, Sennestadt, Stieghorst, Jöllenbeck, Schildesche, Gadderbaum, Dornberg, Mitte</span>
          </p>
        </div>
      </div>
    </section>
  );
}
