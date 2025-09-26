'use client';
import { useState, useEffect, useCallback } from 'react';
import Icon from './Icon';

interface MultiStepWizardProps {
  purpose: 'contact' | 'quote' | 'emergency' | 'inspection';
  onComplete?: (data: any) => void;
}

interface FormData {
  name: string;
  company: string;
  contactMethod: 'email' | 'phone';
  email: string;
  phone: string;
  city: string;
  services: string[];
  message: string;
  datenschutz: boolean;
}

export default function MultiStepWizard({ purpose, onComplete }: MultiStepWizardProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    contactMethod: 'email',
    email: '',
    phone: '',
    city: '',
    services: [],
    message: '',
    datenschutz: false
  });
  const [isValid, setIsValid] = useState(false);

  const validateForm = useCallback(() => {
    const nameValid = formData.name.trim().length > 0;
    const contactValid = formData.contactMethod === 'email' 
      ? formData.email.trim().length > 0 && formData.email.includes('@')
      : formData.phone.trim().length > 0;
    const cityValid = formData.city.trim().length > 0;
    const serviceValid = formData.services.length > 0;
    const privacyValid = formData.datenschutz;

    setIsValid(nameValid && contactValid && cityValid && serviceValid && privacyValid);
  }, [formData.name, formData.email, formData.phone, formData.contactMethod, formData.city, formData.services, formData.datenschutz]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const generateEmailText = () => {
    const contactInfo = formData.contactMethod === 'email' 
      ? `E-Mail: ${formData.email}`
      : `Telefon: ${formData.phone}`;
    
    const servicesText = formData.services.length > 0 
      ? formData.services.join(', ')
      : 'Keine Dienstleistungen ausgewählt';

    return `Neue Anfrage von ${formData.name}

Kontaktdaten:
- Name: ${formData.name}
${formData.company ? `- Firma: ${formData.company}` : ''}
- ${contactInfo}
- Stadt: ${formData.city}

Gewünschte Dienstleistungen:
${servicesText}

${formData.message ? `Nachricht:
${formData.message}` : 'Keine zusätzliche Nachricht'}

Kontaktmethode: ${formData.contactMethod === 'email' ? 'E-Mail' : 'Telefon'}
Datum: ${new Date().toLocaleString('de-DE')}`;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/multistep-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: result.message
        });
        
        if (onComplete) {
          onComplete(formData);
        }
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.message
        });
      }
    } catch (error) {
      console.error('Fehler beim Versenden:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Fehler beim Senden. Bitte rufen Sie uns direkt an: +49 174 8083023'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-900/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cerulean to-indigo-dye p-3 md:p-6 text-white">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-3">
            KOSTENLOSE BERATUNG ANFRAGEN
          </h1>
          <p className="text-sm md:text-2xl text-white/90 mb-2 md:mb-4">
            EINFACH UND SCHNELL ZU IHREM PERSÖNLICHEN ANGEBOT
          </p>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 md:p-6 text-base">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-3">
              <Icon name="shield" size={16} className="text-green-300 md:w-5 md:h-5" />
              <span className="font-bold text-sm md:text-lg">100% UNVERBINDLICH</span>
            </div>
            <p className="text-white/90 text-xs md:text-sm font-medium">
              KOSTENLOSE BERATUNG • KEINE VERSTECKTEN KOSTEN • UNVERBINDLICHES ANGEBOT
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <form onSubmit={handleSubmit} className="p-3 md:p-8 space-y-3 md:space-y-6">
        {/* Name and Company in one row - auch auf Mobile */}
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          <div>
            <label className="block text-[10px] md:text-sm font-semibold text-white mb-0.5 md:mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2 py-1.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg md:rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-xs md:text-base"
              placeholder="Ihr Name"
            />
          </div>

          <div>
            <label className="block text-[10px] md:text-sm font-semibold text-white mb-0.5 md:mb-2">
              Firma
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-2 py-1.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg md:rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-xs md:text-base"
              placeholder="Optional"
            />
          </div>
        </div>

        {/* Contact Method and City in one row */}
        <div>
          <div className="mb-2">
            <p className="text-[10px] md:text-sm font-semibold text-white mb-1">Wie möchten Sie kontaktiert werden? *</p>
            <div className="flex gap-2 md:gap-3">
              <label className="flex items-center">
                <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full border mr-1.5 md:mr-3 flex items-center justify-center ${formData.contactMethod === 'email' ? 'border-cerulean bg-cerulean' : 'border-gray-400'}`}>
                  {formData.contactMethod === 'email' && (
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === 'email'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-white font-medium text-[10px] md:text-sm">E-MAIL</span>
              </label>
              <label className="flex items-center">
                <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full border mr-1.5 md:mr-3 flex items-center justify-center ${formData.contactMethod === 'phone' ? 'border-cerulean bg-cerulean' : 'border-gray-400'}`}>
                  {formData.contactMethod === 'phone' && (
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === 'phone'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-white font-medium text-[10px] md:text-sm">TELEFON</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:gap-6">
            <div>
              {formData.contactMethod === 'email' && (
                <>
                  <label className="block text-[10px] md:text-sm font-semibold text-white mb-0.5 md:mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg md:rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-xs md:text-base"
                    placeholder="ihre@email.de"
                  />
                </>
              )}

              {formData.contactMethod === 'phone' && (
                <>
                  <label className="block text-[10px] md:text-sm font-semibold text-white mb-0.5 md:mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg md:rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-xs md:text-base"
                    placeholder="Ihre Telefonnummer"
                  />
                </>
              )}
            </div>

            <div>
              <label className="block text-[10px] md:text-sm font-semibold text-white mb-0.5 md:mb-2">
                Stadt *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-2 py-1.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg md:rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-xs md:text-base"
                placeholder="Ihre Stadt"
              />
            </div>
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-[10px] md:text-sm font-semibold text-white mb-1.5 md:mb-4">
            Dienstleistungen * (Mehrfachauswahl)
          </label>
          {/* Alle Services in einem Grid - 2 Spalten auf Mobile, 3 auf Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              { id: 'asbest-sanierung', label: 'Asbest-Sanierung', icon: 'shield', category: 'sanierung' },
              { id: 'kmf-sanierung', label: 'KMF-Sanierung', icon: 'warning', category: 'sanierung' },
              { id: 'schimmelsanierung', label: 'Schimmelsanierung', icon: 'alert', category: 'sanierung' },
              { id: 'entkernung', label: 'Entkernung', icon: 'home', category: 'bau' },
              { id: 'betonarbeiten', label: 'Betonarbeiten', icon: 'cube', category: 'bau' },
              { id: 'beratung-planung', label: 'Beratung & Planung', icon: 'users', category: 'bau' }
            ].map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  const isSelected = formData.services.includes(service.id);
                  const newServices = isSelected
                    ? formData.services.filter(s => s !== service.id)
                    : [...formData.services, service.id];
                  setFormData({ ...formData, services: newServices });
                }}
                className={`
                  p-2 md:p-3 rounded-lg border transition-all text-center flex flex-col items-center justify-center h-[70px] md:h-[90px]
                  ${formData.services.includes(service.id)
                    ? 'border-cerulean bg-cerulean/20 text-white'
                    : 'border-gray-600 bg-gray-800/50 text-white hover:border-cerulean/50 hover:bg-gray-800'}
                `}
              >
                <Icon name={service.icon} size={18} className="mb-1 md:w-5 md:h-5" />
                <p className="text-[10px] md:text-xs font-medium leading-tight break-words px-1">{service.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[10px] md:text-sm font-semibold text-white mb-1 md:mb-2">
            Ihre Nachricht
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-2 py-1.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-lg md:rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 resize-none text-xs md:text-base"
            placeholder="Beschreiben Sie kurz Ihr Projekt..."
          />
        </div>

        {/* Privacy */}
        <label className="flex items-start text-[10px] md:text-sm text-white">
          <input
            type="checkbox"
            name="datenschutz"
            required
            checked={formData.datenschutz}
            onChange={handleChange}
            className="mr-2 mt-0.5 md:mr-3 md:mt-1 text-white w-3 h-3 md:w-4 md:h-4"
          />
          <span>
            Ich stimme der <a href="/datenschutz" className="text-white hover:underline">Datenschutzerklärung</a> zu und erlaube die Kontaktaufnahme für die Angebotserstellung. *
          </span>
        </label>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`p-4 rounded-xl mb-4 ${
            submitMessage.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <div className="flex items-center">
              <Icon 
                name={submitMessage.type === 'success' ? 'check-circle' : 'alert-circle'} 
                size={20} 
                className="mr-2" 
              />
              {submitMessage.text}
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`
            w-full py-3 md:py-4 rounded-xl font-bold transition-all text-sm md:text-lg
            ${isValid && !isSubmitting
              ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white hover:from-indigo-dye hover:to-cerulean hover:scale-105 shadow-xl'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <div className="inline-block animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
              Wird gesendet...
            </>
          ) : (
            <>
              <Icon name="mail" size={16} className="inline mr-2 md:w-5 md:h-5" />
              Kostenlose Beratung anfordern
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="bg-gray-800/80 px-4 py-2 md:px-8 md:py-4 text-center">
        <p className="text-[10px] md:text-sm text-white">
          <Icon name="lock" size={12} className="inline mr-1 md:w-4 md:h-4" />
          Ihre Daten werden vertraulich behandelt
        </p>
      </div>
    </div>
  );
}