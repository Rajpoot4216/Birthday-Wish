import React from 'react';
import { Heart, Calendar, Cake, Layers, Gift, HelpCircle as QuizIcon } from 'lucide-react';

export default function MobileTabBar({ activePage, setActivePage }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'timeline', label: 'Story', icon: Calendar },
    { id: 'cake', label: 'Cake', icon: Cake },
    { id: 'vows', label: 'Dreams', icon: Layers },
    { id: 'letter', label: 'Letter', icon: Gift }
  ];

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0a0812]/95 backdrop-blur-xl border-t border-rose-900/40 px-3 py-2 flex justify-around">
      {tabs.map((item) => {
        const Icon = item.icon;
        const isActive = activePage === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`flex flex-col items-center gap-1 p-1 text-[10px] transition-all ${
              isActive ? 'text-rose-400 font-bold scale-105' : 'text-slate-400'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-rose-400' : 'text-slate-400'}`} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}