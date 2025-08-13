import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [messageText, setMessageText] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('btDkJsyhjqEEgEdQE');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        time: new Date().toLocaleString()
      };

      console.log('Attempting to send email...');
      console.log('Service ID:', 'senitha_tk');
      console.log('Template ID:', 'template_i6t91ii');
      console.log('Public Key:', 'btDkJsyhjqEEgEdQE');
      console.log('Template Params:', templateParams);

      // Test EmailJS connection first
      console.log('EmailJS object:', emailjs);

      // EmailJS configuration with your actual credentials
      const result = await emailjs.send(
        'service_k94x3rn',           // Your EmailJS service ID
        'template_i6t91ii',     // Your EmailJS template ID
        templateParams,         // Template parameters
        'btDkJsyhjqEEgEdQE'     // Your EmailJS public key
      );

      console.log('SUCCESS: Email sent successfully!');
      console.log('Result:', result);
      
      // Show success message
      setMessageType('success');
      setMessageText('Message sent successfully! I will get back to you soon.');
      setShowMessage(true);
      
      // Hide message after 5 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('ERROR: Email sending failed');
      console.error('Error object:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      console.error('Error message:', error.message);
      
      // More detailed error message
      let errorMsg = 'Failed to send message. ';
      if (error.status === 400) {
        errorMsg += 'Template or service configuration error. ';
      } else if (error.status === 401) {
        errorMsg += 'Authentication error. Check your credentials. ';
      } else if (error.status === 404) {
        errorMsg += 'Service or template not found. ';
      }
      errorMsg += 'Please try again or contact me directly.';
      
      // Show error message
      setMessageType('error');
      setMessageText(errorMsg);
      setShowMessage(true);
      
      // Hide message after 5 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" style={{ 
      padding: '80px 0', 
      background: 'linear-gradient(180deg, #151515 0%, #0a1931 30%, #185adb 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="text-center mb-5 scroll-animate">
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
          <div className="col-lg-4 mb-5 scroll-animate-left">
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
          <div className="col-lg-8 scroll-animate-right">
            <div style={{ 
              padding: '40px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              position: 'relative'
            }}>
              <h3 style={{ color: '#fff', marginBottom: '30px', fontSize: '1.8rem' }}>Send Me A Message</h3>
              
              {/* Custom Message Popup */}
              {showMessage && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: messageType === 'success' 
                    ? 'linear-gradient(135deg, rgba(10, 25, 49, 0.95) 0%, rgba(44, 90, 160, 0.95) 100%)'
                    : 'linear-gradient(135deg, rgba(10, 25, 49, 0.95) 0%, rgba(185, 24, 91, 0.95) 100%)',
                  color: '#fff',
                  padding: '20px 30px',
                  borderRadius: '15px',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  zIndex: 1000,
                  backdropFilter: 'blur(15px)',
                  border: messageType === 'success' 
                    ? '2px solid rgba(74, 158, 255, 0.6)' 
                    : '2px solid rgba(255, 107, 107, 0.6)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  maxWidth: '400px',
                  textAlign: 'center',
                  animation: 'slideIn 0.3s ease-out'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>
                      {messageType === 'success' ? '✅' : '❌'}
                    </span>
                    <span>{messageText}</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                
                <div className="row">
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
                  <div className="col-md-6 mb-3">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone Number"
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
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
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
