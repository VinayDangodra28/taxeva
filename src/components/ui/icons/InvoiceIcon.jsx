import React from 'react';

const InvoiceIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Invoice - Document with lines and amount */}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 13h8M8 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default InvoiceIcon;