import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 border-t border-white/10 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-white text-sm">
          &copy; {currentYear} Thinura Kahaduwa. All rights reserved.
        </p>
        <span className="text-primary-300 text-xs">
          Built with React &amp; Vite
        </span>
      </div>
    </footer>
  );
};

export default Footer;
