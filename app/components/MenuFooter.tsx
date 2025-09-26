'use client';
import Link from 'next/link';

export default function MenuFooter() {
  const menuSections = [
    {
      title: "RÜCKBAUPRO",
      description: "PROFESSIONELLER RÜCKBAU & ABBRUCH DEUTSCHLANDWEIT. KOSTENLOSE BERATUNG FÜR IHR PROJEKT.",
      button: { text: "BERATUNG STARTEN", href: "/kontakt" }
    },
    {
      title: "UNSERE LEISTUNGEN",
      items: [
        { name: "Alle Leistungen", href: "/leistungen" },
        { name: "Asbest-Sanierung", href: "/leistungen/asbestsanierung" },
        { name: "Entkernung", href: "/leistungen/entkernung" },
        { name: "Beratung & Planung", href: "/leistungen/beratung---planung" },
        { name: "KMF-Sanierung", href: "/leistungen/kmf-sanierung" },
        { name: "Schimmelsanierung", href: "/leistungen/schimmelsanierung" },
        { name: "Betonarbeiten", href: "/leistungen/betonarbeiten" }
      ]
    },
    {
      title: "SERVICE & BUSINESS",
      items: [
        { name: "Standorte", href: "/standorte" },
        { name: "Preise", href: "/preise" },
        { name: "Franchise", href: "/franchise" }
      ]
    },
    {
      title: "INFORMATION",
      items: [
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Zertifikate", href: "/zertifikate" },
        { name: "Gesetzliche Vorschriften", href: "/gesetzliche-vorschriften" }
      ]
    },
    {
      title: "RECHTLICHES",
      items: [
        { name: "Impressum", href: "/impressum" },
        { name: "Datenschutz", href: "/datenschutz" },
        { name: "AGB", href: "/agb" }
      ]
    }
  ];

  return (
    <footer className="relative text-white">
      {/* Sanfter Übergang von vorheriger Sektion */}
      <div className="h-16 bg-gradient-to-b from-gray-800 to-gray-700"></div>
      
      {/* Hauptfußzeile */}
      <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {menuSections.map((section, index) => (
            <div key={section.title}>
              {index === 0 ? (
                <div>
                  <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                  <p className="text-sm text-white/80 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  {section.button && (
                    <Link
                      href={section.button.href}
                      className="inline-block bg-cerulean hover:bg-indigo-dye text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                    >
                      {section.button.text}
                    </Link>
                  )}
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items?.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-white/80 hover:text-cerulean transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-white/60">
            © 2024 RÜCKBAUPRO GMBH • PROFESSIONELLER RÜCKBAU & ABBRUCH
          </p>
          <p className="text-xs text-white/50 mt-2">
            ZERTIFIZIERT • VOLLVERSICHERT • DEUTSCHLANDWEIT
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}