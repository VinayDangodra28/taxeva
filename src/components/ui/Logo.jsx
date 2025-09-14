import React from 'react';
import LogoSvg from '../../assets/logo.svg';

const Logo = ({ 
  size = 'medium', 
  variant = 'default', 
  className = '', 
  showText = true,
  textSize = 'medium',
  href = '/',
  ...props 
}) => {
  const getSizeClasses = () => {
    const sizes = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16',
      xl: 'w-24 h-24'
    };
    return sizes[size] || sizes.medium;
  };

  const getTextSizeClasses = () => {
    const sizes = {
      small: 'text-lg',
      medium: 'text-xl',
      large: 'text-2xl',
      xl: 'text-3xl'
    };
    return sizes[textSize] || sizes.medium;
  };

  const getVariantClasses = () => {
    const variants = {
      default: '',
      glow: 'filter drop-shadow-[0_0_20px_rgba(0,196,90,0.3)]',
      'glow-strong': 'filter drop-shadow-[0_0_30px_rgba(0,196,90,0.5)]',
      mono: 'filter grayscale(1)'
    };
    return variants[variant] || variants.default;
  };

  const LogoContent = () => (
    <div className={`flex items-center gap-3 ${className}`} {...props}>
      <div className={`${getSizeClasses()} ${getVariantClasses()} transition-all duration-300 flex-shrink-0`}>
        <img
          src={LogoSvg}
          alt="TaxEva Logo"
          className="w-full h-full object-contain logoimg"
        />
      </div>
      {showText && (
        <span className={`${getTextSizeClasses()} font-bold text-white font-gradient ${
          variant === 'glow' || variant === 'glow-strong' ? 'text-glow' : ''
        }`}>
          Tax<span className="text-primary">Eva</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
        aria-label="TaxEva Home"
      >
        <LogoContent />
      </a>
    );
  }

  return <LogoContent />;
};

export default Logo;