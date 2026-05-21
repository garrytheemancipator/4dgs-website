import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, Share2, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-8 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Interested in custom 4D GS solutions or research collaborations? Let's build the future together.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-4">Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-4">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors text-white"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-400 ml-4">Message</label>
              <textarea 
                rows={4} 
                placeholder="How can we help you?" 
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 transition-colors text-white resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Link className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
          <p className="text-gray-500 text-sm">
            Based in San Francisco, CA. Available worldwide.
          </p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-900/10 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};

export default ContactSection;
