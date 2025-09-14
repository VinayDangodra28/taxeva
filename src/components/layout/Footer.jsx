import { Link } from 'react-router-dom';
import { Logo } from '../ui';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo 
              size="medium" 
              variant="glow" 
              textSize="large" 
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              Professional tax services and consultation to help you navigate complex tax requirements with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-fast">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-fast">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-fast">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-fast">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Tax Preparation</span>
              </li>
              <li>
                <span className="text-gray-400">Business Consulting</span>
              </li>
              <li>
                <span className="text-gray-400">Financial Planning</span>
              </li>
              <li>
                <span className="text-gray-400">Audit Support</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                📧 info@taxeva.com
              </li>
              <li className="text-gray-400">
                📞 (555) 123-4567
              </li>
              <li className="text-gray-400">
                📍 123 Business Ave, Suite 100
              </li>
              <li className="text-gray-400">
                City, State 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-gray-400 text-sm">
              © 2024 TaxEva. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-fast">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-fast">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;