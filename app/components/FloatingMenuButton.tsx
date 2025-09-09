'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Icon from './Icon';

interface MenuSection {
  title: string;
  icon: string;
  expanded: boolean;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  href: string;
  icon: string;
  description?: string;
}

export default function FloatingMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Startseite']);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuSections: MenuSection[] = [
    {
      title: "Startseite",
      icon: "home",
      expanded: false,
      items: [
        { name: "Zur Startseite", href: "/", icon: "home", description: "Zurück zur Hauptseite" }
      ]
    },
    {
      title: "Unsere Leistungen",
      icon: "bulldozer",
      expanded: false,
      items: [
        { name: "Alle Leistungen", href: "/leistungen", icon: "list", description: "Komplette Übersicht" },
        { name: "Asbest-Sanierung", href: "/leistungen/asbestsanierung", icon: "shield", description: "Sichere Asbestentfernung" },
        { name: "Entkernung", href: "/leistungen/entkernung", icon: "drill", description: "Innenraumdemontage" },
        { name: "Beratung & Planung", href: "/leistungen/beratung---planung", icon: "lightbulb", description: "Professionelle Projektplanung" },
        { name: "KMF-Sanierung", href: "/leistungen/kmf-sanierung", icon: "warning", description: "Künstliche Mineralfasern" },
        { name: "Schimmelsanierung", href: "/leistungen/schimmelsanierung", icon: "alert", description: "Professionelle Schimmelentfernung" },
        { name: "Betonarbeiten", href: "/leistungen/betonarbeiten", icon: "cube", description: "Betonschneiden und -bearbeitung" }
      ]
    },
    {
      title: "Service & Business",
      icon: "briefcase",
      expanded: false,
      items: [
        { name: "Standorte", href: "/standorte", icon: "map", description: "Deutschlandweit tätig" },
        { name: "Preise", href: "/preise", icon: "calculator", description: "Kostenrechner" },
        { name: "Franchise", href: "/franchise", icon: "share", description: "Partner werden" },
      ]
    },
    {
      title: "Information",
      icon: "info",
      expanded: false,
      items: [
        { name: "Über uns", href: "/ueber-uns", icon: "users", description: "Unser Unternehmen" },
        { name: "Zertifikate", href: "/zertifikate", icon: "shield", description: "Unsere Qualifikationen" },
        { name: "Gesetzliche Vorschriften", href: "/gesetzliche-vorschriften", icon: "file-text", description: "Rechtliche Grundlagen" },
      ]
    },
    {
      title: "Rechtliches",
      icon: "file-text",
      expanded: false,
      items: [
        { name: "Impressum", href: "/impressum", icon: "file-text", description: "Rechtliche Angaben" },
        { name: "Datenschutz", href: "/datenschutz", icon: "lock", description: "Datenschutzerklärung" },
        { name: "AGB", href: "/agb", icon: "document", description: "Geschäftsbedingungen" },
      ]
    }
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 hover:border-cerulean/50 text-cerulean hover:bg-white/30 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Icon name="grid" size={18} />
        <span className="font-semibold text-sm">MENÜ</span>
        <Icon 
          name="chevron-down" 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          
          <div
            ref={dropdownRef}
            className="fixed top-20 right-4 w-80 bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20 rounded-xl z-[9999] overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-3 bg-gradient-to-r from-cerulean/90 to-indigo-dye/90 backdrop-blur-sm text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">RückbauPRO Navigation</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                >
                  <Icon name="x" size={18} />
                </button>
              </div>
              <p className="text-sm opacity-90 mt-1">Alle Seiten & Services</p>
            </div>

            <div className="py-2">
              {menuSections.map((section) => {
                const isExpanded = expandedSections.includes(section.title);
                
                return (
                  <div key={section.title} className="px-2">
                    {section.title === "Startseite" ? (
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            name={section.icon} 
                            size={16} 
                            className="text-cerulean group-hover:text-indigo-dye transition-colors" 
                          />
                          <span className="font-bold text-oxford-blue text-base">
                            {section.title}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={() => section.items.length > 0 ? toggleSection(section.title) : null}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                      >
                      <div className="flex items-center gap-3">
                        <Icon 
                          name={section.icon} 
                          size={16} 
                          className="text-cerulean group-hover:text-indigo-dye transition-colors" 
                        />
                        <span className="font-semibold text-oxford-blue text-sm">
                          {section.title}
                        </span>
                      </div>
                      {section.items.length > 0 && (
                        <Icon 
                          name="chevron-down" 
                          size={14} 
                          className={`text-gray-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                        )}
                      </button>
                    )}

                    {isExpanded && section.title !== "Startseite" && (
                      <div className="ml-6 pl-3 border-l-2 border-gray-100 space-y-0.5 pb-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-3 px-3 py-2 text-gray-600 hover:text-cerulean hover:bg-gray-50 rounded-md transition-all duration-200 group"
                          >
                            <Icon 
                              name={item.icon} 
                              size={14} 
                              className="text-cerulean/60 group-hover:text-cerulean transition-colors mt-0.5" 
                            />
                            <div className="flex-1">
                              <div className="font-medium text-sm text-oxford-blue group-hover:text-cerulean">
                                {item.name}
                              </div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {item.description}
                                </div>
                              )}
                            </div>
                            <Icon 
                              name="external-link" 
                              size={12} 
                              className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity mt-1" 
                            />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-4 py-3 bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    24/7 Notfall-Hotline
                  </div>
                  <Link
                    href="tel:08000060970"
                    onClick={() => setIsOpen(false)}
                    className="text-cerulean hover:text-indigo-dye font-bold text-lg transition-colors"
                  >
                    0800 0060970
                  </Link>
                </div>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-cerulean hover:bg-indigo-dye text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}