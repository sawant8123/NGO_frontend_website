import React from 'react';

export const Marquee = ({ children, className = "", pauseOnHover = false }) => {
  return (
    <div 
      className={`flex overflow-hidden ${className}`}
      onMouseEnter={pauseOnHover ? (e) => e.currentTarget.style.animationPlayState = 'paused' : undefined}
      onMouseLeave={pauseOnHover ? (e) => e.currentTarget.style.animationPlayState = 'running' : undefined}
    >
      <div className="flex animate-scroll">
        {children}
        {children}
      </div>
    </div>
  );
}; 