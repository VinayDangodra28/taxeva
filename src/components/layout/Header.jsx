import { Link } from 'react-router-dom';
import { Logo } from '../ui';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo size="medium" variant="glow" textSize="large" />

          {/* Desktop Navigation */}
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/solutions" className="nav-link">
              Solutions
            </Link>
            <Link to="/industries" className="nav-link">
              Industries
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;