'use client';

export default function LogoWhiteText({ 
  width = 180, 
  height = 72 
}: { 
  width?: number; 
  height?: number; 
}) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 1344 768" 
      xmlns="http://www.w3.org/2000/svg"
      className="block"
      style={{ background: 'transparent' }}
    >
      {/* Building - blue polygon */}
      <polygon
        points="127,128 275,73 424,128 424,616 127,616"
        fill="#1f4073"
      />
      
      {/* Windows - 3x5 white rectangles */}
      {/* Row 1 */}
      <rect x="168" y="173" width="57" height="46" fill="#ffffff" />
      <rect x="256" y="174" width="53" height="45" fill="#ffffff" />
      <rect x="341" y="173" width="56" height="46" fill="#ffffff" />
      
      {/* Row 2 */}
      <rect x="169" y="261" width="55" height="43" fill="#ffffff" />
      <rect x="255" y="261" width="55" height="43" fill="#ffffff" />
      <rect x="342" y="261" width="55" height="43" fill="#ffffff" />
      
      {/* Row 3 */}
      <rect x="170" y="350" width="54" height="39" fill="#ffffff" />
      <rect x="256" y="350" width="53" height="39" fill="#ffffff" />
      <rect x="341" y="348" width="56" height="41" fill="#ffffff" />
      
      {/* Row 4 */}
      <rect x="169" y="435" width="55" height="41" fill="#ffffff" />
      <rect x="255" y="435" width="55" height="42" fill="#ffffff" />
      <rect x="341" y="434" width="56" height="43" fill="#ffffff" />
      
      {/* Row 5 */}
      <rect x="168" y="520" width="57" height="45" fill="#ffffff" />
      <rect x="255" y="520" width="55" height="45" fill="#ffffff" />
      <rect x="341" y="520" width="57" height="46" fill="#ffffff" />
      
      {/* Debris squares - falling/decaying squares */}
      <rect x="452" y="145" width="36" height="41" fill="#1f4073" />
      <rect x="515" y="201" width="20" height="20" fill="#1f4073" />
      <rect x="461" y="270" width="48" height="44" fill="#1f4073" />
      <rect x="538" y="320" width="21" height="21" fill="#1f4073" />
      <rect x="490" y="393" width="38" height="33" fill="#1f4073" />
      <rect x="456" y="471" width="29" height="30" fill="#1f4073" />
      <rect x="453" y="469" width="35" height="40" fill="#1f4073" />
      <rect x="480" y="582" width="25" height="26" fill="#1f4073" />
      
      {/* White Text */}
      <text 
        x="706" 
        y="315" 
        fontFamily="Inter, sans-serif" 
        fontSize="160" 
        fontWeight="800" 
        fill="#ffffff"
        textAnchor="start"
      >
        RÜCKBAU
      </text>
      
      <text 
        x="853" 
        y="497" 
        fontFamily="Inter, sans-serif" 
        fontSize="160" 
        fontWeight="800" 
        fill="#ffffff"
        textAnchor="start"
      >
        PRO
      </text>
    </svg>
  );
}