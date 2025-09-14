import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import IconBubbles from './IconBubbles';

const HeroBanner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, taglineRef.current, ctaRef.current], {
        opacity: 0,
        y: 50
      });

      // Create timeline for entrance animation
      const tl = gsap.timeline({ delay: 0.5 });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate tagline
      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");

      // Animate CTA
      tl.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

      // Continuous glow animation
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Floating particles animation
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: -20,
            rotation: 360,
            duration: 8 + index * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
          });
        });
      }

      // Mouse move parallax effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(glowRef.current, {
          x: x * 0.5,
          y: y * 0.5,
          duration: 0.6,
          ease: "power2.out"
        });

        if (particles) {
          Array.from(particles).forEach((particle, index) => {
            gsap.to(particle, {
              x: x * (0.1 + index * 0.05),
              y: y * (0.1 + index * 0.05),
              duration: 0.8,
              ease: "power2.out"
            });
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="hero-banner">
      <div className="hero-container">
        {/* Background Elements */}
        <div className="hero-background">
          <div ref={glowRef} className="hero-glow"></div>
          <div className="hero-grid"></div>
        </div>

        {/* Floating Particles */}
        <div ref={particlesRef} className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

        {/* Interactive Icon Bubbles */}
        <IconBubbles />

        {/* Main Content */}
        <div className="hero-content">
          <div ref={titleRef} className="hero-title">
            <div className="hero-brand-container">
              {/* <Logo 
                size="xl" 
                variant="glow-strong" 
                showText={false} 
                className="hero-logo" 
                href={null}
              /> */}
              <span className="brand-name">
                Tax<span className="brand-highlight">Eva</span>
              </span>
            </div>
          </div>
          
          <div ref={taglineRef} className="hero-tagline">
            <span className="tagline-text">
              Simpli<span className="fi-highlight">fi</span> your Taxes
            </span>
            <div className="tagline-subtitle">
              Where Finance Intelligence meets Tax Excellence
            </div>
          </div>

          <div ref={ctaRef} className="hero-cta">
            <Link to="/contact" className="cta-primary">
              <span>Get Started</span>
              <div className="cta-glow"></div>
            </Link>
            <Link to="/solutions" className="cta-secondary">
              <span>Explore Solutions</span>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hero-decorations">
          <div className="deco-line deco-line-1"></div>
          <div className="deco-line deco-line-2"></div>
          <div className="deco-circle deco-circle-1"></div>
          <div className="deco-circle deco-circle-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;