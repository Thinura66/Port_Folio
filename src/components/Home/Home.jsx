

import React from 'react';
import profileImg from '../../assets/profile.jpg';

const Home = () => (
  <section
    id="home"
    style={{
      width: '100%',
      minHeight: '100vh',
      paddingTop: '120px',
      paddingBottom: '80px',
      background: 'linear-gradient(135deg, #0a1931 0%, #185adb 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}
  >
    <div className="container-fluid px-4">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 text-white">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '20px' }}>
            Hi, I'm <span style={{ color: '#ffc947' }}>Thinura Kahaduwa</span>
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#eaf0fb' }}>
            Software Engineer
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', lineHeight: 1.6, color: '#eaf0fb' }}>
            I'm a passionate software engineer with expertise in modern web development. 
            I love creating innovative solutions and bringing ideas to life through code.
          </p>
          <div style={{ marginBottom: '30px' }}>
            <a href="#contact" className="btn btn-primary btn-lg me-3" style={{ marginRight: '15px' }}>
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline-light btn-lg">
              View My Work
            </a>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img 
            src={profileImg} 
            alt="Thinura Kahaduwa" 
            style={{
              width: '350px',
              height: '350px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '8px solid #fff',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
