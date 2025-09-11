'use client';

import Icon from './Icon';
import Link from 'next/link';

export default function CallAssurance() {
  return (
    <div className="bg-gradient-to-r from-green-500/20 to-cerulean/20 backdrop-blur-md border border-green-400/30 rounded-2xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
          <Icon name="phone" size={32} className="text-green-400" />
        </div>
      </div>
      
      <h3 className="text-white font-bold text-xl mb-3">
        Unverbindlicher Anruf
      </h3>
      
      <p className="text-white/90 text-sm mb-4 leading-relaxed">
        Ihr Anruf ist <strong>100% kostenlos und unverbindlich</strong>. 
        Keine versteckten Kosten, kein Verkaufsdruck - nur professionelle Beratung.
      </p>
      
      <div className="space-y-2 mb-6 text-left">
        <div className="flex items-center gap-3">
          <Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
          <span className="text-white/80 text-sm">Kostenlose Erstberatung</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
          <span className="text-white/80 text-sm">Unverbindliches Angebot</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
          <span className="text-white/80 text-sm">Keine versteckten Kosten</span>
        </div>
        <div className="flex items-center gap-3">
          <Icon name="check" size={16} className="text-green-400 flex-shrink-0" />
          <span className="text-white/80 text-sm">Professionelle Beratung</span>
        </div>
      </div>
      
      <Link
        href="tel:+491748083023"
        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg"
      >
        <Icon name="phone" size={20} />
        Jetzt anrufen: +49 174 8083023
      </Link>
      
      <p className="text-white/60 text-xs mt-3">
        24/7 erreichbar • Sofortige Beratung
      </p>
    </div>
  );
}