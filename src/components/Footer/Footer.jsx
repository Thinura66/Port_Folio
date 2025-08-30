import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1e3a8a',
      padding: '25px 0',
      marginTop: '80px',
      borderTop: '3px solid #3b82f6',
      boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <p style={{
          color: '#ffffff',
          fontSize: '16px',
          margin: '0',
          fontWeight: '400',
          letterSpacing: '0.5px'
        }}>
          &copy; {currentYear} Thinura Kahaduwa. All rights reserved.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center'
        }}>
          <span style={{
            color: '#93c5fd',
            fontSize: '14px',
            fontWeight: '300'
          }}>
            Built with React & Vite
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
