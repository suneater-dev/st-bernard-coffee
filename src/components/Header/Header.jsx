import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show header at top
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>St. Bernard Coffee</h1>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            
            <div 
              className="dropdown"
              onMouseEnter={() => setIsStoreDropdownOpen(true)}
              onMouseLeave={() => setIsStoreDropdownOpen(false)}
            >
              <span className="nav-link dropdown-trigger">
                Store
                <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8">
                  <path d="M6 8L0 0h12z" fill="currentColor"/>
                </svg>
              </span>
              <div className={`dropdown-menu ${isStoreDropdownOpen ? 'dropdown-menu-open' : ''}`}>
                <Link to="/store/seminyak" className="dropdown-link">Seminyak</Link>
                <Link to="/store/amed" className="dropdown-link">Amed</Link>
                <Link to="/store/sanur" className="dropdown-link">Sanur</Link>
              </div>
            </div>
            
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          <div className="header-social">
            <a href="https://www.instagram.com/st.bernardcoffee/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
                <path d="M9 10a3 3 0 0 0 6 0c0-1 0-1 0-1"/>
                <path d="M15 9.4c0 .6-.4 1.6-1.5 2.6-1.1 1-2.5 1-2.5 1s-1.4 0-2.5-1C7.4 11 7 10 7 9.4"/>
              </svg>
            </a>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;