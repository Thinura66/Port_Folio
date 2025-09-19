import React from 'react';

const Skills = () => (
  <section id="skills" style={{ padding: '80px 0', background: 'linear-gradient(180deg, #151515 0%, #0e1117 50%, #121212 100%)' }}>
    <div className="container">
      <div className="text-center mb-5 scroll-animate">
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
          My Skills
        </h2>
        <div style={{ width: '60px', height: '4px', background: '#185adb', margin: '0 auto 30px' }}></div>
        <p style={{ color: '#eaf0fb', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>
      
      <div className="row">
        {/* Frontend & Frameworks */}
        <div className="col-lg-4 mb-4 scroll-animate scroll-animate-delay-1">
          <div className="animated-border" style={{ 
            borderRadius: '15px',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            padding: '30px', 
            height: '100%' 
          }}>
            <h4 style={{ color: '#4a9eff', marginBottom: '30px', textAlign: 'center' }}>Frontend & Frameworks</h4>
            <div className="row text-center">
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                       alt="React" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>React</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                       alt="JavaScript" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>JavaScript</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                       alt="HTML5" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>HTML5</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                       alt="CSS3" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>CSS3</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                       alt="Bootstrap" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Bootstrap</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4" 
                       alt="Chakra UI" style={{ width: '50px', height: '50px', marginBottom: '10px', borderRadius: '8px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Chakra UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend & Databases */}
        <div className="col-lg-4 mb-4 scroll-animate scroll-animate-delay-2">
          <div className="animated-border" style={{ 
            borderRadius: '15px',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            padding: '30px', 
            height: '100%' 
          }}>
            <h4 style={{ color: '#4a9eff', marginBottom: '30px', textAlign: 'center' }}>Backend & Databases</h4>
            <div className="row text-center">
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                       alt="Node.js" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Node.js</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                       alt="Python" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Python</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
                       alt="Spring Boot" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Spring Boot</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                       alt="Firebase" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Firebase</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                       alt="MongoDB" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>MongoDB</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                       alt="MySQL" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="col-lg-4 mb-4 scroll-animate scroll-animate-delay-3">
          <div className="animated-border" style={{ 
            borderRadius: '15px',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            padding: '30px', 
            height: '100%' 
          }}>
            <h4 style={{ color: '#4a9eff', marginBottom: '30px', textAlign: 'center' }}>Tools & Others</h4>
            <div className="row text-center">
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                       alt="Git" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Git</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://juliety.com/wp-content/uploads/2023/08/desktop-app@2x-edited.png" 
                       alt="ClickUp" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>ClickUp</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" 
                       alt="Azure" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Azure</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                       alt="Figma" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>Figma</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
                       alt="VS Code" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>VS Code</span>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                       alt="GitHub" style={{ width: '50px', height: '50px', marginBottom: '10px', filter: 'invert(1)' }} />
                  <span style={{ color: '#fff', fontSize: '0.9rem' }}>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
