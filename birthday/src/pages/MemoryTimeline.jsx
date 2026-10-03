import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function MemoryTimeline({ memories }) {
  const [memoryFilter, setMemoryFilter] = useState('All');

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-rose-400">Our Sacred Story</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-100">
          Memory Lane & Milestones ✨
        </h2>
      </div>

      <div className="flex justify-center gap-2 flex-wrap">
        {['Firsts', 'Adventures', 'Tea Moments', 'Milestones'].map((cat) => (
          <button
            key={cat}
            onClick={() => setMemoryFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
              memoryFilter === cat
                ? 'bg-rose-900 border-rose-500 text-rose-100'
                : 'bg-[#120a21]/60 border-rose-900/40 text-slate-400 hover:text-rose-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memories
          .filter(m => memoryFilter === 'All' || m.category === memoryFilter)
          .map((m) => (
            <div
              key={m.id}
              className="bg-[#120a21]/80 backdrop-blur-md rounded-2xl p-6 border border-rose-900/40 hover:border-rose-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-rose-950/80 text-rose-300 border border-rose-800/40">
                  {m.tag}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3 text-rose-400" /> {m.date}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-rose-100">{m.title}</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}