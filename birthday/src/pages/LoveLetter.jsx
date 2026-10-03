import React from 'react';
import { Feather, Heart } from 'lucide-react';

export default function LoveLetter({ giftOpened, setGiftOpened, setShowConfetti, personalDetails }) {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">Unwrap My Heart</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-100">
          A Personal Letter For You <span className="text-rose-400"> 💌</span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        {!giftOpened ? (
          <div 
            onClick={() => {
              setGiftOpened(true);
              setShowConfetti(true);
            }}
            className="group cursor-pointer flex flex-col items-center py-8 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-16 h-8 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-t-full mx-auto shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
              <div className="w-44 h-10 bg-gradient-to-r from-rose-900 via-pink-800 to-rose-900 rounded-lg shadow-xl relative flex items-center justify-center border border-rose-500/30">
                <div className="w-6 h-full bg-gradient-to-b from-amber-400 to-yellow-500 shadow-sm" />
              </div>
              <div className="w-40 h-32 bg-gradient-to-r from-rose-950 via-purple-950 to-rose-950 mx-auto rounded-b-xl shadow-2xl relative flex items-center justify-center border-x border-b border-rose-500/30">
                <div className="w-6 h-full bg-gradient-to-b from-amber-400 to-yellow-500 shadow-sm" />
              </div>
            </div>
            <span className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium text-xs shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all">
              Tap to Unwrap Letter ✨
            </span>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-[#140b24] border-2 border-rose-800/60 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(244,63,94,0.2)] relative text-left space-y-6 animate-fade-in">
            <div className="flex justify-between items-center border-b border-rose-900/60 pb-4">
              <div className="flex items-center gap-2">
                <Feather className="w-5 h-5 text-rose-400" />
              <span className="font-serif font-bold text-rose-200 text-lg">My Cherished One</span>
              </div>
              <button
                onClick={() => setGiftOpened(false)}
                className="text-xs text-rose-400 hover:underline"
              >
                Close Letter
              </button>
            </div>

            <div className="space-y-4 font-serif text-slate-200 leading-relaxed text-sm md:text-base whitespace-pre-line">
              {personalDetails.letterText}
            </div>

            <div className="pt-4 border-t border-rose-900/60 flex justify-between items-center">
              <span className="text-xs font-mono text-rose-400/80">Forever Yours ,{personalDetails.yourName}</span>
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}