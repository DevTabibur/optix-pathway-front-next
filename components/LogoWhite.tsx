interface LogoWhiteProps {
  className?: string;
  width?: number;
  includeTagline?: boolean;
}

export function LogoWhite({ className = '', width = 200, includeTagline = false }: LogoWhiteProps) {
  const height = includeTagline ? width * 0.45 : width * 0.35;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={includeTagline ? "0 0 960 432" : "0 0 960 336"}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular Icon with Checkmark */}
      <g>
        {/* Outer circle */}
        <circle cx="84" cy="84" r="80" stroke="white" strokeWidth="8" fill="none" />
        
        {/* Inner circle (O shape) */}
        <path 
          d="M 120 84 A 36 36 0 1 1 120 84.1 Z M 156 84 A 72 72 0 1 0 12 84 A 72 72 0 1 0 156 84 Z" 
          fill="white" 
        />
        
        {/* Checkmark stroke */}
        <path 
          d="M 45 85 L 75 115 L 135 35" 
          stroke="white" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
      </g>

      {/* "Optix" Text */}
      <text
        x="180"
        y="140"
        fill="white"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="140"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        Optix
      </text>

      {/* "Pathway" Text */}
      <text
        x="570"
        y="140"
        fill="white"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="140"
        fontWeight="700"
        letterSpacing="-0.01em"
      >
        Pathway
      </text>

      {/* Tagline - Only if includeTagline is true */}
      {includeTagline && (
        <text
          x="120"
          y="220"
          fill="white"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontSize="52"
          fontWeight="400"
          letterSpacing="0.02em"
        >
          Knowledge. Integrity. Futures
        </text>
      )}
    </svg>
  );
}
