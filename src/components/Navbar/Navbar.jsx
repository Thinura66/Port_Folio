import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id) =>
    `text-lg transition-colors duration-300 ${
      activeSection === id ? 'text-primary-400' : 'text-gray-200 hover:text-primary-400'
    }`;

  return (
    <nav
      className={`bg-primary-900/95 backdrop-blur-md fixed top-0 w-full z-50 px-4 py-2 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/30 border-b border-white/10' : ''
      }`}
    >
      <div className="w-full max-w-none md:max-w-7xl mx-auto flex justify-between items-center h-12">
        <a href="#home" className="text-primary-500 text-2xl font-bold hover:text-primary-400 transition-colors">
          Thinura
        </a>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </div>

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

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {NAV_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)} onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;