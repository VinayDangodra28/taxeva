import React from 'react';

const FinanceIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Finance - Growth chart with dollar sign */}
    <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2v4M10 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 18v4M10 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default FinanceIcon;