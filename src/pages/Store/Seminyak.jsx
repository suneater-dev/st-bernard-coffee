import { useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Store.css';

const Seminyak = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="store-page">
      <section className="store-hero">
        <img src="/assets/seminyak-store.webp" alt="Seminyak Store" className="store-hero-image" />
        <div className="store-hero-overlay"></div>
        <div className="store-hero-content">
          <h1>SEMINYAK</h1>
          <p>Flagship Location</p>
        </div>
      </section>

      <section className="store-details">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-location-info">
              <h2>Our Flagship</h2>
              
              <div className="info-block">
                <h3>Location</h3>
                <p>Jalan Dewi Saraswati III, Lingkungan Basangkasa<br/>Seminyak, Bali</p>
              </div>
              
              <div className="info-block">
                <h3>Hours</h3>
                <p><span className="highlight">Daily:</span> 7:00 AM - 10:00 PM<br/><span className="highlight">Kitchen:</span> 7:00 AM - 9:30 PM</p>
              </div>
              
              <div className="info-block">
                <h3>Contact</h3>
                <p><span className="highlight">Phone:</span> +62 361 8123 456<br/><span className="highlight">WhatsApp:</span> +62 812 3456 7890</p>
              </div>
              
              <a href="https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="menu-link">View Menu</a>
            </div>
            
            <div className="store-feature">
              <h3>Our Journey Begins</h3>
              <p>Our first coffee shop was proudly opened on March 7th, 2023, marking the beginning of our journey in the specialty coffee industry. This inaugural branch was designed to embody our vision of creating more than just a place to drink coffee—it serves as a warm and inviting space where people can gather, connect, and enjoy high-quality coffee in a cozy atmosphere.</p>
              
              <p>Strategically positioned in Seminyak—a destination known for its blend of local culture, tourism, and lifestyle—our first outlet quickly became a hub for both residents and travelers seeking an authentic coffee experience. Every detail, from the carefully crafted menu to the thoughtful design of the space, reflects our commitment to delivering consistency, quality, and a sense of belonging to every guest who walks through our doors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="store-gallery">
        <div className="container">
          <div className="gallery-header">
            <h2>Gallery</h2>
            <p>Explore the atmosphere and design of our Seminyak flagship</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  <span>Interior Design</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                  <span>Coffee Culture</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Community Space</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Signature Drinks</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span>Street View</span>
                </div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <div className="placeholder-content">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                  </svg>
                  <span>Ambiance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="store-map">
        <div className="container">
          <div className="map-header">
            <h2>Find Us</h2>
            <p>Located in the heart of Seminyak's vibrant district</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.16!3d-8.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDAnNDguMCJTIDExNcKwMDknMzYuMCJF!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid&q=Seminyak+Bali" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Bernard Coffee Seminyak Location">
            </iframe>
          </div>
        </div>
      </section>

      <section className="store-cta">
        <div className="container">
          <div className="store-cta-content">
            <h2>Visit Our Flagship</h2>
            <p>Experience the energy of Seminyak with exceptional coffee and sophisticated atmosphere</p>
            <div className="cta-buttons">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="cta-btn">Reserve Table</a>
              <a href="https://www.google.com/maps/dir//Jl.+Raya+Seminyak+No.+15,+Seminyak,+Kuta,+Badung+Regency,+Bali+80361" target="_blank" rel="noopener noreferrer" className="cta-btn-outline">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seminyak;