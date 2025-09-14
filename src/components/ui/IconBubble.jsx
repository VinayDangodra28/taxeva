import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const IconBubble = ({ 
  icon: IconComponent, 
  label, 
  initialPosition, 
  className = "",
  delay = 0 
}) => {
  const bubbleRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    const icon = iconRef.current;
    
    if (!bubble || !icon) return;

    const ctx = gsap.context(() => {
      // Initial setup - use CSS positioning instead of transforms
      gsap.set(bubble, {
        left: initialPosition.x,
        top: initialPosition.y,
        opacity: 0,
        scale: 0.8
      });

      // Entrance animation
      gsap.to(bubble, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: delay,
        ease: "back.out(1.7)"
      });

      // Floating animation - use relative transforms for movement
      gsap.to(bubble, {
        y: -20,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });

      // Subtle rotation
      gsap.to(icon, {
        rotation: 5,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Mouse interaction
      const handleMouseEnter = () => {
        gsap.to(bubble, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(icon, {
          y: -2,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(bubble, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(icon, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      bubble.addEventListener('mouseenter', handleMouseEnter);
      bubble.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        bubble.removeEventListener('mouseenter', handleMouseEnter);
        bubble.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, bubbleRef);

    return () => ctx.revert();
  }, [initialPosition, delay]);

  return (
    <div 
      ref={bubbleRef}
      className={`icon-bubble ${className}`}
      title={label}
    >
      <div className="icon-bubble-inner">
        <div ref={iconRef} className="icon-bubble-icon">
          <IconComponent size={20} className="bubble-icon" />
        </div>
      </div>
    </div>
  );
};

export default IconBubble;