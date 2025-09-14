import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'base', 
  disabled = false, 
  loading = false, 
  className = '', 
  ...props 
}, ref) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  };
  const sizeClasses = {
    sm: 'btn-sm',
    base: '',
    lg: 'btn-lg'
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner mr-2" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;