import React from 'react';

const AIIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* AI - Neural network/brain pattern */}
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 9l-1-1M15 9l1-1M9 15l-1 1M15 15l1 1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default AIIcon;