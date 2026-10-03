import React from 'react';
import { Edit3, X } from 'lucide-react';

export default function SettingsDrawer({ isSettingsOpen, setIsSettingsOpen, personalDetails, setPersonalDetails }) {
  if (!isSettingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#120a21] border-l border-rose-900/50 p-6 space-y-6 h-full overflow-y-auto">
        <div className="flex justify-between items-center border-b border-rose-900/50 pb-4">
          <h3 className="text-lg font-serif font-bold text-rose-200 flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-rose-400" /> Customize Web Page
          </h3>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs md:text-sm">
          <div>
            <label className="block text-rose-300 mb-1 font-semibold">Her Name</label>
            <input
              type="text"
              value={personalDetails.herName}
              onChange={(e) => setPersonalDetails({ ...personalDetails, herName: e.target.value })}
              className="w-full bg-[#1c0f33] border border-rose-800/50 rounded-xl p-3 text-rose-100 focus:outline-none focus:border-rose-400"
            />
          </div>

          <div>
            <label className="block text-rose-300 mb-1 font-semibold">Your Name / Signature</label>
            <input
              type="text"
              value={personalDetails.yourName}
              onChange={(e) => setPersonalDetails({ ...personalDetails, yourName: e.target.value })}
              className="w-full bg-[#1c0f33] border border-rose-800/50 rounded-xl p-3 text-rose-100 focus:outline-none focus:border-rose-400"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-rose-300 mb-1 font-semibold">Secret Day</label>
              <input
                type="text"
                value={personalDetails.secretDobDay}
                onChange={(e) => setPersonalDetails({ ...personalDetails, secretDobDay: e.target.value })}
                className="w-full bg-[#1c0f33] border border-rose-800/50 rounded-xl p-2.5 text-center text-rose-100 focus:outline-none focus:border-rose-400"
              />
            </div>
            <div>
              <label className="block text-rose-300 mb-1 font-semibold">Month</label>
              <input
                type="text"
                value={personalDetails.secretDobMonth}
                onChange={(e) => setPersonalDetails({ ...personalDetails, secretDobMonth: e.target.value })}
                className="w-full bg-[#1c0f33] border border-rose-800/50 rounded-xl p-2.5 text-center text-rose-100 focus:outline-none focus:border-rose-400"
              />
            </div>
            <div>
              <label className="block text-rose-300 mb-1 font-semibold">Year</label>
              <input
                type="text"
                value={personalDetails.secretDobYear}
                onChange={(e) => setPersonalDetails({ ...personalDetails, secretDobYear: e.target.value })}
                className="w-full bg-[#1c0f33] border border-rose-800/50 rounded-xl p-2.5 text-center text-rose-100 focus:outline-none focus:border-rose-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-rose-300 mb-1 font-semibold">Personal Love Letter</label>
            <textarea
              rows="6"
              value={personalDetails.letterText}
              onChange={(e) => setPersonalDetails({ ...personalDetails, letterText: e.target.value })}
              className="w-full bg-[#1c0f33] border border-rose-800/50 rounded-xl p-3 text-rose-100 focus:outline-none focus:border-rose-400 leading-relaxed"
            />
          </div>

          <button
            onClick={() => setIsSettingsOpen(false)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
          >
            Save Changes ✨
          </button>
        </div>
      </div>
    </div>
  );
}