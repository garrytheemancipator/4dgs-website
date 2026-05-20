import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Shield, Globe, Users, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
  >
    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors text-purple-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ShowcaseSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Flow",
      description: "Experience seamless, high-FPS temporal transitions that react instantly to your exploration."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Unparalleled Realism",
      description: "Photorealistic Gaussian primitives that capture light, shadow, and motion with absolute fidelity."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Explicit Dynamics",
      description: "Unlike NeRF, our 4D GS approach uses explicit geometry, making it easy to integrate into existing engines."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Temporal Consistency",
      description: "Mathematically optimized deformation fields ensure smooth, artifact-free motion across all frames."
    }
  ];

  return (
    <section id="showcase" className="py-32 px-8 bg-black relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Witness the Magic
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Dive into our interactive gallery. Move through time, explore dynamic environments, and see the power of 4D GS for yourself.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        <div className="mt-20 aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
           <div className="text-center z-20 group-hover:scale-110 transition-transform duration-500">
             <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
               <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
             </div>
             <p className="text-xl font-bold">Launch Interactive Demo</p>
             <p className="text-sm text-gray-400">Click to start the 4D Viewer</p>
           </div>
           {/* Placeholder for a real video or 3D canvas */}
           <div className="absolute inset-0 bg-gray-900 -z-10" />
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-900/10 blur-[120px] -z-10" />
    </section>
  );
};

export default ShowcaseSection;
