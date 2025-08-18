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