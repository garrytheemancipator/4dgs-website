import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AboutCardProps {
  title: string;
  description: string;
  image?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 transition-all"
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-8 bg-black relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Pioneering the Next Dimension of Digital Reality.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              We are a collective of researchers, engineers, and visionaries dedicated to mastering the spatiotemporal domain. By blending advanced computer vision with real-time rendering, we turn captured moments into interactive, high-fidelity digital twins.
            </motion.p>
            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Scans</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">24+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Papers</div>
              </div>
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-purple-400">Real-Time</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Engine</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AboutCard 
              title="Our Vision" 
              description="To make the transition from the physical to the digital seamless, interactive, and indistinguishable from reality." 
            />
            <AboutCard 
              title="Our Mission" 
              description="To build the most advanced real-time 4D rendering pipeline available for industry professionals." 
            />
            <AboutCard 
              title="The Team" 
              description="Experts in Computer Vision, Graphics, and Software Engineering from leading institutions." 
            />
            <AboutCard 
              title="Collaboration" 
              description="We partner with studios and researchers to push the boundaries of what is possible." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
