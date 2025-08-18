import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { initScrollAnimations } from '../../components/ScrollAnimations';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <section className="section brand-story animate-on-scroll">
        <div className="container">
          <div className="grid grid-2">
            <div className="story-content animate-on-scroll-left">
              <h2>Our Story</h2>
              <p>Inspired by the St. Bernard dog—an Alpine rescue icon known for its gentle nature, loyalty, and warmth—St. Bernard Coffee was created with the same spirit: to give warmth.</p>
              
              <p>For centuries, St. Bernards were not only guardians but also companions who saved travelers trapped in the snow. They didn't just rescue; they offered comfort and warmth in the most critical moments. This legacy of care and companionship is what we bring into our coffee experience.</p>
              
              <p>Founded with passion in the heart of Seminyak, we've grown from a single location to three thriving cafés across Bali, elevating Indonesia's rich coffee heritage through modern brewing techniques while maintaining that essential spirit of warmth and hospitality that defines us.</p>
            </div>
            <div className="story-image-container animate-on-scroll-right">
              <img src="/assets/slide-3.jpg" alt="St. Bernard Coffee Heritage" className="story-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section growth-story animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2>Our Growth Story</h2>
            <p>From one location to island-wide presence with ambitious plans for regional expansion</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-on-scroll stagger-1">
              <div className="timeline-marker">
                <div className="timeline-year">2019</div>
              </div>
              <div className="timeline-content">
                <h3>Seminyak Flagship Opens</h3>
                <p>Our journey began with our flagship location in Seminyak, quickly becoming a favorite among locals and tourists for its exceptional coffee and sophisticated atmosphere.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll stagger-2">
              <div className="timeline-marker">
                <div className="timeline-year">2021</div>
              </div>
              <div className="timeline-content">
                <h3>Amed Coastal Expansion</h3>
                <p>Recognizing the demand for quality coffee across Bali, we opened our scenic Amed location, combining breathtaking ocean views with our signature coffee experience.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll stagger-3">
              <div className="timeline-marker">
                <div className="timeline-year">2023</div>
              </div>
              <div className="timeline-content">
                <h3>Sanur Beachfront Launch</h3>
                <p>Our third location in Sanur solidified our presence across Bali's key destinations, offering sunrise coffee experiences that have become legendary among early risers.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll stagger-4">
              <div className="timeline-marker">
                <div className="timeline-year">2025</div>
              </div>
              <div className="timeline-content">
                <h3>Expansion & Innovation</h3>
                <p>With proven success across three locations and growing recognition, we're positioned for strategic expansion while continuing to innovate our coffee experiences and sustainable practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section philosophy animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2>Our Philosophy</h2>
            <p>For us, coffee isn't just a drink—it's a way to make people feel at home.</p>
          </div>
          
          <div className="philosophy-grid">
            <div className="philosophy-card animate-on-scroll stagger-1">
              <div className="philosophy-icon">☕</div>
              <h3>Warmth</h3>
              <p>Everyone who walks in isn't just a customer, but a friend. We believe in creating a welcoming atmosphere where every person feels valued and comfortable.</p>
            </div>
            
            <div className="philosophy-card animate-on-scroll stagger-2">
              <div className="philosophy-icon">🤝</div>
              <h3>Hospitality</h3>
              <p>We love remembering your name, your favorite order, and making every visit feel personal. True hospitality is about the connections we build with each guest.</p>
            </div>
            
            <div className="philosophy-card animate-on-scroll stagger-3">
              <div className="philosophy-icon">❤️</div>
              <h3>Companionship</h3>
              <p>Whether you're here to chill, laugh, or catch up, our café is your go-to spot. We're here to be part of your daily moments and special memories.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Meet the visionaries behind St. Bernard Coffee's success</p>
          </div>
          
          <div className="team-list">
            <div className="team-member animate-on-scroll stagger-1">
              <div className="team-info">
                <h3>Marcus St. Bernard</h3>
                <p className="team-title">Founder & CEO</p>
                <p className="team-description">With over 15 years in the hospitality industry and a passion for specialty coffee, Marcus founded St. Bernard Coffee to bridge the gap between traditional Indonesian coffee culture and modern café experiences. His vision has guided the company's strategic growth and commitment to excellence.</p>
              </div>
            </div>
            
            <div className="team-member animate-on-scroll stagger-2">
              <div className="team-info">
                <h3>Sarah Mitchell</h3>
                <p className="team-title">Head of Operations</p>
                <p className="team-description">Sarah brings extensive experience in multi-location retail operations and sustainable supply chain management. She oversees our quality standards, supplier relationships, and expansion planning, ensuring consistent excellence across all locations.</p>
              </div>
            </div>
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

export default About;