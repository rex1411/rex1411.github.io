import { motion } from 'motion/react';
import memoriesImg from '../assets/memories.jpg';

export function Gallery() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-black text-green-900 mb-8 text-center flex items-center justify-center gap-3">
        <span className="text-blue-500">Flat</span> 
        <span className="text-red-500">56</span> 
        <span className="text-orange-500">Memories</span>
      </h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200 bg-white min-h-[400px] flex items-center justify-center group"
      >
        <img 
          src={memoriesImg} 
          alt="Laura's memory board"
          className="w-full h-auto object-contain block z-10 relative"
          onError={(e) => {
            // Fallback for when the image isn't uploaded yet
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-green-50/50">
          <p className="text-green-800 text-lg font-medium">
            (Image missing: please provide 'memories.jpg' if needed)
          </p>
        </div>
      </motion.div>
    </div>
  );
}
