const Card = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  headerClassName = '', 
  contentClassName = '',
  ...props 
}) => {
  const cardClasses = `card ${className}`.trim();
  
  return (
    <div className={cardClasses} {...props}>
      {(title || subtitle) && (
        <div className={`card-header ${headerClassName}`.trim()}>
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      <div className={`card-content ${contentClassName}`.trim()}>
        {children}
      </div>
    </div>
  );
};

export default Card;