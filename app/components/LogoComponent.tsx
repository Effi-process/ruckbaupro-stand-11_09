'use client';

interface LogoComponentProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function LogoComponent({ className = '', width = 200, height = 60 }: LogoComponentProps) {
  return (
    <svg 
      viewBox="0 0 800 300" 
      width={width} 
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Building with falling pixels */}
      <g id="building">
        {/* Main building structure */}
        <path d="M 80 250 L 80 50 L 140 30 L 200 50 L 200 250 Z" fill="#0a4078" />
        
        {/* Windows */}
        <rect x="95" y="70" width="25" height="20" fill="#fefcfb" />
        <rect x="130" y="70" width="25" height="20" fill="#fefcfb" />
        <rect x="165" y="70" width="25" height="20" fill="#fefcfb" />
        
        <rect x="95" y="105" width="25" height="20" fill="#fefcfb" />
        <rect x="130" y="105" width="25" height="20" fill="#fefcfb" />
        <rect x="165" y="105" width="25" height="20" fill="#fefcfb" />
        
        <rect x="95" y="140" width="25" height="20" fill="#fefcfb" />
        <rect x="130" y="140" width="25" height="20" fill="#fefcfb" />
        <rect x="165" y="140" width="25" height="20" fill="#fefcfb" />
        
        <rect x="95" y="175" width="25" height="20" fill="#fefcfb" />
        <rect x="130" y="175" width="25" height="20" fill="#fefcfb" />
        <rect x="165" y="175" width="25" height="20" fill="#fefcfb" />
        
        <rect x="95" y="210" width="25" height="20" fill="#fefcfb" />
        <rect x="130" y="210" width="25" height="20" fill="#fefcfb" />
        <rect x="165" y="210" width="25" height="20" fill="#fefcfb" />
        
        {/* Falling pixels/debris */}
        <rect x="210" y="60" width="15" height="15" fill="#0a4078" opacity="0.9" />
        <rect x="235" y="80" width="12" height="12" fill="#0a4078" opacity="0.8" />
        <rect x="215" y="110" width="18" height="18" fill="#0a4078" opacity="0.7" />
        <rect x="245" y="130" width="10" height="10" fill="#0a4078" opacity="0.6" />
        <rect x="225" y="160" width="14" height="14" fill="#0a4078" opacity="0.5" />
        <rect x="210" y="190" width="16" height="16" fill="#0a4078" opacity="0.4" />
        <rect x="240" y="210" width="11" height="11" fill="#0a4078" opacity="0.3" />
        <rect x="220" y="235" width="13" height="13" fill="#0a4078" opacity="0.2" />
      </g>
      
      {/* Text: Rückbau */}
      <text 
        x="280" 
        y="140" 
        fontFamily="Arial, sans-serif" 
        fontSize="72" 
        fontWeight="bold" 
        fill="#0a4078"
      >
        Rückbau
      </text>
      
      {/* Text: PRO */}
      <text 
        x="280" 
        y="210" 
        fontFamily="Arial, sans-serif" 
        fontSize="72" 
        fontWeight="bold" 
        fill="#0a4078"
      >
        PRO
      </text>
    </svg>
  );
}