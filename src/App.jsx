
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
