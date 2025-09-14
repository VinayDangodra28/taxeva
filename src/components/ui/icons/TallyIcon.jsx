import React from 'react';

const TallyIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Tally - Ledger/Book with lines */}
    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default TallyIcon;