'use client'
import { useState } from 'react';
import Link from 'next/link';
import Icon from '../components/Icon';
import FloatingElements from '../components/FloatingElements';
import FooterWithMarquee from '../components/FooterWithMarquee';

export default function Artikel() {
  const [selectedCategory, setSelectedCategory] = useState('alle');

  const categories = [
    { id: 'alle', name: 'Alle Artikel' },
    { id: 'asbest', name: 'Asbest-Wissen' },
    { id: 'sicherheit', name: 'Sicherheit' },
    { id: 'recht', name: 'Recht & Gesetz' },
    { id: 'gesundheit', name: 'Gesundheit' },
    { id: 'praxis', name: 'Praxis-Tipps' }
  ];

  const articles = [
    {
      id: 1,
      category: 'asbest',
      title: 'Asbest erkennen: Die vollständige Anleitung',
      excerpt: 'Lernen Sie, wie Sie Asbest in Ihrem Gebäude identifizieren können und welche Materialien besonders gefährlich sind.',
      date: '15. Januar 2024',
      readTime: '8 Min.',
      featured: true
    },
    {
      id: 2,
      category: 'sicherheit',
      title: 'TRGS 519: Was Sie wissen müssen',
      excerpt: 'Die technischen Regeln für Gefahrstoffe beim Umgang mit Asbest - verständlich erklärt.',
      date: '10. Januar 2024',
      readTime: '10 Min.'
    },
    {
      id: 3,
      category: 'gesundheit',
      title: 'Gesundheitsrisiken durch Asbest',
      excerpt: 'Warum Asbestfasern so gefährlich sind und welche Krankheiten sie verursachen können.',
      date: '5. Januar 2024',
      readTime: '6 Min.'
    },
    {
      id: 4,
      category: 'recht',
      title: 'Asbestverbot in Deutschland: Die Rechtslage',
      excerpt: 'Seit wann ist Asbest verboten und welche gesetzlichen Regelungen gelten heute?',
      date: '28. Dezember 2023',
      readTime: '7 Min.'
    },
    {
      id: 5,
      category: 'praxis',
      title: 'Kosten einer Asbestsanierung richtig kalkulieren',
      excerpt: 'Alle Faktoren, die den Preis beeinflussen und wie Sie Kosten sparen können.',
      date: '20. Dezember 2023',
      readTime: '12 Min.'
    },
    {
      id: 6,
      category: 'asbest',
      title: 'Asbesthaltige Bodenbeläge: Floor-Flex und Cushion-Vinyl',
      excerpt: 'Diese Bodenbeläge enthalten oft Asbest - so erkennen und sanieren Sie sie richtig.',
      date: '15. Dezember 2023',
      readTime: '9 Min.'
    },
    {
      id: 7,
      category: 'sicherheit',
      title: 'Schutzausrüstung bei Asbestarbeiten',
      excerpt: 'Welche PSA ist vorgeschrieben und wie schützen Sie sich richtig?',
      date: '10. Dezember 2023',
      readTime: '11 Min.'
    },
    {
      id: 8,
      category: 'praxis',
      title: 'Asbestsanierung im Eigenheim: Der Ablauf',
      excerpt: 'Schritt für Schritt durch den Sanierungsprozess - von der Planung bis zur Freimessung.',
      date: '5. Dezember 2023',
      readTime: '15 Min.'
    }
  ];

  const filteredArticles = selectedCategory === 'alle' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <main className="relative">
      {/* Transparent Header */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Asbest-Ratgeber
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expertenwissen rund um Asbest, Schadstoffe und sichere Sanierung
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#0066CC] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {filteredArticles.find(a => a.featured) && (
            <div className="mb-12">
              <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] rounded-xl p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Highlight</span>
                  <span className="text-sm opacity-80">
                    {filteredArticles.find(a => a.featured)?.date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  {filteredArticles.find(a => a.featured)?.title}
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  {filteredArticles.find(a => a.featured)?.excerpt}
                </p>
                <Link
                  href={`/artikel/${filteredArticles.find(a => a.featured)?.id}`}
                  className="inline-flex items-center bg-off-white text-[#0066CC] hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all"
                >
                  Artikel lesen
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(a => !a.featured).map(article => (
              <article key={article.id} className="bg-off-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2C4F5E] mb-3">
                    <Link href={`/artikel/${article.id}`} className="hover:text-[#0066CC] transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Link
                      href={`/artikel/${article.id}`}
                      className="text-[#0066CC] hover:text-[#0052A3] font-semibold flex items-center"
                    >
                      Weiterlesen
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-oxford-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-off-white rounded-xl shadow-lg p-8 text-center">
            <Icon name="document" size={64} className="mx-auto mb-4 text-[#0066CC]" />
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
              Bleiben Sie informiert
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Erhalten Sie wichtige Updates zu Asbest-Vorschriften und Sicherheitshinweise
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#0052A3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Haben Sie Fragen zu Asbest?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Unsere Experten beraten Sie gerne persönlich und unverbindlich
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-off-white text-[#0066CC] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Kostenlose Beratung
            </Link>
            <a
              href="tel:+491748083023"
              className="bg-transparent border-2 border-white text-white hover:bg-off-white hover:text-[#0066CC] font-bold py-4 px-8 rounded-lg text-lg transition-all inline-flex items-center justify-center"
            >
              <Icon name="telefon" size={24} className="mr-2" />
              +49 174 8083023
            </a>
          </div>
        </div>
      </section>
      
      <FooterWithMarquee />
    </main>
  );
}