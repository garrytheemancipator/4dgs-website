import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'technology', label: 'Technology' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'research', label: 'Research' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/60 backdrop-blur-xl border-b border-white/10"
    >
      <div 
        className="text-2xl font-bold tracking-tighter cursor-pointer"
        onClick={() => onNavClick('home')}
      >
        4D<span className="text-purple-500">GS</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {item.label}
          </button>
        ))}
        <button 
          onClick={() => onNavClick('contact')}
          className="px-6 py-2.5 text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-all shadow-lg shadow-purple-500/20"
        >
          Inquire
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-3xl font-bold text-white hover:text-purple-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="mt-4 px-10 py-4 bg-purple-600 text-white font-bold rounded-full text-xl"
            >
              Inquire
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
