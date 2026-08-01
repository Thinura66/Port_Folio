import React from 'react';

const BASE = 'inline-block px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-out text-center';
const VARIANTS = {
  primary: 'bg-gradient-to-br from-primary-500 to-primary-400 text-white shadow-lg shadow-primary-900/40 hover:-translate-y-0.5 hover:shadow-xl',
  secondary: 'bg-transparent text-primary-400 border-2 border-primary-400 hover:bg-primary-400 hover:text-white hover:-translate-y-0.5',
};

const Button = ({ variant = 'primary', as = 'a', className = '', children, ...props }) => {
  const Component = as;
  return (
    <Component className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Button;
