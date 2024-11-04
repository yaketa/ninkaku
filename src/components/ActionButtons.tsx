import React from 'react';

type ActionButtonsProps = {
  onJudge: () => void;
  onReset: () => void;
  isLocked: boolean;
  startDate: string;
  period: number;
  showRainbowEffect: boolean;
};

export default function ActionButtons({ 
  onJudge, 
  onReset, 
  isLocked, 
  startDate, 
  period,
  showRainbowEffect
}: ActionButtonsProps) {
  return (
    <>
      <style>
        {`
          @keyframes rainbow-flash {
            0%, 100% { background-color: #ff1493; }
            20% { background-color: #ff4500; }
            40% { background-color: #ffd700; }
            60% { background-color: #00ff00; }
            80% { background-color: #00bfff; }
          }
          
          .rainbow-flash {
            animation: rainbow-flash 2s linear infinite;
          }
        `}
      </style>
      <div className="flex flex-col gap-3 w-full max-w-[240px]">
        <button
          onClick={onJudge}
          disabled={isLocked || !startDate || period <= 0}
          className={`w-full px-6 py-3 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isLocked
              ? showRainbowEffect
                ? 'rainbow-flash text-white cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : !startDate || period <= 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-pink-400 text-white hover:bg-pink-500 focus:ring-pink-400'
          }`}
        >
          判定
        </button>
        <button
          onClick={onReset}
          className="w-full px-6 py-3 bg-rose-100 text-rose-700 font-medium rounded-lg hover:bg-rose-200 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
        >
          リセット
        </button>
      </div>
    </>
  );
}