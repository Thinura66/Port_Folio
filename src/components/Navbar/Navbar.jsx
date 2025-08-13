import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-900/95 backdrop-blur-md fixed top-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-primary-500 text-2xl font-bold hover:text-primary-400 transition-colors">
          Thinura
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-200 hover:text-primary-400 transition-colors text-lg">
            Home
          </a>
          <a href="#about" className="text-gray-200 hover:text-primary-400 transition-colors text-lg">
            About
          </a>
          <a href="#skills" className="text-gray-200 hover:text-primary-400 transition-colors text-lg">
            Skills
          </a>
          <a href="#projects" className="text-gray-200 hover:text-primary-400 transition-colors text-lg">
            Projects
          </a>
          <a href="#contact" className="text-gray-200 hover:text-primary-400 transition-colors text-lg">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-200 hover:text-primary-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-gray-200 hover:text-primary-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#skills" className="text-gray-200 hover:text-primary-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="text-gray-200 hover:text-primary-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-gray-200 hover:text-primary-400 transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;