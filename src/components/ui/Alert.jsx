const Alert = ({ 
  type = 'info', 
  children, 
  className = '',
  onClose,
  ...props 
}) => {
  const typeClasses = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info'
  };

  const alertClasses = [
    'alert',
    typeClasses[type],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={alertClasses} {...props}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {children}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-current hover:opacity-75 transition-fast"
            aria-label="Close alert"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;