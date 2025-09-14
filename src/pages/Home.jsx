import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO, HeroBanner } from '../components/ui';
import { useSEO, generateStructuredData } from '../hooks/useSEO';
import '../styles/homepage.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const seoData = useSEO();
  const organizationSchema = generateStructuredData('organization');
  
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const aboutContainerRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About Section Animation
      gsap.fromTo(aboutRef.current.children, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Gradient Border Rotation Animation
      gsap.to(aboutContainerRef.current, {
        "--gradient-rotation": "360deg",
        duration: 10,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Services Cards Animation
      gsap.fromTo(servicesRef.current.querySelectorAll('.service-card'), {
        y: 60,
        opacity: 0,
        scale: 0.9
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Stats Counter Animation
      const statNumbers = statsRef.current.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        gsap.fromTo(stat, {
          textContent: 0
        }, {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Mission Vision Cards
      gsap.fromTo(missionRef.current.querySelectorAll('.mission-card'), {
        x: -100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Testimonials Slide In
      gsap.fromTo(testimonialsRef.current.querySelectorAll('.testimonial-card'), {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Final CTA Animation
      gsap.fromTo(ctaRef.current, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="homepage">
      <SEO 
        {...seoData}
        schema={organizationSchema}
      />
      
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* About Section */}
      <section ref={aboutRef} className="about-preview">
        <div className="container">
          <div ref={aboutContainerRef} className="about-container-wrapper">
            <div className="about-content">
              <div className="about-text">
                <h2>About <span className="highlight">TaxEva</span></h2>
                <p className="about-description">
                  We are transforming the way businesses and individuals approach taxation, 
                  combining cutting-edge AI technology with deep financial expertise to deliver 
                  unparalleled tax solutions that simplify complexity.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">🚀</div>
                    <span>AI-Powered</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🛡️</div>
                    <span>Secure</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <span>Fast Processing</span>
                  </div>
                </div>
                <Link to="/about" className="learn-more-btn">
                  Learn More About Us
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">10000</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99</div>
                  <div className="stat-label">Success Rate %</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-showcase">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Tax Preparation</h3>
              <p>Comprehensive tax preparation services for individuals and businesses with maximum refunds guaranteed.</p>
              <ul className="service-features">
                <li>Individual Tax Returns</li>
                <li>Business Tax Filing</li>
                <li>Quarterly Estimates</li>
              </ul>
            </div>
            <div className="service-card featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-icon">🔧</div>
              <h3>GST & Compliance</h3>
              <p>Complete GST filing, compliance management, and regulatory support to keep your business on track.</p>
              <ul className="service-features">
                <li>GST Registration</li>
                <li>Monthly/Quarterly Filing</li>
                <li>Compliance Audit</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Financial Consulting</h3>
              <p>Strategic financial planning and consulting services to optimize your financial performance and growth.</p>
              <ul className="service-features">
                <li>Financial Planning</li>
                <li>Investment Advisory</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="stats-section">
        <div className="container">
          <h2 className="section-title">Trusted by Thousands</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10000</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25000</div>
              <div className="stat-label">Tax Returns Filed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500</div>
              <div className="stat-label">Business Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99</div>
              <div className="stat-label">Accuracy Rate %</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="mission-vision-home">
        <div className="container">
          <div className="mv-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To democratize access to professional tax services through innovative technology, 
                making expert financial guidance accessible to everyone.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To become the global leader in AI-powered tax solutions, creating a world where 
                financial compliance is effortless and transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"TaxEva transformed our business tax processes. Their AI-powered solutions saved us hours of work and thousands in potential penalties."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">RS</div>
                <div className="author-info">
                  <div className="author-name">Ravi Sharma</div>
                  <div className="author-title">CEO, TechStart Solutions</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The expertise and technology at TaxEva are unmatched. They made complex GST compliance seem effortless for our growing business."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">PM</div>
                <div className="author-info">
                  <div className="author-name">Priya Mehta</div>
                  <div className="author-title">Founder, Creative Agency Co</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Outstanding service! TaxEva's team helped us maximize our refunds while ensuring complete compliance. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <div className="author-info">
                  <div className="author-name">Amit Kumar</div>
                  <div className="author-title">Small Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="homepage-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Tax Experience?</h2>
            <p>Join thousands of satisfied clients who trust TaxEva with their financial future. Get started today and experience the difference.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">
                Get Started Now
                <span className="btn-glow"></span>
              </Link>
              <Link to="/solutions" className="btn-secondary">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;