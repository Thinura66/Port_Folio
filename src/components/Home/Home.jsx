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
    className="w-full min-h-screen pt-20 md:pt-24 pb-4 md:pb-8 px-4 md:px-8 lg:px-24 flex items-center justify-center overflow-hidden"
    style={{
      background: 'linear-gradient(180deg, #0a1931 0%, #185adb 50%, #1a1a1a 100%)'
    }}
  >
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="text-white text-center lg:text-left flex-1 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <div className={`mb-2 ${isLoaded ? 'animate-fade-in-left' : 'animate-on-load'}`}>Hi, I'm</div>
            <div className={`text-white ${isLoaded ? 'animate-fade-in-right animate-delay-1' : 'animate-on-load'}`}>
              Thinura Kahaduwa
            </div>
          </h1>
          
          <h2 
            className={`text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 text-blue-200 ${isLoaded ? 'animate-fade-in-up animate-delay-1' : 'animate-on-load'}`}
          >
            3rd year undergraduate
          </h2>

          <p className={`text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed text-blue-100 max-w-2xl mx-auto lg:mx-0 ${isLoaded ? 'animate-fade-in-up animate-delay-2' : 'animate-on-load'}`}>
            I am a 3rd year undergraduate at the University of Moratuwa, passionate about software engineering and modern web development. 
            I enjoy building innovative, user-friendly solutions and turning creative ideas into functional applications.
          </p>
          
          <div className={`mb-6 lg:mb-8 ${isLoaded ? 'animate-fade-in-up animate-delay-3' : 'animate-on-load'}`}>
            <a 
              href={cvFile}
              download="Thinura_Kahaduwa_CV.pdf"
              className="inline-block border-1 border-white bg-primary-500 hover:bg-primary-900 text-white px-3 py-3 rounded-lg text-lg font-medium transition-colors mr-4 mb-4 lg:mb-0"
            >
              📄 Download CV
            </a>
            <a 
              href="#projects" 
              className="inline-block border-1 border-white text-white hover:bg-primary-900 hover:text-primary-900 px-6 py-3 rounded-lg text-lg font-medium transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
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
