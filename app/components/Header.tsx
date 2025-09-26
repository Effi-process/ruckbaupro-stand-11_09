'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Icon from './Icon';
import LogoComponent from './LogoComponent';
import FloatingMenuButton from './FloatingMenuButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Leistungen',
      href: '/leistungen',
      icon: 'wrench',
      dropdown: false,
      items: [] as any[]
    },
    {
      name: 'Über uns',
      href: '/ueber-uns',
      icon: 'users',
      dropdown: false,
      items: [] as any[]
    },
    {
      name: 'Standorte',
      href: '/standorte',
      icon: 'map',
      dropdown: false,
      items: [] as any[]
    },
    {
      name: 'Kontakt',
      href: '/kontakt',
      icon: 'phone',
      dropdown: false,
      items: [] as any[]
    },
  ];

  return (
    <>
      {/* Modern Top Bar - Full Width Dark */}
      <div className="hidden lg:block bg-gradient-to-r from-gray-900 via-oxford-blue to-gray-900 text-white">
        <div className="container-custom">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 font-light">DEUTSCHLANDWEIT TÄTIG SEIT 1995</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/karriere" className="text-gray-300 hover:text-white transition-colors font-medium">
                KARRIERE
              </Link>
              <Link href="/standorte" className="text-gray-300 hover:text-white transition-colors font-medium">
                STANDORTE
              </Link>
              <Link href="/partner" className="text-gray-300 hover:text-white transition-colors font-medium">
                PARTNER PORTAL
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header - Clean Modern Style */}
      <header
        className={`
          sticky top-0 z-50 transition-all duration-300 bg-transparent
          ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' : ''}
        `}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center py-4">
              <Image 
                src="/logo-new.svg"
                alt="RückbauPRO"
                className="h-14 md:h-16 w-auto"
                width={220}
                height={66}
                priority
              />
            </Link>

            {/* Center Navigation */}
            <nav className="hidden xl:flex items-center gap-8 flex-1 justify-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="flex items-center gap-1 text-oxford-blue hover:text-cerulean font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-8"
                      >
                        {item.name}
                        <Icon name="chevron-down" size={16} className="transition-transform group-hover:rotate-180" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 w-64 bg-white shadow-2xl border-t-4 border-cerulean"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50 hover:text-cerulean transition-all duration-200"
                            >
                              <Icon name={subItem.icon} size={20} className="text-cerulean" />
                              <span className="font-medium">{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-oxford-blue hover:text-cerulean font-semibold text-sm uppercase tracking-wider transition-all duration-300 py-8"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section - Menu, Phone & CTA */}
            <div className="flex items-center gap-4">
              
              {/* Phone Number - Clean Style */}
              <a
                href="tel:+49 174 8083023"
                className="hidden lg:flex flex-col items-end mr-2"
              >
                <span className="text-xs text-gray-500 uppercase tracking-wider font-light">24/7 NOTFALL</span>
                <span className="text-lg font-bold text-gray-900">+49 174 8083023</span>
              </a>
              
              {/* Modern CTA Button */}
              <Link
                href="/kontakt"
                className="group relative px-6 py-3 bg-cerulean hover:bg-indigo-dye text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                PROJEKT STARTEN
                <svg 
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-2">
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-oxford-blue"
              >
                {isMobileMenuOpen ? (
                  <Icon name="x" size={28} />
                ) : (
                  <Icon name="menu" size={28} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-off-white shadow-2xl">
            <div className="container-custom py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="py-2">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-oxford-blue font-semibold"
                      >
                        {item.name}
                        <Icon name="chevron-down" size={16} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-cerulean"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Icon name={subItem.icon} size={18} />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-oxford-blue font-semibold hover:text-cerulean"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon name={item.icon} size={18} className="text-gray-400" />
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Quick Actions */}
              <div className="mt-4 px-4 border-t border-gray-200 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/preise"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon name="calculator" size={16} />
                    <span className="text-sm font-medium">Kostenrechner</span>
                  </Link>
                  <Link
                    href="/standorte"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon name="map" size={16} />
                    <span className="text-sm font-medium">Standorte</span>
                  </Link>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-4 px-4">
                <Link
                  href="/kontakt"
                  className="block w-full text-center px-6 py-4 bg-cerulean text-white font-bold uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projekt starten
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}