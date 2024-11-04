import React from 'react';

type MarkerState = 'none' | 'right' | 'both' | 'weak';

type ResultDisplayProps = {
  markerState: MarkerState;
  delayMessage: string;
};

export default function ResultDisplay({ markerState, delayMessage }: ResultDisplayProps) {
  const getResultText = () => {
    switch (markerState) {
      case 'both':
        return '陽性';
      case 'weak':
        return '陽性（微弱）';
      case 'right':
        return '陰性';
      default:
        return '-';
    }
  };

  return (
    <div className="h-[280px] flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">判定結果</h2>
        <p className={`text-xl font-semibold ${
          markerState === 'both' || markerState === 'weak' ? 'text-red-600' : 
          markerState === 'right' ? 'text-green-600' : 
          'text-gray-500'
        }`}>
          {getResultText()}
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          {delayMessage}
        </p>
      </div>
    </div>
  );
}