import { useState, useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: 'general'
  });

  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content animate-on-scroll">
            <h1>Connect With Us</h1>
            <p>We're here to help with any questions or inquiries</p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-form-section animate-on-scroll">
              <h2>Send Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering Services</option>
                    <option value="events">Private Events</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="franchise">Franchise Information</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="8"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-submit-btn">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info-section animate-on-scroll">
              <div className="contact-info-block">
                <h3>Get in Touch</h3>
                <div className="info-item">
                  <span className="info-label">General</span>
                  <p>hello@stbernardcoffee.com<br/>+62 812 3456 7890</p>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Business</span>
                  <p>partnerships@stbernardcoffee.com<br/>+62 811 2345 6789</p>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Investment</span>
                  <p>investors@stbernardcoffee.com<br/>+62 813 4567 8901</p>
                </div>
              </div>
              
              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://instagram.com/stbernardcoffee" target="_blank" rel="noopener noreferrer" className="social-link">
                    Instagram
                  </a>
                  <a href="https://facebook.com/stbernardcoffee" target="_blank" rel="noopener noreferrer" className="social-link">
                    Facebook
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="social-link">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-header animate-on-scroll">
            <h2>Common Questions</h2>
          </div>
          
          <div className="faq-list">
            <div className="faq-item animate-on-scroll stagger-1">
              <h4>Do you offer catering services?</h4>
              <p>Yes, we provide catering for corporate events and special occasions with our signature beverages and gourmet options.</p>
            </div>
            
            <div className="faq-item animate-on-scroll stagger-2">
              <h4>Can I book private events?</h4>
              <p>All locations accommodate private events during designated hours. Our Seminyak flagship has dedicated private spaces.</p>
            </div>
            
            <div className="faq-item animate-on-scroll stagger-3">
              <h4>Do you have franchise opportunities?</h4>
              <p>We're exploring franchise partnerships as part of our expansion strategy. Contact our partnerships team for details.</p>
            </div>
            
            <div className="faq-item animate-on-scroll stagger-4">
              <h4>Are you seeking investors?</h4>
              <p>Yes, we're actively seeking strategic investors to support our growth across Indonesia and Southeast Asia.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;