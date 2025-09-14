import { forwardRef } from 'react';

const Select = forwardRef(({ 
  label, 
  error, 
  required = false, 
  children,
  placeholder,
  className = '', 
  labelClassName = '', 
  selectClassName = '',
  id,
  ...props 
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  const selectClasses = [
    'form-input',
    error ? 'border-error' : '',
    selectClassName
  ].filter(Boolean).join(' ');

  return (
    <div className={`form-group ${className}`.trim()}>
      {label && (
        <label 
          htmlFor={selectId} 
          className={`form-label ${labelClassName}`.trim()}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        className={selectClasses}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {error && (
        <p className="text-error text-sm mt-2">{error}</p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;