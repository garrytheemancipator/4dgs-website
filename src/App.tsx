import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/ui/Hero';
import TechnologySection from './components/sections/TechnologySection';
import ShowcaseSection from './components/sections/ShowcaseSection';
import ResearchSection from './components/sections/ResearchSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

const App: React.FC = () => {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    const showcase = document.getElementById('showcase');
    if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-purple-500/30">
      <Navbar onNavClick={handleNavClick} />
      
      <main className="flex-grow">
        <Hero onExplore={handleExplore} />
        <TechnologySection />
        <ShowcaseSection />
        <ResearchSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
