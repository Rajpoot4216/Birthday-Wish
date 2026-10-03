import React from 'react';

// Sequence of pages
const PAGE_ORDER = [
   { id: 'home', label: 'See Memory Timeline', icon: '📸', next: 'timeline' },
  { id: 'timeline', label: 'Blow Birthday Candles', icon: '🎂', next: 'cake' },
  { id: 'cake', label: 'Read My Dreams', icon: '📜', next: 'vows' },
  { id: 'vows', label: 'Read Secret Letter', icon: '💌', next: 'letter' },
  { id: 'letter', label: 'Back to Home', icon: '🏠', next: 'home' },
];

export default function NextPageButton({ activePage, setActivePage }) {
  const current = PAGE_ORDER.find((p) => p.id === activePage);

  if (!current) return null;

  return (
    <div className="mt-12 text-center">
      <button
        onClick={() => {
          setActivePage(current.next);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 hover:from-rose-500 hover:to-pink-500 text-white font-semibold rounded-2xl shadow-xl shadow-rose-600/20 hover:shadow-rose-600/40 transition duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer border border-rose-400/30 group"
      >
        <span>Next: {current.label}</span>
        <span className="text-xl group-hover:translate-x-1 transition-transform">
          {current.icon} →
        </span>
      </button>
    </div>
  );
}