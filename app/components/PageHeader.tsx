'use client'

import LogoComponent from './LogoComponent';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <section className="relative py-8 bg-gradient-to-br from-gray-800 via-gray-700 to-oxford-blue">
        {/* Logo fixed in top-left corner like menu */}
        <div className="fixed top-4 left-4 z-40">
          <div className="bg-gradient-to-br from-cerulean to-indigo-dye p-1 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl p-3">
              <LogoComponent width={150} height={60} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="text-center pt-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wide leading-tight">
                {title.toUpperCase()}
              </h1>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-1 bg-cerulean rounded-full"></div>
              </div>
            </div>
            {subtitle && (
              <p className="text-xl max-w-3xl mx-auto text-white/90 mt-8">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}