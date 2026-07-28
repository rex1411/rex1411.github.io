import { Countdown } from './components/Countdown';
import { Gallery } from './components/Gallery';
import { BindweedVines, FloatingMasks } from './components/Decorations';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isBirthday, setIsBirthday] = useState(false);

  return (
    <div className="min-h-screen bg-green-50 font-sans relative pb-20 selection:bg-green-200 flex flex-col">
      <BindweedVines />
      {isBirthday && <FloatingMasks />}
      
      {isBirthday && (
        <header className="relative z-10 pt-16 pb-12 px-4 flex flex-col items-center justify-center text-center">
          
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-green-900 tracking-tight drop-shadow-sm mb-4"
          >
            Happy Birthday, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">Laura!</span>
          </motion.h1>
        </header>
      )}

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl space-y-16 sm:space-y-24 flex-grow flex flex-col justify-center">
        
        {isBirthday && (
          <section className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-3xl border-2 border-green-200 shadow-xl text-center relative overflow-hidden mt-16">
            <div className="absolute -top-4 -left-4 text-6xl opacity-20 transform -rotate-12">🐢</div>
            <div className="absolute -bottom-4 -right-4 text-6xl opacity-20 transform rotate-12">🌸</div>
            <p className="text-green-800 text-lg leading-relaxed relative z-10 font-medium">
              I know we were only together for a little while, but you still mean the world to me and I still love you. Today is all about you though. I wanted to make sure you got a birthday celebration as amazing as you are. Have the best August 24th ever!
            </p>
          </section>
        )}

        {/* Countdown Section */}
        <section className={`flex justify-center ${!isBirthday ? 'mt-24' : ''}`}>
          <Countdown onStateChange={setIsBirthday} />
        </section>

        {isBirthday && (
          <section className="max-w-4xl mx-auto w-full">
            <Gallery />
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pt-24 py-8 text-center text-green-800 font-medium bg-transparent">
        <p>Made with 🍕 and 🌸 for Laura</p>
      </footer>
    </div>
  );
}

