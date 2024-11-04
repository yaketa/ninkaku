import React from 'react';
import { Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pink-50/80 backdrop-blur-sm border-t border-pink-100 py-6 mt-12">
      <div className="max-w-[480px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h2 className="font-medium text-pink-900 mb-1">
              デジタルネクスト妊娠検査薬シミュレーター「ニンカク！」
            </h2>
            <p className="text-sm text-pink-700">
              © 2024 All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href="https://twitter.com/mizunou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/50 hover:bg-white text-pink-600 transition-colors text-sm"
            >
              <Twitter size={16} />
              <span>みずの(@mizunou)</span>
            </a>
          </div>

          <p className="text-xs text-pink-600/80 text-center max-w-sm">
            このアプリケーションは参考情報を提供するものであり、医療診断に代わるものではありません。
          </p>
        </div>
      </div>
    </footer>
  );
}