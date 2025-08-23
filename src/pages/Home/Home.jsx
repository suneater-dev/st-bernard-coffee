import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { initScrollAnimations, wrapPageContent } from '../../components/ScrollAnimations';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/slide-4.webp',
    '/assets/slide-5.webp',
    '/assets/slide-6.webp'
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
          <p>Inspired by the St. Bernard dog—an Alpine rescue icon known for its gentle nature, loyalty, and warmth—St. Bernard Coffee was created with the same spirit: to give warmth.</p>
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
              <p>At St. Bernard Coffee, we're not just serving coffee—we're serving warmth, friendship, and a place where you truly belong.</p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </div>
            <div className="about-image animate-on-scroll-right">
              <img src="/assets/ourstory.PNG" alt="St. Bernard Coffee" className="about-logo-image" />
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
                  <img src="/assets/seminyak-store.webp" alt="Seminyak Store" className="cafe-image" />
                </Link>
              </div>
              <div className="cafe-info">
                <h3 className="cafe-name">ST BERNARD SEMINYAK</h3>
                <p className="cafe-address">Jl. Dewi Saraswati 3, lingkungan Jl. Raya Basangkasa<br/>Seminyak, Bali</p>
              </div>
            </div>
            
            <div className="cafe-card stagger-child animate-on-scroll stagger-2">
              <div className="cafe-image-container">
                <Link to="/store/amed">
                  <img src="/assets/amed-store.webp" alt="Amed Store" className="cafe-image" />
                </Link>
              </div>
              <div className="cafe-info">
                <h3 className="cafe-name">ST BERNARD AMED</h3>
                <p className="cafe-address">Jl. I Ketut Natih, Purwakerti, Kec. Abang<br/>Kabupaten Karangasem, Bali 80852</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="section about-cta animate-on-scroll">
        <div className="container">
          <div className="about-cta-content">
            <h2>Experience St. Bernard Coffee</h2>
            <p>Ready to taste the difference that passion and craftsmanship make? Visit one of our locations or explore our full menu of signature drinks and fresh offerings.</p>
            <div className="about-cta-buttons">
              <Link to="/menu" className="btn">Explore Our Menu</Link>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;