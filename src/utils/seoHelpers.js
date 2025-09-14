import React from 'react';
import { SEO } from '../components/ui';
import { useSEO } from '../hooks/useSEO';

/**
 * Higher-Order Component that wraps pages with SEO functionality
 * @param {React.Component} WrappedComponent - The component to wrap
 * @param {Object} seoOptions - SEO configuration options
 * @returns {React.Component} Component with SEO functionality
 */
export const withSEO = (WrappedComponent, seoOptions = {}) => {
  const ComponentWithSEO = (props) => {
    const seoData = useSEO(seoOptions);
    
    return (
      <>
        <SEO {...seoData} />
        <WrappedComponent {...props} />
      </>
    );
  };
  
  // Set display name for debugging
  ComponentWithSEO.displayName = `withSEO(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return ComponentWithSEO;
};

/**
 * React Hook for dynamically updating page metadata
 * @param {Object} seoData - SEO data to apply
 * @param {Array} deps - Dependencies array for useEffect
 */
export const usePageSEO = (seoData, deps = []) => {
  const { Helmet } = require('react-helmet-async');
  
  React.useEffect(() => {
    // This effect can be used for additional SEO logic
    // such as analytics tracking, scroll position, etc.
  }, deps);
  
  return seoData;
};

/**
 * Component for adding dynamic meta tags based on content
 * @param {Object} props - Component props
 * @param {Array} props.metaTags - Array of meta tag objects
 * @param {Object} props.structuredData - Structured data object
 */
export const DynamicMeta = ({ metaTags = [], structuredData = null }) => {
  const { Helmet } = require('react-helmet-async');
  
  return (
    <Helmet>
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default withSEO;