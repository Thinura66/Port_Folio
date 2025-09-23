import React, { useEffect, useState } from 'react';
import profileImg from '../../assets/Profile.png';
import cvFile from '../../assets/224097E CV.pdf';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
  <section
    id="home"
    className="w-full min-h-screen pt-20 md:pt-24 pb-4 md:pb-8 px-4 md:px-8 lg:px-24 flex items-center justify-center"
    style={{ width: '100vw', maxWidth: '100vw', overflowX: 'hidden' }}
  >
    <div className="w-full mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="text-white text-center lg:text-left flex-1 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <div className={`mb-2 ${isLoaded ? 'animate-fade-in-left' : 'animate-on-load'}`}>Hi, I'm</div>
            <div className={`text-white ${isLoaded ? 'animate-fade-in-right animate-delay-1' : 'animate-on-load'}`}>
              Thinura Kahaduwa
            </div>
          </h1>
          
          {/* Profile Image - Mobile Only (appears after name) */}
          <div className="flex justify-center lg:hidden mb-6">
            <div className="relative">
              <img 
                src={profileImg} 
                alt="Thinura Kahaduwa" 
                className={`w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full border-4 border-white shadow-2xl ${isLoaded ? 'animate-zoom-in animate-delay-2 floating' : 'animate-on-load'}`}
                style={{ aspectRatio: '1/1', minWidth: '12rem', minHeight: '12rem' }}
              />
            </div>
          </div>
          
          <h2 
            className={`text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 text-blue-200 ${isLoaded ? 'animate-fade-in-up animate-delay-1' : 'animate-on-load'}`}
          >
            3rd year undergraduate
          </h2>

          <p className={`text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed text-blue-100 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 ${isLoaded ? 'animate-fade-in-up animate-delay-2' : 'animate-on-load'}`}>
            I am a 3rd year undergraduate at the University of Moratuwa, passionate about software engineering and modern web development. 
            I enjoy building innovative, user-friendly solutions and turning creative ideas into functional applications.
          </p>
          
          <div className={`mb-6 lg:mb-8 ${isLoaded ? 'animate-fade-in-up animate-delay-3' : 'animate-on-load'}`}>
            <a 
              href={cvFile}
              download="Thinura_Kahaduwa_CV.pdf"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'linear-gradient(135deg, #185adb 0%, #4a9eff 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(24, 90, 219, 0.3)',
                marginRight: '15px',
                marginBottom: '15px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(24, 90, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(24, 90, 219, 0.3)';
              }}
            >
              📄 Download CV
            </a>
            <a 
              href="#projects"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'transparent',
                color: '#4a9eff',
                border: '2px solid #4a9eff',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                marginBottom: '15px',
                minWidth: '162px',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#4a9eff';
                e.target.style.color = '#fff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(74, 158, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#4a9eff';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🚀 View My Work
            </a>
          </div>
        </div>
        
        {/* Profile Image - Desktop Only */}
        <div className="hidden lg:flex flex-1 justify-center">
          <img 
            src={profileImg} 
            alt="Thinura Kahaduwa" 
            className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-white shadow-2xl ${isLoaded ? 'animate-zoom-in animate-delay-2 floating' : 'animate-on-load'}`}
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Home;
