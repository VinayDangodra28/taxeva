import { SEO } from '../components/ui';
import { useSEO } from '../hooks/useSEO';

const Solutions = () => {
  const seoData = useSEO({
    title: 'Tax Solutions & Services',
    description: 'Comprehensive tax solutions for individuals and businesses. Professional tax preparation, planning, consulting, and specialized industry services.',
    keywords: 'tax solutions, tax services, business tax, individual tax, tax planning, tax preparation'
  });

  return (
    <div>
      <SEO {...seoData} />
     
    </div>
  );
};

export default Solutions;