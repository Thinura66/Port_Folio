import React from 'react';

const Skills = () => (
  <section id="skills" style={{ padding: '80px 0', background: '#121212' }}>
    <div className="container">
      <div className="text-center mb-5">
        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
          My Skills
        </h2>
        <div style={{ width: '60px', height: '4px', background: '#185adb', margin: '0 auto 30px' }}></div>
        <p style={{ color: '#eaf0fb', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>
      
      <div className="row">
        {/* Frontend Skills */}
        <div className="col-lg-4 mb-4">
          <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '10px', height: '100%', border: '2px solid #185adb' }}>
            <h4 style={{ color: '#ffc947', marginBottom: '20px', textAlign: 'center' }}>Frontend</h4>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>React</span>
                <span style={{ color: '#eaf0fb' }}>90%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '90%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>JavaScript</span>
                <span style={{ color: '#eaf0fb' }}>85%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '85%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>HTML/CSS</span>
                <span style={{ color: '#eaf0fb' }}>95%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '95%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Bootstrap</span>
                <span style={{ color: '#eaf0fb' }}>80%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '80%', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="col-lg-4 mb-4">
          <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '10px', height: '100%', border: '2px solid #185adb' }}>
            <h4 style={{ color: '#ffc947', marginBottom: '20px', textAlign: 'center' }}>Backend</h4>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Node.js</span>
                <span style={{ color: '#eaf0fb' }}>80%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '80%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Python</span>
                <span style={{ color: '#eaf0fb' }}>75%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '75%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>MongoDB</span>
                <span style={{ color: '#eaf0fb' }}>70%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '70%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Express.js</span>
                <span style={{ color: '#eaf0fb' }}>75%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '75%', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Others */}
        <div className="col-lg-4 mb-4">
          <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '10px', height: '100%', border: '2px solid #185adb' }}>
            <h4 style={{ color: '#ffc947', marginBottom: '20px', textAlign: 'center' }}>Tools & Others</h4>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Git</span>
                <span style={{ color: '#eaf0fb' }}>85%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '85%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Docker</span>
                <span style={{ color: '#eaf0fb' }}>65%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '65%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>AWS</span>
                <span style={{ color: '#eaf0fb' }}>60%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '60%', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div className="skill-item mb-3">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Figma</span>
                <span style={{ color: '#eaf0fb' }}>70%</span>
              </div>
              <div style={{ background: '#333', height: '8px', borderRadius: '4px' }}>
                <div style={{ background: '#185adb', height: '100%', width: '70%', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
