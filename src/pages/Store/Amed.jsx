import { useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Store.css';

const Amed = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="store-page">
      <section className="store-hero">
        <img src="/assets/amed-store.webp" alt="Amed Store" className="store-hero-image" />
        <div className="store-hero-overlay"></div>
        <div className="store-hero-content">
          <h1>AMED</h1>
          <p>Coastal Paradise</p>
        </div>
      </section>

      <section className="store-details">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-location-info">
              <h2>Coastal Serenity</h2>
              
              <div className="info-block">
                <h3>Location</h3>
                <p>Jalan I Ketut Natih, Purwakerti<br/>Kecamatan Abang, Kabupaten Karangasem, Amed</p>
              </div>
              
              <div className="info-block">
                <h3>Hours</h3>
                <p><span className="highlight">Daily:</span> 7:00 AM - 9:00 PM<br/><span className="highlight">Kitchen:</span> 7:00 AM - 8:30 PM</p>
              </div>
              
              <div className="info-block">
                <h3>Contact</h3>
                <p><span className="highlight">Phone:</span> +62 363 2345 678<br/><span className="highlight">WhatsApp:</span> +62 812 3456 7891</p>
              </div>
              
              <a href="https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="menu-link">View Menu</a>
            </div>
            
            <div className="store-feature">
              <h3>Expanding Our Horizons</h3>
              <p>Our second coffee shop was officially opened on March 3rd, 2024, expanding our presence to the eastern coastline of Bali. Located right in the heart of Amed, a region celebrated for its natural beauty, diving spots, and serene coastal lifestyle.</p>
              
              <p>This branch was established to bring our passion for specialty coffee to a destination known for its laid-back charm and connection with nature. Unlike the bustling energy of Seminyak, Amed offers a more tranquil backdrop, and our coffee shop was thoughtfully designed to complement that atmosphere—providing a cozy refuge where both locals and travelers can slow down, recharge, and savor every cup.</p>
              
              <p>By opening in Amed, we extended our mission of creating spaces that blend high-quality coffee with community and culture. With its scenic location and welcoming design, this second outlet stands as a bridge between Bali's vibrant tourism and its authentic local character, offering guests a memorable coffee experience that resonates with the spirit of the island.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="store-gallery">
        <div className="container">
          <div className="gallery-header">
            <h2>Gallery</h2>
            <p>Discover the tranquil beauty and coastal charm of our Amed location</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/assets/gallery-amed/1-09281.JPG" alt="Ocean Views" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery-amed/1-09289.JPG" alt="Coastal Coffee" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery-amed/1-09296.JPG" alt="Traditional Design" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery-amed/1-09300.JPG" alt="Serene Atmosphere" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery-amed/1-09304 (1).JPG" alt="Diving Culture" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="/assets/gallery-amed/1-09690.JPG" alt="Local Heritage" className="gallery-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="store-map">
        <div className="container">
          <div className="map-header">
            <h2>Find Us</h2>
            <p>Located on the scenic coast of East Bali</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8!2d115.67!3d-8.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjAnMjQuMCJTIDExNcKwNDAnMTIuMCJF!5e0!3m2!1sen!2sid!4v1635123456790!5m2!1sen!2sid&q=Amed+Bali" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Bernard Coffee Amed Location">
            </iframe>
          </div>
        </div>
      </section>

      <section className="store-cta">
        <div className="container">
          <div className="store-cta-content">
            <h2>Coastal Coffee Experience</h2>
            <p>Discover Bali's hidden paradise with world-class diving and traditional fishing culture</p>
            <div className="cta-buttons">
              <a href="https://wa.me/6281234567891" target="_blank" rel="noopener noreferrer" className="cta-btn">Reserve Table</a>
              <a href="https://www.google.com/maps/dir//Jl.+Raya+Amed,+Purwakerthi,+Abang,+Karangasem+Regency,+Bali+80852" target="_blank" rel="noopener noreferrer" className="cta-btn-outline">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amed;