
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { AnimatedBackground } from './components/AnimatedBackground/AnimatedBackground';
import { setupScrollAnimations } from './utils/scrollAnimations';

const App = () => {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="relative">
      {/* Animated Canvas Background */}
      <AnimatedBackground />

      {/* Global floating particles */}
      <div className="global-particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="global-particle"></div>
        ))}
      </div>
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
