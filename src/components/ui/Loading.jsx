const Loading = ({ 
  size = 'base', 
  text = 'Loading...', 
  className = '',
  centerScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    base: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinnerClasses = [
    'spinner',
    sizeClasses[size]
  ].filter(Boolean).join(' ');

  const containerClasses = [
    'flex items-center gap-3',
    centerScreen ? 'justify-center min-h-screen' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div className={spinnerClasses} />
      {text && <span className="text-gray-600">{text}</span>}
    </div>
  );
};

export default Loading;