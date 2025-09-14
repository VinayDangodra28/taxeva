import { SEO } from '../components/ui';
import { useSEO, generateStructuredData } from '../hooks/useSEO';
import '../styles/about.css';

const About = () => {
  const seoData = {
    ...useSEO(),
    title: 'About TaxEva - Your Trusted Tax & Finance Partner',
    description: 'Learn about TaxEva\'s mission to simplify taxes with cutting-edge technology and expert knowledge. Discover our team, values, and commitment to your financial success.',
    keywords: 'about taxeva, tax experts, financial consultants, company history, our mission, tax technology'
  };
  const localBusinessSchema = generateStructuredData('localBusiness');

  return (
    <div className="about-page">
      <SEO 
        {...seoData}
        schema={localBusinessSchema}
      />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>About <span className="brand-highlight">TaxEva</span></h1>
            <p className="about-hero-subtitle">
              Where Finance Intelligence meets Tax Excellence
            </p>
            <p className="about-hero-description">
              We are transforming the way businesses and individuals approach taxation, 
              combining cutting-edge technology with deep financial expertise to deliver 
              unparalleled tax solutions.
            </p>
          </div>
          <div className="about-hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To simplify complex tax processes through innovative technology and expert guidance, 
                empowering businesses and individuals to achieve their financial goals with confidence.
              </p>
            </div>
            <div className="mv-card vision-card">
              <div className="mv-icon">🔮</div>
              <h3>Our Vision</h3>
              <p>
                To become the leading global platform where finance intelligence seamlessly 
                integrates with tax excellence, creating a world where taxation is transparent, 
                efficient, and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h4>Trust & Integrity</h4>
              <p>Building lasting relationships through transparent practices and ethical standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Innovation</h4>
              <p>Leveraging cutting-edge technology to simplify complex financial processes.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Precision</h4>
              <p>Delivering accurate results with meticulous attention to detail.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Client-Centric</h4>
              <p>Putting your success at the center of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Expert Team</h2>
          <p className="team-intro">
            Our diverse team of tax professionals, technology experts, and financial advisors 
            work together to deliver exceptional results for our clients.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">RS</div>
              </div>
              <h4>Rajesh Sharma</h4>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">
                15+ years in taxation and financial consulting. Expert in corporate tax strategy.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">PM</div>
              </div>
              <h4>Priya Mehta</h4>
              <p className="member-role">Head of Technology</p>
              <p className="member-bio">
                Tech visionary with expertise in AI and automation for financial processes.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">AK</div>
              </div>
              <h4>Ankit Kumar</h4>
              <p className="member-role">Senior Tax Consultant</p>
              <p className="member-bio">
                Specialist in GST, ITR, and compliance with deep industry knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose TaxEva?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h4>Advanced Technology</h4>
              <p>AI-powered solutions that streamline your tax processes</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👨‍💼</div>
              <h4>Expert Team</h4>
              <p>Certified professionals with years of industry experience</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h4>Comprehensive Solutions</h4>
              <p>End-to-end tax and financial services under one roof</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h4>Secure & Compliant</h4>
              <p>Bank-grade security with full regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Transform Your Tax Experience?</h2>
          <p>Join thousands of satisfied clients who trust TaxEva with their financial future.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started Today</button>
            <button className="btn-secondary">Schedule Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;