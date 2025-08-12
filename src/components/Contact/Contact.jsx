import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" style={{ 
      padding: '80px 0', 
      background: 'linear-gradient(180deg, #151515 0%, #0a1931 30%, #185adb 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
            Get In Touch
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#2c5aa0', margin: '0 auto 30px' }}></div>
          <p style={{ color: '#eaf0fb', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-5">
            <div style={{ padding: '40px 30px', background: 'rgba(255,255,255,0.1)', borderRadius: '15px' }}>
              <h3 style={{ color: '#fff', marginBottom: '30px', fontSize: '1.5rem' }}>Contact Information</h3>
              
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: '#4a9eff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <span style={{ color: '#0a1931', fontSize: '1.2rem', fontWeight: 'bold' }}>📧</span>
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', marginBottom: '5px', fontSize: '1rem' }}>Email</h4>
                    <p style={{ color: '#eaf0fb', margin: 0, fontSize: '0.9rem' }}>thinurakahaduwa@gmail.com</p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: '#4a9eff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <span style={{ color: '#0a1931', fontSize: '1.2rem', fontWeight: 'bold' }}>📱</span>
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', marginBottom: '5px', fontSize: '1rem' }}>Phone</h4>
                    <p style={{ color: '#eaf0fb', margin: 0, fontSize: '0.9rem' }}>+94 76 6568189</p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    background: '#4a9eff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <span style={{ color: '#0a1931', fontSize: '1.2rem', fontWeight: 'bold' }}>📍</span>
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', marginBottom: '5px', fontSize: '1rem' }}>Location</h4>
                    <p style={{ color: '#eaf0fb', margin: 0, fontSize: '0.9rem' }}>Galle, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: '#fff', marginBottom: '20px' }}>Follow Me</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="#" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#4a9eff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}>
                    <span style={{ color: '#0a1931', fontWeight: 'bold' }}>in</span>
                  </a>
                  <a href="#" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#4a9eff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}>
                    <span style={{ color: '#0a1931', fontWeight: 'bold' }}>git</span>
                  </a>
                  <a href="#" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#4a9eff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease'
                  }}>
                    <span style={{ color: '#0a1931', fontWeight: 'bold' }}>tw</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div style={{ 
              padding: '40px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: '#fff', marginBottom: '30px', fontSize: '1.8rem' }}>Send Me A Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: 'none',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      style={{
                        width: '100%',
                        padding: '15px 20px',
                        border: 'none',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      border: 'none',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="6"
                    required
                    style={{
                      width: '100%',
                      padding: '15px 20px',
                      border: 'none',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  style={{
                    background: '#4a9eff',
                    color: '#0a1931',
                    border: 'none',
                    padding: '15px 40px',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
