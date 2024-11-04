import React, { useState, useEffect } from 'react';
import DateInputs from './DateInputs';
import TestStrip from './TestStrip';
import ResultDisplay from './ResultDisplay';
import ActionButtons from './ActionButtons';
import Background from './Background';
import { calculateDelayDays, getDelayMessage } from '../utils/pregnancyTest';
import titleImage from '../assets/images/title.png';


export default function TestWindow() {
  const [markerState, setMarkerState] = useState('none');
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    const defaultStartDate = new Date(today);
    defaultStartDate.setDate(today.getDate() - 28);
    return defaultStartDate.toISOString().split('T')[0];
  });
  const [period, setPeriod] = useState(28);
  const [isLocked, setIsLocked] = useState(false);
  const [delayMessage, setDelayMessage] = useState('');
  const [delayDays, setDelayDays] = useState(0);
  const [showRainbowEffect, setShowRainbowEffect] = useState(false);

  const handleJudge = () => {
    const days = calculateDelayDays(startDate, period);
    setDelayDays(days);
    setDelayMessage(getDelayMessage(days));
    setIsLocked(true);
    setShowRainbowEffect(days > 14);
    
    if (days < 0) {
      setMarkerState('right');
    } else if (days <= 3) {
      setMarkerState('weak');
    } else {
      setMarkerState('both');
    }
  };

  useEffect(() => {
    if (delayDays > 14) {
      setShowRainbowEffect(true);
    }
  }, [delayDays]);

  const handleReset = () => {
    setMarkerState('none');
    setDelayMessage('');
    setDelayDays(0);
    setIsLocked(false);
    setShowRainbowEffect(false);
    
    const today = new Date();
    const defaultStartDate = new Date(today);
    defaultStartDate.setDate(today.getDate() - 28);
    setStartDate(defaultStartDate.toISOString().split('T')[0]);
    setPeriod(28);
  };

  return (
    <Background>
      <div className="relative max-w-[480px] mx-auto p-4 sm:p-8">
      <header className="text-center mb-4">
          <img 
            src={titleImage} 
            alt="妊娠検査薬シミュレーター" 
            className="h-12 mx-auto"  // 必要に応じてサイズ調整してください
          />
          <p className="text-sm text-gray-600 mt-1">正確な判定のためのガイドをご提供します</p>
        </header>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <TestStrip markerState={markerState} />
            <p className="text-xs text-gray-500 text-center mt-2">
              ※ 判定結果はイメージです。
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">判定の見方</h3>
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-[60px] h-[24px] bg-white rounded border border-gray-300 relative">
                    <div className="absolute w-[2px] bg-red-400 opacity-70 h-full"
                         style={{ left: '66.66%', transform: 'translateX(-50%)' }} />
                  </div>
                  <span className="text-xs text-gray-600">陰性</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[60px] h-[24px] bg-white rounded border border-gray-300 relative">
                    <div className="absolute w-[2px] bg-red-400 opacity-70 h-full"
                         style={{ left: '33.33%', transform: 'translateX(-50%)' }} />
                    <div className="absolute w-[2px] bg-red-400 opacity-70 h-full"
                         style={{ left: '66.66%', transform: 'translateX(-50%)' }} />
                  </div>
                  <span className="text-xs text-gray-600">陽性</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="min-h-[280px]">
              {!isLocked ? (
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-6">基本情報の入力</h2>
                  <DateInputs
                    startDate={startDate}
                    period={period}
                    onStartDateChange={setStartDate}
                    onPeriodChange={setPeriod}
                    isLocked={isLocked}
                  />
                </div>
              ) : (
                <ResultDisplay
                  markerState={markerState}
                  delayMessage={delayMessage}
                />
              )}
            </div>

            <div className="flex justify-center mt-6">
              <ActionButtons
                onJudge={handleJudge}
                onReset={handleReset}
                isLocked={isLocked}
                startDate={startDate}
                period={period}
                showRainbowEffect={showRainbowEffect}
              />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}