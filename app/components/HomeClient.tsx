'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';
import Link from 'next/link';

export default function HomeClient() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({ services: false, testimonials: false });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax and mouse tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Intersection Observer for premium animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'shield',
      title: 'Asbestsanierung',
      description: 'Zertifizierte Experten für sichere und gründliche Asbestentfernung',
      features: ['TRGS 519 zertifiziert', 'Komplettservice', '24/7 Notfall'],
      price: 'ab 35€/m²',
      gradient: 'from-[#0066CC] to-[#0052A3]'
    },
    {
      icon: 'warning',
      title: 'Asbesttest',
      description: 'Schnelle und präzise Laboranalyse mit akkreditiertem Verfahren',
      features: ['Express-Analyse', 'Zertifiziertes Labor', 'Detaillierter Bericht'],
      price: 'ab 89€',
      gradient: 'from-[#2C4F5E] to-[#1E3A47]'
    },
    {
      icon: 'recycling',
      title: 'Entsorgung',
      description: 'Umweltgerechte und gesetzeskonforme Entsorgung aller Materialien',
      features: ['Containerservice', 'Dokumentation', 'Recycling-Nachweis'],
      price: 'ab 180€/t',
      gradient: 'from-[#4A6F7C] to-[#3A5A68]'
    },
    {
      icon: 'certificate',
      title: 'KMF-Sanierung',
      description: 'Professionelle Entfernung künstlicher Mineralfasern',
      features: ['Moderne Verfahren', 'Staubfrei', 'Garantie'],
      price: 'ab 28€/m²',
      gradient: 'from-[#5C7F8C] to-[#4C6F7C]'
    }
  ];

  const stats = [
    { number: '5.000', label: 'Projekte', icon: 'building', suffix: '+' },
    { number: '25', label: 'Jahre Erfahrung', icon: 'award', suffix: '+' },
    { number: '99.8', label: 'Kundenzufriedenheit', icon: 'star', suffix: '%' },
    { number: '24', label: 'Stunden Service', icon: 'clock', suffix: '/7' }
  ];

  const testimonials = [
    {
      text: "Außergewöhnliche Professionalität und Sorgfalt. Das Team hat unsere Asbestsanierung perfekt durchgeführt.",
      author: "Dr. Thomas Müller",
      role: "Geschäftsführer TechCorp GmbH",
      rating: 5,
      image: "/testimonials/1.jpg"
    },
    {
      text: "Schnell, zuverlässig und transparent. Die beste Entscheidung für unser Sanierungsprojekt!",
      author: "Sandra Weber",
      role: "Immobilienverwaltung Weber & Co.",
      rating: 5,
      image: "/testimonials/2.jpg"
    },
    {
      text: "Vom ersten Kontakt bis zur Endabnahme - alles hat reibungslos funktioniert. Sehr empfehlenswert!",
      author: "Michael Schmidt",
      role: "Bauherr",
      rating: 5,
      image: "/testimonials/3.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E8F0F7] to-[#D4E2ED] rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={stat.icon} size={32} className="text-[#0066CC]" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-1">
                  {stat.number}<span className="text-[#0066CC]">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white animate-on-scroll">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Unsere Leistungen</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Professionelle Lösungen für jeden Bedarf
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Analyse bis zur Entsorgung - wir bieten Ihnen einen Rundum-Service 
              mit modernster Technik und höchsten Sicherheitsstandards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                  isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon} size={28} color="white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon name="check" size={16} className="text-[#0066CC]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#0052A3]">
                    {service.price}
                  </span>
                  <Link
                    href="/leistungen"
                    className="text-[#0066CC] hover:text-[#0052A3] font-semibold flex items-center gap-1 transition-colors"
                  >
                    Mehr
                    <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#0066CC] font-semibold text-sm uppercase tracking-wider">Kundenstimmen</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Was unsere Kunden sagen
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-12">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#0052A3] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-2xl text-gray-700 leading-relaxed mb-8">
                  {testimonials[currentTestimonial].text}
                </p>
                
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={24} className="text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial 
                            ? 'w-8 bg-gradient-to-r from-[#0066CC] to-[#0052A3]' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}