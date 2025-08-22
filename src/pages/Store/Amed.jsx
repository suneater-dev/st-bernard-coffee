import { useEffect, useState } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Store.css';

const Amed = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const galleryImages = [
    { src: '/assets/gallery-amed/1-09281.JPG', alt: 'Ocean Views' },
    { src: '/assets/gallery-amed/1-09289.JPG', alt: 'Coastal Coffee' },
    { src: '/assets/gallery-amed/1-09296.JPG', alt: 'Traditional Design' },
    { src: '/assets/gallery-amed/1-09300.JPG', alt: 'Serene Atmosphere' },
    { src: '/assets/gallery-amed/1-09304 (1).JPG', alt: 'Diving Culture' },
    { src: '/assets/gallery-amed/1-09690.JPG', alt: 'Local Heritage' }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const observer = initScrollAnimations();
    
    const handleKeyPress = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [lightboxOpen]);

  return (
    <div className="store-page">
      <section className="store-hero">
        <img src="/assets/amed-store.webp" alt="Amed Store" className="store-hero-image" />
        <div className="store-hero-overlay"></div>
        <div className="store-hero-content">
          <h1>AMED</h1>
        </div>
      </section>

      <section className="store-details">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-location-info">
              <h2>Amed Outlet</h2>
              
              <div className="info-block">
                <h3>Location</h3>
                <p>Jl. I Ketut Natih, Purwakerti, Kec. Abang<br/>Kabupaten Karangasem, Bali 80852</p>
              </div>
              
              <div className="info-block">
                <h3>Hours</h3>
                <p><span className="highlight">Daily:</span> 7:00 AM - 5:00 PM</p>
              </div>
              
              <div className="info-block">
                <h3>Contact</h3>
                <p><span className="highlight">Phone:</span> +62 821-4414-4967<br/><span className="highlight">WhatsApp:</span> +62 821-4414-4967</p>
              </div>
              
              <a href="https://drive.google.com/drive/folders/13NZIVXqsmkgHdcGC74UencAVr9RkNWfG" target="_blank" rel="noopener noreferrer" className="menu-link">View Menu</a>
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
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
              </div>
            ))}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8!2d115.6373199!3d-8.3344274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2010003c5af9d:0x13f0c91d2eddb1b2!2sst%20bernard%20coffee%20-%20Amed!5e0!3m2!1sen!2sid!4v1635123456790!5m2!1sen!2sid" 
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
              <a href="https://wa.me/628214144967" target="_blank" rel="noopener noreferrer" className="cta-btn">Reserve Table</a>
              <a href="https://www.google.com/maps/place/st+bernard+coffee+-+Amed/@-8.3344641,115.6372075,20.72z/data=!4m6!3m5!1s0x2dd2010003c5af9d:0x13f0c91d2eddb1b2!8m2!3d-8.3344274!4d115.6373199!16s%2Fg%2F11vqprvg74?entry=tts" target="_blank" rel="noopener noreferrer" className="cta-btn-outline">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].alt}
              className="lightbox-image"
            />
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
            
            <div className="lightbox-counter">
              {currentImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Amed;