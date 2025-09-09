export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Häufige Fragen für Asbestsanierung
export const asbestFAQs: FAQItem[] = [
  {
    question: "Was kostet eine Asbestsanierung?",
    answer: "Die Kosten für eine Asbestsanierung variieren je nach Art und Umfang. Asbestdachsanierungen beginnen bei etwa 35€/m², während Spritzasbestsanierungen bis zu 120€/m² kosten können. Wir erstellen Ihnen nach einer kostenlosen Besichtigung ein verbindliches Angebot mit Festpreisgarantie."
  },
  {
    question: "Wie erkenne ich Asbest in meinem Gebäude?",
    answer: "Asbest kann in vielen Baumaterialien enthalten sein, die vor 1993 verbaut wurden. Typische Fundorte sind Eternitplatten, Bodenbeläge, Putze und Dämmmaterialien. Eine sichere Identifikation ist nur durch eine Laboranalyse möglich. Wir bieten professionelle Probenahmen und Analysen an."
  },
  {
    question: "Ist eine Asbestsanierung gesetzlich vorgeschrieben?",
    answer: "Eine Sanierungspflicht besteht bei beschädigten Asbestprodukten oder wenn bei Renovierungsarbeiten Asbestfasern freigesetzt werden können. Die TRGS 519 regelt den Umgang mit Asbest. Wir beraten Sie gerne zu Ihren gesetzlichen Pflichten."
  },
  {
    question: "Wie lange dauert eine Asbestsanierung?",
    answer: "Die Dauer hängt vom Umfang ab. Kleine Sanierungen können in 1-2 Tagen abgeschlossen werden, größere Projekte dauern mehrere Wochen. Die Planung und Genehmigung nimmt zusätzlich 1-2 Wochen in Anspruch. Wir bieten auch Express-Services für Notfälle."
  },
  {
    question: "Kann ich während der Sanierung im Gebäude bleiben?",
    answer: "Bei Asbestsanierungen müssen die betroffenen Bereiche abgeschottet werden. Je nach Umfang ist eine temporäre Umsiedlung notwendig. Wir erstellen einen detaillierten Ablaufplan und minimieren die Beeinträchtigungen."
  },
  {
    question: "Wer darf Asbestsanierungen durchführen?",
    answer: "Asbestsanierungen dürfen nur von Fachbetrieben mit TRGS 519 Sachkundenachweis durchgeführt werden. Unsere Mitarbeiter sind alle entsprechend qualifiziert und geschult. Eigenständige Sanierungen sind illegal und hochgefährlich."
  },
  {
    question: "Sind Sie für Asbestsanierungen versichert?",
    answer: "Ja, wir verfügen über eine spezielle Betriebshaftpflichtversicherung für Schadstoffsanierungen mit einer Deckungssumme von 10 Millionen Euro. Zusätzlich sind alle unsere Mitarbeiter bei der BG BAU versichert."
  },
  {
    question: "Was passiert mit dem Asbest nach der Entfernung?",
    answer: "Asbest wird in speziellen Big-Bags luftdicht verpackt und zu zugelassenen Sondermülldeponien transportiert. Wir stellen Ihnen alle Entsorgungsnachweise zur Verfügung. Die ordnungsgemäße Entsorgung ist gesetzlich streng geregelt."
  },
  {
    question: "Bieten Sie auch Schadstoffanalysen an?",
    answer: "Ja, wir führen umfassende Schadstoffanalysen durch. Neben Asbest testen wir auch auf KMF, PCB, PAK und andere Gebäudeschadstoffe. Die Probenahme erfolgt nach VDI 3492, die Analyse in akkreditierten Laboren."
  },
  {
    question: "Gibt es Förderungen für Asbestsanierungen?",
    answer: "In einigen Fällen sind Förderungen durch die KfW oder regionale Programme möglich, besonders bei energetischen Sanierungen. Wir unterstützen Sie gerne bei der Beantragung und Abwicklung von Fördermitteln."
  }
];