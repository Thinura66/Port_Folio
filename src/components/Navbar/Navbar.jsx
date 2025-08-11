import React from 'react';

const Navbar = () => (
  <nav style={{ 
    background: 'rgba(10, 25, 49, 0.95)', 
    padding: '15px 0', 
    position: 'fixed', 
    top: 0, 
    width: '100%', 
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    overflow: 'hidden'
  }}>
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between align-items-center">
        <a href="#home" style={{ 
          color: '#4a9eff', 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          textDecoration: 'none' 
        }}>
          Thinura
        </a>
        <div className="d-flex">
          <a href="#home" style={{ 
            color: '#eaf0fb', 
            textDecoration: 'none', 
            marginRight: '30px',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            Home
          </a>
          <a href="#about" style={{ 
            color: '#eaf0fb', 
            textDecoration: 'none', 
            marginRight: '30px',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            About
          </a>
          <a href="#skills" style={{ 
            color: '#eaf0fb', 
            textDecoration: 'none', 
            marginRight: '30px',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            Skills
          </a>
          <a href="#projects" style={{ 
            color: '#eaf0fb', 
            textDecoration: 'none', 
            marginRight: '30px',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            Projects
          </a>
          <a href="#contact" style={{ 
            color: '#eaf0fb', 
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s ease'
          }}>
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
