'use client';
import { useState, useEffect, useCallback } from 'react';
import Icon from './Icon';
import Image from 'next/image';

interface SimpleContactFormProps {
  purpose?: 'contact' | 'quote' | 'emergency' | 'inspection';
  onComplete?: (data: any) => void;
  variant?: 'fullscreen' | 'embedded';
  className?: string;
}

interface FormData {
  name: string;
  company: string;
  contactMethod: 'email' | 'phone';
  email: string;
  phone: string;
  message: string;
  datenschutz: boolean;
}

export default function SimpleContactForm({ purpose, onComplete, variant = 'fullscreen', className }: SimpleContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    contactMethod: 'email',
    email: '',
    phone: '',
    message: '',
    datenschutz: false
  });
  const [isValid, setIsValid] = useState(false);

  const validateForm = useCallback(() => {
    const contactValid = formData.contactMethod === 'email'
      ? formData.email.trim().length > 0 && formData.email.includes('@')
      : formData.phone.trim().length > 0;
    const privacyValid = formData.datenschutz;

    setIsValid(contactValid && privacyValid);
  }, [formData.email, formData.phone, formData.contactMethod, formData.datenschutz]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const generateEmailText = () => {
    const contactInfo = formData.contactMethod === 'email'
      ? `E-Mail: ${formData.email}`
      : `Telefon: ${formData.phone}`;

    return `Neue Anfrage über RückbauPRO Website

Kontaktdaten:
${formData.name ? `- Name: ${formData.name}` : ''}
${formData.company ? `- Firma: ${formData.company}` : ''}
- ${contactInfo}

${formData.message ? `Nachricht:
${formData.message}` : ''}

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
        body: JSON.stringify({
          ...formData,
          emailText: generateEmailText()
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.'
        });

        // Reset form
        setFormData({
          name: '',
          company: '',
          contactMethod: 'email',
          email: '',
          phone: '',
          message: '',
          datenschutz: false
        });

        if (onComplete) {
          onComplete(formData);
        }
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
        });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else if (type === 'radio') {
      setFormData(prev => ({
        ...prev,
        contactMethod: value as 'email' | 'phone'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Embedded variant without background image
  if (variant === 'embedded') {
    return (
      <div className={`w-full max-w-4xl mx-auto ${className || ''}`} role="region" aria-label="Kontaktformular">
        <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <EmbeddedFormContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isValid={isValid}
            isSubmitting={isSubmitting}
            submitMessage={submitMessage}
          />
        </div>
      </div>
    );
  }

  // Original fullscreen variant
  return (
    <div className="relative w-full min-h-screen bg-[#1a2332]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/professional-demolition-bg.png"
          alt="Professional demolition background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Form overlay positioned on the right for desktop, centered for mobile */}
      <div className="relative z-10 min-h-screen flex items-center justify-center md:justify-end px-4 py-8 md:py-0">
        <div className="w-full max-w-xl lg:max-w-2xl md:mr-4 lg:mr-8 xl:mr-16 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-cerulean/90 to-indigo-dye/90 px-4 py-6 md:px-6 md:py-8 text-center overflow-hidden">

        <h2 className="relative text-xl md:text-2xl lg:text-3xl font-black text-white mb-2">
          KOSTENLOSE BERATUNG
        </h2>
        <p className="relative text-xs md:text-sm lg:text-base text-white/90">
          Schnell & unverbindlich zu Ihrem Angebot
        </p>

        {/* Simple badge */}
        <div className="relative mt-3 md:mt-4 inline-flex items-center gap-1.5 md:gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2">
          <Icon name="check" size={14} className="text-white md:w-4 md:h-4" />
          <span className="text-white text-xs md:text-sm font-semibold">100% UNVERBINDLICH</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-5">
        {/* Name (Optional) */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-1.5 md:mb-2">
            Name (optional)
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-sm md:text-base"
            placeholder="Ihr Name"
          />
        </div>

        {/* Company (Optional) */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-1.5 md:mb-2">
            Firma (optional)
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-sm md:text-base"
            placeholder="Ihre Firma"
          />
        </div>

        {/* Contact Method Selection */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-2 md:mb-3">
            Kontaktmethode *
          </label>
          <div className="flex gap-3 md:gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 mr-1.5 md:mr-2 flex items-center justify-center transition-colors ${
                formData.contactMethod === 'email' ? 'border-cerulean bg-cerulean' : 'border-gray-400'
              }`}>
                {formData.contactMethod === 'email' && (
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-white font-medium text-sm md:text-base">E-Mail</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 mr-1.5 md:mr-2 flex items-center justify-center transition-colors ${
                formData.contactMethod === 'phone' ? 'border-cerulean bg-cerulean' : 'border-gray-400'
              }`}>
                {formData.contactMethod === 'phone' && (
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-white font-medium text-sm md:text-base">Telefon</span>
            </label>
          </div>
        </div>

        {/* Email or Phone Input */}
        {formData.contactMethod === 'email' ? (
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-1.5 md:mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-sm md:text-base"
              placeholder="ihre@email.de"
            />
          </div>
        ) : (
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-1.5 md:mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 text-sm md:text-base"
              placeholder="Ihre Telefonnummer"
            />
          </div>
        )}

        {/* Message (Optional) */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-1.5 md:mb-2">
            Ihre Nachricht (optional)
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 resize-none text-sm md:text-base"
            placeholder="Beschreiben Sie kurz Ihr Projekt..."
          />
        </div>

        {/* Privacy */}
        <label className="flex items-start text-xs md:text-sm text-white cursor-pointer">
          <input
            type="checkbox"
            name="datenschutz"
            required
            checked={formData.datenschutz}
            onChange={handleChange}
            className="mr-2 md:mr-3 mt-0.5 md:mt-1 w-4 h-4"
          />
          <span>
            Ich stimme der <a href="/datenschutz" className="text-cerulean hover:underline">Datenschutzerklärung</a> zu und erlaube die Kontaktaufnahme. *
          </span>
        </label>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`p-4 rounded-xl ${
            submitMessage.type === 'success'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
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
            w-full py-3 md:py-4 rounded-xl font-bold transition-all text-base md:text-lg flex items-center justify-center
            ${isValid && !isSubmitting
              ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white hover:from-indigo-dye hover:to-cerulean hover:scale-[1.02] shadow-xl'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
              <span className="text-sm md:text-base">Wird gesendet...</span>
            </>
          ) : (
            <>
              <Icon name="mail" size={18} className="mr-2 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Anfrage senden</span>
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="bg-gray-800/50 px-4 py-3 md:px-6 md:py-4 text-center border-t border-gray-700">
        <p className="text-xs md:text-sm text-white/70">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen
        </p>
      </div>
        </div>
      </div>
    </div>
  );
}

// Form content component for the embedded variant
function EmbeddedFormContent({
  formData,
  handleChange,
  handleSubmit,
  isValid,
  isSubmitting,
  submitMessage
}: {
  formData: FormData,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleSubmit: (e: React.FormEvent) => Promise<void>,
  isValid: boolean,
  isSubmitting: boolean,
  submitMessage: {type: 'success' | 'error', text: string} | null
}) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-gradient-to-r from-cerulean/90 to-indigo-dye/90 px-6 py-8 text-center overflow-hidden">
        <h2 className="relative text-2xl md:text-3xl font-black text-white mb-2">
          KOSTENLOSE BERATUNG
        </h2>
        <p className="relative text-sm md:text-base text-white/90">
          Schnell & unverbindlich zu Ihrem Angebot
        </p>
        <div className="relative mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
          <Icon name="check" size={16} className="text-white" />
          <span className="text-white text-sm font-semibold">100% UNVERBINDLICH</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        {/* Name (Optional) */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-2">
            Name (optional)
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
            placeholder="Ihr Name"
          />
        </div>

        {/* Company (Optional) */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-2">
            Firma (optional)
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
            placeholder="Ihre Firma"
          />
        </div>

        {/* Contact Method Selection */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-3">
            Kontaktmethode *
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center transition-colors ${
                formData.contactMethod === 'email' ? 'border-cerulean bg-cerulean' : 'border-gray-400'
              }`}>
                {formData.contactMethod === 'email' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-white font-medium">E-Mail</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center transition-colors ${
                formData.contactMethod === 'phone' ? 'border-cerulean bg-cerulean' : 'border-gray-400'
              }`}>
                {formData.contactMethod === 'phone' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
              <span className="text-white font-medium">Telefon</span>
            </label>
          </div>
        </div>

        {/* Email or Phone Input */}
        {formData.contactMethod === 'email' ? (
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-2">
              E-Mail *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
              placeholder="ihre@email.de"
            />
          </div>
        ) : (
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
              placeholder="Ihre Telefonnummer"
            />
          </div>
        )}

        {/* Message (Optional) */}
        <div>
          <label className="block text-xs md:text-sm font-semibold text-white mb-2">
            Ihre Nachricht (optional)
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
            placeholder="Beschreiben Sie kurz Ihr Projekt..."
          />
        </div>

        {/* Privacy */}
        <label className="flex items-start text-sm text-white cursor-pointer">
          <input
            type="checkbox"
            name="datenschutz"
            required
            checked={formData.datenschutz}
            onChange={handleChange}
            className="mr-3 mt-1 w-4 h-4"
          />
          <span>
            Ich stimme der <a href="/datenschutz" className="text-cerulean hover:underline">Datenschutzerklärung</a> zu und erlaube die Kontaktaufnahme. *
          </span>
        </label>

        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`p-4 rounded-xl ${
            submitMessage.type === 'success'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
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
            w-full py-4 rounded-xl font-bold transition-all text-lg flex items-center justify-center
            ${
              isValid && !isSubmitting
                ? 'bg-gradient-to-r from-cerulean to-indigo-dye text-white hover:from-indigo-dye hover:to-cerulean hover:scale-[1.02] shadow-xl'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Wird gesendet...
            </>
          ) : (
            <>
              <Icon name="mail" size={20} className="mr-2" />
              Anfrage senden
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="bg-gray-800/50 px-6 py-4 text-center border-t border-gray-700">
        <p className="text-xs text-white/70">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen
        </p>
      </div>
    </>
  );
}