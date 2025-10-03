'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GlassHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Leistungen",
      items: [
        { name: "Alle Leistungen", href: "/leistungen" },
        { name: "Asbest-Sanierung", href: "/leistungen/asbestsanierung" },
        { name: "Entkernung", href: "/leistungen/entkernung" },
        { name: "Beratung & Planung", href: "/leistungen/beratung-planung" },
        { name: "KMF-Sanierung", href: "/leistungen/kmf-sanierung" },
        { name: "Schimmelsanierung", href: "/leistungen/schimmelsanierung" },
        { name: "Betonarbeiten", href: "/leistungen/betonarbeiten" }
      ]
    },
    {
      title: "Service",
      items: [
        { name: "Standorte", href: "/standorte" },
        { name: "Preise", href: "/preise" },
        { name: "Franchise", href: "/franchise" }
      ]
    },
    {
      title: "Information",
      items: [
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Karriere", href: "/karriere" },
        { name: "Schadstoffschulungen", href: "/schadstoffschulungen" },
        { name: "Gesetzliche Vorschriften", href: "/gesetzliche-vorschriften" }
      ]
    },
    {
      title: "Rechtliches",
      items: [
        { name: "Impressum", href: "/impressum" },
        { name: "Datenschutz", href: "/datenschutz" },
        { name: "AGB", href: "/agb" }
      ]
    }
  ];

  return (
    <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#1a2332]/50 backdrop-blur-md lg:border-b lg:border-white/20 shadow-lg">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity -mt-4">
            <img
              src="/logo-new-white.svg"
              alt="RückbauPRO Logo"
              className="h-44 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-4 py-3 text-white hover:text-light-blue font-semibold tracking-wide transition-colors text-lg flex items-center gap-2" style={{ fontFamily: 'Impact, Haettenschweiler, Arial Black, sans-serif' }}>
                  {menu.title}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeMenu === menu.title ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                {activeMenu === menu.title && (
                  <div
                    className="absolute top-full left-0 pt-2 w-64"
                    onMouseEnter={() => setActiveMenu(menu.title)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="bg-midnight-blue/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-light-blue/30 overflow-hidden">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-6 py-3 text-white hover:bg-bright-blue/20 hover:text-light-blue transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/kontakt"
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-bright-blue hover:bg-light-blue text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl"
            style={{ fontFamily: 'Impact, Haettenschweiler, Arial Black, sans-serif' }}
          >
            Kontakt
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
