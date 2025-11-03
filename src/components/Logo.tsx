interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "w-8 h-8" }: LogoProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Neural network inspired logo with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle cx="20" cy="20" r="18" stroke="url(#logoGradient)" strokeWidth="2" fill="none" />
      
      {/* Neural network nodes */}
      <circle cx="12" cy="20" r="2.5" fill="url(#logoGradient)" />
      <circle cx="28" cy="20" r="2.5" fill="url(#logoGradient)" />
      <circle cx="20" cy="12" r="2.5" fill="url(#logoGradient)" />
      <circle cx="20" cy="28" r="2.5" fill="url(#logoGradient)" />
      <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
      
      {/* Connecting lines */}
      <line x1="12" y1="20" x2="20" y2="20" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="20" x2="28" y2="20" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="12" x2="20" y2="20" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="20" x2="20" y2="28" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
      
      {/* Diagonal connections for network effect */}
      <line x1="12" y1="20" x2="20" y2="12" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="20" x2="20" y2="28" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.4" />
      <line x1="28" y1="20" x2="20" y2="12" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.4" />
      <line x1="28" y1="20" x2="20" y2="28" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.4" />
    </svg>
  );
};

