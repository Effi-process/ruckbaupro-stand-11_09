'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

export default function SEOTopicalMap() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const topicalMap = [
    {
      category: "Asbestsanierung",
      icon: "shield",
      color: "from-cerulean to-indigo-dye",
      description: "Professionelle und sichere Asbestentfernung nach TRGS 519",
      keywords: [
        {
          keyword: "Asbestsanierung Bielefeld",
          title: "Asbestsanierung Bielefeld ⚡ 24h Notdienst | RückbauPRO",
          headlines: [
            "Warum professionelle Asbestsanierung in Bielefeld lebenswichtig ist",
            "Die versteckten Gefahren von Asbest in Bielefelder Altbauten",
            "Kostenübersicht: Was kostet Asbestsanierung in Bielefeld 2024?"
          ]
        },
        {
          keyword: "Asbestentsorgung Kosten",
          title: "Asbestentsorgung Kosten 2024 💰 Transparent & Fair | RückbauPRO",
          headlines: [
            "Alle Kostenfaktoren bei der Asbestentsorgung erklärt",
            "Sparen bei der Asbestentsorgung - ohne Sicherheitsrisiko",
            "Förderungen und Zuschüsse für Asbestentsorgung nutzen"
          ]
        },
        {
          keyword: "TRGS 519 Zertifizierung",
          title: "TRGS 519 Zertifiziert ✓ Sichere Asbestsanierung | RückbauPRO",
          headlines: [
            "Was bedeutet TRGS 519 für Ihre Sicherheit?",
            "Der Ablauf einer TRGS 519 konformen Sanierung",
            "Checkliste: So erkennen Sie zertifizierte Fachbetriebe"
          ]
        }
      ]
    },
    {
      category: "Gebäudeabbruch",
      icon: "cube",
      color: "from-orange to-red-500",
      description: "Kontrollierter Abbruch mit modernster Technik",
      keywords: [
        {
          keyword: "Gebäudeabbruch Bielefeld",
          title: "Gebäudeabbruch Bielefeld 🏗️ Schnell & Sicher | RückbauPRO",
          headlines: [
            "In 5 Schritten zum erfolgreichen Gebäudeabbruch",
            "Abbruchgenehmigung in Bielefeld: Was Sie wissen müssen",
            "Nachhaltig abreißen: Recycling beim Gebäudeabbruch"
          ]
        },
        {
          keyword: "Abrisskosten Einfamilienhaus",
          title: "Abrisskosten Einfamilienhaus 📊 Kalkulator 2024 | RückbauPRO",
          headlines: [
            "Komplette Kostenaufstellung für Hausabriss",
            "Versteckte Kosten beim Hausabriss vermeiden",
            "Abriss vs. Sanierung: Die Kostenrechnung"
          ]
        },
        {
          keyword: "Selektiver Rückbau",
          title: "Selektiver Rückbau ♻️ Nachhaltig & Wirtschaftlich | RückbauPRO",
          headlines: [
            "Warum selektiver Rückbau Geld spart",
            "Wertvolle Materialien beim Rückbau gewinnen",
            "Die Zukunft des nachhaltigen Bauens"
          ]
        }
      ]
    },
    {
      category: "Schadstoffsanierung",
      icon: "warning",
      color: "from-yellow-500 to-orange",
      description: "Sichere Entfernung aller Gebäudeschadstoffe",
      keywords: [
        {
          keyword: "PCB Sanierung",
          title: "PCB Sanierung 🔬 Fachgerecht & Sicher | RückbauPRO",
          headlines: [
            "PCB in Fugenmassen: Die unterschätzte Gefahr",
            "PCB-Sanierung in Schulen und öffentlichen Gebäuden",
            "Gesundheitsrisiken durch PCB richtig einschätzen"
          ]
        },
        {
          keyword: "KMF Entsorgung",
          title: "KMF Entsorgung ⚠️ Mineralwolle sicher entsorgen | RückbauPRO",
          headlines: [
            "Alte Mineralwolle: Wann wird sie gefährlich?",
            "KMF erkennen und richtig bewerten",
            "Arbeitsschutz bei der KMF-Sanierung"
          ]
        },
        {
          keyword: "Schimmelsanierung Kosten",
          title: "Schimmelsanierung Kosten 💶 Festpreis-Garantie | RückbauPRO",
          headlines: [
            "Schimmel nachhaltig beseitigen - so geht's richtig",
            "Die häufigsten Fehler bei der Schimmelsanierung",
            "Versicherung und Schimmelschäden: Ihre Rechte"
          ]
        }
      ]
    },
    {
      category: "Entkernung",
      icon: "home",
      color: "from-indigo-dye to-oxford-blue",
      description: "Professionelle Gebäudeentkernung für Sanierung",
      keywords: [
        {
          keyword: "Entkernung Altbau",
          title: "Entkernung Altbau 🏚️ Substanz erhalten | RückbauPRO",
          headlines: [
            "Altbau entkernen ohne Bauschäden",
            "Denkmalschutz und Entkernung vereinen",
            "Moderne Technik in alten Mauern"
          ]
        },
        {
          keyword: "Komplettentkernung Kosten",
          title: "Komplettentkernung Kosten 📋 Transparent kalkuliert | RückbauPRO",
          headlines: [
            "Kostenfallen bei der Entkernung vermeiden",
            "Teil- vs. Komplettentkernung: Kostenvergleich",
            "Entkernung als Investition in die Zukunft"
          ]
        },
        {
          keyword: "Industrieentkernung",
          title: "Industrieentkernung 🏭 Großprojekte meistern | RückbauPRO",
          headlines: [
            "Produktionsausfall minimieren bei Industrieentkernung",
            "Sicherheit bei laufendem Betrieb gewährleisten",
            "Vom Industriegebäude zum modernen Workspace"
          ]
        }
      ]
    },
    {
      category: "Betonarbeiten",
      icon: "bulldozer",
      color: "from-gray-600 to-gray-800",
      description: "Präzise Betonbearbeitung mit Diamanttechnik",
      keywords: [
        {
          keyword: "Betonschneiden Bielefeld",
          title: "Betonschneiden Bielefeld 💎 Präzise & Staubfrei | RückbauPRO",
          headlines: [
            "Diamantsägen: Die saubere Lösung für Betonarbeiten",
            "Wanddurchbrüche ohne Erschütterungen",
            "Kernbohrungen für moderne Haustechnik"
          ]
        },
        {
          keyword: "Betonabbruch Kosten",
          title: "Betonabbruch Kosten 🔨 Faire Preise garantiert | RückbauPRO",
          headlines: [
            "Betonabbruch: Alle Kostenfaktoren im Überblick",
            "Sprengen vs. Sägen: Der Kostenvergleich",
            "Betonrecycling senkt Entsorgungskosten"
          ]
        },
        {
          keyword: "Betonsanierung Verfahren",
          title: "Betonsanierung Verfahren 🔧 Modern & Effizient | RückbauPRO",
          headlines: [
            "Innovative Methoden der Betonsanierung",
            "Betonschäden frühzeitig erkennen",
            "Nachhaltige Betoninstandsetzung"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Unsere Expertise im Detail
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            25 Jahre Erfahrung in über 500 spezialisierten Bereichen des Rückbaus und der Sanierung
          </p>
        </div>

        {/* SEO Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-3xl font-bold text-cerulean mb-1">15+</div>
            <div className="text-sm text-white/70">Hauptkategorien</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-1">75+</div>
            <div className="text-sm text-white/70">Spezialdienste</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-3xl font-bold text-orange mb-1">500+</div>
            <div className="text-sm text-white/70">Projekte 2024</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-sm text-white/70">Notdienst</div>
          </div>
        </div>

        {/* Topical Map Categories */}
        <div className="space-y-6">
          {topicalMap.map((topic, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-gradient-to-r ${topic.color} rounded-xl`}>
                    <Icon name={topic.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">{topic.category}</h3>
                    <p className="text-white/70 text-sm mt-1">{topic.description}</p>
                  </div>
                </div>
                <Icon
                  name="chevron-down"
                  size={24}
                  className={`text-white/60 transition-transform ${
                    expandedTopic === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedTopic === index && (
                <div className="px-6 pb-6 border-t border-white/10">
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    {topic.keywords.map((kw, kwIndex) => (
                      <div key={kwIndex} className="bg-white/5 rounded-xl p-4">
                        {/* Keyword */}
                        <div className="mb-3">
                          <span className="text-xs text-cerulean font-semibold uppercase tracking-wide">
                            Target Keyword
                          </span>
                          <h4 className="text-white font-bold text-lg mt-1">
                            {kw.keyword}
                          </h4>
                        </div>

                        {/* SEO Title */}
                        <div className="mb-4 p-3 bg-white/5 rounded-lg">
                          <span className="text-xs text-green-400 font-semibold">SEO Title</span>
                          <p className="text-white/90 text-sm mt-1">{kw.title}</p>
                        </div>

                        {/* Headlines */}
                        <div>
                          <span className="text-xs text-orange font-semibold uppercase tracking-wide">
                            Content Headlines
                          </span>
                          <ul className="mt-2 space-y-2">
                            {kw.headlines.map((headline, hIndex) => (
                              <li key={hIndex} className="flex items-start">
                                <Icon name="check" size={14} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-white/80 text-sm leading-tight">
                                  {headline}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <Link
                          href={`/leistungen/${kw.keyword.toLowerCase().replace(/ /g, '-')}`}
                          className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cerulean to-indigo-dye text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                        >
                          Mehr erfahren
                          <Icon name="external-link" size={14} className="ml-2" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SEO Footer */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cerulean/20 to-indigo-dye/20 rounded-2xl backdrop-blur-lg border border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ihre Fragen - Unsere Expertise
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Mit über 25 Jahren Erfahrung und Tausenden erfolgreich abgeschlossenen Projekten
              sind wir Ihr zuverlässiger Partner für alle Abbruch- und Sanierungsarbeiten in
              Bielefeld und ganz OWL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-oxford-blue rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <Icon name="mail" size={20} className="mr-2" />
                Kostenlose Beratung
              </Link>
              <Link
                href="tel:+491748083023"
                className="inline-flex items-center justify-center px-6 py-3 bg-cerulean text-white rounded-xl font-bold hover:bg-cerulean/90 transition-colors"
              >
                <Icon name="phone" size={20} className="mr-2" />
                24h Notdienst
              </Link>
            </div>
          </div>
        </div>

        {/* Schema.org für SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Abbruch und Sanierung",
              "provider": {
                "@type": "LocalBusiness",
                "name": "RückbauPRO",
                "description": "Professionelle Abbruch- und Sanierungsdienstleistungen"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Abbruch- und Sanierungsleistungen",
                "itemListElement": topicalMap.flatMap(topic =>
                  topic.keywords.map(kw => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": kw.keyword,
                      "description": kw.title
                    }
                  }))
                )
              }
            })
          }}
        />
      </div>
    </section>
  );
}