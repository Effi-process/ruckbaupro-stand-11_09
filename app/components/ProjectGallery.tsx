'use client';
import { useState } from 'react';
import Image from 'next/image';
import Icon from './Icon';

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'info@rueckbaupro.de'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitMessage('Fehler beim Senden. Bitte rufen Sie uns direkt an: +49 174 8083023');
      }
    } catch (error) {
      setSubmitMessage('Fehler beim Senden. Bitte rufen Sie uns direkt an: +49 174 8083023');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Unsere Hauptleistungen - klar und direkt wie echte Abbruchfirmen
  const services = [
    {
      title: 'ABBRUCH',
      icon: 'shield',
      image: '/images/demolition-site.png',
      description: 'Professioneller Gebäudeabbruch',
      details: [
        'Komplettabbruch von Gebäuden',
        'Teilabbruch und Rückbau',
        'Industrieabbruch',
        'Brücken- und Bauwerksabbruch'
      ]
    },
    {
      title: 'ENTKERNUNG',
      icon: 'layers',
      image: '/images/demolition-action.png',
      description: 'Saubere Gebäudeentkernung',
      details: [
        'Schadstoffsanierung',
        'Brandschadensanierung',
        'Rückbau bei laufendem Betrieb',
        'Denkmalgeschützte Objekte'
      ]
    },
    {
      title: 'ENTSORGUNG',
      icon: 'recycling',
      image: '/images/construction-worker.png',
      description: 'Fachgerechte Entsorgung',
      details: [
        'Bauschutt-Entsorgung',
        'Sondermüll-Entsorgung',
        'Recycling und Aufbereitung',
        'Entsorgungsnachweise'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        
        {/* Kontaktbereich - prominent über den Leistungen */}
        <div className="bg-gradient-to-r from-cerulean to-indigo-dye rounded-2xl p-8 mb-16 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Kostenloses Angebot anfordern
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="phone" size={20} />
                  <span className="text-lg">+49 174 8083023</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="mail" size={20} />
                  <span className="text-lg">info@rueckbaupro.de</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="clock" size={20} />
                  <span className="text-lg">Mo-Sa 7:00 - 20:00 Uhr</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name (optional)"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 h-24 resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-cerulean py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                </button>
                {submitMessage && (
                  <p className={`text-sm ${submitMessage.includes('Vielen Dank') ? 'text-white' : 'text-yellow-300'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        
        {/* Hauptüberschrift - einfach und klar */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            UNSERE LEISTUNGEN
          </h2>
          <div className="w-20 h-1 bg-cerulean"></div>
        </div>

        {/* Service Tabs - wie echte Abbruchfirmen */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`border-2 ${activeTab === index ? 'border-cerulean bg-cerulean/10' : 'border-gray-200'} rounded-lg p-6 cursor-pointer hover:border-cerulean transition-all relative overflow-hidden`}
              onClick={() => setActiveTab(index)}
            >
              {service.image && (
                <div className="absolute inset-0 opacity-10">
                  <Image src={service.image} alt={service.title} className="w-full h-full object-cover" fill sizes="100%" />
                </div>
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${activeTab === index ? 'bg-cerulean' : 'bg-gray-200'} rounded flex items-center justify-center`}>
                    <Icon name={service.icon} size={24} className={activeTab === index ? 'text-white' : 'text-gray-600'} />
                  </div>
                  <h3 className="font-bold text-lg line-clamp-1 overflow-hidden">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 overflow-hidden">{service.description}</p>
                {activeTab === index && (
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-cerulean mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Arbeitsweise - direkt und professionell */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h4 className="font-bold text-lg mb-2">BESICHTIGUNG</h4>
            <p className="text-gray-600">Kostenlose Vor-Ort-Besichtigung und Beratung</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h4 className="font-bold text-lg mb-2">ANGEBOT</h4>
            <p className="text-gray-600">Detailliertes Festpreisangebot innerhalb 24 Stunden</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h4 className="font-bold text-lg mb-2">AUSFÜHRUNG</h4>
            <p className="text-gray-600">Termingerechte Ausführung mit Entsorgungsnachweis</p>
          </div>
        </div>

        {/* CTA - klar und direkt */}
        <div className="bg-cerulean text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">KOSTENLOSES ANGEBOT ANFORDERN</h3>
          <p className="mb-6">Rufen Sie uns an oder nutzen Sie unser Kontaktformular</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+491748083023"
              className="bg-white text-cerulean px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icon name="phone" size={20} />
              +49 174 8083023
            </a>
            <a
              href="/kontakt"
              className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-cerulean transition-colors"
            >
              Kontaktformular
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}