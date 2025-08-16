import React from 'react';  

const About = () => (
  <section 
    id="about" 
    className="py-8 md:py-20 px-4 md:px-8"
    style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0f1419 50%, #151515 100%)' }}
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-8">
          <div className="mb-6 lg:mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto lg:mx-0 mb-6 lg:mb-8"></div>
          </div>
          
          <div className="scroll-animate-left">
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-6">
              Software Engineer & Problem Solver
            </h3>
            <p className="text-blue-100 text-base md:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6">
               As a 3rd year undergraduate at the University of Moratuwa, I am driven to grow into a versatile software engineer. 
               I have a strong interest in designing efficient systems, exploring modern web technologies, and developing solutions that combine functionality with great user experience.
            </p>
            <p className="text-blue-100 text-base md:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 lg:mb-8">
              <div>
                <p className="text-white mb-2">
                  <strong>Location:</strong> <span className="text-blue-100">Sri Lanka</span>
                </p>
                <p className="text-white mb-2">
                  <strong>3rd Year Undergraduate</strong> 
                </p>
              </div>
              <div>
                <p className="text-white mb-2">
                  <strong>Freelance:</strong> <span className="text-blue-100">Available</span>
                </p>
                <p className="text-white mb-2">
                  <strong>Languages:</strong> <span className="text-blue-100">English, Sinhala</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills/Services Content */}
        <div className="flex-1 scroll-animate-right">
          <div className="bg-gray-900 p-6 md:p-8 lg:p-10 rounded-xl border-2 border-primary-500">
            <h4 className="text-white text-xl md:text-2xl mb-6">What I Do</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">🌐 Web Development</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Full-stack web development using React, Node.js, and modern frameworks.
                </p>
              </div>
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">📱 Mobile Development</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Cross-platform mobile apps using React Native and Flutter.
                </p>
              </div>
              <div>
                <h5 className="text-primary-400 text-lg md:text-xl mb-3">☁️ Cloud Solutions</h5>
                <p className="text-blue-100 text-sm md:text-base">
                  Designing and implementing scalable cloud architecture on Microsoft Azure using modern deployment practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
