import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export default function Vows({ reasonsToLove, futurePromises }) {
  const [activeVowTab, setActiveVowTab] = useState('reasons');

  return (
    <div className="bg-gradient-to-b from-[#130b24] to-[#0d0718] backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-rose-900/40 shadow-2xl space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-rose-900/40 pb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-rose-100">
            My Dreams & Devotion
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Explore reasons why I love you and my promises for our lifetime.
          </p>
        </div>

        <div className="flex bg-[#0a0512] p-1.5 rounded-full border border-rose-900/60">
          <button
            onClick={() => setActiveVowTab('reasons')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeVowTab === 'reasons'
                ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                : 'text-slate-400 hover:text-rose-200'
              }`}
          >
            💖 Why I Love You
          </button>

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {(activeVowTab === 'reasons' ? reasonsToLove : []).map((item, idx) => (
          <div
            key={idx}
            className="bg-[#180d2d]/80 rounded-2xl p-5 border border-rose-900/30 hover:border-rose-500/50 shadow-md hover:shadow-rose-950/50 transition-all flex flex-col justify-between hover:scale-[1.02]"
          >
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-full bg-rose-950 text-rose-300 border border-rose-800/50 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="font-serif font-bold text-rose-100 text-base">{item.title}</h4>
              <p className="text-slate-300/80 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-950 flex justify-end">
              <Heart className="w-4 h-4 text-rose-500/70" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}