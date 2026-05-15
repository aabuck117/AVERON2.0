import React from 'react';

export function AveronLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div 
        className="font-mono text-3xl sm:text-4xl font-bold tracking-[0.15em] flex items-end uppercase"
        style={{ transform: 'scaleX(1.15)', transformOrigin: 'left' }}
      >
        <span className="text-brand-white text-textured relative z-10 flex items-baseline leading-none">
          ΛVERON
        </span>
        <div className="w-[8px] h-[8px] bg-[#E5231B] ml-1 mb-[0.15em]"></div>
      </div>
    </div>
  );
}
