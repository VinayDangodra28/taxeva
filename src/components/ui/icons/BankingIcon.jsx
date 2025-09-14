import React from 'react';

const BankingIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Banking - Bank building */}
    <path d="M2 20h20M12 2l10 6v2H2V8l10-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6 10v8M10 10v8M14 10v8M18 10v8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default BankingIcon;