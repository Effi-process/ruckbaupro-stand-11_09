import Link from 'next/link';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function Sitemap() {
  const pages = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Preise', path: '/preise' },
    { name: 'Kontakt', path: '/kontakt' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'B2B', path: '/b2b' },
    { name: 'Karriere', path: '/karriere' },
    { name: 'Nachhaltigkeit', path: '/nachhaltigkeit' },
    { name: 'Impressum', path: '/impressum' },
    { name: 'Datenschutz', path: '/datenschutz' },
    { name: 'AGB', path: '/agb' }
  ];

  return (
    <main className="pt-32 pb-20 relative bg-gradient-to-b from-gray-800 via-gray-700 to-oxford-blue text-white min-h-screen">
      {/* Transparent Header */}
      <FloatingElements />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#2C4F5E] mb-8">Sitemap</h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">Alle Seiten</h2>
            
            <ul className="space-y-2">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link 
                    href={page.path}
                    className="text-[#0066CC] hover:text-[#0052A3] hover:underline text-lg"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <FooterWithMarquee />
    </main>
  );
}