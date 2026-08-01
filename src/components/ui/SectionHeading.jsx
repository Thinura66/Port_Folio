import React from 'react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12 scroll-animate">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">{title}</h2>
    <div className="w-16 h-1 bg-primary-500 mx-auto mb-6" />
    {subtitle && (
      <p className="text-blue-100 text-lg max-w-xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
