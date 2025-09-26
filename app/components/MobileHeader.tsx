'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      {/* Logo - Absolute position on video with glass effect */}
      <Link href="/" className="lg:hidden absolute top-4 left-4 z-[100] block bg-black/20 backdrop-blur-md rounded-2xl p-1 border border-white/10 -rotate-90">
        <Image
          src="/Design ohne Titel 2.svg.svg"
          alt="RückbauPRO"
          className="h-24 w-auto"
          width={300}
          height={100}
          priority
        />
      </Link>

      {/* Menu Button - Fixed position on video with glass effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-[100] flex items-center gap-2 px-4 py-3 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/30 transition-all"
        aria-label="Menu"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" stroke="currentColor" fill="none"/>
          <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor"/>
          <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor"/>
        </svg>
        <span className="text-sm font-semibold tracking-wider">MENÜ</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

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
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/logo-new.svg"
                alt="RückbauPRO"
                className="h-10 w-auto"
                width={120}
                height={40}
                priority
              />
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Schließen"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

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
    </>
  );
}