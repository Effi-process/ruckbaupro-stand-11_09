import Link from 'next/link';
import Icon from './components/Icon';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative">
          <h1 className="text-9xl font-black text-white/20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="warning" size={80} className="text-white/40" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mt-8 mb-4">
          Seite nicht gefunden
        </h2>
        
        <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
          Die angeforderte Seite existiert leider nicht. 
          Aber keine Sorge - wir helfen Ihnen gerne weiter!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-off-white text-[#0066CC] hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Icon name="home" size={20} />
            Zur Startseite
          </Link>
          
          <Link
            href="/kontakt"
            className="bg-off-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-off-white hover:text-[#0066CC] px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Icon name="phone" size={20} />
            Kontakt aufnehmen
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-white/60 text-sm">
            24/7 Notdienst: <a href="tel:+49 174 8083023" className="text-white underline hover:no-underline">+49 174 8083023</a>
          </p>
        </div>
      </div>
    </div>
  );
}