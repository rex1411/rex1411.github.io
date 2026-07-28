import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Pizza } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ onStateChange }: { onStateChange?: (isBirthday: boolean) => void }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (onStateChange) {
      onStateChange(isBirthday);
    }
  }, [isBirthday, onStateChange]);

  useEffect(() => {
    if (previewMode) {
      setIsBirthday(true);
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      let year = now.getFullYear();
      let birthday = new Date(year, 7, 24); // August 24th (Month is 0-indexed)

      // If today is the birthday (within the same calendar day)
      if (
        now.getDate() === 24 &&
        now.getMonth() === 7
      ) {
        setIsBirthday(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      setIsBirthday(false);

      // If the birthday has passed this year, look to next year
      if (now.getTime() > birthday.getTime() + 24 * 60 * 60 * 1000) {
        year++;
        birthday = new Date(year, 7, 24);
      }

      const difference = birthday.getTime() - now.getTime();

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [previewMode]);

  useEffect(() => {
    if (isBirthday) {
      const duration = 15 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#4ade80', '#ef4444', '#3b82f6', '#f97316', '#a855f7'] // TMNT colors
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ffffff', '#fdf4ff', '#86efac'] // Bindweed colors
          })
        );
      }, 250);
      
      return () => clearInterval(interval);
    }
  }, [isBirthday]);

  if (isBirthday) {
    return (
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-center p-8 bg-green-500/20 backdrop-blur-md rounded-3xl border-4 border-green-500 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-red-500 to-orange-500"></div>
          <h2 className="text-5xl md:text-7xl font-black text-green-900 mb-4 tracking-tight drop-shadow-md">
            COWABUNGA!
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Happy Birthday, Laura! 🍕🐢
          </h3>
        </motion.div>
        
        
      </div>
    );
  }

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center p-6 sm:p-10 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-green-200 shadow-xl relative">
      <div className="absolute -top-6 -right-6 text-green-600 bg-white p-3 rounded-full shadow-lg border-2 border-green-200 transform rotate-12">
        <Pizza size={32} />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-8 tracking-tight text-center">
        Time Until Laura's Birthday
      </h2>
      <div className="flex gap-3 sm:gap-6 w-full max-w-2xl justify-center">
        {timeBlocks.map((block, idx) => (
          <div key={block.label} className="flex flex-col items-center">
            <motion.div 
              key={block.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-green-100 border-2 border-green-300 w-16 h-20 sm:w-24 sm:h-28 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden"
            >
              <div className="absolute bottom-0 w-full h-1/2 bg-green-200/50"></div>
              <span className="text-3xl sm:text-5xl font-black text-green-800 z-10 font-mono">
                {block.value.toString().padStart(2, '0')}
              </span>
            </motion.div>
            <span className="mt-3 text-xs sm:text-sm font-bold text-green-700 uppercase tracking-widest">
              {block.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex gap-2 h-2 w-full max-w-xs rounded-full overflow-hidden mb-6">
        <div className="h-full flex-1 bg-blue-500"></div>
        <div className="h-full flex-1 bg-red-500"></div>
        <div className="h-full flex-1 bg-orange-500"></div>
        <div className="h-full flex-1 bg-purple-500"></div>
      </div>
    </div>
  );
}
