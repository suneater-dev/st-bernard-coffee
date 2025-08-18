import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { initScrollAnimations, wrapPageContent } from '../../components/ScrollAnimations';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/slide-1.jpg',
    '/assets/slide-2.jpg',
    '/assets/slide-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Initialize page transitions and scroll animations
    wrapPageContent();
    const observer = initScrollAnimations();

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
          <button className="hero-arrow hero-arrow-prev" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="hero-arrow hero-arrow-next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
        <div className="hero-content">
          <h1><span>Built on Warmth,</span><br/><span>Brewed with Purpose</span></h1>
          <p>Experience the finest single-origin coffee in Bali's most beautiful locations. From our flagship Seminyak store to our scenic coastal Amed location, discover exceptional coffee crafted with passion.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Explore Menu</Link>
            <Link to="/store/seminyak" className="btn btn-outline">Visit Our Stores</Link>
          </div>
        </div>
      </section>

      <section className="section-xl about-preview animate-on-scroll">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content animate-on-scroll-left">
              <h2>Our Story</h2>
              <p>Inspired by the St. Bernard dog—an Alpine rescue icon known for its gentle nature, loyalty, and warmth—St. Bernard Coffee was created with the same spirit: to give warmth.</p>
              <p>Just as St. Bernards offered comfort and warmth to travelers in their most critical moments, we bring that legacy of care and companionship into every coffee experience. Founded in Bali, we've grown from a single location to three thriving cafés, each embodying our philosophy of warmth, hospitality, and true companionship.</p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </div>
            <div className="about-image animate-on-scroll-right">
              <img src="/assets/logo.png" alt="St. Bernard Coffee" className="about-logo-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section best-sellers animate-on-scroll">
        <div className="container">
          <h2 className="best-sellers-title">Signature Selection</h2>
          
          <div className="best-sellers-grid">
            <div className="best-seller-item stagger-child animate-on-scroll stagger-1">
              <img src="/assets/Latte.jpg" alt="Signature Latte" className="best-seller-image" />
              <div className="best-seller-content">
                <h3>Signature Latte</h3>
                <p>Creamy steamed milk with rich espresso</p>
                <div className="product-category">ESPRESSO DRINKS</div>
              </div>
            </div>
            
            <div className="best-seller-item stagger-child animate-on-scroll stagger-2">
              <img src="/assets/beautiful mistake.jpg" alt="Beautiful Mistake" className="best-seller-image" />
              <div className="best-seller-content">
                <h3>Beautiful Mistake</h3>
                <p>Black coffee with fresh orange slice</p>
                <div className="product-category">SPECIALTY</div>
              </div>
            </div>
            
            <div className="best-seller-item stagger-child animate-on-scroll stagger-3">
              <img src="/assets/v60.jpg" alt="Single Origin" className="best-seller-image" />
              <div className="best-seller-content">
                <h3>Single Origin</h3>
                <p>Pour-over perfection with premium beans</p>
                <div className="product-category">SINGLE ORIGIN</div>
              </div>
            </div>
            
            <div className="best-seller-item stagger-child animate-on-scroll stagger-4">
              <img src="/assets/bread.jpg" alt="Artisan Sourdough" className="best-seller-image" />
              <div className="best-seller-content">
                <h3>Artisan Sourdough</h3>
                <p>Freshly baked daily with organic flour</p>
                <div className="product-category">FRESH BAKED</div>
              </div>
            </div>
          </div>
          
          <div className="shop-now-cta animate-on-scroll">
            <Link to="/menu" className="btn-shop-now">SEE MENU</Link>
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
                  <img src="/assets/Valley_Fair_Blue_Bottle_for_web.webp" alt="Valley Fair Location" className="cafe-image" />
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
                  <img src="/assets/M7_LVUncommons_Desktop.jpg" alt="Uncommons Location" className="cafe-image" />
                </Link>
              </div>
              <div className="cafe-info">
                <h3 className="cafe-name">ST BERNARD AMED</h3>
                <p className="cafe-address">Jl. Raya Amed Beach Road<br/>Amed, Bali 80852</p>
              </div>
            </div>
            
            <div className="cafe-card stagger-child animate-on-scroll stagger-3">
              <div className="cafe-image-container">
                <Link to="/store/sanur">
                  <img src="/assets/Studio_City_BlueBottleCoffee.jpg" alt="Studio City Location" className="cafe-image" />
                </Link>
              </div>
              <div className="cafe-info">
                <h3 className="cafe-name">ST BERNARD SANUR</h3>
                <p className="cafe-address">Jl. Pantai Sanur Beach Walk<br/>Sanur, Bali 80228</p>
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
              <a href="https://wa.me/6281234567890" className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;