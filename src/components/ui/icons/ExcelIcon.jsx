import React from 'react';

const ExcelIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Excel - Spreadsheet grid */}
    <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 8h18M3 12h18M3 16h18" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 4v16M11 4v16M15 4v16" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="5" cy="6" r="0.5" fill="currentColor"/>
    <circle cx="9" cy="6" r="0.5" fill="currentColor"/>
    <circle cx="13" cy="6" r="0.5" fill="currentColor"/>
  </svg>
);

export default ExcelIcon;