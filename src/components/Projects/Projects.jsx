import React, { useState, useEffect } from 'react';

// Import Project 2 images
import project2Img1 from '../../assets/Project2/1.png';
import project2Img2 from '../../assets/Project2/2.png';
import project2Img3 from '../../assets/Project2/3.png';
import project2Img4 from '../../assets/Project2/4.png';
import project2Img5 from '../../assets/Project2/5.png';
import project2Img6 from '../../assets/Project2/6.png';

const Projects = () => {
  // State for Project 2 slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Project 2 images array
  const project2Images = [
    project2Img1,
    project2Img2,
    project2Img3,
    project2Img4,
    project2Img5,
    project2Img6
  ];

  // Auto-slide effect for Project 2
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project2Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(slideInterval);
  }, [project2Images.length]);

  return (
  <section id="projects" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #121212 0%, #0c0f14 50%, #151515 100%)' }}>
    <div className="container">
      <div className="text-center mb-5 scroll-animate">
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
        <div className="col-lg-4 col-md-6 mb-4 scroll-animate scroll-animate-delay-1">
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
              backgroundImage: 'url("https://via.placeholder.com/400x200/185adb/ffffff?text=E-Commerce+Platform")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}>
              {/* Optional overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(24, 90, 219, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>E-Commerce Platform</h3>
              </div>
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
        <div className="col-lg-4 col-md-6 mb-4 scroll-animate scroll-animate-delay-2">
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
              backgroundImage: `url(${project2Images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              transition: 'background-image 0.5s ease-in-out'
            }}>
              {/* Optional overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(74, 158, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>POS System</h3>
              </div>
              
              {/* Slideshow indicators */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {project2Images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: index === currentImageIndex ? '#4a9eff' : 'rgba(255,255,255,0.5)',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ padding: '25px' }}>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}> PointEdge - Cross Platform POS System </h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A cross-platform POS system designed to streamline retail operations with real-time sales, inventory, and employee shift management.
                Features barcode scanning, discount and loyalty programs, detailed analytics, and role-based dashboards for managers and cashiers.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>React </span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>Springboot</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem'
                }}>MySQL</span>
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
        <div className="col-lg-4 col-md-6 mb-4 scroll-animate scroll-animate-delay-3">
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
              backgroundImage: 'url("https://via.placeholder.com/400x200/0a1931/ffffff?text=Weather+Dashboard")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}>
              {/* Optional overlay for better text readability */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(10, 25, 49, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Solo-Runner</h3>
              </div>
            </div>
            <div style={{ padding: '25px' }}>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Self-Training Running Track System</h4>
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
                }}>Firebase</span>
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
};

export default Projects;
