const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background - adapts to theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-[#0a1628] dark:via-[#0d1b2e] dark:to-[#0a1628]" />
      
      {/* Hexagonal pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
            <polygon 
              points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" 
              fill="none" 
              stroke="url(#hexGradient)" 
              strokeWidth="1"
            />
          </pattern>
          
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
      
      {/* Animated flowing waves */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        {/* Cyan wave */}
        <path 
          d="M0,300 Q250,200 500,250 T1000,300 L1000,400 L0,400 Z" 
          fill="url(#waveGradient1)"
          className="animate-wave-slow"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,300 Q250,200 500,250 T1000,300 L1000,400 L0,400 Z;
              M0,250 Q250,300 500,200 T1000,250 L1000,400 L0,400 Z;
              M0,300 Q250,200 500,250 T1000,300 L1000,400 L0,400 Z
            "
          />
        </path>
        
        {/* Purple wave */}
        <path 
          d="M1920,200 Q1670,300 1420,250 T920,200 L920,0 L1920,0 Z" 
          fill="url(#waveGradient2)"
          className="animate-wave-slower"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M1920,200 Q1670,300 1420,250 T920,200 L920,0 L1920,0 Z;
              M1920,250 Q1670,200 1420,300 T920,250 L920,0 L1920,0 Z;
              M1920,200 Q1670,300 1420,250 T920,200 L920,0 L1920,0 Z
            "
          />
        </path>
      </svg>
      
      {/* Glowing dots on hexagon vertices */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 dark:bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:to-[#0a1628]/80" />
    </div>
  );
};

export default HeroBackground;

