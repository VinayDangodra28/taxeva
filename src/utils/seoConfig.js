/**
 * SEO metadata configurations for different pages
 */

export const seoConfig = {
  site: {
    name: 'TaxEva',
    title: 'TaxEva - Professional Tax Services',
    description: 'Professional tax preparation, planning, and consultation services. Expert CPAs helping individuals and businesses with comprehensive tax solutions.',
    url: 'https://taxeva.com', // Update with your actual domain
    image: '/og-image.jpg',
    twitterHandle: '@taxeva', // Update with your Twitter handle
    facebookAppId: '', // Add your Facebook App ID if needed
  },
  
  defaultMeta: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TaxEva',
  },
  
  pages: {
    home: {
      title: 'Professional Tax Services You Can Trust',
      description: 'Expert tax preparation, planning, and consultation services. Certified professionals helping individuals and businesses navigate complex tax requirements with confidence.',
      keywords: 'tax services, tax preparation, tax planning, CPA services, professional tax help, business tax, individual tax returns',
      path: '/',
    },
    
    about: {
      title: 'About Our Expert Tax Team',
      description: 'Meet our experienced team of certified tax professionals. With over 15 years of experience, we provide personalized tax solutions for individuals and businesses.',
      keywords: 'tax experts, CPA team, tax professionals, certified accountants, tax experience, about taxeva',
      path: '/about',
    },
    
    solutions: {
      title: 'Comprehensive Tax & Financial Solutions',
      description: 'Complete range of tax and financial services including tax preparation, business consulting, bookkeeping, audit support, and financial planning.',
      keywords: 'tax solutions, tax services, business consulting, bookkeeping, audit support, financial planning, tax rates',
      path: '/solutions',
    },
    
    industries: {
      title: 'Industry-Specific Tax Solutions',
      description: 'Specialized tax services for various industries. Expert knowledge of industry-specific tax regulations, deductions, and compliance requirements.',
      keywords: 'industry tax services, specialized tax solutions, business tax by industry, sector-specific tax advice',
      path: '/industries',
    },
    
    contact: {
      title: 'Contact Our Tax Professionals',
      description: 'Get in touch with our expert tax team. Schedule a consultation for personalized tax preparation and planning services. Free initial consultation available.',
      keywords: 'contact tax professional, tax consultation, schedule appointment, tax help, free consultation',
      path: '/contact',
    },
  }
};

/**
 * Generate Open Graph image URL for different page types
 * @param {string} pageType - Type of page (home, about, contact, etc.)
 * @param {Object} customData - Custom data for dynamic OG images
 * @returns {string} Open Graph image URL
 */
export const generateOGImageUrl = (pageType, customData = {}) => {
  const baseUrl = seoConfig.site.url;
  
  // You can implement dynamic OG image generation here
  // For now, return static images based on page type
  const ogImages = {
    home: '/images/og-home.jpg',
    about: '/images/og-about.jpg',
    solutions: '/images/og-solutions.jpg',
    industries: '/images/og-industries.jpg',
    contact: '/images/og-contact.jpg',
    default: '/images/og-default.jpg'
  };
  
  return `${baseUrl}${ogImages[pageType] || ogImages.default}`;
};

/**
 * Get page-specific SEO data
 * @param {string} pageKey - Key for the page configuration
 * @param {Object} overrides - Override specific SEO values
 * @returns {Object} Complete SEO configuration
 */
export const getPageSEO = (pageKey, overrides = {}) => {
  const pageConfig = seoConfig.pages[pageKey] || {};
  const defaultConfig = seoConfig.defaultMeta;
  
  return {
    ...defaultConfig,
    ...pageConfig,
    ...overrides,
    image: generateOGImageUrl(pageKey),
    url: seoConfig.site.url + (pageConfig.path || ''),
  };
};

/**
 * Business information for structured data
 */
export const businessInfo = {
  name: 'TaxEva',
  legalName: 'TaxEva Professional Tax Services LLC',
  description: 'Professional tax preparation and consulting services',
  url: seoConfig.site.url,
  telephone: '+1-555-123-4567',
  email: 'info@taxeva.com',
  address: {
    streetAddress: '123 Business Avenue, Suite 100',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US'
  },
  geo: {
    latitude: '40.7128', // Update with actual coordinates
    longitude: '-74.0060'
  },
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Sa 10:00-16:00'
  ],
  priceRange: '$150-$500',
  paymentAccepted: ['Cash', 'Credit Card', 'Check', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  areaServed: {
    '@type': 'State',
    name: 'State' // Update with your actual service area
  }
};