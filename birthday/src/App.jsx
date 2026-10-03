import React, { useState, useEffect, useRef } from 'react';

// Audio Asset Import
import bgMusic from './assets/music.mp3';

// Components
import StarlitConfettiCanvas from './components/StarlitConfettiCanvas';
import Navbar from './components/Navbar';
import MobileTabBar from './components/MobileTabBar';
import NextPageButton from './components/NextPageButton'; // 👈 Added Import

// Pages
import LockScreen from './pages/LockScreen';
import Home from './pages/Home';
import MemoryTimeline from './pages/MemoryTimeline';
import VirtualCake from './pages/VirtualCake';
import Vows from './pages/Vows';
import LoveLetter from './pages/LoveLetter';

export default function App() {
  // Lock State
  const [isUnlocked, setIsUnlocked] = useState(false);
  // Default Empty String for HTML Date/Calendar Input
  const [dobInput, setDobInput] = useState('');
  const [dobError, setDobError] = useState('');
  const [showHint, setShowHint] = useState(false);

  // Navigation Page
  const [activePage, setActivePage] = useState('home');

  // Personal Info
  const [personalDetails, setPersonalDetails] = useState({
    herName: "Zainab Gull",
    yourName: "Rajpoot",
    secretDobDay: "05",
    secretDobMonth: "10",
    secretDobYear: "2006",
    hintText: "Select your Date of Birth from the calendar picker.",
    relationshipDate: "2026-10-05T00:00:00", // 5 October 2026
    letterText: `Happy Birthday to the woman who holds my heart in her hands.
   Happy Birthday to the one who makes my ordinary days feel a little more beautiful, every moment a little sweeter, and life so much more meaningful. 🥹❤️🌍

On your special day, I just want you to know how deeply you are loved, cherished, and appreciated. You are not just my incredible girlfriend; you are my best friend, my comfort, my safest place, and the person I can genuinely see my future with. 🫀🫂🌸

When I look at you, I don't just see the person I love today — I see the person I hope to grow with tomorrow. I see my future wife, my forever person, and the one I want beside me through every chapter of life. 🥹❤️💍🌍

You have this beautiful way of making my worst days feel lighter and my happiest moments even more special. Your presence brings a kind of peace into my life that I never knew I needed, and honestly, having uh by my side is one of the things I'm most grateful for. 🫀🌷✨

As you step into another year of your life, I want to promise uh something: I'll always try to be there for uh, support your dreams, make uh laugh when things get difficult, hold your hand through every journey, and love uh a little more with every passing day. 🥹🫂❤️

And today, one of my biggest prayers is for your future. May Allah Pak bless uh with good health, endless happiness, success in your education and every opportunity that helps uh become the person uh dream of becoming. 🤲🏻❤️🌸 May He make every difficult path easier for uh and put barakah in everything uh do. Ameen. 🥹🫀

And somewhere between all these prayers, there's one that my heart quietly holds for us — that Allah writes our names together, keeps our hearts close, and blesses us with a future where we don't have to imagine life without each other. 🤲🏻🥹❤️🌍

Because if there's one thing I'm certain about, it's that I don't just want to celebrate your birthdays with uh — I want to be there for every birthday that comes after this one. I want to see uh grow, achieve your dreams, smile through every new chapter, and hopefully, one day, look back at all of this together and realise how far we've come. 🥹🫀🫂💍🌷

So here's to your 20th — to new dreams, new memories, new beginnings and everything beautiful that's waiting for uh. 🎂🥳🌸❤️

HAPPY 20TH BIRTHDAY, MY LOVE!!! 🥹❤️🫀🌍🫂🎀✨

May this year be as beautiful as the person you're becoming, and may Allah always keep uh under His protection. 🤲🏻🌷❤️

This is very small effort to express my love for uh, but I hope it makes uh feel as special as uh truly are to me. 🥹🫂❤️🌸

I love uh, today, tomorrow, and in every future I can imagine. 🥹🫀🌍❤️`
  });

  // Controls State
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  // ---------------- AUDIO SETUP ----------------
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlayingMusic) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay issue or blocked:", err);
        setIsPlayingMusic(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);
  // LOGIC UPDATE: Calendar format (YYYY-MM-DD) input handle karne ke liye
  const handleVerifyDob = (e) => {
    e.preventDefault();

    const targetDate = new Date(personalDetails.relationshipDate);
    const now = new Date();

    // 1. Countdown check
    if (now < targetDate) {
      setDobError("Please wait until the countdown ends to unlock!");
      return;
    }

    // 2. Empty check
    if (!dobInput) {
      setDobError("Please select a valid date!");
      return;
    }

    // 3. Calendar Input Split (Format: YYYY-MM-DD)
    const [year, month, day] = dobInput.split('-');

    if (
      day === personalDetails.secretDobDay &&
      month === personalDetails.secretDobMonth &&
      year === personalDetails.secretDobYear
    ) {
      setIsUnlocked(true);
      setShowConfetti(true);
      setIsPlayingMusic(true);
      setDobError('');
    } else {
      setDobError("Incorrect date of birth. Try again or check the hint!");
    }
  };

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(personalDetails.relationshipDate);
      const now = new Date();
      let diff = targetDate.getTime() - now.getTime();

      if (isNaN(diff) || diff < 0) {
        diff = 0;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0')
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [personalDetails.relationshipDate]);

  // Floating background elements
  const [floatingElements, setFloatingElements] = useState([]);
  useEffect(() => {
    const elements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.4 + 0.2,
      type: Math.random() > 0.4 ? '❤️' : '✨'
    }));
    setFloatingElements(elements);
  }, []);

  const handleQuizSelect = (qId, optionIdx) => {
    setQuizAnswers({ ...quizAnswers, [qId]: optionIdx });
  };

  const handleQuizSubmit = () => {
    let score = 0;
    defaultQuizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    setShowConfetti(true);
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setShowConfetti(true);
  };

  const memories = [
    {
      id: 1,
      category: "Firsts",
      title: "The Moment Our Eyes Met",
      date: "During Punishment",
      description: "When you were standing in punishment and I looked at you, that was the exact moment my heart felt something special for you for the very first time.",
      tag: "Beginning of Us"
    },
    {
      id: 2,
      category: "Adventures",
      title: "The Day I Picked Up Phopho's Bracelet",
      date: "Endless Adventure",
      description: "When you stepped into the street and I took the bracelet from your hands, I lost myself gazing at your face. Though the world caught us and chaos followed, my heart stayed strong and took care of everything for us.",
      tag: "Hilarious But Playful"
    },
    {
      id: 3,
      category: "Tea Moments",
      title: "The Tea You Brewed For Me",
      date: "Forever Tea",
      description: "I had Umaima ask you to make tea for me, and after drinking that cup, I haven't had tea even once in a whole year. Even today, whenever I look back at that moment, I wonder when I'll be fortunate enough to taste tea made by your hands again.",
      tag: "Sweetest Gesture"
    },
    {
      id: 4,
      category: "Milestones",
      title: "Looking Toward Our Wedding Day",
      date: "Our Next Chapter",
      description: "I can't wait to see you in your bridal dress, take your hand, and promise you my entire life forever.",
      tag: "Marriage & Home" 
    }
  ];

  const reasonsToLove = [
    { title: "Your Beautiful Eyes 👀❤️", desc: "Your small eyes have a beauty I could get lost in forever. One look from uh, and somehow the whole world feels a little quieter. 🥹🫀" },
    { title: " Your Perfect Nose 🌸", desc: "I don't know how something so simple can be so beautiful. Your nose is honestly one of those things I could never stop admiring. 🥹❤️" },
    { title: "Your Soft Lips 💋", desc: "Your lips carry the sweetest smile I've ever seen. Somehow, even the smallest smile from uh can completely make my day. 🫀🌷" },
    { title: "Your Adorable Cheeks 🥹❤️", desc: "Your cheeks are honestly one of my favourite things about uh. I could spend forever biting and watching them light up whenever uh smile. 🌸🫂" },
    { title: "Your Beautiful Smile ✨", desc: "Your smile is my favourite sight in the whole world. I swear, seeing uh smile can turn even my worst day into a good one. 🥹❤️🌍" },
    { title: "Your Gorgeous Hair 🌷", desc: "I could stare at your hair for hours and still not get enough. There is just something so effortlessly beautiful about uh. 🫀🌸" }
  ];
  if (!isUnlocked) {
    return (
      <LockScreen
        showConfetti={showConfetti}
        floatingElements={floatingElements}
        dobInput={dobInput}
        setDobInput={setDobInput}
        dobError={dobError}
        handleVerifyDob={handleVerifyDob}
        showHint={showHint}
        setShowHint={setShowHint}
        personalDetails={personalDetails}
        timeLeft={timeLeft}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0812] text-rose-100 font-sans relative overflow-x-hidden selection:bg-rose-500 selection:text-white pb-24 md:pb-12">
      <StarlitConfettiCanvas active={true} />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/30 via-[#0d0b16] to-[#05040a]" />
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

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        personalDetails={personalDetails}
        isPlayingMusic={isPlayingMusic}
        setIsPlayingMusic={setIsPlayingMusic}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-4 py-6 md:py-10">
        {activePage === 'home' && (
          <Home
            personalDetails={personalDetails}
            timeLeft={timeLeft}
            setActivePage={setActivePage}
          />
        )}
        {activePage === 'timeline' && (
          <MemoryTimeline memories={memories} />
        )}

        {activePage === 'cake' && (
          <VirtualCake
            candlesBlown={candlesBlown}
            handleBlowCandles={handleBlowCandles}
            personalDetails={personalDetails}
            setCandlesBlown={setCandlesBlown}
            setShowConfetti={setShowConfetti}
          />
        )}

        {activePage === 'vows' && (
          <Vows reasonsToLove={reasonsToLove}/>
        )}

        {activePage === 'letter' && (
          <LoveLetter
            giftOpened={giftOpened}
            setGiftOpened={setGiftOpened}
            setShowConfetti={setShowConfetti}
            personalDetails={personalDetails}
          />
        )}

        {/* 🔻 NEXT PAGE BUTTON FOR ALL PAGES 🔻 */}
        <NextPageButton activePage={activePage} setActivePage={setActivePage} />
      </main>

      <MobileTabBar
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}