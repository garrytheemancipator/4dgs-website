import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Zap, Eye, Layers, Clock } from 'lucide-react';

interface ComparisonCardProps {
  name: string;
  description: string;
  features: { label: string; value: boolean }[];
  highlight?: boolean;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ name, description, features, highlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-3xl border ${
        highlight 
          ? 'bg-purple-600/10 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.15)]' 
          : 'bg-white/5 border-white/10'
      } flex flex-col h-full`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-widest">
          The Future
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-gray-400 mb-8 text-sm leading-relaxed">{description}</p>
      
      <div className="space-y-4 mt-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm">
            {feature.value ? (
              <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500/50 shrink-0" />
            )}
            <span className={feature.value ? 'text-gray-200' : 'text-gray-500'}>
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const TechnologySection: React.FC = () => {
  const comparisons = [
    {
      name: 'NeRF',
      description: 'Volumetric neural representations providing high fidelity but struggling with real-time performance and complex temporal animations.',
      features: [
        { label: 'High Realism', value: true },
        { label: 'Real-Time Rendering', value: false },
        { label: 'Dynamic Motion', value: false },
        { label: 'Explicit Geometry', value: false },
      ]
    },
    {
      name: '3D GS',
      description: 'The gold standard for static scene reconstruction, offering incredible speed and detail but limited to stationary environments.',
      features: [
        { label: 'High Realism', value: true },
        { label: 'Real-Time Rendering', value: true },
        { label: 'Dynamic Motion', value: false },
        { label: 'Explicit Geometry', value: true },
      ]
    },
    {
      name: '4D GS',
      description: 'Our breakthrough approach. Adding the temporal dimension to explicit Gaussian primitives for real-time, dynamic, and photorealistic reality.',
      features: [
        { label: 'High Realism', value: true },
        { label: 'Real-Time Rendering', value: true },
        { label: 'Dynamic Motion', value: true },
        { label: 'Explicit Geometry', value: true },
      ],
      highlight: true
    }
  ];

  return (
    <section id="technology" className="py-32 px-8 bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Beyond Static Reality
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Understanding the technological leap from static 3D volumes to dynamic 4D spatiotemporal representations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((comp, idx) => (
            <ComparisonCard key={idx} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
