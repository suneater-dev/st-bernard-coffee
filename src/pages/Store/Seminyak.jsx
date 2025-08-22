import { useEffect, useState } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './Store.css';

const Seminyak = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const galleryImages = [
    { src: '/assets/gallery-seminyak/1-09818.JPG', alt: 'Interior Design' },
    { src: '/assets/gallery-seminyak/1-09837.JPG', alt: 'Coffee Culture' },
    { src: '/assets/gallery-seminyak/1-09842.JPG', alt: 'Community Space' },
    { src: '/assets/gallery-seminyak/1-09856.JPG', alt: 'Signature Drinks' },
    { src: '/assets/gallery-seminyak/1-09863.JPG', alt: 'Street View' },
    { src: '/assets/gallery-seminyak/1-09909.JPG', alt: 'Ambiance' }
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
        <img src="/assets/seminyak-store.webp" alt="Seminyak Store" className="store-hero-image" />
        <div className="store-hero-overlay"></div>
        <div className="store-hero-content">
          <h1>SEMINYAK</h1>
        </div>
      </section>

      <section className="store-details">
        <div className="container">
          <div className="store-info-grid">
            <div className="store-location-info">
              <h2>Seminyak Outlet</h2>
              
              <div className="info-block">
                <h3>Location</h3>
                <p>Jl. Dewi Saraswati 3, lingkungan Jl. Raya Basangkasa<br/>Seminyak, Bali</p>
              </div>
              
              <div className="info-block">
                <h3>Hours</h3>
                <p><span className="highlight">Daily:</span> 7:00 AM - 5:00 PM</p>
              </div>
              
              <div className="info-block">
                <h3>Contact</h3>
                <p><span className="highlight">Phone:</span> +62 823-2880-1099<br/><span className="highlight">WhatsApp:</span> +62 823-2880-1099</p>
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
            <p>Located in the heart of Seminyak's vibrant district</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.1723713!3d-8.6861885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2476bdd6c184d:0x7d6575afaef71cc1!2sst.%20bernard%20coffee!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid" 
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
              <a href="https://wa.me/628232801099" target="_blank" rel="noopener noreferrer" className="cta-btn">Reserve Table</a>
              <a href="https://www.google.com/maps/place/st.+bernard+coffee/@-8.6861832,115.169791,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd2476bdd6c184d:0x7d6575afaef71cc1!8m2!3d-8.6861885!4d115.1723713!16s%2Fg%2F11sjyw2d_3?entry=tts" target="_blank" rel="noopener noreferrer" className="cta-btn-outline">Get Directions</a>
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

export default Seminyak;