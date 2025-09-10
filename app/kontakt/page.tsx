'use client'
import { useState, Suspense, lazy } from 'react';
import Icon from '../components/Icon';
import EmergencyHotline from '../components/EmergencyHotline';
import TrustBadges from '../components/TrustBadges';
import MenuFooter from '../components/MenuFooter';
import FloatingElements from '../components/FloatingElements';

const MultiStepWizard = lazy(() => import('../components/MultiStepWizard'));

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contactMethod: 'email',
    email: '',
    telefon: '',
    service: '',
    nachricht: '',
    datenschutz: false
  });
  const [showClassicForm, setShowClassicForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formular gesendet:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <main className="overflow-hidden relative min-h-screen">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      <section className="relative pt-24 pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-wide leading-tight">
                KONTAKT
              </h1>
              <div className="flex justify-center mt-3">
                <div className="w-24 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-lg max-w-2xl mx-auto text-white/90 mt-6">
              Professioneller Rückbau, Abbruch und Sanierung. Kostenlose Beratung für Ihr Projekt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-off-white rounded-xl shadow-lg p-4">
              <div className="flex items-center mb-4">
                <Icon name="phone" size={24} className="mr-3 text-cerulean" />
                <h3 className="text-lg font-bold text-indigo-dye">
                  24/7 Hotline
                </h3>
              </div>
              <div className="text-center">
                <a href="tel:+491748083023" className="text-2xl font-bold text-indigo-dye hover:text-cerulean block">
                  +49 174 8083023
                </a>
                <p className="text-sm text-gray-600 mt-2">Sofort verfügbar</p>
              </div>
            </div>

            <div className="bg-off-white rounded-xl shadow-lg p-4">
              <div className="flex items-center mb-4">
                <Icon name="mail" size={24} className="mr-3 text-cerulean" />
                <h3 className="text-lg font-bold text-indigo-dye">
                  E-Mail
                </h3>
              </div>
              <div className="text-center">
                <a href="mailto:info@rueckbaupro.de" className="text-lg font-semibold text-indigo-dye hover:text-cerulean block">
                  info@rueckbaupro.de
                </a>
                <p className="text-sm text-gray-600 mt-2">Antwort binnen 2h</p>
              </div>
            </div>

            <div className="bg-off-white rounded-xl shadow-lg p-4">
              <div className="flex items-center mb-4">
                <Icon name="clock" size={24} className="mr-3 text-cerulean" />
                <h3 className="text-lg font-bold text-indigo-dye">
                  Verfügbarkeit
                </h3>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-indigo-dye">
                  24 Stunden täglich
                </p>
                <p className="text-sm text-gray-600 mt-1">365 Tage im Jahr</p>
              </div>
            </div>
          </div>

          {/* Form Section - Full Width */}
          <div className="w-full">
            <Suspense fallback={
              <div className="bg-off-white rounded-3xl shadow-2xl p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cerulean mx-auto mb-4"></div>
                <p className="text-indigo-dye">Lade Anfrage-Formular...</p>
              </div>
            }>
              <MultiStepWizard 
                purpose="quote" 
                onComplete={(data) => console.log('Form completed:', data)}
              />
            </Suspense>
          </div>
        </div>
      </section>

      
      
      <MenuFooter />
    </main>
  );
}