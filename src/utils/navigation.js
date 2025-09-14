/**
 * Navigation helper utilities
 */

export const navigationLinks = [
  { path: '/', label: 'Home', exact: true },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' }
];

export const footerLinks = {
  company: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ],
  services: [
    { label: 'Tax Preparation', href: '/services#tax-preparation' },
    { label: 'Business Consulting', href: '/services#business-consulting' },
    { label: 'Financial Planning', href: '/services#financial-planning' },
    { label: 'Audit Support', href: '/services#audit-support' }
  ],
  legal: [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' }
  ]
};

export const contactInfo = {
  email: 'info@taxeva.com',
  phone: '(555) 123-4567',
  address: {
    street: '123 Business Ave, Suite 100',
    city: 'City, State 12345'
  },
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    note: 'Extended hours available during tax season'
  }
};