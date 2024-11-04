import React from 'react';
import { Calendar, Clock } from 'lucide-react';

type DateInputsProps = {
  startDate: string;
  period: number;
  onStartDateChange: (date: string) => void;
  onPeriodChange: (days: number) => void;
  isLocked: boolean;
};

export default function DateInputs({ 
  startDate, 
  period, 
  onStartDateChange, 
  onPeriodChange,
  isLocked
}: DateInputsProps) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <label htmlFor="startDate" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <Calendar size={16} />
          <span>最終月経開始日</span>
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          disabled={isLocked}
          className={`w-full px-4 py-3 rounded-lg border appearance-none ${
            isLocked 
              ? 'bg-gray-50 border-gray-200 text-gray-500' 
              : 'bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
          } transition-all outline-none [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:text-gray-600 [&::-webkit-calendar-picker-indicator]:h-5 [&::-webkit-calendar-picker-indicator]:w-5`}
        />
      </div>

      <div className="relative">
        <label htmlFor="period" className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <Clock size={16} />
          <span>月経周期</span>
        </label>
        <div className="relative">
          <input
            type="number"
            id="period"
            min="1"
            max="365"
            value={period || ''}
            onChange={(e) => onPeriodChange(parseInt(e.target.value) || 0)}
            disabled={isLocked}
            className={`w-full px-4 py-3 pr-12 rounded-lg border ${
              isLocked 
                ? 'bg-gray-50 border-gray-200 text-gray-500' 
                : 'bg-white border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
            } transition-all outline-none [&::-webkit-inner-spin-button]:h-[calc(100%-16px)] [&::-webkit-inner-spin-button]:opacity-100 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:mr-8`}
            placeholder="28"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            日
          </span>
        </div>
      </div>
    </div>
  );
}