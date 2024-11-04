import React from 'react';

type BackgroundProps = {
  children: React.ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen">
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-pink-50 via-white to-blue-50 opacity-70" />

      {/* Optional: Soft pattern overlay 
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg ... %3E")`,
          backgroundSize: '20px 20px'
        }}
      /> */}

      {/* Optional: Radial gradient for spotlight effect 
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-pink-50/30" /> */}

      {/* Optional: Top decoration for title image
      <div className="absolute top-0 left-0 right-0 h-[200px]">
        <img
          src="/path-to-your-title-image.png"
          alt="Pregnancy Test Assistant"
          className="w-full h-full object-cover object-top"
        />
        
        Alternative: SVG decoration
        <svg className="w-full h-full" ...></svg>
      </div> */}

      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}