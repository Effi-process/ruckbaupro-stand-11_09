'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function TwoColumnSection() {
  return (
    <section className="relative py-24 bg-[#1a2332] overflow-hidden">
      {/* Dekorative Hintergrund-Elemente */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-light-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bright-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative group">
            {/* Glow-Effekt */}
            <div className="absolute -inset-4 bg-gradient-to-r from-light-blue/20 to-bright-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-light-blue/30 transition-all duration-500">
              <Image
                src="/images/team-photo.jpeg"
                alt="RückbauPRO - Professionelle Schadstoffsanierung"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-light-blue text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              ✓ Zertifiziert
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-light-blue to-bright-blue bg-clip-text text-transparent leading-tight">
              RÜCKBAUPRO
            </h2>

            <div className="space-y-6 text-white text-lg md:text-xl leading-relaxed">
              <p>
                Unser junges, motiviertes Team bringt über 30 Jahre gesammelte Erfahrung
                im Abbruch, Rückbau und der Schadstoffsanierung mit – für jede Herausforderung
                haben wir die passende Lösung.
              </p>

              <p>
                Egal ob Asbestsanierung, Komplettrückbau oder anspruchsvolle Industrieprojekte:
                Wir packen jedes Problem mit Leidenschaft, Expertise und modernster Technik an.
                Ihre Zufriedenheit ist unser Antrieb.
              </p>

              <p>
                Mit zertifizierten Verfahren (TRGS 519/DGUV), transparenter Kommunikation
                und kreativem Problemlösungsansatz meistern wir gemeinsam auch komplexeste
                Projekte – schnell, sicher und zuverlässig.
              </p>
            </div>

            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-bright-blue to-light-blue hover:from-light-blue hover:to-bright-blue text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Jetzt unverbindlich anfragen!
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
