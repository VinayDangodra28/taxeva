import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for managing SEO data based on the current route
 * @param {Object} pageData - Page-specific SEO data
 * @returns {Object} Complete SEO configuration
 */
export const useSEO = (pageData = {}) => {
  const location = useLocation();

  const defaultSEO = {
    title: '',
    description: 'Professional tax preparation, planning, and consultation services. Expert CPAs helping individuals and businesses with comprehensive tax solutions.',
    keywords: 'tax preparation, tax planning, CPA, tax consultant, business tax, individual tax, IRS audit, bookkeeping, financial consulting',
    author: 'TaxEva Professional Tax Services',
    image: '/og-image.jpg',
    type: 'website'
  };

  const routeSpecificSEO = useMemo(() => {
    const routeMap = {
      '/': {
        title: 'Professional Tax Services You Can Trust',
        description: 'Expert tax preparation, planning, and consultation services. Certified professionals helping individuals and businesses navigate complex tax requirements with confidence.',
        keywords: 'tax services, tax preparation, tax planning, CPA services, professional tax help, business tax, individual tax returns',
        type: 'website'
      },
      '/about': {
        title: 'About Our Expert Tax Team',
        description: 'Meet our experienced team of certified tax professionals. With over 15 years of experience, we provide personalized tax solutions for individuals and businesses.',
        keywords: 'tax experts, CPA team, tax professionals, certified accountants, tax experience, about taxeva',
        type: 'website'
      },
      '/services': {
        title: 'Comprehensive Tax & Financial Services',
        description: 'Complete range of tax and financial services including tax preparation, business consulting, bookkeeping, audit support, and financial planning.',
        keywords: 'tax services, tax preparation, business consulting, bookkeeping, audit support, financial planning, tax rates',
        type: 'website'
      },
      '/contact': {
        title: 'Contact Our Tax Professionals',
        description: 'Get in touch with our expert tax team. Schedule a consultation for personalized tax preparation and planning services. Free initial consultation available.',
        keywords: 'contact tax professional, tax consultation, schedule appointment, tax help, free consultation',
        type: 'website'
      },
      '/industries': {
        title: 'Industry-Specific Tax Solutions',
        description: 'Specialized tax services for various industries. Expert knowledge of industry-specific tax regulations, deductions, and compliance requirements.',
        keywords: 'industry tax services, specialized tax solutions, business tax by industry, sector-specific tax advice',
        type: 'website'
      }
    };

    return routeMap[location.pathname] || {};
  }, [location.pathname]);

  return {
    ...defaultSEO,
    ...routeSpecificSEO,
    ...pageData,
    url: location.pathname
  };
};

/**
 * Generate structured data (JSON-LD) for different page types
 */
export const generateStructuredData = (type, data = {}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TaxEva',
    description: 'Professional Tax Services',
    url: 'https://taxeva.com',
    telephone: '+1-555-123-4567',
    email: 'info@taxeva.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Business Avenue, Suite 100',
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US'
    },
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 10:00-16:00'
    ],
    priceRange: '$150-$500',
    serviceArea: {
      '@type': 'State',
      name: 'State'
    }
  };

  switch (type) {
    case 'organization':
      return baseData;

    case 'localBusiness':
      return {
        ...baseData,
        '@type': 'ProfessionalService',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127'
        }
      };

    case 'service':
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: data.serviceType || 'Tax Preparation',
        provider: baseData,
        description: data.description,
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'USD'
        }
      };

    case 'faq':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs?.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        })) || []
      };

    default:
      return baseData;
  }
};