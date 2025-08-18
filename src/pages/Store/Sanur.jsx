import { useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Store.css';

const Sanur = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="store-page">
      <section className="store-hero">
        <img src="/assets/Studio_City_BlueBottleCoffee.jpg" alt="Sanur Store" className="store-hero-image" />
        <div className="store-hero-overlay"></div>
        <div className="store-hero-content">
          <h1>SANUR</h1>
          <p>Sunrise Sanctuary</p>
        </div>
      </section>

      <section className="store-details">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-location-info">
              <h2>Sunrise Rituals</h2>
              
              <div className="info-block">
                <h3>Location</h3>
                <p>Jl. Pantai Sanur No. 88<br/>Denpasar, Bali 80228</p>
              </div>
              
              <div className="info-block">
                <h3>Hours</h3>
                <p><span className="highlight">Daily:</span> 6:30 AM - 9:30 PM<br/><span className="highlight">Kitchen:</span> 6:30 AM - 9:00 PM</p>
              </div>
              
              <div className="info-block">
                <h3>Contact</h3>
                <p><span className="highlight">Phone:</span> +62 361 4567 890<br/><span className="highlight">WhatsApp:</span> +62 812 3456 7892</p>
              </div>
              
              <a href="https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="menu-link">View Menu</a>
            </div>
            
            <div className="store-feature">
              <h3>Beachfront Serenity</h3>
              <p>Our Sanur location embodies the tranquil spirit of Bali's original beach town. Positioned directly on the beachfront, this serene café offers the island's most spectacular sunrise coffee experiences with minimalist design and natural materials.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="store-map">
        <div className="container">
          <div className="map-header">
            <h2>Find Us</h2>
            <p>Beachfront location in Bali's most peaceful town</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6!2d115.26!3d-8.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDAnNDguMCJTIDExNcKwMTUnMzYuMCJF!5e0!3m2!1sen!2sid!4v1635123456791!5m2!1sen!2sid&q=Sanur+Beach+Bali" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Bernard Coffee Sanur Location">
            </iframe>
          </div>
        </div>
      </section>

      <section className="store-cta">
        <div className="container">
          <div className="store-cta-content">
            <h2>Sunrise Coffee Ceremony</h2>
            <p>Experience Bali's most peaceful beach town with spectacular sunrise views and tranquil coffee rituals</p>
            <div className="cta-buttons">
              <a href="https://wa.me/6281234567892" target="_blank" rel="noopener noreferrer" className="cta-btn">Reserve Table</a>
              <a href="https://www.google.com/maps/dir//Jl.+Pantai+Sanur+No.+88,+Sanur+Kaja,+Denpasar+Selatan,+Denpasar+City,+Bali+80228" target="_blank" rel="noopener noreferrer" className="cta-btn-outline">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sanur;