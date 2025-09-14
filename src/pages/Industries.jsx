import { SEO } from '../components/ui';
import { useSEO } from '../hooks/useSEO';

const Industries = () => {
  const seoData = useSEO();
  
  return (
    <div>
      <SEO {...seoData} />
     
    </div>
  );
};

export default Industries;