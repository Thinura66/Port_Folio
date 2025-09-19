import React, { useState, useEffect } from 'react';

// Import Project 2 images
import project2Img1 from '../../assets/Project2/1.png';
import project2Img2 from '../../assets/Project2/2.png';
import project2Img3 from '../../assets/Project2/3.png';
import project2Img4 from '../../assets/Project2/4.png';
import project2Img5 from '../../assets/Project2/5.png';
import project2Img6 from '../../assets/Project2/6.png';

// Import Project 3 images
import project3Img1 from '../../assets/Project3/1.jpg';
import project3Img2 from '../../assets/Project3/2.jpg';
import project3Img3 from '../../assets/Project3/3.jpg';
import project3Img4 from '../../assets/Project3/4.jpg';
import project3Img5 from '../../assets/Project3/5.jpg';

// Import Portfolio project image
import portfolioImg from '../../assets/Project4/image.png';

const Projects = () => {
  // State for Project 2 slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State for Project 3 slideshow
  const [currentProject3ImageIndex, setCurrentProject3ImageIndex] = useState(0);
  
  // Project 2 images array
  const project2Images = [
    project2Img1,
    project2Img2,
    project2Img3,
    project2Img4,
    project2Img5,
    project2Img6
  ];

  // Project 3 images array
  const project3Images = [
    project3Img1,
    project3Img2,
    project3Img3,
    project3Img4,
    project3Img5
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

  // Auto-slide effect for Project 3
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentProject3ImageIndex((prevIndex) => 
        prevIndex === project3Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Change image every 3.5 seconds (different timing)

    return () => clearInterval(slideInterval);
  }, [project3Images.length]);

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
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>POS System</h3>
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
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="https://github.com/Thinura66/PointEdge-Frontend" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>GitHub Frontend</a>
                <a href="https://github.com/Thinura66/PointEdge-Backend" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>GitHub Backend</a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
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
              backgroundImage: `url(${project3Images[currentProject3ImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              transition: 'background-image 0.5s ease-in-out'
            }}>
              {/* Slideshow indicators */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {project3Images.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: index === currentProject3ImageIndex ? '#4a9eff' : 'rgba(255,255,255,0.5)',
                      transition: 'background 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Solo-Runner</h3>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Self-Training Running Track System</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Built a sports technology solution using ESP32-CAM and IoT sensors to capture athlete performance with motion-triggered images. Integrated Firebase for real-time data sync and developed a web interface for playback and analysis.
              </p>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>ESP32-CAM</span>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>HTML</span>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>CSS</span>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>JavaScript</span>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>Firebase</span>
                </div>
                <div>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>IoT Sensors</span>
                  <span style={{ 
                    background: '#185adb', 
                    color: '#fff', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem'
                  }}>Arduino IDE</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
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

        {/* Project 4 - Portfolio */}
        <div className="col-lg-4 col-md-6 mb-4 scroll-animate scroll-animate-delay-4">
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
              backgroundImage: `url(${portfolioImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}>
            </div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Personal Portfolio</h3>
              <h4 style={{ color: '#fff', marginBottom: '15px' }}>Responsive Portfolio Website</h4>
              <p style={{ color: '#eaf0fb', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                A modern, responsive portfolio website showcasing my projects and skills. 
                Features animated backgrounds, smooth scrolling, mobile-optimized design, 
                and interactive contact form with EmailJS integration.
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
                }}>Tailwind CSS</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem',
                  marginRight: '8px'
                }}>Vite</span>
                <span style={{ 
                  background: '#185adb', 
                  color: '#fff', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem'
                }}>EmailJS</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="https://github.com/Thinura66/Port_Folio" target="_blank" rel="noopener noreferrer" style={{ 
                  color: '#4a9eff', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
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
