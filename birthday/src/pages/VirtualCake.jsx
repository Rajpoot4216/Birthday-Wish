import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function VirtualCake({ candlesBlown, handleBlowCandles, personalDetails, setCandlesBlown, setShowConfetti }) {
  return (
    <div className="bg-[#120a21]/90 backdrop-blur-xl rounded-3xl p-6 md:p-10 border border-rose-900/40 shadow-2xl text-center space-y-8 animate-fade-in">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">Dark Stage Magic</span>
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-100 to-amber-100 mt-1">
          Make Your Birthday Wish 🕯️
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          {candlesBlown 
            ? "Your wish has ascended into the starlit night! ✨" 
            : "Click the cake or button below to blow out the candles!"}
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center py-6">
        <div 
          onClick={handleBlowCandles} 
          className="cursor-pointer transition-transform duration-300 transform hover:scale-105 group relative flex flex-col items-center"
        >
          <div className="flex gap-5 mb-1 z-10">
            {[1, 2, 3].map((candle) => (
              <div key={candle} className="flex flex-col items-center">
                {!candlesBlown ? (
                  <div className="w-3.5 h-6 bg-gradient-to-t from-amber-500 via-amber-300 to-yellow-100 rounded-full animate-bounce shadow-[0_0_20px_#f59e0b]" />
                ) : (
                  <div className="text-xs text-slate-500 animate-pulse font-mono">💨</div>
                )}
                <div className="w-2 h-9 bg-gradient-to-b from-rose-300 to-purple-400 rounded-t shadow-sm" />
              </div>
            ))}
          </div>

          <div className="w-48 h-16 bg-gradient-to-r from-rose-900 via-pink-950 to-rose-900 rounded-t-3xl border-b-2 border-rose-500/40 flex items-center justify-center shadow-2xl relative overflow-hidden">
            <span className="text-xl">🌸</span>
          </div>

          <div className="w-68 h-24 bg-gradient-to-r from-purple-950 via-rose-950 to-purple-950 rounded-b-2xl shadow-2xl flex items-center justify-center relative overflow-hidden border-t border-rose-500/20">
            <div className="text-center z-10">
              <p className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-pink-200 text-lg tracking-widest">
                HAPPY BIRTHDAY
              </p>
              <p className="text-[11px] text-rose-300/80 font-mono">{personalDetails.herName}</p>
            </div>
          </div>

          <div className="w-76 h-3.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-full shadow-lg mt-1" />
        </div>

        <div className="mt-6">
          {!candlesBlown ? (
            <button
              onClick={handleBlowCandles}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-white text-xs font-semibold shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-105 transition-all"
            >
              💨 Blow Candles Out Now
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm font-serif text-amber-200 bg-rose-950/80 px-6 py-2 rounded-full border border-rose-800/60 shadow-md">
                "May all your wishes come true, My Leydim!"
              </p>
              <button
                onClick={() => { setCandlesBlown(false); setShowConfetti(false); }}
                className="text-xs text-rose-400 hover:underline flex items-center gap-1 mt-1"
              >
                <RotateCcw className="w-3 h-3" /> Relight Candles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}