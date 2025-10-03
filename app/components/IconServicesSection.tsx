'use client';
import Link from 'next/link';

export default function IconServicesSection() {
  const services = [
    {
      title: "ABBRUCH",
      subtitle: "Sicher & Präzise zum Ziel",
      icon: "🏗️",
      href: "/leistungen"
    },
    {
      title: "ASBEST",
      subtitle: "Fachgerecht & Gesetzeskonform",
      icon: "🛡️",
      href: "/leistungen/asbestsanierung"
    },
    {
      title: "ENTKERNUNG",
      subtitle: "Effizient & Sorgfältig",
      icon: "🏠",
      href: "/leistungen/entkernung"
    },
    {
      title: "RECYCLING",
      subtitle: "Verantwortungsbewusst",
      icon: "♻️",
      href: "/leistungen"
    },
    {
      title: "KARRIERE",
      subtitle: "Zukunft gestalten mit Expertise",
      icon: "👷",
      href: "/karriere"
    }
  ];

  return (
    <section className="py-12 bg-midnight-blue/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-midnight-blue/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-2 tracking-wide">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-gray-blue leading-tight">
                {service.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
