import React from 'react';

const Badge = ({ children }) => (
  <span className="inline-block bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded mr-2 mb-2">
    {children}
  </span>
);

export default Badge;
