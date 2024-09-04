// components/Marquee.js
import React from 'react';

const Marquee = ({ children, speed }: Readonly<{
    children: React.ReactNode;
    speed:Number;
  }>) => {
  return (
    <div className="marquee-container">
      <div className="marquee" style={{ animationDuration: `${speed}s` }}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;