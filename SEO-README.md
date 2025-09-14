# React Helmet SEO Setup Documentation

## Overview

This project uses `react-helmet-async` to manage the document head and provide comprehensive SEO capabilities. The setup includes:

- Dynamic meta tags
- Open Graph and Twitter Card support
- JSON-LD structured data
- Route-based SEO configuration
- Customizable SEO components and hooks

## Installation

The required package is already installed:
```bash
npm install react-helmet-async --legacy-peer-deps
```

## Basic Usage

### 1. Using the SEO Component

```jsx
import { SEO } from '../components/ui';
import { useSEO } from '../hooks/useSEO';

const MyPage = () => {
  const seoData = useSEO({
    title: 'Custom Page Title',
    description: 'Custom page description',
    keywords: 'keyword1, keyword2, keyword3'
  });

  return (
    <div>
      <SEO {...seoData} />
      {/* Your page content */}
    </div>
  );
};
```

### 2. Using the useSEO Hook

The `useSEO` hook automatically provides route-based SEO data and allows overrides:

```jsx
import { useSEO } from '../hooks/useSEO';

const seoData = useSEO({
  title: 'Override Title',
  description: 'Override Description'
});
```

### 3. Using the withSEO Higher-Order Component

```jsx
import { withSEO } from '../utils/seoHelpers';

const PageComponent = () => <div>Content</div>;

export default withSEO(PageComponent, {
  title: 'Page Title',
  description: 'Page Description'
});
```

## Advanced Features

### Structured Data (JSON-LD)

Generate structured data for better search engine understanding:

```jsx
import { generateStructuredData } from '../hooks/useSEO';

const organizationSchema = generateStructuredData('organization');
const serviceSchema = generateStructuredData('service', {
  serviceType: 'Tax Preparation',
  description: 'Professional tax preparation services',
  price: '$150'
});

<SEO 
  title="Page Title"
  description="Page Description"
  schema={organizationSchema}
/>
```

### Dynamic Meta Tags

Add dynamic meta tags based on content:

```jsx
import { DynamicMeta } from '../utils/seoHelpers';

const dynamicTags = [
  { name: 'article:author', content: 'Author Name' },
  { property: 'og:article:published_time', content: '2025-01-01' }
];

<DynamicMeta metaTags={dynamicTags} />
```

### Configuration-Based SEO

Use predefined configurations from `seoConfig.js`:

```jsx
import { getPageSEO } from '../utils/seoConfig';

const seoConfig = getPageSEO('home', {
  title: 'Custom Override' // Override specific fields
});

<SEO {...seoConfig} />
```

## SEO Components and Hooks

### SEO Component Props

```jsx
<SEO
  title="Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  author="Author Name"
  image="/path/to/image.jpg"
  url="/current/page/path"
  type="website" // or "article", "product", etc.
  schema={structuredDataObject}
  customMeta={[
    { name: 'custom-meta', content: 'custom-value' }
  ]}
/>
```

### useSEO Hook

```jsx
const seoData = useSEO(overrides);
// Returns complete SEO configuration with route-based defaults
```

### generateStructuredData Function

Available types:
- `'organization'` - Company/organization info
- `'localBusiness'` - Local business with ratings
- `'service'` - Service offerings
- `'faq'` - FAQ pages with questions/answers

## File Structure

```
src/
├── components/ui/
│   └── SEO.jsx           # Main SEO component
├── hooks/
│   └── useSEO.js         # SEO hook and structured data generator
├── utils/
│   ├── seoConfig.js      # SEO configuration and business info
│   └── seoHelpers.js     # HOC and utility components
└── examples/
    └── SEOExamples.jsx   # Usage examples
```

## Configuration

### Global SEO Settings

Edit `src/utils/seoConfig.js` to update:
- Site information (name, URL, description)
- Default meta tags
- Business information for structured data
- Page-specific SEO configurations

### HTML Head Defaults

The main `index.html` includes:
- Default meta tags
- Google Fonts (Inter)
- Favicon configurations
- Theme color and viewport settings

## Best Practices

1. **Always include SEO component**: Add the SEO component to every page
2. **Unique titles and descriptions**: Each page should have unique metadata
3. **Structured data**: Include relevant structured data for better search results
4. **Open Graph images**: Provide appropriate images for social media sharing
5. **Mobile-friendly**: Ensure viewport and mobile meta tags are properly set
6. **Performance**: Use preconnect for external fonts and resources

## Testing SEO

### Browser DevTools
- Check the `<head>` section for proper meta tags
- Verify structured data in the console

### Online Tools
- [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Lighthouse
- Run Lighthouse audits for SEO scoring
- Check for missing meta descriptions, titles, etc.

## Troubleshooting

### React Helmet Not Working
- Ensure `HelmetProvider` wraps your app
- Check for JavaScript errors in console
- Verify components are properly imported

### Structured Data Issues
- Validate JSON-LD syntax
- Use Google's Structured Data Testing Tool
- Check for required properties in schemas

### Meta Tags Not Updating
- Ensure SEO component is rendered before content
- Check for conflicting meta tags
- Verify the useSEO hook is working correctly

## Example Implementation

See `src/examples/SEOExamples.jsx` for comprehensive usage examples covering:
- Basic SEO setup
- Structured data implementation
- Higher-order component usage
- Dynamic meta tags
- Configuration-based SEO