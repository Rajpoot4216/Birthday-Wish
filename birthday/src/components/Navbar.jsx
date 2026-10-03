

import React from 'react';
import { Heart, Volume2, VolumeX, Calendar, Cake, Layers, Gift } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, personalDetails, isPlayingMusic, setIsPlayingMusic }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'timeline', label: 'Our Story', icon: Calendar },
    { id: 'cake', label: 'Birthday Cake', icon: Cake },
    { id: 'vows', label: 'My Dreams', icon: Layers },
    { id: 'letter', label: 'Love Letter', icon: Gift }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0812]/80 border-b border-rose-900/30 px-4 md:px-8 py-3.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActivePage('home')}>
          <div className="p-2 rounded-full bg-rose-950/60 border border-rose-800/50 shadow-[0_0_15px_rgba(244,63,94,0.4)]">
            <Heart className="w-5 h-5 text-rose-400 fill-rose-500 animate-pulse" />
          </div>
          <span className="font-serif font-bold text-base md:text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200">
            For {personalDetails.herName}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-[#130a21]/80 p-1.5 rounded-full border border-rose-900/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activePage === item.id
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                    : 'text-slate-400 hover:text-rose-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-rose-900/80 to-purple-900/80 border border-rose-700/50 hover:border-rose-400 text-rose-200 text-xs font-medium shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all"
          >
            {isPlayingMusic ? (
              <Volume2 className="w-4 h-4 text-rose-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
            <span className="hidden sm:inline">{isPlayingMusic ? 'Music Playing' : 'Music Off'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}