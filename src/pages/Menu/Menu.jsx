import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Menu.css';

const Menu = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="menu">
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero-content animate-on-scroll">
            <h1>Our Menu</h1>
            <p>Discover exceptional coffee and culinary experiences at each of our three premium locations</p>
          </div>
        </div>
      </section>

      <section className="menu-locations">
        <div className="container">
          <div className="menu-locations-grid">
            <div className="menu-location-card animate-on-scroll stagger-1">
              <div className="menu-location-image">
                <img src="/assets/seminyak-store.webp" alt="Seminyak Location" />
                <div className="menu-location-overlay">
                  <h2>SEMINYAK MENU</h2>
                  <a href="https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="menu-location-btn">View Full Menu</a>
                </div>
              </div>
            </div>
            
            <div className="menu-location-card animate-on-scroll stagger-2">
              <div className="menu-location-image">
                <img src="/assets/amed-store.webp" alt="Amed Location" />
                <div className="menu-location-overlay">
                  <h2>AMED MENU</h2>
                  <a href="https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="menu-location-btn">View Full Menu</a>
                </div>
              </div>
            </div>
            
            <div className="menu-location-card animate-on-scroll stagger-3">
              <div className="menu-location-image">
                <img src="/assets/sanur-store.webp" alt="Sanur Location" />
                <div className="menu-location-overlay">
                  <h2>SANUR MENU</h2>
                  <a href="https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="menu-location-btn">View Full Menu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section menu-cta animate-on-scroll">
        <div className="container">
          <div className="menu-cta-content">
            <h2>Can't Decide?</h2>
            <p>Each location offers our signature drinks and local specialties. Visit any location to experience our full menu, or contact us for custom catering options.</p>
            <div className="menu-cta-buttons">
              <Link to="/contact" className="btn">Contact Us</Link>
              <a href="https://wa.me/6281234567890" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;