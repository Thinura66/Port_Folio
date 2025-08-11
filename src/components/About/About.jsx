import React from 'react';

const About = () => (
  <section id="about" style={{ padding: '80px 0', background: '#151515' }}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
              About Me
            </h2>
            <div style={{ width: '60px', height: '4px', background: '#185adb', margin: '0 auto 30px' }}></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>
                Software Engineer & Problem Solver
              </h3>
              <p style={{ color: '#eaf0fb', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                I'm a passionate software engineer with over 3 years of experience in building 
                scalable web applications and mobile solutions. I specialize in modern JavaScript 
                frameworks and love turning complex problems into simple, beautiful designs.
              </p>
              <p style={{ color: '#eaf0fb', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '30px' }}>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <p style={{ color: '#fff', marginBottom: '10px' }}>
                    <strong>Location:</strong> <span style={{ color: '#eaf0fb' }}>Sri Lanka</span>
                  </p>
                  <p style={{ color: '#fff', marginBottom: '10px' }}>
                    <strong>Experience:</strong> <span style={{ color: '#eaf0fb' }}>3+ Years</span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p style={{ color: '#fff', marginBottom: '10px' }}>
                    <strong>Freelance:</strong> <span style={{ color: '#eaf0fb' }}>Available</span>
                  </p>
                  <p style={{ color: '#fff', marginBottom: '10px' }}>
                    <strong>Languages:</strong> <span style={{ color: '#eaf0fb' }}>English, Sinhala</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ background: '#1a1a1a', padding: '40px', borderRadius: '10px', border: '2px solid #185adb' }}>
                <h4 style={{ color: '#fff', marginBottom: '20px' }}>What I Do</h4>
                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: '#4a9eff', fontSize: '1.2rem', marginBottom: '10px' }}>🌐 Web Development</h5>
                  <p style={{ color: '#eaf0fb', fontSize: '0.95rem' }}>
                    Full-stack web development using React, Node.js, and modern frameworks.
                  </p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: '#4a9eff', fontSize: '1.2rem', marginBottom: '10px' }}>📱 Mobile Development</h5>
                  <p style={{ color: '#eaf0fb', fontSize: '0.95rem' }}>
                    Cross-platform mobile apps using React Native and Flutter.
                  </p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <h5 style={{ color: '#4a9eff', fontSize: '1.2rem', marginBottom: '10px' }}>☁️ Cloud Solutions</h5>
                  <p style={{ color: '#eaf0fb', fontSize: '0.95rem' }}>
                    Scalable cloud architecture using AWS and modern deployment practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
