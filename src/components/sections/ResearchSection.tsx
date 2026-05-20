import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, FileText, GraduationCap } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  description: string;
  type: string;
  link: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ title, description, type, link }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500/20 transition-colors">
        <FileText className="w-6 h-6" />
      </div>
      <span className="text-[10px] uppercase tracking-widest text-purple-500 font-bold bg-purple-500/10 px-3 py-1 rounded-full">
        {type}
      </span>
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{description}</p>
    <a 
      href={link} 
      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors"
    >
      Read Paper <span className="text-lg">→</span>
    </a>
  </motion.div>
);

const ResearchSection: React.FC = () => {
  const papers = [
    {
      title: "4D Gaussian Splatting: Real-Time Dynamic Scene Rendering",
      description: "An exploration into the spatiotemporal deformation of Gaussian primitives for high-fidelity motion capture.",
      type: "ArXiv",
      link: "#"
    },
    {
      title: "Optimizing Rasterization for Temporal Consistency",
      description: "A deep dive into the mathematical frameworks ensuring artifact-free motion in 4D environments.",
      type: "Conference",
      link: "#"
    },
    {
      title: "Benchmarking 4D GS against Dynamic NeRFs",
      description: "A comprehensive performance analysis comparing frame rates and PSNR across multiple datasets.",
      type: "Technical Blog",
      link: "#"
    }
  ];

  return (
    <section id="research" className="py-32 px-8 bg-black relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Research & Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Pushing the boundaries of spatial intelligence through rigorous research and open-source contribution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {papers.map((paper, idx) => (
            <ResearchCard key={idx} {...paper} />
          ))}
        </div>
      </div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/5 blur-[150px] -z-10 rounded-full" />
    </section>
  );
};

export default ResearchSection;
