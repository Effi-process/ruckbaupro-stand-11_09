'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

export default function HeaderBielefeld() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Start', href: '/bielefeld' },
    {
      name: 'Asbest entsorgen',
      href: '/bielefeld/asbest-entsorgen',
      dropdown: [
        { name: 'Entsorgung & Kosten', href: '/bielefeld/asbest-entsorgen', icon: 'recycle' },
        { name: 'Container Service', href: '/bielefeld/asbest-entsorgen#container', icon: 'truck' },
        { name: 'Big Bag Service', href: '/bielefeld/asbest-entsorgen#bigbag', icon: 'package' },
        { name: 'Kostenrechner', href: '/bielefeld/asbest-entsorgen#kosten', icon: 'calculator' },
      ]
    },
    {
      name: 'Asbest erkennen',
      href: '/bielefeld/asbest-erkennen',
      dropdown: [
        { name: 'Wie sieht Asbest aus?', href: '/bielefeld/asbest-erkennen', icon: 'eye' },
        { name: 'Asbest Test', href: '/bielefeld/asbest-test', icon: 'search' },
        { name: 'Materialien', href: '/bielefeld/asbest-erkennen#materialien', icon: 'layers' },
        { name: 'Sicherheit', href: '/bielefeld/asbest-erkennen#sicherheit', icon: 'shield' },
      ]
    },
    {
      name: 'Sanierung',
      href: '/bielefeld/asbestplatten',
      dropdown: [
        { name: 'Asbestplatten', href: '/bielefeld/asbestplatten', icon: 'layers' },
        { name: 'Asbest Dach', href: '/bielefeld/asbest-dach', icon: 'home' },
        { name: 'Asbest Dämmung', href: '/bielefeld/asbest-daemmung', icon: 'shield' },
        { name: 'Förderungen', href: '/bielefeld/asbest-dach#kosten', icon: 'gift' },
      ]
    },
    {
      name: 'Info',
      href: '/bielefeld/was-ist-asbest',
      dropdown: [
        { name: 'Was ist Asbest?', href: '/bielefeld/was-ist-asbest', icon: 'info' },
        { name: 'Asbestose', href: '/bielefeld/asbestose', icon: 'heart' },
        { name: 'Alle Services', href: '/bielefeld/sitemap', icon: 'map' },
      ]
    },
    { name: 'Kontakt', href: '/kontakt', special: true },
  ];

  return (
    <>
      {/* Top Bar - Bielefeld Spezifisch */}
      <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-2">
              <Icon name="map-pin" size={16} />
              Bielefeld & OWL
            </span>
            <span className="hidden md:flex items-center gap-2">
              <Icon name="clock" size={16} />
              24/7 Notdienst
            </span>
            <span className="hidden lg:flex items-center gap-2">
              <Icon name="shield-check" size={16} />
              TRGS 519 Zertifiziert
            </span>
          </div>
          <a 
            href="tel:0521NOTFALL1" 
            className="flex items-center gap-2 hover:text-white/80 transition-colors font-semibold animate-pulse"
          >
            <Icon name="phone" size={16} />
            0521-NOTFALL1
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/bielefeld" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                <Image
                  src="/images/Logo.svg"
                  alt="Asbestsanierung Bielefeld"
                  width={48}
                  height={48}
                  className="relative"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Asbestsanierung Bielefeld</h1>
                <p className="text-xs text-gray-600">Ihr Meisterbetrieb in OWL</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href={item.href}
                        className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                      >
                        {item.name}
                        <Icon name="chevron-down" size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                      </Link>
                      
                      <div className={`absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl py-2 mt-2 border border-gray-100 transition-all duration-200 ${
                        activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-[#E8F0F7] to-[#D4E2ED] rounded-lg flex items-center justify-center">
                              <Icon name={subItem.icon} size={20} className="text-[#0066CC]" />
                            </div>
                            <span className="font-medium text-gray-700">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.special ? (
                    <Link
                      href={item.href}
                      className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/bielefeld/sitemap"
                className="text-gray-600 hover:text-[#0066CC] transition-colors"
                title="Alle Services"
              >
                <Icon name="map" size={24} />
              </Link>
              <a
                href="tel:0521NOTFALL1"
                className="px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Icon name="phone" size={18} />
                Jetzt anrufen
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <Icon name="x" size={28} />
              ) : (
                <Icon name="menu" size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="container-custom py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="py-2">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                      >
                        {item.name}
                        <Icon 
                          name="chevron-down" 
                          size={16} 
                          className={`transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="mt-2 space-y-1 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Icon name={subItem.icon} size={18} className="text-[#0066CC]" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 font-medium transition-colors ${
                        item.special 
                          ? 'text-[#0066CC] hover:text-[#0052A3]' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <a
                  href="tel:0521NOTFALL1"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white font-semibold rounded-full text-center hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name="phone" size={18} className="inline mr-2" />
                  0521-NOTFALL1
                </a>
                <Link
                  href="/bielefeld/sitemap"
                  className="block w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full text-center hover:bg-gray-200 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Alle Services anzeigen
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Quick Links für bessere UX */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40">
        <div className="bg-white rounded-full shadow-2xl p-2 flex flex-col gap-2">
          <a
            href="tel:0521NOTFALL1"
            className="w-14 h-14 bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            title="Jetzt anrufen"
          >
            <Icon name="phone" size={24} />
          </a>
          <Link
            href="/bielefeld/asbest-test"
            className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#0066CC] hover:text-white transition-all"
            title="Asbest testen"
          >
            <Icon name="search" size={24} />
          </Link>
          <Link
            href="/bielefeld/sitemap"
            className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#0066CC] hover:text-white transition-all"
            title="Alle Services"
          >
            <Icon name="map" size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}