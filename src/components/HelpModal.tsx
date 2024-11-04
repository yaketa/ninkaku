import React from 'react';
import { HelpCircle, X } from 'lucide-react';

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">使い方ガイド</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">基本的な使い方</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>前回の月経開始日を入力します。</li>
              <li>生理周期を入力します（初期値は平均の28日）。</li>
              <li>「判定」ボタンを押して結果を確認します。</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">判定結果の見方</h3>
            <div className="space-y-2 text-gray-700">
              <p>検査薬の判定部分に表示される線の本数で結果を判断します：</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>コントロール線（右）のみ → 陰性</li>
                <li>両方の線が表示 → 陽性</li>
                <li>両方の線（左が薄い） → 陽性（微弱）</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-amber-800 text-sm">
              ※このツールは参考情報を提供するもので、医療診断の代替にはなりません。
              妊娠の可能性がある場合は医療機関を受診し、専門家に相談してください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}