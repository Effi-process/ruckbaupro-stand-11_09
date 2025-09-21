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
      const target = event.target as Node;
      if (!dropdownRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

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
        { name: "Entkernung", href: "/leistungen/entkernung", icon: "home", description: "Innenraumdemontage" },
        { name: "Beratung & Planung", href: "/leistungen/beratung---planung", icon: "users", description: "Professionelle Projektplanung" },
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

  const handleButtonClick = () => {
    console.log('Menu button clicked, toggling from:', isOpen, 'to:', !isOpen);
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative z-50">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="group flex items-center gap-2 px-4 py-3 bg-white/20 backdrop-blur-xl border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/30 transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl cursor-pointer"
        type="button"
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
            className="fixed top-20 right-2 sm:right-4 w-[calc(100vw-1rem)] sm:w-[380px] md:w-[420px] max-w-[420px] bg-white/10 backdrop-blur-3xl shadow-3xl border border-white/25 rounded-2xl z-[9999] overflow-hidden max-h-[85vh] overflow-y-auto"
            style={{
              backdropFilter: 'blur(40px) saturate(150%)',
              WebkitBackdropFilter: 'blur(40px) saturate(150%)',
              background: 'rgba(255, 255, 255, 0.08)'
            }}
          >
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cerulean/60 to-indigo-dye/60 backdrop-blur-2xl text-white border-b border-white/15">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg sm:text-xl">RÜCKBAUPRO NAVIGATION</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors min-h-[44px] min-w-[44px]"
                >
                  <Icon name="x" size={20} />
                </button>
              </div>
              <p className="text-sm sm:text-base opacity-90 mt-2">ALLE SEITEN & SERVICES</p>
            </div>

            <div className="py-3">
              {menuSections.map((section) => {
                const isExpanded = expandedSections.includes(section.title);
                
                return (
                  <div key={section.title} className="px-3">
                    {section.title === "Startseite" ? (
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/15 rounded-xl transition-colors duration-200 group"
                      >
                        <div className="flex items-center gap-4">
                          <Icon 
                            name={section.icon} 
                            size={22} 
                            className="text-cerulean group-hover:text-indigo-dye transition-colors" 
                          />
                          <span className="font-bold text-white text-xl">
                            {section.title}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={() => section.items.length > 0 ? toggleSection(section.title) : null}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/15 rounded-xl transition-colors duration-200 group"
                      >
                      <div className="flex items-center gap-4">
                        <Icon 
                          name={section.icon} 
                          size={22} 
                          className="text-cerulean group-hover:text-indigo-dye transition-colors" 
                        />
                        <span className="font-semibold text-white text-lg">
                          {section.title}
                        </span>
                      </div>
                      {section.items.length > 0 && (
                        <Icon 
                          name="chevron-down" 
                          size={18} 
                          className={`text-white/70 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                        )}
                      </button>
                    )}

                    {isExpanded && section.title !== "Startseite" && (
                      <div className="ml-10 pl-5 border-l-2 border-white/25 space-y-2 pb-4 mt-3">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-4 px-4 py-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg transition-all duration-200 group"
                          >
                            <Icon 
                              name={item.icon} 
                              size={18} 
                              className="text-cerulean/80 group-hover:text-cerulean transition-colors mt-0.5" 
                            />
                            <div className="flex-1">
                              <div className="font-medium text-base text-white group-hover:text-cerulean">
                                {item.name}
                              </div>
                              {item.description && (
                                <div className="text-sm text-white/70 mt-1">
                                  {item.description}
                                </div>
                              )}
                            </div>
                            <Icon 
                              name="external-link" 
                              size={14} 
                              className="text-white/50 opacity-0 group-hover:opacity-100 transition-opacity mt-1" 
                            />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-4 bg-white/10 backdrop-blur-2xl border-t border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wide font-medium">
                    24/7 NOTFALL-HOTLINE
                  </div>
                  <Link
                    href="tel:08000060970"
                    onClick={() => setIsOpen(false)}
                    className="text-cerulean hover:text-white font-bold text-xl transition-colors"
                  >
                    0800 0060970
                  </Link>
                </div>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-cerulean hover:bg-indigo-dye text-white text-base font-bold rounded-xl transition-colors shadow-lg"
                >
                  KONTAKT
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}