import { Helmet } from 'react-helmet-async';

/**
 * SEO component for managing head metadata
 * @param {Object} props - SEO configuration
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords
 * @param {string} props.author - Page author
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.url - Canonical URL
 * @param {string} props.type - Open Graph type (website, article, etc.)
 * @param {Object} props.schema - JSON-LD structured data
 * @param {Array} props.customMeta - Array of custom meta tags
 */
const SEO = ({
  title,
  description,
  keywords,
  author = 'TaxEva Professional Tax Services',
  image = '/og-image.jpg',
  url,
  type = 'website',
  schema,
  customMeta = []
}) => {
  const siteTitle = 'TaxEva - Professional Tax Services';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = 'https://taxeva.com'; // Update with your actual domain
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Custom Meta Tags */}
      {customMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;