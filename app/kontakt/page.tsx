'use client'
import Icon from '../components/Icon';
import FooterWithMarquee from '../components/FooterWithMarquee';
import FloatingElements from '../components/FloatingElements';
import MultiStepWizard from '../components/MultiStepWizard';

export default function Kontakt() {

  return (
    <main className="overflow-hidden relative min-h-screen">
      {/* Floating Logo and Menu */}
      <FloatingElements />
      
      <section className="relative pt-16 md:pt-24 pb-4 md:pb-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-wide leading-tight">
                KONTAKT
              </h1>
              <div className="flex justify-center mt-2 md:mt-3">
                <div className="w-16 md:w-24 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            <p className="text-sm md:text-lg max-w-2xl mx-auto text-white/90 mt-3 md:mt-6 px-4">
              Professioneller Rückbau, Abbruch und Sanierung. Kostenlose Beratung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12 bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Row - KOMPAKTER AUF MOBILE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
            <div className="bg-off-white rounded-xl shadow-lg p-3 md:p-4">
              <div className="flex items-center mb-2 md:mb-4">
                <Icon name="phone" size={20} className="mr-2 md:mr-3 text-cerulean" />
                <h3 className="text-base md:text-lg font-bold text-indigo-dye">
                  24/7 Hotline
                </h3>
              </div>
              <div className="text-center">
                <a href="tel:+491748083023" className="text-xl md:text-2xl font-bold text-indigo-dye hover:text-cerulean block">
                  +49 174 8083023
                </a>
                <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Sofort verfügbar</p>
              </div>
            </div>

            <div className="bg-off-white rounded-xl shadow-lg p-3 md:p-4">
              <div className="flex items-center mb-2 md:mb-4">
                <Icon name="mail" size={20} className="mr-2 md:mr-3 text-cerulean" />
                <h3 className="text-base md:text-lg font-bold text-indigo-dye">
                  E-Mail
                </h3>
              </div>
              <div className="text-center">
                <a href="mailto:info@rueckbaupro.de" className="text-sm md:text-lg font-semibold text-indigo-dye hover:text-cerulean block break-all">
                  info@rueckbaupro.de
                </a>
                <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Antwort binnen 2h</p>
              </div>
            </div>

            <div className="bg-off-white rounded-xl shadow-lg p-3 md:p-4">
              <div className="flex items-center mb-2 md:mb-4">
                <Icon name="clock" size={20} className="mr-2 md:mr-3 text-cerulean" />
                <h3 className="text-base md:text-lg font-bold text-indigo-dye">
                  Verfügbarkeit
                </h3>
              </div>
              <div className="text-center">
                <p className="text-base md:text-lg font-semibold text-indigo-dye">
                  24 Stunden täglich
                </p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">365 Tage im Jahr</p>
                <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-200">
                  <p className="text-xs text-green-600 font-semibold">
                    ✓ Unverbindlich
                  </p>
                  <p className="text-xs text-gray-500">
                    Kostenlose Beratung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section - Full Width */}
          <div className="w-full">
            <MultiStepWizard
              purpose="quote"
            />
          </div>
        </div>
      </section>

      
      
      <FooterWithMarquee />
    </main>
  );
}