import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

type ConsentModalProps = {
  isOpen: boolean;
  onAccept: () => void;
};

export default function ConsentModal({ isOpen, onAccept }: ConsentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full shadow-xl">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-center gap-2 text-amber-600 mb-4">
            <AlertTriangle size={24} />
            <h2 className="text-xl font-bold">ご利用にあたって</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-sm">
              このアプリケーションは、妊娠検査薬の判定を再現したツールです。
              以下の注意事項をご確認ください：
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>
                このツールは参考情報を提供するものであり、医療診断に代わるものではありません。
              </li>
              <li>
                正確な判定のために、市販の検査薬を正しく使用してください。
              </li>
              <li>
                妊娠の可能性がある場合は、必ず医療機関を受診してください。
              </li>
              <li>
                体調の変化や不安がある場合は、速やかに医療専門家に相談してください。
              </li>
            </ul>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-b-xl">
          <button
            onClick={onAccept}
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            上記を理解し、同意します
          </button>
          <p className="text-xs text-gray-500 text-center mt-4">
            同意せずにアプリを使用することはできません
          </p>
        </div>
      </div>
    </div>
  );
}
