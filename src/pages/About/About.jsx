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
              <h2>Our Journey</h2>
              <p>St. Bernard Coffee began as a vision to elevate Indonesia's rich coffee heritage through modern brewing techniques and uncompromising quality standards. Founded with passion in the heart of Seminyak, we've grown from a single location to three thriving cafés across Bali.</p>
              
              <p>Our commitment to excellence starts with direct relationships with local farmers in Java and Sumatra, ensuring fair prices while securing the finest single-origin beans. Each cup represents our dedication to sustainability, quality, and the artistry of coffee crafting.</p>
              
              <p>What sets us apart is our unique approach to blending traditional Indonesian coffee culture with international café standards, creating an atmosphere that appeals to both discerning locals and international coffee enthusiasts.</p>
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