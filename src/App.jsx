
import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { setupScrollAnimations } from './utils/scrollAnimations';

const App = () => {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="relative">
      {/* Flowing Blue Lines Background */}
      <div className="flowing-lines-bg">
        <div className="blue-line horizontal line-1"></div>
        <div className="blue-line horizontal line-2"></div>
        <div className="blue-line horizontal line-3"></div>
        <div className="blue-line horizontal line-4"></div>
        <div className="blue-line horizontal line-1" style={{animationDelay: '3s', top: '25%'}}></div>
        <div className="blue-line horizontal line-2" style={{animationDelay: '5s', top: '75%'}}></div>
        <div className="blue-line vertical line-5"></div>
        <div className="blue-line vertical line-6"></div>
        <div className="blue-line vertical line-7"></div>
        <div className="blue-line vertical line-5" style={{animationDelay: '2s', left: '35%'}}></div>
        <div className="blue-line vertical line-6" style={{animationDelay: '4s', left: '65%'}}></div>
        <div className="blue-line diagonal line-8"></div>
        <div className="blue-line diagonal line-9"></div>
        <div className="blue-line diagonal line-8" style={{animationDelay: '4s', top: '50%'}}></div>
      </div>

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
