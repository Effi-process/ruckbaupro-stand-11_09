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
      <div className="bg-gradient-to-r from-cerulean to-indigo-dye p-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            KOSTENLOSE BERATUNG ANFRAGEN
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            EINFACH UND SCHNELL ZU IHREM PERSÖNLICHEN ANGEBOT
          </p>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-base">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Icon name="shield" size={20} className="text-green-300" />
              <span className="font-bold text-lg">100% UNVERBINDLICH</span>
            </div>
            <p className="text-white/90 text-sm font-medium">
              KOSTENLOSE BERATUNG • KEINE VERSTECKTEN KOSTEN • UNVERBINDLICHES ANGEBOT
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Name and Company in one row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
              placeholder="Ihr vollständiger Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Firmenname (optional)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
              placeholder="Ihr Firmenname"
            />
          </div>
        </div>

        {/* Contact Method and City in one row */}
        <div>
          <div className="space-y-3 mb-4">
            <p className="font-semibold text-white">Wie möchten Sie kontaktiert werden? *</p>
            <div className="flex gap-4">
              <label className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${formData.contactMethod === 'email' ? 'border-cerulean bg-cerulean' : 'border-gray-400'}`}>
                  {formData.contactMethod === 'email' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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
                <span className="text-white font-medium">E-MAIL</span>
              </label>
              <label className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${formData.contactMethod === 'phone' ? 'border-cerulean bg-cerulean' : 'border-gray-400'}`}>
                  {formData.contactMethod === 'phone' && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
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
                <span className="text-white font-medium">TELEFON</span>
              </label>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              {formData.contactMethod === 'email' && (
                <>
                  <label className="block font-semibold text-white mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 min-h-[44px] text-base"
                    placeholder="ihre@email.de"
                  />
                </>
              )}
              
              {formData.contactMethod === 'phone' && (
                <>
                  <label className="block font-semibold text-white mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 min-h-[44px] text-base"
                    placeholder="Ihre Telefonnummer"
                  />
                </>
              )}
            </div>

            <div>
              <label className="block font-semibold text-white mb-2">
                Standort / Stadt *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
                placeholder="Ihre Stadt"
              />
            </div>
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block font-semibold text-white mb-4">
            Welche Dienstleistungen benötigen Sie? * (Mehrfachauswahl möglich)
          </label>
          <div className="space-y-6">
            {/* Sanierungsleistungen */}
            <div>
              <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wide">Sanierungsleistungen</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { id: 'asbest-sanierung', label: 'Asbest-Sanierung', icon: 'shield' },
                  { id: 'kmf-sanierung', label: 'KMF-Sanierung', icon: 'warning' },
                  { id: 'schimmelsanierung', label: 'Schimmelsanierung', icon: 'alert' }
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
                      p-4 rounded-xl border-2 transition-all text-center
                      ${formData.services.includes(service.id)
                        ? 'border-cerulean bg-cerulean/20 text-white'
                        : 'border-gray-600 bg-gray-800/50 text-white hover:border-cerulean/50 hover:bg-gray-800'}
                    `}
                  >
                    <Icon name={service.icon} size={24} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">{service.label}</p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Bauarbeiten */}
            <div>
              <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wide">Bauarbeiten</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { id: 'entkernung', label: 'Entkernung', icon: 'home' },
                  { id: 'betonarbeiten', label: 'Betonarbeiten', icon: 'cube' },
                  { id: 'beratung-planung', label: 'Beratung & Planung', icon: 'users' }
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
                      p-4 rounded-xl border-2 transition-all text-center
                      ${formData.services.includes(service.id)
                        ? 'border-cerulean bg-cerulean/20 text-white'
                        : 'border-gray-600 bg-gray-800/50 text-white hover:border-cerulean/50 hover:bg-gray-800'}
                    `}
                  >
                    <Icon name={service.icon} size={24} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">{service.label}</p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Geschäftsmöglichkeiten */}
            <div>
              <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wide">Geschäftsmöglichkeiten</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { id: 'franchise', label: 'Franchise-Partnerschaft', icon: 'euro' }
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
                      p-4 rounded-xl border-2 transition-all text-center
                      ${formData.services.includes(service.id)
                        ? 'border-green-500 bg-green-500/20 text-white'
                        : 'border-gray-600 bg-gray-800/50 text-white hover:border-green-500/50 hover:bg-gray-800'}
                    `}
                  >
                    <Icon name={service.icon} size={24} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">{service.label}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold text-white mb-2">
            Ihre Nachricht
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
            placeholder="Beschreiben Sie kurz Ihr Projekt..."
          />
        </div>

        {/* Privacy */}
        <label className="flex items-start text-sm text-white">
          <input
            type="checkbox"
            name="datenschutz"
            required
            checked={formData.datenschutz}
            onChange={handleChange}
            className="mr-3 mt-1 text-white"
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
            w-full py-4 rounded-xl font-bold transition-all text-lg
            ${isValid && !isSubmitting
              ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white hover:from-indigo-dye hover:to-cerulean hover:scale-105 shadow-xl'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Wird gesendet...
            </>
          ) : (
            <>
              <Icon name="mail" size={20} className="inline mr-2" />
              Kostenlose Beratung anfordern
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="bg-gray-800/80 px-8 py-4 text-center">
        <p className="text-sm text-white">
          <Icon name="lock" size={16} className="inline mr-1" />
          Ihre Daten werden vertraulich behandelt
        </p>
      </div>
    </div>
  );
}