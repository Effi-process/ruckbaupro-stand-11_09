'use client';

export default function WhiteTextLogoComponent({ 
  width = 140, 
  height = 56 
}: { 
  width?: number; 
  height?: number; 
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Building Icon - bleibt blau */}
      <div className="flex flex-col">
        <div className="w-8 h-10 bg-cerulean rounded-sm flex flex-wrap overflow-hidden">
          {/* Fenster-Pattern */}
          <div className="w-1/3 h-1/4 border-r border-b border-white/30"></div>
          <div className="w-1/3 h-1/4 border-r border-b border-white/30 bg-white/20"></div>
          <div className="w-1/3 h-1/4 border-b border-white/30"></div>
          <div className="w-1/3 h-1/4 border-r border-b border-white/30 bg-white/20"></div>
          <div className="w-1/3 h-1/4 border-r border-b border-white/30"></div>
          <div className="w-1/3 h-1/4 border-b border-white/30 bg-white/20"></div>
          <div className="w-1/3 h-1/4 border-r border-b border-white/30"></div>
          <div className="w-1/3 h-1/4 border-r border-b border-white/30 bg-white/20"></div>
          <div className="w-1/3 h-1/4 border-b border-white/30"></div>
          <div className="w-1/3 h-1/4 border-r bg-white/20"></div>
          <div className="w-1/3 h-1/4 border-r"></div>
          <div className="w-1/3 h-1/4 bg-white/20"></div>
        </div>
      </div>
      
      {/* Text - weiß */}
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg leading-tight">RÜCKBAU</span>
        <span className="text-white font-semibold text-sm">PRO</span>
      </div>
    </div>
  );
}