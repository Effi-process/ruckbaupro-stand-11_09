'use client';
import SimpleContactForm from './SimpleContactForm';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactSection({
  title = "Kostenloses Angebot anfordern",
  subtitle = "Professionelle Beratung - schnell, gründlich, fair",
  className = ""
}: ContactSectionProps) {
  return (
    <section
      className={`py-16 bg-oxford-blue ${className}`}
      aria-labelledby="contact-title"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            id="contact-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            {title}
          </h2>
          <p
            className="text-center text-blue-100 text-base md:text-lg max-w-2xl mx-auto"
            aria-describedby="contact-title"
          >
            {subtitle}
          </p>
        </div>
        <SimpleContactForm
          variant="embedded"
          className="pt-8 md:pt-0"
          aria-label="Kontaktformular für Angebotsanfrage"
        />
      </div>
    </section>
  );
}