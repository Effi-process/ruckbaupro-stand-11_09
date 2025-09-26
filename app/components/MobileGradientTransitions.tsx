'use client';

export function GradientDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700/50 to-oxford-blue" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cerulean/5 to-transparent animate-pulse" />
    </div>
  );
}

export function WaveTransition() {
  return (
    <div className="relative h-20 md:h-24 overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="url(#gradient)"
          fillOpacity="0.3"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007ACC" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0C3F5C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#007ACC" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function MobileGradientSection({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'reverse' | 'strong' }) {
  const gradientClass = {
    default: 'bg-gradient-to-b from-gray-800/50 via-transparent to-gray-700/50',
    reverse: 'bg-gradient-to-t from-oxford-blue via-gray-700/30 to-transparent',
    strong: 'bg-gradient-to-b from-oxford-blue via-gray-800 to-gray-700'
  }[variant];

  return (
    <div className="relative">
      {/* Top gradient fade */}
      <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent pointer-events-none z-10 md:hidden" />

      <div className={`relative ${gradientClass} transition-all duration-1000`}>
        {children}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-transparent via-gray-700/20 to-transparent pointer-events-none z-10 md:hidden" />
    </div>
  );
}