import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <section className="section brand-story animate-on-scroll">
        <div className="container">
          <div className="grid grid-2">
            <div className="story-content animate-on-scroll-left">
              <h2>Our Story</h2>
              <p>Inspired by the St. Bernard dog—an Alpine rescue icon known for its gentle nature, loyalty, and warmth—St. Bernard Coffee was created with the same spirit: to give warmth.</p>
              
              <p>For centuries, St. Bernards were not only guardians but also companions who saved travelers trapped in the snow. They didn't just rescue; they offered comfort and warmth in the most critical moments. This legacy of care and companionship is what we bring into our coffee experience.</p>
              
              <p>At St. Bernard Coffee, we're not just serving coffee—we're serving warmth, friendship, and a place where you truly belong.</p>
            </div>
            <div className="story-image-container animate-on-scroll-right">
              <img src="/assets/seminyak-store.webp" alt="St. Bernard Coffee Heritage" className="story-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section philosophy animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2>Our Philosophy</h2>
            <p>For us, coffee isn't just a drink—it's a way to make people feel at home.</p>
          </div>
          
          <div className="philosophy-grid">
            <div className="philosophy-card animate-on-scroll stagger-1">
              <div className="philosophy-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <h3>Warmth</h3>
              <p>Everyone who walks in isn't just a customer, but a friend</p>
            </div>
            
            <div className="philosophy-card animate-on-scroll stagger-2">
              <div className="philosophy-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3>Hospitality</h3>
              <p>We love remembering your name and your favorite order</p>
            </div>
            
            <div className="philosophy-card animate-on-scroll stagger-3">
              <div className="philosophy-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Companionship</h3>
              <p>Whether you're here to chill, laugh, or catch up</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section growth-story animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2>Our Growth Story</h2>
            <p>From one location to island-wide presence with ambitious plans for regional expansion</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-on-scroll stagger-1">
              <div className="timeline-marker">
                <div className="timeline-year">2023</div>
              </div>
              <div className="timeline-content">
                <h3>St Bernard Seminyak</h3>
                <p>Our flagship location opened in the heart of Seminyak, creating a warm gathering space for locals and travelers to connect over specialty coffee.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll stagger-2">
              <div className="timeline-marker">
                <div className="timeline-year">2024</div>
              </div>
              <div className="timeline-content">
                <h3>St Bernard Amed</h3>
                <p>Expanded to Bali's serene eastern coast, bringing our passion for quality coffee to the diving community and nature lovers in this tranquil coastal setting.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll stagger-3">
              <div className="timeline-marker">
                <div className="timeline-year">2025</div>
              </div>
              <div className="timeline-content">
                <h3>St Bernard Sanur (In Progress)</h3>
                <p>Our third location currently under development, continuing our growth across Bali's diverse landscapes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="cafe-locator animate-on-scroll">
        <div className="container">
          <div className="cafe-locator-header">
            <h2 className="cafe-locator-title">Our Locations</h2>
          </div>
          
          <div className="cafe-grid">
            <div className="cafe-card stagger-child animate-on-scroll stagger-1">
              <div className="cafe-image-container">
                <Link to="/store/seminyak">
                  <img src="/assets/seminyak-store.webp" alt="Valley Fair Location" className="cafe-image" />
                </Link>
              </div>
              <div className="cafe-info">
                <h3 className="cafe-name">ST BERNARD SEMINYAK</h3>
                <p className="cafe-address">Jl. Oberoi, Seminyak Beach<br/>Seminyak, Bali 80361</p>
              </div>
            </div>
            
            <div className="cafe-card stagger-child animate-on-scroll stagger-2">
              <div className="cafe-image-container">
                <Link to="/store/amed">
                  <img src="/assets/amed-store.webp" alt="Uncommons Location" className="cafe-image" />
                </Link>
              </div>
              <div className="cafe-info">
                <h3 className="cafe-name">ST BERNARD AMED</h3>
                <p className="cafe-address">Jl. Raya Amed Beach Road<br/>Amed, Bali 80852</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="section-xl contact-preview animate-on-scroll">
        <div className="container">
          <div className="contact-preview-content">
            <h2>Connect With Us</h2>
            <p>Ready to experience exceptional coffee? Visit any of our locations or get in touch to learn more about our expansion opportunities.</p>
            <div className="contact-buttons">
              <Link to="/contact" className="btn">Get In Touch</Link>
              <a href="https://wa.me/628232801099" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;