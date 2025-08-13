import React, { useEffect, useState } from 'react';
import profileImg from '../../assets/profile.jpg';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
  <section
    id="home"
    style={{
      width: '100%',
      minHeight: '100vh',
      paddingTop: '120px',
      paddingLeft: '120px',
      paddingBottom: '80px',
      background: 'linear-gradient(180deg, #0a1931 0%, #185adb 50%, #1a1a1a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}
  >
    <div className="container-fluid px-4">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 text-white">
          <h1 className={`${isLoaded ? 'animate-fade-in-up' : 'animate-on-load'}`} style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '20px' }}>
            <div>Hi, I'm</div>
            <div className={`${isLoaded ? 'typing-effect' : ''}`} style={{ color: '#fff' }}>Thinura Kahaduwa</div>
          </h1>
          <h2 
            className={`${isLoaded ? 'animate-fade-in-up animate-delay-1' : 'animate-on-load'}`}
            style={{ fontSize: '2rem', marginBottom: '20px', color: '#eaf0fb' }}
          >
            3<sup style={{ fontSize: '0.8rem', verticalAlign: 'super' }}>rd</sup> year undergraduate
          </h2>

          <p className={`${isLoaded ? 'animate-fade-in-up animate-delay-2' : 'animate-on-load'}`} style={{ fontSize: '1.2rem', marginBottom: '30px', lineHeight: 1.6, color: '#eaf0fb' }}>
            I am a 3rd year undergraduate at the University of Moratuwa, passionate about software engineering and modern web development. 
            I enjoy building innovative, user-friendly solutions and turning creative ideas into functional applications.
          </p>
          <div className={`${isLoaded ? 'animate-fade-in-up animate-delay-3' : 'animate-on-load'}`} style={{ marginBottom: '30px' }}>
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
            className={`${isLoaded ? 'animate-zoom-in animate-delay-2 floating' : 'animate-on-load'}`}
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
};

export default Home;
