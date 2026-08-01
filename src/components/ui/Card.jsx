import React from 'react';

const Card = ({ children, className = '', hoverLift = false }) => (
  <div
    className={`animated-border p-8 md:p-9 ${
      hoverLift ? 'transition-transform duration-300 ease-out hover:-translate-y-1' : ''
    } ${className}`}
  >
    {children}
  </div>
);

export default Card;
