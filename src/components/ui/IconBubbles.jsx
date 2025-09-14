import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IconBubble from './IconBubble';
import { 
  TallyIcon, 
  ExcelIcon, 
  GSTIcon, 
  FinanceIcon, 
  AccountsIcon, 
  InvoiceIcon, 
  ITRIcon, 
  BankingIcon, 
  AIIcon 
} from './icons';

const IconBubbles = () => {
  const containerRef = useRef(null);

  const bubbleData = [
    { icon: TallyIcon, label: 'Tally Integration', position: { x: '12%', y: '20%' }, delay: 0.2 },
    { icon: ExcelIcon, label: 'Excel Reports', position: { x: '85%', y: '15%' }, delay: 0.4 },
    { icon: GSTIcon, label: 'GST Filing', position: { x: '22%', y: '75%' }, delay: 0.6 },
    { icon: FinanceIcon, label: 'Financial Analysis', position: { x: '88%', y: '68%' }, delay: 0.8 },
    { icon: AccountsIcon, label: 'Accounting', position: { x: '5%', y: '45%' }, delay: 1.0 },
    { icon: InvoiceIcon, label: 'Invoice Management', position: { x: '92%', y: '35%' }, delay: 1.2 },
    { icon: ITRIcon, label: 'Income Tax Returns', position: { x: '15%', y: '8%' }, delay: 1.4 },
    { icon: BankingIcon, label: 'Banking Solutions', position: { x: '78%', y: '82%' }, delay: 1.6 },
    { icon: AIIcon, label: 'AI-Powered Insights', position: { x: '35%', y: '88%' }, delay: 1.8 }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Global mouse parallax effect
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        // Apply subtle parallax to all bubbles
        const bubbles = container.querySelectorAll('.icon-bubble');
        bubbles.forEach((bubble, index) => {
          const intensity = (index + 1) * 0.5; // Varying intensity
          gsap.to(bubble, {
            x: `+=${xPercent * intensity}`,
            y: `+=${yPercent * intensity}`,
            duration: 1.5,
            ease: "power2.out"
          });
        });
      };

      // Throttle mouse move for performance
      let ticking = false;
      const throttledMouseMove = (e) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleMouseMove(e);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('mousemove', throttledMouseMove);

      return () => {
        window.removeEventListener('mousemove', throttledMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="icon-bubbles-container">
      {bubbleData.map((bubble, index) => (
        <IconBubble
          key={`bubble-${index}`}
          icon={bubble.icon}
          label={bubble.label}
          initialPosition={{
            x: bubble.position.x,
            y: bubble.position.y
          }}
          delay={bubble.delay}
          className={`bubble-${index}`}
        />
      ))}
    </div>
  );
};

export default IconBubbles;