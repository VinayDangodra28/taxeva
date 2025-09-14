import { forwardRef } from 'react';

const Input = forwardRef(({ 
  label, 
  error, 
  required = false, 
  className = '', 
  labelClassName = '', 
  inputClassName = '',
  id,
  ...props 
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const inputClasses = [
    'form-input',
    error ? 'border-error' : '',
    inputClassName
  ].filter(Boolean).join(' ');

  return (
    <div className={`form-group ${className}`.trim()}>
      {label && (
        <label 
          htmlFor={inputId} 
          className={`form-label ${labelClassName}`.trim()}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-error text-sm mt-2">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;