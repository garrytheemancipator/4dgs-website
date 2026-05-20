import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Real-time 3D Background */}
      <div className="absolute inset-0 -z-10">
        {/* The Canvas component is actually rendered via App.tsx's background logic, 
            but we keep the space here for layout stability */}
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white leading-[1.1]">
            Experience the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              World in Motion
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Discover the next frontier of digital reality with 4D Gaussian Splatting. 
          High-fidelity, real-time dynamic scene rendering that captures life exactly as it happens.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={onExplore}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform w-full md:w-auto shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Explore Showcase
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all w-full md:w-auto">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Ambient Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
