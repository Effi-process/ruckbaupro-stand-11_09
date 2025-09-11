'use client';

export default function Logo2Json({ 
  width = 180, 
  height = 72 
}: { 
  width?: number; 
  height?: number; 
}) {
  return (
    <div 
      style={{ width: width, height: height }}
      className="flex items-center gap-4"
    >
      {/* Building with debris - Blue colors */}
      <div className="flex flex-col items-center">
        {/* Building structure */}
        <svg width="40" height="50" viewBox="0 0 40 50" className="block">
          {/* Main building with gable roof */}
          <path 
            d="M 5 45 L 5 12 L 20 5 L 35 12 L 35 45 Z" 
            fill="#1C3E72"
          />
          {/* Gable roof */}
          <path 
            d="M 5 12 L 20 5 L 35 12 Z" 
            fill="#1C3E72"
          />
          
          {/* Windows 4x3 grid */}
          <rect x="8" y="15" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="15" y="15" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="22" y="15" width="4" height="4" rx="1" fill="#BBC0C6" />
          
          <rect x="8" y="22" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="15" y="22" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="22" y="22" width="4" height="4" rx="1" fill="#BBC0C6" />
          
          <rect x="8" y="29" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="15" y="29" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="22" y="29" width="4" height="4" rx="1" fill="#BBC0C6" />
          
          <rect x="8" y="36" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="15" y="36" width="4" height="4" rx="1" fill="#BBC0C6" />
          <rect x="22" y="36" width="4" height="4" rx="1" fill="#BBC0C6" />
        </svg>
        
        {/* Debris squares floating right */}
        <div className="absolute flex gap-2 ml-12 mt-2">
          <div className="w-3 h-3 bg-blue-900 rounded-sm opacity-90"></div>
          <div className="w-2.5 h-2.5 bg-blue-900 rounded-sm opacity-80"></div>
          <div className="w-2 h-2 bg-blue-900 rounded-sm opacity-70"></div>
          <div className="w-1.5 h-1.5 bg-blue-900 rounded-sm opacity-60"></div>
          <div className="w-1 h-1 bg-blue-900 rounded-sm opacity-50"></div>
        </div>
      </div>
      
      {/* White Text */}
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg leading-tight tracking-wide">RÜCKBAU</span>
        <span className="text-white font-bold text-sm leading-tight tracking-wide">PRO</span>
      </div>
    </div>
  );
}