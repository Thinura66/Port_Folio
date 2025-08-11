import React from 'react';

const Projects = () => (
  <section id="projects" style={{ padding: '80px 0', background: '#151515' }}>
    <div className="container">
      <div className="text-center mb-5">
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
          My Projects
        </h2>
        <div style={{ width: '60px', height: '4px', background: '#185adb', margin: '0 auto 30px' }}></div>
        <p style={{ color: '#eaf0fb', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Here are some of the projects I've worked on. Each project showcases different technologies and skills.
        </p>
      </div>
      
      <div className="row">
        {/* Project 1 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div style={{ 
            background: '#1a1a1a', 
            borderRadius: '10px', 
            overflow: 'hidden', 
            border: '2px solid #185adb',
            transition: 'transform 0.3s ease',
            height: '100%'
          }}>
            <div style={{ 
              height: '200px', 
              background: 'linear-gradient(135deg, #185adb, #0a1931)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center' }}>E-Commerce Platform</h3>
            </div>
            <div style={{ padding: '25px' }}>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Full Stack E-Commerce</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A complete e-commerce solution with user authentication, payment integration, 
                and admin dashboard. Built with React, Node.js, and MongoDB.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>React</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>Node.js</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem'
                }}>MongoDB</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Live Demo</a>
                <a href="#" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div style={{ 
            background: '#1a1a1a', 
            borderRadius: '10px', 
            overflow: 'hidden', 
            border: '2px solid #185adb',
            transition: 'transform 0.3s ease',
            height: '100%'
          }}>
            <div style={{ 
              height: '200px', 
              background: 'linear-gradient(135deg, #4a9eff, #185adb)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center' }}>Task Management App</h3>
            </div>
            <div style={{ padding: '25px' }}>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>React Native Mobile App</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A cross-platform mobile application for task management with real-time 
                synchronization and offline capabilities.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>React Native</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>Firebase</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem'
                }}>Redux</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>App Store</a>
                <a href="#" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div style={{ 
            background: '#1a1a1a', 
            borderRadius: '10px', 
            overflow: 'hidden', 
            border: '2px solid #185adb',
            transition: 'transform 0.3s ease',
            height: '100%'
          }}>
            <div style={{ 
              height: '200px', 
              background: 'linear-gradient(135deg, #0a1931, #4a9eff)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center' }}>Weather Dashboard</h3>
            </div>
            <div style={{ padding: '25px' }}>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>React Web Application</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A responsive weather dashboard with location-based forecasts, 
                interactive charts, and weather alerts.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>React</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>Chart.js</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem'
                }}>Weather API</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>Live Demo</a>
                <a href="#" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
