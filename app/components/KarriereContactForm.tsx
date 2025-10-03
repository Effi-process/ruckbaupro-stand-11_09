'use client';
import { useState, useEffect, useCallback } from 'react';
import Icon from './Icon';

interface FormData {
  name: string;
  email: string;
  beruf: string;
  nachricht: string;
  datenschutz: boolean;
}

export default function KarriereContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    beruf: '',
    nachricht: '',
    datenschutz: false
  });
  const [isValid, setIsValid] = useState(false);

  const validateForm = useCallback(() => {
    const emailValid = formData.email.trim().length > 0 && formData.email.includes('@');
    const nameValid = formData.name.trim().length > 0;
    const privacyValid = formData.datenschutz;

    setIsValid(emailValid && nameValid && privacyValid);
  }, [formData.email, formData.name, formData.datenschutz]);

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  const generateEmailText = () => {
    return `Neue Bewerbung über RückbauPRO Website

Kontaktdaten:
- Name: ${formData.name}
- E-Mail: ${formData.email}
${formData.beruf ? `- Beruf/Position: ${formData.beruf}` : ''}

${formData.nachricht ? `Nachricht:
${formData.nachricht}` : ''}

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
          text: 'Vielen Dank für Ihre Bewerbung! Wir melden uns innerhalb von 48 Stunden bei Ihnen.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          beruf: '',
          nachricht: '',
          datenschutz: false
        });
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
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-cerulean/90 to-indigo-dye/90 px-6 py-8 text-center overflow-hidden">
          <h2 className="relative text-2xl md:text-3xl font-black text-white mb-2">
            JETZT BEWERBEN
          </h2>
          <p className="relative text-sm md:text-base text-white/90">
            Werden Sie Teil unseres Teams
          </p>
          <div className="relative mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
            <Icon name="check" size={16} className="text-white" />
            <span className="text-white text-sm font-semibold">WIR FREUEN UNS AUF SIE</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
              placeholder="Ihr vollständiger Name"
            />
          </div>

          {/* Email */}
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

          {/* Beruf */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-2">
              Beruf / Position (optional)
            </label>
            <input
              type="text"
              name="beruf"
              value={formData.beruf}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400"
              placeholder="z.B. Asbestsanierer, Bauleiter, etc."
            />
          </div>

          {/* Nachricht */}
          <div>
            <label className="block text-xs md:text-sm font-semibold text-white mb-2">
              Ihre Nachricht (optional)
            </label>
            <textarea
              name="nachricht"
              rows={5}
              value={formData.nachricht}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl focus:border-cerulean focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
              placeholder="Erzählen Sie uns etwas über sich und warum Sie bei uns arbeiten möchten..."
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
                Bewerbung absenden
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="bg-gray-800/50 px-6 py-4 text-center border-t border-gray-700">
          <p className="text-xs text-white/70">
            Wir melden uns innerhalb von 48 Stunden bei Ihnen
          </p>
        </div>
      </div>
    </div>
  );
}
