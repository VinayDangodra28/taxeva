# Hero Banner Component Documentation

## Overview

The Hero Banner is a professional, sci-fi inspired dark mode banner for the TaxEva website. It features GSAP animations, particle effects, and sophisticated glow effects that align with the dark theme aesthetic.

## Features

### 🎨 Visual Design
- **Dark Mode Theme**: Strong black background with glowing elements
- **Brand Typography**: "TaxEva" with gradient text and glow effects
- **Tagline Highlight**: "Simplifi" with emphasized "fi" for Finance Intelligence
- **Sci-Fi Aesthetic**: Polished glow effects without being cheap or overdone

### ⚡ Animations (GSAP)
- **Entrance Animation**: Smooth fade-in and slide-up effects
- **Continuous Glow**: Breathing glow effect on background elements
- **Floating Particles**: Animated particles with different colors and timing
- **Mouse Parallax**: Interactive parallax effect based on mouse movement
- **Button Shine**: Shimmer effect on primary CTA button

### 🎯 Interactive Elements
- **Primary CTA**: "Get Started" with glow and hover effects
- **Secondary CTA**: "Explore Solutions" with glass morphism
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Proper focus states and keyboard navigation

## Component Structure

```jsx
<HeroBanner>
  ├── Background Elements
  │   ├── Gradient Glow (animated)
  │   └── Grid Pattern
  ├── Floating Particles (5 animated particles)
  ├── Main Content
  │   ├── Brand Name (TaxEva with gradient)
  │   ├── Tagline (Simplifi your Taxes)
  │   └── CTA Buttons
  └── Decorative Elements
      ├── Animated Lines
      └── Rotating Circles
</HeroBanner>
```

## Color Palette

### Brand Colors
- **Primary**: `#00d4ff` (Cyan blue)
- **Accent**: `#00ff88` (Green highlight for "fi")
- **Warning**: `#ff6b35` (Orange accent)

### Background
- **Primary**: `#0a0a0a` (Deep black)
- **Secondary**: `#1a1a1a` (Dark gray)
- **Glass**: `rgba(255, 255, 255, 0.05)` (Subtle transparency)

### Glow Effects
- **Primary Glow**: `rgba(0, 212, 255, 0.5)`
- **Accent Glow**: `rgba(0, 255, 136, 0.4)`
- **Soft Glow**: `rgba(255, 255, 255, 0.1)`

## Typography

### Brand Name: "TaxEva"
- **Font Size**: Clamp(3rem, 8vw, 8rem) - Responsive scaling
- **Font Weight**: 700 (Bold)
- **Effect**: Gradient text with glow shadow
- **Eva Highlight**: Special glow effect with underline

### Tagline: "Simplifi your Taxes"
- **Font Size**: Clamp(1.5rem, 4vw, 3rem)
- **Font Weight**: 300 (Light)
- **"fi" Highlight**: 
  - Color: Accent green (`#00ff88`)
  - Font Weight: 600
  - Italic styling with background glow

## Animations

### GSAP Timeline
```javascript
// Entrance sequence
tl.to(titleRef, { opacity: 1, y: 0, duration: 1 })
  .to(taglineRef, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
  .to(ctaRef, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
```

### Continuous Animations
- **Background Glow**: 3s scale and opacity cycle
- **Particles**: 6-10s floating with rotation
- **Decorative Circles**: 15-20s rotation
- **Mouse Parallax**: Real-time based on cursor position

## Responsive Breakpoints

### Desktop (1200px+)
- Full banner with all effects
- Large typography and spacing
- Complete particle system

### Tablet (768px - 1199px)
- Maintained visual hierarchy
- Adjusted typography scaling
- Reduced particle count

### Mobile (< 768px)
- Stacked CTA buttons
- Simplified decorative elements
- Optimized touch interactions

## Usage

### Basic Implementation
```jsx
import { HeroBanner } from '../components/ui';

const HomePage = () => (
  <div>
    <HeroBanner />
    {/* Other page content */}
  </div>
);
```

### Customization Options
The banner can be customized by modifying:
- CSS custom properties in `variables.css`
- Animation timing in the GSAP timeline
- Particle count and behavior
- Color schemes and glow effects

## Performance Considerations

### Optimizations
- **GSAP Context**: Proper cleanup prevents memory leaks
- **Event Listeners**: Removed on component unmount
- **CSS Transforms**: Hardware-accelerated animations
- **Debounced Effects**: Smooth performance on lower-end devices

### Loading Strategy
- Components load progressively
- Critical CSS inlined
- Non-critical animations deferred

## Browser Support

### Modern Browsers
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Features Used
- CSS Custom Properties
- CSS Gradients
- CSS Backdrop Filter
- GSAP 3.x
- ES6+ JavaScript

## Accessibility

### Features
- **Keyboard Navigation**: Full keyboard support for CTAs
- **Focus Indicators**: Visible focus states with glow
- **Reduced Motion**: Respects prefers-reduced-motion
- **Screen Readers**: Semantic HTML structure
- **Color Contrast**: WCAG AA compliant contrast ratios

### Motion Settings
```css
@media (prefers-reduced-motion: reduce) {
  .hero-banner * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## File Structure

```
src/
├── components/ui/
│   └── HeroBanner.jsx     # Main component
├── styles/
│   └── hero.css           # Banner-specific styles
└── pages/
    └── Home.jsx           # Implementation
```

## Dependencies

- **React**: 18+
- **GSAP**: 3.12+
- **React Router**: 6+ (for navigation links)

## Future Enhancements

### Planned Features
- [ ] Dynamic background based on time of day
- [ ] Interactive particle system responding to scroll
- [ ] Advanced WebGL effects for premium feel
- [ ] Voice interaction integration
- [ ] Micro-animations for enhanced UX

### Performance Improvements
- [ ] Intersection Observer for animation triggers
- [ ] WebGL particle system for better performance
- [ ] Lazy loading of non-critical animations
- [ ] Service Worker caching for assets