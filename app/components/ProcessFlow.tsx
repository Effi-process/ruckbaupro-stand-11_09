'use client';

export default function ProcessFlow() {
  const steps = [
    {
      number: '01',
      title: 'BERATUNG',
      description: 'KOSTENLOSE ERSTBERATUNG UND BEGEHUNG VOR ORT',
      details: 'Unser Experte kommt zu Ihnen, bewertet die Situation und erstellt eine detaillierte Bestandsaufnahme',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      duration: '1-2 Std'
    },
    {
      number: '02', 
      title: 'ANGEBOT',
      description: 'TRANSPARENTES FESTPREISANGEBOT BINNEN 24 STUNDEN',
      details: 'Sie erhalten ein detailliertes Angebot mit allen Kosten, Terminen und Leistungen ohne versteckte Gebühren',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      duration: '< 24 Std'
    },
    {
      number: '03',
      title: 'DURCHFÜHRUNG', 
      description: 'PROFESSIONELLE UMSETZUNG MIT ZERTIFIZIERTER TECHNIK',
      details: 'Sicherer Arbeitsablauf nach TRGS 519 mit modernster Ausrüstung und geschultem Fachpersonal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      duration: '1-5 Tage'
    },
    {
      number: '04',
      title: 'ABNAHME & FREIGABE',
      description: 'MESSUNG, DOKUMENTATION UND ORDNUNGSGEMÄSSE ÜBERGABE',
      details: 'Freimessung durch akkreditierte Prüfstelle, vollständige Dokumentation und behördliche Freigabe',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      duration: '1-2 Tage'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-700 via-gray-800 to-oxford-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cerulean rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-dye rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6">
            <svg className="w-5 h-5 text-cerulean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Professioneller Ablauf</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
            UNSER ABLAUF
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Von der ersten Beratung bis zur finalen Abnahme - wir begleiten Sie durch jeden Schritt Ihres Projekts
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-cerulean/60 via-cerulean/30 to-transparent transform translate-x-3 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-cerulean rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/10 hover:border-cerulean/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cerulean/20 group min-h-[280px] sm:min-h-[320px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cerulean/0 via-cerulean/5 to-cerulean/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Step Number with Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-cerulean/20 to-indigo-dye/20 border border-cerulean/30 flex items-center justify-center group-hover:from-cerulean group-hover:to-indigo-dye group-hover:border-cerulean group-hover:shadow-lg group-hover:shadow-cerulean/40 transition-all duration-500 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cerulean/30 to-indigo-dye/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 text-white group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                </div>

                {/* Step Content */}
                <div className="relative z-10">
                  {/* Duration Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cerulean to-indigo-dye text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {step.duration}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 group-hover:text-cerulean transition-colors duration-300 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-cerulean/90 font-bold text-xs sm:text-sm tracking-wider mb-3 sm:mb-4 uppercase">
                    {step.description}
                  </p>
                  <p className="text-white/70 group-hover:text-white/90 leading-relaxed text-xs sm:text-sm transition-colors duration-300">
                    {step.details}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cerulean/0 via-cerulean/50 to-cerulean/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}