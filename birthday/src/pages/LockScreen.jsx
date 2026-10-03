import React from 'react';

export default function LockScreen({
  // showConfetti,
  floatingElements,
  dobInput,
  setDobInput,
  dobError,
  handleVerifyDob,
  showHint,
  setShowHint,
  personalDetails,
  timeLeft
}) {
  const isCountdownRunning = 
    timeLeft && (
      parseInt(timeLeft.days) > 0 ||
      parseInt(timeLeft.hours) > 0 ||
      parseInt(timeLeft.minutes) > 0 ||
      parseInt(timeLeft.seconds) > 0
    );

  return (
    <div className="min-h-screen bg-[#0a0812] text-rose-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/40 via-[#0d0b16] to-[#05040a]"/>
        {floatingElements.map((h) => (
          <div
            key={h.id}
            className="absolute text-rose-400/40 animate-pulse pointer-events-none"
            style={{
              left: `${h.left}%`,
              bottom: `-30px`,
              fontSize: `${h.size}px`,
              animation: `floatUpDark ${h.duration}s linear infinite`,
              animationDelay: `${h.delay}s`,
              textShadow: '0 0 12px rgba(244, 63, 94, 0.6)'
            }}
          >
            {h.type}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full bg-rose-950/20 backdrop-blur-md border border-rose-500/20 rounded-3xl p-8 shadow-2xl text-center">
        <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
          <span className="text-3xl">🔒</span>
        </div>

        <h1 className="text-2xl font-bold text-rose-100 mb-2">
          Special Birthday Surprise
        </h1>
        <p className="text-rose-300/80 text-sm mb-6">
          For {personalDetails.herName}
        </p>

        {/* ---------------- COUNTDOWN SECTION ON LOCK SCREEN ---------------- */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-rose-400/80 mb-3 font-semibold">
            Countdown To Celebration
          </p>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-rose-950/40 border border-rose-500/20 rounded-xl p-2.5">
              <span className="text-xl font-bold text-rose-200 block">{timeLeft?.days || '00'}</span>
              <span className="text-[10px] text-rose-400/70 uppercase">Days</span>
            </div>
            <div className="bg-rose-950/40 border border-rose-500/20 rounded-xl p-2.5">
              <span className="text-xl font-bold text-rose-200 block">{timeLeft?.hours || '00'}</span>
              <span className="text-[10px] text-rose-400/70 uppercase">Hours</span>
            </div>
            <div className="bg-rose-950/40 border border-rose-500/20 rounded-xl p-2.5">
              <span className="text-xl font-bold text-rose-200 block">{timeLeft?.minutes || '00'}</span>
              <span className="text-[10px] text-rose-400/70 uppercase">Mins</span>
            </div>
            <div className="bg-rose-950/40 border border-rose-500/20 rounded-xl p-2.5">
              <span className="text-xl font-bold text-rose-200 block">{timeLeft?.seconds || '00'}</span>
              <span className="text-[10px] text-rose-400/70 uppercase">Secs</span>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}

        
        {isCountdownRunning ? (
          <div className="p-4 bg-rose-900/30 border border-rose-500/30 rounded-2xl text-rose-200 text-sm">
            ⏳ Verification section will unlock once the countdown reaches zero!
          </div>
        ) : (
          <form onSubmit={handleVerifyDob} className="space-y-4">
            <label htmlFor="dob-picker" className="block text-sm text-rose-200/90 mb-2">
              Enter Date of Birth to Unlock
            </label>

            {/* Standard Calendar Date Picker Input */}
            <div className="flex justify-center">
              <input
                id="dob-picker"
                type="date"
                required
                value={dobInput}
                onChange={(e) => setDobInput(e.target.value)}
                className="w-full max-w-xs px-4 py-3 bg-rose-950/50 border border-rose-500/30 rounded-xl text-rose-100 font-semibold focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20 text-center [color-scheme:dark]"
              />
            </div>

            {dobError && (
              <p className="text-xs text-rose-400 bg-rose-950/60 py-2 px-3 rounded-lg border border-rose-500/30">
                {dobError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium rounded-xl transition duration-200 shadow-lg shadow-rose-600/30 active:scale-[0.98]"
            >
              Unlock Surprise ✨
            </button>

            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-xs text-rose-400/80 hover:text-rose-300 underline mt-2 block mx-auto transition"
            >
              {showHint ? "Hide Hint" : "Need a hint?"}
            </button>

            {showHint && (
              <p className="text-xs text-rose-300/80 italic bg-rose-950/30 p-3 rounded-xl border border-rose-500/10">
                {personalDetails.hintText}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}