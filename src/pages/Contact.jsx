import { useState } from 'react';
import { SEO } from '../components/ui';
import { useSEO, generateStructuredData } from '../hooks/useSEO';

const Contact = () => {
  const seoData = useSEO();
  
  // FAQ structured data for better SEO
  const faqSchema = generateStructuredData('faq', {
    faqs: [
      {
        question: 'When should I contact you about tax preparation?',
        answer: 'The earlier the better! While we accept clients throughout tax season, contacting us early ensures you have plenty of time to gather documents and receive personalized attention.'
      },
      {
        question: 'What documents do I need to bring?',
        answer: 'Common documents include W-2s, 1099s, receipts for deductions, previous year\'s tax return, and any relevant financial statements. We\'ll provide a complete checklist during your consultation.'
      },
      {
        question: 'Do you offer virtual consultations?',
        answer: 'Yes! We offer secure virtual consultations via video call, phone, or secure document sharing for your convenience and safety.'
      }
    ]
  });

  return (
    <div>
      <SEO 
        {...seoData}
        schema={faqSchema}
      />
      {/* Hero Section */}
     
    </div>
  );
};

export default Contact;