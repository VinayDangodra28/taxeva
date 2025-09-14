import { forwardRef } from 'react';

const Textarea = forwardRef(({ 
  label, 
  error, 
  required = false, 
  className = '', 
  labelClassName = '', 
  textareaClassName = '',
  id,
  rows = 4,
  ...props 
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const textareaClasses = [
    'form-input form-textarea',
    error ? 'border-error' : '',
    textareaClassName
  ].filter(Boolean).join(' ');

  return (
    <div className={`form-group ${className}`.trim()}>
      {label && (
        <label 
          htmlFor={textareaId} 
          className={`form-label ${labelClassName}`.trim()}
        >
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      {error && (
        <p className="text-error text-sm mt-2">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;