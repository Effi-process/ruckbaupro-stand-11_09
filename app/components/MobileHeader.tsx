'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: '/', label: 'Start', icon: '🏠' },
    { href: '/leistungen', label: 'Leistungen', icon: '🔨' },
    { href: '/standorte', label: 'Standorte', icon: '📍' },
    { href: '/preise', label: 'Preise', icon: '💶' },
    { href: '/ueber-uns', label: 'Über uns', icon: '👥' },
    { href: '/kontakt', label: 'Kontakt', icon: '📞' }
  ];

  return (
    <>
      {/* Mobile Header - Fixed at top */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              RückbauPRO
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Call Button */}
            <a
              href="tel:+491748083023"
              className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg"
              aria-label="Anrufen"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg"
              aria-label="Menu"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 translate-y-2 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[99] transition-all duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div className={`absolute right-0 top-16 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">
            {/* Quick Actions */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-b">
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                Schnellzugriff
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/kontakt"
                  className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">📧</span>
                  <span className="text-sm font-medium">Anfrage</span>
                </Link>
                <a
                  href="tel:+491748083023"
                  className="flex items-center justify-center gap-2 p-3 bg-green-500 text-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">📞</span>
                  <span className="text-sm font-medium">Anrufen</span>
                </a>
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="p-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
                    pathname === item.href
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-base">{item.label}</span>
                  {pathname === item.href && (
                    <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>

            {/* Services Section */}
            <div className="p-4 border-t">
              <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                Top Services
              </h3>
              <div className="space-y-2">
                <Link
                  href="/leistungen/asbestsanierung"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm font-medium">Asbestsanierung</span>
                </Link>
                <Link
                  href="/leistungen/entkernung"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm font-medium">Entkernung</span>
                </Link>
                <Link
                  href="/leistungen/abbruch"
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm font-medium">Abbruch</span>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white mt-auto">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-90">
                24/7 Notdienst
              </h3>
              <a
                href="tel:+491748083023"
                className="flex items-center gap-3 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <div>
                  <p className="text-xs opacity-90">Jetzt anrufen</p>
                  <p className="text-lg font-bold">+49 174 8083023</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="lg:hidden h-16"></div>
    </>
  );
}