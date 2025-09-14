import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Solutions from '../pages/Solutions';
import Industries from '../pages/Industries';
import Contact from '../pages/Contact';

// Error page component
const ErrorPage = () => (
  <div className="container py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-8">
      Sorry, the page you're looking for doesn't exist.
    </p>
    <a href="/" className="btn btn-primary">
      Go Home
    </a>
  </div>
);

// Router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "Solutions", 
        element: <Solutions />
      },
      {
        path: "industries",
        element: <Industries />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // Additional routes for footer links
      {
        path: "privacy",
        element: (
          <div className="container py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-600">Privacy policy content coming soon...</p>
          </div>
        )
      },
      {
        path: "terms",
        element: (
          <div className="container py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-600">Terms of service content coming soon...</p>
          </div>
        )
      }
    ]
  }
]);

export default router;