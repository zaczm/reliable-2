import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="sticky-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Reliable Recuperative Care" className="logo-img" />
              </Link>
            </div>
            <div className="contact-info">
              <a href="tel:6129984449" className="phone-link">
                📞 Call now to reserve a bed: 612-998-4449
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/admission" className="bold-link highlight-link">
                Admission and Referral
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/referral" className="bold-link highlight-link referral-link">
                Referral form
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}