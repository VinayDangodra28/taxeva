/**
 * Example demonstrating advanced SEO usage with React Helmet
 */

import React from 'react';
import { SEO } from '../components/ui';
import { useSEO, generateStructuredData } from '../hooks/useSEO';
import { withSEO, DynamicMeta } from '../utils/seoHelpers';
import { getPageSEO } from '../utils/seoConfig';

// Example 1: Basic page with SEO
const BasicPageWithSEO = () => {
  const seoData = useSEO({
    title: 'Custom Page Title',
    description: 'Custom page description for SEO',
    keywords: 'custom, page, seo, example'
  });

  return (
    <div>
      <SEO {...seoData} />
      <h1>Basic Page with SEO</h1>
      <p>This page has custom SEO metadata.</p>
    </div>
  );
};

// Example 2: Page with structured data
const PageWithStructuredData = () => {
  const seoData = useSEO();
  
  const serviceSchema = generateStructuredData('service', {
    serviceType: 'Tax Consultation',
    description: 'Professional tax consultation services',
    price: '$200'
  });

  return (
    <div>
      <SEO 
        {...seoData} 
        schema={serviceSchema}
      />
      <h1>Service Page with Structured Data</h1>
    </div>
  );
};

// Example 3: Using higher-order component
const SimplePageComponent = () => (
  <div>
    <h1>Simple Page</h1>
    <p>This page uses the withSEO HOC.</p>
  </div>
);

const PageWithHOC = withSEO(SimplePageComponent, {
  title: 'HOC Enhanced Page',
  description: 'Page enhanced with SEO HOC'
});

// Example 4: Dynamic meta tags based on content
const DynamicContentPage = ({ articleData }) => {
  const dynamicMetaTags = [
    { name: 'article:author', content: articleData?.author },
    { name: 'article:published_time', content: articleData?.publishDate },
    { property: 'og:article:author', content: articleData?.author }
  ].filter(tag => tag.content); // Remove tags with no content

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData?.title,
    author: {
      '@type': 'Person',
      name: articleData?.author
    },
    datePublished: articleData?.publishDate,
    description: articleData?.description
  };

  return (
    <div>
      <SEO 
        title={articleData?.title}
        description={articleData?.description}
        type="article"
      />
      <DynamicMeta 
        metaTags={dynamicMetaTags}
        structuredData={articleSchema}
      />
      <h1>{articleData?.title}</h1>
      <p>{articleData?.content}</p>
    </div>
  );
};

// Example 5: Using configuration-based SEO
const ConfigBasedPage = () => {
  const seoConfig = getPageSEO('home', {
    title: 'Custom Override Title' // Override specific fields
  });

  return (
    <div>
      <SEO {...seoConfig} />
      <h1>Configuration-Based SEO Page</h1>
    </div>
  );
};

// Export examples for reference
export {
  BasicPageWithSEO,
  PageWithStructuredData,
  PageWithHOC,
  DynamicContentPage,
  ConfigBasedPage
};