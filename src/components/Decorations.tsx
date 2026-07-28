import { motion } from 'motion/react';

export function FloatingMasks() {
  const masks = ['🐢', '🐢', '🐢', '🐢', '🐢', '🐢'];
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {masks.map((mask, i) => {
        const startY = Math.random() * 100;
        const endY = startY + (Math.random() * 40 - 20); // Drift up or down slightly
        return (
          <motion.div
            key={i}
            initial={{ left: '-10%', top: `${startY}%`, rotate: Math.random() * 360 }}
            animate={{ left: '110%', top: `${endY}%`, rotate: Math.random() * 360 + 360 }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear'
            }}
            className="absolute text-4xl opacity-30 drop-shadow-md"
          >
            {mask}
          </motion.div>
        );
      })}
    </div>
  );
}

export function BindweedVines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* Huge background vines spanning across */}
      <svg className="absolute inset-0 w-full h-full text-green-300/40" preserveAspectRatio="none" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 C300,50 600,400 1100,100" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M-100,500 C400,200 500,800 1100,400" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M-100,800 C200,900 800,600 1100,900" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        <path d="M200,-100 C150,300 400,600 300,1100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M800,-100 C900,400 600,700 700,1100" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      
      {/* Detailed decorative flower clusters in corners */}
      <svg className="absolute top-0 left-0 w-[400px] h-[400px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vine lines */}
        <path d="M-20,20 C30,40 60,90 150,150" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />
        <path d="M-10,50 C40,80 80,120 180,110" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
        <path d="M20,-20 C30,30 90,80 120,180" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
        
        {/* Leaves */}
        <path d="M50,70 Q70,50 80,70 Q60,90 50,70" fill="#86efac" />
        <path d="M100,110 Q120,90 130,110 Q110,130 100,110" fill="#86efac" />
        <path d="M70,120 Q90,140 80,150 Q60,130 70,120" fill="#bbf7d0" />
        
        {/* Bindweed Flowers */}
        <g transform="translate(40, 50) rotate(15)">
          <path d="M0,0 C-10,-15 -20,-20 -30,-10 C-35,0 -30,10 -20,15 C-10,15 0,5 0,0" fill="white" stroke="#e9d5ff" strokeWidth="1"/>
          <circle cx="-15" cy="2" r="3" fill="#fbcfe8" />
        </g>
        <g transform="translate(110, 140) rotate(-45)">
          <path d="M0,0 C-15,-20 -30,-25 -40,-10 C-45,5 -35,20 -20,25 C-10,20 0,10 0,0" fill="white" stroke="#e9d5ff" strokeWidth="1.5"/>
          <circle cx="-20" cy="4" r="4" fill="#fbcfe8" />
          <path d="M-20,4 L-15,-20 M-20,4 L-35,-15 M-20,4 L-40,-5 M-20,4 L-30,20 M-20,4 L-5,15" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </g>
        <g transform="translate(150, 100) rotate(105) scale(0.7)">
          <path d="M0,0 C-15,-20 -30,-25 -40,-10 C-45,5 -35,20 -20,25 C-10,20 0,10 0,0" fill="white" stroke="#e9d5ff" strokeWidth="1.5"/>
          <circle cx="-20" cy="4" r="4" fill="#fbcfe8" />
          <path d="M-20,4 L-15,-20 M-20,4 L-35,-15 M-20,4 L-40,-5 M-20,4 L-30,20 M-20,4 L-5,15" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </g>
      </svg>

      <svg className="absolute bottom-0 right-0 w-[500px] h-[500px] transform rotate-180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vine lines */}
        <path d="M-20,20 C30,40 60,90 150,150" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />
        <path d="M-10,50 C40,80 80,120 180,110" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
        <path d="M20,-20 C30,30 90,80 120,180" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
        
        {/* Leaves */}
        <path d="M50,70 Q70,50 80,70 Q60,90 50,70" fill="#86efac" />
        <path d="M100,110 Q120,90 130,110 Q110,130 100,110" fill="#86efac" />
        <path d="M70,120 Q90,140 80,150 Q60,130 70,120" fill="#bbf7d0" />
        
        {/* Flowers */}
        <g transform="translate(80, 80) rotate(-45)">
          <path d="M0,0 C-15,-20 -30,-25 -40,-10 C-45,5 -35,20 -20,25 C-10,20 0,10 0,0" fill="white" stroke="#e9d5ff" strokeWidth="1.5"/>
          <circle cx="-20" cy="4" r="4" fill="#fbcfe8" />
          <path d="M-20,4 L-15,-20 M-20,4 L-35,-15 M-20,4 L-40,-5 M-20,4 L-30,20 M-20,4 L-5,15" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </g>
        <g transform="translate(160, 120) rotate(70) scale(0.8)">
          <path d="M0,0 C-15,-20 -30,-25 -40,-10 C-45,5 -35,20 -20,25 C-10,20 0,10 0,0" fill="white" stroke="#e9d5ff" strokeWidth="1.5"/>
          <circle cx="-20" cy="4" r="4" fill="#fbcfe8" />
          <path d="M-20,4 L-15,-20 M-20,4 L-35,-15 M-20,4 L-40,-5 M-20,4 L-30,20 M-20,4 L-5,15" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </g>
        <g transform="translate(30, 150) rotate(-110) scale(0.9)">
          <path d="M0,0 C-15,-20 -30,-25 -40,-10 C-45,5 -35,20 -20,25 C-10,20 0,10 0,0" fill="white" stroke="#e9d5ff" strokeWidth="1.5"/>
          <circle cx="-20" cy="4" r="4" fill="#fbcfe8" />
          <path d="M-20,4 L-15,-20 M-20,4 L-35,-15 M-20,4 L-40,-5 M-20,4 L-30,20 M-20,4 L-5,15" stroke="#fbcfe8" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        </g>
      </svg>
      
      {/* Small floating elements */}
      <div className="absolute top-1/4 right-[15%] text-4xl opacity-30 animate-pulse">🍕</div>
      <div className="absolute bottom-[20%] left-[10%] text-4xl opacity-30 transform -rotate-12">🐢</div>
      <div className="absolute top-1/2 left-[5%] text-3xl opacity-40 transform rotate-12">🌸</div>
      <div className="absolute top-2/3 right-[10%] text-3xl opacity-30 transform -rotate-45">🌿</div>
      <div className="absolute top-[15%] left-[30%] text-2xl opacity-20 transform rotate-45">🐢</div>
      <div className="absolute bottom-[30%] right-[30%] text-3xl opacity-20 transform rotate-90">🍕</div>
      
      {/* More Ninja Turtles */}
      <div className="absolute top-[5%] right-[25%] text-5xl opacity-20 transform rotate-12">🐢</div>
      <div className="absolute top-[40%] right-[40%] text-4xl opacity-25 transform -rotate-12">🐢</div>
      <div className="absolute bottom-[10%] left-[40%] text-5xl opacity-20 transform rotate-45">🐢</div>
      <div className="absolute top-[80%] right-[5%] text-4xl opacity-30 transform -rotate-12">🐢</div>
      <div className="absolute top-[60%] left-[20%] text-4xl opacity-25 transform rotate-6">🐢</div>
    </div>
  );
}
