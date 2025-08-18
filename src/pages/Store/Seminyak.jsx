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
                <p>Jl. Raya Seminyak No. 15<br/>Seminyak, Bali 80361</p>
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
              <h3>Urban Coffee Culture</h3>
              <p>Our flagship Seminyak location represents the pinnacle of coffee craftsmanship and design. Located in Bali's most vibrant district, this sophisticated space serves as our main hub for innovation and exceptional coffee experiences.</p>
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