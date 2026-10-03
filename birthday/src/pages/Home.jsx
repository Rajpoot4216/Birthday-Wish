import React from 'react';
import birthdayImg1 from '../assets/pic1.jpg';
import birthdayImg2 from '../assets/pic2.jpg';
import birthdayImg3 from '../assets/pic3.jpg';
import { Sparkles, } from 'lucide-react';

export default function Home({ personalDetails, timeLeft, setActivePage }) {
  return (
    <div className="space-y-12 text-center py-6">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-medium shadow-[0_0_15px_rgba(244,63,94,0.2)]">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Dedicated to My Leydim</span>
        <Sparkles className="w-4 h-4 text-amber-400" />
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-200 leading-tight drop-shadow-[0_0_35px_rgba(244,63,94,0.4)]">
        Happy Birthday, <br />
        {personalDetails.herName}! ❤
      </h1>

      <p className="max-w-2xl mx-auto text-sm md:text-lg text-slate-300/90 leading-relaxed font-light">
        To the queen of my heart —may your special day be as enchanting, bright, and unforgettable as you are to me.
      </p> 
      {/* 3 Birthday Pictures Frame */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 max-w-5xl mx-auto px-4">
        {/* Picture 1 */}
        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-rose-500/30 shadow-xl shadow-rose-950/40 hover:border-rose-400 hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1">
          <img
            src={birthdayImg1}
            alt="Birthday Girl 1"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Picture 2 */}
        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-rose-500/30 shadow-xl shadow-rose-950/40 hover:border-rose-400 hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1">
          <img
            src={birthdayImg2}
            alt="Birthday Girl 2"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Picture 3 */}
        <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-rose-500/30 shadow-xl shadow-rose-950/40 hover:border-rose-400 hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-1">
          <img
            src={birthdayImg3}
            alt="Birthday Girl 3"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812]/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}