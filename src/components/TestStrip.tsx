import React from 'react';

type MarkerState = 'none' | 'right' | 'both' | 'weak';

type TestStripProps = {
  markerState: MarkerState;
};

export default function TestStrip({ markerState }: TestStripProps) {
  return (
    <div className="w-[240px] h-[80px] bg-white rounded-lg border-2 border-gray-300 relative shadow-inner mx-auto">
      {/* Control Marker (Right) */}
      {(markerState === 'right' || markerState === 'both' || markerState === 'weak') && (
        <div 
          className="absolute w-[8px] bg-red-400 opacity-70 h-full"
          style={{ left: '66.66%', transform: 'translateX(-50%)' }}
        />
      )}
      {/* Result Marker (Left) */}
      {(markerState === 'both' || markerState === 'weak') && (
        <div 
          className={`absolute w-[8px] h-full ${
            markerState === 'weak' ? 'bg-red-300 opacity-40' : 'bg-red-400 opacity-70'
          }`}
          style={{ left: '33.33%', transform: 'translateX(-50%)' }}
        />
      )}
    </div>
  );
}